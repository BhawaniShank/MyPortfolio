import React from 'react';
import { FaBriefcase } from 'react-icons/fa';

const experiences = [
  {
    title: "Web Developer Intern",
    company: "Versai Tech Solutions",
    duration: "Nov 2024 - Present",
    description: "Developing responsive and dynamic web applications using React.js and Tailwind CSS. Collaborating with backend developers to integrate RESTful APIs and optimize performance.",
  },
  {
    title: "Web Developer Intern",
    company: "GrapplTech",
    duration: "Aug 2023 - Sep 2023",
    description: "Designed and implemented interactive UI components using React.js and Tailwind CSS. Focused on enhancing user experience and ensuring mobile responsiveness.",
  },
  {
    title: "Web Developer Intern",
    company: "Tanmay Sachin Foundation",
    duration: "July 2023 - August 2023",
    description: "Developed and maintained front-end features using React.js and Tailwind CSS. Integrated third-party APIs for dynamic content fetching and improved app functionality.",
  },
];

const Experience = () => {
  return (
    <div className="bg-gray-900 py-20 px-4" id="experience">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Experience</h2>

        <div className="relative">
       
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-500 h-full"></div>

          {experiences.map((exp, index) => (
            <div key={index} className={`relative flex items-center w-full my-8 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-blue-500 flex items-center justify-center rounded-full shadow-lg border-4 border-gray-900">
                <FaBriefcase className="text-white text-xl" />
              </div>

              <div className={`bg-gray-800 p-6 rounded-lg shadow-lg w-[45%] ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                <h3 className="text-2xl font-semibold text-white">{exp.title}</h3>
                <p className="text-gray-400">{exp.company} | {exp.duration}</p>
                <p className="text-gray-300 mt-2">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
