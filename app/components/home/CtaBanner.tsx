"use client";

import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "@/app/lib/data";

export default function CtaBanner() {
  return (
    <section id="cta" className="relative overflow-hidden py-32 md:py-48 border-y border-white/5 bg-black">
      {/* Background Image with intense overlays */}
      <div className="absolute inset-0 z-0">
        <Image 
          src={IMAGES[2]} 
          alt="Ready to transform" 
          fill 
          className="object-cover grayscale brightness-50 scale-105" 
        />
        {/* Dark radial gradient to focus center */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black/40 via-black/80 to-black" />
        
        {/* Intense red glow behind text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] max-w-[800px] h-[400px] bg-primary/20 blur-[150px] rounded-full pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        {/* Urgency / Trust Badges */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-8">
          <div className="px-3 py-1.5 bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-[0.2em] flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
            Limited Slots Available
          </div>
          <div className="px-3 py-1.5 bg-white/5 border border-white/10 text-white/70 text-[10px] font-bold uppercase tracking-[0.2em] flex items-center gap-2">
            <span className="text-white">✓</span>
            Trusted by 1,200+ Members
          </div>
        </div>

        <h2 className="font-heading text-5xl md:text-8xl text-white uppercase leading-[0.85] tracking-tighter mb-6 max-w-5xl mx-auto">
          Are You Ready To <br />
          <span className="text-transparent" style={{ WebkitTextStroke: "2px #ff2d2d" }}>Transform?</span>
        </h2>
        
        <p className="font-body text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-12 border-l-2 border-primary/50 pl-4 py-1">
          Join today and take the first step toward a stronger, better you. No more waiting. No more excuses.
        </p>

        <div className="flex flex-col items-center justify-center gap-8">
          <Link href="/join" className="relative group overflow-hidden px-14 py-6 bg-primary text-white font-body font-bold text-sm md:text-base uppercase tracking-[0.25em] transition-all duration-300 shadow-[0_0_40px_rgba(255,45,45,0.4)] hover:shadow-[0_0_80px_rgba(255,45,45,0.8)] hover:scale-105 hover:-translate-y-1 cursor-pointer border border-primary/50 block">
            {/* Button sweeping shine effect */}
            <div className="absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
            <span className="relative z-10 flex items-center justify-center gap-3">
              Join Now
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </Link>

          <div className="flex flex-col items-center gap-2">
            <p className="font-accent text-white/50 text-[11px] uppercase tracking-[0.3em]">
              No experience needed. Start at your own pace.
            </p>
            <p className="font-body text-white/30 text-[10px] uppercase tracking-widest mt-1">
              No long-term commitment · Cancel anytime
            </p>
          </div>
        </div>
      </div>
      
      {/* Decorative scan lines */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
