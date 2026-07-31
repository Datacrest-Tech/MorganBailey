import { Link } from "react-router-dom";
import { blogPosts, blogHeroImage } from "../data/siteContent";

export default function Blog() {
  return (
    <div className="page-shell">
      <section className="relative overflow-hidden">
        <div className="hero-grid pointer-events-none absolute inset-0" />
        <div className="container-xl relative pt-16 pb-12 md:pt-24">
          <p className="eyebrow mb-3">Blog &amp; News</p>
          <h1 className="max-w-3xl text-4xl font-display font-bold leading-tight md:text-5xl">
            Updates, articles &amp; industry insight.
          </h1>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <div className="media-frame h-56 w-full shadow-[0_30px_60px_-30px_rgba(16,21,28,0.45)] md:h-80">
              <img src={blogHeroImage} alt="Morgan Bailey blog and news" />
            </div>
            <div className="media-frame h-56 w-full shadow-[0_30px_60px_-30px_rgba(16,21,28,0.45)] md:h-80">
              <img
                src="/images/team-building-750x480.jpg"
                alt="Team building"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container-xl grid gap-6 pb-20 md:grid-cols-2">
        {blogPosts.map((p) => (
          <Link
            key={p.id}
            to={`/blog/${p.id}`}
            className="focus-ring group premium-card overflow-hidden p-0"
          >
            <div className="p-8">
              <span className="font-mono text-xs text-slate">{p.date}</span>
              <h2 className="mt-3 mb-3 text-xl font-display font-semibold transition-colors group-hover:text-brand md:text-2xl">
                {p.title}
              </h2>
              <p className="text-sm leading-relaxed text-slate">{p.excerpt}</p>
              <span className="mt-5 inline-flex text-sm font-semibold text-ink/60 transition-colors group-hover:text-brand">
                Read article{" "}
                <span aria-hidden="true" className="ml-2">
                  -&gt;
                </span>
              </span>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
