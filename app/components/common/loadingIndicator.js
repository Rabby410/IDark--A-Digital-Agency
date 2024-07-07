'use client'
// components/LoadingIndicator.js

import { useEffect, useState } from 'react';

export default function LoadingIndicator() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let timer;

    const startLoading = () => {
      setIsLoading(true);
      timer = setTimeout(() => {
        setIsLoading(false);
      }, 3000); // Show loading indicator for 3 seconds (adjust as needed)
    };

    // Simulate data fetching scenario (replace with actual data fetching logic)
    startLoading();

    // Clean up timer on unmount or when no longer needed
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {isLoading && (
        <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-90 z-50">
          <div className="text-white text-2xl flex items-center space-x-2">
            {/* Custom SVG animation (example) */}
            <svg className="animate-spin w-20 h-20 text-red-500" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.003 8.003 0 0120 4.243V0C14.477 0 10 4.477 10 10h4zm7.732-9.732A8.004 8.004 0 0110 20.757V24c5.523 0 10-4.477 10-10h-4z"
              />
            </svg>
            <div>Loading...</div>
          </div>
        </div>
      )}
    </>
  );
}
