import axios from 'axios';
import React from 'react';

const Login = () => {

    const handleLogin = async (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const lastLoggedAt = new Date().toISOString();

        const loginInfo = { email, lastLoggedAt };

        try {
            const response = await axios.patch('http://localhost:5000/login', loginInfo);

            if (response.data.modifiedCount > 0) {
                alert('Login Successful & Time Updated!');
            } else {
                alert('User not found or error occurred');
            }
        } catch (error) {
            console.error('Login error:', error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-[#4640DE]/5 to-secondary/5 p-4">
            <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-[#4640DE] mb-2">Welcome Back</h1>
                    <p className="text-gray-600">Sign in to your account</p>
                </div>
                <form
                    onSubmit={handleLogin}
                    className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        <input
                            type="email"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4640DE] focus:border-transparent outline-none transition"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <label className="block text-sm font-medium text-gray-700">Password</label>
                            <a href="#" className="text-sm text-[#4640DE] hover:underline">Forgot Password?</a>
                        </div>
                        <input
                            type="password"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4640DE] focus:border-transparent outline-none transition"
                            placeholder="Enter your password"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-[#4640DE] text-white py-3 rounded-lg font-semibold hover:bg-secondary transition-colors shadow-md"
                    >
                        Sign In
                    </button>
                </form>
                <div className="mt-6 text-center">
                    <p className="text-gray-600">
                        Don't have an account? <a href="/register" className="text-[#4640DE] font-medium hover:underline">Sign up</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;