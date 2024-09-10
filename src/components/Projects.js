// Importamos React y los hooks para el estado
import React, { useState } from 'react';
// Importamos los estilos específicos de este componente
import './Projects.css';
import { FaProjectDiagram } from 'react-icons/fa'; // Icono de proyectos

// Definimos el componente Projects
function Projects() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="projects" id="projects">
      <h2 onClick={toggleMenu}><FaProjectDiagram className="section-icon" /> Proyectos</h2>
      {isOpen && (
        <ul className="project-list">
          <li><a href="https://gestionatuscv.es" target="_blank" rel="noopener noreferrer">GestionaTusCV</a></li>
          {/* Futuros proyectos aquí */}
        </ul>
      )}
    </section>
  );
}

export default Projects;
