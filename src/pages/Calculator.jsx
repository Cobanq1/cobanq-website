import { useMemo, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { ArrowRight, ArrowRightLeft, Info } from "lucide-react";
import { calculator } from "../content";

export default function Calculator() {
  const { openGetStarted } = useOutletContext();
  const [amount, setAmount] = useState(500);
  const [fromCode, setFromCode] = useState("GBP");
  const [toCode, setToCode] = useState("PKR");

  const from = calculator.currencies.find((c) => c.code === fromCode);
  const to = calculator.currencies.find((c) => c.code === toCode);

  const { fee, sendAmount, receiveAmount, rate } = useMemo(() => {
    const amt = Number(amount) || 0;
    const fee = amt * (calculator.feePercent / 100);
    const sendAmount = Math.max(amt - fee, 0);
    const gbpAmount = sendAmount / from.rateToGbp;
    const receiveAmount = gbpAmount * to.rateToGbp;
    const rate = to.rateToGbp / from.rateToGbp;
    return { fee, sendAmount, receiveAmount, rate };
  }, [amount, from, to]);

  const swap = () => {
    setFromCode(toCode);
    setToCode(fromCode);
  };

  return (
    <section className="bg-navy-950/[0.02] py-20">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-navy-950 sm:text-5xl">
          {calculator.heading}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-navy-950/60">{calculator.subhead}</p>
      </div>

      <div className="mx-auto mt-12 max-w-xl px-6 lg:px-8">
        <div className="rounded-3xl bg-white p-8 shadow-xl shadow-navy-950/5">
          <label className="text-xs font-semibold text-navy-950/60">You send</label>
          <div className="mt-1.5 flex gap-3">
            <input
              type="number"
              min="0"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full rounded-xl border border-navy-950/15 px-4 py-3 text-lg font-bold text-navy-950 outline-none transition focus:border-brand-500"
            />
            <select
              value={fromCode}
              onChange={(e) => setFromCode(e.target.value)}
              className="rounded-xl border border-navy-950/15 px-3 py-3 text-sm font-semibold text-navy-950 outline-none transition focus:border-brand-500"
            >
              {calculator.currencies.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.code}
                </option>
              ))}
            </select>
          </div>

          <div className="my-5 flex justify-center">
            <button
              type="button"
              onClick={swap}
              aria-label="Swap currencies"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-950/5 text-navy-950/60 transition hover:bg-navy-950 hover:text-white"
            >
              <ArrowRightLeft size={16} />
            </button>
          </div>

          <label className="text-xs font-semibold text-navy-950/60">Recipient gets</label>
          <div className="mt-1.5 flex gap-3">
            <div className="flex w-full items-center rounded-xl border border-navy-950/15 bg-brand-50 px-4 py-3 text-lg font-bold text-navy-950">
              {receiveAmount.toLocaleString(undefined, { maximumFractionDigits: 2 })}
            </div>
            <select
              value={toCode}
              onChange={(e) => setToCode(e.target.value)}
              className="rounded-xl border border-navy-950/15 px-3 py-3 text-sm font-semibold text-navy-950 outline-none transition focus:border-brand-500"
            >
              {calculator.currencies.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.code}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-6 space-y-2 border-t border-navy-950/10 pt-5 text-sm">
            <div className="flex justify-between text-navy-950/60">
              <span>Exchange rate</span>
              <span className="font-semibold text-navy-950">
                1 {fromCode} = {rate.toLocaleString(undefined, { maximumFractionDigits: 4 })} {toCode}
              </span>
            </div>
            <div className="flex justify-between text-navy-950/60">
              <span>Fee ({calculator.feePercent}%)</span>
              <span className="font-semibold text-navy-950">
                {fee.toLocaleString(undefined, { maximumFractionDigits: 2 })} {fromCode}
              </span>
            </div>
            <div className="flex justify-between text-navy-950/60">
              <span>Amount converted</span>
              <span className="font-semibold text-navy-950">
                {sendAmount.toLocaleString(undefined, { maximumFractionDigits: 2 })} {fromCode}
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={openGetStarted}
            className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-brand-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/30 transition hover:from-brand-400 hover:to-brand-500"
          >
            Get started
            <ArrowRight size={16} />
          </button>
        </div>

        <div className="mt-5 flex items-start gap-2 text-xs text-navy-950/40">
          <Info size={14} className="mt-0.5 shrink-0" />
          {calculator.disclaimer}
        </div>
      </div>
    </section>
  );
}
