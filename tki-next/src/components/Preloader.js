"use client";
import React, { useEffect, useState } from 'react';

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading or wait for window load
    const handleLoad = () => setLoading(false);
    
    // Check if document is already loaded
    if (document.readyState === 'complete') {
        setTimeout(() => setLoading(false), 500); // Small delay for smooth UX
    } else {
        window.addEventListener('load', handleLoad);
    }
    
    // Fallback: Force disable after 2 seconds in case load event fails or fired early
    const timeout = setTimeout(() => {
        setLoading(false);
    }, 2000);

    return () => {
        window.removeEventListener('load', handleLoad);
        clearTimeout(timeout);
    };
  }, []);

  if (!loading) return null;

  return (
    <div className="preloader" style={{ display: 'block' }}>
      <div className="loading-container">
        <div className="loading"></div>
        <div id="loading-icon">
             {/* Using standard img tag here to avoid Next.js Image optimization overhead during critical boot,
                or could use Image if optimized. Using standard img for simplicity in preloader. */}
            <img src="/images/loader.svg" alt="Loading..." />
        </div>
      </div>
    </div>
  );
}
