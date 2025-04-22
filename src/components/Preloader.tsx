import { useState, useEffect } from 'react';

const Preloader = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => setLoaded(true), 1500);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    const timer = setTimeout(() => setLoaded(true), 4000);

    return () => {
      window.removeEventListener('load', handleLoad);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-gray-900 transition-opacity duration-1000 ${
        loaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="text-center">
        <img
          src="/assets/GVS-logo.png" // Ensure this file exists in public/assets
          alt="GVS Controls Logo"
          className="w-32 mb-4 animate-pulse"
        />
        <div className="w-32 h-1 bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-green-500 rounded-full" // Replaced bg-gvs-green with bg-green-500; update if gvs-green is defined
            style={{
              width: loaded ? '0%' : '100%',
              transition: 'width 1.5s ease-in-out',
              animation: 'load 1.5s ease-in-out infinite',
            }}
          />
        </div>
      </div>
      <style>
        {`
          @keyframes load {
            0% { width: 0%; }
            50% { width: 100%; }
            100% { width: 0%; }
          }
        `}
      </style>
    </div>
  );
};

export default Preloader;