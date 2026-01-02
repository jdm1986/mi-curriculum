// Importamos React para usar JSX
import React from 'react';
// Importamos los estilos específicos del componente Contact
import './Contact.css';
// Importamos los iconos necesarios
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';
// Definimos el componente Contact
function Contact() {
  return (
    <section className="contact">
      <h2><FaEnvelope className="section-icon" /> Contacto</h2>
      <div className="contact-info">
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <a href="mailto:info@jesusdiazmartincv.es">info@jesusdiazmartincv.es</a>
        </div>
        <div className="contact-item">
          <FaLinkedin className="contact-icon" />
          <a href="https://www.linkedin.com/in/jesús-díaz-martín-822498a2" target="_blank" rel="noopener noreferrer">
            LinkedIn: Jesús Díaz Martín
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
