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
      className={`fixed top-0 left-0 right-0 z-50 w-full border-b bg-white/95 transition-all duration-300 ${
        scrolled
          ? "border-line/80 shadow-[0_14px_34px_-28px_rgba(16,21,28,0.55)] backdrop-blur-xl"
          : "border-line/20"
      }`}
    >
      <nav className="container-xl mx-auto flex items-center gap-6 h-24">
        <Link to="/" className="focus-ring" onClick={() => setOpen(false)}>
          <Logo className="h-14 md:h-20" />
        </Link>

        <div className="hidden md:flex flex-1 items-center justify-center gap-8">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `rounded-full px-3.5 py-2 text-sm font-semibold tracking-wide transition-colors focus-ring ${
                  isActive ? "text-brand" : "text-ink/80 hover:text-ink"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        <Link
          to="/contact"
          className="focus-ring hidden md:inline-flex items-center justify-center rounded-full bg-ink px-6 py-2 text-sm font-semibold text-white transition-all hover:bg-brand"
        >
          Contact
        </Link>

        <button
          className="focus-ring -mr-2 rounded-md border border-line bg-white/10 p-2 md:hidden text-ink transition-all"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span className="block w-6 h-0.5 mb-1.5 bg-ink transition-colors" />
          <span className="block w-6 h-0.5 mb-1.5 bg-ink transition-colors" />
          <span className="block w-4 h-0.5 bg-ink transition-colors" />
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
