import React from 'react';
import { ExternalLink, Globe, Home, DollarSign } from 'lucide-react';

const projects = [
  {
    id: 1,
    name: "Al Qaytharah",
    description: "A Dubai-based construction company dedicated to transforming ideas into reality. Specializing in innovative designs and precision engineering for residential and commercial spaces. Built using React.js & Tailwind CSS and backend in php.",
    link: "https://alqaytharah.com/",
    icon: <Globe size={40} className="text-blue-400" />
  },
  {
    id: 2,
    name: "My Resort Home",
    description: "A resort management website built using React, allowing users to explore and book resorts effortlessly.",
    link: "https://github.com/BhawaniShank/MyResortHome",
    icon: <Home size={40} className="text-green-400" />
  },
  {
    id: 3,
    name: "Currency Converter",
    description: "A simple yet efficient currency converter application developed using React and real-time exchange rates.",
    link: "https://github.com/BhawaniShank/currencyConverter",
    icon: <DollarSign size={40} className="text-yellow-400" />
  }
];

const Projects = () => {
  return (
    <div className="bg-[#0a0215] py-20 px-4" id='projects'>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-[#160d2c] p-6 rounded-lg border border-[#291945] shadow-lg transition-all transform hover:scale-105 hover:border-blue-500 hover:shadow-blue-500/30"
            >
              <div className="flex items-center gap-4">
                {project.icon}
                <h3 className="text-2xl font-semibold text-white">{project.name}</h3>
              </div>
              <p className="text-gray-300 mt-3 leading-relaxed">{project.description}</p>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mt-4 flex items-center gap-2 text-blue-400 hover:text-blue-500 transition-all duration-300"
              >
                View Project <ExternalLink size={20} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
