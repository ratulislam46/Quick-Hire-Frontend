import React from 'react';
import { Search, MapPin, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative bg-[#F8F9FF] py-12 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row items-center">

          {/* Left Content */}
          <motion.div 
            className="w-full lg:w-3/5 text-left space-y-8 z-20"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="space-y-4">
              <motion.h1 
                className="text-[40px] md:text-[64px] font-bold text-[#18191C] leading-[1.1] tracking-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Discover <br />
                more than <br />
                <span className="relative inline-block text-[#2161FF]">
                  5000+ Jobs
                  {/* Blue Scribble Underline */}
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 358 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <motion.path 
                      d="M3 9C118.333 3.33333 353 -1 355 9" 
                      stroke="#2161FF" 
                      strokeWidth="6" 
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1, delay: 1 }}
                    />
                  </svg>
                </span>
              </motion.h1>

              <motion.p 
                className="text-gray-500 text-lg md:text-xl max-w-md font-medium leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Great platform for the job seeker that searching for new career heights and passionate about startups.
              </motion.p>
            </div>

            {/* Search Bar Container - Overlapping Layout */}
            <motion.div 
              className="relative bg-white p-2 shadow-[0_32px_64px_-15px_rgba(0,0,0,0.1)] flex flex-col md:flex-row items-stretch md:items-center gap-2 w-full lg:w-[125%] z-30 border border-gray-50"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {/* Job Title Input */}
              <motion.div 
                className="flex-1 flex items-center px-4 py-3 gap-3 border-b md:border-b-0 md:border-r border-gray-100"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <Search className="text-gray-900 w-5 h-5 shrink-0" />
                <input
                  type="text"
                  placeholder="Job title or keyword"
                  className="w-full focus:outline-none text-[#18191C] bg-transparent placeholder:text-gray-400 font-medium"
                />
              </motion.div>

              {/* Location Input */}
              <motion.div 
                className="flex-1 flex items-center px-4 py-3 gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                <MapPin className="text-gray-900 w-5 h-5 shrink-0" />
                <div className="flex items-center justify-between w-full">
                  <input
                    type="text"
                    placeholder="Florence, Italy"
                    className="w-full focus:outline-none text-[#18191C] bg-transparent placeholder:text-gray-400 font-medium"
                  />
                  <ChevronDown className="text-gray-400 w-4 h-4" />
                </div>
              </motion.div>

              {/* Search Button */}
              <motion.button 
                className="bg-[#4640DE] text-white px-10 py-4 font-bold hover:bg-[#3b36bc] transition-all whitespace-nowrap"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Search my job
              </motion.button>
            </motion.div>

            {/* Popular Tags */}
            <motion.p 
              className="text-sm text-gray-500 mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <span className="opacity-60 font-medium">Popular : </span>
              <span className="text-[#18191C] font-semibold">UI Designer, UX Researcher, Android, Admin</span>
            </motion.p>
          </motion.div>

          {/* Right Content: Image with Background Pattern */}
          <motion.div 
            className="hidden lg:block lg:w-2/5 relative z-10"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative translate-x-10">
              {/* Main Banner Image */}
              <motion.img
                src="/Images/banner.png"
                alt="Professional Man"
                className="relative z-10 w-full h-auto object-contain scale-110"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1.1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              />

              {/* Pattern Background Image */}
              <motion.div 
                className="absolute top-1/2 left-1/5 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[140%] -z-10 pointer-events-none"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 1 }}
              >
                <img
                  src="/Images/Pattern.png"
                  alt=""
                  className="w-full h-full object-contain"
                />
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;