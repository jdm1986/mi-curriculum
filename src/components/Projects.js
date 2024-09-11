import React, { useState } from 'react';
import './Projects.css';
import { FaProjectDiagram, FaCaretDown, FaCaretUp } from 'react-icons/fa';

function Projects() {
  // Estado para controlar la apertura de los detalles de cada proyecto
  const [openDetails, setOpenDetails] = useState({
    gestionatuscv: false,
    jesusdiazmartincv: false,
  });

  // Función para alternar el estado del proyecto específico
  const toggleDetails = (project) => {
    setOpenDetails((prevState) => ({
      ...prevState,
      [project]: !prevState[project],
    }));
  };

  return (
    <section className="projects" id="projects">
      <h2>
        <FaProjectDiagram className="section-icon" /> Proyectos
      </h2>

      <ul className="project-list">
        {/* Proyecto jesusdiazmartincv.es */}
        <li>
          <a href="https://jesusdiazmartincv.es" target="_blank" rel="noopener noreferrer">
            jesusdiazmartincv.es - 09/2024
          </a>
          <span onClick={() => toggleDetails('jesusdiazmartincv')} className="details-toggle">
            {openDetails.jesusdiazmartincv ? <FaCaretUp /> : <FaCaretDown />}
          </span>

          {/* Detalles del proyecto jesusdiazmartincv.es */}
          {openDetails.jesusdiazmartincv && (
            <div className="project-details">
              <p><strong>Reto principal:</strong> Crear un CV web interactivo usando React y diseño responsivo.</p>
              <p><strong>Dificultades:</strong> Aprender React, gestionar el control de versiones con Git y configurar correctamente el dominio personalizado en GitHub Pages con HTTPS.</p>
              <p><strong>Lo que aprendí:</strong> Mejoré en React, control de versiones con Git, despliegue en producción y configuración de DNS y SSL. Adquirí experiencia integral en todo el ciclo de vida de un proyecto web.</p>
            </div>
          )}
        </li>

        {/* Proyecto GestionaTusCV */}
        <li>
          <a href="https://gestionatuscv.es" target="_blank" rel="noopener noreferrer">
            GestionaTusCV - 06/2024
          </a>
          <span onClick={() => toggleDetails('gestionatuscv')} className="details-toggle">
            {openDetails.gestionatuscv ? <FaCaretUp /> : <FaCaretDown />}
          </span>

          {/* Detalles del proyecto GestionaTusCV */}
          {openDetails.gestionatuscv && (
            <div className="project-details">
              <p><strong>Reto principal:</strong> Integrar React con funcionalidades de filtrado avanzado y autenticación de usuarios.</p>
              <p><strong>Dificultades:</strong> Problemas iniciales con la configuración del proxy inverso en Nginx, además de desafíos con la gestión de roles de usuario.</p>
              <p><strong>Lo que aprendí:</strong> Mejoré mis habilidades en React, comprendí mejor la autenticación JWT y adquirí experiencia con despliegue en servidores.</p>
            </div>
          )}
        </li>
      </ul>
    </section>
  );
}

export default Projects;
