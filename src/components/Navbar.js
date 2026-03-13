import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { FaUser, FaBriefcase, FaGraduationCap, FaCertificate, FaTools, FaProjectDiagram, FaEnvelope, FaGithub, FaDumbbell, FaBars, FaTimes } from 'react-icons/fa';
import logoLeft from '../assets/logomenu.png';
import logoRight from '../assets/CARETO2.png';

const sections = ['about-me', 'experience', 'education', 'courses', 'courses-fit', 'skills', 'projects', 'github', 'contact'];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
  const [activeSection, setActiveSection] = useState('about-me');

  // Escuchar cambios de tamaño de ventana para detectar si es móvil o tablet
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // IntersectionObserver para detectar la sección visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            window.history.replaceState(null, '', '#' + entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
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
          {isMobile && (
            <button className="hamburger-btn" onClick={toggleMenu} aria-label="Abrir menú">
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          )}
        </div>

        <div className="navbar-text">
          <h1>¡Hola!</h1>
          <p>Estás en la WEB-CV de Jesús Díaz.</p>
        </div>

        <div className="navbar-logo-right">
          <img src={logoRight} alt="Foto Personal" onClick={handlePhotoClick} />
        </div>

        {(isMobile && isOpen) || !isMobile ? (
          <ul className={`menu-list-mobile ${isMobile && isOpen ? 'open' : ''}`}>
            <li className={activeSection === 'about-me' ? 'active' : ''}>
              <FaUser className="menu-icon" />
              <a href="#about-me" onClick={() => handleMenuClick('about-me')}>Sobre mí</a>
            </li>
            <li className={activeSection === 'experience' ? 'active' : ''}>
              <FaBriefcase className="menu-icon" />
              <a href="#experience" onClick={() => handleMenuClick('experience')}>Experiencia</a>
            </li>
            <li className={activeSection === 'education' ? 'active' : ''}>
              <FaGraduationCap className="menu-icon" />
              <a href="#education" onClick={() => handleMenuClick('education')}>Educación</a>
            </li>
            <li className={activeSection === 'courses' ? 'active' : ''}>
              <FaCertificate className="menu-icon" />
              <a href="#courses" onClick={() => handleMenuClick('courses')}>Certificados IT</a>
            </li>
            <li className={activeSection === 'courses-fit' ? 'active' : ''}>
              <FaDumbbell className="menu-icon" />
              <a href="#courses-fit" onClick={() => handleMenuClick('courses-fit')}>Certificados Fitness</a>
            </li>
            <li className={activeSection === 'skills' ? 'active' : ''}>
              <FaTools className="menu-icon" />
              <a href="#skills" onClick={() => handleMenuClick('skills')}>Habilidades</a>
            </li>
            <li className={activeSection === 'projects' ? 'active' : ''}>
              <FaProjectDiagram className="menu-icon" />
              <a href="#projects" onClick={() => handleMenuClick('projects')}>Proyectos</a>
            </li>
            <li className={activeSection === 'github' ? 'active' : ''}>
              <FaGithub className="menu-icon" />
              <a href="#github" onClick={() => handleMenuClick('github')}>GitHub</a>
            </li>
            <li className={activeSection === 'contact' ? 'active' : ''}>
              <FaEnvelope className="menu-icon" />
              <a href="#contact" onClick={() => handleMenuClick('contact')}>Contacto</a>
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
