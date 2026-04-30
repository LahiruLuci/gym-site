"use client";

import { useState } from "react";
import Image from "next/image";

// Reusing assets from the site
const ASSETS = [
  "/assets/home-page-hero-slider-1.webp",
  "/assets/home-page-hero-slider-2.webp",
  "/assets/home-page-hero-slider-3.webp",
  "/assets/home-page-hero-slider-4.webp",
];

const FILTERS = ["All", "Fat Loss", "Strength", "Performance", "Personal Training"];

const PROGRAMS = [
  {
    id: "fat-loss",
    name: "The Shred Protocol",
    category: "Fat Loss",
    hook: "Burn stubborn fat and completely transform your body composition.",
    desc: "A high-intensity, metabolically demanding system combining HIIT, heavy compounds, and strict nutrition tracking to maximize fat oxidation while preserving lean muscle.",
    benefits: [
      "Progressive metabolic conditioning",
      "Customized macronutrient guidelines",
      "Weekly body-composition tracking"
    ],
    target: "Beginner to Intermediate",
    duration: "8–12 Weeks",
    frequency: "4 Sessions / Week",
    outcome: "Lose 5–10kg body fat",
    image: "/assets/daniel-apodaca-WdoQio6HPVA-unsplash.webp",
    tags: ["High Intensity", "Most Popular"]
  },
  {
    id: "strength",
    name: "Hypertrophy Engine",
    category: "Strength",
    hook: "Build raw power, increase muscle mass, and shatter lifting plateaus.",
    desc: "A periodized progressive overload system focusing on the big three lifts, complemented by precise high-volume isolation work for maximum muscle growth.",
    benefits: [
      "Periodized strength blocks",
      "Advanced form breakdown & analysis",
      "Specific recovery protocols"
    ],
    target: "Intermediate to Advanced",
    duration: "12 Weeks",
    frequency: "5 Sessions / Week",
    outcome: "Add 3–6kg lean muscle",
    image: "/assets/muscles-builder.webp",
    tags: ["Heavy Lifting", "Advanced"]
  },
  {
    id: "personal-training",
    name: "Elite 1-on-1 Coaching",
    category: "Personal Training",
    hook: "A fully bespoke training system designed exclusively for your exact biology.",
    desc: "Work directly with our senior coaches. Every set, rep, and meal is dictated by your personal progression data. No guesswork, just guaranteed results.",
    benefits: [
      "100% custom training & diet plans",
      "Real-time form correction",
      "24/7 coach messaging access"
    ],
    target: "All Levels (Highly Customized)",
    duration: "Ongoing",
    frequency: "Tailored to you",
    outcome: "Guaranteed Goal Achievement",
    image: "/assets/professional.webp",
    tags: ["Premium", "Customized"]
  },
  {
    id: "group",
    name: "Squad Dynamics",
    category: "Performance",
    hook: "Harness the energy of the pack to push past your mental limits.",
    desc: "Small-group training that combines the attention of personal coaching with the competitive, high-energy atmosphere of a team environment.",
    benefits: [
      "Motivational group atmosphere",
      "Scaled exercises for all levels",
      "Community accountability"
    ],
    target: "Beginners to Intermediate",
    duration: "Ongoing",
    frequency: "Flexible Scheduling",
    outcome: "Increased work capacity",
    image: "/assets/group-energy.webp",
    tags: ["Community", "High Energy"]
  },
  {
    id: "athlete",
    name: "Apex Athlete",
    category: "Performance",
    hook: "Sports-specific conditioning for those competing at the highest levels.",
    desc: "A rigorous conditioning camp focusing on explosive power, agility, vo2 max, and injury prevention. Train like a professional athlete.",
    benefits: [
      "Plyometric & explosive power work",
      "Agility & reaction drills",
      "Lactic acid threshold training"
    ],
    target: "Advanced / Athletes",
    duration: "16 Weeks",
    frequency: "6 Sessions / Week",
    outcome: "Peak competitive readiness",
    image: "/assets/elite-coaching.webp",
    tags: ["Extreme", "Sports Specific"]
  }
];

export default function ProgramsList() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredPrograms = PROGRAMS.filter(p => 
    activeFilter === "All" || p.category === activeFilter
  );

  return (
    <section className="py-24 md:py-32 bg-zinc-950 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary/3 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-primary/2 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* ── Header Area ── */}
        <div className="mb-16 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <span className="font-accent text-primary uppercase tracking-[0.4em] text-sm mb-4 block">Our Programs</span>
            <h2 className="font-heading text-5xl md:text-7xl text-white uppercase leading-[0.88] tracking-tighter mb-6">
              Choose Your <span className="text-gradient">Path</span>
            </h2>
            <p className="font-body text-white/60 text-lg border-l-2 border-primary/50 pl-4 mx-auto md:mx-0">
              Select the training protocol engineered for your specific goals. Precision programming, zero guesswork.
            </p>
          </div>

          {/* ── Filter HUD ── */}
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-2 shrink-0">
            {FILTERS.map(f => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`cursor-pointer px-5 py-2.5 font-body text-[11px] font-bold uppercase tracking-[0.15em] transition-all duration-300 border ${
                  activeFilter === f 
                    ? "bg-primary text-white border-primary shadow-[0_0_20px_rgba(255,45,45,0.4)]" 
                    : "bg-white/5 text-white/50 border-white/10 hover:border-white/30 hover:text-white"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* ── Programs List (Horizontal Blocks) ── */}
        <div className="flex flex-col gap-12 lg:gap-20">
          {filteredPrograms.map((prog, idx) => (
            <div 
              key={prog.id} 
              className="group relative flex flex-col lg:flex-row items-stretch border border-white/5 bg-black hover:border-primary/30 transition-colors duration-500 overflow-hidden"
            >
              
              {/* ── 1. Image Section (Left) ── */}
              <div className="w-full lg:w-[45%] xl:w-[40%] relative min-h-[300px] lg:min-h-[500px] overflow-hidden shrink-0">
                <Image 
                  src={prog.image} 
                  alt={prog.name} 
                  fill 
                  className="object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black via-black/40 to-transparent" />
                
                {/* HUD Elements on Image */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <span className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 text-white text-[9px] font-bold uppercase tracking-[0.2em]">
                    {prog.category}
                  </span>
                  {prog.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-primary/80 backdrop-blur-md text-white text-[9px] font-bold uppercase tracking-[0.2em]">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="absolute bottom-4 left-4 right-4 p-4 bg-black/80 backdrop-blur-md border border-white/10 border-l-2 border-l-primary hidden lg:block translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-primary text-[9px] uppercase tracking-widest mb-1">Expected Outcome</p>
                  <p className="text-white font-heading tracking-wider">{prog.outcome}</p>
                </div>
              </div>

              {/* ── 2. Content Section (Right) ── */}
              <div className="w-full lg:w-[55%] xl:w-[60%] p-8 md:p-12 flex flex-col justify-center relative">
                
                {/* Animated scan line inside content */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/0 group-hover:via-primary/50 to-transparent transition-all duration-700" />
                
                <h3 className="font-heading text-4xl md:text-5xl text-white uppercase tracking-tighter mb-2 group-hover:text-primary transition-colors duration-500">
                  {prog.name}
                </h3>
                <p className="font-accent text-white/80 text-sm md:text-base italic mb-6">
                  "{prog.hook}"
                </p>
                
                <p className="font-body text-white/50 text-sm leading-relaxed mb-8 max-w-2xl">
                  {prog.desc}
                </p>

                {/* Grid for Specs & Benefits */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                  
                  {/* Key Benefits */}
                  <div>
                    <h4 className="font-body text-white text-[10px] font-bold uppercase tracking-[0.2em] mb-4 pb-2 border-b border-white/10">
                      Core Pillars
                    </h4>
                    <ul className="space-y-3">
                      {prog.benefits.map((ben, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-4 h-4 rounded-sm bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 border border-primary/30">
                            <svg className="w-2.5 h-2.5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
                          </div>
                          <span className="font-body text-white/70 text-xs">{ben}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Specs Box */}
                  <div className="bg-white/5 border border-white/5 p-5">
                    <div className="space-y-4">
                      <div>
                        <p className="text-white/30 text-[9px] uppercase tracking-widest mb-1">Target Audience</p>
                        <p className="text-white font-bold text-xs uppercase tracking-wider">{prog.target}</p>
                      </div>
                      <div>
                        <p className="text-white/30 text-[9px] uppercase tracking-widest mb-1">Duration</p>
                        <p className="text-white font-bold text-xs uppercase tracking-wider">{prog.duration}</p>
                      </div>
                      <div>
                        <p className="text-white/30 text-[9px] uppercase tracking-widest mb-1">Frequency</p>
                        <p className="text-white font-bold text-xs uppercase tracking-wider">{prog.frequency}</p>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Mobile Outcome (Hidden on Desktop, shown over image on desktop) */}
                <div className="block lg:hidden p-4 bg-primary/10 border-l-2 border-primary mb-8">
                  <p className="text-primary text-[9px] uppercase tracking-widest mb-1">Expected Outcome</p>
                  <p className="text-white font-heading tracking-wider">{prog.outcome}</p>
                </div>

                {/* CTA */}
                <div className="mt-auto flex flex-wrap gap-4">
                  <button className="cursor-pointer px-8 py-4 bg-primary text-white font-body font-bold text-[11px] uppercase tracking-[0.25em] hover:bg-white hover:text-primary transition-all duration-300 shadow-[0_0_20px_rgba(255,45,45,0.2)] hover:shadow-[0_0_40px_rgba(255,45,45,0.4)] flex items-center gap-2 group/btn">
                    Join Program
                    <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                  </button>
                  <button className="cursor-pointer px-8 py-4 bg-transparent text-white font-body font-bold text-[11px] uppercase tracking-[0.25em] border border-white/20 hover:border-white transition-all duration-300">
                    View Details
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
