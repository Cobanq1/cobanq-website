import { Link } from "react-router-dom";

/** Page-width container. Every section uses this so the grid stays true. */
export function Container({ className = "", children }) {
  return <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>{children}</div>;
}

/** Small gold-ruled label that sits above a section heading. */
export function Eyebrow({ tone = "dark", children }) {
  const color = tone === "light" ? "text-gold-400" : "text-gold-600";
  return (
    <p className={`flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.22em] ${color}`}>
      <span className="h-px w-8 bg-current opacity-60" />
      {children}
    </p>
  );
}

export function SectionHeading({ eyebrow, title, lead, tone = "dark", align = "left", className = "" }) {
  const centred = align === "center";
  return (
    <div className={`${centred ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}>
      {eyebrow && (
        <div className={centred ? "flex justify-center" : ""}>
          <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
        </div>
      )}
      <h2
        className={`mt-4 text-balance text-3xl leading-[1.1] sm:text-4xl ${
          tone === "light" ? "text-white" : "text-ink-900"
        }`}
      >
        {title}
      </h2>
      {lead && (
        <p className={`mt-4 text-[17px] leading-relaxed ${tone === "light" ? "text-ink-200/80" : "text-ink-500"}`}>
          {lead}
        </p>
      )}
    </div>
  );
}

const buttonBase =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm " +
  "font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-3 disabled:opacity-60";

const buttonSizes = {
  md: "px-6 py-3",
  lg: "px-7 py-3.5 text-[15px]",
};

const buttonTones = {
  gold: "bg-gold-400 text-ink-950 hover:bg-gold-300 shadow-[0_10px_30px_-12px_rgba(231,178,75,0.8)]",
  ink: "bg-ink-900 text-white hover:bg-ink-800",
  outlineLight: "border border-white/25 text-white hover:border-gold-400 hover:text-gold-300",
  outlineDark: "border border-ink-200 text-ink-900 hover:border-ink-900 hover:bg-ink-50",
};

/** Renders as <Link>, <a> or <button> depending on the props given. */
export function Button({ to, href, tone = "gold", size = "md", className = "", children, ...rest }) {
  const cls = `${buttonBase} ${buttonSizes[size]} ${buttonTones[tone]} ${className}`;
  if (to) return <Link to={to} className={cls} {...rest}>{children}</Link>;
  if (href) return <a href={href} className={cls} {...rest}>{children}</a>;
  return <button className={cls} {...rest}>{children}</button>;
}

/** Dark page-top banner used by every page except the home page. */
export function PageHero({ eyebrow, title, lead, children }) {
  return (
    <section className="relative overflow-hidden bg-ink-950 pt-32 pb-16 sm:pt-40 sm:pb-20">
      <div className="absolute inset-0 bg-hatch" />
      <div className="pointer-events-none absolute -top-40 -right-24 h-96 w-96 rounded-full bg-gold-500/12 blur-3xl" />
      <Container className="relative">
        <div className="max-w-3xl animate-rise">
          {eyebrow && <Eyebrow tone="light">{eyebrow}</Eyebrow>}
          <h1 className="mt-5 text-balance text-4xl leading-[1.05] text-white sm:text-5xl">{title}</h1>
          {lead && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-200/75">{lead}</p>}
          {children && <div className="mt-8">{children}</div>}
        </div>
      </Container>
    </section>
  );
}
