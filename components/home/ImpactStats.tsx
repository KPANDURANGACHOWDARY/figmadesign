"use client";

import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import InfoIcon from '../ui/InfoIcon';

const STATS = [
  {
    value: "500+",
    label: "Total Listings",
    bg: "bg-[#007FE4]",
    icon: (
      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10l9-7 9 7v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    )
  },
  {
    value: "60+",
    label: "Daily Enquiries",
    bg: "bg-[#D3766A]",
    icon: (
      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <circle cx="11.5" cy="14.5" r="2.5" />
        <line x1="13.27" y1="16.27" x2="16" y2="19" />
      </svg>
    )
  },
  {
    value: "900+",
    label: "Registered Users",
    bg: "bg-[#E23D61]",
    icon: (
      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 21v-2a4 4 0 0 0-4-4H5c-2.2 0-4 1.8-4 4v2" />
        <circle cx="8.5" cy="7" r="4" />
        <polyline points="17 11 19 13 23 9" />
      </svg>
    )
  },
  {
    value: "180+",
    label: "Successful Deals",
    bg: "bg-[#00945C]",
    icon: (
      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 14h2a2 2 0 1 0 0-4h-3c-1.3 0-2.5.6-3.4 1.5L5 13" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 14h-2a2 2 0 1 0 0 4h3c1.3 0 2.5-.6 3.4-1.5L19 15" />
        <circle cx="12" cy="7" r="3" />
        <polyline points="9 9 12 6 15 9" />
      </svg>
    )
  }
];

export default function ImpactStats() {
  return (
    <section className="bg-white py-12 xl:py-16 border-t border-zinc-100">
      <div className="container-custom">
        <SectionHeader 
          title="Our Impact at a Glance" 
          subtitle="Built on trust. Growing with confidence."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 mt-10">
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center group">
              <div className={`w-16 h-16 xl:w-20 xl:h-20 rounded-full ${stat.bg} shadow-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {stat.icon}
              </div>
              
              <div className="text-2xl xl:text-4xl font-extrabold text-secondary mb-1">
                {stat.value}
              </div>
              
              <div className="flex items-center gap-2 text-text-muted font-bold text-xs xl:text-sm">
                {stat.label}
                <InfoIcon className="text-zinc-300 opacity-40" size={14} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}