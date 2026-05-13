# Contact Form Setup Instructions

This project now includes a working contact form that can send emails directly from the frontend using EmailJS.

## How It Works

The contact form uses **EmailJS** to send emails without requiring a backend server. This is a frontend-only solution that works by:

1. Collecting form data (name, email, phone, service, message)
2. Sending the data to EmailJS service via their API
3. EmailJS delivers the email to your Gmail address

## Setup Required

To make the contact form work, you need to configure EmailJS:

### 1. Create EmailJS Account
- Go to [EmailJS.com](https://www.emailjs.com/)
- Sign up for a free account
- Verify your email address

### 2. Set Up Email Service
- In your EmailJS dashboard, go to "Email Services"
- Add a new service (choose Gmail)
- Connect your Gmail account by following the OAuth flow
- Verify the connection

### 3. Create Email Template
- Go to "Email Templates" in your dashboard
- Create a new template
- Use these variables in your template:
  - `{{from_name}}` - Sender's name
  - `{{from_email}}` - Sender's email
  - `{{phone}}` - Phone number
  - `{{service}}` - Service requested
  - `{{message}}` - Message content
  - `{{to_email}}` - Your email address

### 4. Update Configuration
Replace the placeholder values in `components/Contact.js`:

```javascript
const serviceId = 'YOUR_SERVICE_ID'; // Replace with your EmailJS service ID
const templateId = 'YOUR_TEMPLATE_ID'; // Replace with your EmailJS template ID
const publicKey = 'YOUR_PUBLIC_KEY'; // Replace with your EmailJS public key
```

You can find these values in your EmailJS dashboard:
- Service ID: In "Email Services" section
- Template ID: In "Email Templates" section
- Public Key: In "Account" > "API Keys" section

## Testing

1. Run the development server: `npm run dev`
2. Navigate to the contact form
3. Fill in the form and submit
4. Check your Gmail for the received message

## Benefits of This Solution

✅ **No Backend Required** - Works entirely from frontend
✅ **Free Tier Available** - EmailJS offers free plan with 200 emails/month
✅ **Secure** - No sensitive credentials in frontend code
✅ **Reliable** - Professional email delivery service
✅ **Easy Setup** - Simple configuration process

## Alternative Options

If you prefer not to use EmailJS, other frontend-only email services include:
- FormSubmit
- Formspree
- Netlify Forms
- Getform

However, EmailJS is recommended for its ease of use and Gmail integration.