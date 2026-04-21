import React from 'react';

const BADGES = [
  {
    label: "RERA Compliant",
    icon: (
      <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    label: "Bank Approved",
    icon: (
      <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    label: "Legal Verified",
    icon: (
      <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    )
  },
  {
    label: "Digital Process",
    icon: (
      <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  }
];

const BadgesSection = () => {
  return (
    <div className="w-full bg-white text-secondary border-y border-zinc-200">
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 xl:gap-16 py-12 xl:py-20">
          {BADGES.map((badge) => (
            <div key={badge.label} className="flex flex-col md:flex-row items-center justify-center gap-6 group">
              <div className="w-20 h-20 xl:w-24 xl:h-24 rounded-full border border-zinc-200 flex items-center justify-center text-text-muted group-hover:bg-primary/5 group-hover:text-primary group-hover:border-primary transition-all duration-500 group-hover:shadow-xl group-hover:shadow-primary/10">
                {badge.icon}
              </div>
              <div className="flex flex-col items-center md:items-start">
                <span className="text-sm xl:text-lg font-extrabold uppercase tracking-widest">{badge.label}</span>
                <span className="text-xs text-text-muted font-bold opacity-0 group-hover:opacity-100 transition-opacity">100% Verified</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BadgesSection;
