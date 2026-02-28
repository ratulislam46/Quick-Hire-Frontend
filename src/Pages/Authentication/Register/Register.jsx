import React from 'react';

const Register = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-secondary/5 p-4">
            <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-primary mb-2">Create Account</h1>
                    <p className="text-gray-600">Join us today to start your journey</p>
                </div>
                <form className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                        <input 
                            type="text" 
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                            placeholder="Enter your full name"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        <input 
                            type="email" 
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                        <input 
                            type="password" 
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                            placeholder="Create a password"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
                        <input 
                            type="password" 
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                            placeholder="Confirm your password"
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-secondary transition-colors shadow-md"
                    >
                        Create Account
                    </button>
                </form>
                <div className="mt-6 text-center">
                    <p className="text-gray-600">
                        Already have an account? <a href="/login" className="text-primary font-medium hover:underline">Sign in</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;