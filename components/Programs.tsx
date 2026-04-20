"use client";
import React from "react";
import Image from "next/image";

const programs = [
  {
    title: "Smart Home Buyer Program",
    desc: "For first-time and end-use buyers",
    img: "/opti-1.jpg",
  },
  {
    title: "Investor Advantage Program",
    desc: "For high-return property investments",
    img: "/opti-2.jpg",
  },
  {
    title: "NRI Property Care Program",
    desc: "Buy in India. Earn in peace.",
    img: "/opti-3.jpg",
  },
];

export default function Programs({ theme }: { theme: "light" | "dark" }) {
  return (
    <section className="bg-white relative flex justify-center w-full z-10 px-4 xl:px-0 py-10 xl:py-0">
      <div className="relative w-full xl:w-[1160px] h-auto xl:h-[450px]">
        <h2 className="xl:absolute xl:top-0 xl:left-0 font-['Inter'] font-[700] text-[24px] xl:text-[28px] text-[#1C2836] mb-2 xl:mb-0">
          Opti Realty Programs
        </h2>

        <p className="xl:absolute xl:top-[43px] xl:left-0 font-['Inter'] font-[600] text-[14px] xl:text-[16px] text-[#475661] mb-8 xl:mb-0">
          Smart solutions designed for every kind of property buyer.
        </p>

        {/* Cards */}
        <div className="xl:absolute xl:top-[85px] xl:left-0 flex flex-col xl:flex-row gap-[20px]">
          {programs.map((program, i) => (
            <div key={i} className="flex flex-col group cursor-pointer w-full xl:w-[373px]">

              {/* Image */}
              <div className="w-full xl:w-[373px] h-[220px] rounded-[16px] overflow-hidden relative mb-[15px] border border-zinc-100 transition-all duration-300 group-hover:shadow-lg">

                <Image
                  src={program.img}
                  alt={program.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 373px"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  priority={i === 0}
                />

                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent"></div>
              </div>
              <h3 className="font-['Inter'] font-[700] text-[20px] text-[#1C2836] mb-2">
                {program.title}
              </h3>

              <p className="font-['Inter'] font-[500] text-[16px] text-zinc-500 mb-[10px]">
                {program.desc}
              </p>
              <div className="flex items-center gap-1.5 text-[#006AFF] font-[700] text-[14px] mt-1 transition-transform group-hover:translate-x-1">
                <span>Know More</span>
                <span className="text-[17px]">→</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}