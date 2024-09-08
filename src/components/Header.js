// Header.js
import React, { useState } from 'react';
import './Header.css';
import logo from './assets/LOGO2.png'; // Aquí usa tu logo

function Header() {
  return (
    <header className="header">
      <img src={LOGO} alt="LOGO" className="LOGO" />
      <nav className="navbar">
        <a href="#about-me">Sobre mí</a>
        <a href="#experience">Experiencia</a>
        <a href="#education">Estudios</a>
        <a href="#courses">Cursos</a>
        <a href="#skills">Habilidades</a>
        <a href="#projects">Proyectos</a>
      </nav>
    </header>
  );
}

export default Header;
