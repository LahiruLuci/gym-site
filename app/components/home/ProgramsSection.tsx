import Image from "next/image";
import { PROGRAMS } from "@/app/lib/data";

export default function ProgramsSection() {
  return (
    <section className="py-32 bg-zinc-950 border-t border-white/5 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8 reveal">
          <div className="max-w-2xl">
            <span className="font-accent text-primary uppercase tracking-[0.4em] text-sm mb-4 block">Core Offerings</span>
            <h2 className="font-heading text-5xl md:text-7xl text-white uppercase leading-[0.9] tracking-tighter">
              Our Training <span className="text-gradient">Programs</span>
            </h2>
          </div>
          <div className="flex flex-col items-start md:items-end">
            <p className="font-body text-muted text-lg max-w-sm mb-6 md:text-right">Built for every goal. Designed for real results.</p>
            <button className="flex items-center gap-2 text-white font-bold text-sm uppercase tracking-[0.2em] hover:text-primary transition-colors group cursor-pointer">
              Explore All Programs
              <svg className="w-5 h-5 translate-x-0 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {PROGRAMS.map((program, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden bg-black border border-white/5 p-8 flex flex-col transition-all duration-500 hover:-translate-y-2 hover:border-primary/50 hover:shadow-[0_20px_40px_-15px_rgba(255,45,45,0.15)] cursor-pointer ${
                program.popular ? "border-primary/30 shadow-[0_0_20px_rgba(255,45,45,0.05)]" : ""
              }`}
            >
              <div className="absolute inset-0 z-0">
                <Image src={program.img} alt={program.title} fill className="object-cover opacity-30 group-hover:opacity-60 transition-opacity duration-700 grayscale group-hover:grayscale-0" />
                <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/60 to-transparent pointer-events-none" />
              </div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  {program.popular ? (
                    <span className="bg-primary/10 text-primary border border-primary/20 px-3 py-1 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5 animate-pulse">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />Most Popular
                    </span>
                  ) : (
                    <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-muted border border-white/10">Program {index + 1}</span>
                  )}
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/50 bg-white/5 px-3 py-1">{program.level}</span>
                </div>

                <h3 className="font-heading text-4xl text-white uppercase mb-2 group-hover:text-primary transition-colors">{program.title}</h3>
                <p className="text-white/80 font-bold text-sm mb-8">{program.hook}</p>

                <ul className="space-y-3 mb-10 flex-grow">
                  {program.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted text-sm">
                      <svg className="w-5 h-5 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full py-4 border border-white/10 text-white font-bold text-xs uppercase tracking-[0.2em] group-hover:bg-primary group-hover:border-primary transition-all duration-300 relative overflow-hidden">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    View Program
                    <svg className="w-4 h-4 translate-x-0 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </button>
              </div>

              {/* Red Glow top edge on hover */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-linear-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_20px_rgba(255,45,45,0.5)]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
