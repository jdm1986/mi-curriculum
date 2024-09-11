// Importamos React para usar JSX
import React, { useState } from 'react';
// Importamos los estilos específicos de este componente
import './Education.css';
import { FaGraduationCap, FaCaretDown, FaCaretUp } from 'react-icons/fa';
import bachiller from '../assets/estudios/bachiller.png';
import tsaf from '../assets/estudios/tsaf.png';

// Definimos el componente Education
function Education() {
  const [activeImage, setActiveImage] = useState(null); // Para controlar qué imagen está activa

  // Función para alternar la visualización de la imagen
  const toggleImage = (image) => {
    setActiveImage(activeImage === image ? null : image); // Si la imagen está activa, la cierra, si no, la abre
  };

  return (
    <section className="education">
      <h2><FaGraduationCap className="section-icon" /> Educación</h2>
      <ul>
        <li>
          <strong>Grado Superior en Desarrollo de Aplicaciones Web</strong>
          <p><em>ILERNA</em> (2023 - 2025)</p>
        </li>
        <li>
          <strong>Técnico Superior en Acondicionamiento Físico</strong>
          <p><em>IES Virgen de los Reyes</em> (2018 - 2020)</p>
          <span onClick={() => toggleImage('tsaf')} className="caret-icon">
            {activeImage === 'tsaf' ? <FaCaretUp /> : <FaCaretDown />}
          </span>
          {activeImage === 'tsaf' && (
            <div className="certificate-image">
              <img src={tsaf} alt="Título TS Acondicionamiento Físico" />
            </div>
          )}
        </li>
        <li>
          <strong>Bachillerato de Ciencias Sociales</strong>
          <p><em>IES Aljarafe</em> (2002 - 2004)</p>
          <span onClick={() => toggleImage('bachiller')} className="caret-icon">
            {activeImage === 'bachiller' ? <FaCaretUp /> : <FaCaretDown />}
          </span>
          {activeImage === 'bachiller' && (
            <div className="certificate-image">
              <img src={bachiller} alt="Título Bachillerato" />
            </div>
          )}
        </li>
      </ul>
    </section>
  );
}

// Exportamos el componente para que pueda ser usado en otros archivos
export default Education;
