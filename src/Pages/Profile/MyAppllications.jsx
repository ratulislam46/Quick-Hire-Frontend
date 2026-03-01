import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Eye, Briefcase, Building2, Calendar } from 'lucide-react'; // icons use korle dekhte bhalo lage

const MyApplications = ({ userEmail }) => {
    const [applications, setApplications] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchApplications = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/job-applications?email=${userEmail}`);
                setApplications(res.data);
            } catch (error) {
                console.error("Error fetching applications:", error);
            } finally {
                setLoading(false);
            }
        };
        if (userEmail) fetchApplications();
    }, [userEmail]);

    const handleViewDetails = (app) => {
        Swal.fire({
            title: `<span>${app.job_details?.title || 'Job Application'}</span>`,
            html: `
                <div style="text-align: left; font-family: sans-serif; padding: 10px;">
                    <div style="margin-bottom: 12px; border-bottom: 1px solid #eee; padding-bottom: 8px;">
                        <p style="margin: 4px 0;"><strong>Company:</strong> ${app.job_details?.company || 'N/A'}</p>
                        <p style="margin: 4px 0;"><strong>Applied On:</strong> ${new Date(app.applied_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                    </div>
                    <p style="margin-bottom: 8px;"><strong>Cover Note:</strong></p>
                    <div style="background: #f9fafb; padding: 10px; border-radius: 8px; font-style: italic; color: #4b5563;">
                        "${app.cover_note || 'No cover note provided.'}"
                    </div>
                    <div style="margin-top: 15px; text-align: center;">
                        <a href="${app.resume_link}" target="_blank" 
                           style="background: #4f46e5; color: white; padding: 8px 20px; border-radius: 6px; text-decoration: none; display: inline-block;">
                           📄 View Resume
                        </a>
                    </div>
                </div>
            `,
            showCloseButton: true,
            confirmButtonText: 'Got it!',
            confirmButtonColor: '#4f46e5'
        });
    };

    if (loading) return (
        <div className="flex justify-center p-10">
            <span className="loading loading-dots loading-lg text-indigo-600"></span>
        </div>
    );

    return (
        <div className="mt-12 bg-white rounded-3xl border border-gray-200 shadow-xl shadow-indigo-50/50 overflow-hidden">
            {/* Header Section */}
            <div className="px-6 py-5 border-b border-gray-100 bg-gray-50/30 flex justify-between items-center">
                <div>
                    <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                        <Briefcase className="text-indigo-600" size={24} />
                        My Applications
                    </h2>
                    <p className="text-sm text-gray-500">Track all your job submissions in one place</p>
                </div>
                <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-bold">
                    {applications.length} Total
                </span>
            </div>

            {/* Content Section */}
            <div className="p-0 sm:p-4">
                {applications.length === 0 ? (
                    <div className="text-center py-12">
                        <p className="text-gray-400">You haven't applied for any jobs yet.</p>
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="text-gray-400 text-xs uppercase tracking-wider">
                                    <th className="px-6 py-4 font-bold">Job Info</th>
                                    <th className="px-6 py-4 font-bold hidden md:table-cell">Applied Date</th>
                                    <th className="px-6 py-4 font-bold text-right">Details</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {applications?.map((app) => (
                                    <tr key={app._id} className=" bg-gray-100 transition-colors group">
                                        <td className="px-6 py-4">
                                            <div className="flex flex-col">
                                                <span className="font-bold text-gray-800 group-hover:text-indigo-700 transition-colors">
                                                    {app.job_details?.title || "Position Name"}
                                                </span>
                                                <span className="text-sm text-gray-500 flex items-center gap-1">
                                                    <Building2 size={14} /> {app.job_details?.company || "N/A"}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 hidden md:table-cell">
                                            <div className="flex items-center gap-2 text-gray-600 text-sm">
                                                <Calendar size={14} />
                                                {new Date(app.applied_at).toLocaleDateString()}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <button 
                                                onClick={() => handleViewDetails(app)}
                                                className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-indigo-600 rounded-xl text-sm font-semibold shadow-sm hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all active:scale-95"
                                            >
                                                <Eye size={16} />
                                                <span className="hidden sm:inline">View Data</span>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyApplications;