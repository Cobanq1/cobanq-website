import { Link, useOutletContext } from "react-router-dom";
import {
  ArrowRight,
  Building2,
  Check,
  Globe,
  Headset,
  Landmark,
  Laptop,
  Palette,
  Send,
  ShieldCheck,
  Tags,
  Users,
  Wallet,
} from "lucide-react";
import { solutions } from "../content";
import PersonPhoto from "../components/PersonPhoto";

const icons = { Send, Wallet, Building2, Landmark, Laptop, Users, Palette };
const platformIcons = { ShieldCheck, Globe, Tags, Headset };

function SolutionSection({ item, index }) {
  const Icon = icons[item.icon] || Send;
  // Alternate which side the portrait sits on, so the page reads as a
  // sequence of spreads rather than a stack of identical rows.
  const flip = index % 2 === 1;

  return (
    <section
      id={item.id}
      className={`scroll-mt-24 py-16 ${index % 2 === 1 ? "bg-navy-950/[0.02]" : "bg-white"}`}
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* Portrait */}
        <div className={flip ? "lg:order-last" : ""}>
          <div className="relative mx-auto aspect-[4/3] w-full max-w-lg overflow-hidden rounded-[28px] ring-1 ring-navy-950/10">
            <PersonPhoto
              photo={item.photo}
              seed={item.seed}
              alt={`${item.title} — CoBanq`}
              size={150}
              rounded="rounded-[28px]"
              fill
              className="h-full w-full"
            />
          </div>
        </div>

        {/* Copy */}
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
              <Icon size={20} />
            </span>
            {item.brand && (
              <span className="rounded-full bg-navy-950 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                {item.brand}
              </span>
            )}
            <span className="text-xs font-semibold uppercase tracking-wider text-navy-950/40">
              {item.forWho}
            </span>
          </div>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-navy-950">
            {item.title}
          </h2>
          <p className="mt-1.5 text-lg font-semibold text-brand-600">{item.tagline}</p>
          <p className="mt-4 leading-relaxed text-navy-950/60">{item.description}</p>

          <ul className="mt-6 grid gap-2.5">
            {item.features.map((feature) => (
              <li key={feature} className="flex gap-3">
                <Check size={17} className="mt-0.5 shrink-0 text-brand-500" strokeWidth={2.5} />
                <span className="text-sm leading-relaxed text-navy-950/70">{feature}</span>
              </li>
            ))}
          </ul>

          {item.tags && (
            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-navy-950/40">
                {item.tagsLabel}
              </p>
              <div className="mt-2.5 flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-navy-950/5 px-3 py-1 text-xs font-semibold text-navy-950/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          <Link
            to={item.linkTo}
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-navy-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-navy-800"
          >
            {item.linkLabel}
            <ArrowRight size={15} />
          </Link>

          {item.note && <p className="mt-4 text-xs text-navy-950/40">{item.note}</p>}
        </div>
      </div>
    </section>
  );
}

export default function Solutions() {
  const { openGetStarted } = useOutletContext();

  return (
    <>
      {/* ---------------- Hero ---------------- */}
      <section className="relative overflow-hidden bg-navy-950 py-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(600px circle at 15% 20%, rgba(91,141,239,0.3), transparent 60%), radial-gradient(520px circle at 85% 80%, rgba(36,56,122,0.6), transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-400">
            {solutions.eyebrow}
          </p>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl">
            {solutions.heading}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
            {solutions.subhead}
          </p>

          <div className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-6 sm:grid-cols-4">
            {solutions.trust.map((stat) => (
              <div key={stat.label}>
                <p className="font-num text-2xl font-extrabold text-white sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs leading-snug text-white/45">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Chooser ---------------- */}
      <section className="border-b border-navy-950/[0.06] bg-white py-14">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="text-center text-2xl font-extrabold tracking-tight text-navy-950">
            {solutions.chooserHeading}
          </h2>
          <p className="mt-2 text-center text-sm text-navy-950/55">{solutions.chooserSub}</p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.chooser.map((row) => {
              // Most rows jump to a section on this page; ones that point at
              // a route need a Link so they navigate client-side.
              const isAnchor = row.to.startsWith("#");
              const className =
                "group flex items-center justify-between gap-3 rounded-2xl border border-navy-950/10 px-5 py-4 transition hover:border-brand-500/40 hover:shadow-md";
              const inner = (
                <>
                  <span className="text-sm font-semibold text-navy-950/75">“{row.who}”</span>
                  <span className="flex shrink-0 items-center gap-1 text-xs font-bold text-brand-600">
                    {row.label}
                    <ArrowRight size={13} className="transition group-hover:translate-x-0.5" />
                  </span>
                </>
              );

              return isAnchor ? (
                <a key={row.who} href={row.to} className={className}>
                  {inner}
                </a>
              ) : (
                <Link key={row.who} to={row.to} className={className}>
                  {inner}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------- Each solution in detail ---------------- */}
      {solutions.items.map((item, i) => (
        <SolutionSection key={item.id} item={item} index={i} />
      ))}

      {/* ---------------- Shared platform ---------------- */}
      <section className="bg-navy-950 py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="text-center text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            {solutions.platformHeading}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center leading-relaxed text-white/55">
            {solutions.platformSub}
          </p>

          <div className="mt-14 grid gap-8 sm:grid-cols-2">
            {solutions.platform.map((item) => {
              const Icon = platformIcons[item.icon] || ShieldCheck;
              return (
                <div key={item.title} className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-brand-400">
                    <Icon size={20} />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-white">{item.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-white/55">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl">
            {solutions.cta.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-navy-950/60">
            {solutions.cta.subhead}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button
              type="button"
              onClick={openGetStarted}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-brand-600 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-600/30 transition hover:from-brand-400 hover:to-brand-500 sm:w-auto"
            >
              {solutions.cta.primary}
              <ArrowRight size={16} />
            </button>
            <Link
              to="/contact"
              className="inline-flex w-full items-center justify-center rounded-full border border-navy-950/15 px-8 py-3.5 text-sm font-semibold text-navy-950 transition hover:bg-navy-950/[0.03] sm:w-auto"
            >
              {solutions.cta.secondary}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
