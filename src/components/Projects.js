import React, { useState } from 'react';
import './Projects.css';
import { FaProjectDiagram, FaCaretDown, FaCaretUp } from 'react-icons/fa';

// Importar las imágenes de la carpeta src/assets/powerbi
import proyectofinal1 from '../assets/powerbi/proyectofinal1.png';
import proyectofinal2 from '../assets/powerbi/proyectofinal2.png';
import proyectofinal3 from '../assets/powerbi/proyectofinal3.png';
import proyectofinalA from '../assets/powerbi/TractChun1.png';
import proyectofinalB from '../assets/powerbi/TractChun2.png';
import proyectofinalC from '../assets/powerbi/TractChun3.png';

function Projects() {
  // Estado para controlar la apertura de los detalles de cada proyecto
  const [openDetails, setOpenDetails] = useState({
    gestionatuscv: false,
    jesusdiazmartincv: false,
    powerbi: false,
    powerbiProject1: false,
    powerbiProject2: false,
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
             Mi CV-WEB >> www.jesusdiazmartincv.es - 09/2024
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
            APP Gestión CVS >> www.gestionatuscv.es - 06/2024
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

        {/* Proyecto Power BI */}
        <li>
          <span onClick={() => toggleDetails('powerbi')} className="details-toggle">
            Proyectos Power BI - 05/2024 {openDetails.powerbi ? <FaCaretUp /> : <FaCaretDown />}
          </span>

          {/* Proyectos Power BI */}
          {openDetails.powerbi && (
            <>
              {/* Proyecto 1 */}
              <div className="project-item">
                <span onClick={() => toggleDetails('powerbiProject1')} className="details-toggle">
                  Proyecto 1 {openDetails.powerbiProject1 ? <FaCaretUp /> : <FaCaretDown />}
                </span>
                {openDetails.powerbiProject1 && (
                  <div className="project-details">
                    <p><strong>Objetivo:</strong> Análisis de compras por categoría usando Power BI.</p>
                    <p><strong>Lo que aprendí:</strong> Uso de Power BI Desktop, visualización de datos, filtros y segmentación, y publicación de informes.</p>
                    <p><strong>Retos:</strong> Publicación de informes, modelado de datos y uso de fórmulas DAX.</p>
                    <div className="project-images">
                      <img src={proyectofinal1} alt="Proyecto Final 1 - Imagen 1" />
                      <img src={proyectofinal2} alt="Proyecto Final 1 - Imagen 2" />
                      <img src={proyectofinal3} alt="Proyecto Final 1 - Imagen 3" />
                    </div>
                  </div>
                )}
              </div>

              {/* Proyecto 2 */}
              <div className="project-item">
                <span onClick={() => toggleDetails('powerbiProject2')} className="details-toggle">
                  Proyecto 2 {openDetails.powerbiProject2 ? <FaCaretUp /> : <FaCaretDown />}
                </span>
                {openDetails.powerbiProject2 && (
                  <div className="project-details">
                    <p><strong>Objetivo:</strong> Análisis de ventas y compras usando Power BI.</p>
                    <p><strong>Lo que aprendí:</strong> Importación y transformación de datos, visualización de datos, uso de filtros, y publicación de informes.</p>
                    <p><strong>Retos:</strong> Restricciones de publicación, modelado de datos y uso de fórmulas DAX.</p>
                    <div className="project-images">
                      <img src={proyectofinalA} alt="Proyecto Final 2 - Imagen 1" />
                      <img src={proyectofinalB} alt="Proyecto Final 2 - Imagen 2" />
                      <img src={proyectofinalC} alt="Proyecto Final 2 - Imagen 3" />
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
        </li>
      </ul>
    </section>
  );
}

export default Projects;
