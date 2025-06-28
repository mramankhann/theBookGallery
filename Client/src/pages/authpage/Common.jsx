import React from 'react';
import { ArrowRight, Mail, Lock } from 'lucide-react';

const Common = () => {
  return (
    <div className=" flex flex-col justify-center p-6">
      <div className="flex items-center gap-2 mb-4">
        <div className="bg-blue-600 text-4xl p-2 rounded-xl">
          🖼️
        </div>
        <h1 className="text-3xl font-bold text-blue-700 bg-clip-text">theBookGallery</h1>
      </div>

      <h2 className="text-4xl md:text-4xl font-bold text-gray-900 mb-2">
        Explore Your Next <span className="text-blue-700">Literary Gem</span>
      </h2>
      <p className="text-gray-600 mb-6">
        Step into a curated world of stories—discover, share, and experience books like never before.
      </p>

      <div className="flex items-center gap-6 text-gray-600">
        <div className="bookspan flex flex items-center gap-1">
          📖 <span>8,000+ Avid Readers</span>
        </div>
        <div className="bookspan flex items-center gap-1">
          🔁 <span>35,000+ Books Stored</span>
        </div>
      </div>
    </div>
  );
};

export default Common;
