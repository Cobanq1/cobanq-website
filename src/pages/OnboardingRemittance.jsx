import { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Banknote,
  Check,
  Gift,
  Globe,
  GraduationCap,
  HeartHandshake,
  HelpCircle,
  Landmark,
  MoreHorizontal,
  PiggyBank,
  ReceiptText,
  Smartphone,
  X,
} from "lucide-react";
import { remittanceOnboarding as flow, countryCorridors, site } from "../content";
import Flag from "../components/Flag";
import { CoPayMark } from "../components/CoPayLogo";

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
};

// Delay between picking an answer and sliding to the next question, so the
// selected state is visible before the screen changes.
const ADVANCE_MS = 280;

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

// "Where are you sending money?" — flag cards for each corridor plus a
// catch-all "another country" option.
function CountryStep({ step, value, onPick }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
      {countryCorridors.map((c) => {
        const selected = value === c.countryCode;
        return (
          <button
            key={c.countryCode}
            type="button"
            aria-pressed={selected}
            onClick={() => onPick(c.countryCode)}
            className={`flex flex-col items-center gap-2.5 rounded-2xl border-2 px-4 py-5 text-center transition ${
              selected
                ? "border-brand-500 bg-brand-50"
                : "border-navy-950/10 bg-white hover:border-brand-500/40 hover:shadow-md"
            }`}
          >
            <CircleFlag code={c.countryCode} />
            <span className="text-sm font-bold text-navy-950">{c.name}</span>
            <span className="text-xs text-navy-950/50">{c.currency}</span>
          </button>
        );
      })}
      <button
        type="button"
        aria-pressed={value === step.otherOption.value}
        onClick={() => onPick(step.otherOption.value)}
        className={`flex flex-col items-center gap-2.5 rounded-2xl border-2 px-4 py-5 text-center transition ${
          value === step.otherOption.value
            ? "border-brand-500 bg-brand-50"
            : "border-navy-950/10 bg-white hover:border-brand-500/40 hover:shadow-md"
        }`}
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-950/5 text-navy-950/60">
          <Globe size={20} />
        </span>
        <span className="text-sm font-bold text-navy-950">{step.otherOption.label}</span>
        <span className="text-xs text-navy-950/50">{step.otherOption.sub}</span>
      </button>
    </div>
  );
}

// Icon + title + subtitle option cards (delivery method, purpose).
function CardsStep({ step, value, onPick }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {step.options.map((opt) => {
        const Icon = icons[opt.icon] || HelpCircle;
        const selected = value === opt.value;
        return (
          <button
            key={opt.value}
            type="button"
            aria-pressed={selected}
            onClick={() => onPick(opt.value)}
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
                {selected && <SelectedTick />}
              </span>
              <span className="mt-0.5 block text-xs leading-relaxed text-navy-950/55">
                {opt.sub}
              </span>
            </span>
          </button>
        );
      })}
    </div>
  );
}

// Plain single-column rows with a radio-style indicator (amount, frequency).
function ListStep({ step, value, onPick }) {
  return (
    <div className="grid gap-3">
      {step.options.map((opt) => {
        const selected = value === opt.value;
        return (
          <button
            key={opt.value}
            type="button"
            aria-pressed={selected}
            onClick={() => onPick(opt.value)}
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

const inputClass =
  "w-full rounded-xl border border-navy-950/15 bg-white px-4 py-3 text-sm font-semibold text-navy-950 placeholder:font-normal placeholder:text-navy-950/35 focus:border-brand-500 focus:outline-none";

function AccountStep({ step, onSubmit }) {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", password: "" });
  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(form);
      }}
      className="grid gap-4"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-xs font-semibold text-navy-950/60">
          {step.fields.firstName}
          <input
            required
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
            autoComplete="family-name"
            value={form.lastName}
            onChange={set("lastName")}
            className={`mt-1.5 ${inputClass}`}
          />
        </label>
      </div>
      <label className="block text-xs font-semibold text-navy-950/60">
        {step.fields.email}
        <input
          required
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          value={form.email}
          onChange={set("email")}
          className={`mt-1.5 ${inputClass}`}
        />
      </label>
      <label className="block text-xs font-semibold text-navy-950/60">
        {step.fields.password}
        <input
          required
          type="password"
          minLength={8}
          autoComplete="new-password"
          value={form.password}
          onChange={set("password")}
          className={`mt-1.5 ${inputClass}`}
        />
        <span className="mt-1.5 block text-xs font-normal text-navy-950/45">
          {step.fields.passwordHint}
        </span>
      </label>

      <button
        type="submit"
        className="mt-2 w-full rounded-full bg-gradient-to-r from-brand-500 to-brand-600 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-600/30 transition hover:from-brand-400 hover:to-brand-500"
      >
        {step.submit}
      </button>
      <p className="text-center text-xs leading-relaxed text-navy-950/45">
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
    </form>
  );
}

function DoneScreen({ answers, firstName }) {
  const { done, steps } = flow;

  // Turn stored answer values back into their human-readable labels.
  const summary = Object.entries(done.summaryLabels)
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
    .filter(Boolean);

  return (
    <div className="text-center">
      <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-500 text-white shadow-lg shadow-brand-600/30">
        <Check size={30} strokeWidth={3} />
      </span>
      <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl">
        {done.heading(firstName)}
      </h1>
      <p className="mx-auto mt-3 max-w-md leading-relaxed text-navy-950/60">{done.subhead}</p>

      <div className="mx-auto mt-8 max-w-md rounded-3xl border border-navy-950/10 bg-white p-2 text-left shadow-sm">
        {summary.map((row, i) => (
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

      <div className="mt-8 flex flex-col items-center gap-3">
        <a
          href={site.onboardingUrl}
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-brand-600 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-600/30 transition hover:from-brand-400 hover:to-brand-500"
        >
          {done.cta}
          <ArrowRight size={16} />
        </a>
        <Link to="/send-money" className="text-sm font-semibold text-navy-950/60 hover:text-navy-950">
          {done.secondary}
        </Link>
      </div>
      <p className="mt-8 text-xs text-navy-950/35">{done.note}</p>
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
  const [firstName, setFirstName] = useState("");
  const done = stepIndex >= steps.length;
  const step = done ? null : steps[stepIndex];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [stepIndex]);

  const pick = (value) => {
    setAnswers((a) => ({ ...a, [step.id]: value }));
    setTimeout(() => setStepIndex((i) => i + 1), ADVANCE_MS);
  };

  const submitAccount = (form) => {
    setFirstName(form.firstName.trim());
    setStepIndex(steps.length);
  };

  return (
    <div className="flex min-h-screen flex-col bg-navy-950/[0.02]">
      <header className="border-b border-navy-950/[0.06] bg-white">
        <div className="mx-auto flex h-16 max-w-3xl items-center justify-between px-6">
          <Link to="/send-money" className="flex items-center gap-2.5">
            <CoPayMark size={30} />
            <span className="text-left">
              <span className="block text-lg font-bold leading-none tracking-tight text-navy-950">
                {flow.brand}
              </span>
              <span className="block text-[9px] font-semibold uppercase tracking-[0.2em] text-brand-600">
                {flow.poweredBy}
              </span>
            </span>
          </Link>
          <button
            type="button"
            onClick={() => navigate("/send-money")}
            aria-label={flow.exitLabel}
            className="flex h-9 w-9 items-center justify-center rounded-full text-navy-950/50 transition hover:bg-navy-950/5 hover:text-navy-950"
          >
            <X size={18} />
          </button>
        </div>
        {/* Progress bar hugs the header's bottom edge, like the account flow. */}
        <div className="h-1 w-full bg-navy-950/[0.06]">
          <div
            className="h-full rounded-r-full bg-gradient-to-r from-brand-500 to-brand-600 transition-all duration-500"
            style={{ width: `${(Math.min(stepIndex + 1, steps.length) / steps.length) * 100}%` }}
          />
        </div>
      </header>

      <main className="mx-auto w-full max-w-xl flex-1 px-6 py-10 sm:py-14">
        {done ? (
          <div className="animate-[fadeIn_.4s_ease]">
            <DoneScreen answers={answers} firstName={firstName} />
          </div>
        ) : (
          <div key={step.id} className="animate-[fadeIn_.4s_ease]">
            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={() => (stepIndex === 0 ? navigate("/send-money") : setStepIndex(stepIndex - 1))}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-950/50 transition hover:text-navy-950"
              >
                <ArrowLeft size={15} />
                {flow.back}
              </button>
              <span className="text-xs font-semibold uppercase tracking-wider text-navy-950/40">
                {flow.stepLabel(stepIndex + 1, steps.length)}
              </span>
            </div>

            <h1 className="mt-6 text-2xl font-extrabold tracking-tight text-navy-950 sm:text-3xl">
              {step.question}
            </h1>
            <p className="mt-2 text-sm leading-relaxed text-navy-950/55">{step.hint}</p>

            <div className="mt-8">
              {step.type === "country" && (
                <CountryStep step={step} value={answers[step.id]} onPick={pick} />
              )}
              {step.type === "cards" && (
                <CardsStep step={step} value={answers[step.id]} onPick={pick} />
              )}
              {step.type === "list" && (
                <ListStep step={step} value={answers[step.id]} onPick={pick} />
              )}
              {step.type === "account" && <AccountStep step={step} onSubmit={submitAccount} />}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
