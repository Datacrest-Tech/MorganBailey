import { aboutContent } from "../data/siteContent";
import FlowLine from "../components/FlowLine";

export default function About() {
  return (
    <div className="page-shell">
      <section className="relative overflow-hidden">
        <div className="hero-grid pointer-events-none absolute inset-0" />
        <div className="container-xl relative pt-16 pb-12 md:pt-24">
          <p className="eyebrow mb-3">About us</p>
          <h1 className="max-w-3xl text-4xl font-display font-bold leading-tight md:text-5xl">
            Get to know Morgan Bailey.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate">
            {aboutContent.intro}
          </p>
        </div>
      </section>

      <FlowLine />

      <section className="container-xl section-pad grid gap-6 md:grid-cols-3">
        {aboutContent.values.map((v, index) => (
          <div key={v.title} className="premium-card p-7">
            <span className="mb-5 inline-flex h-9 w-9 items-center justify-center rounded-md bg-brand-50 font-mono text-xs font-semibold text-brand">
              0{index + 1}
            </span>
            <h3 className="mb-3 text-lg font-display font-semibold text-ink">
              {v.title}
            </h3>
            <p className="text-sm leading-relaxed text-slate">{v.body}</p>
          </div>
        ))}
      </section>

      <section className="border-y border-line bg-white/80">
        <div className="container-xl section-pad grid gap-8 md:grid-cols-2">
          <div className="premium-card p-8">
            <p className="eyebrow mb-3">Our operating philosophy</p>
            <h2 className="mb-5 text-2xl font-display font-semibold leading-snug md:text-3xl">
              Partnership, not just a contract.
            </h2>
            <p className="leading-relaxed text-slate">
              {aboutContent.philosophy}
            </p>
          </div>
          <div className="premium-card p-8">
            <p className="eyebrow mb-3">Our quality</p>
            <h2 className="mb-5 text-2xl font-display font-semibold leading-snug md:text-3xl">
              Built on world best practice.
            </h2>
            <p className="leading-relaxed text-slate">{aboutContent.quality}</p>
          </div>
        </div>
      </section>

      <section className="container-xl section-pad text-center">
        <p className="eyebrow mb-3">Our team</p>
        <h2 className="mx-auto max-w-2xl text-3xl font-display font-semibold leading-snug">
          We take pride in professionalism, from first enquiry to execution.
        </h2>
        <p className="mx-auto mt-4 max-w-xl leading-relaxed text-slate">
          The satisfaction of our clients is our top priority - our personnel
          are courteous, friendly and helpful at every step.
        </p>
      </section>
    </div>
  );
}
