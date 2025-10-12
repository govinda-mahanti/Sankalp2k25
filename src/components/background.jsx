import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Background = () => {
  const [logoLoaded, setLogoLoaded] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = '/src/assets/sankalp.png';
    img.onload = () => setLogoLoaded(true);
  }, []);

  const navLinks = [
    { href: '#home', label: 'HOME', active: true, isRoute: false },
    { href: '#events', label: 'EVENTS', isRoute: false },
    { href: '#teams', label: 'TEAMS', isRoute: false },
    { href: '/contact', label: 'CONTACT US', isRoute: true }
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video 
          src="/src/assets/background.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Navigation - Desktop */}
      <nav className="relative z-20 hidden md:flex items-center justify-between px-8 lg:px-12 py-6 lg:py-8">
        <a href="#home" className="text-amber-400 text-sm font-semibold tracking-widest hover:text-amber-300 transition-colors">
          HOME
        </a>
        <a href="#events" className="text-amber-100 text-sm font-light tracking-wider hover:text-amber-400 transition-colors">
          EVENTS
        </a>
        <div className="text-amber-400 text-xl lg:text-2xl font-serif tracking-wider">
          NIST University
          <div className="w-12 h-0.5 bg-amber-400 mx-auto mt-1"></div>
        </div>
        <a href="#teams" className="text-amber-100 text-sm font-light tracking-wider hover:text-amber-400 transition-colors">
          TEAMS
        </a>
        <Link to="/contact" className="text-amber-100 text-sm font-light tracking-wider hover:text-amber-400 transition-colors">
          CONTACT US
        </Link>
      </nav>

      {/* Navigation - Mobile */}
      <nav className="relative z-20 md:hidden flex items-center justify-between px-6 py-6">
        <div className="text-amber-400 text-lg font-serif tracking-wider">
          NIST University
          <div className="w-10 h-0.5 bg-amber-400 mt-1"></div>
        </div>
        
        {/* Hamburger Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-amber-400 hover:text-amber-300 transition-colors p-2"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black/95 backdrop-blur-sm z-30 md:hidden transition-all duration-300 ${
        mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map((link) => (
            link.isRoute ? (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-2xl font-light tracking-widest transition-colors ${
                  link.active
                    ? 'text-amber-400 font-semibold'
                    : 'text-amber-100 hover:text-amber-400'
                }`}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-2xl font-light tracking-widest transition-colors ${
                  link.active
                    ? 'text-amber-400 font-semibold'
                    : 'text-amber-100 hover:text-amber-400'
                }`}
              >
                {link.label}
              </a>
            )
          ))}
        </div>

        {/* Close Button */}
        <button 
          onClick={() => setMobileMenuOpen(false)}
          className="absolute top-6 right-6 text-amber-400 hover:text-amber-300 transition-colors p-2"
          aria-label="Close menu"
        >
          <X size={32} />
        </button>
      </div>

      {/* Central Logo Area */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="relative w-full h-full flex items-center justify-center">
          
          {/* Decorative Border - sankalp2.png (only top and bottom borders visible) */}
          <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ${logoLoaded ? 'opacity-40' : 'opacity-0'}`}>
            <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
              <img 
                src="/src/assets/sankalp2.png"
                alt="Decorative Border"
                className="min-w-full min-h-full object-cover"
                style={{ 
                  filter: 'drop-shadow(0 0 30px rgba(217, 119, 6, 0.4)) brightness(1.2) contrast(1.3)',
                  mixBlendMode: 'lighten',
                  opacity: 0.5,
                  maskImage: 'radial-gradient(circle at center, transparent 0%, transparent 35%, black 50%, black 100%)',
                  WebkitMaskImage: 'radial-gradient(circle at center, transparent 0%, transparent 35%, black 50%, black 100%)'
                }}
              />
            </div>
          </div>

          {/* Main Chakra Logo - sankalp.png (center circular part) */}
          <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ${logoLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <img 
              src="/src/assets/sankalp.png"
              alt="Sankalp Chakra"
              className="w-[280px] h-[280px] md:w-[350px] md:h-[350px] lg:w-[420px] lg:h-[420px] object-contain"
              style={{ 
                filter: 'drop-shadow(0 0 60px rgba(217, 119, 6, 0.9)) drop-shadow(0 0 100px rgba(217, 119, 6, 0.5)) brightness(1.1)',
                mixBlendMode: 'normal'
              }}
              onLoad={() => setLogoLoaded(true)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Background;