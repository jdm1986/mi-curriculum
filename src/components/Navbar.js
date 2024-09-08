import React, { useState } from 'react';
import './Navbar.css';
import logoLeft from '../assets/logomenu.png'; // Logo izquierdo (menú)
import logoRight from '../assets/careto.png'; // Foto personal

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Función para alternar el menú
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Sección 2: Logo | Texto central | Foto personal */}
      <nav className="navbar-section2">
        {/* Logo izquierdo (actúa como botón para abrir el menú en todas las pantallas) */}
        <div className="navbar-logo-left">
          <img src={logoLeft} alt="Logo Izquierdo" onClick={toggleMenu} />
        </div>

        {/* Texto central */}
        <div className="navbar-text">
          <h1>¡Hola, soy Jesús!</h1>
          <p>Bienvenido/a a mi CV WEB.</p>
        </div>

        {/* Foto personal */}
        <div className="navbar-logo-right">
          <img src={logoRight} alt="Foto Personal" />
        </div>
      </nav>

      {/* Menú desplegable en todas las pantallas */}
      {isOpen && (
        <ul className="menu-list">
          <li><a href="#about-me" onClick={toggleMenu}>Sobre mí</a></li>
          <li><a href="#experience" onClick={toggleMenu}>Experiencia</a></li>
          <li><a href="#education" onClick={toggleMenu}>Educación</a></li>
          <li><a href="#courses" onClick={toggleMenu}>Cursos</a></li>
          <li><a href="#skills" onClick={toggleMenu}>Habilidades</a></li>
          <li><a href="#projects" onClick={toggleMenu}>Proyectos</a></li>
        </ul>
      )}
    </>
  );
}

export default Navbar;
