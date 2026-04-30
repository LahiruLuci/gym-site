"use client";

import Image from "next/image";

const SOCIAL_LINKS = ["instagram", "facebook", "youtube"] as const;
const SOCIAL_PATHS: Record<typeof SOCIAL_LINKS[number], string> = {
  instagram: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
  facebook: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  youtube: "M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z",
};

const CONTACT_ITEMS = [
  { icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z", text: "+94 77 123 4567" },
  { icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", text: "hello@dezone.lk" },
  { icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "123 Fitness Ave, Colombo 03" },
];

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-primary/20 relative overflow-hidden">
      {/* Decorative top red glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent shadow-[0_0_30px_rgba(255,45,45,0.8)]" />

      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 xl:gap-16 mb-16">

          {/* 1. Brand Info & Social Links */}
          <div className="flex flex-col text-center md:text-left">
            <div className="font-heading text-4xl text-white uppercase tracking-widest mb-4 inline-block">
              De<span className="text-primary">Zone</span>
            </div>
            <p className="font-body text-white/60 text-sm leading-relaxed mb-8 max-w-xs mx-auto md:mx-0">
              Train hard. Stay strong. Transform your life. Elite coaching and real results for those who refuse to settle.
            </p>
            
            <div className="flex items-center justify-center md:justify-start gap-4">
              {SOCIAL_LINKS.map((s) => (
                <a 
                  key={s} 
                  href="#" 
                  className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/50 hover:border-primary hover:text-white hover:bg-primary/20 hover:shadow-[0_0_15px_rgba(255,45,45,0.4)] transition-all duration-300"
                  aria-label={s}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d={SOCIAL_PATHS[s]} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* 2. Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="font-heading text-white uppercase text-lg tracking-[0.15em] mb-6 flex items-center justify-center md:justify-start gap-2">
              <span className="w-2 h-2 bg-primary" />
              Quick Links
            </h4>
            <ul className="space-y-4">
              {["Home", "Programs", "Our Trainers", "Pricing", "Contact"].map((l) => (
                <li key={l}>
                  <a href="#" className="font-body text-white/60 text-sm hover:text-primary transition-colors duration-300 flex items-center justify-center md:justify-start gap-2 group">
                    <span className="w-0 h-px bg-primary group-hover:w-4 transition-all duration-300 inline-block" />
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Contact Info */}
          <div className="text-center md:text-left">
            <h4 className="font-heading text-white uppercase text-lg tracking-[0.15em] mb-6 flex items-center justify-center md:justify-start gap-2">
              <span className="w-2 h-2 bg-primary" />
              Contact
            </h4>
            <ul className="space-y-5">
              {CONTACT_ITEMS.map((c, ci) => (
                <li key={ci} className="flex items-start justify-center md:justify-start gap-3">
                  <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={c.icon} />
                  </svg>
                  <span className="font-body text-white/60 text-sm">{c.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Map & Newsletter */}
          <div className="text-center md:text-left flex flex-col h-full">
            <h4 className="font-heading text-white uppercase text-lg tracking-[0.15em] mb-6 flex items-center justify-center md:justify-start gap-2">
              <span className="w-2 h-2 bg-primary" />
              Location
            </h4>
            
            {/* Map Placeholder */}
            <div className="w-full h-32 bg-zinc-900 border border-white/10 relative overflow-hidden group mb-6">
              {/* Map texture/image mockup */}
              <div className="absolute inset-0 opacity-40 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=Colombo,Sri+Lanka&zoom=13&size=400x200&maptype=roadmap&style=element:geometry%7Ccolor:0x242f3e&style=element:labels.text.stroke%7Ccolor:0x242f3e&style=element:labels.text.fill%7Ccolor:0x746855&key=YOUR_API_KEY')] bg-cover bg-center grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-60" />
              
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center animate-pulse">
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="mt-auto bg-white/5 border border-white/10 p-4">
              <p className="text-primary text-[10px] uppercase tracking-[0.2em] mb-1 font-bold">Opening Hours</p>
              <div className="flex justify-between items-center text-sm font-body">
                <span className="text-white">Mon – Sat</span>
                <span className="text-white/60">6AM – 10PM</span>
              </div>
              <div className="flex justify-between items-center text-sm font-body mt-1">
                <span className="text-white">Sunday</span>
                <span className="text-primary font-bold">Closed</span>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-white/40 text-xs">
            © {new Date().getFullYear()} DeZone Fitness. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service"].map((l) => (
              <a key={l} href="#" className="font-body text-white/40 text-xs hover:text-primary transition-colors duration-300 uppercase tracking-wider">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
