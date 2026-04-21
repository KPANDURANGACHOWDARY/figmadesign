import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative w-full min-h-[500px] md:min-h-[600px] lg:min-h-[70vh] flex flex-col overflow-hidden">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.jpg"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#001751] to-primary/20 transition-colors duration-500" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full flex flex-col items-center">
        <div className="container-custom pt-32 lg:pt-48 flex flex-col items-center text-center gap-4">
          <h1 className="font-extrabold text-2xl md:text-4xl lg:text-5xl text-white tracking-tight leading-tight [text-shadow:0px_1px_7px_rgba(0,0,0,0.1)]">
            Better Homes. Better Pricing.
            <br />
            <span className="text-white/90">Zero Uncertainty.</span>
          </h1>
          
          <p className="max-w-[500px] font-semibold text-sm md:text-lg text-white/80 leading-relaxed">
            Buy ready-to-move-in properties with verified documents and bank approvals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
