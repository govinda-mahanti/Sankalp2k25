import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-11-06T10:00:00').getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num) => num.toString().padStart(2, '0');

  const TimerUnit = ({ value, label, isMobile = false }) => (
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 to-amber-800/20 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300"></div>
      <div className={`relative border-l-4 border-r-4 border-t-4 border-amber-600 bg-black/80 backdrop-blur-sm rounded-t-lg
        ${isMobile ? 'w-28 h-28 sm:w-32 sm:h-32' : 'w-32 h-40 md:w-40 md:h-48'}
        flex flex-col items-center justify-center transform hover:scale-105 transition-transform duration-300`}>
        
        <div className="absolute -top-2 -left-2 w-4 h-4 border-l-4 border-t-4 border-amber-500"></div>
        <div className="absolute -top-2 -right-2 w-4 h-4 border-r-4 border-t-4 border-amber-500"></div>
        
        <span className={`font-bold text-white mb-1 ${isMobile ? 'text-4xl sm:text-5xl' : 'text-6xl md:text-7xl'}`}>
          {formatNumber(value)}
        </span>
        <span className={`text-amber-400 tracking-widest font-semibold ${isMobile ? 'text-xs sm:text-sm' : 'text-sm md:text-base'}`}>
          {label}
        </span>
      </div>
    </div>
  );

  const MobileLogo = () => (
    <div className="relative w-64 sm:w-72 md:w-80 h-64 sm:h-72 md:h-80 flex items-center justify-center">
      <div className="absolute inset-0 bg-amber-500/30 blur-3xl rounded-full animate-pulse"></div>
      <img 
        src="/src/assets/timechakra.png"
        alt="SANKALP Logo" 
        className="relative w-full h-full object-contain animate-spin-slow"
        style={{ 
          filter: 'brightness(1.3) contrast(1.4) drop-shadow(0 0 40px rgba(217, 119, 6, 0.6))',
          mixBlendMode: 'multiply'
        }}
      />
    </div>
  );

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-zinc-900 via-neutral-900 to-black overflow-hidden flex items-center justify-center py-8 md:py-20">
      
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: 'linear-gradient(rgba(217, 119, 6, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(217, 119, 6, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Top Glow */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 sm:px-6">
        
        {/* Title */}
        <div className="mb-6 md:mb-12">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-amber-500 tracking-widest text-center">
            SANKALP 2k25-26
          </h1>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-center gap-8 md:gap-16 relative">
          <TimerUnit value={timeLeft.days} label="DAYS" />
          <TimerUnit value={timeLeft.hours} label="HOURS" />

          <div className="w-56 h-48 md:w-72 md:h-56"></div>

          <TimerUnit value={timeLeft.minutes} label="MINUTES" />
          <TimerUnit value={timeLeft.seconds} label="SECONDS" />

          {/* Center Logo */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[250px] sm:w-[300px] md:w-[500px] md:h-[500px] flex items-center justify-center pointer-events-none">
            <div className="absolute inset-0 bg-amber-500/20 blur-2xl rounded-full animate-pulse"></div>
            <img 
              src="/src/assets/timechakra.png"
              alt="SANKALP Logo" 
              className="relative w-full h-full object-contain drop-shadow-2xl animate-spin-slow"
              style={{ 
                filter: 'brightness(1.2) contrast(1.3)',
                mixBlendMode: 'multiply'
              }}
            />
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex flex-col items-center w-full">
          
          {/* Logo */}
          <div className="flex justify-center -mt-4 mb-4">
            <MobileLogo />
          </div>

          {/* Timer Grid */}
          <div className="grid grid-cols-2 gap-4 w-full max-w-sm px-2 sm:px-4">
            <div className="flex justify-center">
              <TimerUnit value={timeLeft.days} label="DAYS" isMobile={true} />
            </div>
            <div className="flex justify-center">
              <TimerUnit value={timeLeft.hours} label="HOURS" isMobile={true} />
            </div>
            <div className="flex justify-center">
              <TimerUnit value={timeLeft.minutes} label="MINUTES" isMobile={true} />
            </div>
            <div className="flex justify-center">
              <TimerUnit value={timeLeft.seconds} label="SECONDS" isMobile={true} />
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animation */}
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 60s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Timer;
