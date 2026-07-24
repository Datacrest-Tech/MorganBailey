import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container-xl py-32 text-center">
      <p className="eyebrow mb-4">404</p>
      <h1 className="mb-4 text-3xl font-display font-bold md:text-4xl">
        Page not found
      </h1>
      <p className="mb-8 text-slate">The page you're looking for doesn't exist.</p>
      <Link to="/" className="btn-primary">
        Back to homepage
      </Link>
    </div>
  );
}
