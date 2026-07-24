import { Link } from "react-router-dom";
import { company, services } from "../data/siteContent";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="dark-band text-white">
      <div className="container-xl grid grid-cols-1 gap-10 py-16 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="mb-4 inline-block rounded-md border border-white/10 bg-white p-3">
            <Logo className="h-16" />
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-white/60">
            {company.founded}. Holistic outsourcing, logistics and project
            management services based on international standards.
          </p>
        </div>

        <div>
          <h4 className="eyebrow mb-4">Services</h4>
          <ul className="space-y-2.5 text-sm text-white/70">
            {services.slice(0, 6).map((s) => (
              <li key={s.id}>
                <Link
                  to={`/services/${s.id}`}
                  className="focus-ring transition-colors hover:text-brand"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="eyebrow mb-4">Company</h4>
          <ul className="space-y-2.5 text-sm text-white/70">
            <li>
              <Link
                to="/about"
                className="focus-ring transition-colors hover:text-brand"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="focus-ring transition-colors hover:text-brand"
              >
                Blog &amp; News
              </Link>
            </li>
            <li>
              <Link
                to="/careers"
                className="focus-ring transition-colors hover:text-brand"
              >
                Careers
              </Link>
            </li>
            <li>
              <Link
                to="/request-a-quote"
                className="focus-ring transition-colors hover:text-brand"
              >
                Request a Quote
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="focus-ring transition-colors hover:text-brand"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="eyebrow mb-4">Get in touch</h4>
          <ul className="space-y-2.5 text-sm text-white/70">
            <li>{company.address}</li>
            {company.phones.map((p) => (
              <li key={p}>{p}</li>
            ))}
            <li>
              <a
                href={`mailto:${company.email}`}
                className="focus-ring transition-colors hover:text-brand"
              >
                {company.email}
              </a>
            </li>
          </ul>
          <div className="mt-5 flex gap-3">
            <a
              href={company.social.facebook}
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 text-white/60 transition-colors hover:border-brand/50 hover:text-brand"
              aria-label="Facebook"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.12 8.44 9.88v-6.99H7.9v-2.9h2.54V9.85c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.23 0-1.61.76-1.61 1.54v1.85h2.74l-.44 2.9h-2.3v6.99C18.34 21.12 22 16.99 22 12Z" />
              </svg>
            </a>
            <a
              href={company.social.twitter}
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 text-white/60 transition-colors hover:border-brand/50 hover:text-brand"
              aria-label="Twitter"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.4 1a9.13 9.13 0 0 1-2.88 1.1A4.52 4.52 0 0 0 16.1 0c-2.5 0-4.5 2-4.5 4.48 0 .35.04.7.11 1.03A12.9 12.9 0 0 1 1.64 1.15a4.48 4.48 0 0 0-.61 2.26c0 1.56.8 2.94 2.02 3.74A4.5 4.5 0 0 1 .96 6.7v.06c0 2.18 1.55 4 3.6 4.4a4.52 4.52 0 0 1-2.03.08 4.52 4.52 0 0 0 4.22 3.13A9.05 9.05 0 0 1 0 18.58a12.76 12.76 0 0 0 6.92 2.03c8.3 0 12.84-6.88 12.84-12.84 0-.2-.01-.42-.02-.63A9.18 9.18 0 0 0 23 3Z" />
              </svg>
            </a>
            <a
              href={company.social.youtube}
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 text-white/60 transition-colors hover:border-brand/50 hover:text-brand"
              aria-label="YouTube"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M23.498 6.186a2.99 2.99 0 0 0-2.105-2.115C19.605 3.5 12 3.5 12 3.5s-7.605 0-9.393.571A2.99 2.99 0 0 0 .502 6.186 31.12 31.12 0 0 0 0 12a31.12 31.12 0 0 0 .502 5.814 2.99 2.99 0 0 0 2.105 2.115C4.395 20.5 12 20.5 12 20.5s7.605 0 9.393-.571a2.99 2.99 0 0 0 2.105-2.115A31.12 31.12 0 0 0 24 12a31.12 31.12 0 0 0-.502-5.814Zm-14.818 9.38V8.434l6.545 3.565-6.545 3.567Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-xl flex flex-col justify-between gap-2 py-5 text-xs text-white/40 sm:flex-row">
          <span>
            (C) {new Date().getFullYear()} {company.name}. All rights reserved.
          </span>
          <span>Outsourcing / Logistics Support / Project Management</span>
        </div>
      </div>
    </footer>
  );
}
