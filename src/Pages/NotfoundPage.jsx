import React from 'react';
import { HomeIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className=" p-8 flex flex-col 
                   items-center justify-center
                    bg-gray-50">
      <div className="text-center space-y-6">
        {/* Error Code */}
        <h1 className="text-8xl font-bold text-gray-900">404</h1>
        
        {/* Main Message */}
        <h2 className="text-3xl font-semibold text-gray-800">Page Not Found</h2>
        
        {/* Description */}
        <p className="text-gray-600 max-w-md mx-auto">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        
        {/* Back to Home Button */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2
                   bg-blue-600 text-white px-6 py-3 
                   rounded-lg hover:bg-blue-700 
                   transition-colors"
        >
          <HomeIcon size={20} />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;