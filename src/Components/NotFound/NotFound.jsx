import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search } from 'lucide-react';

const NotFound = () => {
    return (
        <div className="min-h-screen bg-white flex items-center justify-center px-6 py-24">
            <div className="text-center max-w-2xl">
                {/* Visual Illustration Area */}
                <div className="relative mb-8">
                    <h1 className="text-[150px] md:text-[200px] font-black text-indigo-50 leading-none select-none">
                        404
                    </h1>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-white p-4 rounded-full shadow-2xl shadow-indigo-100 border border-indigo-50">
                            <Search size={48} className="text-indigo-600 animate-bounce" />
                        </div>
                    </div>
                </div>

                {/* Text Content */}
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Oops! Page not found
                </h2>
                <p className="text-gray-500 text-lg mb-10 max-w-md mx-auto leading-relaxed">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        to="/"
                        className="w-full sm:w-auto flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg shadow-indigo-100 transition-all active:scale-95"
                    >
                        <Home size={20} />
                        Back to Home
                    </Link>
                    
                    <button
                        onClick={() => window.history.back()}
                        className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white border-2 border-gray-100 hover:border-indigo-100 hover:bg-indigo-50/30 text-gray-600 font-bold py-4 px-8 rounded-xl transition-all active:scale-95"
                    >
                        <ArrowLeft size={20} />
                        Go Back
                    </button>
                </div>

                {/* Quick Links (Optional) */}
                <div className="mt-16 pt-8 border-t border-gray-50">
                    <p className="text-sm text-gray-400 mb-4">Try checking these instead:</p>
                    <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm font-semibold text-indigo-600">
                        <Link to="/find-jobs" className="hover:underline">Browse Jobs</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;