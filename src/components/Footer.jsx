import { site, footer } from "../content";

// Simple lettered badges instead of brand logo marks — swap for real
// icon components (e.g. from an icon library of your choice) any time.
const socialLinks = ["X", "in", "IG"];

export default function Footer() {
  return (
    <footer className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-6">
          <div className="col-span-2">
            <a href="#top" className="flex items-center gap-2 text-lg font-extrabold text-navy-950">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-brand-400 to-brand-600 text-sm text-white">
                C
              </span>
              {site.name}
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-navy-950/50">
              {footer.description}
            </p>
            <div className="mt-5 flex gap-3">
              {socialLinks.map((label) => (
                <a
                  key={label}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-navy-950/5 text-xs font-bold text-navy-950/60 transition hover:bg-navy-950 hover:text-white"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {footer.columns.map((col) => (
            <div key={col.heading}>
              <h4 className="text-sm font-bold text-navy-950">{col.heading}</h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-navy-950/50 transition hover:text-navy-950">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 border-t border-navy-950/10 pt-8">
          <p className="text-xs text-navy-950/40">{footer.legalNote}</p>
          <p className="mt-2 text-xs text-navy-950/40">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
