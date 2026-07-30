import { Phone, Mail, User } from "lucide-react";
import { Container, PageHero, SectionHeading, Button } from "../components/ui";
import { LogoMark } from "../components/Logo";
import { site, accreditation, services } from "../site";

const values = [
  {
    title: "Turn up, on time, every time",
    body: "The whole industry runs on it and half of it fails at it. A no-show costs you money and costs us the contract, so we treat attendance as the first job, not a detail.",
  },
  {
    title: "Only licensed people on site",
    body: "Nobody works a shift for us without a valid SIA licence for that role. It is checked before the first shift and again at renewal. There is no grey area here.",
  },
  {
    title: "Say what's actually true",
    body: "If we can't cover a site, we say so rather than take the booking and let you down. If we're not accredited for something yet, we tell you before you ask.",
  },
  {
    title: "Look after the officers",
    body: "Good officers stay where they're paid properly and spoken to like adults. That is the whole retention strategy, and it's why clients get the same faces on their site.",
  },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="A security company built on doing the basics properly."
        lead={`${site.legalName} supplies licensed security personnel to businesses and to other security contractors across the UK.`}
      />

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              <SectionHeading eyebrow="Who we are" title="Where we've come from, and where we're going." />
              <div className="mt-7 space-y-5 text-[17px] leading-relaxed text-ink-500">
                <p>
                  Alliance Security Group was set up to do one thing well: put properly licensed,
                  properly screened security officers on sites that need them — and to be the
                  provider that actually answers the phone when something goes wrong.
                </p>
                <p>
                  We work in two directions. Businesses come to us directly for guarding, key
                  holding, CCTV, dog units and fire marshals. Larger security contractors come to us
                  when they're carrying more work than their own rota can cover, and need a
                  subcontract partner who will follow their instructions and not embarrass them in
                  front of their client.
                </p>
                <p>
                  Alongside that, we're building a bank of SIA licensed officers who want regular,
                  reliable work. Every contract we win turns into shifts for people on that list —
                  which is why we take registrations seriously even when we don't have a vacancy the
                  same week.
                </p>
                <p>
                  We're honest about the stage the business is at. {accreditation.acsStatus} We'd
                  rather grow on repeat business than on claims we can't back up.
                </p>
              </div>
            </div>

            <aside className="self-start rounded-3xl border border-ink-200 bg-ink-50 p-8">
              <LogoMark className="h-14 w-14" />
              <h3 className="mt-6 text-xl text-ink-900">Company details</h3>
              <dl className="mt-6 space-y-4 text-[15px]">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-400">
                    Registered name
                  </dt>
                  <dd className="mt-1 font-semibold text-ink-900">{site.legalName}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-400">
                    Contact
                  </dt>
                  <dd className="mt-1 flex items-center gap-2 font-semibold text-ink-900">
                    <User className="h-4 w-4 text-gold-500" /> {site.contactName}
                    <span className="font-normal text-ink-500">· {site.contactRole}</span>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-400">
                    Phone
                  </dt>
                  <dd className="mt-1">
                    <a
                      href={`tel:${site.phoneLink}`}
                      className="flex items-center gap-2 font-semibold text-ink-900 hover:text-gold-600"
                    >
                      <Phone className="h-4 w-4 text-gold-500" /> {site.phone}
                    </a>
                  </dd>
                </div>
                {site.email && (
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-400">
                      Email
                    </dt>
                    <dd className="mt-1">
                      <a
                        href={`mailto:${site.email}`}
                        className="flex items-center gap-2 font-semibold text-ink-900 hover:text-gold-600"
                      >
                        <Mail className="h-4 w-4 text-gold-500" /> {site.email}
                      </a>
                    </dd>
                  </div>
                )}
                {site.companyNumber && (
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-400">
                      Company number
                    </dt>
                    <dd className="mt-1 font-semibold text-ink-900">{site.companyNumber}</dd>
                  </div>
                )}
                {site.registeredAddress && (
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-400">
                      Registered address
                    </dt>
                    <dd className="mt-1 text-ink-700">{site.registeredAddress}</dd>
                  </div>
                )}
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-400">
                    Coverage
                  </dt>
                  <dd className="mt-1 text-ink-700">{site.coverage}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-400">
                    Services
                  </dt>
                  <dd className="mt-1 text-ink-700">{services.map((s) => s.title).join(" · ")}</dd>
                </div>
              </dl>
            </aside>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-ink-950 py-20 sm:py-24">
        <div className="absolute inset-0 bg-hatch" />
        <Container className="relative">
          <SectionHeading tone="light" eyebrow="How we work" title="Four things we won't bend on." />
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {values.map((v, i) => (
              <div key={v.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-7">
                <span className="font-display text-sm font-extrabold tracking-[0.2em] text-gold-400">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-lg text-white">{v.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-400">{v.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-ink-50 py-20">
        <Container className="text-center">
          <h2 className="mx-auto max-w-2xl text-balance text-3xl leading-tight text-ink-900 sm:text-4xl">
            Work with us, or work for us.
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button to="/clients" size="lg">I need security cover</Button>
            <Button to="/careers" tone="outlineDark" size="lg">I'm looking for shifts</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
