import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CreditCard,
  Landmark,
  Quote,
  Wallet as WalletIcon,
} from "lucide-react";
import { sendMoney, countryCorridors, howItWorks } from "../content";
import SmartLink from "../components/SmartLink";
import Flag from "../components/Flag";
import { CoPayMark } from "../components/CoPayLogo";

const methodIcons = { "Bank transfer": Landmark, "Debit card": CreditCard, "Credit card": CreditCard };

// Flags drawn at 3:2 get clipped into a circle by an overflowing wrapper.
function CircleFlag({ code, className = "h-12 w-12" }) {
  return (
    <span
      className={`flex shrink-0 items-center justify-center overflow-hidden rounded-full shadow-sm ring-1 ring-navy-950/10 ${className}`}
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
    <div className="w-full max-w-md rounded-3xl bg-white p-7 shadow-2xl">
      <h2 className="text-center text-xl font-extrabold text-navy-950">{sendCard.heading}</h2>

      <label className="mt-6 block text-xs font-semibold text-navy-950/60">
        {sendCard.fromLabel}
        <span className="mt-1.5 flex items-center gap-2.5 rounded-xl border border-navy-950/15 px-4 py-3">
          <Flag code={sendCard.from.countryCode} className="h-4 w-6 rounded-sm" />
          <span className="text-sm font-semibold text-navy-950">{sendCard.from.name}</span>
        </span>
      </label>

      <label className="mt-4 block text-xs font-semibold text-navy-950/60">
        {sendCard.toLabel}
        <span className="relative mt-1.5 block">
          <select
            value={dest}
            onChange={(e) => setDest(e.target.value)}
            className="w-full appearance-none rounded-xl border border-navy-950/15 bg-white px-4 py-3 text-sm font-semibold text-navy-950 focus:border-brand-500 focus:outline-none"
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
            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-navy-950/40"
          />
        </span>
      </label>

      <button
        type="button"
        onClick={() => onStart(dest)}
        className="mt-6 w-full rounded-full bg-gradient-to-r from-brand-500 to-brand-600 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-600/30 transition hover:from-brand-400 hover:to-brand-500"
      >
        {sendCard.cta}
      </button>
    </div>
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
    <section className="bg-navy-950 py-20">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          {reviews.heading}
        </h2>

        <div key={active} className="mt-12 animate-[fadeIn_.4s_ease]">
          <Quote size={28} className="mx-auto text-brand-400" />
          <p className="mt-4 text-lg font-bold text-white">{review.title}</p>
          <p className="mx-auto mt-3 max-w-xl leading-relaxed text-white/70">{review.body}</p>
          <p className="mt-5 text-sm font-bold text-white">{review.name}</p>
          <p className="text-xs text-white/50">{review.detail}</p>
        </div>

        <div className="mt-8 flex items-center justify-center gap-6">
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
                  i === active ? "w-6 bg-brand-400" : "w-2 bg-white/20"
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

        <p className="mx-auto mt-10 max-w-2xl text-xs leading-relaxed text-white/35">
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
      <section className="relative overflow-hidden bg-navy-950 py-16 lg:py-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{
            background:
              "radial-gradient(600px circle at 15% 20%, rgba(91,141,239,0.3), transparent 60%), radial-gradient(500px circle at 85% 80%, rgba(36,56,122,0.6), transparent 60%)",
          }}
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-10 lg:px-8">
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center gap-3 lg:justify-start">
              <CoPayMark size={44} />
              <div className="text-left">
                <p className="text-3xl font-bold tracking-tight text-white">
                  {sendMoney.brand}
                </p>
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-brand-400">
                  {sendMoney.poweredBy}
                </p>
              </div>
            </div>

            <h1 className="mt-8 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl">
              {sendMoney.heading}
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/60 lg:mx-0">
              {sendMoney.subhead}
            </p>
          </div>

          <div className="mx-auto w-full max-w-md lg:justify-self-end">
            <SendCard onStart={startOnboarding} />
          </div>
        </div>

        <div className="relative mx-auto mt-16 max-w-5xl px-6 lg:px-8">
          <p className="text-center text-sm font-bold text-white">{sendMoney.flagStrip}</p>
          <div className="mt-6 flex flex-wrap items-start justify-center gap-x-10 gap-y-6">
            {countryCorridors.map((country) => (
              <div key={country.countryCode} className="flex w-16 flex-col items-center gap-2">
                <CircleFlag code={country.countryCode} className="h-11 w-11" />
                <span className="text-center text-xs text-white/60">{country.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="text-center text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl">
            {howItWorks.heading}
          </h2>
          <p className="mt-3 text-center text-navy-950/60">{howItWorks.subhead}</p>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {howItWorks.steps.map((step) => (
              <div key={step.number} className="text-center md:text-left">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-navy-950 text-sm font-bold text-white md:mx-0">
                  {step.number}
                </div>
                <h3 className="mt-5 text-lg font-bold text-navy-950">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-950/60">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Reviews />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl">
            {sendMoney.countriesGrid.heading}
          </h2>
          <p className="mt-3 text-navy-950/60">{sendMoney.countriesGrid.subhead}</p>

          <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-3">
            {countryCorridors.map((country) => {
              const inner = (
                <div className="flex items-center gap-3 rounded-2xl border border-navy-950/10 px-5 py-4 text-left transition hover:border-brand-500/40 hover:shadow-md">
                  <CircleFlag code={country.countryCode} className="h-9 w-9" />
                  <div>
                    <p className="text-sm font-bold text-navy-950">{country.name}</p>
                    <p className="text-xs text-navy-950/50">{country.currency}</p>
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
          <p className="mt-5 text-xs text-navy-950/40">{sendMoney.countriesGrid.note}</p>

          <button
            type="button"
            onClick={() => startOnboarding()}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy-950 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-navy-800"
          >
            Get started
            <ArrowRight size={16} />
          </button>
        </div>
      </section>

      <section className="bg-navy-950/[0.02] py-16">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="text-lg font-bold text-navy-950">Accepted payment methods</h2>
          <div className="mt-5 flex flex-wrap gap-4">
            {sendMoney.paymentMethods.map((method) => {
              const Icon = methodIcons[method] || WalletIcon;
              return (
                <div
                  key={method}
                  className="flex items-center gap-2.5 rounded-full border border-navy-950/10 bg-white px-5 py-2.5 text-sm font-semibold text-navy-950/70"
                >
                  <Icon size={16} className="text-brand-500" />
                  {method}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
