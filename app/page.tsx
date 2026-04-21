"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/home/Hero";
import SearchBar from "@/components/home/SearchBar";
import PropertySlider from "@/components/home/PropertySlider";
import DecisionsTools from "@/components/home/DecisionsTools";
import HowItWorks from "@/components/home/HowItWorks";
import ImpactStats from "@/components/home/ImpactStats";
import Programs from "@/components/home/Programs";
import MapSection from "@/components/home/MapSection";
import BadgesSection from "@/components/home/BadgesSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    // Add dark/light class to body
    if (theme === "dark") {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === "dark" ? "light" : "dark");
  };

  return (
    <div className="relative min-h-screen bg-background transition-colors duration-500 overflow-x-hidden">
      <div className="relative">
        <Navbar />
        <Hero />
      </div>
      
      <main>
        <SearchBar />
        <PropertySlider />
        <DecisionsTools />
        <HowItWorks />
        <ImpactStats />
        <Programs />
        <BadgesSection />
        <MapSection />
      </main>

      <Footer />
    </div>
  );
}

