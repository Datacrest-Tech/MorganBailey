import { transporter, mailFrom, mailTo, isEmail, escapeHtml, isRateLimited } from "./_lib/mailer.js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method not allowed." });
  }
  if (isRateLimited(req)) {
    return res.status(429).json({ ok: false, error: "Too many requests. Please try again later." });
  }

  try {
    const { name, company, email, phone, service, details } = req.body || {};

    if (!name || !company || !email || !service || !details) {
      return res.status(400).json({ ok: false, error: "Please complete all required fields." });
    }
    if (!isEmail(email)) {
      return res.status(400).json({ ok: false, error: "Please provide a valid email address." });
    }

    await transporter.sendMail({
      from: mailFrom,
      to: mailTo,
      replyTo: email,
      subject: `[Quote Request] ${service} — ${company}`,
      text: `Name: ${name}\nCompany: ${company}\nEmail: ${email}\nPhone: ${phone || "-"}\nService: ${service}\n\nDetails:\n${details}`,
      html: `
        <h2>New quote request</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Company:</strong> ${escapeHtml(company)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone || "-")}</p>
        <p><strong>Service of interest:</strong> ${escapeHtml(service)}</p>
        <p><strong>Details:</strong></p>
        <p>${escapeHtml(details).replace(/\n/g, "<br/>")}</p>
      `,
    });

    res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Quote request error:", err);
    res.status(500).json({ ok: false, error: "We couldn't send your request. Please try again shortly." });
  }
}
