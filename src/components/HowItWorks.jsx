import { howItWorks } from "../content";
import AvatarStack from "./AvatarStack";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-navy-950/[0.02] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl">
            {howItWorks.heading}
          </h2>
          <p className="mt-4 text-lg text-navy-950/60">{howItWorks.subhead}</p>
          <div className="mt-6">
            <AvatarStack caption="Joined by thousands who've done this already" />
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3">
          {howItWorks.steps.map((step, i) => (
            <div key={step.number} className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-navy-950 text-lg font-bold text-white">
                {step.number}
              </div>
              <h3 className="mt-6 text-xl font-bold text-navy-950">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-navy-950/60">
                {step.description}
              </p>
              {i < howItWorks.steps.length - 1 && (
                <div className="absolute right-[-20px] top-7 hidden h-px w-10 bg-navy-950/15 md:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
