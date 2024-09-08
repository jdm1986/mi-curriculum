import React, { useState } from 'react';
import './Navbar.css';
import logoLeft from '../assets/logomenu.png'; // Logo izquierdo (menú)
import logoRight from '../assets/careto.png'; // Foto personal

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Función para alternar el menú en móviles
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Función para cerrar el menú después de hacer clic en un enlace y hacer scroll suave
  const handleMenuClick = (section) => {
    setIsOpen(false);
    const targetSection = document.getElementById(section);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className="navbar-section2">
        <div className="navbar-logo-left">
          <img src={logoLeft} alt="Logo Izquierdo" onClick={toggleMenu} />
        </div>

        <div className="navbar-text">
          <h1>¡Hola, soy Jesús!</h1>
          <p>Bienvenido/a a mi CV WEB.</p>
        </div>

        <div className="navbar-logo-right">
          <img src={logoRight} alt="Foto Personal" />
        </div>

        {isOpen && (
          <ul className="menu-list-mobile open">
            {/* Ahora incluimos href="#" para mejorar la accesibilidad */}
            <li><a href="#about-me" onClick={() => handleMenuClick('about-me')}>Sobre mí</a></li>
            <li><a href="#experience" onClick={() => handleMenuClick('experience')}>Experiencia</a></li>
            <li><a href="#education" onClick={() => handleMenuClick('education')}>Educación</a></li>
            <li><a href="#courses" onClick={() => handleMenuClick('courses')}>Cursos</a></li>
            <li><a href="#skills" onClick={() => handleMenuClick('skills')}>Habilidades</a></li>
            <li><a href="#projects" onClick={() => handleMenuClick('projects')}>Proyectos</a></li>
          </ul>
        )}
      </nav>
    </>
  );
}

export default Navbar;
