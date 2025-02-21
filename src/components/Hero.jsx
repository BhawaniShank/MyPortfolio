import React from "react";
import profileImage from "../assets/ProfileImage.png"; 
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div id="about" className="relative bg-gray-900 text-white overflow-hidden mt-16"> 
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-16 py-42 relative">
        <motion.div 
          className="lg:w-1/2 text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Hi, I'm
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              Bhawani Shankar
            </span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold mt-2 text-gray-300">
            Web Developer
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            I specialize in building <strong>responsive</strong> and <strong>dynamic</strong> websites using 
            modern technologies like <strong>ReactJS,Typescript, Node.js, and Tailwind CSS and beginner in NextJS</strong>.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4">
            <motion.a
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/BhawaniShank"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg text-lg font-medium bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-500 hover:to-blue-600 transition-all duration-300 shadow-md"
            >
              View My Work
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-6 py-3 rounded-lg text-lg font-medium border border-gray-600 hover:border-blue-500 transition-all duration-300"
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>

        <motion.div 
          className="lg:w-1/2 flex justify-center relative mt-10 lg:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-blue-500 shadow-2xl">
            <motion.img
              src={profileImage}
              alt="Bhawani Shankar"
              className="w-full h-full object-cover overflow-visible z-20"
              animate={{ y: [-20, -40, -20] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            />
          </div>
          {/* Glowing animated elements */}
          <div className="absolute -top-5 -left-5 w-16 h-16 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-5 -right-5 w-16 h-16 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
        </motion.div>
      </div>

      {/* Floating Particles */}
      <div className="absolute top-16 left-10 w-3 h-3 bg-blue-500 rounded-full animate-ping"></div>
      <div className="absolute bottom-24 right-20 w-4 h-4 bg-purple-500 rounded-full animate-ping"></div>
      <div className="absolute bottom-8 left-1/3 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
    </div>
  );
};

export default Hero;
