import { stats } from "../content";

export default function Stats() {
  return (
    <section className="bg-navy-950 py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 lg:grid-cols-4 lg:px-8">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              {stat.value}
            </p>
            <p className="mt-2 text-sm text-white/50">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
