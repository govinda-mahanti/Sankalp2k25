import React from 'react';

const Shades = () => {
  const events = [
    {
      id: 1,
      title: 'Star Night',
      artist: 'YASSER DESAI',
      image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=1000&fit=crop',
      labelColor: 'bg-yellow-400',
      gradient: 'from-blue-600 via-purple-600 to-pink-600',
      accentColor: 'purple'
    },
    {
      id: 2,
      title: 'DJ Night',
      artist: 'WASEEM',
      image: 'https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=800&h=1000&fit=crop',
      labelColor: 'bg-cyan-400',
      gradient: 'from-blue-500 via-cyan-500 to-blue-600',
      accentColor: 'cyan'
    },
    {
      id: 3,
      title: 'Comedy Night',
      artist: 'COMING SOON',
      image: 'https://images.unsplash.com/photo-1585699324551-f6c309eedeca?w=800&h=1000&fit=crop',
      labelColor: 'bg-yellow-400',
      gradient: 'from-orange-500 via-yellow-500 to-orange-600',
      accentColor: 'orange'
    }
  ];

  return (
    <div className="relative bg-black text-white py-16 md:py-24 px-4 md:px-6 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient orbs */}
        <div className="absolute top-20 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 -right-40 w-80 h-80 bg-orange-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-orange-400/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent),
              linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Title Section with enhanced animations */}
        <div className="text-center mb-16 md:mb-24 animate-fade-in-down">
          <div className="relative inline-block">
            {/* Glow effect behind title */}
            <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-600 opacity-30 animate-pulse" />

            <h1 className="relative text-5xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-600 bg-clip-text text-transparent tracking-tight leading-tight">
              Shades of Sankalp
            </h1>

            {/* Decorative underline */}
            <div className="flex justify-center mt-6 space-x-2">
              <div className="w-12 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent animate-pulse" />
              <div className="w-12 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent animate-pulse" style={{ animationDelay: '0.5s' }} />
              <div className="w-12 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </div>

          <p className="mt-6 text-gray-400 text-lg md:text-xl font-light tracking-wide animate-fade-in-up">
            Experience the most electrifying nights of the year
          </p>
        </div>

        {/* Events Grid with staggered animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-10">
          {events.map((event, index) => (
            <div
              key={event.id}
              className="group relative animate-slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Main card container */}
              <div className="relative overflow-hidden rounded-3xl transform transition-all duration-700 hover:scale-105 hover:-translate-y-6 cursor-pointer">

                {/* Floating glow effect on hover */}
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 rounded-3xl opacity-0 group-hover:opacity-75 blur-xl transition-all duration-700 animate-glow-pulse" />

                {/* Card border with shimmer */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-orange-500/50 transition-all duration-500 overflow-hidden">
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  </div>
                </div>

                {/* Inner card */}
                <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl overflow-hidden">

                  {/* Event Label - Enhanced */}
                  <div className="absolute top-5 left-5 z-30">
                    <div className={`${event.labelColor} text-black font-black text-sm md:text-base px-5 py-2.5 rounded-xl shadow-2xl transform -rotate-2 transition-all duration-500 group-hover:rotate-0 group-hover:scale-110 group-hover:-translate-y-1 relative overflow-hidden`}>
                      {/* Shine effect */}
                      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                      <span className="relative z-10">{event.title}</span>
                    </div>

                    {/* Decorative dots */}
                    <div className="flex gap-1 mt-2 ml-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-pulse" />
                      <div className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                      <div className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
                    </div>
                  </div>

                  {/* Image Container */}
                  <div className="relative aspect-[3/4] overflow-hidden">
                    {/* Background Image with parallax effect */}
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-125 group-hover:rotate-2"
                    />

                    {/* Gradient Overlay with animation */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${event.gradient} opacity-60 mix-blend-multiply transition-all duration-700 group-hover:opacity-40 group-hover:scale-105`} />

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent transition-opacity duration-500 group-hover:from-black/90" />

                    {/* Animated scan line */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent animate-scan" />
                    </div>

                    {/* Cyber grid effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-all duration-700"
                      style={{
                        backgroundImage: `
                          linear-gradient(0deg, transparent 24%, rgba(0, 255, 255, .3) 25%, rgba(0, 255, 255, .3) 26%, transparent 27%, transparent 74%, rgba(0, 255, 255, .3) 75%, rgba(0, 255, 255, .3) 76%, transparent 77%, transparent),
                          linear-gradient(90deg, transparent 24%, rgba(0, 255, 255, .3) 25%, rgba(0, 255, 255, .3) 26%, transparent 27%, transparent 74%, rgba(0, 255, 255, .3) 75%, rgba(0, 255, 255, .3) 76%, transparent 77%, transparent)
                        `,
                        backgroundSize: '40px 40px'
                      }}
                    />

                    {/* Glowing particles on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {[...Array(6)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-1 h-1 bg-orange-400 rounded-full animate-float shadow-[0_0_10px_rgba(251,146,60,0.8)]"
                          style={{
                            left: `${20 + Math.random() * 60}%`,
                            top: `${20 + Math.random() * 60}%`,
                            animationDelay: `${i * 0.3}s`,
                            animationDuration: `${2 + Math.random() * 2}s`
                          }}
                        />
                      ))}
                    </div>

                    {/* Corner accents */}
                    <div className="absolute top-0 left-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0">
                      <div className="absolute top-4 left-4 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-transparent" />
                      <div className="absolute top-4 left-4 w-0.5 h-full bg-gradient-to-b from-cyan-400 to-transparent" />
                    </div>
                    <div className="absolute bottom-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0">
                      <div className="absolute bottom-4 right-4 w-full h-0.5 bg-gradient-to-l from-orange-400 to-transparent" />
                      <div className="absolute bottom-4 right-4 w-0.5 h-full bg-gradient-to-t from-orange-400 to-transparent" />
                    </div>

                    {/* Artist Name with enhanced styling */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 transform transition-all duration-700 group-hover:-translate-y-4">
                      <div className="relative">
                        {/* Glow behind text */}
                        <div className="absolute inset-0 blur-2xl bg-gradient-to-r from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-50 transition-opacity duration-500" />

                        <h2 className="relative text-5xl md:text-6xl lg:text-7xl font-black text-white leading-none tracking-tighter transform transition-all duration-700 group-hover:scale-105 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:via-yellow-400 group-hover:to-orange-400 group-hover:bg-clip-text">
                          {event.artist.split(' ').map((word, i) => (
                            <span
                              key={i}
                              className="inline-block transition-transform duration-500"
                              style={{
                                transitionDelay: `${i * 50}ms`
                              }}
                            >
                              {word}{' '}
                            </span>
                          ))}
                        </h2>

                        {/* Subtitle decoration */}
                        <div className="mt-3 flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                          <div className="h-px flex-1 bg-gradient-to-r from-orange-500 to-transparent" />
                          <span className="text-xs md:text-sm text-orange-400 font-semibold tracking-widest uppercase">
                            Featured Artist
                          </span>
                          <div className="h-px flex-1 bg-gradient-to-l from-orange-500 to-transparent" />
                        </div>
                      </div>
                    </div>

                    {/* Vignette effect */}
                    <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.5)] pointer-events-none" />
                  </div>

                  {/* Bottom glow bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* External bottom glow */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-12 bg-gradient-to-r from-transparent via-orange-500/50 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-full" />
              </div>

              {/* Floating badge on hover */}
              <div className="absolute -top-3 -right-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100 z-40">
                <div className="bg-gradient-to-br from-orange-500 to-yellow-500 text-white px-4 py-2 rounded-full font-bold text-xs shadow-2xl animate-float">
                  Live Event
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Decoration */}
        <div className="mt-20 md:mt-28 flex flex-col items-center gap-6 animate-fade-in-up">
          {/* Decorative line */}
          <div className="flex items-center gap-3">
            <div className="w-16 md:w-24 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
            <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse shadow-[0_0_20px_rgba(251,146,60,0.6)]" />
            <div className="w-16 md:w-24 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
          </div>

          {/* Call to action */}
          <p className="text-gray-500 text-sm md:text-base font-light tracking-widest uppercase">
            More events coming soon
          </p>
        </div>
      </div>
    </div>
  );
};

export default Shades;
