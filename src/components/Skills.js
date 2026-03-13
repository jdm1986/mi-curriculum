import React from 'react';
import './Skills.css';
import { FaTools } from 'react-icons/fa';

const skillGroups = [
  {
    category: 'Frontend',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
  {
    category: 'Backend',
    skills: ['Java', 'C#', 'Spring Boot'],
  },
  {
    category: 'Bases de datos',
    skills: ['MySQL', 'Workbench', 'Oracle', 'PostgreSQL'],
  },
  {
    category: 'Datos & BI',
    skills: ['Power BI', 'R-Studio', 'Pentaho'],
  },
  {
    category: 'DevOps & Cloud',
    skills: ['Git', 'GitHub', 'Docker', 'Railway'],
  },
  {
    category: 'Hardware & IoT',
    skills: ['Arduino', 'ESP-32'],
  },
  {
    category: 'Herramientas',
    skills: ['Ofimática avanzada', 'Google Cloud', 'Canva', 'Prezi', 'UX/UI (fundamentos)'],
  },
];

function Skills() {
  return (
    <section className="skills">
      <h2><FaTools className="section-icon" /> Habilidades</h2>
      <div className="skills-groups">
        {skillGroups.map((group) => (
          <div key={group.category} className="skill-group">
            <span className="skill-group-label">{group.category}</span>
            <div className="skill-chips">
              {group.skills.map((skill) => (
                <span key={skill} className="skill-chip">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
