import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { FaUser, FaBriefcase, FaGraduationCap, FaCertificate, FaTools, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';
import logoLeft from '../assets/logomenu.png'; // Logo izquierdo (menú)
import logoRight from '../assets/careto.png'; // Foto personal

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Detectar si es móvil

  // Escuchar cambios de tamaño de ventana para detectar si es móvil
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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

  // Función para volver a la sección "Sobre mí" al hacer clic en el logo en pantallas grandes
  const handleLogoClick = () => {
    if (!isMobile) {
      const aboutMeSection = document.getElementById('about-me');
      if (aboutMeSection) {
        aboutMeSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      toggleMenu();
    }
  };

   // Función para desplazarse a una sección
     const scrollToSection = (sectionId) => {
       const section = document.getElementById(sectionId);
       if (section) {
         section.scrollIntoView({ behavior: 'smooth' });
       }
     };

     // Función para manejar el click en la foto personal
     const handlePhotoClick = () => {
       scrollToSection('contact'); // Aquí usas el id de la sección de contacto
     };

  return (
    <>
      <nav className="navbar-section2">
        <div className="navbar-logo-left">
          <img src={logoLeft} alt="Logo Izquierdo" onClick={handleLogoClick} />
        </div>

        <div className="navbar-text">
          <h1>¡Hola!</h1>
          <p>Estás en la CV WEB de Jesús Díaz.</p>
        </div>

        <div className="navbar-logo-right">
          <img src={logoRight} alt="Foto Personal" onClick={handlePhotoClick} /> {/* Maneja el click */}
        </div>

        {/* Mostrar el menú en móviles o mantenerlo fijo en pantallas grandes */}
                {(isMobile && isOpen) || !isMobile ? (
                  <ul className={`menu-list-mobile ${isMobile && isOpen ? 'open' : ''}`}>
                    <li>
                      <FaUser className="menu-icon" />
                      <a href="#about-me" onClick={() => handleMenuClick('about-me')}>Sobre mí</a>
                    </li>
                    <li>
                      <FaBriefcase className="menu-icon" />
                      <a href="#experience" onClick={() => handleMenuClick('experience')}>Experiencia</a>
                    </li>
                    <li>
                      <FaGraduationCap className="menu-icon" />
                      <a href="#education" onClick={() => handleMenuClick('education')}>Educación</a>
                    </li>
                    <li>
                      <FaCertificate className="menu-icon" />
                      <a href="#courses" onClick={() => handleMenuClick('courses')}>Cursos</a>
                    </li>
                    <li>
                      <FaTools className="menu-icon" />
                      <a href="#skills" onClick={() => handleMenuClick('skills')}>Habilidades</a>
                    </li>
                    <li>
                      <FaProjectDiagram className="menu-icon" />
                      <a href="#projects" onClick={() => handleMenuClick('projects')}>Proyectos</a>
                    </li>
                    <li>
                      <FaEnvelope className="menu-icon" />
                      <a href="#contact" onClick={() => handleMenuClick('contact')}>Contacto</a>
                    </li>
          </ul>
        ) : null}
      </nav>
    </>
  );
}

export default Navbar;
