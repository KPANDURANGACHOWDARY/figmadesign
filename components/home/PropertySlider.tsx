"use client";

import React, { useRef } from 'react';
import SectionHeader from '../ui/SectionHeader';
import PropertyCard from '../ui/PropertyCard';
import Badge from '../ui/Badge';
import Image from 'next/image';

const PROPERTIES = [
  { price: "₹1.8 Cr - 2.2 Cr", description: "3 BHK Flat | 1450 sqft | East Facing", avgPrice: "Avg. Price: ₹8.05 K/sq.ft", location: "Serilingampally, Hyderabad", image: "/f1.jpg" },
  { price: "₹1.6 Cr - 2.0 Cr", description: "3 BHK Flat | 1450 sqft | East Facing", avgPrice: "Avg. Price: ₹8.05 K/sq.ft", location: "Serilingampally, Hyderabad", image: "/f2.jpg" },
  { price: "₹80 L - 1.2 Cr", description: "2 BHK Flat | 1150 sqft | East Facing", avgPrice: "Avg. Price: ₹8.05 K/sq.ft", location: "Kondapur, Hyderabad", image: "/f3.jpg" },
  { price: "₹90 L - 1.3 Cr", description: "2 BHK Flat | 1250 sqft | East Facing", avgPrice: "Avg. Price: ₹8.05 K/sq.ft", location: "Manikonda, Hyderabad", image: "/f4.jpg" },
  { price: "₹1.6 Cr - 2.5 Cr", description: "3 BHK Flat | 1600 sqft | East Facing", avgPrice: "Avg. Price: ₹9.15 K/sq.ft", location: "Hitech City, Hyderabad", image: "/f2.jpg" }
];

const FILTERS = [
  { label: "Top Deals", icon: "/handshake.png" },
  { label: "Fast Selling", icon: "/bolt.png" },
  { label: "High ROI", icon: "/trending-up.png" },
  { label: "80%+ Ready", icon: "/thumbs-up-trust.png" },
  { label: "Ready to Move", icon: "/verified.png" },
];

const PropertySlider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = sliderRef.current.offsetWidth * 0.8;
      sliderRef.current.scrollBy({ 
        left: direction === 'left' ? -scrollAmount : scrollAmount, 
        behavior: 'smooth' 
      });
    }
  };

  return (
    <section className="py-12 xl:py-20 bg-white">
      <div className="container-custom">
        {/* Chips/Filters */}
        <div className="flex flex-wrap items-center gap-3 mb-10">
          {FILTERS.map((filter) => (
            <Badge 
              key={filter.label} 
              infoIcon 
              icon={filter.icon ? <Image src={filter.icon} alt={filter.label} width={22} height={22} className="object-contain" /> : null}
              className="rounded-full shadow-sm hover:shadow-md border-zinc-200"
            >
              {filter.label}
            </Badge>
          ))}
        </div>

        <SectionHeader 
          title="Featured Properties" 
          subtitle="Verified Properties. Better Deals. Direct from builders."
          viewAllLink="/properties"
          className="mb-12"
        />

        <div className="relative group/slider">
          {/* Slider Container with Controls */}
          <div className="flex items-center gap-4">
            {/* Left Control */}
            <button
              onClick={() => scroll('left')}
              type="button"
              className="hidden lg:flex shrink-0 w-12 h-12 lg:w-14 lg:h-14 bg-white rounded-full items-center justify-center shadow-xl z-40 hover:bg-primary hover:text-white active:scale-90 transition-all border border-zinc-100"
              aria-label="Scroll Left"
            >
              <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Slider */}
            <div
              ref={sliderRef}
              className="flex-1 flex gap-5 lg:gap-6 overflow-x-auto pb-8 scroll-smooth no-scrollbar snap-x snap-mandatory"
            >
              {PROPERTIES.map((prop, i) => (
                <div key={i} className="snap-start pt-2 min-w-[240px] sm:min-w-[280px] lg:min-w-[300px]">
                  <PropertyCard {...prop} />
                </div>
              ))}
            </div>

            {/* Right Control */}
            <button
              onClick={() => scroll('right')}
              type="button"
              className="hidden lg:flex shrink-0 w-12 h-12 lg:w-14 lg:h-14 bg-white rounded-full items-center justify-center shadow-xl z-40 hover:bg-primary hover:text-white active:scale-90 transition-all border border-zinc-100"
              aria-label="Scroll Right"
            >
              <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertySlider;
