import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const badges = [
  {
    label: "RERA Compliant",
    icon: (
      <svg width="40" height="40" fill="none" stroke="#475661" strokeWidth="1.2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    label: "Bank Approved",
    icon: (
      <svg width="40" height="40" fill="none" stroke="#475661" strokeWidth="1.2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    label: "Legal Verified",
    icon: (
      <svg width="40" height="40" fill="none" stroke="#475661" strokeWidth="1.2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    )
  },
  {
    label: "Digital Process",
    icon: (
      <svg width="40" height="40" fill="none" stroke="#475661" strokeWidth="1.2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  }
];

export default function Footer({ theme }: { theme: 'light' | 'dark' }) {
  return (
    <>
      <footer className="w-full bg-[#F2F3F4]">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-wrap justify-center items-start gap-y-10 gap-x-12 xl:gap-[80px] pt-[40px] xl:pt-[28px] pb-[40px] xl:pb-[32px] px-6">
            {badges.map((badge) => (
              <div key={badge.label} className="flex flex-col items-center gap-[14px] min-w-[120px]">
                {/* Circle*/}
                <div
                  className="rounded-full flex items-center justify-center bg-transparent w-[70px] h-[70px] xl:w-[90px] xl:h-[90px]"
                  style={{
                    border: '1px solid #475661',
                  }}
                >
                  <div className="scale-75 xl:scale-100">
                    {badge.icon}
                  </div>
                </div>
                <span
                  className="font-['Inter'] text-center whitespace-nowrap"
                  style={{
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '100%',
                    color: '#1C2836',
                  }}
                >
                  {badge.label}
                </span>
              </div>
            ))}
          </div>

          <div className="w-full" style={{ borderTop: '1px solid #D2D2D2' }} ></div>

          <div className="pt-[32px] pb-[32px] flex flex-col gap-[40px] xl:gap-[20px] px-6 xl:px-[140px]">

            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="relative shrink-0 w-[110px] xl:w-[137px] h-[60px] xl:h-[81px]">
                  <Image
                    src="/footer.png"
                    alt="Opti-Realty Logo"
                    fill
                    className="object-contain object-left"
                  />
                </div>
                <div
                  className="hidden md:block shrink-0"
                  style={{
                    width: '1px',
                    height: '77px',
                    background: '#1C2836',
                    opacity: 0.5,
                    marginLeft: '0px',
                    marginRight: '8px',
                  }}
                />
              </div>

              {/* RERA+P02400009684*/}
              <div
                className="w-[127px] h-[44px] rounded-[3px] flex flex-col justify-center gap-1 pl-2 pr-2"
                style={{
                  border: '0.8px solid #1C2836',
                  opacity: 0.5,
                }}
              >
                <span style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '12px', lineHeight: '100%', color: '#1C2836' }}>
                  RERA
                </span>
                <span style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '15px', lineHeight: '100%', color: '#1C2836' }}>
                  P02400009684
                </span>
              </div>
            </div>

            {/* Explore */}
            <div className="flex flex-col gap-[15px] xl:gap-[10px]">
              <p style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: '16px', lineHeight: '100%', letterSpacing: '-0.01em', color: '#1C2836' }}>
                Explore
              </p>
              <div className="flex items-center flex-wrap gap-y-3">
                {["Buy", "Rent", "Sell", "Investment", "ROI Calculator", "EMI Calculator", "Rental Yield Tool"].map((item, i, arr) => (
                  <span key={item} className="flex items-center">
                    <Link
                      href="#"
                      style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '16px', lineHeight: '100%', letterSpacing: '0%', color: '#475661' }}
                      className="hover:text-[#006AFF] transition-colors whitespace-nowrap"
                    >
                      {item}
                    </Link>
                    {i < arr.length - 1 && <span className="mx-[12px] select-none" style={{ color: '#D2D2D2' }}>|</span>}
                  </span>
                ))}
              </div>
            </div>

            {/* Company + Social Icons */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-10">
              <div className="flex flex-col gap-[15px] xl:gap-[10px]">
                <p style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: '16px', lineHeight: '100%', letterSpacing: '-0.01em', color: '#1C2836' }}>
                  Company
                </p>
                <div className="flex items-center flex-wrap gap-y-3">
                  {["News & Insights", "About", "Contact us", "FAQ's"].map((item, i, arr) => (
                    <span key={item} className="flex items-center">
                      <Link
                        href="#"
                        style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '16px', lineHeight: '100%', letterSpacing: '0%', color: '#475661' }}
                        className="hover:text-[#006AFF] transition-colors whitespace-nowrap"
                      >
                        {item}
                      </Link>
                      {i < arr.length - 1 && <span className="mx-[12px] select-none" style={{ color: '#D2D2D2' }}>|</span>}
                    </span>
                  ))}
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-6 xl:gap-[24px]">
                <Link href="#" aria-label="Facebook" className="flex items-center justify-center text-[#475661] hover:text-[#006AFF] transition-colors w-[24px] h-[24px]">
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                </Link>
                <Link href="#" aria-label="Instagram" className="flex items-center justify-center text-[#475661] hover:text-[#006AFF] transition-colors w-[24px] h-[24px]">
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeLinecap="round" />
                  </svg>
                </Link>
                <Link href="#" aria-label="X" className="flex items-center justify-center text-[#475661] hover:text-[#006AFF] transition-colors w-[24px] h-[24px]">
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 4l16 16M4 20L20 4" />
                  </svg>
                </Link>
                <Link href="#" aria-label="LinkedIn" className="flex items-center justify-center text-[#475661] hover:text-[#006AFF] transition-colors w-[24px] h-[24px]">
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </Link>
                <Link href="#" aria-label="YouTube" className="flex items-center justify-center text-[#475661] hover:text-[#006AFF] transition-colors w-[24px] h-[24px]">
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.4a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
                    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
                  </svg>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </footer>

      {/*privacy bar */}
      <div className="w-full bg-white xl:min-h-[463px] pb-[40px] xl:pb-[300px]">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-[14px] px-6 xl:px-[140px] pt-[30px]">

          <div className="flex items-center flex-wrap gap-y-3">
            {["Privacy Policy", "Terms of Service", "Cookie Policy", "Disclaimer", "Sitemap"].map((item, i, arr) => (
              <span key={item} className="flex items-center">
                <Link
                  href="#"
                  style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '14px', lineHeight: '100%', letterSpacing: '-0.03em', color: '#1C2836' }}
                  className="hover:text-[#006AFF] transition-colors whitespace-nowrap"
                >
                  {item}
                </Link>
                {i < arr.length - 1 && <span className="mx-[10px] select-none" style={{ color: '#D2D2D2' }}>|</span>}
              </span>
            ))}
          </div>
          <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '14px', lineHeight: '100%', letterSpacing: '-0.03em', color: '#475661' }}>
            © 2026 Opti Realty. All Rights Reserved.
          </p>
        </div>
      </div>
    </>
  );
}
