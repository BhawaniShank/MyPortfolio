import React from 'react';
import { 
  Code, PaintBucket, Code2, Atom, Database, GitBranch, 
  Github, FileCode, ClipboardList 
} from 'lucide-react';

const skills = [
  { id: 1, name: "HTML", icon: <Code size={40} /> },
  { id: 2, name: "CSS", icon: <PaintBucket size={40} /> },
  { id: 3, name: "JavaScript", icon: <Code2 size={40} /> },
  { id: 4, name: "TypeScript", icon: <FileCode size={40} /> },
  { id: 5, name: "React", icon: <Atom size={40} /> },
  { id: 6, name: "Node.js", icon: <Database size={40} /> },
  { id: 7, name: "Git", icon: <GitBranch size={40} /> },
  { id: 8, name: "GitHub", icon: <Github size={40} /> },
  { id: 9, name: "ClickUp", icon: <ClipboardList size={40} /> },
  { id: 10, name: "Jira", icon: <ClipboardList size={40} /> },
];

const Skills = () => {
  return (
    <div className="bg-[#0a0215] py-20 px-4" id='skills'>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-8">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {skills.map((skill) => (
            <div 
              key={skill.id} 
              className="flex flex-col items-center p-6 bg-[#160d2c] border border-[#291945] rounded-lg transform transition-all hover:scale-105"
            >
              <div className="text-blue-400 mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
