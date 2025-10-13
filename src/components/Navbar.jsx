import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'HOME', isRoute: true },
    { href: '#events', label: 'EVENTS', isRoute: false },
    { href: '#teams', label: 'TEAMS', isRoute: false },
    { href: '/contact', label: 'CONTACT US', isRoute: true }
  ];

  return (
    <>
      {/* Navigation - Desktop */}
      <nav className="fixed top-0 left-0 right-0 z-50 hidden md:flex items-center justify-between px-8 lg:px-12 py-6 lg:py-8 bg-transparent backdrop-blur-sm">
        <Link to="/" className="text-amber-400 text-sm font-semibold tracking-widest hover:text-amber-300 transition-colors">
          HOME
        </Link>
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
      <nav className="fixed top-0 left-0 right-0 z-50 md:hidden flex items-center justify-between px-6 py-6 bg-transparent backdrop-blur-sm">
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
      <div className={`fixed inset-0 bg-black/95 backdrop-blur-sm z-[60] md:hidden transition-all duration-300 ${
        mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map((link) => (
            link.isRoute ? (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-light tracking-widest transition-colors text-amber-100 hover:text-amber-400"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-light tracking-widest transition-colors text-amber-100 hover:text-amber-400"
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
    </>
  );
};

export default Navbar;
