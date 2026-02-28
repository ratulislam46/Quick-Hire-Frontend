import React from 'react';
import { Facebook, Instagram, Globe, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#18191C] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/*  Brand & Description */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 cursor-pointer">
              <img src="/Images/logo.png" alt="logo" />
              <span className="text-xl font-bold tracking-tight">QuickHire</span>
            </div>
            <p className="text-[#A8ADB7] text-sm leading-relaxed max-w-xs">
              Great platform for the job seeker that passionate about startups. Find your dream job easier.
            </p>
          </div>

          {/* About Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">About</h3>
            <ul className="space-y-4 text-[#A8ADB7] text-sm font-medium">
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Companies</a></li>
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Terms</a></li>
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Advice</a></li>
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Resources</h3>
            <ul className="space-y-4 text-[#A8ADB7] text-sm font-medium">
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Help Docs</a></li>
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Updates</a></li>
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Contact Us</a></li>
            </ul>
          </div>

          {/*  Newsletter Section */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold">Get job notifications</h3>
            <p className="text-[#A8ADB7] text-sm leading-relaxed">
              The latest job news, articles, sent to your inbox weekly.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-white text-gray-900 px-4 py-3 outline-none flex-1 min-w-0"
              />
              <button className="bg-[#4640DE] text-white px-6 py-3 font-bold hover:bg-[#3b36bc] transition-all whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[#A8ADB7] text-sm font-medium order-2 md:order-1">
            2021 © QuickHire. All rights reserved.
          </p>
          
          {/* Social Icons */}
          <div className="flex items-center gap-4 order-1 md:order-2">
            {[Facebook, Instagram, Globe, Linkedin, Twitter].map((Icon, index) => (
              <a 
                key={index} 
                href="#" 
                className="w-9 h-9 bg-gray-800/50 rounded-full flex items-center justify-center text-white hover:bg-[#4640DE] transition-all cursor-pointer"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;