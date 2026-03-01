import { useEffect, useState } from "react";
import { MapPin, Building2, Briefcase, Calendar, ChevronRight, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import axios from "axios";

const FindJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const res = await axios.get("http://localhost:5000/jobs");
                setJobs(res.data);
            } catch (err) {
                console.error("Error fetching jobs:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchJobs();
    }, []);

    if (loading) {
        return (
            <div className="flex flex-col justify-center items-center min-h-[60vh] gap-3">
                <Loader2 className="animate-spin text-indigo-600" size={40} />
                <p className="text-gray-500 font-medium tracking-wide">Finding best opportunities...</p>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="mb-10 text-center md:text-left">
                <h1 className="text-4xl font-black text-gray-900 tracking-tight">Explore Jobs</h1>
                <p className="text-gray-500 mt-2">Discover your next career move from {jobs.length} open roles</p>
            </div>

            {/* Job Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {jobs.map((job) => (
                    <div key={job._id} className="group bg-white rounded-3xl p-6 border border-gray-100 shadow-xl shadow-gray-100/50 hover:shadow-indigo-100 hover:border-indigo-100 transition-all duration-300 flex flex-col justify-between">
                        <div>
                            {/* Header: Category & Date */}
                            <div className="flex justify-between items-start mb-4">
                                <span className="px-3 py-1 bg-indigo-50 text-indigo-600 text-[10px] font-bold uppercase tracking-widest rounded-lg border border-indigo-100">
                                    {job.category}
                                </span>
                                <span className="text-[10px] text-gray-400 font-medium flex items-center gap-1">
                                    <Calendar size={12} /> {new Date(job.created_at).toLocaleDateString()}
                                </span>
                            </div>

                            {/* Title & Company */}
                            <h2 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                                {job.title}
                            </h2>
                            <div className="flex items-center gap-2 text-gray-500 mt-2 text-sm">
                                <Building2 size={16} className="text-gray-400" />
                                <span className="font-semibold">{job.company}</span>
                            </div>

                            {/* Location */}
                            <div className="flex items-center gap-2 text-gray-400 mt-1 text-xs">
                                <MapPin size={14} />
                                <span>{job.location}</span>
                            </div>

                            {/* Description (Shortened) */}
                            <p className="mt-5 text-gray-600 text-sm leading-relaxed line-clamp-2">
                                {job.description}
                            </p>
                        </div>

                        {/* Action Button */}
                        <div className="mt-6 pt-5 border-t border-gray-50">
                            <Link 
                                to={`/find-jobs/${job._id}`}
                                className="w-full flex items-center justify-center gap-2 bg-gray-900 hover:bg-indigo-600 text-white py-3 rounded-2xl font-bold text-sm transition-all active:scale-95 group-hover:shadow-lg group-hover:shadow-indigo-200"
                            >
                                Job Details <ChevronRight size={16} />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FindJobs;