import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const AddJobModal = ({ isOpen, onClose, refreshJobs }) => {
    const [selectedCategory, setSelectedCategory] = useState("Design");

    if (!isOpen) return null;

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;

        const finalCategory = selectedCategory === "Others" 
            ? form.customCategory.value 
            : form.category.value;

        const jobData = {
            title: form.title.value,
            company: form.company.value,
            location: form.location.value,
            category: finalCategory, 
            description: form.description.value,
            created_at: new Date().toISOString()
        };

        try {
            const res = await axios.post('http://localhost:5000/jobs', jobData);
            if (res.data.insertedId) {
                toast.success('Job Added Successfully!');
                refreshJobs();
                onClose();
            }
        } catch (error) { 
            console.error(error); 
        }
    };

    const inputStyle = "w-full p-3.5 border border-gray-200 rounded-xl outline-none transition-all duration-200 focus:border-[#4640DE] focus:ring-4 focus:ring-[#4640DE]/10 hover:border-gray-300 bg-gray-50/30";

    return (
        <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
            <div className="bg-white w-full max-w-2xl rounded-2xl p-8 shadow-2xl relative animate-in fade-in zoom-in duration-300">
                
                <button onClick={onClose} className="absolute top-5 right-5 text-gray-400 hover:text-gray-600 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>

                <h2 className="text-3xl font-bold text-[#18191C] mb-8">Add New Job</h2>
                
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    
                    <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-semibold text-gray-700 ml-1">Job Title</label>
                        <input name="title" placeholder="e.g. Frontend Developer" required className={inputStyle} />
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-semibold text-gray-700 ml-1">Company Name</label>
                        <input name="company" placeholder="e.g. QuickHire Inc." required className={inputStyle} />
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-semibold text-gray-700 ml-1">Location</label>
                        <input name="location" placeholder="e.g. Remote or Dhaka, BD" required className={inputStyle} />
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-semibold text-gray-700 ml-1">Category</label>
                        <select 
                            name="category" 
                            className={`${inputStyle} cursor-pointer`}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                        >
                            <option value="Design">Design</option>
                            <option value="Technology">Technology</option>
                            <option value="Marketing">Marketing</option>
                            <option value="Business">Business</option>
                            <option value="Engineering">Engineering</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>

                    {selectedCategory === "Others" && (
                        <div className="md:col-span-2 flex flex-col gap-1.5 animate-in slide-in-from-top-2 duration-300">
                            <label className="text-sm font-semibold text-[#4640DE] ml-1">Specify Your Category</label>
                            <input 
                                name="customCategory" 
                                placeholder="Enter your job category" 
                                required 
                                className={`${inputStyle} border-blue-200 bg-blue-50/20`} 
                            />
                        </div>
                    )}
                    
                    <div className="md:col-span-2 flex flex-col gap-1.5">
                        <label className="text-sm font-semibold text-gray-700 ml-1">Job Description</label>
                        <textarea name="description" placeholder="Describe the roles..." className={`${inputStyle} h-32 resize-none`}></textarea>
                    </div>
                    
                    <button type="submit" className="md:col-span-2 bg-[#4640DE] text-white py-4 rounded-xl font-bold hover:bg-[#3b36bc] transition-all active:scale-[0.98] mt-2">
                        Save Job Post
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddJobModal;