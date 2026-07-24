import { Link } from "react-router-dom";
import FlowLine from "../components/FlowLine";
import { services, testimonials } from "../data/siteContent";
import logoMark from "../assets/logo-transparent.png";

const metrics = [
  { value: "09", label: "Core service lines" },
  { value: "ISO", label: "Quality-led operations" },
  { value: "360", label: "End-to-end support" },
];

export default function Home() {
  return (
    <div className="page-shell">
      <section className="relative overflow-hidden">
        <div className="hero-grid pointer-events-none absolute inset-0" />
        <div className="container-xl relative grid items-center gap-10 pt-16 pb-14 md:grid-cols-12 md:pt-24 md:pb-20">
          <div className="md:col-span-7">
            <p className="eyebrow mb-5">
              Outsourcing / Logistics / Project Management
            </p>
            <h1 className="max-w-4xl text-4xl font-display font-bold leading-[1.03] tracking-tight text-ink md:text-6xl">
              We are great at outsourcing, logistics support &amp;
              <span className="text-brand"> project management.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate">
              Our great network of people and services makes us your sure
              outsourcing partner. Project management from start to finish - we
              are in sync with you.
            </p>
            <p className="mt-4 font-semibold text-ink">
              Looking for quality support service providers? Think Morgan
              Bailey.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link to="/contact" className="btn-primary">
                Contact Us Today <span aria-hidden="true">-&gt;</span>
              </Link>
              <Link to="/services" className="btn-secondary">
                Check Our Services
              </Link>
              <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white/70 py-2 pl-2 pr-4 text-xs font-semibold text-ink/70">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-50 text-[10px] font-bold text-brand">
                  ✓
                </span>
                ISO 9001:2000 Certified
              </span>
            </div>
            <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
              {metrics.map((item) => (
                <div key={item.label} className="border-l border-line pl-4">
                  <p className="font-display text-2xl font-bold text-ink">
                    {item.value}
                  </p>
                  <p className="mt-1 text-xs leading-snug text-slate">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative md:col-span-5">
            <div
              className="hero-float relative mx-auto aspect-[4/5] max-w-md rounded-md border border-white/70 bg-steel p-5 shadow-[0_34px_90px_-50px_rgba(16,21,28,0.85)] md:max-w-lg md:p-7"
              style={{ perspective: 1100 }}
            >
              <div className="absolute inset-5 rounded-md border border-white/10" />
              <div className="relative flex h-full flex-col items-center justify-between overflow-hidden rounded-md bg-[linear-gradient(135deg,#171d25,#0f141b)] p-6 text-white">
                <div className="w-full text-center">
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-brand">
                    Your sure outsourcing partner
                  </p>
                </div>

                <div className="relative flex flex-1 items-center justify-center">
                  <div
                    className="brand-glow absolute h-56 w-56 rounded-full md:h-64 md:w-64"
                    aria-hidden="true"
                  />
                  <img
                    src={logoMark}
                    alt="Morgan Bailey Limited"
                    className="relative w-72 max-w-[85%] drop-shadow-[0_28px_38px_rgba(0,0,0,0.5)] md:w-80"
                  />
                </div>

                <div className="grid w-full grid-cols-2 gap-3 text-xs text-white/70">
                  <div className="rounded-md border border-white/10 bg-white/5 p-3">
                    Procurement
                  </div>
                  <div className="rounded-md border border-white/10 bg-white/5 p-3">
                    Fleet support
                  </div>
                  <div className="rounded-md border border-white/10 bg-white/5 p-3">
                    HR support
                  </div>
                  <div className="rounded-md border border-white/10 bg-white/5 p-3">
                    Ground services
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FlowLine />
      </section>

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
            <Link to="/services" className="text-link">
              View all services <span aria-hidden="true">-&gt;</span>
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.id}
                to={`/services/${s.id}`}
                className="focus-ring group premium-card p-7"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-brand-50 font-mono text-xs font-semibold text-brand">
                  {s.code}
                </span>
                <h3 className="mt-4 mb-2 text-lg font-display font-semibold transition-colors group-hover:text-brand">
                  {s.name}
                </h3>
                <p className="text-sm leading-relaxed text-slate">
                  {s.summary}
                </p>
                <span className="mt-5 inline-flex text-sm font-semibold text-ink/50 transition-colors group-hover:text-brand">
                  Explore <span aria-hidden="true" className="ml-2">-&gt;</span>
                </span>
              </Link>
            ))}
          </div>
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
            <Link to="/request-a-quote" className="btn-brand">
              Request a Quote <span aria-hidden="true">-&gt;</span>
            </Link>
            <Link to="/contact" className="btn-secondary">
              Talk to Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
