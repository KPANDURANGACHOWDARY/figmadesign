import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { FOOTER_LINKS } from "@/config/navigation";

const FOOTER_SECTIONS = [
  { title: "Explore", links: FOOTER_LINKS.explore },
  { title: "Company", links: FOOTER_LINKS.company }
];

const { legal: LEGAL_LINKS } = FOOTER_LINKS;

const SOCIAL_LINKS = [
  { label: "Facebook", href: "#", icon: (
    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  )},
  { label: "Instagram", href: "#", icon: (
    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  )},
  { label: "LinkedIn", href: "#", icon: (
    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )},
];

export default function Footer() {
  return (
    <footer className="w-full bg-slate-50 text-secondary border-t border-zinc-200">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-12 xl:py-16 flex flex-col gap-12">

          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
              <div className="relative w-40 h-14">
                <Image
                  src="/footer.png"
                  alt="Opti-Realty Logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
              <div className="hidden md:block w-px h-12 bg-zinc-300" />
              <div className="flex flex-col px-5 py-2 border border-zinc-300 rounded-lg bg-white/50 shadow-sm">
                <span className="text-[10px] font-bold text-text-muted uppercase tracking-widest leading-tight">RERA Registered</span>
                <span className="text-xl font-bold">P02400009684</span>
              </div>
            </div>

            <div className="flex flex-col gap-4 items-center md:items-end">
              <h3 className="font-bold text-lg uppercase tracking-wider text-text-muted">Follow Us</h3>
              <div className="flex gap-4">
                {SOCIAL_LINKS.map((social) => (
                  <Link 
                    key={social.label} 
                    href={social.href} 
                    aria-label={social.label}
                    className="w-12 h-12 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-text-muted hover:text-primary hover:border-primary hover:shadow-lg transition-all"
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 xl:gap-24">
            {FOOTER_SECTIONS.map((section) => (
              <div key={section.title} className="flex flex-col gap-6">
                <h3 className="font-extrabold text-xl uppercase tracking-wider">{section.title}</h3>
                <div className="grid grid-cols-2 sm:grid-cols-1 gap-y-3">
                  {section.links.map((link) => (
                    <Link 
                      key={link.label}
                      href={link.href} 
                      className="text-text-muted hover:text-primary font-medium transition-colors text-base xl:text-lg flex items-center group"
                    >
                      <span className="w-0 group-hover:w-4 overflow-hidden transition-all duration-300 text-primary">→</span>
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            <div className="flex flex-col gap-6">
              <h3 className="font-extrabold text-xl uppercase tracking-wider">Stay Connected</h3>
              <p className="text-text-muted text-base leading-relaxed">
                Subscribe to our newsletter for the latest property deals and investment insights.
              </p>
              
            </div>
          </div>
        </div>
      </div>

      {/* Privacy Bar */}
      <div className="bg-white py-12 border-t border-zinc-100">
        <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {LEGAL_LINKS.map((link) => (
              <Link 
                key={link.label} 
                href={link.href} 
                className="text-sm font-semibold text-text-muted hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <p className="text-sm font-semibold text-zinc-400">
            © 2026 Opti Realty. All Rights Reserved. Built with precision.
          </p>
        </div>
      </div>
    </footer>
  );
}
