import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import Logo from "./Logo";
import { trackButtonClick } from "../lib/analytics";

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
  const { pathname } = useLocation();
  const isHeroOverlay = pathname === "/" && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full border-b transition-all duration-300 ${
        isHeroOverlay
          ? "border-white/10 bg-transparent text-white"
          : `bg-white/95 ${
              scrolled
                ? "border-line/80 shadow-[0_14px_34px_-28px_rgba(16,21,28,0.55)] backdrop-blur-xl"
                : "border-line/20"
            }`
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
                  isActive
                    ? "text-brand"
                    : isHeroOverlay
                      ? "text-white/80 hover:text-white"
                      : "text-ink/80 hover:text-ink"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        <Link
          to="/contact"
          onClick={() => trackButtonClick("Contact Us")}
          className={`focus-ring hidden items-center justify-center rounded-full px-6 py-2 text-sm font-semibold transition-all md:inline-flex ${
            isHeroOverlay
              ? "border border-white/25 bg-white/10 text-white backdrop-blur hover:border-brand/70 hover:bg-brand"
              : "bg-ink text-white hover:bg-brand"
          }`}
        >
          Contact
        </Link>

        <button
          className={`focus-ring -mr-2 rounded-md border p-2 transition-all md:hidden ${
            isHeroOverlay
              ? "border-white/25 bg-white/10 text-white"
              : "border-line bg-white/10 text-ink"
          }`}
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span
            className={`mb-1.5 block h-0.5 w-6 transition-colors ${
              isHeroOverlay ? "bg-white" : "bg-ink"
            }`}
          />
          <span
            className={`mb-1.5 block h-0.5 w-6 transition-colors ${
              isHeroOverlay ? "bg-white" : "bg-ink"
            }`}
          />
          <span
            className={`block h-0.5 w-4 transition-colors ${
              isHeroOverlay ? "bg-white" : "bg-ink"
            }`}
          />
        </button>
      </nav>

      {open && (
        <div className="animate-rise mx-6 mb-4 flex flex-col gap-2 rounded-md border border-line bg-white p-3 shadow-2xl md:hidden">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              onClick={() => {
                if (l.to === "/contact") trackButtonClick("Contact Us");
                setOpen(false);
              }}
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
            onClick={() => {
              trackButtonClick("Schedule Consultation");
              setOpen(false);
            }}
            className="mt-2 inline-flex justify-center rounded-md bg-ink px-5 py-3 text-sm font-semibold text-white"
          >
            Request a Quote
          </Link>
        </div>
      )}
    </header>
  );
}
