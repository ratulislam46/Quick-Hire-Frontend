import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#F8F9FF] border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-[72px] items-center">
          
          {/* Left: Logo & Navigation Links */}
          <div className="flex items-center gap-12">
            {/* Logo Section */}
            <a href="/" className="flex items-center gap-2 cursor-pointer group">
              <div className="w-8 h-8 bg-[#4640DE] rounded-full flex items-center justify-center group-hover:bg-[#3b36bc] transition-all">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
              <span className="text-xl font-bold text-[#18191C] tracking-tight">QuickHire</span>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-[#515B6F] hover:text-[#4640DE] font-medium transition-colors cursor-pointer">Find Jobs</a>
              <a href="/companies" className="text-[#515B6F] hover:text-[#4640DE] font-medium transition-colors cursor-pointer">Browse Companies</a>
            </div>
          </div>

          {/* Right: Auth Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="/login" 
              className="text-[#4640DE] font-bold px-6 py-2 hover:opacity-70 transition-all cursor-pointer"
            >
              Login
            </a>
            <div className="w-px h-6 bg-gray-200"></div>
            <a 
              href="/register" 
              className="bg-[#4640DE] text-white px-6 py-3 font-bold hover:bg-[#3b36bc] transition-all cursor-pointer shadow-md active:scale-95"
            >
              Sign Up
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 bg-white rounded-full shadow-sm border border-gray-100 focus:outline-none cursor-pointer hover:bg-gray-50 transition-all"
            >
              {isOpen ? <X className="w-6 h-6 text-[#18191C]" /> : <Menu className="w-6 h-6 text-[#18191C]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 py-6 px-4 space-y-4 shadow-xl animate-in fade-in slide-in-from-top-4">
          <a href="/" className="block text-[#515B6F] font-semibold text-lg py-2 cursor-pointer">Find Jobs</a>
          <a href="/companies" className="block text-[#515B6F] font-semibold text-lg py-2 cursor-pointer">Browse Companies</a>
          <hr className="border-gray-100" />
          <div className="flex flex-col gap-3 pt-2">
            <a 
              href="/login" 
              className="w-full text-center text-[#4640DE] font-bold py-3 border border-[#4640DE] rounded-md cursor-pointer hover:bg-blue-50"
            >
              Login
            </a>
            <a 
              href="/register" 
              className="w-full text-center bg-[#4640DE] text-white py-3 font-bold rounded-md cursor-pointer hover:bg-[#3b36bc]"
            >
              Sign Up
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;