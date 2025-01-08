// Importamos React para poder usar JSX
import React from 'react';
// Importamos los estilos de este componente
import './Experience.css';
import { FaBriefcase, FaProjectDiagram } from 'react-icons/fa'; // Importamos el icono de experiencia y proyecto

// Definimos el componente Experience
function Experience() {
  // Función para navegar a la sección de proyectos
  const handleNavigateToProjects = () => {
    window.location.href = '#projects';
  };

  return (
    <section className="experience">
      <h2><FaBriefcase className="section-icon" /> Experiencia Laboral</h2>
      <ul>
      <li>
            <strong>Club Manager</strong>
            <p><em>Fitness Park España - Jts Seville </em> (Dic 2024 - Actualidad)</p>
            <li>Gestión de la precomercialización, funcionamiento íntegro del club y soporte al district manager. Selección, coordinación y formación de equipos, análisis de resultados y gestión de objetivos.</li>

            </li>
        <li>
          <strong>Club Manager</strong>
          <p><em>Synergym Sevilla</em> (Dic 2021 - Mar 2023)</p>
          <li>Gestión íntegra del club y soporte al área manager. Coordinación y formación de equipos y nuevos club manager, apertura de clubs, análisis de resultados y gestión de objetivos.</li>
          {/* Enlace a los proyectos Synergym */}
          <p className="project-link" onClick={handleNavigateToProjects}>
            <FaProjectDiagram /> Proyectos Synergym
          </p>
        </li>
        <li>
          <strong>Assistant Fitness Manager y Entrenador Personal</strong>
          <p><em>Viding Concesion Sevilla S.L.</em> (Ago 2013 - Dic 2021)</p>
          <li>Gestión del área fitness, venta y fidelización de clientes de EP, coordinación de actividades y técnico multidisciplinar con soporte musical.</li>
          {/* Enlace a los proyectos Viding */}
          <p className="project-link" onClick={handleNavigateToProjects}>
            <FaProjectDiagram /> Proyectos Viding
          </p>
        </li>
        <li>
          <strong>Técnico Polivalente en AADD con soporte musical y Sala Fitness</strong>
          <ul>
            <li>Club Fit-in & Fitness Center Tomares (Sep 2010 - Sep 2013)</li>
            <li>Cartuja Sport S.L. (Oct 2008 - Jul 2010)</li>
            <li>Galisport S.L. (Jul 2007 - Oct 2008)</li>
          </ul>
        </li>
        <li>
          <strong>Otros Desempeños Profesionales</strong>
          <ul>
            <li>Responsable en Cafetería/Copas Bar Siza (Dic 2006 - May 2008)</li>
            <li>Responsable distribuidor de Telefonía Móvil Srt Serotec (Abr 2005 - Abr 2006)</li>
          </ul>
        </li>
      </ul>
    </section>
  );
}

// Exportamos el componente para que pueda ser usado en otros archivos
export default Experience;
