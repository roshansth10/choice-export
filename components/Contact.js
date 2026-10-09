'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { FaInstagram, FaTiktok, FaFacebook, FaWhatsapp } from 'react-icons/fa';

const initialFormData = {
  name: '',
  email: '',
  phone: '',
  service: '',
  message: '',
  website: '',
};

const services = [
  'DHL Express',
  'UPS Worldwide',
  'FedEx Services',
  'DPD Delivery',
  'Depex Logistics',
  'EMS Express',
  'TNT Express',
  'Toll Logistics',
  'DTDC Courier',
  'GOG Logistics',
  'Professional Packing',
  'Not Sure - Need Advice',
];

function validateForm(data) {
  const errors = {};

  if (!data.name.trim()) errors.name = 'Please enter your name.';
  if (!data.email.trim()) {
    errors.email = 'Please enter your email address.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }
  if (data.phone.trim() && !/^(?=(?:\D*\d){7,15}\D*$)[+()\d\s.-]+$/.test(data.phone.trim())) {
    errors.phone = 'Please enter a valid phone number.';
  }
  if (!data.service) errors.service = 'Please select a service.';
  if (!data.message.trim()) errors.message = 'Please enter a message.';

  return errors;
}

export default function Contact() {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const modalRef = useRef(null);
  const submitButtonRef = useRef(null);
  const closeStatusModal = useCallback(() => {
    setSubmitStatus(null);
    requestAnimationFrame(() => submitButtonRef.current?.focus());
  }, []);

  useEffect(() => {
    if (!submitStatus) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    modalRef.current?.querySelector('[data-modal-close]')?.focus();

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeStatusModal();
        return;
      }

      if (event.key !== 'Tab' || !modalRef.current) return;
      const focusable = modalRef.current.querySelectorAll(
        'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])'
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [submitStatus, closeStatusModal]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
    setErrors((previous) => ({ ...previous, [name]: '' }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result.error || 'We could not send your message. Please try again.');
      }

      setFormData(initialFormData);
      setSubmitStatus({
        type: 'success',
        message: 'We have received your message and will respond within 2 hours.',
      });
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Something went wrong. Please try again or call us on +977-01-4957710',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Visit Our Office',
      details: [{ text: 'Nayabazar-16, Kathmandu, Nepal' }],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: 'fas fa-phone-alt',
      title: 'Call Us',
      details: [
        { text: '+977-01-4957710', href: 'tel:+977014957710' },
        { text: '+977-9841052081', href: 'tel:+9779841052081' },
        { text: '+977-9863466932', href: 'tel:+9779863466932' },
      ],
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: 'fas fa-envelope',
      title: 'Email Us',
      details: [
        {
          text: 'choiceinternationalexport@gmail.com',
          href: 'mailto:choiceinternationalexport@gmail.com',
        },
      ],
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: 'fas fa-clock',
      title: 'Business Hours',
      details: [{ text: 'Sun - Fri: 9:00 AM - 6:00 PM' }, { text: 'Saturday: 10:00 AM - 4:00 PM' }],
      color: 'from-orange-500 to-red-500',
    },
  ];

  const fieldsClass =
    'w-full min-h-11 px-3 sm:px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 dark:focus:ring-primary-800 transition-all outline-none text-base sm:text-sm text-gray-900 dark:text-white';

  return (
    <section id="contact" className="section-padding bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-r from-primary-50/30 dark:from-primary-900/30 to-accent-50/30 dark:to-accent-900/30 -z-10"></div>

      <div className="container-custom relative z-10">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle dark:text-gray-300">
            Ready to ship? Contact us for a free quote and expert consultation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          <div>
            <div className="contact-info-grid grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
              {contactInfo.map((info) => (
                <div key={info.title} className="card min-w-0">
                  <div className={`h-2 bg-gradient-to-r ${info.color}`}></div>
                  <div className="p-4 sm:p-6 min-w-0">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center mb-3 sm:mb-4 flex-shrink-0`}>
                      <i className={`${info.icon} text-white text-lg sm:text-xl`}></i>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">{info.title}</h3>
                    <ul className="space-y-1 min-w-0">
                      {info.details.map((detail) => (
                        <li key={detail.text} className="min-w-0 text-sm sm:text-base text-gray-600 dark:text-gray-300">
                          {detail.href ? (
                            <a
                              href={detail.href}
                              className={`max-w-full py-1 hover:text-primary-600 dark:hover:text-primary-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-500 ${
                                detail.href.startsWith('mailto:')
                                  ? 'block min-h-11 overflow-wrap-anywhere'
                                  : 'inline-flex min-h-11 items-center break-words'
                              }`}
                            >
                              {detail.href.startsWith('mailto:') ? (
                                <>
                                  {detail.text.slice(0, detail.text.lastIndexOf('@'))}
                                  <wbr />
                                  <span className="whitespace-nowrap">
                                    {detail.text.slice(detail.text.lastIndexOf('@'))}
                                  </span>
                                </>
                              ) : detail.text}
                            </a>
                          ) : (
                            detail.text
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="card">
              <div className="h-2 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
              <div className="p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">Connect With Us</h3>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  <a
                    href="https://www.facebook.com/share/1FqGXR4MUx/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-tr from-blue-500 to-blue-700 text-white flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <FaFacebook />
                  </a>
                  <a
                    href="https://www.instagram.com/choiceexport/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="https://wa.me/9863486932"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                    className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-tr from-green-400 to-emerald-600 text-white flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <FaWhatsapp />
                  </a>
                  <a
                    href="https://www.tiktok.com/@choiceexport?_r=1&_t=ZS-96HwO1s4qwM"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="TikTok"
                    className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-tr from-black via-gray-800 to-gray-900 text-white flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <FaTiktok />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="card min-w-0">
            <div className="h-2 bg-gradient-to-r from-primary-500 to-accent-500"></div>
            <div className="p-4 sm:p-8">
              <div className="mb-6 sm:mb-8">
                <h3 className="text-lg sm:text-2xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">
                  <i className="fas fa-paper-plane text-primary-500 mr-2 sm:mr-3"></i>
                  Send Quick Message
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">We typically respond within 2 hours</p>
              </div>

              {submitStatus?.type === 'error' && (
                <div
                  className="mb-4 sm:mb-6 p-3 sm:p-4 rounded-xl text-sm sm:text-base bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300"
                  role="alert"
                  aria-live="assertive"
                >
                  <i className="fas fa-exclamation-circle mr-2 sm:mr-3"></i>
                  {submitStatus.message}
                </div>
              )}

              <form noValidate onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
                  <label htmlFor="website">Leave this field empty</label>
                  <input
                    id="website"
                    type="text"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="min-w-0">
                    <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      <i className="far fa-user text-primary-500 mr-2"></i>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      maxLength={100}
                      autoComplete="name"
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      className={fieldsClass}
                      placeholder="Enter your name"
                    />
                    {errors.name && <p id="name-error" className="mt-1 text-sm text-red-600 dark:text-red-400" role="alert">{errors.name}</p>}
                  </div>
                  <div className="min-w-0">
                    <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      <i className="far fa-envelope text-primary-500 mr-2"></i>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      maxLength={254}
                      autoComplete="email"
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      className={fieldsClass}
                      placeholder="Enter your email"
                    />
                    {errors.email && <p id="email-error" className="mt-1 text-sm text-red-600 dark:text-red-400" role="alert">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="min-w-0">
                    <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      <i className="fas fa-phone text-primary-500 mr-2"></i>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      maxLength={40}
                      autoComplete="tel"
                      aria-invalid={Boolean(errors.phone)}
                      aria-describedby={errors.phone ? 'phone-error' : undefined}
                      className={fieldsClass}
                      placeholder="Enter your phone number"
                    />
                    {errors.phone && <p id="phone-error" className="mt-1 text-sm text-red-600 dark:text-red-400" role="alert">{errors.phone}</p>}
                  </div>
                  <div className="min-w-0">
                    <label htmlFor="service" className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      <i className="fas fa-box text-primary-500 mr-2"></i>
                      Service Needed *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      aria-invalid={Boolean(errors.service)}
                      aria-describedby={errors.service ? 'service-error' : undefined}
                      className={`${fieldsClass} appearance-none`}
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service.toLowerCase().replace(/\s+/g, '-')}>
                          {service}
                        </option>
                      ))}
                    </select>
                    {errors.service && <p id="service-error" className="mt-1 text-sm text-red-600 dark:text-red-400" role="alert">{errors.service}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    <i className="far fa-comment-dots text-primary-500 mr-2"></i>
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    maxLength={3000}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    className={`${fieldsClass} resize-y`}
                    placeholder="Describe your shipping needs..."
                  />
                  {errors.message && <p id="message-error" className="mt-1 text-sm text-red-600 dark:text-red-400" role="alert">{errors.message}</p>}
                </div>

                <button
                  ref={submitButtonRef}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full min-h-11 btn btn-primary py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold shadow-xl hover:shadow-2xl disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <i className="fas fa-spinner fa-spin mr-2 sm:mr-3" aria-hidden="true"></i>
                      Sending...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane mr-2 sm:mr-3" aria-hidden="true"></i>
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {submitStatus && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeStatusModal();
          }}
        >
          <div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-result-title"
            aria-describedby="contact-result-message"
            className="w-full max-w-lg max-h-[calc(100vh-2rem)] overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl dark:bg-gray-800 sm:p-8"
          >
            <div
              className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full ${
                submitStatus.type === 'success'
                  ? 'bg-green-100 text-green-600 dark:bg-green-900/40 dark:text-green-300'
                  : 'bg-red-100 text-red-600 dark:bg-red-900/40 dark:text-red-300'
              }`}
              aria-hidden="true"
            >
              <i className={`fas ${submitStatus.type === 'success' ? 'fa-check' : 'fa-exclamation'} text-2xl`}></i>
            </div>
            <h2 id="contact-result-title" className="mb-3 text-center text-xl font-bold text-gray-900 dark:text-white">
              {submitStatus.type === 'success' ? 'Thank you for submitting!' : 'Message not sent'}
            </h2>
            <p id="contact-result-message" className="text-center text-gray-600 dark:text-gray-300">
              {submitStatus.message}
            </p>
            <button
              type="button"
              data-modal-close
              onClick={closeStatusModal}
              className="mt-6 min-h-11 w-full rounded-xl bg-primary-600 px-5 py-3 font-semibold text-white transition-colors hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
