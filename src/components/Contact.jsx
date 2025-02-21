import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    // Simulating form submission
    setTimeout(() => {
      setStatus("Message Sent Successfully!");
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0215] via-[#160d2c] to-[#1e123d] flex flex-col items-center justify-center py-10 px-6" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-lg bg-[#1b1035] p-8 rounded-2xl shadow-lg border border-[#3b2c5a] text-white backdrop-blur-lg bg-opacity-90"
      >
        <h2 className="text-4xl font-bold text-center mb-6 tracking-wide text-blue-400">
          Get in Touch
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
          {/* Name Input */}
          <div>
            <label className="block text-gray-300 text-sm">Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 mt-2 bg-[#251a42] border border-[#3b2c5a] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              placeholder="Enter your name"
            />
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-gray-300 text-sm">Your Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 mt-2 bg-[#251a42] border border-[#3b2c5a] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              placeholder="Enter your email"
            />
          </div>

          {/* Message Input */}
          <div>
            <label className="block text-gray-300 text-sm">Your Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full p-3 mt-2 bg-[#251a42] border border-[#3b2c5a] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              placeholder="Write your message..."
            />
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#3b82f6" }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg shadow-lg hover:from-purple-500 hover:to-blue-500 transition-all duration-500"
          >
            Send Message
          </motion.button>
        </form>

        {/* Status Message */}
        {status && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 text-center text-green-400 font-semibold"
          >
            {status}
          </motion.p>
        )}
      </motion.div>
    </div>
  );
};

export default Contact;
