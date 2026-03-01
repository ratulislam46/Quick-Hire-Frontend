import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { User, Mail, Shield, MapPin, Briefcase, Calendar } from 'lucide-react';

const UserProfile = () => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-[60vh]">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#4640DE]"></div>
            </div>
        );
    }

    if (!user) {
        return (
            <div className="text-center py-20 text-gray-500">
                Please login to view your profile.
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 min-h-screen">
            {/* Profile Header Card */}
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden mb-6">
                <div className="h-32 bg-linear-to-r from-[#4640DE] to-[#7367F0]"></div>
                <div className="px-8 pb-8">
                    <div className="relative - mt-12 mb-6 flex flex-col sm:flex-row items-end gap-5">
                        <div className="w-32 h-32 bg-white p-1.5 rounded-2xl shadow-lg">
                            <div className="w-full h-full bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden">
                                {user?.photoURL ? (
                                    <img src={user.photoURL} alt="Profile" className="w-full h-full object-cover" />
                                ) : (
                                    <User size={60} className="text-gray-300" />
                                )}
                            </div>
                        </div>
                        <div className="flex-1 pb-2 text-center sm:text-left">
                            <h1 className="text-3xl font-bold text-gray-800">{user?.displayName || "User Name"}</h1>
                            <p className="text-gray-500 font-medium flex items-center justify-center sm:justify-start gap-2">
                                <Shield size={16} className="text-[#4640DE]" />
                                <span className="capitalize">{user?.role || "Member"}</span>
                            </p>
                        </div>
                        <button className="bg-[#4640DE] text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-[#3b36bc] transition-all active:scale-95 shadow-md mb-2">
                            Edit Profile
                        </button>
                    </div>
                </div>
            </div>

            {/* Information Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Basic Info */}
                <div className="md:col-span-2 space-y-6">
                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                        <h2 className="text-xl font-bold text-gray-800 mb-6">Personal Information</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <InfoItem 
                                icon={<User size={20} />} 
                                label="Full Name" 
                                value={user?.displayName || "N/A"} 
                            />
                            <InfoItem 
                                icon={<Mail size={20} />} 
                                label="Email Address" 
                                value={user?.email || "N/A"} 
                            />
                            <InfoItem 
                                icon={<MapPin size={20} />} 
                                label="Location" 
                                value={user?.location || "Not set"} 
                            />
                            <InfoItem 
                                icon={<Calendar size={20} />} 
                                label="Joined On" 
                                value={new Date(user?.metadata?.creationTime).toLocaleDateString() || "N/A"} 
                            />
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">About Me</h2>
                        <p className="text-gray-600 leading-relaxed">
                            {user?.bio || "No bio added yet. Tell people about yourself and your professional background."}
                        </p>
                    </div>
                </div>

                {/* Stats/Quick Info */}
                <div className="space-y-6">
                    <div className="bg-[#4640DE] rounded-2xl p-6 text-white shadow-lg shadow-blue-200">
                        <Briefcase className="mb-4 opacity-80" size={24} />
                        <h3 className="text-lg font-bold mb-1">Job Activity</h3>
                        <p className="text-blue-100 text-sm mb-4">You have applied to 0 jobs this month.</p>
                        <div className="bg-white/10 rounded-xl p-4">
                            <div className="flex justify-between text-sm mb-1">
                                <span>Profile Completion</span>
                                <span>70%</span>
                            </div>
                            <div className="w-full bg-white/20 rounded-full h-2">
                                <div className="bg-white h-full rounded-full w-[70%]"></div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                        <h3 className="font-bold text-gray-800 mb-4">Account Status</h3>
                        <div className="flex items-center gap-3 text-green-600 bg-green-50 p-3 rounded-xl border border-green-100">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-sm font-bold">Verified Account</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const InfoItem = ({ icon, label, value }) => (
    <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
        <div className="text-[#4640DE] bg-blue-50 p-2.5 rounded-lg">
            {icon}
        </div>
        <div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">{label}</p>
            <p className="text-gray-700 font-semibold">{value}</p>
        </div>
    </div>
);

export default UserProfile;