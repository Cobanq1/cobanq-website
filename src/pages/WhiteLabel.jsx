import { useState } from "react";
import {
  ArrowRight,
  Banknote,
  Check,
  ChevronDown,
  Coins,
  CreditCard,
  Globe,
  Landmark,
  Layers,
  Palette,
  Phone,
  RefreshCcw,
  ShieldCheck,
  Smartphone,
  TrendingUp,
  Workflow,
} from "lucide-react";
import { whiteLabel, site } from "../content";
import EnquiryForm, { ContactFallback } from "../components/EnquiryForm";

const icons = {
  Landmark,
  RefreshCcw,
  CreditCard,
  Globe,
  Smartphone,
  Banknote,
  Palette,
  Coins,
  Layers,
  Workflow,
  TrendingUp,
};

const enquiryFields = [
  { name: "name", label: whiteLabel.form.fields.name, autoComplete: "name" },
  { name: "company", label: whiteLabel.form.fields.company, autoComplete: "organization" },
  { name: "email", label: whiteLabel.form.fields.email, type: "email", autoComplete: "email" },
  {
    name: "website",
    label: whiteLabel.form.fields.website,
    type: "url",
    required: false,
    placeholder: "https://",
  },
  {
    name: "volume",
    label: whiteLabel.form.fields.volume,
    type: "select",
    placeholder: whiteLabel.form.fields.volumePlaceholder,
    options: whiteLabel.form.fields.volumeOptions,
    wide: true,
  },
  {
    name: "message",
    label: whiteLabel.form.fields.message,
    type: "textarea",
    placeholder: whiteLabel.form.fields.messagePlaceholder,
    wide: true,
  },
];

// The brochure's signature diagram: your brand on the left, CoBanq in the
// middle, connected capabilities on the right. Arrows on desktop; the
// columns stack into a vertical flow on mobile.
function ArchitectureDiagram() {
  const { architecture: a } = whiteLabel;

  return (
    <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-[1fr_auto_1.15fr] lg:gap-4">
      {/* Your brand */}
      <div className="rounded-3xl border border-emerald-500/25 bg-emerald-50/50 p-8 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">{a.brand.label}</p>
        <p className="mt-4 text-lg font-bold text-navy-950">{a.brand.title}</p>
        <p className="mt-1.5 text-sm text-navy-950/55">{a.brand.detail}</p>
        <div className="mt-7 flex items-end justify-center gap-2" aria-hidden="true">
          <span className="h-20 w-28 rounded-lg border-2 border-emerald-600/40" />
          <span className="h-14 w-9 rounded-md border-2 border-emerald-600/40" />
        </div>
      </div>

      {/* Connector + core — arrows flow left to right on desktop, and the
          stacked column order carries the same meaning on mobile. */}
      <div className="flex items-center justify-center gap-3">
        <span className="hidden shrink-0 text-brand-500 lg:block" aria-hidden="true">
          <ArrowRight size={20} />
        </span>
        <div className="flex flex-col items-center">
          <span className="flex h-28 w-28 shrink-0 items-center justify-center rounded-full bg-navy-950 text-center shadow-xl ring-8 ring-brand-500/10">
            <span>
              <span
                className="block text-lg font-bold text-white"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                CoBanq
              </span>
              <span className="mx-auto mt-1 block h-0.5 w-8 rounded bg-brand-400" />
            </span>
          </span>
          <p className="mt-3 max-w-[9rem] text-center text-xs leading-relaxed text-navy-950/50">
            {a.core.detail}
          </p>
        </div>
        <span className="hidden shrink-0 text-brand-500 lg:block" aria-hidden="true">
          <ArrowRight size={20} />
        </span>
      </div>

      {/* Connected capabilities */}
      <div className="rounded-3xl border border-brand-500/25 bg-brand-50/40 p-7">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-700">
          {a.capabilities.label}
        </p>
        <div className="mt-4 divide-y divide-navy-950/[0.08]">
          {a.capabilities.items.map((item) => {
            const Icon = icons[item.icon] || Landmark;
            return (
              <div key={item.title} className="flex items-center gap-4 py-3.5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-brand-600 ring-1 ring-navy-950/[0.06]">
                  <Icon size={19} />
                </span>
                <span>
                  <span className="block text-sm font-bold text-navy-950">{item.title}</span>
                  <span className="block text-xs text-navy-950/55">{item.detail}</span>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function SafeguardingBar() {
  const { safeguarding: s } = whiteLabel;
  return (
    <div className="mt-6 grid gap-5 rounded-3xl border border-navy-950/10 bg-white px-7 py-6 sm:grid-cols-[auto_1fr] sm:items-center sm:gap-8">
      <div className="flex items-center gap-3">
        <ShieldCheck size={22} className="shrink-0 text-emerald-600" />
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">{s.label}</p>
          <p className="mt-1 text-xl font-bold tracking-tight text-navy-950">{s.partner}</p>
        </div>
      </div>
      <div className="sm:border-l sm:border-navy-950/[0.08] sm:pl-8">
        <p className="text-sm font-semibold text-navy-950/80">{s.body}</p>
        <p className="mt-1.5 text-xs leading-relaxed text-navy-950/50">{s.note}</p>
      </div>
    </div>
  );
}

function Pillar({ pillar, index }) {
  const dark = index % 2 === 1;

  return (
    <section
      id={pillar.id}
      className={`scroll-mt-20 py-20 ${dark ? "bg-navy-950" : "bg-white"}`}
    >
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <p
          className={`text-xs font-semibold uppercase tracking-[0.25em] ${
            dark ? "text-brand-400" : "text-brand-600"
          }`}
        >
          {pillar.eyebrow}
        </p>
        <h2
          className={`mt-4 max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl ${
            dark ? "text-white" : "text-navy-950"
          }`}
        >
          {pillar.title}
        </h2>
        <p
          className={`mt-5 max-w-3xl leading-relaxed ${
            dark ? "text-white/60" : "text-navy-950/60"
          }`}
        >
          {pillar.description}
        </p>

        <div
          className={`mt-12 grid gap-6 sm:grid-cols-2 ${
            pillar.steps.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"
          }`}
        >
          {pillar.steps.map((step) => (
            <div
              key={step.number}
              className={`rounded-2xl border p-6 ${
                dark ? "border-white/10 bg-white/[0.04]" : "border-navy-950/10"
              }`}
            >
              <p
                className={`font-num text-2xl font-extrabold ${
                  dark ? "text-brand-400/50" : "text-brand-500/30"
                }`}
              >
                {step.number}
              </p>
              <h3
                className={`mt-2 text-lg font-bold ${dark ? "text-white" : "text-navy-950"}`}
              >
                {step.title}
              </h3>
              <p
                className={`mt-1 text-xs font-semibold uppercase tracking-wider ${
                  dark ? "text-brand-400" : "text-brand-600"
                }`}
              >
                {step.sub}
              </p>
              {step.detail && (
                <p
                  className={`mt-3 text-sm leading-relaxed ${
                    dark ? "text-white/55" : "text-navy-950/60"
                  }`}
                >
                  {step.detail}
                </p>
              )}
            </div>
          ))}
        </div>

        {pillar.methods && (
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {pillar.methods.map((method) => {
              const Icon = icons[method.icon] || Landmark;
              return (
                <div
                  key={method.title}
                  className={`rounded-2xl p-6 ${
                    dark ? "bg-white/[0.06]" : "bg-navy-950/[0.03]"
                  }`}
                >
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                      dark ? "bg-brand-500/20 text-brand-400" : "bg-brand-50 text-brand-600"
                    }`}
                  >
                    <Icon size={19} />
                  </span>
                  <h3 className={`mt-4 text-base font-bold ${dark ? "text-white" : "text-navy-950"}`}>
                    {method.title}
                  </h3>
                  <p className={`mt-0.5 text-xs ${dark ? "text-white/45" : "text-navy-950/45"}`}>
                    {method.sub}
                  </p>
                  <p
                    className={`mt-2.5 text-sm leading-relaxed ${
                      dark ? "text-white/55" : "text-navy-950/60"
                    }`}
                  >
                    {method.detail}
                  </p>
                </div>
              );
            })}
          </div>
        )}

        {pillar.note && (
          <p className={`mt-7 text-xs leading-relaxed ${dark ? "text-white/35" : "text-navy-950/40"}`}>
            {pillar.note}
          </p>
        )}
      </div>
    </section>
  );
}

function Coverage() {
  const { coverage: c } = whiteLabel;
  const [showEurope, setShowEurope] = useState(false);

  return (
    <section className="bg-navy-950/[0.02] py-20">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-brand-600">
          {c.eyebrow}
        </p>
        <h2 className="mt-4 text-center text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl">
          {c.heading}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center leading-relaxed text-navy-950/60">
          {c.subhead}
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {c.regions.map((region) => (
            <div
              key={region.name}
              className="rounded-3xl border border-navy-950/10 bg-white p-6"
            >
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-lg font-bold text-navy-950">{region.name}</h3>
                <span className="font-num text-sm font-bold text-brand-600">
                  {region.countries.length}
                </span>
              </div>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {region.countries.map((country) => (
                  <span
                    key={country}
                    className="rounded-full bg-navy-950/[0.04] px-2.5 py-1 text-xs font-medium text-navy-950/70"
                  >
                    {country}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Europe — long list, collapsed by default */}
        <div className="mt-6 rounded-3xl border border-navy-950/10 bg-white p-6">
          <button
            type="button"
            onClick={() => setShowEurope((v) => !v)}
            aria-expanded={showEurope}
            className="flex w-full items-center justify-between gap-3 text-left"
          >
            <span>
              <span className="block text-lg font-bold text-navy-950">{c.europe.heading}</span>
              <span className="mt-1 block text-sm text-navy-950/55">{c.europe.body}</span>
            </span>
            <ChevronDown
              size={20}
              className={`shrink-0 text-navy-950/40 transition ${showEurope ? "rotate-180" : ""}`}
            />
          </button>
          {showEurope && (
            <div className="mt-5 flex flex-wrap gap-1.5 animate-[fadeIn_.3s_ease]">
              {c.europe.countries.map((country) => (
                <span
                  key={country}
                  className="rounded-full bg-navy-950/[0.04] px-2.5 py-1 text-xs font-medium text-navy-950/70"
                >
                  {country}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Currencies */}
        <div className="mt-6 rounded-3xl bg-navy-950 p-8">
          <h3 className="text-xl font-bold text-white">{c.currencies.heading}</h3>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/55">
            {c.currencies.body}
          </p>
          <div className="mt-6 flex flex-wrap gap-1.5">
            {c.currencies.codes.map((code) => (
              <span
                key={code}
                className="font-num rounded-lg bg-white/10 px-2.5 py-1 text-xs font-bold text-white/80"
              >
                {code}
              </span>
            ))}
          </div>
          <p className="mt-6 text-xs leading-relaxed text-white/35">{c.currencies.note}</p>
        </div>
      </div>
    </section>
  );
}

export default function WhiteLabel() {
  return (
    <>
      {/* ---------------- Hero ---------------- */}
      <section className="relative overflow-hidden bg-navy-950 py-20 lg:py-28">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(700px circle at 10% 15%, rgba(91,141,239,0.28), transparent 60%), radial-gradient(560px circle at 88% 85%, rgba(36,56,122,0.65), transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-400">
            {whiteLabel.eyebrow}
          </p>
          <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl">
            {whiteLabel.heading}
            <span className="block text-white/90">{whiteLabel.headingAccent}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
            {whiteLabel.subhead}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2">
            {whiteLabel.capabilities.map((cap, i) => (
              <span key={cap} className="flex items-center gap-3">
                {i > 0 && <span className="text-white/20" aria-hidden="true">|</span>}
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-white/70">
                  {cap}
                </span>
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#enquire"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-brand-600 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-600/30 transition hover:from-brand-400 hover:to-brand-500"
            >
              {whiteLabel.primaryCta}
              <ArrowRight size={16} />
            </a>
            <a
              href={`tel:${whiteLabel.closing.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <Phone size={15} />
              {whiteLabel.closing.phone}
            </a>
          </div>

          <div className="mt-16 grid max-w-3xl grid-cols-2 gap-8 border-t border-white/10 pt-10 sm:grid-cols-4">
            {whiteLabel.stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-num text-3xl font-extrabold text-white">{stat.value}</p>
                <p className="mt-1 text-xs leading-snug text-white/45">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- At a glance ---------------- */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-600">
                {whiteLabel.glance.eyebrow}
              </p>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-navy-950 sm:text-4xl">
                {whiteLabel.glance.heading}
              </h2>
            </div>
            <div>
              <p className="leading-relaxed text-navy-950/65">{whiteLabel.glance.body}</p>
              <p className="mt-4 leading-relaxed text-navy-950/65">{whiteLabel.glance.body2}</p>
            </div>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whiteLabel.glance.points.map((point) => (
              <div key={point.label} className="rounded-2xl border border-navy-950/10 p-6">
                <p className="font-num text-2xl font-extrabold text-navy-950">{point.value}</p>
                <p className="mt-2 text-sm leading-relaxed text-navy-950/55">{point.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Architecture ---------------- */}
      <section className="bg-navy-950/[0.02] py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-600">
            {whiteLabel.architecture.eyebrow}
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl">
            {whiteLabel.architecture.heading}
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-navy-950/60">
            {whiteLabel.architecture.subhead}
          </p>

          <ArchitectureDiagram />

          <div className="mt-6 grid gap-px overflow-hidden rounded-3xl bg-navy-950/10 sm:grid-cols-3">
            {whiteLabel.architecture.summary.map((item) => (
              <div key={item.title} className="bg-white px-6 py-5 text-center">
                <p className="text-sm font-bold text-navy-950">{item.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-navy-950/55">{item.detail}</p>
              </div>
            ))}
          </div>

          <SafeguardingBar />
        </div>
      </section>

      {/* ---------------- Capability pillars ---------------- */}
      {whiteLabel.pillars.map((pillar, i) => (
        <Pillar key={pillar.id} pillar={pillar} index={i} />
      ))}

      {/* ---------------- Coverage ---------------- */}
      <Coverage />

      {/* ---------------- Customer journey ---------------- */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-brand-600">
            {whiteLabel.journey.eyebrow}
          </p>
          <h2 className="mt-4 text-center text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl">
            {whiteLabel.journey.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center leading-relaxed text-navy-950/60">
            {whiteLabel.journey.subhead}
          </p>

          <div className="relative mt-14">
            <div
              aria-hidden="true"
              className="absolute left-[10%] right-[10%] top-6 hidden border-t-2 border-dashed border-navy-950/12 lg:block"
            />
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
              {whiteLabel.journey.steps.map((step) => (
                <div key={step.number} className="relative text-center">
                  <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-navy-950 font-num text-sm font-bold text-white ring-8 ring-white">
                    {step.number}
                  </span>
                  <h3 className="mt-4 text-base font-bold text-navy-950">{step.title}</h3>
                  <p className="mx-auto mt-1.5 max-w-[14rem] text-sm leading-relaxed text-navy-950/60">
                    {step.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-12 text-center text-lg font-bold tracking-tight text-brand-600">
            {whiteLabel.journey.strip}
          </p>
        </div>
      </section>

      {/* ---------------- Use cases ---------------- */}
      <section className="bg-navy-950/[0.02] py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="text-center text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl">
            {whiteLabel.useCasesHeading}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center leading-relaxed text-navy-950/60">
            {whiteLabel.useCasesSub}
          </p>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whiteLabel.useCases.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-navy-950/10 bg-white p-6 transition hover:border-brand-500/30 hover:shadow-md"
              >
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-600">
                  {item.tag}
                </p>
                <h3 className="mt-3 text-base font-bold leading-snug text-navy-950">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-950/55">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Why CoBanq ---------------- */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="text-center text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl">
            {whiteLabel.whyHeading}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center leading-relaxed text-navy-950/60">
            {whiteLabel.whySub}
          </p>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whiteLabel.why.map((item) => {
              const Icon = icons[item.icon] || Palette;
              return (
                <div key={item.title} className="rounded-3xl border border-navy-950/10 p-7">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                    <Icon size={21} />
                  </span>
                  <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.18em] text-navy-950/35">
                    {item.tag}
                  </p>
                  <h3 className="mt-1 text-lg font-bold text-navy-950">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-950/60">{item.detail}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------- Pricing + enquiry ---------------- */}
      <section id="enquire" className="scroll-mt-20 bg-navy-950 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-400">
              {whiteLabel.closing.eyebrow}
            </p>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
              {whiteLabel.closing.heading}
            </h2>
            <p className="mt-5 leading-relaxed text-white/60">{whiteLabel.closing.subhead}</p>
            <p className="mt-6 text-lg font-bold text-brand-400">
              {whiteLabel.closing.strapline}
            </p>

            <div className="mt-10 border-t border-white/10 pt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-400">
                {whiteLabel.pricing.eyebrow}
              </p>
              <h3 className="mt-3 text-xl font-bold text-white">{whiteLabel.pricing.heading}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                {whiteLabel.pricing.body}
              </p>
              <ul className="mt-6 grid gap-3">
                {whiteLabel.pricing.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <Check size={16} className="mt-0.5 shrink-0 text-brand-400" strokeWidth={2.5} />
                    <span className="text-sm leading-relaxed text-white/70">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={`tel:${whiteLabel.closing.phone.replace(/\s/g, "")}`}
              className="mt-8 inline-flex items-center gap-2.5 text-lg font-bold text-white transition hover:text-brand-400"
            >
              <Phone size={18} className="text-brand-400" />
              {whiteLabel.closing.phone}
            </a>
          </div>

          <div className="rounded-[32px] bg-white p-2">
            <div className="px-6 pt-6">
              <h3 className="text-xl font-bold text-navy-950">{whiteLabel.form.heading}</h3>
              <p className="mt-1.5 text-sm text-navy-950/55">{whiteLabel.form.subhead}</p>
            </div>
            <div className="mt-5 px-2 pb-2">
              <EnquiryForm
                formName="white-label-enquiry"
                fields={enquiryFields}
                submitLabel={whiteLabel.form.submit}
                successHeading={whiteLabel.form.successHeading}
                successBody={whiteLabel.form.successBody}
              />
              <ContactFallback email={site.supportEmail} />
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- FAQ ---------------- */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-center text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl">
            {whiteLabel.faqHeading}
          </h2>

          <div className="mt-12 divide-y divide-navy-950/[0.08]">
            {whiteLabel.faq.map((item) => (
              <details key={item.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left">
                  <span className="text-base font-bold text-navy-950">{item.q}</span>
                  <ChevronDown
                    size={18}
                    className="shrink-0 text-navy-950/40 transition group-open:rotate-180"
                  />
                </summary>
                <p className="mt-3 pr-8 text-sm leading-relaxed text-navy-950/60">{item.a}</p>
              </details>
            ))}
          </div>

          <p className="mx-auto mt-12 max-w-2xl text-center text-xs leading-relaxed text-navy-950/40">
            {whiteLabel.safeguarding.note}
          </p>
        </div>
      </section>
    </>
  );
}
