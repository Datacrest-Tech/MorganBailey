import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "./Logo";

const links = [
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/blog", label: "Blog & News" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-line shadow-[0_14px_34px_-28px_rgba(16,21,28,0.55)]"
          : "bg-white/75 backdrop-blur border-b border-transparent"
      }`}
    >
      <nav className="container-xl flex items-center justify-between h-24">
        <Link to="/" className="focus-ring" onClick={() => setOpen(false)}>
          <Logo className="h-20 md:h-28" />
        </Link>

        <div className="hidden md:flex items-center gap-1 rounded-md border border-line/70 bg-white/65 p-1 shadow-[0_14px_35px_-34px_rgba(16,21,28,0.8)]">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `rounded-md px-3.5 py-2 text-sm font-semibold tracking-wide transition-colors focus-ring ${
                  isActive
                    ? "bg-brand-50 text-brand"
                    : "text-ink/70 hover:bg-paper hover:text-ink"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/request-a-quote"
            className="focus-ring ml-1 inline-flex items-center rounded-md bg-ink px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-brand"
          >
            Request a Quote
          </Link>
        </div>

        <button
          className="focus-ring -mr-2 rounded-md border border-line bg-white p-2 md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span className="block w-6 h-0.5 bg-ink mb-1.5" />
          <span className="block w-6 h-0.5 bg-ink mb-1.5" />
          <span className="block w-4 h-0.5 bg-ink" />
        </button>
      </nav>

      {open && (
        <div className="animate-rise mx-6 mb-4 flex flex-col gap-2 rounded-md border border-line bg-white p-3 shadow-2xl md:hidden">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `rounded-md px-3 py-2 text-base font-semibold ${
                  isActive ? "bg-brand-50 text-brand" : "text-ink"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/request-a-quote"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex justify-center rounded-md bg-ink px-5 py-3 text-sm font-semibold text-white"
          >
            Request a Quote
          </Link>
        </div>
      )}
    </header>
  );
}
