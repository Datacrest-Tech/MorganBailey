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
  const { pathname } = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-white border-b border-slate/10">
      <nav className="container-xl mx-auto flex items-center justify-between h-24">
        {/* Logo */}
        <Link
          to="/"
          className="focus-ring flex-shrink-0 origin-center"
          onClick={() => setOpen(false)}
        >
          <Logo className="h-20 md:h-24" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 items-center justify-center gap-12 mx-12">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `text-sm font-semibold transition-all focus-ring relative pb-1 ${
                  isActive
                    ? "text-brand border-b-2 border-brand"
                    : "text-ink/80 hover:text-ink border-b-2 border-transparent hover:border-brand/30"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        {/* Contact Button */}
        <Link
          to="/contact"
          onClick={() => trackButtonClick("Contact")}
          className="focus-ring hidden md:inline-flex items-center gap-2 bg-brand text-white px-7 py-3 rounded-full font-semibold text-sm transition-all hover:bg-brand-dark hover:shadow-xl hover:-translate-y-0.5"
        >
          Request a Quote
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="focus-ring md:hidden p-2 -mr-2 rounded-md hover:bg-slate/10 transition-colors"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span
            className={`block w-6 h-0.5 bg-ink transition-all transform origin-center ${
              open ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-ink my-1.5 transition-all ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-ink transition-all transform origin-center ${
              open ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden animate-rise bg-white border-t border-slate/10 py-4">
          <div className="container-xl flex flex-col gap-1">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-lg font-semibold text-sm transition-colors ${
                    isActive
                      ? "bg-brand-50 text-brand"
                      : "text-ink hover:bg-slate/10"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => {
                trackButtonClick("Contact");
                setOpen(false);
              }}
              className="mt-3 bg-brand text-white px-4 py-3 rounded-lg font-semibold text-sm text-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
