import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { FaUser, FaBriefcase, FaGraduationCap, FaCertificate, FaTools, FaProjectDiagram, FaEnvelope, FaGithub, FaDownload } from 'react-icons/fa'; // Añadimos FaDownload
import logoLeft from '../assets/logomenu.png'; // Logo izquierdo (menú)
import logoRight from '../assets/careto.png'; // Foto personal
import cvFile from '../assets/CVTJESUS.pdf'; // Importamos el archivo PDF del CV
import { FaDumbbell } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024); // Detectar si es móvil o tablet

  // Escuchar cambios de tamaño de ventana para detectar si es móvil o tablet
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Función para alternar el menú en móviles y tablets
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
          <img src={logoRight} alt="Foto Personal" onClick={handlePhotoClick} />
        </div>

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
              <a href="#courses" onClick={() => handleMenuClick('courses')}>Certificados IT</a>
            </li>
            <li>
              <FaDumbbell className="menu-icon" />
              <a href="#courses-fit" onClick={() => handleMenuClick('courses-fit')}>Formación Fitness</a>
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
              <FaGithub className="menu-icon" />
              <a href="#github" onClick={() => handleMenuClick('github')}>GitHub</a>
            </li>
            <li>
              <FaEnvelope className="menu-icon" />
              <a href="#contact" onClick={() => handleMenuClick('contact')}>Contacto</a>
            </li>
            {/* Añadimos el botón de descarga del CV */}
            <li className="download-item">
              <a href={cvFile} download="CV_Jesus_Diaz.pdf" className="download-btn">
                <FaDownload className="menu-icon" /> Descargar CV
              </a>
            </li>
          </ul>
        ) : null}
      </nav>
      {/* Imagen fija en pantallas grandes */}
      {!isMobile && (
        <div className="fixed-photo-right">
          <img src={logoRight} alt="Foto Personal Fija" />
        </div>
      )}
    </>
  );
}

export default Navbar;
