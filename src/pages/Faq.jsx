import { useState } from "react";
import { ChevronDown, PlaneTakeoff, RefreshCcw, Lock, CircleDollarSign, FileCheck2 } from "lucide-react";
import { faq } from "../content";

const icons = { PlaneTakeoff, RefreshCcw, Lock, CircleDollarSign, FileCheck2 };

export default function Faq() {
  const [openKey, setOpenKey] = useState("0-0");

  return (
    <section className="bg-navy-950/[0.02] py-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-navy-950 sm:text-5xl">
            {faq.heading}
          </h1>
          <p className="mt-4 text-lg text-navy-950/60">{faq.subhead}</p>
        </div>

        <div className="mt-14 space-y-12">
          {faq.categories.map((category, ci) => {
            const Icon = icons[category.icon];
            return (
              <div key={category.name}>
                <div className="mb-4 flex items-center gap-3 border-b border-navy-950/10 pb-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-navy-950 text-white">
                    <Icon size={18} />
                  </span>
                  <h2 className="text-lg font-bold text-navy-950">{category.name}</h2>
                </div>

                <div className="space-y-3">
                  {category.items.map((item, ii) => {
                    const key = `${ci}-${ii}`;
                    const isOpen = openKey === key;
                    return (
                      <div
                        key={key}
                        className={`rounded-2xl border bg-white transition ${
                          isOpen ? "border-brand-500" : "border-navy-950/10"
                        }`}
                      >
                        <button
                          type="button"
                          onClick={() => setOpenKey(isOpen ? null : key)}
                          className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
                          aria-expanded={isOpen}
                        >
                          <span className="text-sm font-bold text-navy-950">{item.q}</span>
                          <span
                            className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-navy-950 text-white transition-transform ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          >
                            <ChevronDown size={15} />
                          </span>
                        </button>
                        {isOpen && (
                          <p className="px-6 pb-5 text-sm leading-relaxed text-navy-950/60">
                            {item.a}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
