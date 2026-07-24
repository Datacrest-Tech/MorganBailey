import { Link } from "react-router-dom";
import { services } from "../data/siteContent";

export default function Services() {
  return (
    <div className="page-shell">
      <section className="relative overflow-hidden">
        <div className="hero-grid pointer-events-none absolute inset-0" />
        <div className="container-xl relative pt-16 pb-12 md:pt-24">
          <p className="eyebrow mb-3">Services</p>
          <h1 className="max-w-3xl text-4xl font-display font-bold leading-tight md:text-5xl">
            Nine core services, one outsourcing partner.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate">
            Morgan Bailey is dedicated to providing a one-stop solution for all
            logistics support requirements - a single interface for all
            outsourced management support needs.
          </p>
        </div>
      </section>

      <section className="container-xl pb-20">
        <div className="grid gap-5">
          {services.map((s) => (
            <Link
              key={s.id}
              to={`/services/${s.id}`}
              className="focus-ring group premium-card grid gap-5 p-6 md:grid-cols-[8rem_4rem_1fr_auto] md:items-center md:p-8"
            >
              {s.image ? (
                <div className="media-frame h-20 w-full md:h-16 md:w-32">
                  <img src={s.image} alt={s.name} />
                </div>
              ) : (
                <div className="hidden h-16 w-32 rounded-md bg-brand-50 md:block" aria-hidden="true" />
              )}
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-brand-50 font-mono text-sm font-semibold text-brand">
                {s.code}
              </span>
              <div>
                <h2 className="text-xl font-display font-semibold transition-colors group-hover:text-brand md:text-2xl">
                  {s.name}
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate">
                  {s.summary}
                </p>
              </div>
              <span className="text-sm font-semibold text-ink/40 transition-all group-hover:translate-x-1 group-hover:text-brand">
                Explore -&gt;
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
