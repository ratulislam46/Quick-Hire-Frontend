import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Eye, Trash2 } from "lucide-react";
import AddJobModal from './AddJobModal';

const Jobs = () => {
    const [jobs, setJobs] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [filterTitle, setFilterTitle] = useState('');
    const [filterCategory, setFilterCategory] = useState('All');

    // --- API Calls ---
    const fetchJobs = useCallback(async () => {
        try {
            const { data } = await axios.get(`http://localhost:5000/jobs?title=${filterTitle}&category=${filterCategory}`);
            setJobs(data);
        } catch (error) {
            console.error("Error fetching jobs:", error);
        }
    }, [filterTitle, filterCategory]);

    useEffect(() => {
        fetchJobs();
    }, [fetchJobs]);

    // --- Action Handlers ---
    const handleDelete = async (id) => {
        const result = await Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#4640DE",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        });

        if (result.isConfirmed) {
            try {
                const { data } = await axios.delete(`http://localhost:5000/jobs/${id}`);
                if (data.deletedCount > 0) {
                    Swal.fire("Deleted!", "The job has been deleted.", "success");
                    setJobs(prev => prev.filter(job => job._id !== id));
                }
            } catch (err) {
                Swal.fire("Error!", "Failed to delete the job.", "error");
            }
        }
    };

    const handleViewDetails = (job) => {
        Swal.fire({
            title: `<span class="text-[#4640DE] font-bold">${job.title}</span>`,
            html: `
                <div class="text-left space-y-3 p-4 border-t border-gray-100">
                    <p><strong>Company:</strong> ${job.company}</p>
                    <p><strong>Location:</strong> ${job.location}</p>
                    <p><strong>Category:</strong> ${job.category}</p>
                    <p><strong>Description:</strong> ${job.description || 'No description'}</p>
                    <p><small class="text-gray-400">Posted at: ${new Date(job.created_at).toLocaleString()}</small></p>
                </div>
            `,
            confirmButtonColor: '#4640DE',
            customClass: { popup: 'rounded-2xl shadow-xl' }
        });
    };

    // --- Sub-Render Components ---
    const renderFilters = () => (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <input
                type="text"
                placeholder="Search by job title..."
                className="w-full p-3.5 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-[#4640DE] bg-white shadow-sm transition-all"
                onChange={(e) => setFilterTitle(e.target.value)}
            />
            <select
                className="w-full p-3.5 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-[#4640DE] bg-white shadow-sm cursor-pointer"
                onChange={(e) => setFilterCategory(e.target.value)}
            >
                <option value="All">All Categories</option>
                <option value="Design">Design</option>
                <option value="Development">Development</option>
                <option value="Marketing">Marketing</option>
                <option value="Business">Business</option>
            </select>
        </div>
    );

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 min-h-screen bg-gray-50">
            {/* Header */}
            <header className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
                <h1 className="text-3xl font-bold text-gray-800 tracking-tight">Manage Jobs</h1>
                <button 
                    onClick={() => setIsModalOpen(true)} 
                    className="w-full sm:w-auto bg-[#4640DE] hover:bg-[#3b36bc] text-white px-8 py-3 rounded-xl font-semibold shadow-lg transition-all active:scale-95"
                >
                    + Add New Job
                </button>
            </header>

            {renderFilters()}

            {/* Table */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-gray-50 border-b border-gray-100">
                            <tr>
                                <th className="p-5 text-sm font-semibold text-gray-600">Job Title</th>
                                <th className="p-5 text-sm font-semibold text-gray-600">Category</th>
                                <th className="p-5 text-sm font-semibold text-gray-600">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {jobs?.map((job) => (
                                <tr key={job._id} className="hover:bg-gray-50 transition-colors">
                                    <td className="p-5 font-bold text-gray-800">{job.title}</td>
                                    <td className="p-5">
                                        <span className="bg-indigo-50 text-[#4640DE] px-3 py-1 rounded-full text-xs font-bold uppercase">
                                            {job.category}
                                        </span>
                                    </td>
                                    <td className="p-5">
                                        <div className="flex gap-3">
                                            <button onClick={() => handleViewDetails(job)} className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all">
                                                <Eye size={18} />
                                            </button>
                                            <button onClick={() => handleDelete(job._id)} className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-600 hover:text-white transition-all">
                                                <Trash2 size={18} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <AddJobModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} refreshJobs={fetchJobs} />
        </div>
    );
};

export default Jobs;