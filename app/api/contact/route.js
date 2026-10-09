import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 10 * 60 * 1000;
const MAX_BODY_BYTES = 8192;
const requestsByIp = new Map();
const serviceNames = new Map([
  ['dhl-express', 'DHL Express'],
  ['ups-worldwide', 'UPS Worldwide'],
  ['fedex-services', 'FedEx Services'],
  ['dpd-delivery', 'DPD Delivery'],
  ['depex-logistics', 'Depex Logistics'],
  ['ems-express', 'EMS Express'],
  ['tnt-express', 'TNT Express'],
  ['toll-logistics', 'Toll Logistics'],
  ['dtdc-courier', 'DTDC Courier'],
  ['gog-logistics', 'GOG Logistics'],
  ['professional-packing', 'Professional Packing'],
  ['not-sure---need-advice', 'Not Sure - Need Advice'],
]);

function jsonResponse(body, status) {
  return Response.json(body, {
    status,
    headers: { 'Cache-Control': 'no-store' },
  });
}

function sanitizeText(value, preserveLines = false) {
  if (typeof value !== 'string') return '';
  const allowedControls = preserveLines ? /[^\P{Cc}\n\t]/gu : /\p{Cc}/gu;
  return value.replace(/<[^>]*>/g, '').replace(allowedControls, '').trim();
}

async function readBoundedJson(request) {
  const declaredLength = Number(request.headers.get('content-length') || 0);
  if (declaredLength > MAX_BODY_BYTES) throw new RangeError('body-too-large');

  const reader = request.body?.getReader();
  if (!reader) throw new SyntaxError('invalid-json');

  const chunks = [];
  let length = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    length += value.byteLength;
    if (length > MAX_BODY_BYTES) {
      await reader.cancel();
      throw new RangeError('body-too-large');
    }
    chunks.push(value);
  }

  const bytes = new Uint8Array(length);
  let offset = 0;
  for (const chunk of chunks) {
    bytes.set(chunk, offset);
    offset += chunk.byteLength;
  }
  return JSON.parse(new TextDecoder().decode(bytes));
}

function checkRateLimit(ip, now) {
  for (const [key, entry] of requestsByIp) {
    if (now - entry.startedAt >= RATE_WINDOW_MS) requestsByIp.delete(key);
  }

  if (requestsByIp.size > 10_000) {
    const oldestKey = requestsByIp.keys().next().value;
    if (oldestKey) requestsByIp.delete(oldestKey);
  }

  const entry = requestsByIp.get(ip);
  if (!entry || now - entry.startedAt >= RATE_WINDOW_MS) {
    requestsByIp.set(ip, { startedAt: now, count: 1 });
    return false;
  }
  if (entry.count >= RATE_LIMIT) return true;
  entry.count += 1;
  return false;
}

export async function POST(request) {
  const forwardedFor = request.headers.get('x-forwarded-for');
  const ip = (forwardedFor?.split(',')[0] || request.headers.get('x-real-ip') || 'unknown').trim();
  const now = Date.now();

  if (checkRateLimit(ip, now)) {
    return jsonResponse({ error: 'Too many messages. Please wait a few minutes and try again.' }, 429);
  }

  let data;
  try {
    data = await readBoundedJson(request);
  } catch (error) {
    if (error instanceof RangeError) {
      return jsonResponse({ error: 'The submitted message is too large.' }, 400);
    }
    return jsonResponse({ error: 'Please check the form and try again.' }, 400);
  }

  if (!data || typeof data !== 'object' || Array.isArray(data)) {
    return jsonResponse({ error: 'Please check the form and try again.' }, 400);
  }

  if (typeof data.website === 'string' && data.website.trim()) {
    return jsonResponse({ ok: true }, 200);
  }

  const name = sanitizeText(data.name).replace(/\s+/g, ' ');
  const email = sanitizeText(data.email).replace(/[\r\n]/g, '');
  const phone = sanitizeText(data.phone).replace(/[\r\n]/g, '');
  const message = sanitizeText(data.message, true);
  const service = typeof data.service === 'string' ? serviceNames.get(data.service) : null;

  if (
    !name ||
    name.length > 100 ||
    !email ||
    email.length > 254 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    phone.length > 40 ||
    (phone && !/^[+()\d\s.-]+$/.test(phone)) ||
    !service ||
    !message ||
    message.length > 3000
  ) {
    return jsonResponse({ error: 'Please check your details and try again.' }, 400);
  }

  const user = process.env.GMAIL_USER;
  const password = process.env.GMAIL_APP_PASSWORD?.replace(/\s/g, '');
  const recipient = process.env.CONTACT_TO || 'choiceinternationalexport@gmail.com';
  if (!user || !password || !recipient) {
    return jsonResponse({ error: 'The contact service is not configured yet. Please contact us by phone or email.' }, 500);
  }

  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: { user, pass: password },
      connectionTimeout: 10_000,
      greetingTimeout: 10_000,
      socketTimeout: 15_000,
    });

    await transporter.sendMail({
      from: user,
      to: recipient,
      replyTo: email,
      subject: `New inquiry from ${name} - ${service}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || 'Not provided'}`,
        `Service: ${service}`,
        '',
        'Message:',
        message,
      ].join('\n'),
    });

    return jsonResponse({ ok: true }, 200);
  } catch {
    return jsonResponse({ error: 'We could not send your message right now. Please try again later.' }, 500);
  }
}
