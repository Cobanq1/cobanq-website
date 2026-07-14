import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Send, Wallet, Building2, Landmark, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { useCases } from "../content";

const icons = { Send, Wallet, Building2, Landmark };

export default function UseCaseSlider() {
  const [index, setIndex] = useState(0);
  const count = useCases.length;

  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % count), 5000);
    return () => clearInterval(timer);
  }, [count]);

  const go = (delta) => setIndex((i) => (i + delta + count) % count);
  const active = useCases[index];
  const Icon = icons[active.icon];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-extrabold tracking-tight text-navy-950 sm:text-3xl">
            What you can do with CoBanq
          </h2>
          <div className="hidden gap-2 sm:flex">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-navy-950/10 text-navy-950/60 transition hover:bg-navy-950 hover:text-white"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-navy-950/10 text-navy-950/60 transition hover:bg-navy-950 hover:text-white"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl bg-navy-950">
          <div
            className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full opacity-60 blur-3xl transition-all duration-700"
            style={{ background: "linear-gradient(135deg, #3b6fe0, #5b8def)" }}
          />
          <div className="relative grid gap-8 p-10 sm:grid-cols-[1fr_auto] sm:items-center sm:p-14">
            <div key={active.id} className="animate-[fadeIn_0.5s_ease]">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-brand-400">
                {active.tag}
              </span>
              <h3 className="mt-5 text-2xl font-bold text-white sm:text-3xl">{active.title}</h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-white/60">
                {active.description}
              </p>
              <Link
                to={active.linkTo}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-400 hover:text-brand-300"
              >
                {active.linkLabel}
                <ArrowRight size={15} />
              </Link>
            </div>

            <div className="flex flex-col items-center gap-4 rounded-2xl bg-white/5 px-10 py-8 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-400 to-brand-600 text-white">
                <Icon size={26} />
              </div>
              <p className="text-3xl font-extrabold text-white">{active.stat.value}</p>
              <p className="text-xs text-white/50">{active.stat.label}</p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {useCases.map((uc, i) => (
            <button
              key={uc.id}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show ${uc.title}`}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-6 bg-brand-500" : "w-2 bg-navy-950/15"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
