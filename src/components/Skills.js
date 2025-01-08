// Importamos React para usar JSX
import React from 'react';
// Importamos los estilos específicos de este componente
import './Skills.css';
import { FaTools } from 'react-icons/fa'; // Importamos el icono de herramientas

// Definimos el componente Skills
function Skills() {
  return (
    <section className="skills">
      <h2><FaTools className="section-icon" /> Habilidades</h2>
      <ul>
        <li>HTML - CSS - JavaScript - React</li>
        <li>Fundamentos de UX/UI</li>
        <li>Programación en Java y C#</li>
        <li>Bases de datos: MySQL, Workbench y Oracle</li>
        <li>Git y GitHub (Control de versiones)</li>
        <li>Arduino - Prácticas con módulo ESP-32</li>
        <li>Ofimática avanzada y gestión en la nube</li>
        <li>Familiarizado con Canva y Prezi</li>
        <li>Herramientas de análisis de datos: R-Studio, Pentaho, MS PowerBI (Big Data)</li>
      </ul>
    </section>
  );
}

// Exportamos el componente para que pueda ser usado en otros archivos
export default Skills;
