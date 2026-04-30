const STATS = [
  { num: "2,400+", label: "Active Members" },
  { num: "98%",    label: "Satisfaction Rate" },
  { num: "150+",   label: "Transformations / Year" },
  { num: "12+",    label: "Expert Trainers" },
  { num: "8",      label: "Years of Excellence" },
  { num: "24/7",   label: "Gym Access (Pro)" },
];

export default function StatsTicker() {
  return (
    <div className="relative bg-zinc-950 border-y border-white/5 overflow-hidden py-5">
      <div className="absolute inset-y-0 left-0 w-40 bg-linear-to-r from-zinc-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-40 bg-linear-to-l from-zinc-950 to-transparent z-10 pointer-events-none" />

      <div className="flex animate-marquee whitespace-nowrap gap-0 select-none">
        {[...Array(2)].map((_, di) => (
          <div key={di} className="flex items-center gap-0 shrink-0">
            {STATS.map((stat, i) => (
              <div key={i} className="flex items-center">
                <div className="flex items-center gap-3 px-10 py-1">
                  <span className="font-heading text-2xl text-primary">{stat.num}</span>
                  <span className="font-body text-xs uppercase tracking-[0.2em] text-white/40">{stat.label}</span>
                </div>
                <div className="w-px h-4 bg-white/10 shrink-0" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
