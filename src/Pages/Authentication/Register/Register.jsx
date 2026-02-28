import axios from 'axios';
import React from 'react';

const Register = () => {

    const handleRegister = async (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const createdAt = new Date().toISOString();

        const newUser = { name, email, password, createdAt };

        try {
            const response = await axios.post('http://localhost:5000/register', newUser);

            if (response.data.insertedId) {
                alert('Account Created Successfully!');
                form.reset();
            } else {
                alert(response.data.message);
            }
        } catch (error) {
            console.error('Error registering user:', error);
            alert('Something went wrong!');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-[#4640DE]/5 to-secondary/5 p-4">
            <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-[#4640DE] mb-2">Create Account</h1>
                    <p className="text-gray-600">Join us today to start your journey</p>
                </div>
                <form onSubmit={handleRegister} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                        <input name="name" type="text" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4640DE] outline-none transition" placeholder="Enter your full name" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        <input name="email" type="email" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4640DE] outline-none transition" placeholder="Enter your email" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                        <input name="password" type="password" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4640DE] outline-none transition" placeholder="Create a password" />
                    </div>
                    <button type="submit" className="w-full bg-[#4640DE] text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors shadow-md">
                        Create Account
                    </button>
                </form>
                <div className="mt-6 text-center">
                    <p className="text-gray-600">Already have an account? <a href="/login" className="text-[#4640DE] font-medium hover:underline">Sign in</a></p>
                </div>
            </div>
        </div>
    );
};

export default Register;