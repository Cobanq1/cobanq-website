import { stats } from "../content";

// A colored underline per stat keeps the dark band lively without
// competing with the numbers themselves.
const bars = ["bg-brand-400", "bg-emerald-400", "bg-amber-400", "bg-violet-400"];

export default function Stats() {
  return (
    <section className="bg-navy-950 py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 lg:grid-cols-4 lg:px-8">
        {stats.map((stat, i) => (
          <div key={stat.label} className="text-center">
            <p className="font-num text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              {stat.value}
            </p>
            <div className={`mx-auto mt-3 h-1 w-8 rounded-full ${bars[i % bars.length]}`} />
            <p className="mt-3 text-sm text-white/50">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
