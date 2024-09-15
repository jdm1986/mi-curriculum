import React, { useState } from 'react';
import './Projects.css';
import { FaProjectDiagram, FaCaretDown, FaCaretUp } from 'react-icons/fa';

// Importar las imágenes de la carpeta src/assets/powerbi
import proyectofinal1 from '../assets/powerbi/proyectofinal1.png';
import proyectofinal2 from '../assets/powerbi/proyectofinal2.png';
import proyectofinal3 from '../assets/powerbi/proyectofinal3.png';
import proyectofinalA from '../assets/powerbi/TractChun1.png';
import proyectofinalB from '../assets/powerbi/TractChun2.png';
import proyectofinalC from '../assets/powerbi/TractChun3.png';

function Projects() {
  // Estado para controlar la apertura de los detalles de cada proyecto
  const [openDetails, setOpenDetails] = useState({
    gestionatuscv: false,
    jesusdiazmartincv: false,
    powerbi: false,
    powerbiProject1: false,
    powerbiProject2: false,
  });

  // Función para alternar el estado del proyecto específico
  const toggleDetails = (project) => {
    setOpenDetails((prevState) => ({
      ...prevState,
      [project]: !prevState[project],
    }));
  };

  return (
    <section className="projects" id="projects">
      <h2>
        <FaProjectDiagram className="section-icon" /> Proyectos
      </h2>

      <ul className="project-list">
        {/* Proyecto jesusdiazmartincv.es */}
        <li onClick={() => toggleDetails('jesusdiazmartincv')} className="toggle-container">
          <button className="project-button">
            Mi CV-WEB >> www.jesusdiazmartincv.es - 09/2024
          </button>
          <span className="details-toggle">
            {openDetails.jesusdiazmartincv ? <FaCaretUp /> : <FaCaretDown />}
          </span>

          {/* Detalles del proyecto jesusdiazmartincv.es */}
          {openDetails.jesusdiazmartincv && (
            <div className="project-details">
              <p><strong>Reto principal:</strong> El objetivo del proyecto fue crear un CV web interactivo y accesible que mostrara mi formación, experiencia y habilidades de manera atractiva. Este proyecto debía ser más dinámico y moderno que un CV tradicional, destacando mi perfil como programador junior, con énfasis en la usabilidad y el diseño responsivo..</p>
              <p><strong>Dificultades:</strong> Programación en React: Al ser uno de mis primeros proyectos en React, tuve que aprender a gestionar componentes, estados y rutas, asegurando una estructura clara y eficiente en el código.

                                                Control de versiones con Git: Hubo retos en la sincronización de cambios y la resolución de conflictos al realizar push en GitHub, lo que me permitió mejorar mi manejo de control de versiones.

                                                Diseño responsivo: Adaptar el diseño para pantallas grandes y móviles fue clave. Aprendí a aplicar media queries y técnicas de CSS avanzadas para asegurar que la web fuera funcional y atractiva en cualquier dispositivo.

                                                Despliegue y configuración de DNS: Al desplegar el sitio en GitHub Pages, tuve que configurar correctamente las entradas DNS y SSL para que el dominio personalizado (jesusdiazmartincv.es) fuera accesible de forma segura..</p>
              <p><strong>Lo que aprendí:</strong> Mejoré en React, control de versiones con Git, despliegue en producción y configuración de DNS y SSL. Adquirí experiencia integral en todo el ciclo de vida de un proyecto web.</p>
            </div>
          )}
        </li>

        {/* Proyecto GestionaTusCV */}
                <li onClick={() => toggleDetails('gestionatuscv')} className="toggle-container">
                  <button className="project-button">
                    APP Gestión CVS >> www.gestionatuscv.es - 06/2024
                  </button>
                  <span className="details-toggle">
                    {openDetails.gestionatuscv ? <FaCaretUp /> : <FaCaretDown />}
                  </span>

                  {openDetails.gestionatuscv && (
                    <div className="project-details">
                      <div className="visit-link">
                        <a href="https://gestionatuscv.es" target="_blank" rel="noopener noreferrer">
                          Toca aquí para visitar >> www.gestionatuscv.es
                        </a>
                      </div>
                      <p><strong>Reto principal:</strong> El objetivo principal del proyecto era desarrollar una aplicación web completa para la gestión de currículums, que permitiera a los usuarios registrarse, iniciar sesión, y subir y gestionar currículums. Adicionalmente, debía ofrecer opciones de seguridad avanzadas, como autenticación JWT y encriptado de contraseñas, manteniendo la confidencialidad de la información del usuario y la protección de datos sensibles mediante variables de entorno. Este proyecto involucraba tanto el frontend como el backend, configurando un entorno de desarrollo local con Nginx para desplegar la aplicación en producción mediante un dominio personalizado</p>

                      <p><strong>Dificultades:</strong> El proyecto presentó diversos desafíos técnicos:</p>
                      <ul>
                        <li><strong>Autenticación JWT:</strong> Implementar un sistema de autenticación basado en tokens JWT (JSON Web Token) fue un reto considerable, ya que implicaba manejar los tokens de forma segura en el frontend y backend, además de integrarlos correctamente con las políticas de seguridad de Spring Security.</li>
                        <li><strong>Encriptado de contraseñas:</strong> Encriptado de contraseñas: Para asegurar que las contraseñas de los usuarios fueran almacenadas de manera segura, tuve que aprender e implementar la codificación con BCrypt en el backend. Esto me permitió garantizar que las contraseñas se encriptaran antes de almacenarse en la base de datos.</li>
                        <li><strong>Gestión de variables de entorno (.env):</strong> Gestión de variables de entorno (.env): Aprender a gestionar datos sensibles fue esencial para el proyecto. La configuración de un archivo .env tanto en desarrollo como en producción me ayudó a separar configuraciones específicas, como credenciales y claves secretas, asegurando que no se expongan en el código.</li>
                        <li><strong>Implementación de Nginx y Proxy Inverso:</strong> Desplegar la aplicación en producción mediante Nginx fue un reto técnico, sobre todo al configurar correctamente el proxy inverso y la gestión de archivos estáticos, asegurando que todo funcionara de manera eficiente en el servidor.</li>
                        <li><strong>Cambios en la IP del servidor:</strong> Al alojar la aplicación en un servidor local, el cambio de IP por parte del proveedor de servicios de Internet era un factor recurrente. Esto requería actualizar manualmente los registros DNS en Hostalia cada vez que la IP cambiaba.</li>
                      </ul>

                      <p><strong>Lo que aprendí:</strong> Este proyecto me permitió adquirir y consolidar varias habilidades clave:</p>
                      <ul>
                        <li><strong>Seguridad en aplicaciones web:</strong> A través de la implementación de JWT y el uso de BCrypt para encriptar contraseñas, aprendí cómo manejar la autenticación de usuarios y el almacenamiento seguro de datos sensibles.</li>
                        <li><strong>Manejo de entornos y variables de entorno:</strong> Al separar las configuraciones de desarrollo y producción con un archivo .env, aprendí a gestionar las diferentes configuraciones necesarias según el entorno. Esto incluyó desde las claves secretas hasta las URL y configuraciones específicas de la base de datos, asegurando que la aplicación funcionara correctamente en ambos entornos.</li>
                        <li><strong>Despliegue en producción con Nginx:</strong> Este fue mi primer proyecto en el que configuré Nginx como servidor web y proxy inverso, lo que me dio una visión profunda sobre la infraestructura y cómo asegurar un entorno de producción eficiente. Entendí la importancia de gestionar correctamente las rutas, los certificados SSL y el manejo de errores.</li>
                        <li><strong>Gestión de DNS y servidores:</strong> Aprendí a manejar los registros DNS y la configuración del dominio en Hostalia, además de cómo resolver problemas relacionados con el cambio de IP de mi servidor, garantizando que la aplicación se mantuviera accesible al actualizar los registros A y AAAA.</li>
                      </ul>

                      <p><strong>Resumen:</strong> Este proyecto me proporcionó una valiosa experiencia en el desarrollo web completo, desde la implementación de funcionalidades backend con seguridad hasta el despliegue en producción. Además, mejoré mi capacidad para resolver problemas y configurar un entorno seguro y eficiente para los usuarios.</p>
                    </div>
                  )}
                </li>

        {/* Proyecto Power BI */}


        <li>
          <span onClick={() => toggleDetails('powerbi')} className="details-toggle">
            Proyectos Power BI - 05/2024 {openDetails.powerbi ? <FaCaretUp /> : <FaCaretDown />}
          </span>

          {/* Proyectos Power BI */}
          {openDetails.powerbi && (
            <>
              {/* Proyecto 1 */}
              <div className="project-item">
                <span onClick={() => toggleDetails('powerbiProject1')} className="details-toggle">
                  Proyecto 1 {openDetails.powerbiProject1 ? <FaCaretUp /> : <FaCaretDown />}
                </span>
                {openDetails.powerbiProject1 && (
                  <div className="project-details">
                    <p><strong>Objetivo:</strong> Análisis de compras por categoría usando Power BI.</p>
                    <p><strong>Lo que aprendí:</strong> Uso de Power BI Desktop, visualización de datos, filtros y segmentación, y publicación de informes.</p>
                    <p><strong>Retos:</strong> Publicación de informes, modelado de datos y uso de fórmulas DAX.</p>
                    <div className="project-images">
                      <img src={proyectofinal1} alt="Proyecto Final 1 - Imagen 1" />
                      <img src={proyectofinal2} alt="Proyecto Final 1 - Imagen 2" />
                      <img src={proyectofinal3} alt="Proyecto Final 1 - Imagen 3" />
                    </div>
                  </div>
                )}
              </div>

              {/* Proyecto 2 */}
              <div className="project-item">
                <span onClick={() => toggleDetails('powerbiProject2')} className="details-toggle">
                  Proyecto 2 {openDetails.powerbiProject2 ? <FaCaretUp /> : <FaCaretDown />}
                </span>
                {openDetails.powerbiProject2 && (
                  <div className="project-details">
                    <p><strong>Objetivo:</strong> Análisis de ventas y compras usando Power BI.</p>
                    <p><strong>Lo que aprendí:</strong> Importación y transformación de datos, visualización de datos, uso de filtros, y publicación de informes.</p>
                    <p><strong>Retos:</strong> Restricciones de publicación, modelado de datos y uso de fórmulas DAX.</p>
                    <div className="project-images">
                      <img src={proyectofinalA} alt="Proyecto Final 2 - Imagen 1" />
                      <img src={proyectofinalB} alt="Proyecto Final 2 - Imagen 2" />
                      <img src={proyectofinalC} alt="Proyecto Final 2 - Imagen 3" />
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
        </li>
      </ul>
    </section>
  );
}

export default Projects;
