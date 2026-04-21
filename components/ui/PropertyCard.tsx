import React from 'react';
import Image from 'next/image';
import Button from './Button';
import InfoIcon from './InfoIcon';

interface PropertyCardProps {
  price: string;
  description: string;
  avgPrice: string;
  location: string;
  image: string;
}

const PropertyCard = ({ price, description, avgPrice, location, image }: PropertyCardProps) => {
  return (
    <div className="flex-shrink-0 w-full bg-white rounded-3xl shadow-xl border border-zinc-100 flex flex-col overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl group relative">
      <div className="relative h-40 lg:h-48 w-full overflow-hidden">
        <Image
          src={image}
          alt={description}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        <div className="absolute top-2.5 right-2.5">
          <button 
            className="w-9 h-9 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center shadow-lg hover:bg-white hover:scale-110 active:scale-95 transition-all border border-zinc-100 group/fav"
            aria-label="Add to favorites"
          >
            <svg className="w-4.5 h-4.5 text-secondary group-hover/fav:text-error transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>
        <div className="absolute bottom-2.5 left-2.5">
          <span className="bg-success text-white text-[8px] font-bold px-2 py-0.5 rounded-full uppercase tracking-widest shadow-lg">New Launch</span>
        </div>
      </div>

      <div className="p-4 lg:p-5 flex flex-col flex-1 gap-1">
        <div className="flex justify-between items-start mb-0.5">
          <h4 className="font-extrabold text-lg lg:text-xl text-secondary tracking-tight">
            {price}
          </h4>
        </div>
        <p className="font-bold text-xs lg:text-sm text-secondary/80 leading-snug line-clamp-1">
          {description}
        </p>
        <div className="flex flex-col gap-0.5 mt-1">
          <div className="flex items-center gap-1.5 text-text-muted font-semibold text-[9px] lg:text-[11px]">
            <InfoIcon className="text-zinc-400" size={12} />
            {avgPrice}
          </div>
          <div className="flex items-center gap-1.5 text-text-muted font-semibold text-[9px] lg:text-[11px]">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {location}
          </div>
        </div>
        <div className="mt-3 lg:mt-4">
          <Button variant="primary" size="sm" className="w-full rounded-lg font-bold py-2 shadow-lg shadow-primary/20 text-xs">
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
