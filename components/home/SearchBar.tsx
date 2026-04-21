"use client";

import React, { useState } from 'react';
import Button from '../ui/Button';

const SearchBar = () => {
  const [activeTab, setActiveTab] = useState<'Buy' | 'Rent'>('Buy');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <div className="container-custom relative z-20 -translate-y-1/2 -mb-8 lg:-mb-12">
      <div className="bg-white rounded-3xl lg:rounded-full shadow-2xl p-4 lg:p-2 border border-zinc-100 flex flex-col lg:flex-row items-center gap-2">
        {/* Buy/Rent Toggle Dropdown */}
        <div className="relative w-full lg:w-48 shrink-0">
          <button 
            onClick={toggleDropdown}
            className="w-full h-12 lg:h-16 rounded-full bg-slate-50 border border-zinc-200 flex items-center justify-between px-6 lg:px-8 cursor-pointer hover:bg-slate-100 transition-all group"
            aria-haspopup="listbox"
            aria-expanded={isDropdownOpen}
          >
            <span className="font-extrabold text-secondary tracking-tight">{activeTab}</span>
            <svg 
              className={`w-5 h-5 text-text-muted group-hover:text-secondary transition-all ${isDropdownOpen ? 'rotate-180' : ''}`} 
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute top-full left-0 w-full mt-3 bg-white rounded-2xl shadow-2xl border border-zinc-100 py-2 z-50 overflow-hidden animate-in fade-in slide-in-from-top-2">
              {(['Buy', 'Rent'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    setIsDropdownOpen(false);
                  }}
                  className={`w-full text-left px-8 py-4 font-bold transition-colors ${
                    activeTab === tab ? 'text-primary bg-primary/5' : 'text-secondary hover:bg-slate-50'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Search Input */}
        <div className="flex-1 w-full h-12 lg:h-16 rounded-full bg-slate-50 border border-zinc-200 flex items-center px-4 lg:px-8 focus-within:border-primary focus-within:ring-4 focus-within:ring-primary/10 transition-all">
          <svg className="w-5 h-5 text-text-muted mr-2 lg:mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search Area, City, or Projects..."
            className="flex-1 bg-transparent outline-none font-semibold text-secondary placeholder:text-text-muted/50 text-sm lg:text-lg min-w-0"
          />
        </div>

        {/* Search Button */} 
        <Button variant="primary" className="w-full lg:w-fit h-12 lg:h-16 px-6 lg:px-10 rounded-full flex items-center justify-center shrink-0 font-extrabold text-base lg:text-lg shadow-xl shadow-primary/30">
          Search
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;

