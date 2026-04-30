"use client";

import { BLOG_CATEGORIES } from "@/app/lib/data";

interface BlogFilterSectionProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

export default function BlogFilterSection({
  searchQuery,
  setSearchQuery,
  activeCategory,
  setActiveCategory,
}: BlogFilterSectionProps) {
  return (
    <section className="bg-black py-12 relative border-b border-white/5 sticky top-20 z-50 backdrop-blur-xl">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* ── Search Bar (Tactical HUD Style) ── */}
          <div className="relative w-full lg:w-[400px] group">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <svg className="w-5 h-5 text-white/30 group-focus-within:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="SEARCH INTEL..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-900/50 border border-white/10 px-12 py-4 text-white font-accent text-xs tracking-widest focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all placeholder:text-white/20"
            />
            {/* HUD Corner Accents */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20 group-focus-within:border-primary" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20 group-focus-within:border-primary" />
          </div>

          {/* ── Category Filters (Horizontal Scroll on Mobile) ── */}
          <div className="w-full lg:w-auto overflow-x-auto pb-4 lg:pb-0 no-scrollbar">
            <div className="flex items-center gap-4 min-w-max">
              {BLOG_CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2.5 font-accent text-[10px] font-bold uppercase tracking-[0.25em] border transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-primary border-primary text-white shadow-[0_0_20px_rgba(255,45,45,0.4)]"
                      : "bg-transparent border-white/10 text-white/40 hover:border-white/30 hover:text-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
