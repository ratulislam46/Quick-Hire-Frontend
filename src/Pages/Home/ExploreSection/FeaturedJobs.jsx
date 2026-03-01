import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

const FeaturedJobs = () => {
    
    const jobs = [
    {
        id: 1,
        title: "Email Marketing",
        company: "Revolut",
        location: "Madrid, Spain",
        type: "Full-time",
        categories: ["Marketing", "Design"],
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Revolut_App_Logo.png/600px-Revolut_App_Logo.png" 
    },
    {
        id: 2,
        title: "Brand Designer",
        company: "Dropbox",
        location: "San Francisco, USA",
        type: "Full-time",
        categories: ["Design", "Business"],
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Dropbox_Icon.svg/1200px-Dropbox_Icon.svg.png"
    },
    {
        id: 3,
        title: "Email Marketing",
        company: "Pitch",
        location: "Berlin, Germany",
        type: "Full-time",
        categories: ["Marketing"],
        logo: "https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/fip8n6p6u8x7g6p8k6b1"
    },
    {
        id: 4,
        title: "Visual Designer",
        company: "Bungalow",
        location: "Remote",
        type: "Full-time",
        categories: ["Design"],
        logo: "https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/v1508248554/uovmxl2f7yv9qxh0w4v4.png"
    },
    {
        id: 5,
        title: "Product Designer",
        company: "ClassPass",
        location: "New York, USA",
        type: "Full-time",
        categories: ["Marketing", "Design"],
        logo: "https://upload.wikimedia.org/wikipedia/commons/1/1d/ClassPass_logo.png"
    },
    {
        id: 6,
        title: "Lead Designer",
        company: "Canva",
        location: "Australia",
        type: "Full-time",
        categories: ["Design", "Business"],
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Canva_Logo.png/600px-Canva_Logo.png"
    }
];

    return (
        <section className="max-w-7xl mx-auto px-6 py-16">
            {/* Header */}
            <div className="flex justify-between items-end mb-10">
                <div>
                    <h2 className="text-4xl md:text-5xl font-black text-[#18191C]">
                        Featured <span className="text-[#00A3FF]">jobs</span>
                    </h2>
                </div>
                <Link to="/find-jobs" className="text-[#4640DE] font-bold flex items-center gap-2 group hover:underline decoration-2 underline-offset-4">
                    Show all jobs <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>

            {/* Jobs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {jobs?.map((job) => (
                    <div
                        key={job.id}
                        className="group p-6 bg-white border border-gray-200 hover:border-indigo-100 hover:shadow-md transition-all duration-300"
                    >
                        <div className="flex items-start gap-4">
                            {/* Company Logo */}
                            <div className="w-12 h-12 shrink-0 bg-gray-50 rounded-sm overflow-hidden p-1 border border-gray-50">
                                <img src={job?.logo} alt={job?.company} className="w-full h-full object-contain" />
                            </div>

                            {/* Job Details */}
                            <div className="flex-1">
                                <div className="flex justify-between items-start">
                                    <h3 className="text-lg md:text-xl font-bold text-[#18191C] group-hover:text-[#4640DE] transition-colors">
                                        {job?.title}
                                    </h3>
                                    <span className="hidden md:inline-block px-3 py-1 border border-[#4640DE] text-[#4640DE] text-xs font-semibold">
                                        {job?.type}
                                    </span>
                                </div>

                                <div className="flex items-center gap-2 text-[#7C8493] text-sm mt-1">
                                    <span className="font-medium">{job?.company}</span>
                                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                    <span className="flex items-center gap-1"><MapPin size={14} /> {job?.location}</span>
                                </div>

                                {/* Categories & Mobile Type */}
                                <div className="mt-4 flex flex-wrap items-center gap-2">
                                    <span className="md:hidden px-3 py-1 bg-indigo-50 text-[#4640DE] text-[10px] font-bold rounded-full">
                                        {job?.type}
                                    </span>
                                    {job?.categories?.map((cat, i) => (
                                        <span
                                            key={i}
                                            className={`px-3 py-1 text-[10px] font-bold rounded-full border 
                                                ${i === 0 ? 'bg-orange-50 text-orange-600 border-orange-100' :
                                                    i === 1 ? 'bg-indigo-50 text-indigo-600 border-indigo-100' :
                                                        'bg-green-50 text-green-600 border-green-100'}`}
                                        >
                                            {cat}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturedJobs;