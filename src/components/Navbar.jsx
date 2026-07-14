import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { site, nav } from "../content";

export default function Navbar({ onGetStarted }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-navy-900/10 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link to="/" className="flex items-baseline gap-2 text-navy-950">
          <span
            className="text-2xl font-semibold tracking-tight"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {site.name}
          </span>
          <span className="hidden text-xs italic text-navy-950/40 sm:inline">{site.since}</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {nav.links.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className={({ isActive }) =>
                `text-sm font-medium transition hover:text-navy-950 ${
                  isActive ? "text-navy-950" : "text-navy-800/70"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={site.onboardingUrl}
            className="text-sm font-semibold text-navy-800/80 hover:text-navy-950"
          >
            {nav.loginLabel}
          </a>
          <button
            type="button"
            onClick={onGetStarted}
            className="rounded-full bg-gradient-to-r from-navy-800 to-navy-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:from-navy-700 hover:to-navy-900"
          >
            {nav.signupLabel}
          </button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="text-navy-950 md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-navy-900/10 bg-white px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {nav.links.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-navy-800/80"
              >
                {link.label}
              </NavLink>
            ))}
            <hr className="border-navy-900/10" />
            <a href={site.onboardingUrl} className="text-sm font-semibold text-navy-800/80">
              {nav.loginLabel}
            </a>
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                onGetStarted?.();
              }}
              className="rounded-full bg-gradient-to-r from-navy-800 to-navy-950 px-5 py-2.5 text-center text-sm font-semibold text-white"
            >
              {nav.signupLabel}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
