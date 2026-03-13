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
        <a href="mailto:info@jesusdiazmartincv.es" className="contact-btn contact-btn--email">
          <FaEnvelope className="contact-btn-icon" />
          info@jesusdiazmartincv.es
        </a>
        <a href="https://www.linkedin.com/in/jesús-díaz-martín-822498a2" target="_blank" rel="noopener noreferrer" className="contact-btn contact-btn--linkedin">
          <FaLinkedin className="contact-btn-icon" />
          LinkedIn: Jesús Díaz Martín
        </a>
      </div>
    </section>
  );
}

export default Contact;
