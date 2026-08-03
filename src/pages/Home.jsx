import { Link } from "react-router-dom";
import { useState } from "react";
import HeroSlideshow from "../components/HeroSlideshow";
import { services, testimonials } from "../data/siteContent";
import { trackButtonClick } from "../lib/analytics";

const heroSlides = [
  "/images/services/fleet-management.jpg",
  "/images/services/ground-support.jpg",
  "/images/services/storage-facilities.jpg",
  "/images/services/distribution-services.jpg",
];

export default function Home() {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="page-shell">
      <HeroSlideshow images={heroSlides} intervalMs={6000}>
        <div className="max-w-3xl">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.24em] text-brand">
            Outsourcing / Logistics / Project Management
          </p>
          <h1 className="max-w-3xl text-4xl font-display font-bold leading-snug tracking-tight text-white md:text-6xl">
            We are great at outsourcing, logistics support &amp;
            <span className="text-brand"> project management.</span>
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-white/80 md:text-lg">
            Looking for quality support service providers? Think Morgan Bailey.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              onClick={() => trackButtonClick("Contact Us")}
              className="btn-brand"
            >
              Contact Us Today <span aria-hidden="true">-&gt;</span>
            </Link>
            <Link
              to="/services"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-md border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_16px_35px_-24px_rgba(0,0,0,0.9)] backdrop-blur transition-all hover:-translate-y-0.5 hover:border-brand/70 hover:bg-white/15"
            >
              Check Our Services
            </Link>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 py-2 pl-2 pr-4 text-xs font-semibold text-white/80 backdrop-blur">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand text-[0.65rem] font-bold text-white">
                ISO
              </span>
              ISO 9001:2000 Certified
            </span>
          </div>
        </div>
      </HeroSlideshow>

      <section className="container-xl section-pad">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow mb-3">Objective</p>
            <h2 className="text-2xl font-display font-semibold leading-snug md:text-3xl">
              Holistic logistics management, built on international standards.
            </h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 md:col-span-8">
            <div className="premium-card p-6">
              <h3 className="mb-2 text-lg font-display font-semibold">
                Tailor-made for your needs
              </h3>
              <p className="text-sm leading-relaxed text-slate">
                Logistics is the art and science of strategically managing the
                flow of goods, energy, information and other resources of an
                organisation to enhance its profitability. Little marketing or
                manufacturing happens without logistical support.
              </p>
            </div>
            <div className="premium-card p-6">
              <h3 className="mb-2 text-lg font-display font-semibold">
                We plan effectively
              </h3>
              <p className="text-sm leading-relaxed text-slate">
                We prepare logistics management plans and implement and control
                the efficient flow of goods, services, and information between
                the point of origin and the point of consumption, to meet our
                clients' needs.
              </p>
            </div>
            <div className="premium-card p-6 sm:col-span-2">
              <h3 className="mb-2 text-lg font-display font-semibold">
                A wide range of services
              </h3>
              <p className="text-sm leading-relaxed text-slate">
                From procurement of goods and services through a competitive bid
                process, to packaging, transportation and delivery, itinerary
                and protocol services, airport meet-and-greet, car hire and
                accommodation - we cover it end to end.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-white/80">
        <div className="container-xl section-pad">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow mb-3">What we do</p>
              <h2 className="text-2xl font-display font-semibold md:text-3xl">
                A one-stop shop for outsourced operations.
              </h2>
            </div>
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => setShowAll((s) => !s)}
                className="text-link"
              >
                {showAll ? "Hide services" : "All services"}{" "}
                <span aria-hidden="true">-&gt;</span>
              </button>
              <Link to="/services" className="text-slate text-sm">
                Open services page
              </Link>
            </div>
          </div>

          {showAll ? (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <Link
                  key={s.id}
                  to={`/services/${s.id}`}
                  className="focus-ring group premium-card p-7"
                >
                  <div className="flex items-start gap-4">
                    <div className="overflow-hidden rounded-full bg-brand-50 p-1 shadow-inner shadow-black/10">
                      <img
                        src={s.image || "/logo.png"}
                        alt={s.name}
                        className="h-16 w-16 rounded-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="mt-0 mb-3 text-xl md:text-2xl font-display font-semibold transition-colors group-hover:text-brand">
                        {s.name}
                      </h3>
                      <p className="text-base leading-relaxed text-slate">
                        {s.summary}
                      </p>
                      <span className="mt-5 inline-flex text-sm font-semibold text-ink/50 transition-colors group-hover:text-brand">
                        Explore{" "}
                        <span aria-hidden="true" className="ml-2">
                          -&gt;
                        </span>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.slice(0, 3).map((s) => (
                <Link
                  key={s.id}
                  to={`/services/${s.id}`}
                  className="focus-ring group premium-card p-7"
                >
                  <div className="flex items-start gap-4">
                    <div className="overflow-hidden rounded-full bg-brand-50 p-1 shadow-inner shadow-black/10">
                      <img
                        src={s.image || "/logo.png"}
                        alt={s.name}
                        className="h-16 w-16 rounded-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="mt-0 mb-3 text-xl md:text-2xl font-display font-semibold transition-colors group-hover:text-brand">
                        {s.name}
                      </h3>
                      <p className="text-base leading-relaxed text-slate">
                        {s.summary}
                      </p>
                      <span className="mt-5 inline-flex text-sm font-semibold text-ink/50 transition-colors group-hover:text-brand">
                        Explore{" "}
                        <span aria-hidden="true" className="ml-2">
                          -&gt;
                        </span>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="container-xl section-pad grid gap-8 md:grid-cols-12">
        <div className="premium-card p-8 md:col-span-6">
          <p className="eyebrow mb-3">Who we are</p>
          <h2 className="mb-5 text-2xl font-display font-semibold leading-snug md:text-3xl">
            An ISO 9001:2000 certified outsourcing company.
          </h2>
          <p className="leading-relaxed text-slate">
            Morgan Bailey is an outsourcing services provider in logistics
            support services and project management. We design, implement and
            execute functional solutions for both local and international needs,
            currently directing our professional services at helping clients
            optimise their business operations.
          </p>
          <p className="mt-4 leading-relaxed text-slate">
            Our one-stop shop philosophy is unique and allows us to provide
            effective outsourced solutions most effectively in the marketplace.
          </p>
        </div>
        <div className="premium-card p-8 md:col-span-6">
          <p className="eyebrow mb-3">What we do</p>
          <h2 className="mb-5 text-2xl font-display font-semibold leading-snug md:text-3xl">
            A turnkey company for products and services.
          </h2>
          <p className="leading-relaxed text-slate">
            We have incorporated the infrastructure necessary to solve the most
            demanding client challenges - from strategy through execution - so
            our partners can focus on their core business.
          </p>
          <Link to="/about" className="text-link mt-6">
            More about Morgan Bailey <span aria-hidden="true">-&gt;</span>
          </Link>
        </div>
      </section>

      <section className="dark-band text-white">
        <div className="container-xl section-pad">
          <p className="eyebrow mb-3">Testimonials</p>
          <h2 className="mb-10 max-w-xl text-2xl font-display font-semibold md:text-3xl">
            Our promise is value in every project.
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {testimonials.map((t) => (
              <blockquote
                key={t.name}
                className="rounded-md border border-white/10 bg-white/[0.04] p-7"
              >
                <p className="leading-relaxed text-white/80 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <cite className="mt-4 block font-mono text-sm not-italic text-white/50">
                  - {t.name}
                </cite>
              </blockquote>
            ))}
          </div>
          <p className="mt-12 max-w-2xl text-sm text-white/60">
            Our promise as a service provider is to ensure value into every
            project while delivering professional expertise, exceptional
            service, and quality customer care.
          </p>
        </div>
      </section>

      <section className="container-xl section-pad">
        <div className="surface-card p-8 text-center md:p-12">
          <h2 className="mx-auto max-w-2xl text-3xl font-display font-semibold leading-snug md:text-4xl">
            Looking for quality support service providers?
          </h2>
          <p className="mt-2 text-xl font-display font-semibold text-brand">
            Think Morgan Bailey.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/request-a-quote"
              onClick={() => trackButtonClick("Schedule Consultation")}
              className="btn-brand"
            >
              Request a Quote <span aria-hidden="true">-&gt;</span>
            </Link>
            <Link
              to="/contact"
              onClick={() => trackButtonClick("Contact Us")}
              className="btn-secondary"
            >
              Talk to Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
