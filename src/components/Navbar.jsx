import { useState } from "react";
import { Menu, X } from "lucide-react";
import { site, nav } from "../content";

export default function Navbar({ onGetStarted }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-navy-900/10 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#top" className="flex items-center gap-2 text-xl font-extrabold tracking-tight text-navy-950">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand-400 to-brand-600 text-white">
            C
          </span>
          {site.name}
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-navy-800/80 transition hover:text-navy-950"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a href="#login" className="text-sm font-semibold text-navy-800/80 hover:text-navy-950">
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
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-navy-800/80"
              >
                {link.label}
              </a>
            ))}
            <hr className="border-navy-900/10" />
            <a href="#login" className="text-sm font-semibold text-navy-800/80">
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
