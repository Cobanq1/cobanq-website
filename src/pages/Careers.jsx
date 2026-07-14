import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { careers } from "../content";

export default function Careers() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-2xl px-6 text-center lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-navy-950 sm:text-5xl">
          {careers.heading}
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-navy-950/60">{careers.intro}</p>
        <Link
          to={careers.ctaTo}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-brand-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/30 transition hover:from-brand-400 hover:to-brand-500"
        >
          {careers.cta}
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
