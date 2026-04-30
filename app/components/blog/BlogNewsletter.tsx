"use client";

import Image from "next/image";

export default function BlogNewsletter() {
  return (
    <section className="py-32 bg-zinc-950 relative overflow-hidden border-y border-white/5">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[200px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          <div className="w-full lg:w-3/5">
            <p className="font-accent text-primary text-[10px] uppercase tracking-[0.4em] mb-4">Transmission</p>
            <h2 className="font-heading text-5xl md:text-6xl text-white uppercase leading-none tracking-tighter mb-6">
              Get Fitness Tips <br className="hidden md:block" /> Directly To Your <span className="text-primary">Inbox.</span>
            </h2>
            <p className="font-body text-white/50 text-base md:text-lg uppercase tracking-widest leading-relaxed">
              Join our elite newsletter for training protocols, nutritional science, and mental toughness guides.
            </p>
          </div>

          <div className="w-full lg:w-2/5">
            <form className="relative group" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                required
                placeholder="ENTER EMAIL PROTOCOL..." 
                className="w-full bg-black border border-white/10 px-8 py-6 text-white font-accent text-xs tracking-[0.2em] focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all placeholder:text-white/20"
              />
              <button className="mt-4 md:mt-0 md:absolute md:right-2 md:top-1/2 md:-translate-y-1/2 w-full md:w-auto bg-white text-black font-accent font-bold text-[10px] uppercase tracking-[0.2em] px-8 py-4 hover:bg-primary hover:text-white transition-all shadow-xl">
                Subscribe
              </button>
            </form>
            <div className="mt-6 flex items-center gap-4">
               <div className="flex -space-x-2">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-zinc-950 bg-zinc-800" />
                  ))}
               </div>
               <p className="font-accent text-white/30 text-[9px] uppercase tracking-widest">
                 Join 2,500+ athletes receiving weekly intel.
               </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
