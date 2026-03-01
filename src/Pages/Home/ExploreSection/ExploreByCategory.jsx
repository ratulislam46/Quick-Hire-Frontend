import { useEffect, useState } from "react";
import {
    Palette, Megaphone, BadgeDollarSign, Monitor,
    Code2, Briefcase, Users2, BarChart3, ArrowRight, Loader2
} from "lucide-react";
import { Link } from "react-router-dom";
import axios from "axios";

const ExploreByCategory = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    const iconMap = {
        "Design": <Palette size={40} />,
        "Sales": <BarChart3 size={40} />,
        "Marketing": <Megaphone size={40} />,
        "Finance": <BadgeDollarSign size={40} />,
        "Management": <Monitor size={40} />,
        "Engineering": <Code2 size={40} />,
        "Business": <Briefcase size={40} />,
        "Human Resource": <Users2 size={40} />,
    };

    useEffect(() => {
        const fetchCategoryStats = async () => {
            try {
                const res = await axios.get("https://quick-hire-backend-rho.vercel.app/jobs");
                const allJobs = res.data;

                const stats = allJobs.reduce((acc, job) => {
                    acc[job.category] = (acc[job.category] || 0) + 1;
                    return acc;
                }, {});

                const categoryList = Object.keys(iconMap).map(cat => ({
                    name: cat,
                    count: stats[cat] || 0,
                    icon: iconMap[cat]
                }));

                setCategories(categoryList);
            } catch (err) {
                console.error("Error loading categories:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchCategoryStats();
    }, []);

    if (loading) return <div className="flex justify-center py-10"><Loader2 className="animate-spin text-indigo-600" /></div>;

    return (
        <section className="max-w-7xl mx-auto px-6 py-16">
            {/* Header Area */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
                <h2 className="text-4xl md:text-5xl font-black text-[#18191C]">
                    Explore by <span className="text-[#00A3FF]">category</span>
                </h2>
                <Link to="/find-jobs" className="text-[#4640DE] font-bold flex items-center gap-2 group hover:underline decoration-2 underline-offset-4">
                    Show all jobs <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>

            {/* Categories */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {categories?.map((cat, index) => (
                    <Link
                        key={index}
                        to={`/find-jobs?category=${cat.name}`}
                        className={`group p-6 border border-gray-200 transition-all duration-300 flex flex-row md:flex-col items-center md:items-start justify-between md:justify-start gap-4 
              ${cat.name === "Marketing"
                                ? "bg-[#4640DE] text-white border-[#4640DE]"
                                : "bg-white hover:border-[#4640DE] hover:bg-[#4640DE] hover:shadow-xl"
                            }`}
                    >
                        {/* Icon Box */}
                        <div className={`p-3 rounded-lg transition-colors ${cat.name === "Marketing" ? "text-white" : "text-[#4640DE] group-hover:text-white"}`}>
                            {cat.icon}
                        </div>

                        {/* Text Area */}
                        <div className="flex-1 md:mt-4 ">
                            <div>
                                <h3 className={`text-xl font-bold leading-tight ${cat.name === "Marketing" ? "text-white" : "text-[#18191C] group-hover:text-white transition-all duration-300"}`}>
                                    {cat.name}
                                </h3>
                                <p className={`text-md mt-1 font-medium ${cat.name === "Marketing" ? "text-white/80" : "text-[#7C8493] group-hover:text-white transition-all duration-300"}`}>
                                    {cat.count} jobs available
                                </p>
                            </div>
                        </div>

                        {/* Arrow (Desktop Only) */}
                        <div className={`hidden md:block mt-4 self-end transition-transform group-hover:translate-x-1 ${cat.name === "Marketing" ? "text-white" : "text-[#7C8493] group-hover:text-white transition-all duration-300"}`}>
                            <ArrowRight size={20} />
                        </div>

                        {/* Arrow (Mobile Only) */}
                        <div className="md:hidden text-[#7C8493]">
                            <ArrowRight size={24} />
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default ExploreByCategory;