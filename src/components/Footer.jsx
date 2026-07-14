import { Link } from "react-router-dom";
import { site, footer } from "../content";

// Simple lettered badges instead of brand logo marks — swap for real
// icon components (e.g. from an icon library of your choice) any time.
const socialLinks = ["TW", "FB", "in", "IG"];

export default function Footer() {
  return (
    <footer className="bg-navy-950 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-6">
          <div className="col-span-2">
            <Link to="/" className="flex items-baseline gap-2 text-white">
              <span
                className="text-xl font-semibold tracking-tight"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {site.name}
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
              {footer.description}
            </p>
            <p className="mt-4 max-w-xs text-xs leading-relaxed text-white/35">
              {footer.regulatoryNote}
            </p>
            <div className="mt-5 flex gap-3">
              {socialLinks.map((label) => (
                <a
                  key={label}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-xs font-bold text-white/60 transition hover:bg-white hover:text-navy-950"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {footer.columns.map((col) => (
            <div key={col.heading}>
              <h4 className="text-xs font-bold uppercase tracking-widest text-white/40">
                {col.heading}
              </h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="text-sm text-white/60 transition hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex gap-5">
            {footer.legalLinks.map((label) => (
              <a key={label} href="#" className="text-xs text-white/40 hover:text-white/70">
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
