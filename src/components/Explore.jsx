import React, { useEffect, useState } from 'react';

const Explore = () => {
  const [isLoading, setIsLoading] = useState(true);

  const categories = [
    {
      title: 'CULTURAL',
      description: 'Dance, Music & Arts',
      image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=500&h=800&fit=crop',
      gradient: 'from-orange-500 to-yellow-600',
      icon: '🎭'
    },
    {
      title: 'EVENTS',
      description: 'Workshops & Seminars',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&h=800&fit=crop',
      gradient: 'from-red-500 to-pink-600',
      icon: '🎪'
    },
    {
      title: 'GAMES',
      description: 'Sports & Competitions',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=500&h=800&fit=crop',
      gradient: 'from-purple-500 to-pink-500',
      icon: '🎮'
    },
    // {
    //   title: 'HACKATHON',
    //   description: 'Code, Build & Innovate',
    //   image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1200&h=800&fit=crop',
    //   gradient: 'from-cyan-500 to-blue-600',
    //   isLarge: true,
    //   icon: '💻'
    // },
    {
      title: 'PROSHOWS',
      description: 'Celebrity Performances',
      image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=500&h=800&fit=crop',
      gradient: 'from-yellow-600 to-orange-700',
      icon: '⭐'
    },
    {
      title: 'CULTURAL',
      description: 'Dance, Music & Arts',
      image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=500&h=800&fit=crop',
      gradient: 'from-orange-500 to-yellow-600',
      icon: '🎭'
    },
    {
      title: 'EVENTS',
      description: 'Workshops & Seminars',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&h=800&fit=crop',
      gradient: 'from-red-500 to-pink-600',
      icon: '🎪'
    },
  ];

  const duplicatedCategories = [...categories, ...categories];

  useEffect(() => {
    const preloadImages = () => {
      const imagePromises = duplicatedCategories.map(category => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = category.image;
          img.onload = resolve;
          img.onerror = reject;
        });
      });

      Promise.all(imagePromises)
        .then(() => {
          setIsLoading(false);
        })
        .catch(() => setIsLoading(false));
    };

    preloadImages();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        {/* Spinner */}
        <div className="relative">
          <div className="w-20 h-20 border-4 border-orange-500/30 border-t-orange-500 rounded-full animate-spin" />
          <div className="absolute inset-0 w-20 h-20 border-4 border-transparent border-b-yellow-500 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1s' }} />
        </div>

        {/* Loading text */}
        <p className="mt-6 text-orange-400 font-semibold tracking-widest animate-pulse">Loading Experience...</p>
      </div>
    );
  }

  return (
    <div className="relative bg-black text-white py-16 md:py-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient orbs */}
        <div className="absolute top-32 -left-48 w-96 h-96 bg-orange-500/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-32 -right-48 w-96 h-96 bg-yellow-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }} />

        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-orange-400/40 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${4 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>

        {/* Scanlines effect */}
        <div className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.03) 4px)'
          }}
        />

        {/* Matrix/Grid pattern across full section */}
        <div className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, .15) 25%, rgba(255, 255, 255, .15) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .15) 75%, rgba(255, 255, 255, .15) 76%, transparent 77%, transparent),
              linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, .15) 25%, rgba(255, 255, 255, .15) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .15) 75%, rgba(255, 255, 255, .15) 76%, transparent 77%, transparent)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-6">
        {/* Enhanced Title Section */}
        <div className="text-center mb-16 md:mb-20 animate-fade-in-down">
          <div className="relative inline-block">
            {/* Glow effect */}
            <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-600 opacity-30 animate-pulse" />

            {/* Main title with shimmer effect */}
            <h1 className="relative text-5xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-600 bg-clip-text text-transparent tracking-tight leading-tight mb-4"
              style={{
                backgroundSize: '200% auto',
                animation: 'gradient-shift 3s ease-in-out infinite'
              }}>
              {'Explore Your Interests'.split(' ').map((word, i) => (
                <span
                  key={i}
                  className="inline-block hover:scale-110 transition-transform duration-300 cursor-default"
                  style={{
                    animationDelay: `${i * 0.1}s`
                  }}
                >
                  {word}{' '}
                </span>
              ))}
            </h1>

            {/* Decorative elements */}
            <div className="flex justify-center items-center gap-3 mt-6">
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent animate-pulse" />
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse shadow-[0_0_15px_rgba(251,146,60,0.6)]" />
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent animate-pulse" />
            </div>
          </div>

          <p className="mt-6 text-gray-400 text-lg md:text-xl font-light tracking-wide">
            Dive into endless possibilities
          </p>

          {/* Scroll indicator */}
          <div className="mt-8 flex justify-center opacity-50 hover:opacity-100 transition-opacity">
            <div className="flex items-center gap-2 text-sm text-orange-400 animate-pulse">
              <span>Scroll to explore</span>
              <span className="text-xl">→</span>
            </div>
          </div>
        </div>

        {/* Scrolling Container with enhanced cards */}
        <div className="relative">
          {/* Fade edges */}
                 <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

          <div className="overflow-visible py-12">
            <div className="flex gap-6 animate-scroll hover:animation-paused">
              {duplicatedCategories.map((category, index) => (
                <div
                  key={index}
                  className={`group relative flex-shrink-0 rounded-3xl overflow-visible cursor-pointer transform transition-all duration-700 ${
                    category.isLarge
                      ? 'w-[600px] h-[450px] hover:scale-110 hover:-translate-y-6'
                      : 'w-[250px] h-[450px] hover:w-[500px] hover:scale-105 hover:-translate-y-6'
                  }`}
                  style={{
                    transformStyle: 'preserve-3d',
                    perspective: '1000px'
                  }}
                >
                  {/* Animated rotating border */}
                  <div className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 rounded-3xl overflow-hidden">
                      <div className={`absolute inset-[-100%] bg-gradient-to-r ${category.gradient}`}
                        style={{
                          animation: 'border-spin 3s linear infinite'
                        }}
                      />
                    </div>
                    <div className="absolute inset-[2px] bg-black rounded-3xl" />
                  </div>

                  {/* Floating outer glow */}
                  <div className={`absolute -inset-1 bg-gradient-to-br ${category.gradient} rounded-3xl opacity-0 group-hover:opacity-60 blur-xl transition-all duration-700`} />

                  {/* Ripple effect on hover */}
                  <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
                    <div className={`absolute top-1/2 left-1/2 w-4 h-4 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r ${category.gradient} rounded-full opacity-0 group-hover:opacity-30 group-hover:animate-[ripple_1s_ease-out]`} />
                  </div>

                  {/* Card border */}
                  <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-orange-500/40 transition-all duration-500 z-20" />

                  {/* Main card content */}
                  <div className="relative w-full h-full bg-gradient-to-br from-gray-900 to-black rounded-3xl overflow-hidden">

                    {/* Background Image with 3D tilt */}
                    <img
                      src={category.image}
                      alt={category.title}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover:scale-125"
                      style={{
                        transform: 'translateZ(0)',
                        transition: 'transform 1s cubic-bezier(0.4, 0, 0.2, 1)'
                      }}
                      onMouseMove={(e) => {
                        const card = e.currentTarget.closest('.group');
                        const rect = card.getBoundingClientRect();
                        const x = e.clientX - rect.left;
                        const y = e.clientY - rect.top;
                        const centerX = rect.width / 2;
                        const centerY = rect.height / 2;
                        const rotateX = (y - centerY) / 20;
                        const rotateY = (centerX - x) / 20;
                        e.currentTarget.style.transform = `scale(1.25) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1.25) rotateX(0deg) rotateY(0deg)';
                      }}
                    />

                    {/* Light trails */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-50"
                        style={{
                          animation: 'shimmer 2s ease-in-out infinite'
                        }}
                      />
                      <div className="absolute bottom-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-white to-transparent opacity-50"
                        style={{
                          animation: 'shimmer 2s ease-in-out infinite',
                          animationDelay: '1s'
                        }}
                      />
                    </div>

                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-50 mix-blend-multiply transition-all duration-700 group-hover:opacity-30 group-hover:scale-105`} />

                    {/* Dark gradient for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent transition-all duration-500" />

                    {/* Holographic shimmer sweep */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1500 ease-in-out"
                        style={{ width: '50%' }}
                      />
                    </div>

                    {/* Animated scan line */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent animate-scan" />
                    </div>

                    {/* Grid overlay on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-all duration-700"
                      style={{
                        backgroundImage: `
                          linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, .2) 25%, rgba(255, 255, 255, .2) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .2) 75%, rgba(255, 255, 255, .2) 76%, transparent 77%, transparent),
                          linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, .2) 25%, rgba(255, 255, 255, .2) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .2) 75%, rgba(255, 255, 255, .2) 76%, transparent 77%, transparent)
                        `,
                        backgroundSize: '30px 30px'
                      }}
                    />

                    {/* Enhanced floating particles on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {[...Array(8)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute rounded-full animate-float"
                          style={{
                            width: `${2 + Math.random() * 3}px`,
                            height: `${2 + Math.random() * 3}px`,
                            left: `${10 + Math.random() * 80}%`,
                            top: `${10 + Math.random() * 80}%`,
                            animationDelay: `${i * 0.3}s`,
                            animationDuration: `${2 + Math.random() * 3}s`,
                            background: `radial-gradient(circle, ${i % 2 === 0 ? '#fb923c' : '#fbbf24'}, transparent)`,
                            boxShadow: `0 0 ${8 + Math.random() * 4}px ${i % 2 === 0 ? 'rgba(251,146,60,0.8)' : 'rgba(251,191,36,0.8)'}`
                          }}
                        />
                      ))}
                      {/* Shooting stars effect */}
                      <div className="absolute top-1/4 left-1/4 w-20 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:animate-[shimmer_3s_ease-in-out_infinite]"
                        style={{ transform: 'rotate(-45deg)', animationDelay: '0.5s' }}
                      />
                      <div className="absolute bottom-1/3 right-1/3 w-16 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:animate-[shimmer_3s_ease-in-out_infinite]"
                        style={{ transform: 'rotate(45deg)', animationDelay: '1.5s' }}
                      />
                    </div>

                    {/* Icon badge */}
                    <div className="absolute top-6 right-6 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100">
                      <div className="bg-gradient-to-br from-orange-500 to-yellow-500 w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-2xl animate-float">
                        {category.icon}
                      </div>
                    </div>

                    {/* Enhanced corner accents with energy lines */}
                    <div className="absolute top-0 left-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10">
                      <div className="absolute top-4 left-4 w-full h-0.5 bg-gradient-to-r from-orange-400 via-yellow-400 to-transparent animate-pulse shadow-[0_0_10px_rgba(251,146,60,0.8)]" />
                      <div className="absolute top-4 left-4 w-0.5 h-full bg-gradient-to-b from-orange-400 via-yellow-400 to-transparent animate-pulse shadow-[0_0_10px_rgba(251,146,60,0.8)]" />
                    </div>
                    <div className="absolute bottom-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10">
                      <div className="absolute bottom-4 right-4 w-full h-0.5 bg-gradient-to-l from-orange-400 via-yellow-400 to-transparent animate-pulse shadow-[0_0_10px_rgba(251,146,60,0.8)]" style={{ animationDelay: '0.3s' }} />
                      <div className="absolute bottom-4 right-4 w-0.5 h-full bg-gradient-to-t from-orange-400 via-yellow-400 to-transparent animate-pulse shadow-[0_0_10px_rgba(251,146,60,0.8)]" style={{ animationDelay: '0.3s' }} />
                    </div>

                    {/* Pulsing energy border effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                      {/* Top edge */}
                      <div className="absolute top-0 left-0 right-0 h-1 overflow-hidden">
                        <div className="absolute left-0 top-0 w-1/3 h-full bg-gradient-to-r from-transparent via-orange-400 to-transparent"
                          style={{
                            animation: 'wave 2s ease-in-out infinite'
                          }}
                        />
                      </div>
                      {/* Bottom edge */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 overflow-hidden">
                        <div className="absolute right-0 bottom-0 w-1/3 h-full bg-gradient-to-r from-transparent via-yellow-400 to-transparent"
                          style={{
                            animation: 'wave 2s ease-in-out infinite',
                            animationDelay: '1s'
                          }}
                        />
                      </div>
                    </div>

                    {/* Content Container */}
                    <div className={`absolute inset-0 flex items-center justify-center p-8 z-10`}>
                      <div className={`text-center transition-all duration-700 -rotate-90 group-hover:rotate-0`}>
                        {/* Title with letter animation */}
                        <h2 className={`font-black text-white tracking-wider mb-2 transition-all duration-700 ${
                          category.isLarge
                            ? 'text-6xl md:text-7xl lg:text-8xl'
                            : 'text-3xl md:text-4xl lg:text-5xl whitespace-nowrap group-hover:text-5xl md:group-hover:text-6xl'
                        }`}>
                          {category.title.split('').map((letter, i) => (
                            <span
                              key={i}
                              className="inline-block transition-all duration-500 hover:text-transparent hover:bg-gradient-to-r hover:from-orange-400 hover:via-yellow-400 hover:to-orange-400 hover:bg-clip-text hover:scale-125 hover:-translate-y-2"
                              style={{
                                transitionDelay: `${i * 0.05}s`,
                                textShadow: '0 0 20px rgba(251, 146, 60, 0.5)'
                              }}
                            >
                              {letter === ' ' ? '\u00A0' : letter}
                            </span>
                          ))}
                        </h2>

                        {/* Description - show on hover */}
                        <p className={`text-orange-400 font-semibold tracking-widest opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-700 ${
                          category.isLarge ? 'text-lg md:text-xl' : 'text-base md:text-lg'
                        }`}>
                          {category.description}
                        </p>

                        {/* Decorative line on hover */}
                        <div className="mt-4 flex justify-center opacity-0 group-hover:opacity-100 transition-all duration-700">
                          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
                        </div>

                        {/* Additional info for expanded small cards */}
                        {!category.isLarge && (
                          <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200">
                            <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
                              <span className="text-2xl">{category.icon}</span>
                              <span className="tracking-wide">Explore Now</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>


                    {/* Bottom glow bar */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Vignette */}
                    <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(0,0,0,0.6)] pointer-events-none" />
                  </div>

                  {/* External bottom glow */}
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-3/4 h-10 bg-gradient-to-r from-transparent via-orange-500/40 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-full" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom decoration */}
        <div className="mt-20 flex flex-col items-center gap-6 animate-fade-in-up">
          <div className="flex items-center gap-3">
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
            <div className="flex gap-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }} />
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }} />
            </div>
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
          </div>

          <p className="text-gray-500 text-sm font-light tracking-widest uppercase">
            Discover Your Passion
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-50%));
          }
        }

        @keyframes wave {
          0%, 100% {
            transform: translateX(-50%) translateY(0);
          }
          50% {
            transform: translateX(50%) translateY(0);
          }
        }

        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes border-spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
          width: max-content;
          will-change: transform;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-scroll,
          [style*="animation"] {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Explore;
