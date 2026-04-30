"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "@/app/components/home/Navbar";
import Footer from "@/app/components/home/Footer";
import CtaBanner from "@/app/components/home/CtaBanner";
import GymStorySection from "@/app/components/about/GymStorySection";
import PurposeSection from "@/app/components/about/PurposeSection";
import ValuesSection from "@/app/components/about/ValuesSection";
import FacilitiesSection from "@/app/components/about/FacilitiesSection";
import { IMAGES } from "@/app/lib/data";

export default function AboutPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-black selection:bg-primary selection:text-white overflow-hidden">
      <Navbar isScrolled={isScrolled} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      
      <main className="flex-grow">
        
        {/* ── CINEMATIC ABOUT HERO ── */}
        <section className="relative min-h-[100vh] pt-32 pb-20 flex items-center overflow-hidden">
          
          {/* Background Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] bg-primary/10 blur-[200px] rounded-[100%] pointer-events-none" />
          
          {/* Decorative Grid Lines */}
          <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
            <div className="absolute top-0 bottom-0 left-[15%] w-px bg-white/10" />
            <div className="absolute top-0 bottom-0 left-[50%] w-px bg-white/10" />
            <div className="absolute top-0 bottom-0 left-[85%] w-px bg-white/10" />
            <div className="absolute top-[30%] left-0 right-0 h-px bg-white/10" />
            <div className="absolute top-[70%] left-0 right-0 h-px bg-white/10" />
          </div>

          {/* Vertical Rotated Text (Left Edge) */}
          <div className="absolute left-4 lg:left-12 top-1/2 -translate-y-1/2 -rotate-90 origin-center hidden xl:block pointer-events-none z-0">
            <span className="font-heading text-white/5 text-[150px] tracking-tighter uppercase whitespace-nowrap">
              EST. 2026
            </span>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center pt-10">
              
              {/* ── Left Content Area (Col 1-5) ── */}
              <div className="lg:col-span-5 flex flex-col items-start relative z-20">
                {/* Micro Label */}
                <div className="inline-flex items-center gap-3 px-4 py-1.5 border border-primary/30 bg-primary/10 mb-8 backdrop-blur-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  <span className="font-accent text-primary text-[9px] font-bold uppercase tracking-[0.3em]">
                    The Origin Story
                  </span>
                </div>

                {/* Headline */}
                <h1 className="font-heading text-6xl md:text-[5.5rem] text-white uppercase leading-[0.85] tracking-tighter mb-8 relative">
                  Not A Gym.<br />
                  <span className="text-transparent" style={{ WebkitTextStroke: "2px #ff2d2d" }}>An Arena.</span>
                </h1>

                {/* Body */}
                <p className="font-body text-white/60 text-lg leading-relaxed mb-10 max-w-md border-l-2 border-white/20 pl-6">
                  We looked at the standard fitness industry and saw complacency. Crowded floors, uninspired coaching, and average results. DeZone was forged to be the absolute opposite.
                </p>

                {/* Stats Row */}
                <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10 w-full max-w-md">
                  <div>
                    <p className="font-heading text-4xl md:text-5xl text-white mb-1">50k<span className="text-primary">+</span></p>
                    <p className="font-accent text-white/40 text-[9px] uppercase tracking-[0.2em]">Hours Coached</p>
                  </div>
                  <div>
                    <p className="font-heading text-4xl md:text-5xl text-white mb-1">100<span className="text-primary">%</span></p>
                    <p className="font-accent text-white/40 text-[9px] uppercase tracking-[0.2em]">Result Focus</p>
                  </div>
                </div>
              </div>

              {/* ── Right Image Composition (Col 6-12) ── */}
              <div className="lg:col-span-7 relative h-[500px] md:h-[700px] w-full mt-10 lg:mt-0">
                
                {/* Back Plate (Offset block) */}
                <div className="absolute top-[10%] right-0 w-[85%] h-[80%] bg-zinc-900 border border-white/5" />
                
                {/* Main Hero Image */}
                <div className="absolute top-[5%] right-[10%] w-[80%] h-[90%] overflow-hidden border border-white/10 shadow-[0_0_80px_-20px_rgba(255,45,45,0.3)] z-10 group">
                  <Image 
                    src={IMAGES[2]} 
                    alt="DeZone Arena" 
                    fill 
                    className="object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]" 
                    priority 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                </div>

                {/* Secondary Small Image Overlap */}
                <div className="absolute top-[20%] -left-[5%] z-20 w-[200px] h-[250px] overflow-hidden border border-white/20 shadow-2xl hidden md:block group">
                  <Image src={IMAGES[1]} alt="Detail" fill className="object-cover grayscale brightness-50 group-hover:brightness-100 group-hover:grayscale-0 transition-all duration-700" />
                </div>


                {/* Scanning Laser Line */}
                <div className="absolute top-0 left-[15%] right-[10%] h-[2px] bg-primary/80 scan-beam z-30 pointer-events-none" />

              </div>
            </div>
          </div>
        </section>

        <GymStorySection />

        <PurposeSection />

        <ValuesSection />

        <FacilitiesSection />

      </main>

      {/* Reusing the CTA and Footer for consistency */}
      <CtaBanner />
      <Footer />
    </div>
  );
}
