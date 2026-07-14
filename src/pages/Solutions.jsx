import { Link } from "react-router-dom";
import { Send, Wallet, Building2, Landmark, ArrowRight } from "lucide-react";
import { solutions } from "../content";

const icons = { Send, Wallet, Building2, Landmark };

export default function Solutions() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-navy-950 sm:text-5xl">
          {solutions.heading}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-navy-950/60">{solutions.subhead}</p>
      </div>

      <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-6 px-6 sm:grid-cols-2 lg:px-8">
        {solutions.items.map((item) => {
          const Icon = icons[item.icon];
          return (
            <div
              key={item.title}
              className="group rounded-3xl border border-navy-950/10 p-8 transition hover:-translate-y-1 hover:border-brand-500/30 hover:shadow-xl hover:shadow-navy-950/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-50 to-brand-100 text-brand-600 transition group-hover:from-brand-500 group-hover:to-brand-600 group-hover:text-white">
                <Icon size={22} />
              </div>
              <h3 className="mt-6 text-lg font-bold text-navy-950">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-950/60">{item.description}</p>
              <Link
                to={item.linkTo}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700"
              >
                {item.linkLabel}
                <ArrowRight size={14} />
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
