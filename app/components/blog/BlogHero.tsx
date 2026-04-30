"use client";

import Image from "next/image";
import { IMAGES } from "@/app/lib/data";

export default function BlogHero() {
  return (
    <section className="relative w-full min-h-[100vh] bg-black overflow-hidden flex items-center justify-center pt-20 pb-10">
      
      {/* Intense Ambient Core */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 blur-[250px] rounded-full pointer-events-none" />

      {/* Massive Background Typography */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none z-0">
        <h1 className="font-heading text-[12rem] md:text-[20rem] lg:text-[25rem] text-transparent uppercase tracking-tighter leading-none opacity-[0.03]" style={{ WebkitTextStroke: "2px rgba(255,255,255,1)" }}>
          INTEL
        </h1>
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8">
        
        {/* ── Left: The Shattered Editorial Image ── */}
        <div className="w-full lg:w-1/2 relative h-[500px] md:h-[650px] flex items-center justify-center group/shatter order-2 lg:order-1">
          
          {/* Slice 1 (Left) */}
          <div className="absolute left-0 md:left-[5%] top-[15%] w-[30%] h-[60%] overflow-hidden border border-white/5 shadow-[0_0_50px_rgba(0,0,0,0.8)] transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover/shatter:-translate-y-8 group-hover/shatter:-translate-x-4 group-hover/shatter:-rotate-3 z-10 bg-zinc-900">
            {/* The object-position trick ensures the image aligns perfectly when sliced */}
            <Image src={IMAGES[3]} alt="Blog Featured Left" fill className="object-cover object-[0%_50%] grayscale opacity-60 group-hover/shatter:opacity-100 group-hover/shatter:grayscale-0 transition-all duration-1000 scale-[1.15]" />
            <div className="absolute inset-0 bg-primary/20 mix-blend-overlay opacity-0 group-hover/shatter:opacity-100 transition-opacity duration-700" />
          </div>

          {/* Slice 2 (Center - Main) */}
          <div className="absolute left-[35%] top-[5%] w-[40%] h-[90%] overflow-hidden border border-primary/30 shadow-[0_20px_100px_-20px_rgba(255,45,45,0.4)] z-20 transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover/shatter:scale-105 group-hover/shatter:-translate-y-4 bg-zinc-900">
            <Image src={IMAGES[3]} alt="Blog Featured Center" fill className="object-cover object-[50%_50%] grayscale-[30%] group-hover/shatter:grayscale-0 transition-all duration-1000 scale-105" priority />
            {/* Scanline effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-1 bg-primary/80 shadow-[0_0_20px_rgba(255,45,45,1)] animate-scan" />
          </div>

          {/* Slice 3 (Right) */}
          <div className="absolute right-0 md:right-[5%] bottom-[15%] w-[25%] h-[50%] overflow-hidden border border-white/5 shadow-[0_0_50px_rgba(0,0,0,0.8)] transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover/shatter:translate-y-8 group-hover/shatter:translate-x-4 group-hover/shatter:rotate-3 z-10 bg-zinc-900">
            <Image src={IMAGES[3]} alt="Blog Featured Right" fill className="object-cover object-[100%_50%] grayscale opacity-60 group-hover/shatter:opacity-100 group-hover/shatter:grayscale-0 transition-all duration-1000 scale-[1.15]" />
            <div className="absolute inset-0 bg-primary/20 mix-blend-overlay opacity-0 group-hover/shatter:opacity-100 transition-opacity duration-700" />
          </div>

        </div>

        {/* ── Right: The Featured Data HUD ── */}
        <div className="w-full lg:w-1/2 flex flex-col items-start lg:pl-10 relative z-20 order-1 lg:order-2">
          
          {/* Tactical Badge */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center gap-2 bg-primary/10 border border-primary/30 px-4 py-1.5 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(255,45,45,0.8)]" />
              <span className="font-accent text-primary text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em]">Featured Intel</span>
            </div>
            <span className="font-accent text-white/40 text-[9px] md:text-[10px] uppercase tracking-[0.3em]">04.29.2026 // 8 MIN READ</span>
          </div>

          {/* Staggered Typography Title */}
          <div className="flex flex-col mb-8 relative group">
            <h2 className="font-heading text-6xl md:text-8xl xl:text-9xl text-white uppercase leading-[0.85] tracking-tighter transition-transform duration-700 group-hover:translate-x-2">
              The Science
            </h2>
            <h2 className="font-heading text-6xl md:text-8xl xl:text-9xl text-transparent uppercase leading-[0.85] tracking-tighter ml-8 md:ml-16 transition-transform duration-700 group-hover:translate-x-4" style={{ WebkitTextStroke: "1px rgba(255,45,45,1)" }}>
              Of Extreme
            </h2>
            <h2 className="font-heading text-6xl md:text-8xl xl:text-9xl text-white uppercase leading-[0.85] tracking-tighter ml-16 md:ml-32 transition-transform duration-700 group-hover:translate-x-6">
              Hypertrophy
            </h2>
          </div>

          <p className="font-body text-white/60 text-base md:text-xl leading-relaxed mb-10 max-w-lg border-l-2 border-primary/50 pl-6">
            Unlock the central nervous system. Discover the mechanical tension protocols used by elite athletes to force physiological adaptation and shatter plateaus.
          </p>



        </div>

      </div>

      {/* Bottom Marquee Line */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-white/5 bg-black/80 backdrop-blur-md overflow-hidden py-4 z-30">
        <div className="flex whitespace-nowrap animate-marquee">
           {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center gap-12 mx-6">
                <span className="font-accent text-white/20 text-[10px] uppercase tracking-[0.4em]">///</span>
                <span className="font-heading text-primary/70 text-xl md:text-2xl uppercase tracking-widest hover:text-primary transition-colors cursor-pointer">Training Protocols</span>
                <span className="font-accent text-white/20 text-[10px] uppercase tracking-[0.4em]">///</span>
                <span className="font-heading text-white/50 text-xl md:text-2xl uppercase tracking-widest hover:text-white transition-colors cursor-pointer">Nutritional Science</span>
                <span className="font-accent text-white/20 text-[10px] uppercase tracking-[0.4em]">///</span>
                <span className="font-heading text-white/50 text-xl md:text-2xl uppercase tracking-widest hover:text-white transition-colors cursor-pointer">Recovery Systems</span>
                <span className="font-accent text-white/20 text-[10px] uppercase tracking-[0.4em]">///</span>
                <span className="font-heading text-white/50 text-xl md:text-2xl uppercase tracking-widest hover:text-white transition-colors cursor-pointer">Mindset Engineering</span>
              </div>
           ))}
        </div>
      </div>
      
    </section>
  );
}
