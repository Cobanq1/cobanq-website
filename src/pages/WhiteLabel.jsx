import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Landmark,
  Palette,
  RefreshCcw,
  ShieldCheck,
  Users,
  Workflow,
} from "lucide-react";
import { whiteLabel, site } from "../content";
import EnquiryForm, { ContactFallback } from "../components/EnquiryForm";

const featureIcons = { Palette, Landmark, ShieldCheck, RefreshCcw, Users, Workflow };

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

export default function WhiteLabel() {
  return (
    <>
      {/* ---------------- Hero ---------------- */}
      <section className="relative overflow-hidden bg-navy-950 py-20 lg:py-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(620px circle at 15% 20%, rgba(91,141,239,0.3), transparent 60%), radial-gradient(520px circle at 85% 80%, rgba(36,56,122,0.6), transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-400">
            {whiteLabel.eyebrow}
          </p>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl">
            {whiteLabel.heading}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
            {whiteLabel.subhead}
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#enquire"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-brand-600 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-600/30 transition hover:from-brand-400 hover:to-brand-500 sm:w-auto"
            >
              {whiteLabel.primaryCta}
              <ArrowRight size={16} />
            </a>
            <Link
              to="/solutions"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/25 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10 sm:w-auto"
            >
              {whiteLabel.secondaryCta}
            </Link>
          </div>

          <div className="mx-auto mt-14 grid max-w-lg grid-cols-3 gap-6">
            {whiteLabel.stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-num text-2xl font-extrabold text-white sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs leading-snug text-white/45">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- What's included ---------------- */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="text-center text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl">
            {whiteLabel.featuresHeading}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center leading-relaxed text-navy-950/60">
            {whiteLabel.featuresSub}
          </p>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whiteLabel.features.map((feature) => {
              const Icon = featureIcons[feature.icon] || Palette;
              return (
                <div
                  key={feature.title}
                  className="rounded-3xl border border-navy-950/10 p-7 transition hover:border-brand-500/30 hover:shadow-lg hover:shadow-navy-950/5"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                    <Icon size={21} />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-navy-950">{feature.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-navy-950/60">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------- How it comes together ---------------- */}
      <section className="bg-navy-950/[0.02] py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="text-center text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl">
            {whiteLabel.stepsHeading}
          </h2>

          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {whiteLabel.steps.map((step) => (
              <div key={step.number}>
                <p className="font-num text-4xl font-extrabold text-brand-500/25">{step.number}</p>
                <h3 className="mt-3 text-lg font-bold text-navy-950">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-950/60">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Who it's for ---------------- */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="text-center text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl">
            {whiteLabel.audienceHeading}
          </h2>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {whiteLabel.audience.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-navy-950/10 px-6 py-5"
              >
                <h3 className="text-base font-bold text-navy-950">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-navy-950/60">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Pricing + enquiry form ---------------- */}
      <section id="enquire" className="scroll-mt-20 bg-navy-950 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-400">
              {whiteLabel.pricing.eyebrow}
            </p>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
              {whiteLabel.pricing.heading}
            </h2>
            <p className="mt-5 leading-relaxed text-white/60">{whiteLabel.pricing.body}</p>

            <ul className="mt-8 grid gap-3">
              {whiteLabel.pricing.points.map((point) => (
                <li key={point} className="flex gap-3">
                  <Check size={17} className="mt-0.5 shrink-0 text-brand-400" strokeWidth={2.5} />
                  <span className="text-sm leading-relaxed text-white/70">{point}</span>
                </li>
              ))}
            </ul>
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
        </div>
      </section>
    </>
  );
}
