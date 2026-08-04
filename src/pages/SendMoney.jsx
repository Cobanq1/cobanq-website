import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CreditCard,
  Globe,
  Handshake,
  Landmark,
  Quote,
  ShieldCheck,
  Tags,
  Wallet as WalletIcon,
  Zap,
} from "lucide-react";
import { sendMoney, countryCorridors, howItWorks } from "../content";
import SmartLink from "../components/SmartLink";
import Flag from "../components/Flag";
import { CoPayWordmark } from "../components/CoPayLogo";

const methodIcons = { "Bank transfer": Landmark, "Debit card": CreditCard, "Credit card": CreditCard };
const trustIcons = { ShieldCheck, Globe, Tags };
const benefitIcons = { Tags, Zap, ShieldCheck, Handshake };

// Flags drawn at 3:2 get clipped into a circle by an overflowing wrapper.
function CircleFlag({ code, className = "h-12 w-12" }) {
  return (
    <span
      className={`flex shrink-0 items-center justify-center overflow-hidden rounded-full shadow-sm ring-1 ring-copay-ink/10 ${className}`}
    >
      <Flag code={code} className="h-full w-[150%] shrink-0" />
    </span>
  );
}

// Remitly-style "where would you like to send money?" card. The destination
// select is real; Start sending opens the remittance onboarding flow with
// the chosen country pre-selected.
function SendCard({ onStart }) {
  const { sendCard } = sendMoney;
  const [dest, setDest] = useState("");

  return (
    <div className="w-full max-w-md rounded-[28px] bg-white p-7 shadow-2xl shadow-copay-ink/40 ring-1 ring-white/10">
      <h2 className="text-center font-serif text-2xl font-bold text-copay-ink">
        {sendCard.heading}
      </h2>

      <label className="mt-7 block text-xs font-semibold uppercase tracking-wider text-copay-ink/45">
        {sendCard.fromLabel}
        <span className="mt-2 flex items-center gap-2.5 rounded-2xl border border-copay-ink/10 bg-copay-paper px-4 py-3.5">
          <Flag code={sendCard.from.countryCode} className="h-4 w-6 rounded-sm" />
          <span className="text-sm font-semibold normal-case tracking-normal text-copay-ink">
            {sendCard.from.name}
          </span>
        </span>
      </label>

      <label className="mt-4 block text-xs font-semibold uppercase tracking-wider text-copay-ink/45">
        {sendCard.toLabel}
        <span className="relative mt-2 block">
          <select
            value={dest}
            onChange={(e) => setDest(e.target.value)}
            className="w-full appearance-none rounded-2xl border border-copay-ink/15 bg-white px-4 py-3.5 text-sm font-semibold normal-case tracking-normal text-copay-ink transition focus:border-copay-blue focus:outline-none"
          >
            <option value="">{sendCard.toPlaceholder}</option>
            {countryCorridors.map((c) => (
              <option key={c.countryCode} value={c.countryCode}>
                {c.name} ({c.currency})
              </option>
            ))}
          </select>
          <ChevronDown
            size={16}
            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-copay-ink/40"
          />
        </span>
      </label>

      <button
        type="button"
        onClick={() => onStart(dest)}
        className="mt-7 flex w-full items-center justify-center gap-2 rounded-2xl bg-copay-ink py-4 text-sm font-bold text-white transition hover:bg-copay-ink-soft"
      >
        {sendCard.cta}
        <ArrowRight size={16} />
      </button>
    </div>
  );
}

// The three stages of a transfer, drawn as dots on a dashed line that
// grow as the money gets closer to arriving.
function JourneyBand() {
  const { journey } = sendMoney;
  const dots = [
    { size: 14, fill: "bg-copay-blue-deep" },
    { size: 24, fill: "bg-copay-blue" },
    { size: 40, fill: "bg-copay-ink" },
  ];

  return (
    <section className="bg-copay-paper py-20">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-copay-blue">
            {journey.eyebrow}
          </p>
          <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-copay-ink sm:text-4xl">
            {journey.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-copay-ink/60">
            {journey.subhead}
          </p>
        </div>

        <div className="relative mt-16">
          {/* Dashed connector, behind the dots, desktop only. */}
          <div
            aria-hidden="true"
            className="absolute left-[16%] right-[16%] top-5 hidden border-t-2 border-dashed border-copay-ink/15 md:block"
          />

          <div className="grid gap-12 md:grid-cols-3 md:gap-8">
            {journey.stages.map((stage, i) => (
              <div key={stage.label} className="relative text-center">
                <span className="flex h-10 items-center justify-center">
                  <span
                    className={`block rounded-full ${dots[i].fill} ring-8 ring-copay-paper`}
                    style={{ width: dots[i].size, height: dots[i].size }}
                  />
                </span>
                <h3 className="mt-5 font-serif text-xl font-bold text-copay-ink">
                  {stage.label}
                </h3>
                <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-copay-ink/60">
                  {stage.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  const { reviews } = sendMoney;
  const [active, setActive] = useState(0);
  const count = reviews.items.length;

  useEffect(() => {
    const timer = setInterval(() => setActive((i) => (i + 1) % count), 5000);
    return () => clearInterval(timer);
  }, [count]);

  const go = (delta) => setActive((i) => (i + delta + count) % count);
  const review = reviews.items[active];

  return (
    <section className="bg-copay-ink py-24">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
        <h2 className="font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {reviews.heading}
        </h2>

        <div key={active} className="mt-12 animate-[fadeIn_.4s_ease]">
          <Quote size={28} className="mx-auto text-copay-blue" />
          <p className="mt-5 font-serif text-2xl font-semibold text-white">{review.title}</p>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-white/65">{review.body}</p>
          <p className="mt-6 text-sm font-bold text-white">{review.name}</p>
          <p className="text-xs text-white/45">{review.detail}</p>
        </div>

        <div className="mt-10 flex items-center justify-center gap-6">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous review"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/60 transition hover:bg-white/10 hover:text-white"
          >
            <ChevronLeft size={16} />
          </button>
          <div className="flex gap-2">
            {reviews.items.map((item, i) => (
              <button
                key={item.name}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Show review from ${item.name}`}
                className={`h-2 rounded-full transition-all ${
                  i === active ? "w-6 bg-copay-blue" : "w-2 bg-white/20"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next review"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/60 transition hover:bg-white/10 hover:text-white"
          >
            <ChevronRight size={16} />
          </button>
        </div>

        <p className="mx-auto mt-12 max-w-2xl text-xs leading-relaxed text-white/30">
          {reviews.disclaimer}
        </p>
      </div>
    </section>
  );
}

export default function SendMoney() {
  const navigate = useNavigate();
  const startOnboarding = (dest) =>
    navigate(dest ? `/onboarding/remittance?to=${dest}` : "/onboarding/remittance");

  return (
    <>
      {/* ---------------- Hero ---------------- */}
      <section className="relative overflow-hidden bg-copay-ink py-16 lg:py-24">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(680px circle at 12% 18%, rgba(43,113,173,0.35), transparent 62%), radial-gradient(520px circle at 88% 82%, rgba(29,80,133,0.4), transparent 60%)",
          }}
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
          <div className="text-center lg:text-left">
            <div className="flex flex-col items-center gap-3 lg:items-start">
              <CoPayWordmark height={52} inverted />
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-copay-blue">
                {sendMoney.poweredBy}
              </p>
            </div>

            <h1 className="mt-9 font-serif text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl">
              {sendMoney.heading}
            </h1>
            <p className="mt-4 font-serif text-xl italic leading-snug text-copay-blue sm:text-2xl">
              {sendMoney.headingAccent}
            </p>
            <p className="mx-auto mt-6 max-w-xl leading-relaxed text-white/60 lg:mx-0">
              {sendMoney.subhead}
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 lg:justify-start">
              {sendMoney.heroTrust.map((item) => {
                const Icon = trustIcons[item.icon] || ShieldCheck;
                return (
                  <span
                    key={item.label}
                    className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/45"
                  >
                    <Icon size={14} className="text-copay-blue" />
                    {item.label}
                  </span>
                );
              })}
            </div>
          </div>

          <div className="mx-auto w-full max-w-md lg:justify-self-end">
            <SendCard onStart={startOnboarding} />
          </div>
        </div>

        {/* Corridor flag strip */}
        <div className="relative mx-auto mt-20 max-w-5xl px-6 lg:px-8">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
            {sendMoney.flagStrip}
          </p>
          <div className="mt-7 flex flex-wrap items-start justify-center gap-x-10 gap-y-6">
            {countryCorridors.map((country) => (
              <div key={country.countryCode} className="flex w-16 flex-col items-center gap-2">
                <CircleFlag code={country.countryCode} className="h-11 w-11" />
                <span className="text-center text-xs text-white/55">{country.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Journey (dot motif) ---------------- */}
      <JourneyBand />

      {/* ---------------- Why CoPay ---------------- */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="text-center font-serif text-3xl font-bold tracking-tight text-copay-ink sm:text-4xl">
            {sendMoney.benefits.heading}
          </h2>

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {sendMoney.benefits.items.map((item) => {
              const Icon = benefitIcons[item.icon] || Tags;
              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-copay-ink/10 p-7 transition hover:border-copay-blue/40 hover:shadow-lg hover:shadow-copay-ink/5"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-copay-blue-soft text-copay-blue-deep">
                    <Icon size={21} />
                  </span>
                  <h3 className="mt-5 font-serif text-xl font-bold text-copay-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-copay-ink/60">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------- How it works ---------------- */}
      <section id="how-it-works" className="scroll-mt-24 bg-copay-paper py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="text-center font-serif text-3xl font-bold tracking-tight text-copay-ink sm:text-4xl">
            {howItWorks.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center leading-relaxed text-copay-ink/60">
            {howItWorks.subhead}
          </p>

          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {howItWorks.steps.map((step) => (
              <div key={step.number}>
                <p className="font-serif text-5xl font-semibold text-copay-blue/25">
                  {step.number}
                </p>
                <h3 className="mt-3 font-serif text-xl font-bold text-copay-ink">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-copay-ink/60">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Reviews ---------------- */}
      <Reviews />

      {/* ---------------- Corridors ---------------- */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-copay-ink sm:text-4xl">
            {sendMoney.countriesGrid.heading}
          </h2>
          <p className="mt-4 text-copay-ink/60">{sendMoney.countriesGrid.subhead}</p>

          <div className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-3">
            {countryCorridors.map((country) => {
              const inner = (
                <div className="flex h-full items-center gap-3 rounded-2xl border border-copay-ink/10 px-5 py-4 text-left transition hover:border-copay-blue/50 hover:shadow-md">
                  <CircleFlag code={country.countryCode} className="h-9 w-9" />
                  <div>
                    <p className="text-sm font-bold text-copay-ink">{country.name}</p>
                    <p className="text-xs text-copay-ink/50">{country.currency}</p>
                  </div>
                </div>
              );
              return country.to ? (
                <SmartLink key={country.name} to={country.to}>
                  {inner}
                </SmartLink>
              ) : (
                <div key={country.name}>{inner}</div>
              );
            })}
          </div>
          <p className="mt-6 text-xs text-copay-ink/40">{sendMoney.countriesGrid.note}</p>

          {/* Payment methods */}
          <div className="mt-14 flex flex-wrap items-center justify-center gap-3">
            {sendMoney.paymentMethods.map((method) => {
              const Icon = methodIcons[method] || WalletIcon;
              return (
                <span
                  key={method}
                  className="flex items-center gap-2.5 rounded-full bg-copay-paper px-5 py-2.5 text-sm font-semibold text-copay-ink/70"
                >
                  <Icon size={16} className="text-copay-blue" />
                  {method}
                </span>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------- Closing CTA ---------------- */}
      <section className="bg-white pb-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[32px] bg-copay-ink px-8 py-16 text-center sm:px-16">
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(420px circle at 50% 0%, rgba(43,113,173,0.35), transparent 65%)",
              }}
            />
            <div className="relative">
              {/* Reversed wordmark — the navy logo would vanish on this panel. */}
              <CoPayWordmark height={44} inverted className="mx-auto" />
              <h2 className="mx-auto mt-7 max-w-xl font-serif text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
                {sendMoney.closing.heading}
              </h2>
              <p className="mx-auto mt-4 max-w-lg leading-relaxed text-white/60">
                {sendMoney.closing.subhead}
              </p>

              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => startOnboarding()}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-bold text-copay-ink transition hover:bg-copay-paper sm:w-auto"
                >
                  {sendMoney.closing.cta}
                  <ArrowRight size={16} />
                </button>
                <a
                  href="#how-it-works"
                  className="inline-flex w-full items-center justify-center rounded-full border border-white/25 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10 sm:w-auto"
                >
                  {sendMoney.closing.secondary}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
