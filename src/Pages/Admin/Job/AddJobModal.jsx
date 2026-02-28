import React from 'react';
import axios from 'axios';

const AddJobModal = ({ isOpen, onClose, refreshJobs }) => {
    if (!isOpen) return null;

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const jobData = {
            title: form.title.value,
            company: form.company.value,
            location: form.location.value,
            category: form.category.value,
            description: form.description.value,
            created_at: new Date().toISOString()
        };

        try {
            const res = await axios.post('http://localhost:5000/jobs', jobData);
            if (res.data.insertedId) {
                alert('Job Added Successfully!');
                refreshJobs();
                onClose();
            }
        } catch (error) { console.error(error); }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <div className="bg-white w-full max-w-2xl rounded-2xl p-6 shadow-2xl relative">
                <button onClick={onClose} className="absolute top-4 right-4 text-2xl">&times;</button>
                <h2 className="text-2xl font-bold text-[#4640DE] mb-6">Add New Job</h2>
                
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input name="title" placeholder="Job Title" required className="p-3 border rounded-lg outline-none" />
                    <input name="company" placeholder="Company Name" required className="p-3 border rounded-lg outline-none" />
                    <input name="location" placeholder="Location" required className="p-3 border rounded-lg outline-none" />

                    <select name="category" className="p-3 border rounded-lg outline-none">
                        <option value="Design">Design</option>
                        <option value="Development">Development</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Business">Business</option>
                    </select>
                    
                    <textarea name="description" placeholder="Job Description" className="md:col-span-2 p-3 border rounded-lg h-32 outline-none"></textarea>
                    
                    <button type="submit" className="md:col-span-2 bg-[#4640DE] text-white py-3 rounded-lg font-bold hover:bg-[#3b36bc]">Save Job</button>
                </form>
            </div>
        </div>
    );
};

export default AddJobModal;