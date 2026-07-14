import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "../content";
import Avatar from "./Avatar";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const count = testimonials.items.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % count);
    }, 6000);
    return () => clearInterval(timer);
  }, [count]);

  const go = (delta) => setIndex((i) => (i + delta + count) % count);
  const active = testimonials.items[index];

  return (
    <section id="testimonials" className="bg-navy-950/[0.02] py-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h2 className="text-center text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl">
          {testimonials.heading}
        </h2>

        <div className="relative mt-14">
          <div className="rounded-3xl border border-navy-950/10 bg-white p-10 text-center shadow-sm">
            <Quote className="mx-auto text-brand-500" size={30} />
            <p className="mt-5 text-lg leading-relaxed text-navy-950/80">"{active.quote}"</p>

            <div className="mt-7 flex flex-col items-center gap-3">
              <Avatar seed={index} size={56} />
              <div>
                <p className="text-sm font-bold text-navy-950">{active.name}</p>
                <p className="text-xs text-navy-950/50">{active.role}</p>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 hidden -translate-x-14 -translate-y-1/2 items-center justify-center rounded-full border border-navy-950/10 bg-white p-3 text-navy-950/60 shadow-sm transition hover:text-navy-950 sm:flex"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 hidden translate-x-14 -translate-y-1/2 items-center justify-center rounded-full border border-navy-950/10 bg-white p-3 text-navy-950/60 shadow-sm transition hover:text-navy-950 sm:flex"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {testimonials.items.map((t, i) => (
            <button
              key={t.name}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show testimonial from ${t.name}`}
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
