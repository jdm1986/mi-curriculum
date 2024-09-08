// Projects.js
import React, { useState } from 'react';
import './Projects.css';

function Projects() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="projects" id="projects">
      <h2 onClick={toggleMenu}>Proyectos</h2>
      {isOpen && (
        <ul className="project-list">
          <li><a href="https://gestionatuscv.es" target="_blank" rel="noopener noreferrer">GestionaTuCV</a></li>
          {/* Futuros proyectos aquí */}
        </ul>
      )}
    </section>
  );
}

export default Projects;
