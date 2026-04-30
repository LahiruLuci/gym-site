import Image from "next/image";
import { TRAINERS } from "@/app/lib/data";

export default function TrainersSection() {
  return (
    <section className="py-32 bg-zinc-950 relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 reveal">
          <div>
            <span className="font-accent text-primary uppercase tracking-[0.4em] text-sm mb-4 block">The Experts</span>
            <h2 className="font-heading text-5xl md:text-7xl text-white uppercase leading-[0.9] tracking-tighter">
              Meet Our <span className="text-gradient">Trainers</span>
            </h2>
          </div>
          <p className="font-body text-muted text-lg max-w-sm border-l-2 border-primary pl-6">
            Expert coaches dedicated to your transformation. These people will help you succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
          {TRAINERS.map((trainer, index) => (
            <div
              key={index}
              className="group relative h-[500px] lg:h-[650px] w-full bg-black overflow-hidden border border-white/10 cursor-pointer shadow-2xl"
            >
              {/* Background Image */}
              <Image
                src={trainer.img}
                alt={trainer.name}
                fill
                className="object-cover grayscale brightness-50 group-hover:brightness-75 group-hover:scale-110 transition-all duration-[1500ms] ease-[cubic-bezier(0.25,1,0.5,1)]"
              />

              {/* Default Bottom Gradient (Always Visible) */}
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-500" />

              {/* Resting State Content */}
              <div className="absolute bottom-0 left-0 w-full p-8 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:translate-y-full">
                <span className="text-primary font-bold text-[10px] uppercase tracking-[0.3em] mb-2 block">
                  {trainer.role}
                </span>
                <h3 className="font-heading text-5xl text-white uppercase tracking-tighter">
                  {trainer.name}
                </h3>
              </div>

              {/* HUD Overlay (Hover State) */}
              <div className="absolute inset-0 bg-black/80 backdrop-blur-md border-t-2 border-primary translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] flex flex-col justify-center p-10">
                {/* Decorative Tech Corners */}
                <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-primary opacity-50" />
                <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-primary opacity-50" />
                <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-primary opacity-50" />
                <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-primary opacity-50" />

                <h3 className="font-heading text-6xl text-white uppercase tracking-tighter mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-[200ms]">
                  {trainer.name}
                </h3>
                <span className="text-primary font-bold text-xs uppercase tracking-[0.3em] mb-10 block opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-[300ms]">
                  {trainer.role}
                </span>

                <div className="space-y-6 mb-12">
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-700 delay-[400ms] -translate-x-4 group-hover:translate-x-0">
                    <span className="text-white/30 text-[10px] uppercase tracking-[0.2em] block mb-1">[ SPECIALTY ]</span>
                    <p className="text-white font-bold text-lg uppercase">{trainer.specialty}</p>
                  </div>

                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-700 delay-[500ms] -translate-x-4 group-hover:translate-x-0">
                    <span className="text-white/30 text-[10px] uppercase tracking-[0.2em] block mb-1">[ EXPERIENCE ]</span>
                    <p className="text-white font-bold text-lg uppercase">{trainer.exp}</p>
                  </div>

                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-700 delay-[600ms] -translate-x-4 group-hover:translate-x-0">
                    <span className="text-white/30 text-[10px] uppercase tracking-[0.2em] block mb-1">[ CREDIBILITY ]</span>
                    <p className="text-primary font-bold text-lg uppercase flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {trainer.trust}
                    </p>
                  </div>
                </div>

                <button className="w-full py-4 bg-white text-black font-bold text-xs uppercase tracking-[0.2em] hover:bg-primary hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100 delay-[700ms] mt-auto flex items-center justify-center gap-3">
                  View Profile
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <button className="inline-flex items-center gap-3 text-white font-bold text-sm uppercase tracking-[0.2em] hover:text-primary transition-colors group cursor-pointer">
            View All Trainers
            <div className="w-12 h-px bg-white/30 group-hover:bg-primary group-hover:w-20 transition-all duration-500 relative">
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t border-r border-current rotate-45" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
