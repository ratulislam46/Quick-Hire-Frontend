import React, { useState } from 'react';
import { Menu, X, Briefcase } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo Section */}
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-1.5 rounded-lg">
              <Briefcase className="text-white w-6 h-6" />
            </div>
            <span className="text-xl font-bold text-gray-900 tracking-tight">QuickHire</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Find Jobs</a>
            <a href="/categories" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Categories</a>
            <a href="/admin" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Post a Job</a>
            <button className="bg-blue-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-blue-700 transition-all shadow-sm">
              Sign In
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 focus:outline-none">
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 py-4 px-4 space-y-3 shadow-lg">
          <a href="/" className="block text-gray-600 py-2 font-medium">Find Jobs</a>
          <a href="/categories" className="block text-gray-600 py-2 font-medium">Categories</a>
          <a href="/admin" className="block text-gray-600 py-2 font-medium">Post a Job</a>
          <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold mt-2">
            Sign In
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;