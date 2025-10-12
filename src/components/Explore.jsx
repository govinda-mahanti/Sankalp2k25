import React, { useEffect, useState } from 'react';

const Explore = () => {
  const [isLoading, setIsLoading] = useState(true);

  const categories = [
    {
      title: 'CULTURAL',
      image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=500&h=800&fit=crop',
      gradient: 'from-orange-500 to-yellow-600'
    },
    {
      title: 'EVENTS',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&h=800&fit=crop',
      gradient: 'from-red-500 to-pink-600'
    },
    {
      title: 'GAMES',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=500&h=800&fit=crop',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'HACKATHON',
      image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1200&h=800&fit=crop',
      isLarge: true
    },
    {
      title: 'PROSHOWS',
      image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=500&h=800&fit=crop',
      gradient: 'from-yellow-600 to-orange-700'
    },
    {
      title: 'CULTURAL',
      image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=500&h=800&fit=crop',
      gradient: 'from-orange-500 to-yellow-600'
    },
    {
      title: 'EVENTS',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&h=800&fit=crop',
      gradient: 'from-red-500 to-pink-600'
    },
  ];

  // Duplicate the categories to create a seamless loop
  const duplicatedCategories = [...categories, ...categories];

  useEffect(() => {
    // Preload images for smoother experience
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
          // Force reflow to ensure smooth animations
          document.body.clientHeight;
        })
        .catch(() => setIsLoading(false));
    };

    preloadImages();

    // Smooth scrolling for entire page
    const smoothScroll = () => {
      document.documentElement.style.scrollBehavior = 'smooth';
    };

    smoothScroll();

    // Cleanup
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="animate-pulse">
          <div className="w-16 h-16 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black text-white py-8 md:py-20 overflow-hidden smooth-rendering">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Title with Gradient */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-12 md:mb-16 text-center bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-600 bg-clip-text text-transparent smooth-appear">
          Explore Your Interests
        </h1>

        {/* Scrolling Container */}
        <div className="relative overflow-hidden">
          <div className="flex gap-4 animate-scroll">
            {duplicatedCategories.map((category, index) => (
              <div
                key={index}
                className={`relative flex-shrink-0 rounded-3xl overflow-hidden group cursor-pointer smooth-transform ${
                  category.isLarge ? 'w-[600px] h-[400px]' : 'w-[200px] h-[400px]'
                }`}
              >
                {/* Image with lazy loading */}
                <img
                  src={category.image}
                  alt={category.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 will-change-transform"
                />
                
                {/* Gradient Overlay for small cards */}
                {!category.isLarge && (
                  <div className={`absolute inset-0 bg-gradient-to-b ${category.gradient} opacity-40 group-hover:opacity-30 transition-opacity duration-300`}></div>
                )}

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-300"></div>

                {/* Title */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className={`font-black text-white tracking-wider will-change-transform ${
                    category.isLarge 
                      ? 'text-6xl md:text-7xl' 
                      : 'text-3xl md:text-4xl -rotate-90 whitespace-nowrap'
                  }`}>
                    {category.title}
                  </h2>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className={`absolute inset-0 ${category.isLarge ? 'bg-orange-500/10' : `bg-gradient-to-b ${category.gradient} opacity-20`}`}></div>
                </div>
              </div>
            ))}
          </div>
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

        .animate-scroll {
          animation: scroll 30s linear infinite;
          width: max-content;
          will-change: transform;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }

        /* Smooth rendering optimizations */
        .smooth-rendering {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-rendering: optimizeSpeed;
        }

        .smooth-appear {
          animation: fadeInUp 0.8s ease-out;
        }

        .smooth-transform {
          transform: translateZ(0);
          backface-visibility: hidden;
          perspective: 1000;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Performance optimizations */
        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        /* Reduce motion for accessibility */
        @media (prefers-reduced-motion: reduce) {
          .animate-scroll {
            animation: none;
          }
          
          .smooth-appear {
            animation: none;
          }
          
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      {/* Additional global styles for smoothness */}
      <style jsx global>{`
        /* Optimize scrolling performance */
        body {
          overflow-x: hidden;
        }

        /* Improve image rendering */
        img {
          image-rendering: -webkit-optimize-contrast;
          image-rendering: crisp-edges;
        }

        /* Smooth focus transitions */
        *:focus {
          transition: outline 0.2s ease;
        }

        /* Optimize animation performance */
        .will-change-transform {
          will-change: transform;
        }

        /* Hardware acceleration for animations */
        .hardware-accelerate {
          transform: translateZ(0);
        }
      `}</style>
    </div>
  );
};

export default Explore;