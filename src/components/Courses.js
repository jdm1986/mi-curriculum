// Importamos React para usar JSX
import React from 'react';
// Importamos los estilos específicos de este componente
import './Courses.css';
import { FaCertificate } from 'react-icons/fa';

// Definimos el componente Courses
function Courses() {
  return (
    <section className="courses">
      <h2><FaCertificate className="section-icon" /> Cursos y Certificaciones</h2>
      <ul>
        <li>
          <strong>Microsoft Power BI - Curso de Power BI Desktop</strong>
          <p><em>IBM - SkillsBuild</em> (Jun 2024) - (40 horas)</p>
        </li>
        <li>
           <strong>Fundamentos de IA de Google</strong>
           <p><em>Google - Coursera</em> (Jun 2024)</p>
        </li>
        <li>
           <strong>What is Data Science?</strong>
           <p><em>IBM - Coursera</em> (Abr 2024)</p>
        </li>
        <li>
          <strong>Programación en Inteligencia Artificial y Big Data aplicables en entornos 5G</strong>
          <p><em>Vodafone España - Integra Conocimiento e Innovación</em> (Mar 2024) - (150 horas)</p>
        </li>
        <li>
          <strong>Programación para soluciones de IoT y Smart City aplicables a entornos 5G</strong>
          <p><em>Vodafone España - Integra Conocimiento e Innovación</em> (Mar 2024) - (150 horas)</p>
        </li>
        <li>
          <strong>Realidad Virtual y Realidad Aumentada aplicables en entornos 5G</strong>
          <p><em>Vodafone España - Integra Conocimiento e Innovación</em> (Mar 2024) - (150 horas)</p>
        </li>
        <li>
          <strong>Iinerario formativo de mantenimiento de servicio en un centro de procesamiento de datos CPD</strong>
          <p><em>FUNDAE</em> (Feb 2024) - (425 horas)</p>
        </li>
        <li>
          <strong>Aspectos básicos del diseño de la experiencia del usuario</strong>
          <p><em>Google - Coursera</em> (Feb 2024)</p>
        </li>
      </ul>
    </section>
  );
}

// Exportamos el componente para que pueda ser usado en otros archivos
export default Courses;
