import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  infoIcon?: boolean;
  className?: string;
  onClick?: () => void;
}

const Badge = ({ children, icon, infoIcon, className = '', onClick }: BadgeProps) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-border-light hover:bg-bg-light transition-colors group cursor-pointer ${className}`}
    >
      {icon && <div className="flex-shrink-0">{icon}</div>}
      <span className="font-semibold text-sm xl:text-base text-secondary">{children}</span>
      {infoIcon && (
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="opacity-40 group-hover:opacity-100 transition-opacity"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="16" x2="12" y2="12"></line>
          <line x1="12" y1="8" x2="12.01" y2="8"></line>
        </svg>
      )}
    </button>
  );
};

export default Badge;
