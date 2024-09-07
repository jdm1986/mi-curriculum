// Importamos React para usar JSX
import React from 'react';
// Importamos los estilos específicos de este componente
import './AboutMe.css';

// Definimos el componente AboutMe
function AboutMe() {
  return (
    <section className="about-me">
      <h2>Sobre mí</h2>
      <p>
        A lo largo de mi trayectoria profesional, el sector fitness ha sido una fuente de grandes logros y satisfacción personal. Mi experiencia en la gestión de equipos, análisis de datos y mejora del rendimiento en diversos clubes me ha permitido desarrollar habilidades clave en liderazgo y trabajo en equipo. Sin embargo, siempre he sido un entusiasta de la tecnología, lo que me ha llevado a comenzar una transición hacia el mundo del desarrollo web y la inteligencia artificial.
      </p>
      <p>
        Aunque estoy comprometido con mi crecimiento en el sector tecnológico, mi pasión por el fitness sigue siendo parte esencial de quién soy. Estoy abierto a nuevas oportunidades en ambos sectores, con el deseo de combinar mi experiencia en gestión y tecnología para aportar valor en proyectos multidisciplinares.
      </p>
    </section>
  );
}

// Exportamos el componente para que pueda ser usado en otros archivos
export default AboutMe;
