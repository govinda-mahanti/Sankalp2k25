import React from 'react';
import { Globe, Linkedin, Instagram, Facebook, Youtube, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-orange-500/20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          
          {/* Get in Touch Section */}
          <div className="space-y-4">
            <h3 className="text-gray-500 text-sm uppercase tracking-wider mb-4">
              Get in Touch
            </h3>
            <a 
              href="mailto:sankalp@nist.edu" 
              className="text-xl md:text-2xl font-bold text-white hover:text-orange-400 transition-colors inline-block"
            >
              sankalp@nist.edu
            </a>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-4">
            <h3 className="text-gray-400 text-lg md:text-xl font-semibold mb-4">
              Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-3">
                <a href="#home" className="block text-gray-300 hover:text-orange-400 transition-colors">
                  Home
                </a>
                <a href="#events" className="block text-gray-300 hover:text-orange-400 transition-colors">
                  Events
                </a>
              </div>
              <div className="space-y-3">
                <a href="#team" className="block text-gray-300 hover:text-orange-400 transition-colors">
                  Team
                </a>
                <a href="#contact" className="block text-gray-300 hover:text-orange-400 transition-colors">
                  Contact
                </a>
              </div>
            </div>
          </div>

          {/* Hashtag Section */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-600 bg-clip-text text-transparent italic">
              #SANKALP2025
            </h2>
            
            {/* Social Media Icons */}
            <div className="flex items-center gap-6 pt-4">
              <a 
                href="#" 
                className="text-gray-400 hover:text-orange-400 transition-colors transform hover:scale-110 duration-200"
                aria-label="Website"
              >
                <Globe className="w-8 h-8" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-orange-400 transition-colors transform hover:scale-110 duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-8 h-8" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-orange-400 transition-colors transform hover:scale-110 duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-8 h-8" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-orange-400 transition-colors transform hover:scale-110 duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-8 h-8" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-orange-400 transition-colors transform hover:scale-110 duration-200"
                aria-label="YouTube"
              >
                <Youtube className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm md:text-base text-center md:text-left">
              Made with <span className="text-red-500">❤️</span> by Sankalp Tech Team
            </p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
              <span className="text-gray-500 text-sm">© 2025 SANKALP - NIST</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;