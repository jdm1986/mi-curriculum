// Importamos React para usar JSX
import React from 'react';
// Importamos los estilos específicos de este componente
import './AboutMe.css';
import { FaUser } from 'react-icons/fa'; // Importamos el icono de usuario

// Definimos el componente AboutMe
function AboutMe() {
  return (
    <section className="about-me">
      <h2><FaUser className="section-icon" /> Sobre mí</h2>
      <p>
        A lo largo de mi trayectoria, con más de 15 años de experiencia en el sector fitness,
        he alcanzado grandes logros profesionales impulsado por un fuerte compromiso laboral y búsqueda
        continua de crecimiento. Mi experiencia en la gestión de equipos, análisis de datos y mejora
        del rendimiento me ha permitido desarrollar habilidades clave en liderazgo, trabajo en equipo y motivación.
        El bienestar físico, mental y psicosocial de las personas han sido los pilares centrales de mi misión
        profesional, entendiendo que son la clave del éxito en este sector.
      </p>
      <p>
        Por otro lado, mi pasión por la tecnología me ha llevado a explorar nuevos horizontes en el mundo del
        desarrollo web, análisis de datos e inteligencia artificial. Aplicando el mismo nivel de dedicación y entusiasmo,
        estoy comprometido con un continuo aprendizaje y mejora de mis habilidades.
      </p>
      <p>
      Abierto a nuevas oportunidades laborales, busco retos que me permitan seguir creciendo, aportar valor y contribuir
      al desarrollo tanto del ámbito tecnológico como del sector fitness siempre con una visión de proyección y prospección.
      </p>
    </section>
  );
}

// Exportamos el componente para que pueda ser usado en otros archivos
export default AboutMe;
