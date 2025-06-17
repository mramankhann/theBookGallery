import React from 'react';
import { ArrowRight, Mail, Lock } from 'lucide-react';

const Common = ()=> {
    return (
        <div className="flex flex-col justify-center p-6">
            <div className="flex items-center gap-2 mb-4">
                <div className="bg-blue-600 text-4xl p-2 rounded-xl">
                    📘
                </div>
                <h1 className="text-3xl font-bold text-blue-700 bg-clip-text">theBookswap</h1>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Discover Your Next <span className="text-blue-700">Great Read</span>
            </h2>
            <p className="text-gray-600 mb-6">
                Join thousands of book lovers who swap, discover, and connect through the power of reading.
            </p>

            <div className="flex items-center gap-6 text-gray-600">
                <div className="flex items-center gap-1">
                    📚 <span>10,000+ Active Readers</span>
                </div>
                <div className="flex items-center gap-1">
                    🔄 <span>50,000+ Books Swapped</span>
                </div>
            </div>
        </div>

    );
}

export default Common;
