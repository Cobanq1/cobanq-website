import { useRef, useState } from "react";
import { Quote, Ship, Store, Users, Laptop, ChevronLeft, ChevronRight } from "lucide-react";
import { successStories } from "../content";
import PersonAvatar from "./PersonAvatar";
import Flag from "./Flag";

const icons = { Ship, Store, Users, Laptop };

export default function CustomerStories() {
  const slideRefs = useRef([]);
  const [active, setActive] = useState(0);

  const goTo = (i) => {
    const clamped = Math.max(0, Math.min(successStories.length - 1, i));
    setActive(clamped);
    slideRefs.current[clamped]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  };

  return (
    <section className="bg-gradient-to-b from-brand-50/40 to-white py-24">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
        <span className="text-xs font-semibold uppercase tracking-widest text-brand-600">
          Built for real people
        </span>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl">
          Customer success stories
        </h2>
        <p className="mt-4 text-lg text-navy-950/60">
          From freelancers to wholesalers, see how people like you move money with CoBanq.
          <span className="block text-xs text-navy-950/35">
            (Illustrative scenarios — names and details are invented for this redesign.)
          </span>
        </p>
      </div>

      <div className="relative mt-12">
        <div className="flex justify-center gap-6 overflow-x-auto px-6 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {successStories.map((story, i) => {
            const Icon = icons[story.icon];
            return (
              <div
                key={story.name}
                ref={(el) => (slideRefs.current[i] = el)}
                className={`w-[88vw] max-w-[480px] shrink-0 overflow-hidden rounded-3xl border bg-white shadow-sm transition-all duration-300 ${
                  active === i ? "border-brand-500 opacity-100" : "border-navy-950/10 opacity-40"
                }`}
              >
                <div className="grid sm:grid-cols-2">
                  <div className="p-8">
                    <Quote className="text-brand-500" size={26} />
                    <p className="mt-4 text-sm leading-relaxed text-navy-950/80">{story.quote}</p>
                    <p className="mt-6 text-sm font-bold text-navy-950">{story.name}</p>
                    <p className="text-xs text-navy-950/50">{story.role}</p>
                    <p className="mt-1 flex items-center gap-1.5 text-xs font-semibold text-navy-950/60">
                      <Flag code={story.countryCode} className="h-3.5 w-5 rounded-sm" />
                      {story.country}
                    </p>
                  </div>
                  <div className="relative flex flex-col items-center justify-center gap-3 overflow-hidden bg-gradient-to-br from-navy-900 to-navy-950 p-8">
                    <div
                      className="pointer-events-none absolute inset-0 opacity-70"
                      style={{
                        background:
                          "radial-gradient(160px circle at 50% 40%, rgba(91,141,239,0.4), transparent 70%)",
                      }}
                    />
                    <PersonAvatar
                      seed={story.name}
                      size={168}
                      className="relative shadow-2xl ring-4 ring-white/10"
                    />
                    <span className="relative inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/80">
                      <Icon size={12} />
                      {story.role}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <button
          type="button"
          onClick={() => goTo(active - 1)}
          disabled={active === 0}
          aria-label="Previous story"
          className="absolute left-2 top-1/2 hidden -translate-y-1/2 items-center justify-center rounded-full border border-navy-950/10 bg-white p-3 text-navy-950/60 shadow-md transition hover:text-navy-950 disabled:opacity-30 sm:flex"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          type="button"
          onClick={() => goTo(active + 1)}
          disabled={active === successStories.length - 1}
          aria-label="Next story"
          className="absolute right-2 top-1/2 hidden -translate-y-1/2 items-center justify-center rounded-full border border-navy-950/10 bg-white p-3 text-navy-950/60 shadow-md transition hover:text-navy-950 disabled:opacity-30 sm:flex"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      <div className="mt-6 flex justify-center gap-2">
        {successStories.map((story, i) => (
          <button
            key={story.name}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Show story from ${story.name}`}
            className={`h-2 rounded-full transition-all ${
              i === active ? "w-6 bg-brand-500" : "w-2 bg-navy-950/15"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
