"use client";
import React from 'react';

const steps = [
  {
    title: "Acquire in Bulk",
    color: "text-blue-500",
    icon: (
      <svg className="w-[66px] h-[66px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    title: "Verify Documents",
    color: "text-emerald-500",
    icon: (
      <svg className="w-[66px] h-[66px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: "List Digitally",
    color: "text-rose-400",
    icon: (
      <svg className="w-[66px] h-[66px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: "Value Addition",
    color: "text-rose-500",
    icon: (
      <svg className="w-[66px] h-[66px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
      </svg>
    )
  },
  {
    title: "5x Sell Faster",
    color: "text-cyan-500",
    icon: (
      <svg className="w-[66px] h-[66px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
];

export default function HowItWorks({ theme }: { theme: 'light' | 'dark' }) {
  return (
    <section className="bg-white relative flex justify-center w-full z-10 px-4 xl:px-0 py-8 xl:py-0">
      <div className="relative w-full xl:w-[1160px] h-auto xl:h-[239px]">
        <h2 className="xl:absolute xl:top-0 xl:left-0 xl:w-[602px] xl:h-[34px] font-['Inter'] font-[700] text-[24px] xl:text-[28px] leading-[100%] tracking-[0%] text-[#1C2836] mb-2 xl:mb-0">
          How Opti Realty Works
        </h2>

        <p className="xl:absolute xl:top-[43px] xl:left-0 xl:w-[656px] xl:h-[19px] font-['Inter'] font-[600] text-[14px] xl:text-[16px] leading-[100%] tracking-[-0.03em] text-[#475661] mb-6 xl:mb-0">
          A smarter, safer way to buy property — from source to sale.
        </p>

        {/* Cards Layer */}
        <div className="xl:absolute xl:top-[85px] xl:left-0 flex flex-wrap xl:flex-nowrap gap-5 xl:overflow-visible justify-center xl:justify-start">
          {steps.map((step) => (
            <div
              key={step.title}
              className="w-full max-w-[216px] xl:w-[216px] h-auto min-h-[154px] p-[20px] rounded-[16px] border border-[#9E9E9E] bg-[#FFFFFF] transition-all duration-300 hover:shadow-lg flex flex-col justify-between overflow-hidden relative"
            >
              <div className={`${step.color} mb-4 xl:mb-0`}>
                {step.icon}
              </div>

              {/* Info Icon absolute positioned Top-Right */}
              <svg className="absolute top-[20px] right-[20px] w-[15px] h-[15px] opacity-80 cursor-help" viewBox="0 0 24 24" fill="none" stroke="#9E9E9E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="16" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12.01" y2="8"></line>
              </svg>

              <div className="flex items-center justify-between">
                <h3 className="text-[20px] font-[700] leading-[100%] text-[#1C2836] font-['Inter'] tracking-[-0.01em] pr-1 whitespace-nowrap xl:whitespace-normal">{step.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
