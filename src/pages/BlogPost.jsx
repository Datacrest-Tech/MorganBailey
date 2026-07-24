import { useParams, Link, Navigate } from "react-router-dom";
import { blogPosts, blogHeroImage } from "../data/siteContent";

export default function BlogPost() {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === id);
  if (!post) return <Navigate to="/blog" replace />;

  return (
    <article className="page-shell">
      <section className="relative overflow-hidden">
        <div className="hero-grid pointer-events-none absolute inset-0" />
        <div className="container-xl relative mx-auto max-w-3xl pt-16 pb-10 md:pt-24">
          <Link to="/blog" className="text-link">
            &lt;- Blog &amp; News
          </Link>
          <p className="eyebrow mt-6 mb-3">{post.date}</p>
          <h1 className="text-3xl font-display font-bold leading-tight md:text-5xl">
            {post.title}
          </h1>
          <div className="media-frame mt-10 h-56 w-full shadow-[0_30px_60px_-30px_rgba(16,21,28,0.45)] md:h-80">
            <img src={blogHeroImage} alt={post.title} />
          </div>
        </div>
      </section>

      <section className="container-xl mx-auto max-w-3xl pb-20">
        <div className="surface-card space-y-6 p-8 md:p-10">
          {post.body.map((para, i) => (
            <p key={i} className="text-base leading-relaxed text-ink/85">
              {para}
            </p>
          ))}
        </div>
      </section>
    </article>
  );
}
