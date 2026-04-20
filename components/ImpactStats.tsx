"use client";
import React from 'react';

const statsBubbles = [
  {
    value: "500+",
    label: "Total Listings",
    leftCircle: "xl:left-[228px]", leftValue: "xl:left-[230px]", leftLabel: "xl:left-[214px]",
    bg: "bg-[#007FE4]",
    icon: (
      <svg className="w-[48px] h-[48px] text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 10l9-7 9 7v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    )
  },
  {
    value: "60+",
    label: "Daily Enquiries",
    leftCircle: "xl:left-[523px]", leftValue: "xl:left-[525px]", leftLabel: "xl:left-[509px]",
    bg: "bg-[#D3766A]",
    icon: (
      <svg className="w-[48px] h-[48px] text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <circle cx="11.5" cy="14.5" r="2.5" />
        <line x1="13.27" y1="16.27" x2="16" y2="19" />
      </svg>
    )
  },
  {
    value: "900+",
    label: "Registered Users",
    leftCircle: "xl:left-[818px]", leftValue: "xl:left-[820px]", leftLabel: "xl:left-[804px]",
    bg: "bg-[#E23D61]",
    icon: (
      <svg className="w-[48px] h-[48px] text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H5c-2.2 0-4 1.8-4 4v2" />
        <circle cx="8.5" cy="7" r="4" />
        <polyline points="17 11 19 13 23 9" />

      </svg>
    )
  },
  {
    value: "180+",
    label: "Successful Deals",
    leftCircle: "xl:left-[1113px]", leftValue: "xl:left-[1115px]", leftLabel: "xl:left-[1099px]",
    bg: "bg-[#00945C]",
    icon: (
      <svg className="w-[48px] h-[48px] text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 14h2a2 2 0 1 0 0-4h-3c-1.3 0-2.5.6-3.4 1.5L5 13" />
        <path d="M13 14h-2a2 2 0 1 0 0 4h3c1.3 0 2.5-.6 3.4-1.5L19 15" />
        <circle cx="12" cy="7" r="3" />
        <polyline points="9 9 12 6 15 9" />
      </svg>
    )
  }
];

export default function ImpactStats({ theme }: { theme: 'light' | 'dark' }) {
  return (
    <section className="bg-[#E0F2FF] relative flex justify-center py-10 xl:py-0 w-full overflow-hidden">
      <div className="relative w-full xl:w-[1440px] h-auto xl:h-[386px] overflow-hidden flex flex-col xl:block items-center xl:items-start text-center xl:text-left px-4 xl:px-0">
        <h4 className="xl:absolute xl:top-[40px] xl:left-[140px] xl:w-[311px] xl:h-[34px] font-['Inter'] font-[700] text-[24px] xl:text-[28px] leading-[100%] tracking-[0%] text-[#1C2836] mb-2 xl:mb-0">
          Our Impact at a Glance
        </h4>

        {/* Subtext Paragraph */}
        <p className="xl:absolute xl:top-[83px] xl:left-[140px] xl:w-[287px] xl:h-[19px] font-['Inter'] font-[600] text-[14px] xl:text-[16px] leading-[100%] tracking-[-0.03em] text-[#475661] mb-10 xl:mb-0">
          Built on trust. Growing with confidence.
        </p>

        {/* Circular Stat Nodes & Labels underneath */}
        <div className="flex flex-wrap xl:block justify-center gap-10 xl:gap-0 w-full">
          {statsBubbles.map((stat, i) => (
            <div key={i} className="flex flex-col items-center xl:block xl:static w-[130px] xl:w-auto">
              {/* Colored Circle with Icon */}
              <div className={`xl:absolute xl:top-[138px] ${stat.leftCircle} w-[80px] h-[80px] xl:w-[100px] xl:h-[100px] rounded-[110px] ${stat.bg} shadow-md flex items-center justify-center mx-auto!`}>
                {stat.icon}
              </div>

              {/* Value Below Circle */}
              <div className={`xl:absolute xl:top-[248px] ${stat.leftValue} xl:w-[97px] xl:h-[44px] font-['Inter'] font-[800] text-[32px] xl:text-[40px] leading-[100%] tracking-[-0.03em] text-center text-[#1C2836] flex items-center justify-center mt-3 xl:mt-0`}>
                {stat.value}
              </div>

              {/* Label Below Value */}
              <div className={`xl:absolute xl:top-[302px] ${stat.leftLabel} xl:w-[135px] xl:h-[24px] font-['Inter'] font-[700] text-[14px] xl:text-[16px] leading-[100%] tracking-[-0.01em] text-center text-[#475661] flex items-center justify-center whitespace-nowrap gap-[5px]`}>
                {stat.label}
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#9E9E9E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-80">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="16" x2="12" y2="12"></line>
                  <line x1="12" y1="8" x2="12.01" y2="8"></line>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}