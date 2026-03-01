import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const JobDetails = () => {
    const { id } = useParams(); // URL থেকে আইডি নেওয়া
    const [job, setJob] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:5000/jobs/${id}`)
            .then(res => setJob(res.data));
    }, [id]);

    if (!job) return <div className="p-20 text-center">Loading details...</div>;

    return (
        <div className="max-w-3xl mx-auto p-10 bg-white shadow-xl my-10 rounded-3xl">
            <h1 className="text-3xl font-bold">{job.title}</h1>
            <p className="text-indigo-600 font-bold mt-2">{job.company}</p>
            <div className="mt-6 text-gray-700 leading-loose">
                {job.description}
            </div>
            {/* আরও ডিটেইলস এখানে যোগ করতে পারেন */}
        </div>
    );
};

export default JobDetails;