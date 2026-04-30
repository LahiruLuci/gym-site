"use client";

import Image from "next/image";
import { IMAGES } from "@/app/lib/data";

export default function GymStorySection() {
  return (
    <section className="bg-black relative py-32 overflow-hidden border-t border-white/5">
      
      {/* Background ambient light */}
      <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-primary/5 blur-[250px] rounded-[100%] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Massive Hook Area */}
        <div className="max-w-4xl mb-24 md:mb-32">
          <span className="font-accent text-primary uppercase tracking-[0.4em] text-sm mb-6 block">
            Our Story
          </span>
          <h2 className="font-heading text-5xl md:text-7xl lg:text-8xl text-white uppercase leading-[0.85] tracking-tighter mb-8">
            It didn't start as a gym.<br />
            <span className="text-white/30">It started as a mission.</span>
          </h2>
        </div>

        {/* Sticky Split Layout */}
        <div className="flex flex-col lg:flex-row gap-20 lg:gap-24 items-start relative">
          
          {/* ── LEFT: Sticky Visual Column ── */}
          <div className="w-full lg:w-[45%] lg:sticky lg:top-32 relative group">
            
            {/* Main Story Image */}
            <div className="relative h-[600px] md:h-[750px] w-full overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(255,45,45,0.15)]">
              {/* Subtle overlay for texture */}
              <div className="absolute inset-0 bg-primary/5 z-10 pointer-events-none" />
              
              <Image 
                src={IMAGES[3]} 
                alt="Gym Origin"
                fill
                priority
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-20" />
            </div>

            {/* Overlapping Founder Quote Card */}
            <div className="absolute -bottom-10 lg:-bottom-16 -right-4 lg:-right-12 z-30 w-[90%] md:w-[380px] p-8 bg-zinc-950/80 backdrop-blur-xl border border-white/10 border-l-4 border-l-primary shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
              <svg className="w-10 h-10 text-primary/40 mb-5" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
              <p className="font-heading text-2xl text-white uppercase tracking-widest leading-snug mb-6">
                "We don't just train bodies.<br/>We build discipline."
              </p>
              <div className="flex items-center gap-4 border-t border-white/10 pt-5">
                <div className="w-12 h-12 rounded-full border border-primary/50 overflow-hidden relative">
                  <Image src={IMAGES[0]} alt="Founder" fill className="object-cover grayscale" />
                </div>
                <div>
                  <p className="font-body text-white text-[11px] font-bold uppercase tracking-widest">Founder & Head Coach</p>
                  <p className="font-accent text-primary text-[9px] uppercase tracking-[0.2em] mt-1">DeZone Elite</p>
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Scrolling Story Content ── */}
          <div className="w-full lg:w-[55%] flex flex-col gap-24 pt-16 lg:pt-10">
            
            {/* Block 1: Origin */}
            <div className="relative pl-8 md:pl-12 border-l border-white/10 group/block">
               {/* Timeline Marker */}
               <div className="absolute top-0 -left-[5px] w-[9px] h-[9px] rounded-full bg-white/20 group-hover/block:bg-primary group-hover/block:shadow-[0_0_15px_rgba(255,45,45,1)] transition-colors duration-500" />
               <div className="absolute top-0 -left-[1px] w-[2px] h-0 bg-primary group-hover/block:h-full transition-all duration-1000 ease-out" />
               
               <p className="font-accent text-primary text-[10px] uppercase tracking-[0.3em] mb-4">Phase 01 // Origin</p>
               <h3 className="font-heading text-4xl md:text-5xl text-white uppercase tracking-wider mb-6 group-hover/block:text-primary transition-colors duration-500">A Humble Beginning</h3>
               <p className="font-body text-white/50 text-lg leading-relaxed mb-6">
                 It started in a barebones garage with rusted plates and an obsession with real progress. There were no mirrors, no air conditioning—just a few dedicated individuals pushing themselves to the absolute limit out of pure passion.
               </p>
            </div>

            {/* Block 2: Problem */}
            <div className="relative pl-8 md:pl-12 border-l border-white/10 group/block">
               <div className="absolute top-0 -left-[5px] w-[9px] h-[9px] rounded-full bg-white/20 group-hover/block:bg-primary group-hover/block:shadow-[0_0_15px_rgba(255,45,45,1)] transition-colors duration-500" />
               <div className="absolute top-0 -left-[1px] w-[2px] h-0 bg-primary group-hover/block:h-full transition-all duration-1000 ease-out" />

               <p className="font-accent text-primary text-[10px] uppercase tracking-[0.3em] mb-4">Phase 02 // The Problem</p>
               <h3 className="font-heading text-4xl md:text-5xl text-white uppercase tracking-wider mb-6 group-hover/block:text-primary transition-colors duration-500">The Industry Failed Us</h3>
               <p className="font-body text-white/50 text-lg leading-relaxed mb-6">
                 We looked at the commercial fitness industry and saw a broken system. We saw people struggling without guidance, lost in crowded floors, and settling for average results. The standard was complacency, and we refused to accept it.
               </p>
            </div>

            {/* Block 3: Mission */}
            <div className="relative pl-8 md:pl-12 border-l border-white/10 group/block">
               <div className="absolute top-0 -left-[5px] w-[9px] h-[9px] rounded-full bg-white/20 group-hover/block:bg-primary group-hover/block:shadow-[0_0_15px_rgba(255,45,45,1)] transition-colors duration-500" />
               <div className="absolute top-0 -left-[1px] w-[2px] h-0 bg-primary group-hover/block:h-full transition-all duration-1000 ease-out" />

               <p className="font-accent text-primary text-[10px] uppercase tracking-[0.3em] mb-4">Phase 03 // The Mission</p>
               <h3 className="font-heading text-4xl md:text-5xl text-white uppercase tracking-wider mb-6 group-hover/block:text-primary transition-colors duration-500">Forging The Arena</h3>
               <p className="font-body text-white/50 text-lg leading-relaxed mb-8">
                 That’s why we built DeZone. We engineered a space focused entirely on real transformation, discipline, and unbreakable consistency. No gimmicks, no shortcuts. Just an environment where excuses die and results are forged.
               </p>
               
               {/* Timeline Highlights */}
               <div className="grid grid-cols-2 gap-4 mt-8">
                 <div className="bg-white/5 p-6 border border-white/10 hover:border-primary/50 transition-colors duration-300">
                   <p className="text-primary text-[10px] uppercase tracking-[0.2em] mb-2 font-bold">2022</p>
                   <p className="text-white font-heading text-2xl tracking-wider">The Garage</p>
                 </div>
                 <div className="bg-white/5 p-6 border border-white/10 hover:border-primary/50 transition-colors duration-300">
                   <p className="text-primary text-[10px] uppercase tracking-[0.2em] mb-2 font-bold">2026</p>
                   <p className="text-white font-heading text-2xl tracking-wider">300+ Members</p>
                 </div>
               </div>
            </div>

            {/* Block 4: Future & CTA */}
            <div className="relative pl-8 md:pl-12 border-l border-transparent">
               <div className="absolute top-0 -left-[5px] w-[9px] h-[9px] rounded-full bg-primary shadow-[0_0_15px_rgba(255,45,45,1)]" />

               <p className="font-accent text-primary text-[10px] uppercase tracking-[0.3em] mb-4">Phase 04 // The Future</p>
               <h3 className="font-heading text-4xl md:text-5xl text-white uppercase tracking-wider mb-6">More Than A Gym</h3>
               <p className="font-body text-white/50 text-lg leading-relaxed mb-12">
                 Today, we are a community driven by raw progress. Our vision is to become the ultimate proving ground—a place where anyone, regardless of where they start, can unlock their true potential.
               </p>
               
               <div className="p-8 bg-primary/10 border-l-4 border-primary mb-12">
                 <p className="font-heading text-3xl md:text-4xl text-white uppercase tracking-widest leading-none">
                   This is where your transformation begins.
                 </p>
               </div>

               <button className="cursor-pointer group relative overflow-hidden px-12 py-5 bg-primary text-white font-body font-bold text-[13px] uppercase tracking-[0.25em] shadow-[0_0_40px_rgba(255,45,45,0.4)] hover:shadow-[0_0_60px_rgba(255,45,45,0.7)] transition-all duration-300 border border-primary/50">
                  <div className="absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    Join Us Today
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                  </span>
               </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
