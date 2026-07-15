import {
  LayoutDashboard,
  CreditCard,
  Users,
  Repeat,
  ArrowLeftRight,
  Bell,
  Send,
  RefreshCcw,
  HelpCircle,
  User,
  Briefcase,
  ChevronDown,
} from "lucide-react";
import { dashboardPreview } from "../content";
import Flag from "./Flag";

const navIcons = {
  Dashboard: LayoutDashboard,
  Payments: CreditCard,
  Beneficiaries: Users,
  "Foreign Exchange": Repeat,
  Transactions: ArrowLeftRight,
};

const quickActionIcons = { Send, RefreshCcw };
const avatarIcons = { person: User, company: Briefcase };

const statusStyles = {
  Completed: "border border-emerald-300 text-emerald-700",
  Approved: "border border-brand-300 text-brand-600",
};

export default function DashboardPreview() {
  const { userName, userInitials, navItems, quickActions, balances, account, payments, needHelp } =
    dashboardPreview;

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl">
          {dashboardPreview.heading}
        </h2>
        <p className="mt-4 text-lg text-navy-950/60">{dashboardPreview.subhead}</p>
      </div>

      <div className="mx-auto mt-12 max-w-6xl px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-navy-950/10 bg-white shadow-2xl">
          <div className="flex items-center gap-1.5 border-b border-navy-950/10 bg-navy-950/[0.03] px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </div>

          <div className="flex flex-col lg:flex-row">
            <div
              className="flex shrink-0 flex-col justify-between p-5 lg:w-52"
              style={{
                background: "linear-gradient(180deg, #050b1a 0%, #111c42 55%, #24387a 100%)",
              }}
            >
              <div>
                <span
                  className="text-lg font-semibold text-white"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  CoBanq
                </span>
                <nav className="mt-8 flex flex-row gap-1 overflow-x-auto lg:flex-col lg:overflow-visible">
                  {navItems.map((item, i) => {
                    const Icon = navIcons[item];
                    return (
                      <span
                        key={item}
                        className={`flex shrink-0 items-center gap-2.5 whitespace-nowrap rounded-lg px-3 py-2 text-xs font-semibold ${
                          i === 0 ? "bg-brand-500 text-white" : "text-white/60"
                        }`}
                      >
                        <Icon size={14} />
                        {item}
                      </span>
                    );
                  })}
                </nav>
              </div>
              <div className="mt-8 hidden text-[10px] leading-relaxed text-white/30 lg:block">
                <p>{dashboardPreview.version}</p>
                <p>{dashboardPreview.lastLogin}</p>
              </div>
            </div>

            <div className="flex-1 p-6 lg:p-8">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-extrabold text-navy-950">
                    Welcome back {userName}!
                  </h3>
                  <p className="text-xs text-navy-950/50">Here is your financial overview.</p>
                </div>
                <div className="flex items-center gap-3">
                  <Bell size={16} className="text-navy-950/40" />
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-navy-950/10 text-xs font-bold text-navy-950/70">
                    {userInitials}
                  </span>
                </div>
              </div>

              <p className="mt-6 text-xs font-bold uppercase tracking-wide text-navy-950/50">
                Quick Actions
              </p>
              <div className="mt-2 grid grid-cols-2 gap-3">
                {quickActions.map((action) => {
                  const Icon = quickActionIcons[action.icon];
                  return (
                    <div
                      key={action.label}
                      className="flex flex-col items-center gap-2 rounded-2xl border border-navy-950/10 px-4 py-5"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                        <Icon size={17} />
                      </span>
                      <span className="text-xs font-bold uppercase tracking-wide text-navy-950">
                        {action.label}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-5 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wide text-navy-950/40" />
                <span className="flex items-center gap-1.5 rounded-full border border-navy-950/10 px-3 py-1.5 text-xs font-semibold text-navy-950/70">
                  <Flag code="us" className="h-3.5 w-5 rounded-sm" />
                  {dashboardPreview.activeCurrency}
                  <ChevronDown size={12} />
                </span>
              </div>

              <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {balances.map((b) => (
                  <div
                    key={b.code + b.amount}
                    className={`rounded-2xl border p-4 ${
                      b.active ? "border-brand-500" : "border-navy-950/10"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <Flag code={b.countryCode} className="h-4 w-6 rounded-sm" />
                      <span className="text-xs font-semibold text-navy-950/50">{b.code}</span>
                    </div>
                    <p className="mt-2 text-lg font-bold text-navy-950">{b.amount}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 overflow-hidden rounded-2xl border border-navy-950/10">
                <p className="border-b border-navy-950/10 px-4 py-3 text-sm font-bold text-navy-950">
                  Recent Payments
                </p>
                <div className="hidden grid-cols-[1fr_auto_auto_auto_auto] gap-4 border-b border-navy-950/10 px-4 py-2 text-[10px] font-bold uppercase tracking-wide text-navy-950/40 sm:grid">
                  <span>Transaction</span>
                  <span>Date</span>
                  <span>Amount</span>
                  <span>Fee</span>
                  <span>Status</span>
                </div>
                <div className="divide-y divide-navy-950/5">
                  {payments.map((p) => {
                    const AvatarIcon = avatarIcons[p.avatarType];
                    return (
                      <div
                        key={p.name}
                        className="grid grid-cols-[1fr_auto] items-center gap-3 px-4 py-3 sm:grid-cols-[1fr_auto_auto_auto_auto]"
                      >
                        <div className="flex items-center gap-2.5 overflow-hidden">
                          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-navy-950/5 text-navy-950/40">
                            <AvatarIcon size={13} />
                          </span>
                          <p className="truncate text-xs font-semibold text-navy-950">{p.name}</p>
                        </div>
                        <span className="hidden text-xs text-navy-950/40 sm:block">
                          {p.date || "—"}
                        </span>
                        <span className="hidden items-center gap-1.5 text-xs font-bold text-navy-950 sm:flex">
                          <Flag code={p.countryCode} className="h-3.5 w-5 rounded-sm" />
                          {p.amount}
                        </span>
                        <span className="hidden text-xs text-navy-950/40 sm:block">{p.fee}</span>
                        <span
                          className={`justify-self-end rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase ${statusStyles[p.status]}`}
                        >
                          {p.status}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="flex shrink-0 flex-col gap-4 border-t border-navy-950/10 p-6 lg:w-72 lg:border-l lg:border-t-0">
              <div className="rounded-2xl bg-navy-950 p-4 text-white">
                <p className="text-sm font-bold">{account.name}</p>
                <p className="mt-1 text-[11px] leading-relaxed text-white/50">{account.address}</p>
                <div className="mt-4 grid grid-cols-2 gap-3 border-t border-white/10 pt-4">
                  <div>
                    <p className="text-[10px] uppercase text-white/40">Account No</p>
                    <p className="text-xs font-semibold">{account.accountNo}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase text-white/40">Sort Code</p>
                    <p className="text-xs font-semibold">{account.sortCode}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase text-white/40">SWIFT/BIC</p>
                    <p className="text-xs font-semibold">{account.swift}</p>
                  </div>
                </div>
                <div className="mt-3 border-t border-white/10 pt-3">
                  <p className="text-[10px] uppercase text-white/40">IBAN</p>
                  <p className="text-xs font-semibold">{account.iban}</p>
                </div>
                <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3">
                  <p className="text-[10px] text-white/40">{account.indexLabel}</p>
                  <div className="flex gap-1">
                    <span className="h-1.5 w-4 rounded-full bg-brand-500" />
                    <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-navy-950 p-4">
                <p className="flex items-center gap-1.5 text-sm font-bold text-white">
                  <HelpCircle size={15} className="text-brand-400" />
                  {needHelp.heading}
                </p>
                <p className="mt-1.5 text-[11px] leading-relaxed text-white/50">{needHelp.body}</p>
                <span className="mt-3 inline-block rounded-full bg-brand-500 px-3.5 py-1.5 text-[10px] font-bold uppercase text-white">
                  {needHelp.cta}
                </span>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-4 text-center text-xs text-navy-950/35">{dashboardPreview.disclaimer}</p>
      </div>
    </section>
  );
}
