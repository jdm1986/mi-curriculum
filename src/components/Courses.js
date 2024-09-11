// Importamos React para usar JSX
import React, { useState } from 'react';
// Importamos los estilos específicos de este componente
import './Courses.css';
import { FaCertificate, FaCaretDown, FaCaretUp } from 'react-icons/fa';
import powerbi from '../assets/certificados it/powerbi.png';
import udemipowerbi from '../assets/certificados it/udemipowerbi.png';
import hosteleria from '../assets/certificados it/hosteleria.png';
import wdwpskills from '../assets/certificados it/wdwpskills.png';
import datascience from '../assets/certificados it/datascience.png';
import iotsmartcityIA from '../assets/certificados it/iotsmartcityIA.png';
import rvirtualyaumentada from '../assets/certificados it/rvirtualyaumentada.png';
import cpd from '../assets/certificados it/cpd.png';
import UX from '../assets/certificados it/UX.png';
import iabigdata from '../assets/certificados it/iabigdata.png';

// Definimos el componente Courses
function Courses() {
  const [activeImage, setActiveImage] = useState(null); // Para saber cuál está abierto

  // Función para alternar la visualización de la imagen
  const toggleImage = (image) => {
    setActiveImage(activeImage === image ? null : image); // Si la imagen está activa, la cierra, si no, la abre
  };



  return (
    <section className="courses">
      <h2><FaCertificate className="section-icon" /> Certificaciones IT</h2>
      <ul>
        <li>
          <strong>Microsoft Power BI - Curso de Power BI Desktop</strong>
          <p><em>DataHack - En colaboración con IBM - SkillsBuild</em> (Jun 2024) - (40 horas + 24 Udemy)</p>
          <span onClick={() => toggleImage('powerbi')} className="caret-icon">
            {activeImage === 'powerbi' ? <FaCaretUp /> : <FaCaretDown />}
          </span>
          {activeImage === 'powerbi' && (
            <div className="certificate-image">
              <img src={powerbi} alt="Certificado Power BI" />
              <img src={udemipowerbi} alt="Certificado Udemi Power BI" />
            </div>
          )}
        </li>
        <li>
          <strong>DISEÑO DE WEBS PARA HOSTELERÍA</strong>
          <p><em>CESUR - IFCD0038</em> (Jul 2024) - (100 horas)</p>
          <span onClick={() => toggleImage('hosteleria')} className="caret-icon">
            {activeImage === 'hosteleria' ? <FaCaretUp /> : <FaCaretDown />}
          </span>
          {activeImage === 'hosteleria' && (
            <div className="certificate-image">
              <img src={hosteleria} alt="Certificado Diseño de webs para hostelería" />
            </div>
          )}
        </li>
        <li>
          <strong>Working in a Digital World - Professional Skills</strong>
          <p><em>IBM - SkillsBuild</em> (Abr 2024)</p>
          <span onClick={() => toggleImage('wdwpskills')} className="caret-icon">
            {activeImage === 'wdwpskills' ? <FaCaretUp /> : <FaCaretDown />}
          </span>
          {activeImage === 'wdwpskills' && (
            <div className="certificate-image">
              <img src={wdwpskills} alt="Certificado Digital World Professional Skills" />
            </div>
          )}
        </li>
        <li>
          <strong>What is Data Science?</strong>
          <p><em>IBM - Coursera</em> (Abr 2024)</p>
          <span onClick={() => toggleImage('datascience')} className="caret-icon">
            {activeImage === 'datascience' ? <FaCaretUp /> : <FaCaretDown />}
          </span>
          {activeImage === 'datascience' && (
            <div className="certificate-image">
              <img src={datascience} alt="Certificado Data Science" />
            </div>
          )}
        </li>
        <li>
          <strong>Programación en Inteligencia Artificial y Big Data aplicables en entornos 5G</strong>
          <p><em>Vodafone España - Integra Conocimiento e Innovación - IFCD99</em> (Mar 2024) - (150 horas)</p>
          <span onClick={() => toggleImage('iabigdata')} className="caret-icon">
            {activeImage === 'iabigdata' ? <FaCaretUp /> : <FaCaretDown />}
          </span>
          {activeImage === 'iabigdata' && (
            <div className="certificate-image">
              <img src={iabigdata} alt="Certificado IA y Big Data" />
            </div>
          )}
        </li>
        <li>
          <strong>Programación para soluciones de IoT y Smart City aplicables a entornos 5G</strong>
          <p><em>Vodafone España - Integra Conocimiento e Innovación - IFCD97</em> (Mar 2024) - (150 horas)</p>
          <span onClick={() => toggleImage('iotsmartcityIA')} className="caret-icon">
            {activeImage === 'iotsmartcityIA' ? <FaCaretUp /> : <FaCaretDown />}
          </span>
          {activeImage === 'iotsmartcityIA' && (
            <div className="certificate-image">
              <img src={iotsmartcityIA} alt="Certificado IoT y Smart City" />
            </div>
          )}
        </li>
        <li>
          <strong>Realidad Virtual y Realidad Aumentada aplicables en entornos 5G</strong>
          <p><em>Vodafone España - Integra Conocimiento e Innovación - IFCD102</em> (Mar 2024) - (150 horas)</p>
          <span onClick={() => toggleImage('rvirtualyaumentada')} className="caret-icon">
            {activeImage === 'rvirtualyaumentada' ? <FaCaretUp /> : <FaCaretDown />}
          </span>
          {activeImage === 'rvirtualyaumentada' && (
            <div className="certificate-image">
              <img src={rvirtualyaumentada} alt="Certificado RV y RA" />
            </div>
          )}
        </li>
        <li>
          <strong>Mantenimiento de servicio en un centro de procesamiento de datos CPD</strong>
          <p><em>FUNDAE</em> (Feb 2024)</p>
          <span onClick={() => toggleImage('cpd')} className="caret-icon">
            {activeImage === 'cpd' ? <FaCaretUp /> : <FaCaretDown />}
          </span>
          {activeImage === 'cpd' && (
            <div className="certificate-image">
              <img src={cpd} alt="Certificado CPD" />
            </div>
          )}
        </li>
        <li>
          <strong>Aspectos básicos del diseño de la experiencia del usuario</strong>
          <p><em>Google - Coursera</em> (Feb 2024)</p>
          <span onClick={() => toggleImage('UX')} className="caret-icon">
            {activeImage === 'UX' ? <FaCaretUp /> : <FaCaretDown />}
          </span>
          {activeImage === 'UX' && (
            <div className="certificate-image">
              <img src={UX} alt="Certificado UX" />
            </div>
          )}
        </li>
      </ul>
    </section>
  );
}

// Exportamos el componente para que pueda ser usado en otros archivos
export default Courses;
