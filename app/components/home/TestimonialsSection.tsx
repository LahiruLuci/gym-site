"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { IMAGES } from "@/app/lib/data";

// ─── Data ────────────────────────────────────────────────────────────────────

const TRANSFORMATIONS = [
  {
    name: "Kasun P.",
    result: "Lost 12kg in 3 months",
    time: "90 Day Transformation",
    program: "Fat Loss Program",
    trainer: "Sarah Jen",
    beforeImg: "/assets/men-1.webp",
    afterImg: "/assets/men-1-trasform.png",
  },
  {
    name: "Priya M.",
    result: "Gained 8kg muscle mass",
    time: "6 Month Journey",
    program: "Strength Training",
    trainer: "John Silva",
    beforeImg: "/assets/girl-1.webp",
    afterImg: "/assets/girl-1-trasform.png",
  },
  {
    name: "Dante R.",
    result: "Lost 20kg — Stage Ready",
    time: "8 Month Transformation",
    program: "Athlete Performance",
    trainer: "Mike Ty",
    beforeImg: "/assets/men-2.webp",
    afterImg: "/assets/men-2-trasform.png",
  },
];

const QUOTES = [
  {
    quote: "I never thought I could achieve this level of fitness. The trainers at DeZone pushed me beyond what I thought was possible. I'm a completely different person.",
    name: "Nadeesha K.",
    context: "Lost 8kg · Gained confidence",
    stars: 5,
    img: "/assets/girl-1-trasform.png",
  },
  {
    quote: "Starting at zero fitness, the team built me up week by week. The community here is electric. I look forward to every single session now.",
    name: "Rayan F.",
    context: "Beginner → 5K runner in 10 weeks",
    stars: 5,
    img: "/assets/men-1-trasform.png",
  },
  {
    quote: "As a working professional, I needed efficiency. DeZone's elite program delivered more results in 3 months than 2 years at other gyms.",
    name: "Dante R.",
    context: "20kg lost · Full body recomp",
    stars: 5,
    img: "/assets/men-2-trasform.png",
  },
];

const STATS = [
  { num: "500+",  label: "Transformations" },
  { num: "1,200+", label: "Members" },
  { num: "98%",  label: "Success Rate" },
  { num: "4.9★", label: "Avg Rating" },
];

// ─── Before/After Slider Card ─────────────────────────────────────────────────

function BeforeAfterCard({ t, index }: { t: typeof TRANSFORMATIONS[0]; index: number }) {
  const [sliderPos, setSliderPos] = useState(50); // percent
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updateSlider = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const pct = Math.min(Math.max(((clientX - rect.left) / rect.width) * 100, 2), 98);
    setSliderPos(pct);
  }, []);

  return (
    <div
      className="group relative overflow-hidden bg-black border border-white/10 hover:border-primary/40 transition-all duration-500 hover:shadow-[0_0_60px_-10px_rgba(255,45,45,0.3)]"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Time Badge — top left */}
      <div className="absolute top-3 left-3 z-30 px-2 py-1 bg-primary text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15em] max-w-[55%] truncate">
        {t.time}
      </div>

      {/* Before / After Labels — top right */}
      <div className="absolute top-3 right-3 z-30 flex gap-1">
        <span className="px-2 py-1 bg-black/70 backdrop-blur-sm text-white/60 text-[8px] sm:text-[9px] font-bold uppercase tracking-widest">Before</span>
        <span className="px-2 py-1 bg-primary/80 backdrop-blur-sm text-white text-[8px] sm:text-[9px] font-bold uppercase tracking-widest">After</span>
      </div>

      {/* ── Slider Container ─────────────────────────────────────── */}
      <div
        ref={containerRef}
        className="relative h-[380px] select-none cursor-ew-resize overflow-hidden"
        onMouseDown={(e) => { setIsDragging(true); updateSlider(e.clientX); }}
        onMouseMove={(e) => isDragging && updateSlider(e.clientX)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onTouchStart={(e) => { setIsDragging(true); updateSlider(e.touches[0].clientX); }}
        onTouchMove={(e) => updateSlider(e.touches[0].clientX)}
        onTouchEnd={() => setIsDragging(false)}
      >
        {/* AFTER image (base layer — full color) */}
        <div className="absolute inset-0">
          <Image src={t.afterImg} alt="After" fill className="object-cover" />
          <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent" />
        </div>

        {/* BEFORE image (clipped layer — grayscale) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
        >
          <Image src={t.beforeImg} alt="Before" fill className="object-cover grayscale brightness-75" />
          <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent" />
        </div>

        {/* Divider Line */}
        <div
          className="absolute top-0 bottom-0 z-20 flex items-center justify-center"
          style={{ left: `${sliderPos}%`, transform: "translateX(-50%)" }}
        >
          <div className="w-[2px] h-full bg-white/80 shadow-[0_0_12px_rgba(255,255,255,0.5)]" />
          {/* Handle */}
          <div className="absolute w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,45,45,0.6)] border-2 border-primary">
            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 9l-4 3 4 3M16 9l4 3-4 3" />
            </svg>
          </div>
        </div>
      </div>

      {/* ── Info Footer ──────────────────────────────────────────── */}
      <div className="p-4 sm:p-6 bg-zinc-950 border-t border-white/5">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <p className="font-heading text-white text-lg sm:text-2xl uppercase tracking-wide mb-1 truncate">{t.name}</p>
            <p className="text-primary font-bold text-xs sm:text-sm uppercase tracking-[0.1em] sm:tracking-[0.15em] leading-tight">{t.result}</p>
          </div>
          <div className="text-right shrink-0">
            <p className="text-white/30 text-[9px] uppercase tracking-widest mb-1">Program</p>
            <p className="text-white/70 text-[10px] sm:text-xs font-bold uppercase">{t.program}</p>
          </div>
        </div>
        <div className="mt-3 pt-3 border-t border-white/5 flex items-center gap-2">
          <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <span className="text-white/40 text-[9px] uppercase tracking-widest">Coached by</span>
          <span className="text-white text-[10px] sm:text-[11px] font-bold uppercase">{t.trainer}</span>
        </div>
      </div>
    </div>
  );
}

// ─── Testimonial Quote Card ───────────────────────────────────────────────────

function QuoteCard({ q, index }: { q: typeof QUOTES[0]; index: number }) {
  return (
    <div
      className="group relative flex flex-col bg-zinc-950 border border-white/8 p-8 overflow-hidden hover:border-primary/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_60px_-16px_rgba(255,45,45,0.2)]"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Expanding top accent line */}
      <div className="absolute top-0 left-0 w-0 group-hover:w-full h-[2px] bg-primary transition-all duration-700" />

      {/* Giant decorative quote mark */}
      <div className="absolute -top-4 -left-2 font-heading text-[120px] leading-none text-white/[0.03] select-none pointer-events-none">
        &ldquo;
      </div>

      {/* Stars */}
      <div className="flex gap-1 mb-5 relative z-10">
        {Array.from({ length: q.stars }).map((_, s) => (
          <svg key={s} className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Quote text */}
      <p className="font-body text-white/80 text-base leading-relaxed flex-grow mb-8 italic relative z-10">
        &ldquo;{q.quote}&rdquo;
      </p>

      {/* Author row */}
      <div className="flex items-center gap-4 pt-6 border-t border-white/8 relative z-10">
        <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-primary/50 transition-colors duration-500 shrink-0">
          <Image src={q.img} alt={q.name} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
        </div>
        <div>
          <p className="font-heading text-white text-lg tracking-widest">{q.name}</p>
          <span className="text-primary text-[10px] font-bold uppercase tracking-[0.2em]">{q.context}</span>
        </div>
        {/* Verified badge */}
        <div className="ml-auto">
          <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
            <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────

export default function TestimonialsSection() {
  return (
    <section className="py-32 bg-black relative overflow-hidden border-t border-white/5">
      {/* ── Ambient background ─────────────────────────────────── */}
      <div className="absolute -top-60 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-primary/4 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/3 blur-[140px] rounded-full pointer-events-none" />

      {/* ── Ghost typography ───────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.025] select-none flex items-center">
        <span className="font-heading text-[20vw] whitespace-nowrap text-white leading-none tracking-tighter">
          RESULTS&nbsp;RESULTS&nbsp;
        </span>
      </div>

      <div className="container mx-auto px-6 relative z-10">

        {/* ── Stats Counter Bar ──────────────────────────────── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 border border-white/5 mb-24">
          {STATS.map((s, i) => (
            <div key={i} className="bg-black px-8 py-6 text-center group hover:bg-primary/5 transition-colors duration-500">
              <p className="font-heading text-4xl md:text-5xl text-primary mb-1">{s.num}</p>
              <p className="font-body text-white/40 text-xs uppercase tracking-[0.2em]">{s.label}</p>
            </div>
          ))}
        </div>

        {/* ── Section Header ─────────────────────────────────── */}
        <div className="max-w-3xl mb-20">
          <span className="font-accent text-primary uppercase tracking-[0.4em] text-sm mb-4 block">Proof System</span>
          <h2 className="font-heading text-5xl md:text-7xl text-white uppercase leading-[0.88] tracking-tighter mb-6">
            Real Results.{" "}
            <span className="text-transparent" style={{ WebkitTextStroke: "2px #ff2d2d" }}>Real</span>{" "}
            <span className="text-gradient">Transformations.</span>
          </h2>
          <p className="font-body text-muted text-lg max-w-lg border-l-2 border-primary pl-6">
            See how our members changed their bodies — and their lives. Drag the slider to see the difference.
          </p>
        </div>

        {/* ── Transformation Cards (Before/After Sliders) ───── */}
        <div className="mb-6">
          <div className="flex items-center gap-4 mb-8">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="font-accent text-white/40 text-xs uppercase tracking-[0.35em]">Drag to Compare — Visual Proof</span>
            <div className="flex-1 h-px bg-white/5" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TRANSFORMATIONS.map((t, i) => (
              <BeforeAfterCard key={i} t={t} index={i} />
            ))}
          </div>
        </div>

        {/* ── Divider ────────────────────────────────────────── */}
        <div className="flex items-center gap-6 my-12">
          <div className="flex-1 h-px bg-white/5" />
          <span className="font-accent text-white/20 text-xs uppercase tracking-[0.35em] shrink-0">Member Voices</span>
          <div className="flex-1 h-px bg-white/5" />
        </div>

        {/* ── Testimonial Quote Cards ─────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {QUOTES.map((q, i) => (
            <QuoteCard key={i} q={q} index={i} />
          ))}
        </div>

        {/* ── Bottom CTA ─────────────────────────────────────── */}
        <div className="relative border border-white/8 p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden">
          {/* Red ambient glow */}
          <div className="absolute left-0 top-0 w-32 h-full bg-primary/10 blur-[60px] pointer-events-none" />
          {/* Corner accents */}
          <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-primary/40" />
          <div className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-primary/40" />

          <div className="relative z-10">
            <p className="font-accent text-primary uppercase tracking-[0.4em] text-sm mb-2">You Could Be Next</p>
            <h3 className="font-heading text-4xl md:text-5xl text-white uppercase tracking-tighter">
              Start Your Transformation Today
            </h3>
          </div>

          <button className="relative z-10 shrink-0 group inline-flex items-center gap-4 px-10 py-5 bg-primary text-white font-body font-bold text-sm uppercase tracking-[0.2em] hover:bg-white hover:text-primary transition-all duration-300 shadow-[0_0_40px_rgba(255,45,45,0.3)] hover:shadow-[0_0_60px_rgba(255,45,45,0.5)] cursor-pointer">
            Book Free Intro
            <svg className="w-5 h-5 translate-x-0 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}
