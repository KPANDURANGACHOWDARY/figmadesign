"use client";

import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import InfoIcon from '../ui/InfoIcon';

const STEPS = [
  {
    title: "Acquire in Bulk",
    className: "text-[#006AFF]",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    title: "Verify Documents",
    className: "text-emerald-500",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: "List Digitally",
    className: "text-rose-400",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: "Value Addition",
    className: "text-rose-500",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
      </svg>
    )
  },
  {
    title: "5x Sell Faster",
    className: "text-cyan-500",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-12 xl:py-16">
      <div className="container-custom">
        <SectionHeader 
          title="How Opti Realty Works" 
          subtitle="A smarter, safer way to buy property — from source to sale."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 mt-10">
          {STEPS.map((step) => (
            <div
              key={step.title}
              className="group p-6 rounded-2xl border border-zinc-200 bg-white hover:border-primary hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              <div className={`${step.className} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {step.icon}
              </div>

              <div className="absolute top-4 right-4">
                <InfoIcon className="text-zinc-300 opacity-80" size={16} />
              </div>

              <h3 className="text-lg font-bold text-secondary leading-tight">
                {step.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

