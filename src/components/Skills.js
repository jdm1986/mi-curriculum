// Importamos React para usar JSX
import React from 'react';
// Importamos los estilos específicos de este componente
import './Skills.css';

// Definimos el componente Skills
function Skills() {
  return (
    <section className="skills">
      <h2>Habilidades</h2>
      <ul>
        <li>HTML - CSS - JavaScript - React</li>
        <li>Fundamentos de UX/UI</li>
        <li>Programación en Java y C#</li>
        <li>Bases de datos: MySQL, Workbench y Oracle</li>
        <li>Git y GitHub (Control de versiones)</li>
        <li>Arduino - Prácticas con módulo ESP-32</li>
        <li>Ofimática avanzada</li>
        <li>Herramientas de análisis de datos: R-Studio, Pentaho, MS PowerBI (Big Data)</li>
      </ul>
    </section>
  );
}

// Exportamos el componente para que pueda ser usado en otros archivos
export default Skills;
