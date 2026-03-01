import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Briefcase, Building2, MapPin, Calendar, Send, Loader2 } from "lucide-react";
import { AuthContext } from "../../Context/AuthProvider";
import Swal from "sweetalert2";

const JobDetails = () => {
    const { id } = useParams();
    const { user } = useContext(AuthContext);
    const [job, setJob] = useState(null);
    const [loading, setLoading] = useState(true);
    const [applying, setApplying] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:5000/jobs/${id}`)
            .then(res => {
                setJob(res.data);
                setLoading(false);
            })
            .catch(err => console.error(err));
    }, [id]);

    console.log(job);
    const handleApply = async (e) => {
        e.preventDefault();
        setApplying(true);

        const form = e.target;
        const applicationData = {
            job_id: id,
            job_details: job,
            applicant_name: form.name.value,
            applicant_email: form.email.value,
            resume_link: form.resume.value,
            cover_note: form.cover_note.value,
            applied_at: new Date()
        };
        console.log(applicationData);
        try {
            const res = await axios.post("http://localhost:5000/job-applications", applicationData);
            if (res.data.insertedId) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Your application has been submitted.',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                });
                form.reset();
            }
        } catch (error) {
            console.error("Application Error:", error);
            alert("Failed to apply. Try again.");
        } finally {
            setApplying(false);
        }
    };

    if (loading) return (
        <div className="flex justify-center items-center min-h-screen">
            <Loader2 className="animate-spin text-indigo-600" size={40} />
        </div>
    );

    return (
        <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Job Information */}
            <div className="lg:col-span-2">
                <div className="bg-white p-8 shadow-xl border border-gray-100">
                    {/* Category Badge & Date */}
                    <div className="flex justify-between items-center mb-4">
                        <span className="px-4 py-1.5 bg-purple-50 text-purple-700 text-[10px] font-black uppercase tracking-[0.15em] rounded-full border border-purple-100">
                            {job.category}
                        </span>
                        <span className="flex items-center gap-1.5 text-gray-400 text-xs font-medium">
                            <Calendar size={14} />
                            Posted on: {new Date(job.created_at).toLocaleDateString('en-GB', {
                                day: 'numeric', month: 'short', year: 'numeric'
                            })}
                        </span>
                    </div>

                    <h1 className="text-4xl font-black text-gray-900 leading-tight">{job.title}</h1>

                    <div className="flex flex-wrap gap-3 mt-5">
                        <span className="flex items-center gap-1.5 text-indigo-600 font-bold bg-indigo-50 px-4 py-2 rounded-xl text-sm border border-indigo-100/50">
                            <Building2 size={18} /> {job.company}
                        </span>
                        <span className="flex items-center gap-1.5 text-gray-500 font-bold bg-gray-50 px-4 py-2 rounded-xl text-sm border border-gray-100">
                            <MapPin size={18} /> {job.location}
                        </span>
                    </div>

                    <div className="mt-10 pt-8 border-t border-gray-50">
                        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                            <Briefcase size={20} className="text-indigo-600" /> Job Description
                        </h3>
                        <p className="text-gray-600 leading-relaxed whitespace-pre-line text-lg">
                            {job.description}
                        </p>
                    </div>
                </div>
            </div>

            {/* Apply Form */}
            <div className="lg:col-span-1">
                <div className="bg-white p-8 shadow-xl border border-gray-100 sticky top-10">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                        <Send size={24} className="text-indigo-600" /> Apply Now
                    </h3>

                    <form onSubmit={handleApply} className="space-y-4">
                        <div>
                            <label className="text-xs font-bold text-gray-400 uppercase ml-1">Full Name</label>
                            <input name="name" placeholder="Md Ratul Howlader" required className="w-full mt-1 border border-gray-200 rounded-xl px-4 py-3 focus:border-indigo-600 outline-none transition-all" />
                        </div>
                        <div>
                            <label className="text-xs font-bold text-gray-400 uppercase ml-1">Email</label>
                            <input name="email" defaultValue={user?.email} required className="w-full mt-1 border border-gray-100 text-gray-500 rounded-xl px-4 py-3 cursor-not-allowed outline-none" />
                        </div>
                        <div>
                            <label className="text-xs font-bold text-gray-400 uppercase ml-1">Resume URL</label>
                            <input name="resume" type="url" placeholder="https://drive.google.com/..." required className="w-full mt-1 border border-gray-200 rounded-xl px-4 py-3 focus:border-indigo-600 outline-none transition-all" />
                        </div>
                        <div>
                            <label className="text-xs font-bold text-gray-400 uppercase ml-1">Cover Note</label>
                            <textarea name="cover_note" rows="4" placeholder="Tell us why you are a good fit..." required className="w-full mt-1 border border-gray-200 rounded-xl px-4 py-3 focus:border-indigo-600 outline-none transition-all resize-none"></textarea>
                        </div>

                        <button
                            disabled={applying}
                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 hover:cursor-pointer rounded-xl shadow-lg shadow-indigo-200 transition-all flex justify-center items-center gap-2"
                        >
                            {applying ? <Loader2 className="animate-spin" size={20} /> : "Submit Application"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;