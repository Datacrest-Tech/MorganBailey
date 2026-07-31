import multer from "multer";
import {
  transporter,
  mailFrom,
  mailTo,
  isEmail,
  escapeHtml,
  isRateLimited,
} from "./_lib/mailer.js";

// This route handles a file upload (the CV), so it needs the raw
// multipart body rather than Vercel's automatic JSON/urlencoded parsing.
export const config = {
  api: { bodyParser: false },
};

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
  fileFilter: (_req, file, cb) => {
    const allowed = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    if (allowed.includes(file.mimetype)) return cb(null, true);
    cb(new Error("CV must be a PDF or Word document."));
  },
});

// multer is Express-style middleware ((req, res, next) => void); Vercel's
// req/res are plain Node http objects that multer is happy to work with
// directly, so we just call it and wrap it in a promise.
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) =>
      result instanceof Error ? reject(result) : resolve(result),
    );
  });
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method not allowed." });
  }
  if (isRateLimited(req)) {
    return res
      .status(429)
      .json({ ok: false, error: "Too many requests. Please try again later." });
  }

  try {
    await runMiddleware(req, res, upload.single("cv"));
  } catch (uploadErr) {
    return res
      .status(400)
      .json({
        ok: false,
        error: uploadErr.message || "Could not process the uploaded file.",
      });
  }

  try {
    const { name, email, phone, role, message } = req.body || {};

    if (!name || !email) {
      return res
        .status(400)
        .json({ ok: false, error: "Name and email are required." });
    }
    if (!isEmail(email)) {
      return res
        .status(400)
        .json({ ok: false, error: "Please provide a valid email address." });
    }

    const attachments = req.file
      ? [{ filename: req.file.originalname, content: req.file.buffer }]
      : [];

    await transporter.sendMail({
      from: mailFrom,
      to: mailTo,
      replyTo: email,
      subject: `[Careers] ${role || "General application"} — ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "-"}\nRole: ${role || "-"}\n\nMessage:\n${message || "-"}`,
      html: `
        <h2>New career application</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone || "-")}</p>
        <p><strong>Role applied for:</strong> ${escapeHtml(role || "-")}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message || "-").replace(/\n/g, "<br/>")}</p>
        ${req.file ? `<p><strong>CV attached:</strong> ${escapeHtml(req.file.originalname)}</p>` : "<p><em>No CV attached.</em></p>"}
      `,
      attachments,
    });

    res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Careers form error:", err.message || err);
    console.error("SMTP Debug:", {
      SMTP_HOST: process.env.SMTP_HOST ? "set" : "MISSING",
      SMTP_USER: process.env.SMTP_USER ? "set" : "MISSING",
      SMTP_PASS: process.env.SMTP_PASS ? "set" : "MISSING",
    });
    res
      .status(500)
      .json({
        ok: false,
        error: "We couldn't send your application. Please try again shortly.",
      });
  }
}
