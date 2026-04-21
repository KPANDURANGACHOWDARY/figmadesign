"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Button from "./ui/Button";

import { NAV_LINKS } from "@/config/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Lock scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    // Cleanup function to ensure scroll is restored if component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav className="absolute top-0 left-0 w-full py-3 lg:py-5 flex items-center justify-between z-[100] bg-transparent">
        <div className="container-custom flex items-center justify-between">
          <div className="flex items-center gap-4 lg:gap-6">
          <Link href="/" className="relative w-28 xl:w-32 aspect-[3/1]">
            <Image
              src="/logo.png"
              alt="Opti-Realty Logo"
              fill
              className="object-contain"
              priority
            />
          </Link>
          
          <div className="hidden sm:block w-px h-8 bg-white/20 mx-2" />
          
          <div className="hidden sm:flex flex-col justify-center px-4 py-1.5 border border-white/30 rounded-md bg-white/10 backdrop-blur-sm">
            <span className="text-[10px] text-white/60 font-bold uppercase tracking-wider leading-tight">RERA Registered</span>
            <span className="text-xs text-white font-bold leading-tight">P02400009684</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden xl:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link 
                key={link.label} 
                href={link.href} 
                className="text-sm font-semibold text-white/90 hover:text-white transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Button variant="primary" size="sm" className="rounded-full px-8 font-bold shadow-lg shadow-primary/20">
            Sign Up
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="xl:hidden flex items-center justify-center text-white p-2 z-[150] transition-transform active:scale-90"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
    </nav>

      <div 
        id="mobile-menu"
        className={`fixed inset-0 bg-secondary z-[200] transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        } xl:hidden flex flex-col p-8`}
      >
        {/* Mobile Menu Header with Close Button */}
        <div className="flex items-center justify-between mb-16">
          <Link href="/" onClick={closeMenu} className="relative w-32 h-10">
            <Image
              src="/logo.png"
              alt="Opti-Realty Logo"
              fill
              className="object-contain object-left"
            />
          </Link>
          <button 
            onClick={closeMenu}
            className="text-white p-2 hover:bg-white/10 rounded-full transition-colors"
            aria-label="Close Menu"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex flex-col items-start gap-8 mt-4">
          {NAV_LINKS.map((link, i) => (
            <Link 
              key={link.label} 
              href={link.href} 
              onClick={closeMenu}
              className="text-4xl font-bold text-white hover:text-primary transition-all flex items-center gap-4 group"
            >
              <span className="text-primary text-2xl opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0">→</span>
              {link.label}
            </Link>
          ))}
        </div>
        <div className="mt-auto pt-10 border-t border-white/10">
          <Button 
            variant="primary" 
            size="lg" 
            onClick={closeMenu}
            className="w-full rounded-full font-bold py-6 text-xl"
          >
            Sign Up Now
          </Button>
          <p className="text-white/40 text-center mt-8 text-sm font-medium">
            © 2026 Opti Realty. Professional Property Solutions.
          </p>
        </div>
      </div>

      {/* Backdrop for mobile menu */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-[190] xl:hidden"
          onClick={closeMenu}
        />
      )}
    </>
  );
}

