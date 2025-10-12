import React, { useState } from 'react';

const Map = () => {
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.8479656849147!2d85.81891897507568!3d20.25021981302892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a7d68b324a0b%3A0xb5b0161633c8e46d!2sNational%20Institute%20of%20Science%20and%20Technology%20(NIST)!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin";

  return (
    <div className="bg-black text-white py-4 md:py-10 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Map Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-600 bg-clip-text text-transparent mb-4 md:mb-8 text-center animate-fade-in">
          Location
        </h1>

        {/* Map Container */}
        <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl border-2 border-orange-500/30 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          {/* Loading spinner */}
          {!isMapLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900 z-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
            </div>
          )}
          {/* Dark overlay for blend effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40 pointer-events-none z-10"></div>
          <iframe
            src={mapUrl}
            width="100%"
            height="100%"
            style={{ 
              border: 0,
              filter: 'grayscale(20%) brightness(0.8) contrast(1.1) saturate(1.2)',
              willChange: 'transform',
              transform: 'translateZ(0)',
            }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="NIST University Location"
            className="w-full h-full"
            onLoad={() => setIsMapLoaded(true)}
          ></iframe>
          {/* Orange glow border effect */}
          <div className="absolute inset-0 pointer-events-none rounded-2xl shadow-[inset_0_0_30px_rgba(249,115,22,0.2)]"></div>
        </div>

        {/* Direction Button */}
        <div className="mt-8 text-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <a
            href="https://www.google.com/maps/dir//NIST+University,+Institute+Park,+Pallur+Hills,+Golanthara,+Brahmapur,+Odisha+761008/@20.2502198,85.8189189,17z"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-bold py-3 px-8 rounded-full hover:from-orange-600 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            Get Directions
          </a>
        </div>

        {/* Bottom Decoration */}
        <div className="mt-12 flex justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent animate-pulse"></div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }

        .animate-slide-up {
          animation: slideUp 0.6s ease-out backwards;
        }
      `}</style>
    </div>
  );
};

export default Map;