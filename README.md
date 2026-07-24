# Morgan Bailey Limited — Corporate Website

A modern React + Vite front end for Morgan Bailey Limited, built from the
company's SRS and website-content executive summary.

## Stack
- React 18 + Vite
- React Router (client-side routing)
- Tailwind CSS
- A built-in FAQ chatbot (no external API key required)

## Getting started

```bash
npm install
npm run dev       # start local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Pages
- `/` — Home (hero, objective, services preview, testimonials, CTA)
- `/about` — About Us
- `/services` — All 9 services
- `/services/:id` — Individual service detail
- `/blog` — Blog & News listing
- `/blog/:id` — Individual article
- `/careers` — Open roles + application form
- `/contact` — Contact details, enquiry form, embedded Google Map
- `/request-a-quote` — Quote request form

## Content
All copy lives in `src/data/siteContent.js`, sourced from the provided
Executive Summary and SRS documents — edit that one file to update services,
testimonials, blog posts, careers, or contact details across the whole site.

## Chatbot
`src/components/Chatbot.jsx` is a self-contained assistant that answers from
the site's own content (services, contact, careers) — it works with zero
configuration. To connect it to a real AI model later:
1. Stand up a small backend endpoint (e.g. a serverless function) that calls
   the Anthropic API with your API key server-side (never expose a key in
   the browser).
2. Replace the `answerFor()` function in `Chatbot.jsx` with a `fetch()` call
   to that endpoint.

## Forms & the SMTP mail server
The **Contact Us**, **Request a Quote**, and **Careers** application forms
are all wired up — they submit to Vercel Serverless Functions in `/api`
(`/api/contact`, `/api/quote`, `/api/careers`) that all share **one**
Nodemailer SMTP connection, defined once in `/api/_lib/mailer.js` and
imported by all three. The Careers form also supports an optional CV
attachment (PDF/DOCX, up to 5MB).

Frontend and API live in the same project and deploy together as a single
Vercel deployment — the frontend calls `/api/contact` etc. as a relative
path, so there's no separate backend URL to configure and no CORS setup
needed (same origin).

### Environment variables
Copy `.env.example` to `.env` at the project root and fill in your SMTP
details:

```
SMTP_HOST=smtp.yourprovider.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-smtp-username
SMTP_PASS=your-smtp-password
MAIL_TO=morgan@morgan-baileyng.com
MAIL_FROM="Morgan Bailey Website" <no-reply@morgan-baileyng.com>
```

Any standard SMTP provider works here — your existing company mailbox
(Zoho, Google Workspace, Outlook/Microsoft 365), or a transactional service
like Resend, SendGrid, or Mailgun's SMTP endpoint. Get the host/port/user/
password from whichever one you choose. This one set of variables is what
all three forms use.

For production, add the exact same variables under your Vercel project's
**Settings → Environment Variables** — Vercel injects them into the `/api`
functions at runtime. `VITE_` prefixed vars are the only ones exposed to
the browser bundle; the `SMTP_*`/`MAIL_*` vars stay server-side only.

### Running everything locally
The `/api` functions only run through the Vercel CLI, not plain `vite dev`.
Two options:

```bash
# Recommended — one command, frontend + API together on one port
npx vercel dev
```

```bash
# Or, if you only need to work on the UI and don't need working forms:
npm run dev
```

Submit any of the three forms while running `vercel dev` and the email
should land in the `MAIL_TO` inbox, with reply-to set to the visitor's own
address so you can reply directly.

### Deploying
```bash
npx vercel        # preview deploy
npx vercel --prod # production deploy
```
Vercel auto-detects this as a Vite project and auto-detects everything in
`/api` as serverless functions — no extra config beyond setting the
Environment Variables above in the dashboard once.

## Notes on the SRS
The SRS's proposed stack includes a full JWT-protected admin portal for
managing blogs, careers listings, and enquiries with PostgreSQL storage.
Per your request, that admin portal is **not** part of this build — this
covers the public-facing site plus SMTP email delivery for Contact, Request
a Quote, and Careers.

## Brand
- `public/logo.png` — the official Morgan Bailey mark
- Colors and type tokens are defined in `tailwind.config.js`
# Morgan-Bailey
# Morgan_Bailey
# Morgan_Bailey
