import React from 'react';
import './Contact.css'; // Importamos los estilos
import { FaEnvelope, FaPhone, FaLinkedin, FaDownload } from 'react-icons/fa'; // Importamos los iconos
import cvFile from '../assets/CVTJESUS.pdf'; // Asegúrate de que la ruta al PDF sea correcta

function Contact() {
  return (
    <section className="contact">
      <h2>Contacto</h2>
      <div className="contact-info">
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <a href="mailto:info@jesusdiazmartincv.es">info@jesusdiazmartincv.es</a>
        </div>
        <div className="contact-item">
          <FaPhone className="contact-icon" />
          <p>647 754 717</p>
        </div>
        <div className="contact-item">
          <FaLinkedin className="contact-icon" />
          <a href="https://www.linkedin.com/in/jesús-díaz-martín-822498a2" target="_blank" rel="noopener noreferrer">
            LinkedIn: Jesús Díaz Martín
          </a>
        </div>
        {/* Botón para descargar el CV */}
        <div className="download-item">
          <a href={cvFile} download="CV_Jesus_Diaz.pdf" className="download-btn">
            <FaDownload className="contact-icon" /> Descargar CV
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
