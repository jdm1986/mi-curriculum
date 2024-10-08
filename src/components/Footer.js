// Importamos React para usar JSX
import React from 'react';
// Importamos los estilos específicos del footer
import './Footer.css';
// Importamos el logo nuevo
import logo from '../assets/logodeveloper.png'; // Asegúrate de que el logo esté en esta ruta

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src={logo} alt="Logo Jesús" className="footer-logo" />
        <p>© {new Date().getFullYear()} All Rights Reserved</p>
      </div>
      <a href="/privacy-policy.html" className="privacy-link">Políticas de Privacidad</a>
    </footer>
  );
}

export default Footer;
