"use client";

import { useState, useRef, MouseEvent } from "react";
import Image from "next/image";

// ─── Gallery Data ─────────────────────────────────────────────────────────────
// Using all 4 available hero assets. The "video" tile is a styled placeholder
// with a play button — swap src for a real video path when ready.

const GALLERY_ITEMS = [
  {
    type: "image" as const,
    src:  "/assets/gym-environment.webp",
    alt:  "DeZone gym interior — premium equipment floor",
    label: "The Environment",
    span:  "lg:col-span-2 lg:row-span-2", // Hero tile — large
  },
  {
    type: "image" as const,
    src:  "/assets/train-hard.webp",
    alt:  "Athlete pushing limits in a training session",
    label: "Train Hard",
    span:  "",
  },
  {
    type: "video" as const,
    src:  "/assets/home-page-hero-slider-3.webp", // poster frame
    alt:  "DeZone gym walkthrough — feel the atmosphere",
    label: "Gym Walkthrough",
    span:  "",
  },
  {
    type: "image" as const,
    src:  "/assets/elite-coaching.webp",
    alt:  "Trainer coaching a member through form correction",
    label: "Elite Coaching",
    span:  "",
  },
  {
    type: "image" as const,
    src:  "/assets/group-energy.webp",
    alt:  "Group training session — energy and community",
    label: "Group Energy",
    span:  "",
  },
  {
    type: "image" as const,
    src:  "/assets/muscles-builder.webp",
    alt:  "Intense strength training under premium lighting",
    label: "Strength Zone",
    span:  "lg:col-span-2", // Wide tile
  },
];

// ─── Lightbox ─────────────────────────────────────────────────────────────────

function Lightbox({ item, onClose }: { item: typeof GALLERY_ITEMS[0]; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[200] bg-black/97 backdrop-blur-xl flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 w-12 h-12 border border-white/20 flex items-center justify-center text-white hover:border-primary hover:text-primary transition-all duration-300 z-20"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* HUD corner accents */}
      <div className="absolute top-4 left-4 w-7 h-7 border-t-2 border-l-2 border-primary/60 pointer-events-none z-20" />
      <div className="absolute top-4 right-4 w-7 h-7 border-t-2 border-r-2 border-primary/60 pointer-events-none z-20" />
      <div className="absolute bottom-4 left-4 w-7 h-7 border-b-2 border-l-2 border-primary/60 pointer-events-none z-20" />
      <div className="absolute bottom-4 right-4 w-7 h-7 border-b-2 border-r-2 border-primary/60 pointer-events-none z-20" />

      {/* Scan beam */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-primary/40 scan-beam z-20 pointer-events-none" />

      {/* Full-screen image container — click on image itself doesn't close */}
      <div
        className="relative w-full h-full"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={item.src}
          alt={item.alt}
          fill
          className="object-contain"
          sizes="100vw"
          priority
        />

        {/* Caption bar */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/50 to-transparent z-10 pointer-events-none">
          <span className="font-accent text-primary text-[10px] uppercase tracking-[0.3em] block mb-1">DeZone Fitness</span>
          <p className="font-heading text-white text-2xl uppercase tracking-widest">{item.label}</p>
        </div>
      </div>

      {/* Click outside hint */}
      <p className="absolute bottom-6 left-1/2 -translate-x-1/2 font-body text-white/20 text-[10px] uppercase tracking-widest z-20 pointer-events-none">
        Click outside image to close
      </p>
    </div>
  );
}


// ─── Gallery Tile ─────────────────────────────────────────────────────────────

function GalleryTile({
  item,
  index,
  onOpen,
}: {
  item: typeof GALLERY_ITEMS[0];
  index: number;
  onOpen: () => void;
}) {
  const tileRef = useRef<HTMLDivElement>(null);

  // Spotlight cursor follow
  const onMouseMove = (e: MouseEvent) => {
    const el = tileRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty("--sx", `${x}px`);
    el.style.setProperty("--sy", `${y}px`);
  };

  return (
    <div
      ref={tileRef}
      onMouseMove={onMouseMove}
      onClick={onOpen}
      className={`group relative overflow-hidden bg-zinc-900 cursor-pointer ${item.span}`}
      style={{ minHeight: "260px" }}
    >
      {/* Base Image */}
      <Image
        src={item.src}
        alt={item.alt}
        fill
        className={`object-cover transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110 ${
          item.type === "video" ? "brightness-50" : "brightness-60 group-hover:brightness-80"
        }`}
      />

      {/* Always-on dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

      {/* Cursor spotlight (CSS var driven) */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: "radial-gradient(200px circle at var(--sx, 50%) var(--sy, 50%), rgba(255,45,45,0.12), transparent 70%)",
        }}
      />

      {/* Red scan line reveal on hover */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_12px_rgba(255,45,45,0.6)]" />

      {/* ── VIDEO PLAY BUTTON ── */}
      {item.type === "video" && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            {/* Pulsing ring */}
            <div className="absolute -inset-3 rounded-full border border-primary/30 animate-ping opacity-40" />
            <div className="w-16 h-16 rounded-full bg-primary/20 backdrop-blur-md border-2 border-primary flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-500 shadow-[0_0_30px_rgba(255,45,45,0.4)]">
              <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
      )}

      {/* ── VIEW ICON (images) ── */}
      {item.type === "image" && (
        <div className="absolute top-4 right-4 w-9 h-9 border border-white/20 bg-black/40 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-400">
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
          </svg>
        </div>
      )}

      {/* ── LABEL (bottom) ── */}
      <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-400">
        <div className="flex items-end justify-between">
          <div>
            <span className="font-accent text-primary text-[9px] uppercase tracking-[0.3em] block mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-400 delay-75">
              {item.type === "video" ? "▶ Play Video" : "DeZone"}
            </span>
            <h4 className="font-heading text-white text-xl md:text-2xl uppercase tracking-wide leading-none">
              {item.label}
            </h4>
          </div>
          {/* Index */}
          <span className="font-heading text-white/20 text-4xl leading-none ml-4 shrink-0">
            0{index + 1}
          </span>
        </div>
      </div>

      {/* ── Active border glow ── */}
      <div className="absolute inset-0 border border-transparent group-hover:border-primary/30 transition-all duration-500 pointer-events-none" />
    </div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────

export default function GallerySection() {
  const [lightboxItem, setLightboxItem] = useState<typeof GALLERY_ITEMS[0] | null>(null);

  return (
    <>
      {/* Lightbox */}
      {lightboxItem && <Lightbox item={lightboxItem} onClose={() => setLightboxItem(null)} />}

      <section className="py-32 bg-black relative overflow-hidden border-t border-white/5">

        {/* Ambient glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/4 blur-[180px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/3 blur-[160px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">

          {/* ── Header ─────────────────────────────────────────── */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="font-accent text-primary uppercase tracking-[0.4em] text-sm mb-4 block">The Experience</span>
              <h2 className="font-heading text-5xl md:text-7xl text-white uppercase leading-[0.88] tracking-tighter">
                The Gym <span className="text-gradient">Experience</span>
              </h2>
            </div>
            <div className="max-w-sm">
              <p className="font-body text-muted text-lg border-l-2 border-primary pl-6">
                Step inside and feel the energy, power, and atmosphere. This is where legends are made.
              </p>
            </div>
          </div>

          {/* ── Mosaic Grid ────────────────────────────────────── */}
          {/*
            Desktop: 3-col grid, first image spans 2×2 (hero),
            remaining 5 fill remaining cells.
            Tablet: 2-col.
            Mobile: 1-col.
          */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[280px] gap-3">
            {GALLERY_ITEMS.map((item, i) => (
              <GalleryTile
                key={i}
                item={item}
                index={i}
                onOpen={() => item.type !== "video" && setLightboxItem(item)}
              />
            ))}
          </div>

          {/* ── Image count strip ──────────────────────────────── */}
          <div className="flex items-center gap-4 mt-4">
            <div className="flex-1 h-px bg-white/5" />
            <span className="font-accent text-white/20 text-[10px] uppercase tracking-[0.35em] shrink-0">
              {GALLERY_ITEMS.filter(i => i.type === "image").length} Photos · {GALLERY_ITEMS.filter(i => i.type === "video").length} Video · Click to view full screen
            </span>
            <div className="flex-1 h-px bg-white/5" />
          </div>

          {/* ── CTA ────────────────────────────────────────────── */}
          <div className="mt-16 flex flex-col sm:flex-row items-center gap-6 justify-between border border-white/6 p-8 relative overflow-hidden">
            {/* Left glow */}
            <div className="absolute left-0 top-0 h-full w-24 bg-primary/8 blur-[40px] pointer-events-none" />
            {/* Corner accents */}
            <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-primary/40" />
            <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-primary/40" />

            <div className="relative z-10 text-center sm:text-left">
              <p className="font-accent text-primary uppercase tracking-[0.35em] text-xs mb-1">Tustin / Irvine, CA</p>
              <h3 className="font-heading text-3xl md:text-4xl text-white uppercase tracking-tighter">
                Come See It For Yourself
              </h3>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 relative z-10 shrink-0">
              <button className="group px-8 py-4 bg-primary text-white font-body font-bold text-xs uppercase tracking-[0.25em] hover:bg-white hover:text-primary transition-all duration-300 shadow-[0_0_30px_rgba(255,45,45,0.25)] flex items-center gap-2 cursor-pointer">
                Book Free Visit
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
              <button className="px-8 py-4 border border-white/15 text-white font-body font-bold text-xs uppercase tracking-[0.25em] hover:border-white hover:bg-white/5 transition-all duration-300 cursor-pointer">
                Get Directions
              </button>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
