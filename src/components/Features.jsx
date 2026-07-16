import { useEffect, useRef, useState } from "react";
import { Globe, Zap, ShieldCheck, BarChart3, Wallet, Building2 } from "lucide-react";
import { features } from "../content";
import PersonAvatar from "./PersonAvatar";
import Flag from "./Flag";

const icons = { Globe, Zap, ShieldCheck, BarChart3, Wallet, Building2 };

// Cards that represent a specific kind of person get an illustrated
// portrait instead of a plain icon — the rest (fees, speed, security)
// stay icon-led since they're process concepts, not people.
const personSeeds = {
  "Multi-currency wallets": "Wallet Customer",
  "Send money home": "Remittance Sender",
  "Built for business": "Business Owner",
};

// Interactive demo data for the big wallet card — one illustrative invoice
// shown converting into whichever currency is selected. Amounts are static
// demo figures, not live rates.
const walletCurrencies = [
  { label: "GBP", flag: "gb", amount: "£1,240.00" },
  { label: "EUR", flag: "eu", amount: "€1,455.20" },
  { label: "USD", flag: "us", amount: "$1,573.40" },
  { label: "JPY", flag: "jp", amount: "¥232,800" },
  { label: "AED", flag: "ae", amount: "AED 5,778" },
  { label: "PKR", flag: "pk", amount: "₨440,650" },
];

const walletToasts = [
  { seed: "Wallet Customer", text: "Priya sent €420" },
  { seed: "Remittance Sender", text: "Omar received $1,150" },
  { seed: "Business Owner", text: "Ayesha paid a £96 invoice" },
  { seed: "Freelance Designer", text: "Carlos withdrew ₱18,500" },
];

// The big feature card is a working demo: pick a currency (or let it
// auto-cycle) and the mock incoming payment converts into it live.
function WalletHeroCard({ hero, HeroIcon }) {
  const [active, setActive] = useState(0);
  const [toast, setToast] = useState(0);
  const lastClick = useRef(0);

  // Auto-cycle through currencies, but stay out of the way for a while
  // after the visitor picks one themselves.
  useEffect(() => {
    const timer = setInterval(() => {
      if (Date.now() - lastClick.current < 8000) return;
      setActive((i) => (i + 1) % walletCurrencies.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setToast((i) => (i + 1) % walletToasts.length), 3500);
    return () => clearInterval(timer);
  }, []);

  const pick = (i) => {
    lastClick.current = Date.now();
    setActive(i);
  };

  const current = walletCurrencies[active];
  const currentToast = walletToasts[toast];

  return (
    <div className="relative flex h-full flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-8">
      <div className="flex h-full flex-col">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-400 to-brand-600 text-white">
          <HeroIcon size={26} />
        </div>
        <h3 className="mt-8 text-2xl font-bold text-white">{hero.title}</h3>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-white/60">{hero.description}</p>

        <div className="mt-8 flex max-w-md flex-wrap gap-2">
          {walletCurrencies.map((currency, i) => (
            <button
              key={currency.label}
              type="button"
              onClick={() => pick(i)}
              className={`flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold transition ${
                i === active
                  ? "border-brand-400 bg-brand-500/20 text-white"
                  : "border-white/15 bg-white/5 text-white/60 hover:border-white/30 hover:text-white"
              }`}
            >
              <Flag code={currency.flag} className="h-3 w-4 rounded-sm" />
              {currency.label}
            </button>
          ))}
        </div>
        <p className="mt-3 text-[11px] text-white/35">
          Tap a currency to see the same payment land in your wallet.
        </p>
      </div>

      <div className="relative mx-auto mt-10 w-full max-w-[300px] shrink-0 lg:mx-0 lg:mt-0">
        <div className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-navy-800 to-navy-950 p-5 shadow-2xl">
          <div
            key={current.label}
            className="absolute -right-3 -top-3 flex animate-[fadeIn_.35s_ease] items-center gap-1.5 rounded-full bg-gradient-to-r from-brand-500 to-brand-600 px-3.5 py-1.5 text-xs font-bold text-white shadow-lg"
          >
            <Flag code={current.flag} className="h-3.5 w-5 rounded-sm" />
            {current.label}
          </div>

          <p className="text-sm font-bold text-white">Incoming payment</p>

          <div className="mt-4 flex items-center justify-between border-b border-white/10 pb-3 text-xs">
            <span className="text-white/40">Date</span>
            <span className="font-semibold text-white/80">04/07</span>
          </div>
          <div className="mt-3 flex items-center justify-between border-b border-white/10 pb-3 text-xs">
            <span className="text-white/40">Invoice</span>
            <span className="font-semibold text-white/80">42481-317189</span>
          </div>

          <p className="mt-4 text-[10px] font-bold uppercase tracking-widest text-white/40">
            You receive
          </p>
          <p
            key={current.amount}
            className="mt-1 animate-[fadeIn_.35s_ease] text-3xl font-extrabold tracking-tight text-white"
          >
            {current.amount}
          </p>
          <p className="mt-1 text-[11px] text-emerald-400">
            No transfer fee — rate shown upfront
          </p>

          <button
            type="button"
            tabIndex={-1}
            className="mt-5 w-full rounded-full bg-gradient-to-r from-brand-500 to-brand-600 py-2.5 text-xs font-bold text-white shadow-lg shadow-brand-600/30"
          >
            Confirm
          </button>
        </div>

        <div
          key={currentToast.text}
          className="absolute -bottom-4 -left-4 flex animate-[fadeIn_.4s_ease] items-center gap-2 rounded-xl bg-white px-3 py-2 text-[11px] font-semibold text-navy-950 shadow-xl"
        >
          <PersonAvatar seed={currentToast.seed} size={22} />
          {currentToast.text}
        </div>
      </div>
    </div>
  );
}

export default function Features() {
  const [hero, ...rest] = features.items;
  const HeroIcon = icons[hero.icon];

  return (
    <section id="features" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl">
            {features.heading}
          </h2>
          <p className="mt-4 text-lg text-navy-950/60">{features.subhead}</p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <div className="relative overflow-hidden rounded-3xl bg-navy-950 p-8 sm:col-span-2 sm:row-span-2 lg:col-span-2">
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-70 blur-3xl"
              style={{ background: "linear-gradient(135deg, #3b6fe0, #5b8def)" }}
            />
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.15]"
              style={{
                backgroundImage:
                  "radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)",
                backgroundSize: "22px 22px",
              }}
            />
            <WalletHeroCard hero={hero} HeroIcon={HeroIcon} />
          </div>

          {rest.map((item) => {
            const Icon = icons[item.icon];
            const seed = personSeeds[item.title];
            return (
              <div
                key={item.title}
                className="group rounded-3xl border border-navy-950/10 p-7 transition hover:-translate-y-1 hover:border-brand-500/30 hover:shadow-xl hover:shadow-navy-950/5"
              >
                {seed ? (
                  <div className="relative inline-flex">
                    <PersonAvatar seed={seed} size={48} />
                    <div className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-brand-500 text-white ring-2 ring-white">
                      <Icon size={12} />
                    </div>
                  </div>
                ) : (
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-50 to-brand-100 text-brand-600 transition group-hover:from-brand-500 group-hover:to-brand-600 group-hover:text-white">
                    <Icon size={20} />
                  </div>
                )}
                <h3 className="mt-5 text-lg font-bold text-navy-950">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-950/60">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
