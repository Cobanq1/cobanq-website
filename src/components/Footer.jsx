import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import Logo from "./Logo";
import { Container } from "./ui";
import { site, services, accreditation } from "../site";

// lucide-react v1 no longer ships brand marks, so social links render as
// labelled pills rather than logos.
const socialLabels = { linkedin: "LinkedIn", facebook: "Facebook", instagram: "Instagram" };

export default function Footer() {
  const year = new Date().getFullYear();
  const socials = Object.entries(site.social).filter(([, url]) => url);

  return (
    <footer className="relative overflow-hidden bg-ink-950 text-ink-200">
      <div className="absolute inset-0 bg-hatch" />
      <Container className="relative">
        {/* About us — the block the details live in. */}
        <div className="grid gap-12 border-b border-white/10 py-16 lg:grid-cols-[1.15fr_1fr_1fr]">
          <div>
            <Logo />
            <h3 className="mt-8 text-lg text-white">About us</h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-400">
              {site.legalName} is a UK security provider supplying SIA licensed officers, key holding
              and alarm response, CCTV operators, dog handlers and fire marshals. We work directly
              with clients and as a subcontract partner to larger security companies who need
              reliable, properly licensed cover at short notice.
            </p>

            <dl className="mt-7 space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" strokeWidth={2.2} />
                <div>
                  <dt className="sr-only">Phone</dt>
                  <dd>
                    <a href={`tel:${site.phoneLink}`} className="font-semibold text-white hover:text-gold-400">
                      {site.phone}
                    </a>
                    <span className="ml-2 text-ink-500">— {site.contactName}</span>
                  </dd>
                </div>
              </div>

              {site.whatsapp && (
                <div className="flex items-start gap-3">
                  <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" strokeWidth={2.2} />
                  <div>
                    <dt className="sr-only">WhatsApp</dt>
                    <dd>
                      <a
                        href={`https://wa.me/${site.phoneLink.replace("+", "")}`}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-gold-400"
                      >
                        Message us on WhatsApp
                      </a>
                    </dd>
                  </div>
                </div>
              )}

              {site.email && (
                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" strokeWidth={2.2} />
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd>
                      <a href={`mailto:${site.email}`} className="hover:text-gold-400">
                        {site.email}
                      </a>
                    </dd>
                  </div>
                </div>
              )}

              {site.registeredAddress && (
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" strokeWidth={2.2} />
                  <div>
                    <dt className="sr-only">Registered address</dt>
                    <dd className="text-ink-400">{site.registeredAddress}</dd>
                  </div>
                </div>
              )}
            </dl>

            {socials.length > 0 && (
              <div className="mt-7 flex flex-wrap gap-2.5">
                {socials.map(([key, url]) => (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-ink-200 transition hover:border-gold-400 hover:text-gold-400"
                  >
                    {socialLabels[key]}
                  </a>
                ))}
              </div>
            )}
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-white">Services</h3>
            <ul className="mt-5 space-y-3 text-sm text-ink-400">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link to={`/services#${s.slug}`} className="hover:text-gold-400">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-white">Company</h3>
            <ul className="mt-5 space-y-3 text-sm text-ink-400">
              <li><Link to="/clients" className="hover:text-gold-400">For businesses</Link></li>
              <li><Link to="/careers" className="hover:text-gold-400">Work with us</Link></li>
              <li><Link to="/about" className="hover:text-gold-400">About us</Link></li>
              <li><Link to="/contact" className="hover:text-gold-400">Contact</Link></li>
              <li><Link to="/privacy" className="hover:text-gold-400">Privacy policy</Link></li>
            </ul>

            <p className="mt-8 rounded-xl border border-white/10 bg-white/[0.03] p-4 text-xs leading-relaxed text-ink-400">
              {accreditation.short}. All officers supplied hold a valid SIA licence for the role
              they work in.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3 py-7 text-xs text-ink-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.legalName}. All rights reserved.
          </p>
          <p className="flex flex-wrap gap-x-4 gap-y-1">
            {site.companyNumber && <span>Registered in England &amp; Wales · Company No. {site.companyNumber}</span>}
            {site.siaLicenceNumber && <span>SIA licence {site.siaLicenceNumber}</span>}
            <span>{site.coverage}</span>
          </p>
        </div>
      </Container>
    </footer>
  );
}
