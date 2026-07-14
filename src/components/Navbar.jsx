import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ChevronDown, ArrowRight, Send, Laptop, Building2, Users, Wallet, Landmark } from "lucide-react";
import { site, nav } from "../content";

const dropdownIcons = { Send, Laptop, Building2, Users, Wallet, Landmark };

function SolutionsDropdown({ link, open, setOpen }) {
  const containerRef = useRef(null);

  // Click-to-open/close, not hover — hover-based open/close is fragile
  // here because the gap between the trigger and the absolutely
  // positioned panel creates a dead zone that closes the menu before
  // a pointer moving from the button to an item ever reaches it.
  useEffect(() => {
    if (!open) return;
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    const handleEscape = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open, setOpen]);

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1 text-sm font-medium text-navy-800/70 transition hover:text-navy-950"
        aria-expanded={open}
      >
        {link.label}
        <ChevronDown size={14} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute left-1/2 top-full z-50 mt-3 w-[560px] -translate-x-1/2 rounded-2xl border border-navy-950/10 bg-white p-3 shadow-xl">
          <div className="grid grid-cols-2 gap-1">
            {link.dropdown.map((item) => {
              const Icon = dropdownIcons[item.icon];
              return (
                <Link
                  key={item.label}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="flex items-start gap-3 rounded-xl p-3 transition hover:bg-navy-950/[0.03]"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                    <Icon size={16} />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-navy-950">
                      {item.label}
                    </span>
                    <span className="block text-xs text-navy-950/50">{item.description}</span>
                  </span>
                </Link>
              );
            })}
          </div>
          <Link
            to={link.to}
            onClick={() => setOpen(false)}
            className="mt-1 flex items-center gap-1.5 rounded-xl px-3 py-2.5 text-sm font-semibold text-brand-600 transition hover:bg-navy-950/[0.03]"
          >
            See all solutions
            <ArrowRight size={14} />
          </Link>
        </div>
      )}
    </div>
  );
}

export default function Navbar({ onGetStarted }) {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);

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
          {nav.links.map((link) =>
            link.dropdown ? (
              <SolutionsDropdown
                key={link.label}
                link={link}
                open={dropdownOpen}
                setOpen={setDropdownOpen}
              />
            ) : (
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
            )
          )}
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
            {nav.links.map((link) =>
              link.dropdown ? (
                <div key={link.label}>
                  <button
                    type="button"
                    onClick={() => setMobileSolutionsOpen((v) => !v)}
                    className="flex w-full items-center justify-between text-sm font-medium text-navy-800/80"
                  >
                    {link.label}
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${mobileSolutionsOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {mobileSolutionsOpen && (
                    <div className="mt-3 flex flex-col gap-3 border-l border-navy-900/10 pl-4">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.label}
                          to={item.to}
                          onClick={() => setOpen(false)}
                          className="text-sm text-navy-800/70"
                        >
                          {item.label}
                        </Link>
                      ))}
                      <Link
                        to={link.to}
                        onClick={() => setOpen(false)}
                        className="text-sm font-semibold text-brand-600"
                      >
                        See all solutions
                      </Link>
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={link.label}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-navy-800/80"
                >
                  {link.label}
                </NavLink>
              )
            )}
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
