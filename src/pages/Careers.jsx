import { useState } from "react";
import { careers } from "../data/siteContent";
import { submitFormData } from "../lib/api";

const initialForm = { name: "", email: "", phone: "", role: "", message: "" };

export default function Careers() {
  const [form, setForm] = useState(initialForm);
  const [cv, setCv] = useState(null);
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
      const data = new FormData();
      Object.entries(form).forEach(([key, value]) => data.append(key, value));
      if (cv) data.append("cv", cv);

      await submitFormData("/api/careers", data);
      setStatus("sent");
      setForm(initialForm);
      setCv(null);
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
          <p className="eyebrow mb-3">Careers</p>
          <h1 className="max-w-3xl text-4xl font-display font-bold leading-tight md:text-5xl">
            Build your career with Morgan Bailey.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate">
            {careers.intro}
          </p>
        </div>
      </section>

      <section className="border-y border-line bg-white/80">
        <div className="container-xl section-pad">
          <p className="eyebrow mb-6">Open roles</p>
          <div className="grid gap-6 md:grid-cols-3">
            {careers.openRoles.map((r) => (
              <div key={r.title} className="premium-card p-6">
                <h3 className="mb-1 text-lg font-display font-semibold">
                  {r.title}
                </h3>
                <p className="mb-3 font-mono text-xs text-brand">{r.type}</p>
                <p className="text-sm leading-relaxed text-slate">
                  {r.summary}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-2xl text-sm text-slate">{careers.note}</p>
        </div>
      </section>

      <section className="container-xl section-pad grid gap-12 md:grid-cols-2">
        <div>
          <p className="eyebrow mb-3">Apply now</p>
          <h2 className="mb-5 text-2xl font-display font-semibold leading-snug md:text-3xl">
            Submit your application.
          </h2>
          <p className="mb-4 leading-relaxed text-slate">
            Interested and qualified candidates should send in their Curriculum
            Vitae and application letter. Only qualified and shortlisted
            candidates will be invited for interview.
          </p>
          <p className="text-sm text-ink">
            Email:{" "}
            <a
              href={`mailto:${careers.applyEmail}`}
              className="focus-ring font-semibold text-brand"
            >
              {careers.applyEmail}
            </a>
          </p>
        </div>

        <div>
          {status === "sent" ? (
            <div className="surface-card bg-brand-50 p-8 text-center">
              <h3 className="mb-2 text-lg font-display font-semibold">
                Application received
              </h3>
              <p className="text-sm text-slate">
                Thank you - our team will review your details and reach out to
                shortlisted candidates.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="text-link mt-6"
              >
                Submit another application
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
                placeholder="Role you're applying for"
                value={form.role}
                onChange={update("role")}
                className="input-field"
              />
              <textarea
                placeholder="Tell us about yourself"
                rows={4}
                value={form.message}
                onChange={update("message")}
                className="input-field"
              />
              <label className="block text-sm font-semibold text-slate">
                Upload CV (PDF or DOCX, max 5MB)
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => setCv(e.target.files?.[0] || null)}
                  className="focus-ring mt-2 block w-full text-sm"
                />
              </label>

              {status === "error" && (
                <p className="text-sm text-red-600">{error}</p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-primary disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "sending" ? "Submitting..." : "Submit Application"}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
