import {
  transporter,
  mailFrom,
  mailTo,
  isEmail,
  escapeHtml,
  isRateLimited,
} from "./_lib/mailer.js";

export default async function handler(req, res) {
  console.log("[CONTACT] Request received:", {
    method: req.method,
    body: req.body,
  });
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method not allowed." });
  }
  if (isRateLimited(req)) {
    return res
      .status(429)
      .json({ ok: false, error: "Too many requests. Please try again later." });
  }

  try {
    const { name, email, phone, subject, message } = req.body || {};

    if (!name || !email || !message) {
      return res
        .status(400)
        .json({ ok: false, error: "Name, email and message are required." });
    }
    if (!isEmail(email)) {
      return res
        .status(400)
        .json({ ok: false, error: "Please provide a valid email address." });
    }

    await transporter.sendMail({
      from: mailFrom,
      to: mailTo,
      replyTo: email,
      subject: `[Website Contact] ${subject || "New enquiry"} — ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "-"}\nSubject: ${subject || "-"}\n\nMessage:\n${message}`,
      html: `
        <h2>New contact form enquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone || "-")}</p>
        <p><strong>Subject:</strong> ${escapeHtml(subject || "-")}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
      `,
    });

    res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err.message || err);
    console.error("SMTP Debug:", {
      SMTP_HOST: process.env.SMTP_HOST ? "set" : "MISSING",
      SMTP_USER: process.env.SMTP_USER ? "set" : "MISSING",
      SMTP_PASS: process.env.SMTP_PASS ? "set" : "MISSING",
    });
    res.status(500).json({
      ok: false,
      error: "We couldn't send your message. Please try again shortly.",
    });
  }
}
