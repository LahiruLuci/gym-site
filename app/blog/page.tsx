"use client";

import { useState, useEffect } from "react";
import Navbar from "@/app/components/home/Navbar";
import Footer from "@/app/components/home/Footer";
import CtaBanner from "@/app/components/home/CtaBanner";
import BlogHero from "@/app/components/blog/BlogHero";
import BlogFilterSection from "@/app/components/blog/BlogFilterSection";
import BlogGrid from "@/app/components/blog/BlogGrid";
import BlogNewsletter from "@/app/components/blog/BlogNewsletter";

export default function BlogPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Filtering states
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-primary selection:text-white">
      <Navbar
        isScrolled={isScrolled}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      <main>
        {/* ── 1. HERO SECTION ── */}
        <BlogHero />

        {/* ── 2. SEARCH & FILTER SECTION ── */}
        <BlogFilterSection 
           searchQuery={searchQuery} 
           setSearchQuery={setSearchQuery}
           activeCategory={activeCategory}
           setActiveCategory={setActiveCategory}
        />
        
        {/* ── 3. MAIN BLOG GRID HEADER ── */}
        <section className="pt-20 bg-black">
           <div className="container mx-auto px-6">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                 <div>
                    <p className="font-accent text-primary text-[10px] uppercase tracking-[0.4em] mb-4">Latest Archives</p>
                    <h2 className="font-heading text-4xl md:text-6xl text-white uppercase tracking-tighter">
                       Fitness Insights & <br /> Training Guides
                    </h2>
                 </div>
                 <p className="font-body text-white/40 text-sm md:text-base max-w-sm uppercase tracking-widest leading-relaxed">
                    Expert advice, workouts, and strategies to help you achieve real results.
                 </p>
              </div>
              <div className="w-full h-px bg-gradient-to-r from-primary/30 via-white/10 to-transparent mt-12" />
           </div>
        </section>

        {/* ── 4. MAIN BLOG GRID ── */}
        <BlogGrid 
           searchQuery={searchQuery}
           activeCategory={activeCategory}
        />

        {/* ── 5. NEWSLETTER / LEAD CAPTURE ── */}
        <BlogNewsletter />
        
      </main>

      {/* ── 6. CTA & FOOTER ── */}
      <CtaBanner />
      <Footer />
    </div>
  );
}
