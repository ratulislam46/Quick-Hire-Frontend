import { useContext, useEffect, useState, useCallback } from "react";
import { Mail, Calendar, Shield, Clock, User as UserIcon, Loader2, Hash } from "lucide-react";
import { AuthContext } from "../../Context/AuthProvider";
import axios from "axios";
import MyApplications from "./MyAppllications";

const Profile = () => {
    const { user: authUser } = useContext(AuthContext);
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchUserProfile = useCallback(async () => {
        if (!authUser?.email) return;
        try {
            setLoading(true);
            const res = await axios.get(`https://quick-hire-backend-rho.vercel.app/users/email/${authUser.email}`);
            setUserData(res.data);
        } catch (err) {
            console.error("Profile Fetch Error:", err);
        } finally {
            setLoading(false);
        }
    }, [authUser?.email]);

    useEffect(() => {
        fetchUserProfile();
    }, [fetchUserProfile]);

    if (loading) {
        return (
            <div className="flex flex-col justify-center items-center min-h-[60vh] gap-4">
                <Loader2 className="animate-spin text-indigo-600" size={40} />
                <p className="text-gray-500 font-medium animate-pulse">Fetching profile details...</p>
            </div>
        );
    }

    if (!userData) {
        return (
            <div className="text-center py-20 text-red-500 font-bold">
                User data not found in database.
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 py-16">
            {/* Profile Header Card */}
            <div className="bg-white shadow-indigo-100 overflow-hidden border border-gray-100 rounded-3xl">
                {/* Top Banner Accent */}
                <div className="h-32 bg-linear-to-r from-indigo-600 to-purple-600"></div>

                <div className="px-8 pb-10">
                    <div className="relative -mt-16 flex flex-col items-center text-center">
                        {/* Avatar */}
                        <div className="w-32 h-32 bg-white p-2 rounded-3xl shadow-lg">
                            <div className="w-full h-full bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600">
                                <UserIcon size={60} strokeWidth={1.5} />
                            </div>
                        </div>

                        {/* Name & Role */}
                        <h1 className="mt-6 text-3xl font-black text-gray-900 tracking-tight">
                            {userData.name}
                        </h1>
                        <div className="mt-2 flex items-center gap-2">
                            <span className="px-4 py-1 bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-widest rounded-full border border-indigo-100 flex items-center gap-1">
                                <Shield size={12} /> {userData.role}
                            </span>
                        </div>
                    </div>

                    {/* Details Grid */}
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <DetailItem
                            icon={<Mail size={20} />}
                            label="Email Address"
                            value={userData.email}
                        />

                        <DetailItem
                            icon={<Hash size={20} />}
                            label="Database ID"
                            value={userData._id}
                            isCode
                        />

                        <DetailItem
                            icon={<Calendar size={20} />}
                            label="Account Created"
                            value={new Date(userData.createdAt).toLocaleDateString('en-GB', {
                                day: 'numeric', month: 'long', year: 'numeric'
                            })}
                        />

                        <DetailItem
                            icon={<Clock size={20} />}
                            label="Last Login"
                            value={new Date(userData.lastLoggedAt).toLocaleString()}
                        />
                    </div>
                </div>
            </div>

            {/* My Applications Section*/}
            <div className="mt-12 w-full overflow-hidden">
                <MyApplications userEmail={authUser?.email} />
            </div>
        </div>
    );
};


// Reusable Detail Component
const DetailItem = ({ icon, label, value, isCode }) => (
    <div className="flex items-start gap-4 p-5 rounded-2xl bg-gray-50/50 border border-gray-200 hover:border-indigo-100 hover:bg-white hover:shadow-sm transition-all duration-300">
        <div className="text-indigo-600 bg-white p-3 rounded-xl shadow-sm">
            {icon}
        </div>
        <div className="overflow-hidden">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-tighter mb-1">{label}</p>
            <p className={`text-gray-700 font-semibold break-all ${isCode ? 'font-mono text-xs text-indigo-500' : 'text-md'}`}>
                {value}
            </p>
        </div>
    </div>
);

export default Profile;