import { Link } from "react-router-dom";
import {
  ShieldCheck,
  KeyRound,
  Cctv,
  Dog,
  Flame,
  Phone,
  ArrowRight,
  Clock,
  BadgeCheck,
  Handshake,
  FileCheck2,
  UserCheck,
  Building2,
} from "lucide-react";
import { Container, SectionHeading, Eyebrow, Button } from "../components/ui";
import { LogoMark } from "../components/Logo";
import { site, services, sectors, accreditation } from "../site";

const icons = { ShieldCheck, KeyRound, Cctv, Dog, Flame };

function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink-950">
      <div className="absolute inset-0 bg-hatch" />
      {/* Layered glows give the flat ink some depth without any imagery. */}
      <div className="pointer-events-none absolute -top-32 right-[-10%] h-[34rem] w-[34rem] rounded-full bg-gold-500/12 blur-[110px]" />
      <div className="pointer-events-none absolute bottom-[-12rem] left-[-8%] h-[30rem] w-[30rem] rounded-full bg-ink-600/40 blur-[110px]" />

      <Container className="relative pt-36 pb-20 sm:pt-44 sm:pb-28">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="animate-rise">
            <Eyebrow tone="light">SIA licensed security · UK</Eyebrow>

            {/* Two deliberate lines. The lg size is set so the longer, gold
                line still lands whole inside the hero column — check it if
                you reword this. */}
            <h1 className="mt-6 text-[2.4rem] leading-[1.06] text-white sm:text-5xl lg:text-[2.5rem] xl:text-[2.95rem]">
              <span className="block">Security officers</span>
              <span className="block text-gold-400">who actually turn up.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-200/75">
              {site.legalName} supplies SIA licensed guards, key holding and alarm response, CCTV
              operators, dog handlers and fire marshals — direct to clients, and as a subcontract
              partner to security companies who need cover they can rely on.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Button to="/contact" size="lg">
                Request a quote <ArrowRight className="h-4 w-4" />
              </Button>
              <Button to="/careers" tone="outlineLight" size="lg">
                Looking for security work?
              </Button>
            </div>

            <a
              href={`tel:${site.phoneLink}`}
              className="mt-8 inline-flex items-center gap-3 text-ink-200/70 transition hover:text-white"
            >
              <span className="rounded-full border border-gold-400/40 bg-gold-400/10 p-2.5">
                <Phone className="h-4 w-4 text-gold-400" strokeWidth={2.3} />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-[0.18em] text-ink-500">
                  Speak to {site.contactName}
                </span>
                <span className="text-lg font-bold text-white">{site.phone}</span>
              </span>
            </a>
          </div>

          {/* Credentials card — the reassurance panel, no stock photography. */}
          <div className="animate-rise rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm sm:p-8">
            <div className="flex items-center gap-4">
              <LogoMark className="h-14 w-14" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
                  How we operate
                </p>
                <p className="mt-1 text-lg font-bold text-white">Licensed. Vetted. Accountable.</p>
              </div>
            </div>

            <ul className="mt-7 space-y-4">
              {[
                {
                  icon: BadgeCheck,
                  title: "Valid SIA licence, every officer",
                  body: "Checked against the SIA public register before a first shift, and re-checked at renewal.",
                },
                {
                  icon: FileCheck2,
                  title: "Screened to BS 7858 principles",
                  body: "Identity, right to work and employment history checked and kept on file.",
                },
                {
                  icon: Clock,
                  title: "24/7 contact, seven days",
                  body: "A real person on the phone — not an answerphone — when a site goes down at 3am.",
                },
                {
                  icon: Handshake,
                  title: "Subcontract friendly",
                  body: "We regularly work under larger contractors and can invoice on your terms.",
                },
              ].map(({ icon: Icon, title, body }) => (
                <li key={title} className="flex gap-4">
                  <Icon className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" strokeWidth={2} />
                  <div>
                    <p className="text-sm font-semibold text-white">{title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-ink-400">{body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

function AudienceSplit() {
  const cards = [
    {
      icon: Building2,
      eyebrow: "For businesses & contractors",
      title: "Need cover on a site?",
      body: "Tell us the site, the hours and the risk. We'll come back with officers, rates and a start date — including short-notice and subcontract work for other security companies.",
      cta: "Request a quote",
      to: "/clients",
      tone: "dark",
    },
    {
      icon: UserCheck,
      eyebrow: "For security officers",
      title: "Looking for shifts?",
      body: "If you hold a valid SIA licence — guarding, door supervision, CCTV, dog handling or fire marshal — register with us and we'll contact you when work comes up in your area.",
      cta: "Register your details",
      to: "/careers",
      tone: "light",
    },
  ];

  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <div className="grid gap-6 md:grid-cols-2">
          {cards.map((c) => {
            const dark = c.tone === "dark";
            return (
              <Link
                key={c.title}
                to={c.to}
                className={`group relative overflow-hidden rounded-3xl border p-8 transition sm:p-10 ${
                  dark
                    ? "border-ink-800 bg-ink-900 hover:border-gold-400/50"
                    : "border-ink-200 bg-ink-50 hover:border-ink-400"
                }`}
              >
                {dark && <div className="absolute inset-0 bg-hatch" />}
                <div className="relative">
                  <c.icon
                    className={`h-7 w-7 ${dark ? "text-gold-400" : "text-ink-600"}`}
                    strokeWidth={1.8}
                  />
                  <p
                    className={`mt-6 text-[11px] font-bold uppercase tracking-[0.2em] ${
                      dark ? "text-gold-400" : "text-gold-600"
                    }`}
                  >
                    {c.eyebrow}
                  </p>
                  <h3 className={`mt-3 text-2xl ${dark ? "text-white" : "text-ink-900"}`}>{c.title}</h3>
                  <p
                    className={`mt-4 text-[15px] leading-relaxed ${
                      dark ? "text-ink-400" : "text-ink-500"
                    }`}
                  >
                    {c.body}
                  </p>
                  <span
                    className={`mt-7 inline-flex items-center gap-2 text-sm font-semibold ${
                      dark ? "text-white" : "text-ink-900"
                    }`}
                  >
                    {c.cta}
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

function Services() {
  return (
    <section className="border-y border-ink-100 bg-ink-50 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="What we provide"
          title="Five services, all properly licensed."
          lead="Whether you need one officer for a weekend or a full rota across several sites, everything we supply is staffed by people who hold the correct SIA licence for the job."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const Icon = icons[s.icon];
            return (
              <Link
                key={s.slug}
                to={`/services#${s.slug}`}
                className="group rounded-2xl border border-ink-200 bg-white p-7 transition hover:-translate-y-1 hover:border-gold-400 hover:shadow-[0_24px_50px_-30px_rgba(11,18,27,0.45)]"
              >
                <span className="inline-flex rounded-xl bg-ink-900 p-3">
                  <Icon className="h-5 w-5 text-gold-400" strokeWidth={1.9} />
                </span>
                <h3 className="mt-5 text-lg text-ink-900">{s.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-500">{s.short}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-ink-900">
                  Read more
                  <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}

          <div className="flex flex-col justify-between rounded-2xl border border-dashed border-ink-300 bg-white/60 p-7">
            <div>
              <h3 className="text-lg text-ink-900">Something else?</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-500">
                Event stewarding, retail cover, void property, reception duties — if it sits within
                what our licensed officers can lawfully do, ask us.
              </p>
            </div>
            <Button to="/contact" tone="outlineDark" className="mt-6 self-start">
              Talk it through
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Process() {
  const steps = [
    {
      n: "01",
      title: "Tell us about the site",
      body: "A phone call or the enquiry form. Location, hours, risk, and when you need cover from.",
    },
    {
      n: "02",
      title: "We quote and confirm",
      body: "A clear hourly rate with no hidden extras, plus who we're proposing to put on the site.",
    },
    {
      n: "03",
      title: "Officers deploy",
      body: "Assignment instructions issued, licences verified, and a named contact you can reach at any hour.",
    },
  ];

  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title="Straightforward from the first call."
          align="center"
        />
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="relative">
              <span className="font-display text-5xl font-extrabold text-ink-100">{s.n}</span>
              <h3 className="mt-3 text-xl text-ink-900">{s.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-500">{s.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Sectors() {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-20 sm:py-24">
      <div className="absolute inset-0 bg-hatch" />
      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeading
            tone="light"
            eyebrow="Where we work"
            title="Sites we cover."
            lead={site.coverage}
          />
          <div className="flex flex-wrap gap-2.5">
            {sectors.map((s) => (
              <span
                key={s}
                className="rounded-full border border-white/12 bg-white/[0.04] px-4 py-2.5 text-sm text-ink-200"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function Accreditation() {
  return (
    <section className="bg-ink-50 py-20 sm:py-24">
      <Container>
        <div className="grid gap-10 rounded-3xl border border-ink-200 bg-white p-8 sm:p-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <Eyebrow>Straight answers</Eyebrow>
            <h2 className="mt-4 text-balance text-3xl leading-tight text-ink-900">
              Where we stand on accreditation.
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-ink-500">{accreditation.acsStatus}</p>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-500">
              We'd rather tell you that up front than have you find out later. What we can promise
              today is that every officer we put on your site holds a current SIA licence for the
              role, and that we'll never send someone we wouldn't be happy to stand next to
              ourselves.
            </p>
          </div>
          <ul className="space-y-4">
            {[
              ["SIA licensed officers", "Verified on the SIA public register — no exceptions."],
              ["Screening on file", "Identity, right to work and history checked to BS 7858 principles."],
              ["Insured", "Public and employers' liability cover in place; certificates on request."],
              ["ACS — planned", "Approved Contractor Scheme application is the company's next step."],
            ].map(([title, body]) => (
              <li key={title} className="rounded-2xl border border-ink-100 bg-ink-50 p-5">
                <p className="font-semibold text-ink-900">{title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-500">{body}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

function ClosingCta() {
  return (
    <section className="relative overflow-hidden bg-ink-900 py-20 sm:py-24">
      <div className="absolute inset-0 bg-hatch" />
      <div className="pointer-events-none absolute -bottom-32 left-1/2 h-96 w-[42rem] -translate-x-1/2 rounded-full bg-gold-500/12 blur-[100px]" />
      <Container className="relative text-center">
        <h2 className="mx-auto max-w-2xl text-balance text-3xl leading-tight text-white sm:text-4xl">
          Need officers this week? Or looking for your next shift?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-[17px] leading-relaxed text-ink-200/70">
          Either way, one call gets it moving. Ask for {site.contactName}.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Button href={`tel:${site.phoneLink}`} size="lg">
            <Phone className="h-4 w-4" /> {site.phone}
          </Button>
          <Button to="/contact" tone="outlineLight" size="lg">
            Send an enquiry
          </Button>
        </div>
      </Container>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <AudienceSplit />
      <Services />
      <Process />
      <Sectors />
      <Accreditation />
      <ClosingCta />
    </>
  );
}
