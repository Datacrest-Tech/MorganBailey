import { useParams, Link, Navigate } from "react-router-dom";
import { services } from "../data/siteContent";
import { trackButtonClick } from "../lib/analytics";

export default function ServiceDetail() {
  const { id } = useParams();
  const index = services.findIndex((s) => s.id === id);
  const service = services[index];

  if (!service) return <Navigate to="/services" replace />;

  const next = services[(index + 1) % services.length];

  return (
    <div className="page-shell">
      <section className="relative overflow-hidden">
        <div className="hero-grid pointer-events-none absolute inset-0" />
        <div className="container-xl relative pt-16 pb-10 md:pt-24">
          <Link to="/services" className="text-link">
            &lt;- All services
          </Link>
          <p className="eyebrow mt-6 mb-3">Service {service.code}</p>
          <h1 className="max-w-3xl text-4xl font-display font-bold leading-tight md:text-5xl">
            {service.name}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate">
            {service.description}
          </p>
          {service.image && (
            <div className="media-frame mt-10 h-64 w-full shadow-[0_30px_60px_-30px_rgba(16,21,28,0.45)] md:h-96">
              <img src={service.image} alt={service.name} />
            </div>
          )}
        </div>
      </section>

      <section className="border-y border-line bg-white/80">
        <div className="container-xl section-pad">
          <p className="eyebrow mb-6">What's included</p>
          <ul className="grid gap-4 sm:grid-cols-2">
            {service.points.map((p) => (
              <li
                key={p}
                className="flex gap-3 rounded-md border border-line bg-white/80 p-4 text-sm leading-relaxed text-ink/85"
              >
                <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-brand" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-xl section-pad">
        <div className="surface-card flex flex-wrap items-center justify-between gap-6 p-8">
          <div>
            <p className="eyebrow mb-2">Next</p>
            <Link
              to={`/services/${next.id}`}
              className="focus-ring text-2xl font-display font-semibold transition-colors hover:text-brand"
            >
              {next.name} -&gt;
            </Link>
          </div>
          <Link
            to="/request-a-quote"
            onClick={() => trackButtonClick("Schedule Consultation")}
            className="btn-primary"
          >
            Request this service
          </Link>
        </div>
      </section>
    </div>
  );
}
