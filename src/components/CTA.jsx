import { ArrowRight } from "lucide-react";
import { ctaBanner } from "../content";

export default function CTA({ onGetStarted }) {
  return (
    <section className="bg-white px-6 py-20 lg:px-8">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] bg-navy-950 px-8 py-16 text-center shadow-2xl sm:px-16">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(600px circle at 15% 20%, rgba(91,141,239,0.35), transparent 60%), radial-gradient(600px circle at 90% 90%, rgba(59,111,224,0.3), transparent 60%)",
          }}
        />
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-60 blur-3xl"
          style={{ background: "linear-gradient(135deg, #3b6fe0, #5b8def)" }}
        />

        <div className="relative">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            {ctaBanner.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/60">{ctaBanner.subhead}</p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={onGetStarted}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-brand-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/30 transition hover:from-brand-400 hover:to-brand-500"
            >
              {ctaBanner.primaryCta}
              <ArrowRight size={16} />
            </button>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              {ctaBanner.secondaryCta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
