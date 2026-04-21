import React from 'react';

interface InfoIconProps {
  className?: string;
  size?: number;
}

const InfoIcon = ({ className = "text-zinc-300", size = 20 }: InfoIconProps) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2"
      className={className}
      aria-label="More information"
      role="img"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4m0-4h.01" />
    </svg>
  );
};

export default InfoIcon;
