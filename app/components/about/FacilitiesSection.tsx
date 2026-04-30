"use client";

import Image from "next/image";
import { IMAGES } from "@/app/lib/data";

const FACILITIES = [
  {
    id: "01",
    name: "Advanced Equipment",
    desc: "Premium machines and free weights for all training styles.",
    benefit: "Train efficiently with minimal waiting time.",
    image: IMAGES[2],
    gridClass: "md:col-span-2 md:row-span-1 min-h-[350px]",
  },
  {
    id: "02",
    name: "Spacious Training Area",
    desc: "Open layout designed for comfort and explosive performance.",
    benefit: "Unrestricted movement and breathing room.",
    image: IMAGES[0],
    gridClass: "md:col-span-1 md:row-span-2 min-h-[350px]",
  },
  {
    id: "03",
    name: "Functional Zone",
    desc: "Dedicated space for mobility, conditioning, and agility.",
    benefit: "Master your bodyweight and core stability.",
    image: IMAGES[1],
    gridClass: "md:col-span-1 md:row-span-1 min-h-[350px]",
  },
  {
    id: "04",
    name: "Cardio Section",
    desc: "Modern cardio machines for endurance and fat loss.",
    benefit: "Maximize your cardiovascular engine.",
    image: IMAGES[3],
    gridClass: "md:col-span-1 md:row-span-1 min-h-[350px]",
  },
  {
    id: "05",
    name: "Recovery Area",
    desc: "Space to recover and recharge after intense sessions.",
    benefit: "Accelerate muscle repair and growth.",
    image: IMAGES[2],
    gridClass: "md:col-span-2 md:row-span-1 min-h-[350px]",
  },
  {
    id: "06",
    name: "Locker Rooms",
    desc: "Clean, secure, and comfortable facilities.",
    benefit: "Refresh and transition seamlessly.",
    image: IMAGES[1],
    gridClass: "md:col-span-1 md:row-span-1 min-h-[350px]",
  }
];

export default function FacilitiesSection() {
  return (
    <section className="bg-black relative py-32 overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* ── Section Header ── */}
        <div className="text-center mb-20 md:mb-28 relative z-20 flex flex-col items-center">
          <div className="inline-flex items-center gap-3 px-6 py-2 border border-primary/20 bg-primary/5 mb-6 backdrop-blur-md shadow-[0_0_30px_rgba(255,45,45,0.15)]">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(255,45,45,0.8)]" />
            <span className="font-accent text-primary text-[10px] font-bold uppercase tracking-[0.4em]">
              The Proving Ground
            </span>
          </div>
          <h2 className="font-heading text-5xl md:text-7xl lg:text-[7rem] text-white uppercase leading-none tracking-tighter mb-6">
            World-Class Facilities
          </h2>
          <p className="font-body text-white/50 text-sm md:text-xl uppercase tracking-[0.2em] max-w-2xl mx-auto">
            Train in a space designed for <span className="text-primary font-bold">performance</span>, comfort, and results.
          </p>
        </div>

        {/* ── Tactical Bento Grid ── */}
        {/* group/grid handles the 'Focus Mode' dimming of sibling cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto group/grid">
          {FACILITIES.map((fac) => (
            <div 
              key={fac.id}
              className={`relative bg-zinc-950 border border-white/10 overflow-hidden group/card hover:!opacity-100 group-hover/grid:opacity-70 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${fac.gridClass}`}
            >
              {/* Image Background */}
              <div className="absolute inset-0">
                <Image 
                  src={fac.image}
                  alt={fac.name}
                  fill
                  className="object-cover opacity-80 grayscale-[50%] group-hover/card:scale-110 group-hover/card:opacity-100 group-hover/card:grayscale-0 transition-all duration-1000"
                />
              </div>

              {/* Base Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              {/* Intense Red Internal Shadow on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover/card:opacity-100 shadow-[inset_0_-150px_100px_-50px_rgba(255,45,45,0.5)] transition-opacity duration-1000 pointer-events-none" />

              {/* ── Top Tactical Bar ── */}
              <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-start opacity-50 group-hover/card:opacity-100 transition-opacity duration-500 z-20">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 border border-white/30 flex justify-center items-center">
                    <div className="w-1 h-1 bg-white" />
                  </div>
                  <span className="font-accent text-white/50 text-[10px] uppercase tracking-[0.3em]">
                    SEC // {fac.id}
                  </span>
                </div>
                
                {/* REC Indicator */}
                <div className="flex items-center gap-2 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 delay-200">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(255,45,45,1)]" />
                  <span className="font-accent text-primary text-[9px] uppercase tracking-[0.3em]">Live</span>
                </div>
              </div>

              {/* ── Center Watermark ── */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] text-center pointer-events-none z-10">
                <span className="font-heading text-7xl md:text-[8rem] text-transparent uppercase tracking-tighter opacity-10 group-hover/card:opacity-0 transition-opacity duration-500" style={{ WebkitTextStroke: "1px rgba(255,255,255,1)" }}>
                  {fac.name.split(' ')[0]}
                </span>
              </div>

              {/* ── Bottom Content Block ── */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-20 flex flex-col justify-end h-full">
                {/* Slide Up Container */}
                <div className="transform translate-y-16 group-hover/card:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]">
                  
                  <h3 className="font-heading text-3xl md:text-4xl text-white uppercase tracking-wider mb-2 drop-shadow-md">
                    {fac.name}
                  </h3>
                  
                  <div className="w-12 h-1 bg-primary mb-4 shadow-[0_0_10px_rgba(255,45,45,0.8)] opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 delay-100" />
                  
                  <div className="opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 delay-200">
                    <p className="font-body text-white/80 text-sm leading-relaxed mb-6 max-w-sm">
                      {fac.desc}
                    </p>
                    
                    {/* Benefit Highlight Box */}
                    <div className="bg-black/60 backdrop-blur-md border border-primary/30 border-l-2 border-l-primary p-4 inline-block w-full max-w-sm group-hover/card:shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                      <p className="font-accent text-white/40 text-[9px] uppercase tracking-[0.3em] mb-1">Key Benefit</p>
                      <p className="font-body text-primary font-bold text-xs uppercase tracking-widest">
                        {fac.benefit}
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Corner Bracket Effects */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-white/0 group-hover/card:border-white/50 transition-colors duration-500 m-4" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-white/0 group-hover/card:border-primary/50 transition-colors duration-500 m-4" />
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
