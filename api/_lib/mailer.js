// Shared across /api/contact, /api/quote and /api/careers so all three
// forms send through the exact same SMTP connection. Vercel loads the
// project's Environment Variables into process.env automatically — both
// in production and in `vercel dev` (reading .env / .env.local) — so no
// dotenv package or manual wiring is needed here.
import nodemailer from "nodemailer";

const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_SECURE, MAIL_TO, MAIL_FROM } =
  process.env;

if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !MAIL_TO) {
  console.warn(
    "[warn] SMTP is not fully configured. Set SMTP_HOST, SMTP_USER, SMTP_PASS and MAIL_TO in your Vercel Environment Variables (or .env for local `vercel dev`)."
  );
}

// Reused across invocations on a warm serverless instance instead of
// reconnecting on every request.
export const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: Number(SMTP_PORT) || 587,
  secure: SMTP_SECURE === "true", // true for port 465, false for 587/25
  auth: { user: SMTP_USER, pass: SMTP_PASS },
});

export const mailFrom = MAIL_FROM || SMTP_USER;
export const mailTo = MAIL_TO;

export function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value || "");
}

export function escapeHtml(str = "") {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// Minimal in-memory rate limiter — 10 submissions per 15 minutes per IP,
// shared by all three form endpoints. Best-effort: it resets on cold
// starts and isn't shared across regions, but stops casual spam/abuse
// without needing an external store for a small business site.
const hits = new Map();
const WINDOW_MS = 15 * 60 * 1000;
const MAX_HITS = 10;

export function isRateLimited(req) {
  const ip =
    req.headers["x-forwarded-for"]?.split(",")[0]?.trim() ||
    req.socket?.remoteAddress ||
    "unknown";
  const now = Date.now();
  const entry = hits.get(ip);

  if (!entry || now - entry.start > WINDOW_MS) {
    hits.set(ip, { start: now, count: 1 });
    return false;
  }
  entry.count += 1;
  return entry.count > MAX_HITS;
}

export function sendJson(res, status, body) {
  res.status(status).json(body);
}
