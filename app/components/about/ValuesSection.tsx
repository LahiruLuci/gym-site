"use client";

import { useState } from "react";
import Image from "next/image";
import { IMAGES } from "@/app/lib/data";

const VALUES = [
  {
    id: "01",
    title: "Discipline",
    meaning: "Showing up consistently, no matter the challenge.",
    action: "We train with purpose, not excuses.",
    image: IMAGES[2],
  },
  {
    id: "02",
    title: "Consistency",
    meaning: "Progress comes from repetition and commitment.",
    action: "We don't rely on motivation.",
    image: IMAGES[1],
  },
  {
    id: "03",
    title: "Strength",
    meaning: "Building both physical and mental power.",
    action: "We lift heavy and endure.",
    image: IMAGES[3],
  },
  {
    id: "04",
    title: "Commitment",
    meaning: "We don't quit. We push beyond limits.",
    action: "We finish what we start.",
    image: IMAGES[0],
  },
  {
    id: "05",
    title: "Focus",
    meaning: "Train with purpose. Every session matters.",
    action: "Leave distractions at the door.",
    image: IMAGES[2],
  },
  {
    id: "06",
    title: "Growth",
    meaning: "Always improving. Always evolving.",
    action: "There is no finish line.",
    image: IMAGES[1],
  }
];

export default function ValuesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-black relative py-32 overflow-hidden border-t border-white/5">
      
      {/* Background Ambient Glow */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/10 blur-[200px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* ── Section Header ── */}
        <div className="text-center mb-24 relative z-20 flex flex-col items-center">
          <div className="inline-flex items-center gap-3 px-6 py-2 border border-primary/20 bg-primary/5 mb-6 backdrop-blur-md shadow-[0_0_30px_rgba(255,45,45,0.15)]">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(255,45,45,0.8)]" />
            <span className="font-accent text-primary text-[10px] font-bold uppercase tracking-[0.4em]">
              The Code
            </span>
          </div>
          <h2 className="font-heading text-6xl md:text-8xl text-white uppercase leading-none tracking-tighter mb-4">
            Our Core Values
          </h2>
          <p className="font-body text-white/50 text-base md:text-xl uppercase tracking-[0.2em]">
            Built on discipline. <span className="text-primary font-bold">Driven by results.</span>
          </p>
        </div>

        {/* ── INTERACTIVE ROSTER LAYOUT (Desktop) ── */}
        <div className="hidden lg:flex max-w-[1400px] mx-auto h-[750px] border border-white/10 bg-zinc-950/80 backdrop-blur-sm shadow-[0_0_50px_rgba(0,0,0,0.8)]">
          
          {/* Left Column: The Interactive Roster List */}
          <div className="w-[35%] xl:w-[30%] border-r border-white/10 flex flex-col justify-center py-10 relative bg-zinc-950">
            {/* Ambient Line */}
            <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-primary/50 to-transparent" />
            
            {VALUES.map((val, idx) => (
              <div 
                key={val.id}
                onMouseEnter={() => setActiveIndex(idx)}
                className="group relative cursor-pointer py-7 px-12 border-b border-white/5 last:border-b-0 transition-all duration-500 overflow-hidden"
              >
                {/* Active Highlight Sweep */}
                <div className={`absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent transition-all duration-500 ${activeIndex === idx ? "opacity-100 w-full" : "opacity-0 w-0"}`} />
                
                {/* Active Left Border Indicator */}
                <div className={`absolute left-0 top-0 bottom-0 w-1.5 bg-primary transition-all duration-500 shadow-[0_0_15px_rgba(255,45,45,1)] ${activeIndex === idx ? "opacity-100 h-full" : "opacity-0 h-0"}`} />

                <div className="relative z-10 flex items-center gap-8">
                  <span className={`font-accent text-sm tracking-widest transition-colors duration-500 ${activeIndex === idx ? "text-primary" : "text-white/20"}`}>
                    {val.id}
                  </span>
                  <span className={`font-heading text-4xl xl:text-5xl uppercase tracking-wider transition-all duration-500 ${activeIndex === idx ? "text-white translate-x-4 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]" : "text-white/30 group-hover:text-white/60 group-hover:translate-x-1"}`}>
                    {val.title}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: The Cinematic Reveal Window */}
          <div className="w-[65%] xl:w-[70%] relative overflow-hidden bg-black">
            
            {VALUES.map((val, idx) => (
              <div 
                key={`reveal-${val.id}`}
                className={`absolute inset-0 transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] ${activeIndex === idx ? "opacity-100 scale-100 z-20" : "opacity-0 scale-105 z-10 pointer-events-none"}`}
              >
                {/* Background Image */}
                <Image 
                  src={val.image} 
                  alt={val.title} 
                  fill 
                  className="object-cover opacity-60 mix-blend-luminosity"
                  priority={idx === 0}
                />
                
                {/* Cinematic Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-[url('/assets/noise.png')] opacity-10 mix-blend-overlay pointer-events-none" />
                
                {/* Massive Watermark Text */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] text-center pointer-events-none">
                  <span 
                    className="font-heading text-[12rem] xl:text-[15rem] text-transparent uppercase tracking-tighter opacity-[0.07]" 
                    style={{ WebkitTextStroke: "2px rgba(255,255,255,1)" }}
                  >
                    {val.title}
                  </span>
                </div>

                {/* Glassmorphic Data Card */}
                <div className={`absolute bottom-12 right-12 xl:bottom-20 xl:right-20 w-[450px] bg-zinc-950/80 backdrop-blur-xl border border-white/10 p-10 transition-all duration-700 delay-100 shadow-[0_30px_60px_rgba(0,0,0,0.8)] ${activeIndex === idx ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"}`}>
                  
                  {/* Decorative Corner Brackets */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary" />
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary" />
                  
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-[2px] bg-primary shadow-[0_0_10px_rgba(255,45,45,0.8)]" />
                    <span className="font-accent text-primary text-[10px] uppercase tracking-[0.4em]">Value Definition</span>
                  </div>
                  
                  <p className="font-body text-white text-xl xl:text-2xl leading-relaxed mb-10 border-l border-white/20 pl-6">
                    "{val.meaning}"
                  </p>

                  <div className="bg-black border border-white/5 p-6 relative overflow-hidden group/protocol">
                    <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
                    <p className="font-heading text-sm text-white/30 uppercase tracking-widest mb-2">Protocol</p>
                    <p className="font-body text-primary font-bold uppercase tracking-widest text-xs xl:text-sm">
                      {val.action}
                    </p>
                  </div>
                </div>

              </div>
            ))}

          </div>
        </div>

        {/* ── MOBILE FALLBACK LAYOUT (Stack) ── */}
        <div className="lg:hidden flex flex-col gap-6">
          {VALUES.map((val) => (
             <div key={`mob-${val.id}`} className="relative min-h-[450px] border border-white/10 overflow-hidden group">
               <Image src={val.image} alt={val.title} fill className="object-cover opacity-30 grayscale group-hover:grayscale-0 group-hover:opacity-50 transition-all duration-700" />
               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
               
               <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <span className="font-heading text-5xl text-primary/50 mb-2">{val.id}</span>
                  <h3 className="font-heading text-4xl text-white uppercase tracking-wider mb-4">{val.title}</h3>
                  <p className="font-body text-white/70 text-base mb-8">{val.meaning}</p>
                  <div className="bg-zinc-950/80 backdrop-blur-md border border-white/5 border-l-2 border-l-primary px-5 py-4">
                    <p className="font-heading text-[10px] text-white/30 uppercase tracking-widest mb-1">Protocol</p>
                    <p className="font-accent text-primary text-[10px] font-bold uppercase tracking-[0.2em]">{val.action}</p>
                  </div>
               </div>
             </div>
          ))}
        </div>

      </div>
    </section>
  );
}
