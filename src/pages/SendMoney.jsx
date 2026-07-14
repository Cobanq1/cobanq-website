import { useOutletContext } from "react-router-dom";
import { ArrowRight, CreditCard, Landmark, Wallet as WalletIcon } from "lucide-react";
import { sendMoney, countryCorridors, howItWorks } from "../content";
import SmartLink from "../components/SmartLink";
import Flag from "../components/Flag";

const methodIcons = { "Bank transfer": Landmark, "Debit card": CreditCard, "Credit card": CreditCard };

export default function SendMoney() {
  const { openGetStarted } = useOutletContext();

  return (
    <>
      <section className="relative overflow-hidden bg-navy-950 py-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{
            background:
              "radial-gradient(600px circle at 15% 20%, rgba(91,141,239,0.3), transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold text-brand-400">
            {sendMoney.eyebrow}
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            {sendMoney.heading}
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/60">
            {sendMoney.subhead}
          </p>
          <button
            type="button"
            onClick={openGetStarted}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-brand-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/30 transition hover:from-brand-400 hover:to-brand-500"
          >
            Get started
            <ArrowRight size={16} />
          </button>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-navy-950 sm:text-3xl">
            Popular corridors
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {countryCorridors.map((country) => {
              const card = (
                <div className="flex items-center gap-3 rounded-2xl border border-navy-950/10 px-5 py-4 transition hover:border-brand-500/40 hover:shadow-md">
                  <Flag code={country.countryCode} className="h-7 w-10 rounded-md shadow-sm" />
                  <div>
                    <p className="text-sm font-bold text-navy-950">{country.name}</p>
                    <p className="text-xs text-navy-950/50">{country.currency}</p>
                  </div>
                </div>
              );
              return country.to ? (
                <SmartLink key={country.name} to={country.to}>
                  {card}
                </SmartLink>
              ) : (
                <div key={country.name}>{card}</div>
              );
            })}
          </div>
          <p className="mt-4 text-xs text-navy-950/40">
            Countries with a page link through for local details — more corridors are supported
            beyond this list.
          </p>
        </div>
      </section>

      <section className="bg-navy-950/[0.02] py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-navy-950 sm:text-3xl">
            {howItWorks.heading}
          </h2>
          <p className="mt-3 text-navy-950/60">{howItWorks.subhead}</p>

          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
            {howItWorks.steps.map((step) => (
              <div key={step.number}>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-950 text-sm font-bold text-white">
                  {step.number}
                </div>
                <h3 className="mt-5 text-lg font-bold text-navy-950">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-950/60">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="text-lg font-bold text-navy-950">Accepted payment methods</h2>
          <div className="mt-5 flex flex-wrap gap-4">
            {sendMoney.paymentMethods.map((method) => {
              const Icon = methodIcons[method] || WalletIcon;
              return (
                <div
                  key={method}
                  className="flex items-center gap-2.5 rounded-full border border-navy-950/10 px-5 py-2.5 text-sm font-semibold text-navy-950/70"
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
