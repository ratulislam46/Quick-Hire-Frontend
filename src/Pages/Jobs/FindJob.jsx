import React from 'react';

const FindJob = () => {
    return (
        <div className="min-h-screen py-12 bg-gradient-to-b from-white to-[#4640DE]/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-[#4640DE] mb-4">Find Your Dream Job</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">Browse thousands of job opportunities tailored to your skills and interests</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Job Card 1 */}
                    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="text-xl font-bold text-gray-900">Frontend Developer</h3>
                                <p className="text-gray-600">Tech Innovations Inc.</p>
                            </div>
                            <span className="bg-[#4640DE]/10 text-[#4640DE] px-3 py-1 rounded-full text-sm font-medium">Remote</span>
                        </div>
                        <div className="flex items-center text-gray-600 mb-4">
                            <span>$80,000 - $100,000</span>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-6">
                            <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">React</span>
                            <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">JavaScript</span>
                            <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">CSS</span>
                        </div>
                        <button className="w-full bg-[#4640DE] text-white py-3 rounded-lg font-semibold hover:bg-secondary transition-colors">
                            Apply Now
                        </button>
                    </div>
                    
                    {/* Job Card 2 */}
                    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="text-xl font-bold text-gray-900">Backend Developer</h3>
                                <p className="text-gray-600">Data Systems Ltd.</p>
                            </div>
                            <span className="bg-[#4640DE]/10 text-[#4640DE] px-3 py-1 rounded-full text-sm font-medium">Hybrid</span>
                        </div>
                        <div className="flex items-center text-gray-600 mb-4">
                            <span>$90,000 - $120,000</span>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-6">
                            <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Node.js</span>
                            <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Python</span>
                            <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">MongoDB</span>
                        </div>
                        <button className="w-full bg-[#4640DE] text-white py-3 rounded-lg font-semibold hover:bg-secondary transition-colors">
                            Apply Now
                        </button>
                    </div>
                    
                    {/* Job Card 3 */}
                    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="text-xl font-bold text-gray-900">UX/UI Designer</h3>
                                <p className="text-gray-600">Creative Solutions</p>
                            </div>
                            <span className="bg-[#4640DE]/10 text-[#4640DE] px-3 py-1 rounded-full text-sm font-medium">Full-time</span>
                        </div>
                        <div className="flex items-center text-gray-600 mb-4">
                            <span>$75,000 - $95,000</span>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-6">
                            <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Figma</span>
                            <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Adobe XD</span>
                            <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Prototyping</span>
                        </div>
                        <button className="w-full bg-[#4640DE] text-white py-3 rounded-lg font-semibold hover:bg-secondary transition-colors">
                            Apply Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FindJob;