import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope ,FaPhone} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-8 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center space-y-4">
        <p className="text-gray-400 text-sm md:text-base">
          © {new Date().getFullYear()} <span className="text-white font-semibold">Bhawani Shankar</span>. All rights reserved.
        </p>

        <div className="flex items-center gap-6">
          <a 
            href="https://www.linkedin.com/in/bhawani-shankar-2oo3" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition-all duration-300 transform hover:scale-110"
          >
            <FaLinkedin size={32} className="hover:drop-shadow-[0_0_10px_#3b82f6]" />
          </a>
          <a 
            href="https://github.com/BhawaniShank" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition-all duration-300 transform hover:scale-110"
          >
            <FaGithub size={32} className="hover:drop-shadow-[0_0_10px_#3b82f6]" />
          </a>
          <a 
            href="mailto:swastikin1@gmail.com" 
            className="text-gray-400 hover:text-blue-500 transition-all duration-300 transform hover:scale-110"
          >
            <FaEnvelope size={32} className="hover:drop-shadow-[0_0_10px_#3b82f6]" />
          </a>
          <a 
            href="tel:+917691820090"
            className="text-gray-400 hover:text-blue-500 transition-all duration-300 transform hover:scale-110"
          >
            <FaPhone size={32} className="hover:drop-shadow-[0_0_10px_#3b82f6]" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
