"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Image from "next/image";

export default function PageLoader() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isNavigating, setIsNavigating] = useState(true);
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    setIsNavigating(true);
    setShowOverlay(true);

    const timer = setTimeout(() => {
      setIsNavigating(false);
      setTimeout(() => setShowOverlay(false), 1000); // Wait for portal exit animation
    }, 800);

    return () => clearTimeout(timer);
  }, [pathname, searchParams]);

  if (!showOverlay) return null;

  return (
    <div 
      className="fixed inset-0 z-[9999] pointer-events-none flex items-center justify-center overflow-hidden"
    >
      {/* 
        The Portal Background 
        Uses clip-path to shrink into the center when loading is done.
      */}
      <div 
        className="absolute inset-0 bg-black transition-all duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)] flex items-center justify-center"
        style={{
          clipPath: isNavigating ? "circle(150% at 50% 50%)" : "circle(0% at 50% 50%)",
        }}
      >
        {/* Dynamic Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />

        {/* HUD Ring System */}
        <div className={`relative flex items-center justify-center transition-all duration-700 ${
          isNavigating ? "scale-100 opacity-100" : "scale-50 opacity-0 blur-xl"
        }`}>
          
          {/* Outer Rotating Dashed Ring */}
          <svg className="absolute w-[300px] h-[300px] animate-[spin_8s_linear_infinite] opacity-30" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="48" fill="none" stroke="#ff2d2d" strokeWidth="0.5" strokeDasharray="4 4" />
          </svg>

          {/* Inner Rotating Solid Ring */}
          <svg className="absolute w-[240px] h-[240px] animate-[spin_4s_linear_infinite_reverse] opacity-50" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="48" fill="none" stroke="#ff2d2d" strokeWidth="1" strokeDasharray="60 10" strokeLinecap="round" />
          </svg>

          {/* Intense Core Glow */}
          <div className="absolute w-[150px] h-[150px] bg-primary/30 blur-[50px] rounded-full animate-pulse" />

          {/* Fitness Logo */}
          <div className="relative w-[180px] h-[60px] md:w-[220px] md:h-[70px] z-10">
            <Image 
              src="/assets/dezone-logo.png" 
              alt="Fitness Loading" 
              fill 
              className="object-contain drop-shadow-[0_0_20px_rgba(255,45,45,0.8)]" 
              priority
            />
          </div>

          {/* Loading HUD Elements */}
          <div className="absolute top-[120%] flex flex-col items-center w-[200px]">
            {/* Progress Bar Container */}
            <div className="w-full h-[1px] bg-white/20 relative overflow-hidden mb-3">
              <div className="absolute top-0 left-0 h-full bg-primary w-full origin-left animate-[scaleX_0.8s_ease-out_forwards]" />
            </div>
            
            <div className="flex justify-between w-full items-center text-[9px] uppercase tracking-[0.3em] font-accent text-white/50">
              <span className="animate-pulse">System Active</span>
              <span className="text-primary animate-pulse">100%</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
