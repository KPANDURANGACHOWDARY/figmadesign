"use client";

import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import Image from 'next/image';
import InfoIcon from '../ui/InfoIcon';
import Card from '../ui/Card';

const TOOLS = [
  {
    title: "ROI Calculator",
    className: "text-[#006AFF]",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="5" y="3" width="14" height="18" rx="2" strokeWidth="1.5" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 7h6M9 11h2m2 0h2M9 14h2m2 0h2M9 17h6" />
      </svg>
    )
  },
  {
    title: "Rental Yield Tool",
    className: "text-emerald-500",
    icon: (
      <Image src="/rent.png" alt="Rental Yield Icon" width={48} height={48} className="object-contain" />
    )
  },
  {
    title: "Appreciation Tracker",
    className: "text-rose-400",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="10" cy="10" r="7" strokeWidth="1.5" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 15l6 6M7 10l2-2 3 3 3-3" />
      </svg>
    )
  },
  {
    title: "Compare Tool",
    className: "text-rose-500",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="4" y="5" width="6" height="14" rx="1" strokeWidth="1.5" />
        <rect x="14" y="5" width="6" height="14" rx="1" strokeWidth="1.5" />
        <path strokeLinecap="round" strokeWidth="1.5" d="M12 4v16" strokeDasharray="2 2" />
      </svg>
    )
  }
];

export default function DecisionsTools() {
  return (
    <section className="bg-white py-10 xl:py-12 border-t border-zinc-100">
      <div className="container-custom">
        <SectionHeader 
          title="Turn data into decisions." 
          subtitle="Analyze returns, rental income, and long-term growth — all in one place, before you invest."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {TOOLS.map((tool) => (
            <Card
              key={tool.title}
              className="p-5 flex flex-col justify-between min-h-[140px] group"
            >
              <div className={`${tool.className} group-hover:scale-110 transition-transform duration-300`}>
                {React.cloneElement(tool.icon as React.ReactElement, { className: 'w-10 h-10' })}
              </div>
              
              <div className="flex items-center gap-2 mt-3">
                <h3 className="text-base font-bold text-secondary leading-tight">{tool.title}</h3>
                <InfoIcon className="text-zinc-300 opacity-80" size={14} />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
