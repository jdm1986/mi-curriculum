// Importamos React para poder usar JSX
import React from 'react';
// Importamos los estilos de este componente
import './Experience.css';

// Definimos el componente Experience
function Experience() {
  return (
    <section className="experience">
      <h2>Experiencia Laboral</h2>
      <ul>
        <li>
          <strong>Club Manager</strong>
          <p><em>Synergym Sevilla</em> (Dic 2021 - Mar 2023)</p>
          <li>Gestión íntegra del club y soporte al área manager. Coordinación y formación de equipos y nuevos club manager, apertura de clubs, análisis de resultados y gestión de objetivos.</li>
        </li>
        <li>
          <strong>Assistant Fitness Manager y Entrenador Personal</strong>
          <p><em>Viding Concesion Sevilla S.L.</em> (Ago 2013 - Dic 2021)</p>
          <li>Gestión del área fitness, venta y fidelización de clientes de EP, coordinación de actividades y técnico multidisciplinar con soporte musical.</li>
        </li>
        <li>
          <strong>Técnico Polivalente</strong>
          <p><em>En diversos Clubes</em> (Ago 2007 - Dic 2013)</p>
          <ul>
            <li>Club Fit-in & Fitness Center Tomares (Sep 2010 - Sep 2013)</li>
            <li>Cartuja Sport S.L. (Oct 2008 - Jul 2010)</li>
            <li>Galisport S.L. (Jul 2007 - Oct 2008)</li>
          </ul>
        </li>
         <li>
            <strong>Otros Desempeños Profesionales</strong>
                <ul>
                   <li>Responsable en Cafetería/Copas Bar Siza (Dic 2006 - May 2008)</li>
                   <li>Responsable distribuidor de Telefonía Móvil Srt Serotec (Abr 2005 - Abr 2006)</li>
                </ul>
         </li>
      </ul>
    </section>
  );
}

// Exportamos el componente para que pueda ser usado en otros archivos
export default Experience;
