import React from 'react';
import { Instagram, Linkedin, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer
      id="contact-us"
      className="bg-gradient-to-b from-[#000a40] to-black opacity-85 text-white py-12 px-6 sm:px-8 lg:px-16 rounded-t-3xl shadow-2xl"
    >
      <div className="max-w-6xl mx-auto">
        {/* Logo Section */}
        <div className="flex items-center justify-center mb-10">
          <img 
            className="h-24 md:h-48  transition-transform duration-30" 
            src="logo_withoutbg.png" 
            alt="Logo" 
          />
        </div>
        
        {/* Navigation Links */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 text-center md:text-left">
          <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
            <h3 className="font-bold text-xl mb-5 text-[#e6f2ff] tracking-wide">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex items-center justify-center md:justify-start gap-3">
                <Mail className="text-[#4fc3f7] w-5 h-5" />
                <a 
                  href="mailto:acm-kjsce@somaiya.edu" 
                  className="hover:text-[#81d4fa] transition-colors duration-300"
                >
                  acm-kjsce@somaiya.edu
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3">
                <MapPin className="text-[#4fc3f7] w-5 h-5" />
                <span>KJ Somaiya College of Engineering, B-413</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
            <h3 className="font-bold text-xl mb-5 text-[#e6f2ff] tracking-wide">Connect With Us</h3>
            <div className="flex justify-center space-x-6">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-300"
              >
                <Instagram className="text-[#e1306c] w-8 h-8" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-300"
              >
                <Linkedin className="text-[#0077b5] w-8 h-8" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center text-sm font-medium mt-10 border-t-2 border-white/30 pt-6">
          <p className="mb-2 text-[#e6f2ff] text-base font-semibold">Made with ❤️ by ACM-KJSCE</p>
          <p className="text-gray-300">&copy; {new Date().getFullYear()} ACM-KJSCE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;