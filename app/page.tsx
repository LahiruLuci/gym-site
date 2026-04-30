"use client";

import { useState, useEffect, useRef } from "react";

// ─── Section Components ────────────────────────────────────────────
import Navbar               from "@/app/components/home/Navbar";
import HeroSection          from "@/app/components/home/HeroSection";
import StatsTicker          from "@/app/components/home/StatsTicker";
import AudienceSection      from "@/app/components/home/AudienceSection";
import ProgramsSection      from "@/app/components/home/ProgramsSection";
import HowItWorksSection    from "@/app/components/home/HowItWorksSection";
import TrainersSection      from "@/app/components/home/TrainersSection";
import TestimonialsSection  from "@/app/components/home/TestimonialsSection";
import PricingSection       from "@/app/components/home/PricingSection";
import GallerySection       from "@/app/components/home/GallerySection";
import CtaBanner            from "@/app/components/home/CtaBanner";
import Footer               from "@/app/components/home/Footer";

// ─── Data (lengths needed for timers) ─────────────────────────────
import { IMAGES, AUDIENCES, STEPS } from "@/app/lib/data";

export default function Home() {
  // ── Hero slider ──────────────────────────────────────────────────
  const [currentImage, setCurrentImage]   = useState(0);

  // ── Navigation ───────────────────────────────────────────────────
  const [isScrolled,  setIsScrolled]      = useState(false);
  const [isMenuOpen,  setIsMenuOpen]      = useState(false);

  // ── Audience section ─────────────────────────────────────────────
  const [activeAudience,  setActiveAudience]  = useState(0);
  const [isAutoPlaying,   setIsAutoPlaying]   = useState(true);

  // ── How It Works section ─────────────────────────────────────────
  const [activeStep,          setActiveStep]          = useState(0);
  const [isStepAutoPlaying,   setIsStepAutoPlaying]   = useState(true);

  // ─────────────────────────────────────────────────────────────────
  // Effects
  // ─────────────────────────────────────────────────────────────────

  // Scroll-aware navbar
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Hero image auto-rotate
  useEffect(() => {
    const timer = setInterval(() => setCurrentImage((p) => (p + 1) % IMAGES.length), 5000);
    return () => clearInterval(timer);
  }, []);

  // Audience auto-slider
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => setActiveAudience((p) => (p + 1) % AUDIENCES.length), 4000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  // How It Works auto-player
  useEffect(() => {
    if (!isStepAutoPlaying) return;
    const timer = setInterval(() => setActiveStep((p) => (p + 1) % STEPS.length), 4000);
    return () => clearInterval(timer);
  }, [isStepAutoPlaying]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
  }, [isMenuOpen]);

  // Scroll-reveal via Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("is-visible")),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // ─────────────────────────────────────────────────────────────────
  // Render
  // ─────────────────────────────────────────────────────────────────
  return (
    <div className="flex flex-col min-h-screen bg-black selection:bg-primary selection:text-white overflow-hidden">

      <Navbar
        isScrolled={isScrolled}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      <HeroSection
        currentImage={currentImage}
        setCurrentImage={setCurrentImage}
      />

      <StatsTicker />

      <AudienceSection
        activeAudience={activeAudience}
        setActiveAudience={setActiveAudience}
        isAutoPlaying={isAutoPlaying}
        setIsAutoPlaying={setIsAutoPlaying}
      />

      <ProgramsSection />

      <HowItWorksSection
        activeStep={activeStep}
        setActiveStep={setActiveStep}
        isStepAutoPlaying={isStepAutoPlaying}
        setIsStepAutoPlaying={setIsStepAutoPlaying}
      />

      <TrainersSection />

      <TestimonialsSection />

      <PricingSection />

      <GallerySection />

      <CtaBanner />

      <Footer />

    </div>
  );
}
