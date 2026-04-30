"use client";

import Image from "next/image";
import { IMAGES } from "@/app/lib/data";

export default function PurposeSection() {
  return (
    <section className="bg-black relative py-32 overflow-hidden border-t border-white/5">
      {/* ── Intense Background Core ── */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 blur-[250px] rounded-[100%] pointer-events-none" />

      {/* Grid Floor Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 opacity-[0.03] pointer-events-none" 
           style={{ 
             backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)", 
             backgroundSize: "40px 40px",
             transform: "perspective(1000px) rotateX(70deg) scale(2)",
             transformOrigin: "bottom"
           }} 
      />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* ── Section Header ── */}
        <div className="text-center mb-20 md:mb-32 relative z-20">
          <div className="inline-flex items-center gap-3 px-6 py-2 border border-primary/20 bg-primary/5 mb-6 backdrop-blur-md shadow-[0_0_30px_rgba(255,45,45,0.15)]">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="font-accent text-primary text-[10px] font-bold uppercase tracking-[0.4em]">
              The Core Protocol
            </span>
          </div>
          <h2 className="font-heading text-6xl md:text-8xl lg:text-[7rem] text-white uppercase leading-none tracking-tighter mb-4">
            Our Purpose
          </h2>
          <p className="font-body text-white/50 text-base md:text-xl uppercase tracking-[0.2em]">
            Driven by discipline. <span className="text-primary font-bold">Focused on transformation.</span>
          </p>
        </div>

        {/* ── 3D Isometric Container ── */}
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16 items-center justify-center [perspective:2500px]">
          
          {/* ── MISSION MONOLITH (Left) ── */}
          <div 
            className="group relative w-full lg:w-1/2 min-h-[600px] lg:min-h-[700px] border border-white/10 bg-zinc-950 overflow-hidden transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] lg:origin-right lg:[transform:rotateY(15deg)_scale(0.95)] lg:hover:[transform:rotateY(0deg)_scale(1)_translateZ(50px)] shadow-[0_0_50px_rgba(0,0,0,0.8)] lg:hover:shadow-[0_0_80px_rgba(255,45,45,0.15)] lg:[transform-style:preserve-3d]"
          >
            {/* Background Image */}
            <Image 
              src={IMAGES[2]} 
              alt="Mission Background" 
              fill 
              className="object-cover opacity-40 grayscale group-hover:opacity-70 group-hover:grayscale-0 transition-all duration-1000"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent/20" />
            
            {/* Content Container (Pushed out in 3D space) */}
            <div className="absolute inset-0 p-10 md:p-16 flex flex-col justify-end lg:[transform:translateZ(40px)] transition-transform duration-1000">
              <p className="font-accent text-primary text-[10px] uppercase tracking-[0.4em] mb-4">Phase 01</p>
              
              {/* Massive Title */}
              <h3 className="font-heading text-6xl md:text-8xl text-transparent uppercase tracking-tighter leading-none mb-8 relative" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.8)" }}>
                Mission
                {/* Fill effect on hover */}
                <span className="absolute left-0 top-0 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ WebkitTextStroke: "0px" }}>Mission</span>
              </h3>
              
              <div className="w-16 h-1 bg-primary mb-8 transition-all duration-1000 group-hover:w-full shadow-[0_0_15px_rgba(255,45,45,0.8)]" />
              
              <p className="font-body text-white/70 text-lg md:text-xl leading-relaxed mb-10 max-w-md group-hover:text-white transition-colors duration-700">
                To help individuals build <span className="font-bold text-white group-hover:text-primary transition-colors">strength</span>, <span className="font-bold text-white group-hover:text-primary transition-colors">discipline</span>, and <span className="font-bold text-white group-hover:text-primary transition-colors">confidence</span> through structured training and real guidance.
              </p>
              
              <ul className="space-y-5">
                {['Expert Coaching', 'Proven Systems', 'Real Results'].map((item, i) => (
                  <li key={i} className="flex items-center gap-6">
                    <div className="w-8 h-[1px] bg-white/20 group-hover:bg-primary group-hover:w-16 group-hover:shadow-[0_0_10px_rgba(255,45,45,0.8)] transition-all duration-700 delay-100" />
                    <span className="font-accent text-white/60 text-xs uppercase tracking-[0.3em] group-hover:text-white transition-colors duration-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Edge Scanning Laser */}
            <div className="absolute top-0 bottom-0 left-0 w-1 bg-gradient-to-b from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-500" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-primary opacity-0 group-hover:opacity-100 transition-all duration-700 m-8" />
          </div>

          {/* ── VISION MONOLITH (Right) ── */}
          <div 
            className="group relative w-full lg:w-1/2 min-h-[600px] lg:min-h-[700px] border border-white/10 bg-zinc-950 overflow-hidden transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] lg:origin-left lg:[transform:rotateY(-15deg)_scale(0.95)] lg:hover:[transform:rotateY(0deg)_scale(1)_translateZ(50px)] shadow-[0_0_50px_rgba(0,0,0,0.8)] lg:hover:shadow-[0_0_80px_rgba(255,45,45,0.15)] lg:[transform-style:preserve-3d]"
          >
            {/* Background Image */}
            <Image 
              src={IMAGES[1]} 
              alt="Vision Background" 
              fill 
              className="object-cover opacity-40 grayscale group-hover:opacity-70 group-hover:grayscale-0 transition-all duration-1000"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent/20" />
            
            {/* Content Container (Pushed out in 3D space) */}
            <div className="absolute inset-0 p-10 md:p-16 flex flex-col justify-end lg:[transform:translateZ(40px)] transition-transform duration-1000">
              <p className="font-accent text-primary text-[10px] uppercase tracking-[0.4em] mb-4">Phase 02</p>
              
              {/* Massive Title */}
              <h3 className="font-heading text-6xl md:text-8xl text-transparent uppercase tracking-tighter leading-none mb-8 relative" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.8)" }}>
                Vision
                {/* Fill effect on hover */}
                <span className="absolute left-0 top-0 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ WebkitTextStroke: "0px" }}>Vision</span>
              </h3>
              
              <div className="w-16 h-1 bg-primary mb-8 transition-all duration-1000 group-hover:w-full shadow-[0_0_15px_rgba(255,45,45,0.8)]" />
              
              <p className="font-body text-white/70 text-lg md:text-xl leading-relaxed mb-10 max-w-md group-hover:text-white transition-colors duration-700">
                To become a leading fitness community where <span className="font-bold text-white group-hover:text-primary transition-colors">transformation</span> is not just a goal, but a <span className="font-bold text-white group-hover:text-primary transition-colors">lifestyle</span>.
              </p>
              
              <ul className="space-y-5">
                {['Strong Community', 'Inspire Consistency', 'Set New Standards'].map((item, i) => (
                  <li key={i} className="flex items-center gap-6">
                    <div className="w-8 h-[1px] bg-white/20 group-hover:bg-primary group-hover:w-16 group-hover:shadow-[0_0_10px_rgba(255,45,45,0.8)] transition-all duration-700 delay-100" />
                    <span className="font-accent text-white/60 text-xs uppercase tracking-[0.3em] group-hover:text-white transition-colors duration-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Edge Scanning Laser */}
            <div className="absolute top-0 bottom-0 right-0 w-1 bg-gradient-to-b from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-500" />
            <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-primary opacity-0 group-hover:opacity-100 transition-all duration-700 m-8" />
          </div>

        </div>

        {/* ── Massive Floating Quote ── */}
        <div className="mt-32 pt-16 border-t border-white/5 text-center relative z-20">
          <p className="font-heading text-3xl md:text-5xl lg:text-6xl text-transparent uppercase tracking-widest leading-tight mx-auto max-w-5xl" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.15)" }}>
            "Discipline builds what <br className="hidden md:block" />
            <span className="text-primary/90 shadow-primary drop-shadow-[0_0_30px_rgba(255,45,45,0.5)]" style={{ WebkitTextStroke: "0px" }}>motivation</span> starts."
          </p>
        </div>

      </div>
    </section>
  );
}
