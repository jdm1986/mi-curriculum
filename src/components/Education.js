// Importamos React para usar JSX
import React from 'react';
// Importamos los estilos específicos de este componente
import './Education.css';
import { FaGraduationCap } from 'react-icons/fa';

// Definimos el componente Education
function Education() {
  return (
    <section className="education">
      <h2><FaGraduationCap className="section-icon" /> Educación</h2>
      <ul>
        <li>
          <strong>Grado Superior en Desarrollo de Aplicaciones Web</strong>
          <p><em>ILERNA</em> (2023 - 2025)</p>
        </li>
        <li>
          <strong>Técnico Superior en Acondicionamiento Físico</strong>
          <p><em>IES Virgen de los Reyes</em> (2018 - 2020)</p>
        </li>
        <li>
          <strong>Bachillerato de Ciencias Sociales</strong>
          <p><em>IES Aljarafe</em> (2002 - 2004)</p>
        </li>
      </ul>
    </section>
  );
}

// Exportamos el componente para que pueda ser usado en otros archivos
export default Education;
