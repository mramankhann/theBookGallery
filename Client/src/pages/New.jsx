import React from 'react';
import { ArrowRight,Mail,Lock } from 'lucide-react';

export default function SignInPage() {
    return (
        <div className="min-h-screen w-screen bg-blue-50 flex items-center justify-center ">
            <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-6">

              
               
                <div className="shadow-xl rounded-xl bg-white p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Welcome Back!</h3>
                    <p className="text-gray-600 mb-6">Sign in to continue your reading journey</p>

                    <div className="space-y-4">
                        <div className='relative'>
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                            <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full px-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                            </div>
                        <div className="text-right text-sm text-blue-600 hover:underline cursor-pointer">
                            <span>Forgot Password?</span>
                        </div>
                        <button className="signin w-full text-white bg py-2 rounded-lg flex items-center justify-center">
                            Sign In <ArrowRight className=" text-lg bold ml-2 w-4 h-4" />
                        </button>
                        <div className="flex items-center gap-2 my-4">
                            <div className="flex-grow border-t border-gray-300" />
                            <span className="text-gray-500 text-sm">OR</span>
                            <div className="flex-grow border-t border-gray-300" />
                        </div>
                        <button className="w-full border border-gray-300 py-2 rounded-lg flex items-center justify-center gap-2">
                            Continue with Google
                        </button>
                        <p className="text-center text-sm text-gray-600 mt-4">
                            Don’t have an account? <span className="text-blue-600 hover:underline cursor-pointer">Sign up</span>
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}
