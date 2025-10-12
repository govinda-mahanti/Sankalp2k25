import React from 'react';

const Shades = () => {
  const events = [
    {
      id: 1,
      title: 'Star Night',
      artist: 'YASSER DESAI',
      image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=1000&fit=crop',
      labelColor: 'bg-yellow-400',
      gradient: 'from-blue-600 via-purple-600 to-pink-600'
    },
    {
      id: 2,
      title: 'DJ Night',
      artist: 'WASEEM',
      image: 'https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=800&h=1000&fit=crop',
      labelColor: 'bg-cyan-400',
      gradient: 'from-blue-500 via-cyan-500 to-blue-600'
    },
    {
      id: 3,
      title: 'Comedy Night',
      artist: 'COMING SOON',
      image: 'https://images.unsplash.com/photo-1585699324551-f6c309eedeca?w=800&h=1000&fit=crop',
      labelColor: 'bg-yellow-400',
      gradient: 'from-orange-500 via-yellow-500 to-orange-600'
    }
  ];

  return (
    <div className="bg-black text-white py-8 md:py-16 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-600 bg-clip-text text-transparent mb-12 md:mb-16 text-center tracking-tight">
          Shades of Sankalp
        </h1>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {events.map((event) => (
            <div
              key={event.id}
              className="group relative overflow-hidden rounded-2xl cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-translate-y-4 hover:shadow-2xl hover:shadow-orange-500/20"
            >
              {/* Event Label */}
              <div className={`absolute top-4 left-4 ${event.labelColor} text-black font-black text-sm md:text-base px-4 py-2 rounded-lg z-20 transform -rotate-3 shadow-lg transition-all duration-300 group-hover:rotate-0 group-hover:scale-110 group-hover:-translate-y-1`}>
                {event.title}
              </div>

              {/* Image Container */}
              <div className="relative aspect-[3/4] overflow-hidden">
                {/* Background Image */}
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${event.gradient} opacity-60 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-40`}></div>

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/30 transition-opacity duration-500 group-hover:bg-black/10"></div>

                {/* Animated Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/30 via-transparent to-transparent"></div>
                </div>

                {/* Scan Line Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent animate-scan"></div>
                </div>

                {/* Artist Name */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-all duration-500 group-hover:-translate-y-2">
                  <h2 className="text-5xl md:text-6xl font-black text-white leading-none tracking-tighter transform transition-all duration-500 group-hover:scale-105 group-hover:text-orange-400">
                    {event.artist}
                  </h2>
                </div>

                {/* Cyber Grid Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none">
                  <div className="w-full h-full" style={{
                    backgroundImage: `
                      linear-gradient(0deg, transparent 24%, rgba(0, 255, 255, .3) 25%, rgba(0, 255, 255, .3) 26%, transparent 27%, transparent 74%, rgba(0, 255, 255, .3) 75%, rgba(0, 255, 255, .3) 76%, transparent 77%, transparent),
                      linear-gradient(90deg, transparent 24%, rgba(0, 255, 255, .3) 25%, rgba(0, 255, 255, .3) 26%, transparent 27%, transparent 74%, rgba(0, 255, 255, .3) 75%, rgba(0, 255, 255, .3) 76%, transparent 77%, transparent)
                    `,
                    backgroundSize: '50px 50px'
                  }}></div>
                </div>

                {/* Corner Accent */}
                <div className="absolute bottom-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-cyan-400 to-transparent"></div>
                  <div className="absolute bottom-0 right-0 w-1 h-full bg-gradient-to-t from-cyan-400 to-transparent"></div>
                </div>
              </div>

              {/* Bottom Glow */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-orange-500/50 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
              
              {/* Floating Effect Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-orange-500/0 group-hover:border-orange-500/50 transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Bottom Decoration */}
        <div className="mt-16 flex justify-center">
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent animate-pulse"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scan {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100%);
          }
        }

        .animate-scan {
          animation: scan 2s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-scan {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
};

export default Shades;