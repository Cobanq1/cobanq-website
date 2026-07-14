import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { countryCorridors } from "../content";
import SmartLink from "./SmartLink";
import Flag from "./Flag";

export default function CountryCarousel() {
  const loop = [...countryCorridors, ...countryCorridors];

  return (
    <section className="border-y border-navy-950/5 bg-white py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight text-navy-950 sm:text-3xl">
              Where you can send money
            </h2>
            <p className="mt-2 text-sm text-navy-950/60">
              A growing list of corridors — tap a country with a page to see local details.
            </p>
          </div>
          <Link
            to="/send-money"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700"
          >
            See all corridors
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>

      <div className="group mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
        <div className="flex w-max animate-[marquee_32s_linear_infinite] gap-4 px-6 group-hover:[animation-play-state:paused]">
          {loop.map((country, i) => {
            const card = (
              <div className="flex w-56 shrink-0 items-center gap-4 rounded-2xl border border-navy-950/10 bg-white px-5 py-4 transition hover:border-brand-500/40 hover:shadow-md">
                <Flag code={country.countryCode} className="h-8 w-11 rounded-md shadow-sm" />
                <div>
                  <p className="text-sm font-bold text-navy-950">{country.name}</p>
                  <p className="text-xs text-navy-950/50">{country.currency}</p>
                </div>
              </div>
            );

            return country.to ? (
              <SmartLink key={`${country.name}-${i}`} to={country.to}>
                {card}
              </SmartLink>
            ) : (
              <div key={`${country.name}-${i}`}>{card}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
