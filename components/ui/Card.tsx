import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hoverable?: boolean;
}

const Card = ({ children, className = '', onClick, hoverable = true }: CardProps) => {
  const baseStyles = 'bg-white rounded-2xl border border-zinc-200 shadow-sm transition-all duration-300';
  const hoverStyles = hoverable ? 'hover:shadow-xl hover:border-primary/30' : '';
  const clickableStyles = onClick ? 'cursor-pointer active:scale-[0.98]' : '';

  return (
    <div 
      className={`${baseStyles} ${hoverStyles} ${clickableStyles} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;
