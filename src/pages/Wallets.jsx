import { useOutletContext } from "react-router-dom";
import { ArrowRight, Wallet as WalletIcon, Repeat, CreditCard, ShieldCheck } from "lucide-react";
import { wallets } from "../content";
import Flag from "../components/Flag";

const icons = { Wallet: WalletIcon, Repeat, CreditCard, ShieldCheck };
const currencyFlags = { GBP: "gb", USD: "us", EUR: "eu", JPY: "jp", PKR: "pk", AED: "ae" };

export default function Wallets() {
  const { openGetStarted } = useOutletContext();
  const { mockup } = wallets;

  return (
    <>
      <section className="relative overflow-hidden bg-navy-950">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(600px circle at 15% 20%, rgba(91,141,239,0.3), transparent 60%), radial-gradient(500px circle at 85% 80%, rgba(36,56,122,0.6), transparent 60%)",
          }}
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:py-28">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold text-brand-400">
              {wallets.eyebrow}
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl">
              {wallets.heading}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
              {wallets.subhead}
            </p>
            <button
              type="button"
              onClick={openGetStarted}
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-brand-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/30 transition hover:from-brand-400 hover:to-brand-500"
            >
              {wallets.cta}
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="relative mx-auto w-full max-w-sm lg:justify-self-end">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-widest text-white/50">
                {mockup.label}
              </p>
              <div className="mt-4 space-y-3">
                {mockup.balances.map((balance) => (
                  <div
                    key={balance.code}
                    className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3"
                  >
                    <span className="flex items-center gap-2.5 text-sm text-white/80">
                      <Flag code={currencyFlags[balance.code]} className="h-5 w-7 rounded" />
                      {balance.code}
                    </span>
                    <span className="text-sm font-semibold text-white">{balance.amount}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {wallets.features.map((item) => {
              const Icon = icons[item.icon];
              return (
                <div key={item.title} className="rounded-3xl border border-navy-950/10 p-7">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-600 text-white">
                    <Icon size={20} />
                  </div>
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
    </>
  );
}
