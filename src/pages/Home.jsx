import { Link } from "react-router-dom";
import { useState } from "react";
import HeroCorporate from "../components/HeroSlideshow";
import heroLogistic from "../assets/hero-logistic.png";
import { services, testimonials } from "../data/siteContent";
import { trackButtonClick } from "../lib/analytics";

export default function Home() {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="page-shell">
      <HeroCorporate image={heroLogistic}>
        {/* Top Label */}
        <p className="text-brand uppercase font-mono text-sm font-semibold tracking-[0.35em]">
          OUTSOURCING / LOGISTICS / PROJECT MANAGEMENT
        </p>

        {/* Headline */}
        <h1 className="text-[clamp(36px,4vw,52px)] font-display font-extrabold leading-[1.02] tracking-[-0.03em] text-ink max-w-[560px]">
          We are great at outsourcing, logistics support &{" "}
          <span className="text-brand">project management.</span>
        </h1>

        {/* Description */}
        <p className="text-base md:text-lg text-slate max-w-[560px] leading-relaxed">
          Looking for quality support service providers?
          <br />
          Think Morgan Bailey.
        </p>

        {/* CTA + ISO Row */}
        <div className="flex flex-col gap-4 pt-4 sm:flex-row sm:items-center">
          <div className="flex items-center gap-4">
            {/* Compact ISO trust badge (non-CTA) */}
            <div className="inline-flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-3 py-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand text-xs font-semibold text-white">
                ISO
              </div>
              <div className="leading-tight">
                <div className="font-semibold text-sm text-ink">
                  ISO 9001:2000
                </div>
                <div className="text-xs text-slate">Certified</div>
              </div>
            </div>

            {/* CTA group: primary then secondary */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
              <Link
                to="/services"
                className="inline-flex justify-center items-center gap-2 rounded-xl bg-brand px-4 py-2.5 text-sm font-semibold text-white shadow-sm focus-ring hover:bg-brand-dark w-full sm:w-auto"
              >
                <span>Check Our Services</span>
                <span aria-hidden className="ml-1">
                  →
                </span>
              </Link>

              <Link
                to="/contact"
                onClick={() =>
                  trackButtonClick && trackButtonClick("Contact Us Today")
                }
                className="inline-flex justify-center items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-ink hover:bg-slate-50 w-full sm:w-auto"
              >
                <span>Contact Us Today</span>
                <span aria-hidden className="ml-1">
                  ↗
                </span>
              </Link>
            </div>
          </div>
        </div>
      </HeroCorporate>

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
