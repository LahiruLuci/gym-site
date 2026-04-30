"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "@/app/lib/data";

export default function JoinPage() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    // Simulate network request
    setTimeout(() => {
      setFormState("success");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-black flex flex-col lg:flex-row relative overflow-x-hidden">
      
      {/* ── Prominent Global Back Button ── */}
      <Link 
        href="/" 
        className="absolute top-6 left-6 lg:top-10 lg:left-10 z-[100] flex items-center gap-3 px-5 py-3 bg-black/50 hover:bg-white text-white hover:text-black border border-white/20 backdrop-blur-md transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.8)] group cursor-pointer"
      >
        <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        <span className="font-heading text-xl uppercase tracking-widest leading-none mt-1">Abort Protocol</span>
      </Link>

      {/* ── Left: Immersive Visuals ── */}
      <div className="relative w-full lg:w-1/2 min-h-[50vh] lg:min-h-screen flex-shrink-0 flex flex-col justify-end p-6 sm:p-10 lg:p-20 pt-24">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/assets/gym-environment.webp" 
            alt="Fitness Gym Environment" 
            fill 
            className="object-cover grayscale brightness-50"
            priority
          />
          {/* Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
        </div>
        
        {/* Bottom: Content */}
        <div className="relative z-10 max-w-xl">
          <span className="font-accent text-primary text-xs uppercase tracking-[0.4em] block mb-4 animate-pulse">
            No Excuses. Only Execution.
          </span>
          <h1 className="font-heading text-5xl sm:text-6xl md:text-8xl text-white uppercase leading-[0.85] tracking-tighter mb-4 sm:mb-6">
            Step Into <br /> The <span className="text-transparent" style={{ WebkitTextStroke: "2px #ff2d2d" }}>Fire</span>
          </h1>
          <p className="font-body text-white/70 text-sm sm:text-lg border-l-2 border-primary/50 pl-4 sm:pl-6">
            You are one decision away from a complete physical and mental overhaul. Secure your spot, and let’s get to work.
          </p>
        </div>
      </div>

      {/* ── Right: Tactical Form ── */}
      <div className="relative w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 lg:p-20 bg-black min-h-[65vh] lg:min-h-screen">

        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />

        <div className="w-full max-w-md relative z-10">
          
          {formState === "success" ? (
            <div className="flex flex-col items-center justify-center text-center py-20 animate-fade-in">
              <div className="w-24 h-24 rounded-full border-2 border-primary flex items-center justify-center mb-8 relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping" />
                <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="font-heading text-5xl text-white uppercase tracking-tighter mb-4">Application <br/>Received</h2>
              <p className="font-body text-muted text-base mb-8">
                Your coordinates have been logged. A senior coach will contact you within 24 hours to initiate protocol.
              </p>
              <Link href="/" className="px-8 py-4 border border-white/20 text-white font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all">
                Return to Base
              </Link>
            </div>
          ) : (
            <>
              <div className="mb-12">
                <h2 className="font-heading text-4xl sm:text-5xl text-white uppercase tracking-tighter mb-3">
                  Initiate <span className="text-primary">Protocol</span>
                </h2>
                <p className="font-body text-muted text-sm uppercase tracking-widest">
                  Complete the form below to secure your free intro session.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Input Group */}
                <div className="relative group">
                  <input 
                    type="text" 
                    id="name"
                    required
                    className="w-full bg-white/5 border border-white/10 px-6 py-4 text-white font-body text-base outline-none focus:border-primary/50 focus:bg-white/10 transition-all peer"
                    placeholder=" "
                  />
                  <label htmlFor="name" className="absolute left-6 top-4 text-white/40 font-body text-sm uppercase tracking-widest transition-all peer-focus:-top-2.5 peer-focus:text-[10px] peer-focus:text-primary peer-focus:bg-black peer-focus:px-2 peer-valid:-top-2.5 peer-valid:text-[10px] peer-valid:text-white/50 peer-valid:bg-black peer-valid:px-2">
                    Full Name
                  </label>
                </div>

                <div className="relative group">
                  <input 
                    type="email" 
                    id="email"
                    required
                    className="w-full bg-white/5 border border-white/10 px-6 py-4 text-white font-body text-base outline-none focus:border-primary/50 focus:bg-white/10 transition-all peer"
                    placeholder=" "
                  />
                  <label htmlFor="email" className="absolute left-6 top-4 text-white/40 font-body text-sm uppercase tracking-widest transition-all peer-focus:-top-2.5 peer-focus:text-[10px] peer-focus:text-primary peer-focus:bg-black peer-focus:px-2 peer-valid:-top-2.5 peer-valid:text-[10px] peer-valid:text-white/50 peer-valid:bg-black peer-valid:px-2">
                    Email Address
                  </label>
                </div>

                <div className="relative group">
                  <input 
                    type="tel" 
                    id="phone"
                    required
                    className="w-full bg-white/5 border border-white/10 px-6 py-4 text-white font-body text-base outline-none focus:border-primary/50 focus:bg-white/10 transition-all peer"
                    placeholder=" "
                  />
                  <label htmlFor="phone" className="absolute left-6 top-4 text-white/40 font-body text-sm uppercase tracking-widest transition-all peer-focus:-top-2.5 peer-focus:text-[10px] peer-focus:text-primary peer-focus:bg-black peer-focus:px-2 peer-valid:-top-2.5 peer-valid:text-[10px] peer-valid:text-white/50 peer-valid:bg-black peer-valid:px-2">
                    Phone Number
                  </label>
                </div>

                <div className="relative group">
                  <select 
                    id="goal"
                    required
                    defaultValue=""
                    className="w-full bg-[#111] border border-white/10 px-6 py-4 text-white/80 font-body text-sm uppercase tracking-wider outline-none focus:border-primary/50 transition-all appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Select Primary Target</option>
                    <option value="fat-loss">Fat Loss & Conditioning</option>
                    <option value="muscle">Muscle Building & Strength</option>
                    <option value="athlete">Athletic Performance</option>
                    <option value="general">General Fitness</option>
                  </select>
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-white/50">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </div>

                <button 
                  type="submit" 
                  disabled={formState === "submitting"}
                  className="relative w-full py-5 bg-primary overflow-hidden group cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed mt-8"
                >
                  <div className="absolute inset-0 bg-white/20 -translate-x-[150%] skew-x-12 group-hover:animate-[shimmer_1.5s_infinite]" />
                  <span className="relative z-10 flex items-center justify-center gap-3 text-white font-bold text-xs uppercase tracking-[0.3em]">
                    {formState === "submitting" ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                        Transmitting...
                      </>
                    ) : (
                      <>
                        Submit Application
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                      </>
                    )}
                  </span>
                </button>
                
                <p className="text-center font-body text-[10px] text-white/30 uppercase tracking-widest mt-4">
                  By submitting, you agree to push past your limits.
                </p>

              </form>
            </>
          )}

        </div>
      </div>
    </div>
  );
}
