"use client";

import React from "react";
import Image from "next/image";
import SectionHeader from "../ui/SectionHeader";
import Card from "../ui/Card";

const PROGRAMS = [
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

export default function Programs() {
  return (
    <section className="bg-white py-12 xl:py-16">
      <div className="container-custom">
        <SectionHeader 
          title="Opti Realty Programs" 
          subtitle="Smart solutions designed for every kind of property buyer."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-10">
          {PROGRAMS.map((program) => (
            <Card key={program.title} className="flex flex-col group p-0 overflow-hidden border-none shadow-none hover:shadow-none">
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden mb-4 border border-zinc-100 shadow-md group-hover:shadow-xl transition-all duration-300">
                <Image
                  src={program.img}
                  alt={program.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
              </div>
              
              <h3 className="font-bold text-lg lg:text-xl text-secondary mb-1.5 transition-colors group-hover:text-primary">
                {program.title}
              </h3>
              
              <p className="font-medium text-text-muted text-sm lg:text-base mb-4">
                {program.desc}
              </p>
              
              <div className="flex items-center gap-2 text-primary font-bold text-xs lg:text-sm mt-auto group-hover:gap-3 transition-all">
                <span>Know More</span>
                <span className="text-xl">→</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}