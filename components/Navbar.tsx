"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="w-full xl:w-[1440px] h-[68px] mx-auto flex items-center justify-between px-6 xl:px-[140px] pt-[25px] pb-[25px] relative z-[100]">
      <div className="relative flex items-center xl:-mt-[17px]">
        <div className="relative w-[80px] xl:w-[96px] h-[40px] xl:h-[50px]">
          <Image
            src="/logo.png"
            alt="Opti-Realty Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
        <div
          className="mx-[6px] xl:mx-[8px] opacity-100"
          style={{
            width: '1px',
            height: '35px',
            backgroundColor: '#FFFFFF80',
          }}
        />
        <div
          className="flex flex-col justify-center items-center relative scale-90 xl:scale-100"
          style={{
            width: '99px',
            height: '33px',
            opacity: 0.5,
            borderRadius: '3px',
            border: '0.8px solid #FFFFFF',
          }}
        >
          <div style={{ width: '90px', color: '#FFFFFF', fontSize: '10px', fontFamily: 'Inter', fontWeight: 500, lineHeight: '100%' }}>
            RERA
          </div>
          <div
            style={{
              width: '90px',
              height: '15px',
              fontFamily: 'Inter',
              fontWeight: 400,
              fontSize: '12px',
              lineHeight: '100%',
              letterSpacing: '0%',
              opacity: 1,
              color: '#FFFFFF',
            }}
          >
            P02400009684
          </div>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden xl:flex items-center gap-[27px] shrink-0">
        <Link href="/buy" className="font-['Inter'] font-[500] text-[14px] text-white hover:text-zinc-200">
          Buy
        </Link>
        <Link href="/rent" className="font-['Inter'] font-[500] text-[14px] text-white hover:text-zinc-200">
          Rent
        </Link>
        <Link href="/sell" className="font-['Inter'] font-[500] text-[14px] text-white hover:text-zinc-200">
          Sell
        </Link>
        <Link href="/investment" className="font-['Inter'] font-[500] text-[14px] text-white hover:text-zinc-200">
          Investment
        </Link>
        <Link href="/blogs" className="font-['Inter'] font-[500] text-[14px] text-white hover:text-zinc-200">
          Blogs
        </Link>
        <Link href="/login" className="font-['Inter'] font-[500] text-[14px] text-white hover:text-zinc-200">
          Log In
        </Link>
        <Link href="/signup" className="flex items-center justify-center bg-[#006AFF] px-6 py-2 rounded-[6px] font-['Inter'] font-[600] text-[14px] text-white hover:bg-blue-700">
          Sign Up
        </Link>
      </div>

      <button 
        className="xl:hidden flex items-center justify-center text-white p-2 z-[110]"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>
      <div className={`fixed inset-0 bg-[#001751] z-[105] transition-transform duration-300 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} xl:hidden flex flex-col items-center justify-center gap-8`}>
        <Link href="/buy" onClick={toggleMenu} className="font-['Inter'] font-[500] text-[18px] text-white">Buy</Link>
        <Link href="/rent" onClick={toggleMenu} className="font-['Inter'] font-[500] text-[18px] text-white">Rent</Link>
        <Link href="/sell" onClick={toggleMenu} className="font-['Inter'] font-[500] text-[18px] text-white">Sell</Link>
        <Link href="/investment" onClick={toggleMenu} className="font-['Inter'] font-[500] text-[18px] text-white">Investment</Link>
        <Link href="/blogs" onClick={toggleMenu} className="font-['Inter'] font-[500] text-[18px] text-white">Blogs</Link>
        <Link href="/login" onClick={toggleMenu} className="font-['Inter'] font-[500] text-[18px] text-white">Log In</Link>
        <Link href="/signup" onClick={toggleMenu} className="bg-[#006AFF] px-8 py-3 rounded-[6px] font-['Inter'] font-[600] text-[18px] text-white">Sign Up</Link>

      </div>
    </nav>
  );
}
