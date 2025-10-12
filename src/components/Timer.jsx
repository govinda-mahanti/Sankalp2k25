import React, { useState, useEffect } from 'react';
import sankalpLogo from '/src/assets/sankalp.png';

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

  const formatNumber = (num) => {
    return num.toString().padStart(2, '0');
  };

  const TimerUnit = ({ value, label, isMobile = false }) => (
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 to-amber-800/20 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300"></div>
      <div className={`relative border-l-4 border-r-4 border-t-4 border-amber-600 bg-black/80 backdrop-blur-sm rounded-t-lg ${
        isMobile ? 'w-20 h-24' : 'w-32 h-40 md:w-40 md:h-48'
      } flex flex-col items-center justify-center transform hover:scale-105 transition-transform duration-300`}>
        <div className="absolute -top-2 -left-2 w-4 h-4 border-l-4 border-t-4 border-amber-500"></div>
        <div className="absolute -top-2 -right-2 w-4 h-4 border-r-4 border-t-4 border-amber-500"></div>
        
        <span className={`font-bold text-white mb-2 ${
          isMobile ? 'text-2xl' : 'text-6xl md:text-7xl'
        }`}>
          {formatNumber(value)}
        </span>
        <span className={`text-amber-400 tracking-widest font-semibold ${
          isMobile ? 'text-xs' : 'text-sm md:text-base'
        }`}>
          {label}
        </span>
      </div>
    </div>
  );

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-zinc-900 via-neutral-900 to-black overflow-hidden flex items-center justify-center py-8">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: 'linear-gradient(rgba(217, 119, 6, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(217, 119, 6, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Top glow effect */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 flex flex-col items-center justify-center w-full px-4">
        {/* Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-amber-500 tracking-widest mb-8 md:mb-16 text-center">
          SANKALP 2025-26
        </h1>

        {/* Desktop Layout - Exactly like before */}
        <div className="hidden md:flex items-center justify-center gap-6 md:gap-12">
          <TimerUnit value={timeLeft.days} label="DAYS" />
          <TimerUnit value={timeLeft.hours} label="HOURS" />
          
          {/* Center Logo */}
          <div className="relative w-48 h-48 md:w-56 md:h-56 flex items-center justify-center mx-4">
            <div className="absolute inset-0 bg-amber-500/20 blur-2xl rounded-full animate-pulse"></div>
            <img 
              src={sankalpLogo}
              alt="SANKALP Logo" 
              className="relative w-full h-full object-contain animate-spin-slow drop-shadow-2xl"
            />
          </div>

          <TimerUnit value={timeLeft.minutes} label="MINUTES" />
          <TimerUnit value={timeLeft.seconds} label="SECONDS" />
        </div>

        {/* Mobile Layout - Compact and Clean */}
        <div className="md:hidden flex flex-col items-center w-full max-w-sm">
          {/* Logo on top for mobile */}
          <div className="relative w-32 h-32 flex items-center justify-center mb-8">
            <div className="absolute inset-0 bg-amber-500/20 blur-xl rounded-full animate-pulse"></div>
            <img 
              src={sankalpLogo}
              alt="SANKALP Logo" 
              className="relative w-full h-full object-contain animate-spin-slow"
            />
          </div>

          {/* Timer units in grid for mobile */}
          <div className="grid grid-cols-2 gap-4 w-full">
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

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 60s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Timer;