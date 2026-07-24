import { useState } from "react";
import { company } from "../data/siteContent";
import { submitForm } from "../lib/api";

const initialForm = { name: "", email: "", phone: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [error, setError] = useState("");

  const mapQuery = encodeURIComponent(company.address);

  function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    try {
      await submitForm("/api/contact", form);
      setStatus("sent");
      setForm(initialForm);
    } catch (err) {
      setStatus("error");
      setError(err.message);
    }
  }

  return (
    <div className="page-shell">
      <section className="relative overflow-hidden">
        <div className="hero-grid pointer-events-none absolute inset-0" />
        <div className="container-xl relative pt-16 pb-12 md:pt-24">
          <p className="eyebrow mb-3">Contact us</p>
          <h1 className="max-w-3xl text-4xl font-display font-bold leading-tight md:text-5xl">
            Let's talk about your next project.
          </h1>
        </div>
      </section>

      <section className="container-xl grid gap-12 pb-20 md:grid-cols-12">
        <div className="space-y-5 md:col-span-5">
          <InfoBlock title="Address">{company.address}</InfoBlock>
          <InfoBlock title="Phone">
            {company.phones.map((p) => (
              <span key={p} className="block">
                {p}
              </span>
            ))}
          </InfoBlock>
          <InfoBlock title="Email">
            <a
              href={`mailto:${company.email}`}
              className="focus-ring font-semibold text-brand"
            >
              {company.email}
            </a>
          </InfoBlock>
          <InfoBlock title="Open hours">
            {company.hours.map((h) => (
              <span key={h.days} className="block">
                {h.days}: {h.time}
              </span>
            ))}
          </InfoBlock>
          <div className="surface-card overflow-hidden">
            <iframe
              title="Morgan Bailey location"
              width="100%"
              height="280"
              style={{ border: 0 }}
              loading="lazy"
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
            />
          </div>
        </div>

        <div className="md:col-span-7">
          {status === "sent" ? (
            <div className="surface-card bg-brand-50 p-10 text-center">
              <h3 className="mb-2 text-xl font-display font-semibold">
                Message sent
              </h3>
              <p className="text-slate">
                Thank you for reaching out - our team will respond shortly.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="text-link mt-6"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="surface-card space-y-4 p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  required
                  placeholder="Full name"
                  value={form.name}
                  onChange={update("name")}
                  className="input-field"
                />
                <input
                  required
                  type="email"
                  placeholder="Email address"
                  value={form.email}
                  onChange={update("email")}
                  className="input-field"
                />
              </div>
              <input
                placeholder="Phone number"
                value={form.phone}
                onChange={update("phone")}
                className="input-field"
              />
              <input
                placeholder="Subject"
                value={form.subject}
                onChange={update("subject")}
                className="input-field"
              />
              <textarea
                required
                placeholder="Your message"
                rows={6}
                value={form.message}
                onChange={update("message")}
                className="input-field"
              />

              {status === "error" && (
                <p className="text-sm text-red-600">{error}</p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-primary disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}

function InfoBlock({ title, children }) {
  return (
    <div className="premium-card p-5">
      <p className="eyebrow mb-2">{title}</p>
      <p className="leading-relaxed text-ink">{children}</p>
    </div>
  );
}
