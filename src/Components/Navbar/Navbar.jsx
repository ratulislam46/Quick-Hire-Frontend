import React, { useContext, useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { AuthContext } from '../../Context/AuthProvider';
import axios from 'axios';
import { Link } from 'react-router';
import toast from 'react-hot-toast';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dbUser, setDbUser] = useState(null);
  const { user, LogOut } = useContext(AuthContext);

  useEffect(() => {
    if (user?.email) {
      axios.get(`https://quick-hire-backend-rho.vercel.app/users/email/${user.email}`)
        .then(res => {
          setDbUser(res.data);
        })
        .catch(err => {
          console.error("Error fetching user data:", err);
        });
    } else {
      setDbUser(null);
    }
  }, [user?.email]);

  const handleLogOut = () => {
    LogOut()
      .then(result => {
        console.log('successfully logout', result);
        toast.success('Successfully Logout');
      })
      .catch(error => {
        console.log(error);
      })
  }

  const NavLinks = (
    <>
      <a href="/" className="text-[#515B6F] hover:text-[#4640DE] font-medium transition-colors cursor-pointer">Home</a>
      <a href="/find-jobs" className="text-[#515B6F] hover:text-[#4640DE] font-medium transition-colors cursor-pointer">Find Jobs</a>

      {user && dbUser?.role === 'admin' && (
        <a href="/jobs-listing" className="text-[#515B6F] hover:text-[#4640DE] font-medium transition-colors cursor-pointer">
          Job listings
        </a>
      )}

      {user &&
        <>
          <a href="/profile" className="text-[#515B6F] hover:text-[#4640DE] font-medium transition-colors cursor-pointer">
            Profile
          </a>
        </>
      }

    </>
  );

  return (
    <nav className="bg-[#F8F9FF] border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-18 items-center">

          {/* Logo & Navigation Links */}
          <div className="flex items-center gap-12">
            <a href="/" className="flex items-center gap-2 cursor-pointer group">
              <img src="/Images/logo.png" alt="logo" />
              <span className="text-xl font-bold text-[#18191C] tracking-tight">QuickHire</span>
            </a>

            <div className="hidden md:flex items-center space-x-8">
              {NavLinks}
            </div>
          </div>

          {/* Right: Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <Link
                onClick={handleLogOut}
                to="/login"
                className="font-bold px-6 py-3 transition-all cursor-pointer bg-[#4640DE] text-white hover:cursor-pointer" >
                Log out
              </Link>
            ) : (
              <>
                <a href="/login" className="text-[#4640DE] font-bold px-6 py-2 hover:opacity-70 transition-all cursor-pointer hover:cursor-pointer">
                  Login
                </a>

                <div className="w-px h-6 bg-gray-200"></div>

                <a href="/register" className="bg-[#4640DE] text-white px-6 py-3 font-bold hover:bg-[#3b36bc] transition-all cursor-pointer shadow-md active:scale-95  hover:cursor-pointer">
                  Sign Up
                </a>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 bg-white rounded-full shadow-sm border border-gray-100 focus:outline-none cursor-pointer"
            >
              {isOpen ? <X className="w-6 h-6 text-[#18191C]" /> : <Menu className="w-6 h-6 text-[#18191C]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 py-6 px-4 space-y-4 shadow-xl">
          <div className="flex flex-col space-y-3">
            {NavLinks}
          </div>
          <hr className="border-gray-100" />
          {!user && (
            <div className="flex flex-col gap-3 pt-2">
              <a href="/login" className="w-full text-center text-[#4640DE] font-bold py-3 border border-[#4640DE] rounded-md">Login</a>
              <a href="/register" className="w-full text-center bg-[#4640DE] text-white py-3 font-bold rounded-md">Sign Up</a>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;