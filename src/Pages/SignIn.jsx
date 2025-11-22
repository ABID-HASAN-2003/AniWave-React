import React from 'react';
import { FaFacebookF } from 'react-icons/fa'; // Facebook Icon
import { FcGoogle } from 'react-icons/fc'; // Google Icon

// আপনি Sitermark লোগোর জন্য একটি কাস্টম আইকন ব্যবহার করতে পারেন
const SitermarkLogo = () => (
    <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
    </svg>
);

const SignIn = () => {
    // ফর্ম সাবমিট হ্যান্ডলার (প্রয়োজনে ব্যবহার করতে পারেন)
    const handleSubmit = (e) => {
        e.preventDefault();
        // আপনার লগইন লজিক এখানে লিখুন
        console.log("Form Submitted");
    };

    return (
        // মূল কন্টেইনার: ব্যাকগ্রাউন্ড, ফ্লেক্স লেআউট
        <div className="min-h-screen bg-white flex items-center justify-center p-4">
            
            {/* লগইন কার্ড বক্স */}
            <div className="bg-white p-8 md:p-10 rounded-xl shadow-2xl w-full max-w-sm border border-gray-700">
                
                {/* হেডিং */}
                <h1 className="text-3xl font-semibold text-black mb-8">Sign in</h1>
                
                <form onSubmit={handleSubmit}>
                    
                    {/* ইমেল ইনপুট */}
                    <div className="mb-5">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="your@email.com"
                            className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                            required
                        />
                    </div>
                    
                    {/* পাসওয়ার্ড ইনপুট */}
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-400 mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="••••••••"
                            className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                            required
                        />
                    </div>
                    
                    {/* রিমেম্বার মি */}
                    <div className="flex items-center mb-8">
                        <input
                            type="checkbox"
                            id="remember"
                            name="remember"
                            className="h-4 w-4 text-blue-500 bg-gray-700 border-gray-600 rounded focus:ring-blue-500"
                        />
                        <label htmlFor="remember" className="ml-2 block text-sm text-gray-400">
                            Remember me
                        </label>
                    </div>
                    
                    {/* সাইন ইন বাটন */}
                    <button
                        type="submit"
                        className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-150 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                        Sign in
                    </button>
                </form>

                <div className="text-center mt-5 mb-4">
                    <a href="#" className="text-sm text-blue-400 hover:text-blue-300">
                        Forgot your password?
                    </a>
                    <p className="text-gray-500 my-4 text-sm">or</p>
                </div>
                
                {/* সোশ্যাল লগইন */}
                <div className="space-y-3">
                    {/* গুগল সাইন ইন */}
                    <button
                        className="w-full flex items-center justify-center py-3 border border-gray-700 bg-black text-white font-medium rounded-lg hover:bg-gray-700 transition duration-150"
                    >
                        <FcGoogle className="w-5 h-5 mr-3" />
                        Sign in with Google
                    </button>
                    
                    {/* ফেসবুক সাইন ইন */}
                    <button
                        className="w-full flex items-center justify-center py-3 border border-gray-700 bg-black text-white font-medium rounded-lg hover:bg-gray-700 transition duration-150"
                    >
                        <FaFacebookF className="w-5 h-5 mr-3 text-blue-500" />
                        Sign in with Facebook
                    </button>
                </div>

                {/* সাইন আপ লিংক */}
                <div className="text-center mt-8 text-sm text-gray-400">
                    Don't have an account? 
                    <a href="#" className="text-blue-400 font-semibold ml-1 hover:text-blue-300">
                        Sign up
                    </a>
                </div>

            </div>
        </div>
    );
};

export default SignIn;