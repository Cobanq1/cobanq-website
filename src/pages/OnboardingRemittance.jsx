import { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Banknote,
  Briefcase,
  Building2,
  Check,
  ChevronDown,
  Eye,
  EyeOff,
  Gift,
  GraduationCap,
  HandCoins,
  HeartHandshake,
  HelpCircle,
  Landmark,
  Lock,
  Mail,
  MoreHorizontal,
  PiggyBank,
  ReceiptText,
  Smartphone,
  Store,
  User,
  X,
} from "lucide-react";
import { remittanceOnboarding as flow, countryCorridors, site } from "../content";
import Flag from "../components/Flag";
import { CoPayMark, CoPayWordmark } from "../components/CoPayLogo";

const icons = {
  Landmark,
  Banknote,
  Smartphone,
  HelpCircle,
  HeartHandshake,
  ReceiptText,
  GraduationCap,
  PiggyBank,
  Gift,
  MoreHorizontal,
  User,
  Building2,
  Briefcase,
  Store,
  HandCoins,
};

function CircleFlag({ code, className = "h-10 w-10" }) {
  return (
    <span
      className={`flex shrink-0 items-center justify-center overflow-hidden rounded-full shadow-sm ring-1 ring-navy-950/10 ${className}`}
    >
      <Flag code={code} className="h-full w-[150%] shrink-0" />
    </span>
  );
}

function SelectedTick() {
  return (
    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-500 text-white">
      <Check size={12} strokeWidth={3} />
    </span>
  );
}

const inputClass =
  "w-full rounded-xl border border-navy-950/15 bg-white px-4 py-3 text-sm font-semibold text-navy-950 placeholder:font-normal placeholder:text-navy-950/35 focus:border-brand-500 focus:outline-none";

// Step 1 — email/password profile, styled like the embedded account
// onboarding: segmented Log in / Sign up control, labeled inputs with
// icons, legal microcopy. Submits via the footer button (form id).
function ProfileStep({ step, form, setForm }) {
  const [showPassword, setShowPassword] = useState(false);
  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  return (
    <div>
      <div className="grid grid-cols-2 rounded-2xl border border-navy-950/10 bg-navy-950/[0.03] p-1.5 text-center text-sm font-bold">
        <a
          href={site.onboardingUrl}
          className="rounded-xl py-2.5 text-navy-950/60 transition hover:text-navy-950"
        >
          {step.hintLinkLabel}
        </a>
        <span className="rounded-xl bg-navy-950 py-2.5 text-white shadow">Sign up</span>
      </div>

      <div className="mt-6 grid gap-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block text-xs font-semibold text-navy-950/60">
            {step.fields.firstName}
            <input
              required
              form="onboarding-profile"
              autoComplete="given-name"
              value={form.firstName}
              onChange={set("firstName")}
              className={`mt-1.5 ${inputClass}`}
            />
          </label>
          <label className="block text-xs font-semibold text-navy-950/60">
            {step.fields.lastName}
            <input
              required
              form="onboarding-profile"
              autoComplete="family-name"
              value={form.lastName}
              onChange={set("lastName")}
              className={`mt-1.5 ${inputClass}`}
            />
          </label>
        </div>

        <label className="block text-xs font-semibold text-navy-950/60">
          {step.fields.email}
          <span className="relative mt-1.5 block">
            <Mail
              size={16}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-navy-950/35"
            />
            <input
              required
              form="onboarding-profile"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={set("email")}
              className={`${inputClass} pl-11`}
            />
          </span>
        </label>

        <label className="block text-xs font-semibold text-navy-950/60">
          {step.fields.password}
          <span className="relative mt-1.5 block">
            <input
              required
              form="onboarding-profile"
              type={showPassword ? "text" : "password"}
              minLength={8}
              autoComplete="new-password"
              placeholder="Enter a password"
              value={form.password}
              onChange={set("password")}
              className={`${inputClass} pr-11`}
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded p-1 text-navy-950/40 hover:text-navy-950"
            >
              {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
            </button>
          </span>
          <span className="mt-1.5 block text-xs font-normal text-navy-950/45">
            {step.fields.passwordHint}
          </span>
        </label>
      </div>

      <p className="mt-6 text-xs leading-relaxed text-navy-950/45">
        By creating an account you agree to our{" "}
        <Link to="/terms" className="font-semibold text-brand-600 hover:underline">
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link to="/privacy" className="font-semibold text-brand-600 hover:underline">
          Privacy Policy
        </Link>
        . CoPay is an FCA-regulated service by CoBanq Ltd.
      </p>
    </div>
  );
}

// Step 3 — Remitly-style destination picker. From is locked to the UK;
// To is a real select plus popular-country flag shortcuts.
function CountryStep({ step, value, onSelect }) {
  const popular = step.popular
    .map((code) => countryCorridors.find((c) => c.countryCode === code))
    .filter(Boolean);

  return (
    <div>
      <label className="block text-xs font-semibold text-navy-950/60">
        {step.fromLabel}
        <span className="mt-1.5 flex items-center gap-2.5 rounded-xl border border-navy-950/15 bg-navy-950/[0.03] px-4 py-3">
          <Flag code={step.from.countryCode} className="h-4 w-6 rounded-sm" />
          <span className="flex-1 text-sm font-semibold text-navy-950">{step.from.name}</span>
          <span className="flex items-center gap-1.5 text-[11px] font-semibold text-navy-950/40">
            <Lock size={12} />
            {step.fromNote}
          </span>
        </span>
      </label>

      <label className="mt-4 block text-xs font-semibold text-navy-950/60">
        {step.toLabel}
        <span className="relative mt-1.5 block">
          <select
            value={value || ""}
            onChange={(e) => onSelect(e.target.value)}
            className="w-full appearance-none rounded-xl border border-navy-950/15 bg-white px-4 py-3 text-sm font-semibold text-navy-950 focus:border-brand-500 focus:outline-none"
          >
            <option value="">{step.toPlaceholder}</option>
            {countryCorridors.map((c) => (
              <option key={c.countryCode} value={c.countryCode}>
                {c.name} ({c.currency})
              </option>
            ))}
            <option value={step.otherOption.value}>{step.otherOption.label}</option>
          </select>
          <ChevronDown
            size={16}
            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-navy-950/40"
          />
        </span>
      </label>

      <div className="mt-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-wider text-navy-950/40">
          {step.popularLabel}
        </p>
        <div className="mt-4 flex items-start justify-center gap-8">
          {popular.map((c) => (
            <button
              key={c.countryCode}
              type="button"
              onClick={() => onSelect(c.countryCode)}
              className="group flex w-16 flex-col items-center gap-2"
            >
              <span
                className={`rounded-full transition ${
                  value === c.countryCode
                    ? "ring-2 ring-brand-500 ring-offset-2"
                    : "group-hover:ring-2 group-hover:ring-brand-500/40 group-hover:ring-offset-2"
                }`}
              >
                <CircleFlag code={c.countryCode} className="h-12 w-12" />
              </span>
              <span className="text-xs font-semibold text-navy-950/70">{c.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// Icon + title + subtitle option cards (account type, delivery method,
// purpose, source of income). Single column like the reference design.
function CardsStep({ step, value, onSelect }) {
  return (
    <div className="grid gap-3">
      {step.options.map((opt) => {
        const Icon = icons[opt.icon] || HelpCircle;
        const selected = value === opt.value;
        return (
          <button
            key={opt.value}
            type="button"
            aria-pressed={selected}
            onClick={() => onSelect(opt.value)}
            className={`flex items-start gap-3.5 rounded-2xl border-2 px-5 py-4 text-left transition ${
              selected
                ? "border-brand-500 bg-brand-50"
                : "border-navy-950/10 bg-white hover:border-brand-500/40 hover:shadow-md"
            }`}
          >
            <span
              className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                selected ? "bg-brand-500 text-white" : "bg-brand-50 text-brand-600"
              }`}
            >
              <Icon size={19} />
            </span>
            <span className="min-w-0 flex-1">
              <span className="flex items-center justify-between gap-2">
                <span className="text-sm font-bold text-navy-950">{opt.label}</span>
                {selected ? (
                  <SelectedTick />
                ) : (
                  <span className="h-5 w-5 shrink-0 rounded-full border-2 border-navy-950/20" />
                )}
              </span>
              <span className="mt-0.5 block text-xs leading-relaxed text-navy-950/55">
                {opt.sub}
              </span>
            </span>
          </button>
        );
      })}

      {step.businessNote && value === "business" && (
        <div className="rounded-2xl border border-brand-500/30 bg-brand-50 px-5 py-4 text-sm leading-relaxed text-navy-950/70 animate-[fadeIn_.3s_ease]">
          {step.businessNote}
        </div>
      )}
    </div>
  );
}

// Plain rows with a radio-style indicator (monthly volume).
function ListStep({ step, value, onSelect }) {
  return (
    <div className="grid gap-3">
      {step.options.map((opt) => {
        const selected = value === opt.value;
        return (
          <button
            key={opt.value}
            type="button"
            aria-pressed={selected}
            onClick={() => onSelect(opt.value)}
            className={`flex items-center justify-between gap-3 rounded-2xl border-2 px-5 py-4 text-left transition ${
              selected
                ? "border-brand-500 bg-brand-50"
                : "border-navy-950/10 bg-white hover:border-brand-500/40 hover:shadow-md"
            }`}
          >
            <span className="text-sm font-bold text-navy-950">{opt.label}</span>
            {selected ? (
              <SelectedTick />
            ) : (
              <span className="h-5 w-5 shrink-0 rounded-full border-2 border-navy-950/20" />
            )}
          </button>
        );
      })}
    </div>
  );
}

function DoneScreen({ answers, firstName }) {
  const { done, steps } = flow;

  const rows = [
    { label: done.fromRow.label, value: done.fromRow.value, flag: done.fromRow.countryCode },
    ...Object.entries(done.summaryLabels)
      .map(([id, label]) => {
        const value = answers[id];
        if (!value) return null;
        const step = steps.find((s) => s.id === id);
        if (step.type === "country") {
          const country = countryCorridors.find((c) => c.countryCode === value);
          return {
            label,
            value: country ? country.name : step.otherOption.label,
            flag: country ? country.countryCode : null,
          };
        }
        const opt = step.options.find((o) => o.value === value);
        return { label, value: opt ? opt.label : value, flag: null };
      })
      .filter(Boolean),
  ];

  return (
    <div className="text-center">
      <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-500 text-white shadow-lg shadow-brand-600/30">
        <Check size={30} strokeWidth={3} />
      </span>
      <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-navy-950">
        {done.heading(firstName)}
      </h1>
      <p className="mx-auto mt-3 max-w-md leading-relaxed text-navy-950/60">{done.subhead}</p>

      <div className="mx-auto mt-8 max-w-md rounded-3xl border border-navy-950/10 bg-white p-2 text-left shadow-sm">
        {rows.map((row, i) => (
          <div
            key={row.label}
            className={`flex items-center justify-between gap-3 px-5 py-3.5 ${
              i > 0 ? "border-t border-navy-950/[0.06]" : ""
            }`}
          >
            <span className="text-xs font-semibold text-navy-950/50">{row.label}</span>
            <span className="flex items-center gap-2 text-sm font-bold text-navy-950">
              {row.flag && <CircleFlag code={row.flag} className="h-5 w-5" />}
              {row.value}
            </span>
          </div>
        ))}
      </div>

      <Link
        to="/send-money"
        className="mt-6 inline-block text-sm font-semibold text-navy-950/60 hover:text-navy-950"
      >
        {done.secondary}
      </Link>
      <p className="mt-6 text-xs text-navy-950/35">{done.note}</p>
    </div>
  );
}

export default function OnboardingRemittance() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { steps } = flow;

  // ?to=pk from the Send Money card pre-selects the destination.
  const preselected = searchParams.get("to");
  const [answers, setAnswers] = useState(() =>
    countryCorridors.some((c) => c.countryCode === preselected)
      ? { destination: preselected }
      : {},
  );
  const [stepIndex, setStepIndex] = useState(0);
  const [profileForm, setProfileForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const done = stepIndex >= steps.length;
  const step = done ? null : steps[stepIndex];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [stepIndex]);

  const select = (value) => setAnswers((a) => ({ ...a, [step.id]: value }));
  const advance = () => setStepIndex((i) => i + 1);

  const businessSelected = step?.id === "accountType" && answers.accountType === "business";
  const footerDisabled = !done && step.type !== "profile" && !answers[step.id];

  const footerButton = done ? (
    <a
      href={site.onboardingUrl}
      className="flex w-full items-center justify-center gap-2 rounded-xl bg-navy-950 py-3.5 text-sm font-bold text-white transition hover:bg-navy-800"
    >
      {flow.done.cta}
      <ArrowRight size={16} />
    </a>
  ) : businessSelected ? (
    <a
      href={site.onboardingUrl}
      className="flex w-full items-center justify-center gap-2 rounded-xl bg-navy-950 py-3.5 text-sm font-bold text-white transition hover:bg-navy-800"
    >
      {step.businessCta}
      <ArrowRight size={16} />
    </a>
  ) : step.type === "profile" ? (
    <button
      type="submit"
      form="onboarding-profile"
      className="w-full rounded-xl bg-navy-950 py-3.5 text-sm font-bold text-white transition hover:bg-navy-800"
    >
      {step.submit}
    </button>
  ) : (
    <button
      type="button"
      disabled={footerDisabled}
      onClick={advance}
      className="w-full rounded-xl bg-navy-950 py-3.5 text-sm font-bold text-white transition enabled:hover:bg-navy-800 disabled:cursor-not-allowed disabled:opacity-30"
    >
      {step.next || flow.continueLabel}
    </button>
  );

  return (
    <div className="flex min-h-screen bg-white">
      {/* Brand panel — same treatment as the embedded account onboarding. */}
      <aside className="relative hidden w-[36%] max-w-md flex-col justify-between overflow-hidden bg-copay-ink p-10 lg:flex">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(500px circle at 20% 15%, rgba(43,113,173,0.3), transparent 60%), radial-gradient(600px circle at 80% 90%, rgba(29,80,133,0.4), transparent 60%)",
          }}
        />
        <div className="relative">
          {/* Inverted pill — the navy logo tile would vanish on this panel. */}
          <CoPayWordmark height={44} inverted />
          <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-copay-blue">
            {flow.poweredBy}
          </p>
        </div>
        <div className="relative">
          <h2 className="font-serif text-3xl font-bold leading-tight tracking-tight text-white">
            {flow.sidebar.heading}
          </h2>
          <p className="mt-4 max-w-sm leading-relaxed text-white/60">{flow.sidebar.sub}</p>
        </div>
        <p className="relative text-xs text-white/40">{flow.sidebar.copyright}</p>
      </aside>

      {/* Form panel */}
      <div className="flex min-h-screen flex-1 flex-col">
        <header className="border-b border-navy-950/[0.06]">
          <div className="mx-auto flex h-16 w-full max-w-2xl items-center justify-between px-6">
            {/* Compact brand for small screens where the panel is hidden. */}
            <div className="flex items-center gap-2.5 lg:hidden">
              <CoPayMark size={28} />
              <CoPayWordmark height={30} />
            </div>
            <div className="hidden items-center gap-3 lg:flex">
              {!done && stepIndex > 0 && (
                <button
                  type="button"
                  onClick={() => setStepIndex(stepIndex - 1)}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-950/50 transition hover:text-navy-950"
                >
                  <ArrowLeft size={15} />
                  {flow.back}
                </button>
              )}
            </div>
            <div className="flex items-center gap-4">
              {!done && (
                <span className="text-xs font-semibold uppercase tracking-wider text-navy-950/40">
                  {flow.stepLabel(stepIndex + 1, steps.length)}
                </span>
              )}
              <button
                type="button"
                onClick={() => navigate("/send-money")}
                aria-label={flow.exitLabel}
                className="flex h-9 w-9 items-center justify-center rounded-full text-navy-950/50 transition hover:bg-navy-950/5 hover:text-navy-950"
              >
                <X size={18} />
              </button>
            </div>
          </div>
          <div className="h-1 w-full bg-navy-950/[0.06]">
            <div
              className="h-full rounded-r-full bg-gradient-to-r from-brand-500 to-brand-600 transition-all duration-500"
              style={{
                width: `${(Math.min(stepIndex + 1, steps.length) / steps.length) * 100}%`,
              }}
            />
          </div>
        </header>

        <main className="mx-auto w-full max-w-2xl flex-1 px-6 py-10">
          {done ? (
            <div className="animate-[fadeIn_.4s_ease]">
              <DoneScreen answers={answers} firstName={profileForm.firstName.trim()} />
            </div>
          ) : (
            <div key={step.id} className="animate-[fadeIn_.4s_ease]">
              {stepIndex > 0 && (
                <button
                  type="button"
                  onClick={() => setStepIndex(stepIndex - 1)}
                  className="mb-6 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-950/50 transition hover:text-navy-950 lg:hidden"
                >
                  <ArrowLeft size={15} />
                  {flow.back}
                </button>
              )}

              <h1 className="text-2xl font-extrabold tracking-tight text-navy-950 sm:text-3xl">
                {step.question}
              </h1>
              <p className="mt-2 text-sm leading-relaxed text-navy-950/55">
                {step.hint}
                {step.hintLinkLabel && (
                  <>
                    {" "}
                    <a
                      href={site.onboardingUrl}
                      className="font-semibold text-brand-600 hover:underline"
                    >
                      {step.hintLinkLabel}
                    </a>
                  </>
                )}
              </p>

              {/* The profile form wraps nothing visible — inputs attach via
                  form="onboarding-profile" so the footer button can submit. */}
              {step.type === "profile" && (
                <form
                  id="onboarding-profile"
                  onSubmit={(e) => {
                    e.preventDefault();
                    advance();
                  }}
                />
              )}

              <div className="mt-8">
                {step.type === "profile" && (
                  <ProfileStep step={step} form={profileForm} setForm={setProfileForm} />
                )}
                {step.type === "country" && (
                  <CountryStep step={step} value={answers[step.id]} onSelect={select} />
                )}
                {step.type === "cards" && (
                  <CardsStep step={step} value={answers[step.id]} onSelect={select} />
                )}
                {step.type === "list" && (
                  <ListStep step={step} value={answers[step.id]} onSelect={select} />
                )}
              </div>
            </div>
          )}
        </main>

        <footer className="border-t border-navy-950/[0.06]">
          <div className="mx-auto w-full max-w-2xl px-6 py-5">
            {footerButton}
            <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-navy-950/40">
              <Lock size={12} className="text-brand-500" />
              {flow.trust}
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
