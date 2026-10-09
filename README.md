
# Choice International Export

## Contact email setup

The contact form sends mail from the server using Gmail SMTP. Copy `.env.example` to `.env.local` and set:

- `GMAIL_USER`: the Gmail account used to send contact messages.
- `GMAIL_APP_PASSWORD`: an App Password for that account (not its regular password). Enable 2-Step Verification on the Google account, then create an App Password in Google Account → Security → 2-Step Verification → App passwords. Enter the generated password without spaces.
- `CONTACT_TO`: destination inbox for inquiries (defaults to `choiceinternationalexport@gmail.com` if left empty).

Never commit `.env.local` or add these values to browser-exposed `NEXT_PUBLIC_*` variables. The environment file is ignored by Git.

For local testing, run `npm run dev` after configuring `.env.local`, submit the contact form, and confirm delivery in the destination inbox. Without Gmail credentials the API returns a configuration error; SMTP delivery cannot be verified.

For deployment, add the same variables as encrypted/server-only environment variables in the hosting provider's project settings, then redeploy. The API needs a Node.js runtime and outbound SMTP access to `smtp.gmail.com` on port 465. Send a live test message after deploying and confirm receipt and Reply-To behavior.

In Google Account, turn on 2-Step Verification, then open **Security → 2-Step Verification → App passwords**, create an app password, and put its generated value in `GMAIL_APP_PASSWORD`. In Vercel, add `GMAIL_USER`, `GMAIL_APP_PASSWORD`, and optionally `CONTACT_TO` under **Project Settings → Environment Variables** for the deployment environments you use; leave `CONTACT_TO` unset to use the default inbox above, then redeploy. To test, submit a message using an address you can access, confirm it arrives at the destination, and reply to it to verify Reply-To points to the visitor's address.

The rate limit is an in-memory, per-process safeguard. On serverless or multi-instance hosting it is best-effort and does not share counts between instances; use a shared rate-limit store if you need a strict cross-instance limit.

## Development

Install dependencies with `npm install`, then run `npm run dev`. Use `npm run lint` and `npm run build` to check the application.
