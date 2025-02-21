import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { IoClose, IoMenu } from 'react-icons/io5';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { Form } from './';

const NAVIGATIONS = [
  { id: 1, name: 'About', link: 'about' },
  { id: 2, name: 'Skills', link: 'skills' },
  { id: 3, name: 'Experience', link: 'experience' },
  { id: 4, name: 'Projects', link: 'projects' },
  { id: 6, name: 'Contact', link: 'contact' },
];

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (link) => {
    navigate('/');
    const element = document.getElementById(link);
    if (element) {
      const position = element.getBoundingClientRect().top + window.scrollY - 60;
      window.scrollTo({ top: position, behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-6">
        
        {/* Logo */}
        <button className="text-3xl font-extrabold text-white">
          Bhawani <span className="text-blue-400">Shankar</span>
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-6">
          {NAVIGATIONS.map((nav, index) => (
            <li key={nav.id}>
              <button
                className={`transition-colors duration-300 text-lg font-semibold ${
                  isActive === index ? 'text-blue-400' : 'text-white hover:text-blue-400'
                }`}
                onClick={() => {
                  setIsActive(index);
                  handleScroll(nav.link);
                }}
              >
                {nav.name}
              </button>
            </li>
          ))}
        </ul>

        {/* Social Links */}
        <div className="hidden md:flex items-center gap-4">
          <a href="https://www.linkedin.com/in/bhawani-shankar-2oo3" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl text-gray-400 hover:text-blue-500 transition" />
          </a>
          <a href="https://github.com/BhawaniShank" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl text-gray-400 hover:text-blue-500 transition" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-2xl text-white">
          {menuOpen ? <IoClose /> : <IoMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: menuOpen ? '0%' : '100%' }}
        transition={{ duration: 0.3 }}
        className={`fixed top-16 right-0 w-3/4 h-full bg-gray-900 text-white shadow-lg md:hidden ${
          menuOpen ? 'block' : 'hidden'
        }`}
      >
        <ul className="flex flex-col gap-6 p-6">
          {NAVIGATIONS.map((nav, index) => (
            <li key={nav.id}>
              <button
                className={`block text-lg ${
                  isActive === index ? 'text-blue-400' : 'text-white hover:text-blue-400'
                }`}
                onClick={() => {
                  setIsActive(index);
                  setMenuOpen(false);
                  handleScroll(nav.link);
                }}
              >
                {nav.name}
              </button>
            </li>
          ))}
        </ul>
        <div className="p-6">
          <button
            onClick={() => {
              setIsOpen(true);
              setMenuOpen(false);
            }}
            className="text-lg font-semibold text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-500 transition"
          >
            Contact Me
          </button>
        </div>
      </motion.div>

      {/* Contact Form Sidebar */}
      <motion.div
        onClick={() => setIsOpen(false)}
        initial={{ opacity: 0, display: 'none' }}
        animate={{ opacity: isOpen ? 1 : 0, display: isOpen ? 'block' : 'none' }}
        transition={{ duration: 0.3 }}
        className="fixed w-full h-full bg-black/50 top-0 left-0 z-50 flex justify-end"
      >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          initial={{ x: '100%' }}
          animate={{ x: isOpen ? 0 : '100%' }}
          transition={{ duration: 0.3 }}
          className="w-80 h-full bg-gray-800 p-6"
        >
          <div className="flex justify-between items-center">
            <h1 className="text-lg font-semibold text-white">How can I help you?</h1>
            <IoClose className="text-2xl text-white cursor-pointer" onClick={() => setIsOpen(false)} />
          </div>
          <Form close={setIsOpen} />
        </motion.div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
