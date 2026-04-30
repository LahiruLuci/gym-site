"use client";

import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import { AUDIENCES } from "@/app/lib/data";

interface AudienceSectionProps {
  activeAudience: number;
  setActiveAudience: Dispatch<SetStateAction<number>>;
  isAutoPlaying: boolean;
  setIsAutoPlaying: Dispatch<SetStateAction<boolean>>;
}

export default function AudienceSection({
  activeAudience,
  setActiveAudience,
  isAutoPlaying,
  setIsAutoPlaying,
}: AudienceSectionProps) {
  return (
    <section className="relative py-32 bg-black overflow-hidden">
      {/* Background ghost typography */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-[0.03] select-none">
        <div className="absolute top-0 left-[-10%] font-heading text-[30vw] leading-none whitespace-nowrap text-white">
          {AUDIENCES[activeAudience].title}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="font-accent text-primary uppercase tracking-[0.4em] text-sm mb-4 block animate-fade-in">Identify Your Path</span>
            <h2 className="font-heading text-6xl md:text-8xl text-white uppercase leading-none tracking-tighter">
              Who Is <span className="text-gradient">This For?</span>
            </h2>
          </div>
          <p className="font-body text-muted text-lg max-w-md border-l border-primary/30 pl-6 italic">
            &ldquo;No matter your starting point, we have the specialized path to reach your peak performance.&rdquo;
          </p>
        </div>

        {/* Desktop Hover-Expand */}
        <div
          className="hidden lg:flex h-[600px] gap-4"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {AUDIENCES.map((audience, index) => (
            <div
              key={audience.id}
              onMouseEnter={() => setActiveAudience(index)}
              className={`relative flex-1 overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group cursor-pointer ${
                activeAudience === index ? "flex-[2.5] bg-primary" : "bg-zinc-900 grayscale hover:grayscale-0"
              }`}
            >
              <Image
                src={audience.img}
                alt={audience.title}
                fill
                className={`object-cover transition-transform duration-1000 ${
                  activeAudience === index ? "scale-105 opacity-40" : "scale-110 opacity-20"
                }`}
              />
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className={`font-heading text-5xl transition-colors duration-500 ${activeAudience === index ? "text-white" : "text-white/20"}`}>
                    {audience.id}
                  </span>
                  <div className={`w-12 h-12 border transition-all duration-500 rounded-full flex items-center justify-center shrink-0 ${activeAudience === index ? "bg-white border-white rotate-45" : "border-white/20"}`}>
                    <svg className={`w-6 h-6 ${activeAudience === index ? "text-primary" : "text-white/20"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                </div>

                {/* Inactive: vertical title */}
                <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-500 ${activeAudience === index ? "opacity-0 scale-90 pointer-events-none" : "opacity-50 scale-100 delay-200"}`}>
                  <h3 className="font-heading text-4xl uppercase tracking-widest whitespace-nowrap" style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
                    {audience.title}
                  </h3>
                </div>

                {/* Active: horizontal content */}
                <div className={`transition-all duration-500 absolute bottom-8 left-8 right-8 ${activeAudience === index ? "opacity-100 translate-y-0 delay-200" : "opacity-0 translate-y-10 pointer-events-none"}`}>
                  <h3 className="font-heading text-5xl md:text-6xl xl:text-7xl uppercase leading-none mb-4">{audience.title}</h3>
                  <div className="overflow-hidden">
                    <p className="text-white font-bold text-sm uppercase tracking-widest mb-4">{audience.hook}</p>
                    <p className="text-white/80 text-base mb-8 max-w-xs">{audience.desc}</p>
                    <Link 
                      href="/join"
                      className="inline-block px-6 py-3 bg-white text-primary font-bold text-xs uppercase tracking-widest hover:bg-primary hover:text-white transition-all shadow-xl shadow-black/50 cursor-pointer text-center"
                    >
                      {audience.cta}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="lg:hidden relative">
          <div className="relative h-[550px] overflow-hidden rounded-2xl">
            {AUDIENCES.map((audience, index) => (
              <div
                key={audience.id}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  activeAudience === index ? "opacity-100 translate-x-0" :
                  index < activeAudience ? "opacity-0 -translate-x-full" : "opacity-0 translate-x-full"
                }`}
              >
                <Image src={audience.img} alt={audience.title} fill className="object-cover opacity-60" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end bg-linear-to-t from-black/90 via-black/50 to-transparent">
                  <span className="font-heading text-6xl text-primary/30 absolute top-10 left-8">{audience.id}</span>
                  <h3 className="font-heading text-6xl uppercase text-white mb-2">{audience.title}</h3>
                  <p className="text-primary font-bold text-sm uppercase tracking-widest mb-4">{audience.hook}</p>
                  <p className="text-white/70 text-base mb-8">{audience.desc}</p>
                  <Link 
                    href="/join"
                    className="block w-full py-4 bg-primary text-white font-bold text-xs uppercase tracking-widest cursor-pointer hover:bg-white hover:text-primary transition-colors text-center"
                  >
                    {audience.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 gap-4" onMouseEnter={() => setIsAutoPlaying(false)} onMouseLeave={() => setIsAutoPlaying(true)}>
            {AUDIENCES.map((_, index) => (
              <button
                key={index}
                onClick={() => { setActiveAudience(index); setIsAutoPlaying(false); setTimeout(() => setIsAutoPlaying(true), 5000); }}
                className={`h-1.5 transition-all duration-300 ${activeAudience === index ? "w-10 bg-primary" : "w-4 bg-zinc-800"}`}
              />
            ))}
          </div>

          <button
            onClick={() => { setActiveAudience((prev) => (prev - 1 + AUDIENCES.length) % AUDIENCES.length); setIsAutoPlaying(false); setTimeout(() => setIsAutoPlaying(true), 5000); }}
            className="absolute top-1/2 left-[-20px] -translate-y-1/2 w-12 h-12 bg-white/5 backdrop-blur-md rounded-full flex items-center justify-center text-white active:scale-95"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button
            onClick={() => { setActiveAudience((prev) => (prev + 1) % AUDIENCES.length); setIsAutoPlaying(false); setTimeout(() => setIsAutoPlaying(true), 5000); }}
            className="absolute top-1/2 right-[-20px] -translate-y-1/2 w-12 h-12 bg-white/5 backdrop-blur-md rounded-full flex items-center justify-center text-white active:scale-95"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>
    </section>
  );
}
