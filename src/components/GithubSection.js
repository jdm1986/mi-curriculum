// Importamos React para usar JSX
import React from 'react';
import { FaGithub } from 'react-icons/fa'; // Importamos el icono de GitHub
import './GithubSection.css'; // Importamos los estilos

// Definimos el componente GithubSection
function GithubSection() {
  return (
    <section className="github-section" id="github">
      <h2><FaGithub /> Mi GitHub</h2>
      <p>Puedes explorar más de mis proyectos y colaboraciones en mi perfil de GitHub:</p>
      <a href="https://github.com/jdm1986" target="_blank" rel="noopener noreferrer" className="github-link">
        <FaGithub /> github.com/jdm1986
      </a>
    </section>
  );
}

export default GithubSection;
