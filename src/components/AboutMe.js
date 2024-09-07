// Importamos React para usar JSX
import React from 'react';
// Importamos los estilos específicos de este componente
import './AboutMe.css';

// Definimos el componente AboutMe, que será una función que devuelve HTML (JSX)
function AboutMe() {
  return (
    <section className="about-me">
      <h2>Sobre mí</h2>
      <p>
        ¡Hola! Soy Jesús, desarrollador web en formación con una sólida experiencia en la gestión de equipos y análisis de datos en el sector del fitness. Ahora, estoy buscando aplicar mis habilidades en tecnología para seguir creciendo en el desarrollo de aplicaciones web.
      </p>
    </section>
  );
}

// Exportamos el componente para que pueda ser usado en otros archivos
export default AboutMe;
