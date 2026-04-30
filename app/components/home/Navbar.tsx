"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavbarProps {
  isScrolled: boolean;
  isMenuOpen: boolean;
  setIsMenuOpen: (val: boolean) => void;
}

export default function Navbar({ isScrolled, isMenuOpen, setIsMenuOpen }: NavbarProps) {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Programs", href: "/programs" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-[110] px-6 py-4 md:px-12 flex items-center justify-between transition-all duration-500 ${
          isScrolled
            ? "bg-black/80 backdrop-blur-md border-b border-white/10"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="flex items-center gap-4">
          <div className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center p-1">
            <Image
              src="/assets/dezone-logo.png"
              alt="DeZone Logo"
              width={80}
              height={80}
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>

        <div className="flex items-center gap-4 md:gap-10">
          <div className="hidden lg:flex items-center gap-8 font-body text-[13px] font-bold uppercase tracking-widest text-white">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className={`transition-colors flex items-center gap-1 ${
                  pathname === link.href ? 'text-primary' : 'hover:text-primary'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <button 
            onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
            className="hidden sm:block px-5 py-2.5 bg-primary text-white font-body text-xs md:text-[13px] font-bold uppercase tracking-widest hover:bg-white hover:text-primary transition-all duration-300 cursor-pointer shadow-[0_0_15px_rgba(255,45,45,0.3)] hover:shadow-[0_0_25px_rgba(255,45,45,0.6)]"
          >
            Free Intro
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-primary transition-colors z-[110]"
          >
            {isMenuOpen ? (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl transition-all duration-500 lg:hidden ${
          isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
        }`}
      >
        <div className="flex flex-col h-full p-10 pt-32">
          <div className="flex flex-col gap-8 font-heading text-4xl uppercase tracking-tighter text-white">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMenuOpen(false)} 
                className={`transition-colors ${
                  pathname === link.href ? 'text-primary' : 'hover:text-primary'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <button 
              onClick={() => {
                setIsMenuOpen(false);
                setTimeout(() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' }), 300);
              }} 
              className="text-left font-heading hover:text-white transition-colors text-primary mt-4 cursor-pointer uppercase tracking-tighter"
            >
              Free Intro
            </button>
          </div>
          <div className="mt-auto pt-10 border-t border-white/10">
            <p className="font-body text-muted text-sm uppercase tracking-widest mb-4">Location</p>
            <p className="font-body text-white text-lg">Tustin/Irvine Marketplace, CA</p>
          </div>
        </div>
      </div>
    </>
  );
}
