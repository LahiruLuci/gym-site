"use client";

import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "@/app/lib/data";

interface HeroSectionProps {
  currentImage: number;
  setCurrentImage: (i: number) => void;
}

export default function HeroSection({ currentImage, setCurrentImage }: HeroSectionProps) {
  return (
    <section className="relative h-screen w-full flex items-center justify-start px-6 md:px-24">
      <div className="absolute inset-0 z-0">
        {IMAGES.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 transition-all duration-[2000ms] ease-in-out ${
              index === currentImage ? "opacity-60 scale-100" : "opacity-0 scale-110"
            }`}
          >
            <Image src={src} alt={`Slide ${index + 1}`} fill className="object-cover" priority={index === 0} />
          </div>
        ))}
        <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/20 to-transparent z-10" />
      </div>

      <div className="relative z-20 max-w-2xl mt-10">
        <div className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm text-muted text-[11px] md:text-xs font-bold uppercase tracking-[0.2em] mb-8 border-l-4 border-primary">
          The Best Gym in Tustin, CA
        </div>
        <h1 className="font-heading text-[50px] md:text-[80px] lg:text-[100px] leading-[0.95] text-white uppercase mb-8 tracking-tighter">
          Train Hard.<br />Have Fun.<br />Make Friends.
        </h1>
        <p className="font-body text-white text-base md:text-lg mb-12 max-w-xl leading-relaxed opacity-90">
          Welcome to Fitness Gym, located within 5 minutes of the Tustin/Irvine Marketplace and 5 minutes from the Tustin District!
        </p>
        <Link 
          href="/join"
          className="inline-block px-10 py-5 bg-primary text-white font-body text-sm md:text-base font-bold uppercase tracking-widest hover:bg-white hover:text-primary hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,45,45,0.4)] hover:shadow-[0_0_40px_rgba(255,45,45,0.6)] cursor-pointer"
        >
          Book Free Intro
        </Link>
      </div>

      {/* Slide Dots */}
      <div className="absolute bottom-12 left-6 md:left-24 flex gap-3 z-30">
        {IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`h-1 transition-all duration-500 ${
              index === currentImage ? "w-12 bg-primary" : "w-6 bg-white/20 hover:bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
