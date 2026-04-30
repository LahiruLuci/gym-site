"use client";

import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import { STEPS, IMAGES } from "@/app/lib/data";

interface HowItWorksSectionProps {
  activeStep: number;
  setActiveStep: Dispatch<SetStateAction<number>>;
  isStepAutoPlaying: boolean;
  setIsStepAutoPlaying: Dispatch<SetStateAction<boolean>>;
}

export default function HowItWorksSection({
  activeStep,
  setActiveStep,
  isStepAutoPlaying,
  setIsStepAutoPlaying,
}: HowItWorksSectionProps) {
  return (
    <section className="bg-black relative border-t border-white/5">
      <div className="flex flex-col lg:flex-row min-h-[800px]">
        {/* Left Side: Realistic Visuals (Dynamic) */}
        <div className="lg:w-1/2 relative min-h-[400px] lg:min-h-full overflow-hidden">
          {STEPS.map((step, index) => {
            const images = ["/assets/joining-the-gym.webp", "/assets/get-your-plan.webp", "/assets/start-training.webp"];
            return (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                  activeStep === index ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <Image
                  src={images[index]}
                  alt={step.title}
                  fill
                  className={`object-cover transition-transform duration-[4000ms] ease-linear ${
                    activeStep === index ? "scale-110" : "scale-100"
                  }`}
                />
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent lg:bg-linear-to-r lg:from-black/20 lg:to-black" />

                {/* Massive Floating Number */}
                <span className="absolute bottom-10 left-10 font-heading text-[150px] lg:text-[250px] leading-none text-white/20 drop-shadow-[0_0_50px_rgba(255,45,45,0.3)]">
                  {step.num}
                </span>
              </div>
            );
          })}
        </div>

        {/* Right Side: Interactive Steps */}
        <div className="lg:w-1/2 bg-black p-10 lg:p-24 flex flex-col justify-center relative">
          <div className="absolute top-0 left-0 w-full h-full bg-primary/5 blur-[150px] pointer-events-none" />

          <div className="relative z-10 mb-16 reveal">
            <span className="font-accent text-primary uppercase tracking-[0.4em] text-sm mb-4 block">The Roadmap</span>
            <h2 className="font-heading text-5xl lg:text-7xl text-white uppercase leading-[0.9] tracking-tighter">
              How It <span className="text-gradient">Works</span>
            </h2>
          </div>

          <div
            className="relative z-10"
            onMouseEnter={() => setIsStepAutoPlaying(false)}
            onMouseLeave={() => setIsStepAutoPlaying(true)}
          >
            {/* Fixed Titles List (No height changes) */}
            <div className="flex flex-col gap-2 mb-10">
              {STEPS.map((step, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setActiveStep(index);
                    setIsStepAutoPlaying(false);
                    setTimeout(() => setIsStepAutoPlaying(true), 5000);
                  }}
                  className={`group relative pl-10 py-3 cursor-pointer transition-all duration-500 flex items-center ${
                    activeStep === index ? "opacity-100" : "opacity-40 hover:opacity-70"
                  }`}
                >
                  {/* Vertical Progress Line */}
                  <div className="absolute left-0 top-0 w-1.5 h-full bg-white/10 rounded-full overflow-hidden">
                    <div
                      className={`w-full bg-primary rounded-full transition-all duration-[4000ms] ease-linear ${
                        activeStep === index ? "h-full" : "h-0"
                      }`}
                    />
                  </div>

                  {/* Step Title */}
                  <h3 className={`font-heading uppercase m-0 transition-all duration-500 ${
                    activeStep === index ? "text-4xl lg:text-5xl text-white translate-x-2" : "text-3xl text-white"
                  }`}>
                    {step.title}
                  </h3>
                </div>
              ))}
            </div>

            {/* Dedicated Content Box (Fixed Height = No Jumping) */}
            <div className="relative h-[150px] pl-10 border-l border-transparent">
              <div className="absolute left-[3px] top-0 bottom-0 w-px bg-white/10" /> {/* Subtle connector line */}
              {STEPS.map((step, index) => (
                <div
                  key={index}
                  className={`absolute top-0 left-10 w-[calc(100%-2.5rem)] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                    activeStep === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
                  }`}
                >
                  <span className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 text-primary font-bold text-[10px] uppercase tracking-widest mb-3">
                    {step.micro}
                  </span>
                  <p className="font-body text-muted text-base lg:text-lg leading-relaxed max-w-sm">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 pt-12 border-t border-white/10 relative z-10">
            <button className="px-10 py-5 bg-primary text-white font-body text-sm font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-primary hover:scale-105 transition-all duration-300 w-fit shadow-[0_0_30px_rgba(255,45,45,0.2)] hover:shadow-[0_0_50px_rgba(255,45,45,0.4)] cursor-pointer">
              Join Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
