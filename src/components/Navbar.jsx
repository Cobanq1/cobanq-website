import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import Logo from "./Logo";
import { Container, Button } from "./ui";
import { site } from "../site";

const links = [
  { to: "/services", label: "Services" },
  { to: "/clients", label: "For businesses" },
  { to: "/careers", label: "Work with us" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "border-b border-white/10 bg-ink-950/95 backdrop-blur" : "bg-transparent"
      }`}
    >
      <Container>
        <div className="flex h-20 items-center justify-between gap-6">
          <Link to="/" aria-label={`${site.name} — home`}>
            <Logo />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 text-sm font-medium transition ${
                    isActive ? "text-gold-400" : "text-ink-200/75 hover:text-white"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={`tel:${site.phoneLink}`}
              className="flex items-center gap-2 text-sm font-semibold text-white transition hover:text-gold-400"
            >
              <Phone className="h-4 w-4 text-gold-400" strokeWidth={2.2} />
              {site.phone}
            </a>
            <Button to="/contact">Get a quote</Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="rounded-full border border-white/20 p-2.5 text-white lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      {open && (
        <div className="border-t border-white/10 bg-ink-950 lg:hidden">
          <Container className="py-5">
            <nav className="flex flex-col">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  className={({ isActive }) =>
                    `border-b border-white/5 py-3.5 text-base font-medium ${
                      isActive ? "text-gold-400" : "text-ink-200"
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
            </nav>
            <div className="mt-5 flex flex-col gap-3">
              <Button href={`tel:${site.phoneLink}`} size="lg">
                <Phone className="h-4 w-4" /> Call {site.phone}
              </Button>
              <Button to="/contact" tone="outlineLight" size="lg">
                Request a quote
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
