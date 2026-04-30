"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "@/app/components/home/Navbar";
import Footer from "@/app/components/home/Footer";
import CtaBanner from "@/app/components/home/CtaBanner";
import ProgramsList from "@/app/components/programs/ProgramsList";
import { IMAGES } from "@/app/lib/data";

export default function ProgramsPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-black selection:bg-primary selection:text-white">
      <Navbar isScrolled={isScrolled} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      
      <main className="flex-grow">
        {/* KINETIC HERO SECTION */}
        <section className="relative min-h-[100vh] pt-32 pb-20 overflow-hidden flex items-center">
          
          {/* ── Background Elements ── */}
          <div className="absolute inset-0 z-0 bg-black">
             {/* Abstract 3D Grid */}
             <div className="absolute inset-0 opacity-[0.03]" style={{ 
               backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", 
               backgroundSize: "60px 60px", 
               transform: "perspective(1000px) rotateX(60deg) scale(2.5) translateY(-20%)", 
               transformOrigin: "top" 
             }} />
             
             {/* Intense Core Glow */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] max-w-[1000px] h-[500px] bg-primary/20 blur-[180px] rounded-[100%] pointer-events-none" />
          </div>

          {/* ── Massive Kinetic Background Text ── */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] pointer-events-none flex flex-col gap-8 select-none opacity-5 z-0">
            {/* These normally use an infinite translate CSS animation, simulating it with sheer size for now */}
            <div className="font-heading text-[12vw] leading-none whitespace-nowrap text-white" style={{ transform: "translateX(-5%)" }}>
              TRAINING PROGRAMS // TRAINING PROGRAMS // TRAINING PROGRAMS //
            </div>
            <div className="font-heading text-[12vw] leading-none whitespace-nowrap text-white" style={{ transform: "translateX(-15%)" }}>
              DEZONE ELITE // DEZONE ELITE // DEZONE ELITE // DEZONE ELITE //
            </div>
          </div>

          {/* ── Main Content Container ── */}
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
              
              {/* Left Column: Typography */}
              <div className="flex flex-col items-start text-left max-w-2xl pt-10">
                {/* HUD Label */}
                <div className="inline-flex items-center gap-3 px-5 py-2 bg-white/5 border border-white/10 rounded-full mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="font-accent text-white/70 text-[10px] uppercase tracking-[0.3em]">
                    Elite Performance Paths
                  </span>
                </div>
                
                {/* Main Headline */}
                <h1 className="font-heading text-6xl md:text-[5.5rem] lg:text-[7rem] text-white uppercase leading-[0.85] tracking-tighter mb-8 relative">
                  Forge Your <br />
                  <span className="text-transparent relative" style={{ WebkitTextStroke: "2px #ff2d2d" }}>
                    Legacy
                    {/* Decorative cut line over text */}
                    <div className="absolute top-1/2 -right-8 md:-right-16 w-24 md:w-32 h-[3px] bg-primary shadow-[0_0_20px_rgba(255,45,45,0.8)]" />
                  </span>
                </h1>
                
                <p className="font-body text-white/60 text-lg md:text-xl leading-relaxed mb-10 max-w-lg border-l-2 border-primary/50 pl-6">
                  Not a one-size-fits-all approach. We build specialized training protocols designed exclusively for those who refuse to settle for average. Choose your path and dominate.
                </p>
                
                {/* CTA Row */}
                <div className="flex flex-wrap items-center gap-8">
                  <button className="cursor-pointer group relative overflow-hidden px-12 py-5 bg-primary text-white font-body font-bold text-sm md:text-base uppercase tracking-[0.25em] shadow-[0_0_40px_rgba(255,45,45,0.4)] hover:shadow-[0_0_60px_rgba(255,45,45,0.7)] transition-all duration-300 border border-primary/50">
                     <div className="absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
                     <span className="relative z-10 flex items-center gap-3">
                       Explore Programs
                       <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                     </span>
                  </button>
                  
                  {/* Social Proof Mini */}
                  <div className="flex items-center gap-4 text-white/50 font-body text-[11px] uppercase tracking-widest bg-white/5 px-4 py-2 border border-white/10">
                     <div className="flex -space-x-3">
                       {[0, 1, 3].map((imgIndex, i) => (
                         <div key={i} className="w-8 h-8 rounded-full border-2 border-black overflow-hidden relative grayscale">
                            <Image src={IMAGES[imgIndex]} alt="member" fill className="object-cover" />
                         </div>
                       ))}
                     </div>
                     <span>Joined by 5k+</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Holographic Glass Cards (Desktop only) */}
              <div className="relative h-[650px] w-full hidden lg:block">
                 {/* Ambient rotating glowing ring */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full border border-primary/10 animate-[spin_30s_linear_infinite] pointer-events-none">
                   <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-primary rounded-full shadow-[0_0_20px_rgba(255,45,45,1)]" />
                   <div className="absolute bottom-0 right-1/4 translate-x-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
                 </div>

                 {/* Central Hero Image */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[500px] overflow-hidden border border-white/10 shadow-[0_0_60px_-15px_rgba(255,45,45,0.4)] z-10 group cursor-pointer">
                   <Image src={IMAGES[0]} alt="Athlete" fill className="object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                   
                   {/* Scan line overlay */}
                   <div className="absolute top-0 left-0 right-0 h-1 bg-primary/40 scan-beam pointer-events-none" />
                   
                   <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80" />
                   <div className="absolute bottom-8 left-8 right-8">
                      <span className="text-primary text-[10px] uppercase font-bold tracking-[0.25em] flex items-center gap-2 mb-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                        Featured Path
                      </span>
                      <h3 className="text-white font-heading text-4xl uppercase tracking-widest leading-none">Hybrid <br />Athlete</h3>
                   </div>
                 </div>

                 {/* Floating HUD Card 1 (Power) */}
                 <div className="absolute top-[15%] right-[2%] z-20 w-[180px] p-4 bg-black/70 backdrop-blur-md border border-white/15 shadow-[0_20px_40px_rgba(0,0,0,0.5)] animate-[float_4s_ease-in-out_infinite]">
                   {/* HUD brackets */}
                   <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary/50" />
                   <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary/50" />
                   
                   <p className="text-white/40 text-[9px] uppercase tracking-widest mb-3">Primary Focus</p>
                   <div className="flex items-center gap-3">
                     <div className="w-8 h-8 bg-primary/20 flex items-center justify-center text-primary border border-primary/30">
                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                     </div>
                     <span className="font-heading text-2xl text-white tracking-wider">POWER</span>
                   </div>
                 </div>

                 {/* Floating HUD Card 2 (Intensity Matrix) */}
                 <div className="absolute bottom-[20%] left-[2%] z-20 w-[220px] p-5 bg-black/70 backdrop-blur-md border border-white/15 shadow-[0_20px_40px_rgba(0,0,0,0.5)] animate-[float_5s_ease-in-out_infinite_1s]">
                   <p className="text-white/40 text-[9px] uppercase tracking-widest mb-3">Intensity Matrix</p>
                   <div className="flex gap-1.5 mb-3">
                     {[1,2,3,4,5].map(i => (
                       <div key={i} className={`h-2 flex-1 ${i<5 ? 'bg-primary shadow-[0_0_10px_rgba(255,45,45,0.5)]' : 'bg-white/10'}`} />
                     ))}
                   </div>
                   <div className="flex justify-between items-center font-body text-white text-[10px] font-bold tracking-widest">
                     <span>12 WEEKS</span>
                     <span className="text-primary">EXTREME</span>
                   </div>
                 </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      <ProgramsList />

      <CtaBanner />

      <Footer />
    </div>
  );
}
