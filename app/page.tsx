"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import DecisionsTools from "@/components/DecisionsTools";
import HowItWorks from "@/components/HowItWorks";
import ImpactStats from "@/components/ImpactStats";
import Programs from "@/components/Programs";
import Footer from "@/components/Footer";

export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -355, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 355, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
    }
  }, [theme]);

  return (
    <div className={`min-h-screen transition-all duration-500 overflow-x-hidden`}>

      <main className="relative z-0 w-full xl:h-[665px] h-auto flex flex-col">
        <div className="absolute top-0 left-0 w-full xl:h-[500px] h-screen max-h-[500px] z-0 overflow-hidden">
          <Image
            src="/hero.jpg"
            alt="Hero Background"
            fill
            className="object-cover opacity-100"
            priority
          />
          <div
            className="absolute inset-0 transition-colors duration-500"
            style={{ background: 'linear-gradient(180deg, rgba(0, 23, 81, 1) 0%, hsla(215, 100%, 50%, 0.20) 100%)' }}
          ></div>
        </div>

        <div className="mx-auto w-full max-w-[1440px] relative h-full">


          <div className="absolute top-0 left-0 w-full z-50">
            <Navbar />
          </div>

          <div
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="fixed md:absolute z-[100] flex items-center rounded-full p-[2px] cursor-pointer bg-[#1C2836] shadow-lg xl:right-[-60px] right-4"
            style={{
              width: '138px',
              height: '30px',
              top: '300px',
              transform: 'rotate(90deg)',
              transformOrigin: 'top right',
              opacity: 1
            }}
          >
            <div
              className="absolute rounded-full bg-white transition-transform duration-300 ease-in-out shadow-sm"
              style={{
                width: '66px',
                height: '26px',
                transform: theme === 'dark' ? 'translateX(0px)' : 'translateX(68px)',
              }}
            />
            <div className="relative flex-1 flex items-center justify-center gap-[6px] z-10 h-full pointer-events-none">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`transition-colors duration-300 ${theme === 'dark' ? 'text-[#006AFF]' : 'text-white'}`}>
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                <path d="M8.5 7v4" />
                <path d="M6.5 9h4" />
                <path d="M12.5 4v2" />
                <path d="M11.5 5h2" />
              </svg>
              <span className={`font-['Inter'] font-[600] text-[13px] leading-[100%] transition-colors duration-300 ${theme === 'dark' ? 'text-[#006AFF]' : 'text-white'}`}>Dark</span>
            </div>

            <div className="relative flex-1 flex items-center justify-center gap-[6px] z-10 h-full pointer-events-none">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`transition-colors duration-300 ${theme === 'light' ? 'text-[#006AFF]' : 'text-white'}`}>
                <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1.3.5 2.6 1.5 3.5.8.8 1.3 1.5 1.5 2.5"></path>
                <path d="M9 18h6"></path><path d="M10 22h4"></path>
                <line x1="12" y1="2" x2="12" y2="4"></line>
                <line x1="4.2" y1="5.6" x2="5.6" y2="7"></line>
                <line x1="18.4" y1="7" x2="19.8" y2="5.6"></line>
              </svg>
              <span className={`font-['Inter'] font-[600] text-[13px] leading-[100%] transition-colors duration-300 ${theme === 'light' ? 'text-[#006AFF]' : 'text-white'}`}>Light</span>
            </div>
          </div>

          <div className="absolute left-1/2 -translate-x-1/2 top-[120px] sm:top-[140px] md:top-[160px] xl:top-[188px] w-full max-w-[900px] px-4 text-center z-10 flex flex-col items-center gap-[12px]">

              <h1 className="w-full xl:whitespace-nowrap font-['Inter'] font-[800] text-[28px] sm:text-[32px] xl:text-[44px] leading-[1.2] xl:leading-[100%] tracking-[-0.03em] text-white [text-shadow:0px_1px_7px_rgba(0,0,0,0.1)]">
                Better Homes. Better Pricing.
              </h1>

              <h1 className="w-[80%] font-['Inter'] font-[800] text-[28px] sm:text-[32px] xl:text-[44px] leading-[1.2] xl:leading-[100%] tracking-[-0.03em] text-white [text-shadow:0px_1px_7px_rgba(0,0,0,0.1)]">
                Zero Uncertainty.
              </h1>
              <p className="w-full max-w-[572px] mx-auto font-inter font-semibold text-[14px] sm:text-[16px] lg:text-[18px] leading-[1.4] lg:leading-[100%] tracking-[-0.03em] text-white text-center lg:whitespace-nowrap">Buy ready-to-move-in properties with verified documents and bank approvals.</p>

          </div>

          <div className="lg:absolute lg:top-[458px] lg:left-1/2 lg:-translate-x-1/2 w-full max-w-[95%] xl:max-w-[1160px] mx-auto xl:h-[84px] z- bg-white rounded-[24px] xl:rounded-[42px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] flex flex-col xl:flex-row items-center p-3 xl:px-4 gap-2 border border-zinc-100 mt-10 xl:mt-0">

  <div className="w-full xl:w-auto min-w-[110px] h-[52px] rounded-[26px] bg-[#F5F5F5] border border-[#9E9E9E] flex items-center justify-center cursor-pointer hover:bg-zinc-200 transition-colors shrink-0">
    <span className="font-inter font-medium text-[16px] text-zinc-900 mr-2">Buy</span>
    <svg className="w-5 h-5 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
    </svg>
  </div>

  <div className="flex-1 w-full h-[52px] rounded-[26px] bg-[#F5F5F5] border border-[#1C2836] shadow-[0px_2px_4px_0px_#0000001A] flex items-center px-4">
    <span className="hidden xl:inline font-inter font-medium text-[16px] text-[#9E9E9E] whitespace-nowrap mr-2">
      Search Properties :
    </span>
    <input
      type="text"
      placeholder="Enter Area, City, or ZIP code"
      className="flex-1 bg-transparent outline-none font-inter text-[16px] text-black xl:text-[#9E9E9E] placeholder:text-[#9E9E9E]"
    />
  </div>

  <button className="w-full xl:w-[52px] h-[52px] bg-[#006AFF] rounded-[26px] xl:rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors shrink-0">
    <span className="xl:hidden font-medium text-white mr-2">Search</span>
    <svg className="w-[20px] h-[20px] text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
    </svg>
  </button>

</div>

          <div className="xl:absolute xl:top-[560px] xl:left-1/2 xl:-translate-x-1/2 z-20 flex flex-col items-center gap-[5px] w-full px-4 mt-10 xl:mt-0">
            <div className="flex flex-wrap justify-center gap-[5px] w-full">
              {[
                { label: "Top Deals" },
                { label: "Fast Selling" },
              ].map((chip) => (
                <button
                  key={chip.label}
                  className="flex items-center justify-center w-full max-w-[253px] xl:w-[253px] h-[40px] rounded-[6px] bg-[#FFFFFF] border border-[#9E9E9E] hover:bg-zinc-50 transition-colors gap-[5px] flex-1"
                >
                  <span className="flex items-center gap-[5px] font-['Inter'] font-[600] text-[12px] xl:text-[14px] leading-[100%] text-[#1C2836]">

                    {chip.label === "Top Deals" && (
                      <img
                        src="/handshake.png"
                        alt="handshake"
                        className="w-[16px] xl:w-[20px] h-[16px] xl:h-[20px]"
                      />
                    )}
                    {chip.label === "Fast Selling" && (
                      <img
                        src="/bolt.png"
                        alt="bold"
                        className="w-[16px] xl:w-[20px] h-[16px] xl:h-[20px]"
                      />
                    )}

                    {chip.label}
                  </span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#1C2836"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="opacity-60"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="16" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                  </svg>
                </button>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-[5px] w-full">
              {[
                { label: "High ROI" },
                { label: "80%+ Ready" },
                { label: "Ready to Move" },
              ].map((chip) => (
                <button
                  key={chip.label}
                  className="flex items-center justify-center w-full max-w-[253px] xl:w-[253px] h-[40px] rounded-[6px] bg-[#FFFFFF] border border-[#9E9E9E] hover:bg-zinc-50 transition-colors gap-[5px] flex-1"
                >
                  <span className="flex items-center gap-[5px] font-['Inter'] font-[600] text-[12px] xl:text-[14px] leading-[100%] text-[#1C2836]">

                    {chip.label === "80%+ Ready" && (
                      <img
                        src="/thumbs-up-trust.png"
                        alt="thumbs-up-trust"
                        className="w-[16px] xl:w-[20px] h-[16px] xl:h-[20px]"
                      />
                    )}

                    {chip.label === "Ready to Move" && (
                      <img
                        src="/verified.png"
                        alt="verified"
                        className="w-[16px] xl:w-[20px] h-[16px] xl:h-[20px]"
                      />
                    )}

                    {chip.label}
                  </span>

                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#1C2836"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="opacity-60"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="16" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                  </svg>
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>

      <div className="relative z-20 text-[#1C2836] w-full flex flex-col gap-[44px] overflow-visible">

        <section className="relative flex flex-col items-center mt-20 xl:mt-0 pt-10">
          <div className="w-full xl:w-[1160px] relative mb-[16px] px-4 xl:px-0">
            <div className="flex flex-col md:flex-row justify-between md:items-end mb-4 gap-4">
              <div>
                <h2 className="font-['Inter'] font-[700] text-[24px] xl:text-[28px] leading-[1.2] xl:leading-[100%] text-[#1C2836] mb-3">
                  Featured Properties
                </h2>
                <p className="font-['Inter'] font-[600] text-[14px] xl:text-[16px] leading-[1.4] xl:leading-[100%] text-[#475661]">
                  Verified Properties. Better Deals.
                </p>
              </div>
              <Link href="/properties" className="text-[#006AFF] font-bold text-[14px] xl:text-[16px] flex items-center gap-1.5 hover:opacity-80 transition-opacity">
                View All Properties <span className="text-[20px]">→</span>
              </Link>
            </div>

            <div className="relative w-full xl:w-[1160px] overflow-visible">

              <button
                onClick={scrollLeft}
                className="hidden xl:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-[56px] h-[56px] bg-white rounded-full items-center justify-center shadow-[0_8px_30px_rgba(0,0,0,0.12)] z-50 hover:scale-105 border border-zinc-100"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <div
                ref={sliderRef}
                className="flex gap-[25px] overflow-x-auto overflow-y-visible scroll-smooth [&::-webkit-scrollbar]:hidden w-full h-full pb-[20px]"
              >
                {[
                  { price: "₹1.8 Cr - 2.2 Cr", desc: "3 BHK Flat | 1450 sqft | East Facing", avg: "Avg. Price: ₹8.05 K/sq.ft", loc: "Serilingampally, Hyderabad", image: "/f1.jpg" },
                  { price: "₹1.6 Cr - 2.0 Cr", desc: "3 BHK Flat | 1450 sqft | East Facing", avg: "Avg. Price: ₹8.05 K/sq.ft", loc: "Serilingampally, Hyderabad", image: "/f2.jpg" },
                  { price: "₹80 L - 1.2 Cr", desc: "2 BHK Flat | 1150 sqft | East Facing", avg: "Avg. Price: ₹8.05 K/sq.ft", loc: "Kondapur, Hyderabad", image: "/f3.jpg" },
                  { price: "₹90 L - 1.3 Cr", desc: "2 BHK Flat | 1250 sqft | East Facing", avg: "Avg. Price: ₹8.05 K/sq.ft", loc: "Manikonda, Hyderabad", image: "/f4.jpg" },
                  { price: "₹1.6 Cr - 2.5 Cr", desc: "3 BHK Flat | 1600 sqft | East Facing", avg: "Avg. Price: ₹9.15 K/sq.ft", loc: "Hitech City, Hyderabad", image: "/f2.jpg" }
                ].map((prop, j) => (
                  <div
                    key={j}
                    className="flex-shrink-0 w-[280px] xl:w-[330px] h-auto min-h-[396px] bg-white rounded-[10px] shadow-[0px_4px_14px_rgba(0,0,0,0.2)] flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-[8px] hover:shadow-[0px_12px_24px_rgba(0,0,0,0.2)]"
                  >
                    <div className="relative h-[210px] w-full">
                      <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${prop.image})` }}
                      ></div>

                      <div className="absolute top-[12px] right-[12px]">
                        <button className="w-[40px] h-[40px] rounded-full bg-white/90 backdrop-blur flex items-center justify-center shadow-md hover:scale-105 transition">
                          <svg className="w-5 h-5 text-zinc-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                        </button>
                      </div>
                    </div>

                    <div className="p-[20px] flex flex-col flex-1 gap-[6px]">
                      <h4 className="font-['Inter'] font-[700] text-[20px] text-[#1C2836] mb-[4px]">
                        {prop.price}
                      </h4>

                      <p className="font-['Inter'] font-[500] text-[14px] text-[#1C2836]">
                        {prop.desc}
                      </p>

                      <p className="font-['Inter'] font-[400] text-[13px] text-[#475661]">
                        {prop.avg}
                      </p>

                      <p className="font-['Inter'] font-[400] text-[13px] text-[#475661] mb-[18px]">
                        {prop.loc}
                      </p>

                      <div className="mt-auto flex">
                        <button className="w-[127px] h-[39px] bg-[#007FE4] text-white rounded-[6px] px-[16px] py-[10px] text-[14px] font-[500] leading-[100%] tracking-[0%] flex items-center justify-center hover:bg-blue-600 transition-colors">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={scrollRight}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-[56px] h-[56px] bg-white rounded-full flex items-center justify-center shadow-[0_8px_30px_rgba(0,0,0,0.12)] z-50 hover:scale-105 border border-zinc-100"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>

            </div>
          </div>
        </section>

        <div className="-mt-[60px]">
          <DecisionsTools theme="light" />
        </div>
        <HowItWorks theme="light" />
        <ImpactStats theme="light" />
        <Programs theme="light" />

        <section className="pt-10 pb-0 bg-white relative flex flex-col items-center" style={{ marginBottom: 0 }}>
          <h2 className="w-full font-['Inter'] font-[700] text-[24px] xl:text-[28px] leading-[100%] tracking-[0%] text-[#1C2836] text-center mb-8">
            Explore Properties on Map
          </h2>
          <div className="relative w-full bg-zinc-200" style={{ height: '541px' }}>
            <div className="absolute inset-0 bg-[url('/image.png')] bg-cover bg-center"></div>
            <div className="absolute inset-0 bg-[#001751]/5 mix-blend-multiply pointer-events-none"></div>

            <div className="mx-auto w-full max-w-[1440px] relative h-full">
              {[
                { left: '246px', top: '126px' },
                { left: '140px', top: '380px' },
                { left: '420px', top: '280px' },
                { left: '620px', top: '480px' },
                { left: '910px', top: '230px' },
                { left: '840px', top: '410px' },
                { left: '1140px', top: '150px' },
                { left: '1200px', top: '400px' },
              ].map((pos, i) => (
                <div
                  key={i}
                  className="absolute flex flex-col items-center drop-shadow-xl hover:scale-105 transition-transform"
                  style={{ left: pos.left, top: pos.top, transform: 'translate(-50%, -100%)' }}
                >
                  <div className="w-[74px] h-[74px] rounded-full bg-[#E0F2FF] border-[4px] border-[#1C2836] shadow-inner flex items-center justify-center relative z-10">
                    <div className="w-[58px] h-[58px] rounded-full bg-white flex items-center justify-center">
                      <img src="/pin.png" alt="pin-logo" className="w-[48px] h-[48px] object-contain rounded-full" />
                    </div>
                  </div>
                  <div className="w-0 h-0 border-l-[12px] border-r-[12px] border-t-[18px] border-l-transparent border-r-transparent border-t-[#1C2836] -mt-[2px] z-0"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="border-t-2 border-[#1C2836] w-full" style={{ marginTop: '-44px' }}>
          <Footer theme="light" />
        </div>
      </div>
    </div>
  );
}
