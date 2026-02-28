import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddJobModal from './AddJobModal';

const Jobs = () => {
    const [jobs, setJobs] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [filterTitle, setFilterTitle] = useState('');
    const [filterCategory, setFilterCategory] = useState('All');

    const fetchJobs = async () => {
        const res = await axios.get(`http://localhost:5000/jobs?title=${filterTitle}&category=${filterCategory}`);
        setJobs(res.data);
    };

    useEffect(() => {
        fetchJobs();
    }, [filterTitle, filterCategory]);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 min-h-screen">

            {/* Header section with Title and Add Button */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
                <h1 className="text-3xl font-bold text-gray-800 tracking-tight">Manage Jobs</h1>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="w-full sm:w-auto bg-[#4640DE] hover:bg-[#3b36bc] text-white px-8 py-3 rounded-xl font-semibold shadow-lg transition-all active:scale-95 hover:cursor-pointer"
                >
                    + Add New Job
                </button>
            </div>

            {/* Filter Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="w-full">
                    <input
                        type="text"
                        placeholder="Search by job title..."
                        className="w-full p-3.5 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-[#4640DE] bg-white shadow-sm transition-all"
                        onChange={(e) => setFilterTitle(e.target.value)}
                    />
                </div>
                <div className="w-full">
                    <select
                        className="w-full p-3.5 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-[#4640DE] bg-white shadow-sm transition-all cursor-pointer"
                        onChange={(e) => setFilterCategory(e.target.value)}
                    >
                        <option value="All">All Categories</option>
                        <option value="Design">Design</option>
                        <option value="Development">Development</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Business">Business</option>
                    </select>
                </div>
            </div>

            {/* Jobs Table */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-gray-50 border-b border-gray-100">
                            <tr>
                                <th className="p-5 text-sm font-semibold text-gray-600">Job Title</th>
                                <th className="p-5 text-sm font-semibold text-gray-600">Category</th>
                                <th className="p-5 text-sm font-semibold text-gray-600">Location</th>
                                <th className="p-5 text-sm font-semibold text-gray-600">Posted Date</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {jobs?.map(job => (
                                <tr key={job._id}>
                                    <td className="p-5 font-bold text-gray-800">{job?.title}</td>
                                    <td className="p-5">
                                        <span className="bg-indigo-50 text-[#4640DE] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                            {job?.category}
                                        </span>
                                    </td>
                                    <td className="p-5 text-gray-600 font-medium">{job?.location}</td>
                                    <td className="p-5 text-gray-500 text-sm">
                                        {new Date(job.created_at).toLocaleDateString('en-GB', {
                                            day: '2-digit',
                                            month: 'short',
                                            year: 'numeric'
                                        })}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Empty State */}
                {jobs?.length === 0 && (
                    <div className="p-20 text-center text-gray-400">
                        No jobs found matching your criteria.
                    </div>
                )}
            </div>

            {/* Modal Component */}
            <AddJobModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                refreshJobs={fetchJobs}
            />
        </div>
    );
};

export default Jobs;