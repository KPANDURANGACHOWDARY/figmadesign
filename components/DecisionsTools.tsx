"use client";
import React from 'react';

const tools = [
  {
    title: "ROI Calculator",
    color: "text-blue-500",
    icon: (
      <svg className="w-[60px] h-[60px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="5" y="3" width="14" height="18" rx="2" strokeWidth="1.5" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 7h6M9 11h2m2 0h2M9 14h2m2 0h2M9 17h6" />
      </svg>
    )
  },
  {
    title: "Rental Yield Tool",
    color: "text-emerald-500",
    icon: (
      <img className="w-[60px] h-[60px]" src="/rent.png" alt="Rental Yield Icon" />
    )
  },
  {
    title: "Appreciation Tracker",
    color: "text-rose-400",
    icon: (
      <svg className="w-[60px] h-[60px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="10" cy="10" r="7" strokeWidth="1.5" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 15l6 6M7 10l2-2 3 3 3-3" />
      </svg>
    )
  },
  {
    title: "Compare Tool",
    color: "text-rose-500",
    icon: (
      <svg className="w-[60px] h-[60px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="4" y="5" width="6" height="14" rx="1" strokeWidth="1.5" />
        <rect x="14" y="5" width="6" height="14" rx="1" strokeWidth="1.5" />
        <path strokeLinecap="round" strokeWidth="1.5" d="M12 4v16" strokeDasharray="2 2" />
      </svg>
    )
  }
];

export default function DecisionsTools({ theme }: { theme: 'light' | 'dark' }) {
  return (
    <section className="bg-white relative flex justify-center w-full px-4 xl:px-0 py-8 xl:py-0">
      <div className="relative w-full xl:w-[1160px] h-auto xl:h-[239px]">
        <h2 className="xl:absolute xl:top-0 xl:left-0 xl:w-[602px] xl:h-[34px] font-['Inter'] font-[700] text-[24px] xl:text-[28px] leading-[100%] tracking-[0%] text-[#1C2836] mb-2 xl:mb-0">
          Turn property data into confident decisions.
        </h2>
        <p className="xl:absolute xl:top-[43px] xl:left-0 xl:w-[656px] xl:h-[19px] font-inter font-semibold text-[14px] xl:text-[16px] leading-[1.4] xl:leading-[100%] tracking-[-0.03em] text-[#475661] mb-6 xl:mb-0">
          Analyze returns, rental income, and long-term growth — all in one place, before you invest.
        </p>
        <div className="xl:absolute xl:top-[85px] xl:left-0 flex flex-col md:flex-row flex-wrap xl:flex-nowrap gap-5 justify-center xl:justify-start">
          {tools.map((tool) => (
            <div
              key={tool.title}
              className="w-full max-w-[275px] xl:w-[275px] h-auto min-h-[154px] p-[20px] rounded-[16px] border border-zinc-500 bg-[#FFFFFF] transition-all duration-300 hover:shadow-md flex flex-col justify-between mx-auto md:mx-0"
            >
              <div className={`${tool.color} mb-4 xl:mb-0`}>
                {tool.icon}
              </div>
              <div className="flex items-center gap-[4px] mt-[10px]">
                <h3 className="text-[16px] font-[700] leading-none text-[#1C2836]">{tool.title}</h3>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#9E9E9E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cursor-help opacity-80 shrink-0">
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
