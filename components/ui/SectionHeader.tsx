import React from 'react';
import Link from 'next/link';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  viewAllLink?: string;
  className?: string;
}

const SectionHeader = ({ title, subtitle, viewAllLink, className = '' }: SectionHeaderProps) => {
  return (
    <div className={`flex flex-col md:flex-row justify-between md:items-end mb-8 gap-4 ${className}`}>
      <div>
        <h2 className="font-bold text-xl lg:text-3xl text-secondary leading-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="font-semibold text-xs lg:text-base text-text-muted mt-2">
            {subtitle}
          </p>
        )}
      </div>
      {viewAllLink && (
        <Link 
          href={viewAllLink} 
          className="text-primary font-bold text-sm xl:text-base flex items-center gap-2 hover:opacity-80 transition-opacity group"
        >
          View All <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      )}
    </div>
  );
};

export default SectionHeader;
