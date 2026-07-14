import { useEffect, useRef, useState } from "react";
import { Quote, Ship, Store, Users, Laptop, ChevronLeft, ChevronRight } from "lucide-react";
import { successStories } from "../content";
import PersonAvatar from "./PersonAvatar";

const icons = { Ship, Store, Users, Laptop };

export default function CustomerStories() {
  const trackRef = useRef(null);
  const slideRefs = useRef([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.6) {
            const idx = slideRefs.current.indexOf(entry.target);
            if (idx !== -1) setActive(idx);
          }
        });
      },
      { root: track, threshold: [0.6] }
    );

    slideRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToIndex = (i) => {
    const el = slideRefs.current[i];
    if (el) el.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  };

  const go = (delta) => {
    const next = Math.max(0, Math.min(successStories.length - 1, active + delta));
    scrollToIndex(next);
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
        <div
          ref={trackRef}
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-[7vw] pb-4 [scrollbar-width:none] sm:px-[15vw] [&::-webkit-scrollbar]:hidden"
        >
          {successStories.map((story, i) => {
            const Icon = icons[story.icon];
            return (
              <div
                key={story.name}
                ref={(el) => (slideRefs.current[i] = el)}
                className="w-[82vw] max-w-[560px] shrink-0 snap-center overflow-hidden rounded-3xl border border-navy-950/10 bg-white shadow-sm transition-opacity duration-300"
                style={{ opacity: active === i ? 1 : 0.45 }}
              >
                <div className="grid sm:grid-cols-2">
                  <div className="p-8">
                    <Quote className="text-brand-500" size={26} />
                    <p className="mt-4 text-sm leading-relaxed text-navy-950/80">{story.quote}</p>
                    <p className="mt-6 text-sm font-bold text-navy-950">{story.name}</p>
                    <p className="text-xs text-navy-950/50">{story.role}</p>
                    <p className="mt-1 flex items-center gap-1.5 text-xs font-semibold text-navy-950/60">
                      <span>{story.flag}</span>
                      {story.country}
                    </p>
                  </div>
                  <div className="flex items-center justify-center bg-gradient-to-br from-navy-900 to-navy-950 p-8">
                    <div className="relative">
                      <PersonAvatar seed={story.name} size={128} className="shadow-xl" />
                      <div className="absolute -bottom-1 -right-1 flex h-9 w-9 items-center justify-center rounded-full bg-brand-500 text-white ring-4 ring-navy-950">
                        <Icon size={16} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous story"
          className="absolute left-2 top-1/2 hidden -translate-y-1/2 items-center justify-center rounded-full border border-navy-950/10 bg-white p-3 text-navy-950/60 shadow-md transition hover:text-navy-950 sm:flex"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next story"
          className="absolute right-2 top-1/2 hidden -translate-y-1/2 items-center justify-center rounded-full border border-navy-950/10 bg-white p-3 text-navy-950/60 shadow-md transition hover:text-navy-950 sm:flex"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      <div className="mt-6 flex justify-center gap-2">
        {successStories.map((story, i) => (
          <button
            key={story.name}
            type="button"
            onClick={() => scrollToIndex(i)}
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
