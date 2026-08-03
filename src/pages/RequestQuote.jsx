import { useState } from "react";
import { services } from "../data/siteContent";
import { submitForm } from "../lib/api";
import { trackEvent, trackFormSubmission } from "../lib/analytics";

const initialForm = {
  name: "",
  company: "",
  email: "",
  phone: "",
  service: "",
  details: "",
};

export default function RequestQuote() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [error, setError] = useState("");

  function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    try {
      await submitForm("/api/quote", form);
      trackFormSubmission("Service Enquiry");
      trackEvent(
        "Business",
        "service_enquiry_submission",
        form.service || "Unspecified service"
      );
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
        <div className="container-xl relative max-w-3xl pt-16 pb-12 md:pt-24">
          <p className="eyebrow mb-3">Request a quote</p>
          <h1 className="text-4xl font-display font-bold leading-tight md:text-5xl">
            Tell us about your project.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate">
            Share a few details and our business development team will respond
            directly with a tailored proposal.
          </p>
        </div>
      </section>

      <section className="container-xl max-w-3xl pb-20">
        {status === "sent" ? (
          <div className="surface-card bg-brand-50 p-10 text-center">
            <h3 className="mb-2 text-xl font-display font-semibold">
              Request received
            </h3>
            <p className="text-slate">
              Thank you - a member of our business development team will be in
              touch shortly with next steps.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="text-link mt-6"
            >
              Submit another request
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="surface-card space-y-5 p-8">
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
                placeholder="Company name"
                value={form.company}
                onChange={update("company")}
                className="input-field"
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                required
                type="email"
                placeholder="Email address"
                value={form.email}
                onChange={update("email")}
                className="input-field"
              />
              <input
                placeholder="Phone number"
                value={form.phone}
                onChange={update("phone")}
                className="input-field"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-ink">
                Service of interest
              </label>
              <select
                required
                value={form.service}
                onChange={update("service")}
                className="input-field"
              >
                <option value="">Select a service</option>
                {services.map((s) => (
                  <option key={s.id} value={s.name}>
                    {s.name}
                  </option>
                ))}
              </select>
            </div>

            <textarea
              required
              placeholder="Describe your requirements"
              rows={6}
              value={form.details}
              onChange={update("details")}
              className="input-field"
            />

            {status === "error" && (
              <p className="text-sm text-red-600">{error}</p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="btn-brand disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "sending" ? "Sending..." : "Submit Request"}
            </button>
          </form>
        )}
      </section>
    </div>
  );
}
