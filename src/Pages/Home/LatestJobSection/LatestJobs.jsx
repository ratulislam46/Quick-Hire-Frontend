import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';

const LatestJobs = () => {

    const jobs = [
        {
            id: 1,
            title: "Social Media Assistant",
            company: "Nomad",
            location: "Paris, France",
            type: "Full-Time",
            categories: ["Marketing", "Design"],
            logo: "/Images/Nomad.png"
        },
        {
            id: 2,
            title: "Social Media Assistant",
            company: "Netlify",
            location: "Paris, France",
            type: "Full-Time",
            categories: ["Marketing", "Design"],
            logo: "/Images/Netlify.png"
        },
        {
            id: 3,
            title: "Brand Designer",
            company: "Dropbox",
            location: "San Fransisco, USA",
            type: "Full-Time",
            categories: ["Marketing", "Design"],
            logo: "/Images/Dropbox.png"
        },
        {
            id: 4,
            title: "Brand Designer",
            company: "Maze",
            location: "San Fransisco, USA",
            type: "Full-Time",
            categories: ["Marketing", "Design"],
            logo: "/Images/Maze.png"
        },
        {
            id: 5,
            title: "Interactive Developer",
            company: "Terraform",
            location: "Hamburg, Germany",
            type: "Full-Time",
            categories: ["Marketing", "Design"],
            logo: "/Images/Terraform.png"
        },
        {
            id: 6,
            title: "Interactive Developer",
            company: "Udacity",
            location: "Hamburg, Germany",
            type: "Full-Time",
            categories: ["Marketing", "Design"],
            logo: "/Images/Udacity.png"
        },
        {
            id: 7,
            title: "HR Manager",
            company: "Packer",
            location: "Lucern, Switzerland",
            type: "Full-Time",
            categories: ["Marketing", "Design"],
            logo: "/Images/Packer.png"
        },
        {
            id: 8,
            title: "HR Manager",
            company: "Webflow",
            location: "Lucern, Switzerland",
            type: "Full-Time",
            categories: ["Marketing", "Design"],
            logo: "/Images/Webflow.png"
        },
    ];

    return (
        <motion.section
            className="py-20 bg-no-repeat bg-cover bg-center overflow-hidden"
            style={{ backgroundImage: "url('/Images/job-bg.png')" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <motion.div 
                    className="flex justify-between items-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <motion.h2 
                        className="text-3xl md:text-5xl font-black text-[#18191C] tracking-tight"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        Latest <span className="text-[#00A3FF]">jobs open</span>
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <Link to="/find-jobs" className="text-[#4640DE] font-bold flex items-center gap-2 group hover:underline decoration-2 underline-offset-4">
                            Show all jobs <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Jobs Grid */}
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.2
                            }
                        }
                    }}
                >
                    {jobs.map((job) => (
                        <motion.div
                            key={job.id}
                            variants={{
                                hidden: { opacity: 0, y: 40 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            transition={{ duration: 0.6 }}
                            whileHover={{ 
                                y: -10, 
                                scale: 1.02,
                                transition: { duration: 0.3 } 
                            }}
                            className="bg-white/90 backdrop-blur-sm p-6 md:p-8 flex items-start gap-5 border border-white hover:border-[#4640DE]/30 hover:shadow-2xl hover:shadow-indigo-100/50 transition-all duration-300"
                        >
                            {/* Logo */}
                            <motion.div 
                                className="w-14 h-14 md:w-16 md:h-16 flex-shrink-0 bg-white p-2 border border-gray-50 flex items-center justify-center"
                                whileHover={{ scale: 1.15, rotate: 5 }}
                                transition={{ duration: 0.3 }}
                            >
                                <img
                                    src={job.logo}
                                    alt={job.company}
                                    className="w-full h-full object-contain"
                                />
                            </motion.div>

                            {/* Content */}
                            <div className="flex-1">
                                <motion.h3 
                                    className="text-xl font-bold text-[#18191C] group-hover:text-[#4640DE]"
                                    whileHover={{ x: 8 }}
                                >
                                    {job.title}
                                </motion.h3>
                                <div className="flex items-center gap-2 text-[#7C8493] text-sm mt-1">
                                    <span>{job.company}</span>
                                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                    <span>{job.location}</span>
                                </div>

                                {/* Badges */}
                                <div className="mt-5 flex flex-wrap items-center gap-2">
                                    <motion.span 
                                        className="px-3 py-1 bg-[#56CDAD]/10 text-[#56CDAD] text-[11px] font-bold rounded-full border border-[#56CDAD]/20"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {job.type}
                                    </motion.span>
                                    <div className="w-[1px] h-4 bg-gray-200 mx-1 hidden sm:block"></div>
                                    <motion.span 
                                        className="px-3 py-1 text-[#FFB836] border border-[#FFB836] text-[11px] font-bold rounded-full"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        Marketing
                                    </motion.span>
                                    <motion.span 
                                        className="px-3 py-1 text-[#4640DE] border border-[#4640DE] text-[11px] font-bold rounded-full"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        Design
                                    </motion.span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
};

export default LatestJobs;