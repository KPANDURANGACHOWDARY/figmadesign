import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import Image from 'next/image';

const PIN_POSITIONS = [
  { left: '20%', top: '30%' },
  { left: '15%', top: '70%' },
  { left: '35%', top: '55%' },
  { left: '50%', top: '85%' },
  { left: '75%', top: '40%' },
  { left: '68%', top: '75%' },
  { left: '90%', top: '25%' },
  { left: '95%', top: '70%' },
];

const MapSection = () => {
  return (
    <section className="py-12 xl:py-16 bg-white">
      <div className="container-custom mb-8 lg:mb-12">
        <SectionHeader 
          title="Explore Properties on Map" 
          className="text-center md:items-center"
        />
      </div>

      {/* Map Container */}
      <div className="relative w-full aspect-video md:aspect-[21/9] min-h-[400px] bg-zinc-100 border-y border-zinc-200">
        {/* Background Map Placeholder */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/image.png"
            alt="Map Background"
            fill
            className="object-cover object-center sm:object-fill opacity-60"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#001751]/10 mix-blend-multiply" />
        </div>

        {/* Pins Overlay - Using Grid for better responsiveness */}
        <div className="absolute inset-0 z-10">
          <div className="container-custom h-full">
            <div className="grid grid-cols-4 lg:grid-cols-6 gap-4 h-full content-start pt-8 sm:pt-12 lg:pt-16">
              {PIN_POSITIONS.map((pos, i) => (
                <div 
                  key={i} 
                  className="flex justify-center"
                  style={{ 
                    // Fallback grid positioning, can be overridden by inline styles for fine-tuning
                  }}
                >
                  <button
                    className="group cursor-pointer transition-all duration-300 hover:scale-125 focus:outline-none focus:ring-4 focus:ring-primary/40 rounded-full"
                    aria-label={`View Property ${i + 1}`}
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-white border-[3px] lg:border-[4px] border-secondary shadow-xl flex items-center justify-center p-0.5 sm:p-1 transition-colors group-hover:border-primary">
                        <div className="relative w-full h-full rounded-full overflow-hidden">
                          <Image 
                            src="/pin.png" 
                            alt="" 
                            fill 
                            className="object-contain"
                          />
                        </div>
                      </div>
                      <div className="w-0 h-0 border-l-8 border-r-8 border-t-10 lg:border-t-12 border-l-transparent border-r-transparent border-t-secondary transition-colors group-hover:border-t-primary -mt-0.5 sm:-mt-1" />
                    </div>

                    {/* Tooltip on Hover */}
                    <div className="absolute -top-10 sm:-top-12 lg:-top-14 left-1/2 -translate-x-1/2 bg-secondary text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-2xl pointer-events-none group-focus:opacity-100">
                      Verified Property
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
