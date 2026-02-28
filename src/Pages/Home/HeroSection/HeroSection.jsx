import React from 'react';
import { Search, MapPin, ChevronDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-[#F8F9FF] py-12 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row items-center">
          
          {/* Left Content */}
          <div className="w-full lg:w-3/5 text-left space-y-8 z-20">
            <div className="space-y-4">
              <h1 className="text-[40px] md:text-[64px] font-bold text-[#18191C] leading-[1.1] tracking-tight">
                Discover <br />
                more than <br />
                <span className="relative inline-block text-[#2161FF]">
                  5000+ Jobs
                  {/* Blue Scribble Underline */}
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 358 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 9C118.333 3.33333 353 -1 355 9" stroke="#2161FF" strokeWidth="6" strokeLinecap="round"/>
                  </svg>
                </span>
              </h1>
              
              <p className="text-gray-500 text-lg md:text-xl max-w-md font-medium leading-relaxed">
                Great platform for the job seeker that searching for new career heights and passionate about startups.
              </p>
            </div>

            {/* Search Bar Container - Overlapping Layout */}
            <div className="relative bg-white p-2 shadow-[0_32px_64px_-15px_rgba(0,0,0,0.1)] flex flex-col md:flex-row items-stretch md:items-center gap-2 w-full lg:w-[125%] z-30 border border-gray-50">
              {/* Job Title Input */}
              <div className="flex-1 flex items-center px-4 py-3 gap-3 border-b md:border-b-0 md:border-r border-gray-100">
                <Search className="text-gray-900 w-5 h-5 shrink-0" />
                <input 
                  type="text" 
                  placeholder="Job title or keyword" 
                  className="w-full focus:outline-none text-[#18191C] bg-transparent placeholder:text-gray-400 font-medium"
                />
              </div>

              {/* Location Input */}
              <div className="flex-1 flex items-center px-4 py-3 gap-3">
                <MapPin className="text-gray-900 w-5 h-5 shrink-0" />
                <div className="flex items-center justify-between w-full">
                   <input 
                    type="text" 
                    placeholder="Florence, Italy" 
                    className="w-full focus:outline-none text-[#18191C] bg-transparent placeholder:text-gray-400 font-medium"
                  />
                  <ChevronDown className="text-gray-400 w-4 h-4" />
                </div>
              </div>

              {/* Search Button */}
              <button className="bg-[#4640DE] text-white px-10 py-4 font-bold hover:bg-[#3b36bc] transition-all whitespace-nowrap">
                Search my job
              </button>
            </div>

            {/* Popular Tags */}
            <p className="text-sm text-gray-500 mt-6">
              <span className="opacity-60 font-medium">Popular : </span>
              <span className="text-[#18191C] font-semibold">UI Designer, UX Researcher, Android, Admin</span>
            </p>
          </div>

          {/* Right Content: Image */}
          <div className="hidden lg:block lg:w-2/5 relative z-10">
            <div className="relative translate-x-10">
              <img 
                src="/Images/banner.png"
                alt="Professional Man" 
                className="w-full h-auto object-contain scale-110" 
              />
              
              {/* Decorative Background Pattern (Figma-র মতো গ্রিড বা লাইন) */}
              <div className="absolute top-0 right-0 -z-10 w-full h-full opacity-20">
                 <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="50" y="50" width="300" height="300" stroke="#4640DE" strokeWidth="1"/>
                    <rect x="80" y="80" width="300" height="300" stroke="#4640DE" strokeWidth="1"/>
                 </svg>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;