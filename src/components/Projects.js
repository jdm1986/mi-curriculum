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


// Importar las imágenes de la carpeta src/assets/synergym
import incidenciasSala from '../assets/synergym/incidenciasSala.png';
import listadoIncidenciasSocios from '../assets/synergym/listadoincidenciassocios.png';
import retencionsocioslistabobajas from '../assets/synergym/retencionsocioslistabobajas.png';
import retencionsocioslistadodevolucionesbancarias from '../assets/synergym/retencionsocioslistadodevolucionesbancarias.png';
import retencionsocioslistadoNPS from '../assets/synergym/retencionsocioslistadoNPS.png';
import reporteinteracciones from '../assets/synergym/reporteinteracciones.png';
import pizarraobjetivosStaff from '../assets/synergym/pizarraobjetivosStaff.png';
import controldiapruebasocio from '../assets/synergym/controldiapruebasocio.png';
import checklistaperturaclub from '../assets/synergym/checklistaperturaclub.png';
import retencionsocioreto21dias from '../assets/synergym/retencionsocioreto21dias.png';

// Importar las imágenes de la carpeta src/assets/viding
import gestionep1 from '../assets/viding/gestionep1.png';
import gestionep2 from '../assets/viding/gestionep2.png';
import gestionep3 from '../assets/viding/gestionep3.png';
import gestionep5 from '../assets/viding/gestionep5.png';
import fototriatlon from '../assets/viding/fototriatlon.JPG';

// Importar las imágenes de la carpeta src/assets/certificados_it (para las imágenes esp-32)
import esp32_1 from '../assets/certificados_it/ESP32_1.JPG';
import esp32_2 from '../assets/certificados_it/ESP32_2.JPG';
import esp32_3 from '../assets/certificados_it/ESP32_3.JPG';
import esp32_4 from '../assets/certificados_it/ESP32_4.JPG';
import esp32_5 from '../assets/certificados_it/ESP32_5.JPG';
import esp32_6 from '../assets/certificados_it/ESP32_6.JPG';

// Importar la imagen del proyecto FitnessPark
import proyectometricacomercial from '../assets/certificados_it/PROYECTOMETRICACOMERCIALVIILLALOBOS.png';
import automatismosResamania from '../assets/certificados_it/AUTOMATISMOSRESAMANIA.png';




function Projects() {
  // Estado para controlar la apertura de los detalles de cada proyecto
  const [openDetails, setOpenDetails] = useState({
    fitnesspark: false,
    fitnessparkProject1: false,
    fitnessparkProject2: false,
    gestionatuscv: false,
    jesusdiazmartincv: false,
    powerbi: false,
    powerbiProject1: false,
    powerbiProject2: false,
    synergymProject1: false,
        synergymProject2: false,
        synergymProject3: false,
        synergymProject4: false,
        synergymProject5: false,
        synergymProject6: false,
        synergymProject7: false,
        synergymProject8: false,
        synergymProject9: false,
        synergymProject10: false,
        viding: false,
            vidingProject1: false,
            vidingProject2: false,
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

      {/* Proyecto más reciente: FitnessPark */}
        <li>
                  <span onClick={() => toggleDetails('fitnesspark')} className="details-toggle">
                    Fitness Park 2025 {openDetails.fitnesspark ? <FaCaretUp /> : <FaCaretDown />}
                  </span>

                  {openDetails.fitnesspark && (
                    <div className="project-details">
                      <p>
                        🏋️‍♂️ Como Director de Club en <strong>Fitness Park</strong>, me he propuesto optimizar la gestión del club
                        a través del análisis de datos y la mejora en los flujos de trabajo.
                        Mi objetivo es utilizar herramientas tecnológicas avanzadas para potenciar la conversión comercial,
                        facilitar la toma de decisiones estratégicas y maximizar la eficiencia del equipo. 📊🚀
                      </p>
                      <p>
                        💡 <strong>Habilidades aplicadas:</strong> Análisis de datos, Business Intelligence, optimización de procesos comerciales y
                        desarrollo de herramientas digitales para mejorar la productividad del equipo.
                      </p>

                      {/* 🔽 SUBPROYECTO 1: ANÁLISIS COMERCIAL */}
                      <ul className="subproject-list">
                        <li>
                          <span onClick={() => toggleDetails('fitnessparkProject1')} className="details-toggle">
                            Análisis Comercial {openDetails.fitnessparkProject1 ? <FaCaretUp /> : <FaCaretDown />}
                          </span>

                          {openDetails.fitnessparkProject1 && (
                            <div className="sub-project-details">
                              <p>
                                📌 <strong>Objetivo:</strong> Desarrollar un sistema de análisis comercial eficiente utilizando
                                <strong>Power BI</strong>.
                                La idea principal es transformar los datos en métricas claras y comprensibles para los comerciales y la dirección del club.
                              </p>
                              <p>
                                🔍 <strong>Proceso:</strong>
                              </p>
                              <ul>
                                <li>✅ Adecuación y limpieza de los datos extraídos del CRM <strong>Resamania</strong>.</li>
                                <li>📊 Creación de dashboards en <strong>Power BI</strong> para visualizar conversiones y tendencias comerciales.</li>
                                <li>📈 Análisis de oportunidades de mejora en los cierres de ventas y gestión de clientes.</li>
                                <li>💼 Implementación de una hoja de control en Excel que los comerciales pueden usar a diario.</li>
                              </ul>
                              <p>
                                🚀 <strong>Impacto:</strong> Facilita el análisis en tiempo real del rendimiento del equipo comercial, permitiendo
                                tomar decisiones informadas y optimizar la conversión de clientes.
                              </p>

                              {/* Imagen del proyecto */}
                              <div className="project-images">
                                <img src={proyectometricacomercial} alt="Análisis Comercial Fitness Park" />
                              </div>
                            </div>
                          )}
                        </li>
                        <li>
                          <span onClick={() => toggleDetails('fitnessparkProject2')} className="details-toggle">
                            Software de Gestión Propio {openDetails.fitnessparkProject2 ? <FaCaretUp /> : <FaCaretDown />}
                          </span>

                          {openDetails.fitnessparkProject2 && (
                            <div className="sub-project-details">
                              <p>
                                Desarrollé un software interno de gestión para Fitness Park en Python (GUI con Tkinter), con módulos de incidencias, mapas, préstamos y clientes. Migré la persistencia a PostgreSQL para trabajo multi‑equipo en LAN, usando almacenamiento de recursos en BLOBs y control de accesos por PIN/roles. Centralicé la ingesta de CSV diarios en la base de datos para eliminar dependencias locales. Implementé backups automáticos con pg_dump/pg_restore, histórico y copia a OneDrive, garantizando continuidad operativa.
                              </p>

                              <div className="project-images">
                                <img src={automatismosResamania} alt="Software de Gestión Propio Fitness Park" />
                              </div>
                            </div>
                          )}
                        </li>
                      </ul>
                    </div>
                  )}
                </li>

        {/* Proyecto jesusdiazmartincv.es */}
        <li onClick={() => toggleDetails('jesusdiazmartincv')} className="toggle-container">
          <button className="project-button">
            Mi CV-WEB  09/2024
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
                    GestionaTusCV 06/2024
                  </button>
                  <span className="details-toggle">
                    {openDetails.gestionatuscv ? <FaCaretUp /> : <FaCaretDown />}
                  </span>

                  {openDetails.gestionatuscv && (
                    <div className="project-details">
                      <div className="visit-link">
                        <a href="https://gestionatuscvs-production.up.railway.app/" target="_blank" rel="noopener noreferrer">
                          || www.gestionatuscv.es ||
                        </a>
                      </div>
                      <p><strong>Reto principal:</strong> Desarrollar una aplicación web completa de gestión de currículums
                      (registro/login, subida/gestión de PDFs, departamentos por usuario, búsquedas) con seguridad JWT, encriptado de contraseñas,
                      y despliegue en la nube con contenedores. El sistema debía separar configuración por entornos, proteger secretos vía variables
                      de entorno y operar con dominio propio y HTTPS..</p>

                      <p><strong>Solución:</strong> El proyecto presentó diversos desafíos técnicos:</p>
                      <ul>
                        <li><strong>Arquitectura:</strong> Spring Boot (API REST) + MySQL; autenticación JWT; contraseñas con BCrypt; subida de CVs en PDF.</li>
                        <li><strong>Contenerización:</strong> Dockerfile multietapa para minimizar el tamaño del artefacto.
                        Docker-compose para desarrollo local con servicios app + db, healthchecks y volúmenes persistentes.
                        Configuración 12-factor con .env (dev/prod)..</li>
                        <li><strong>Despliegue cloud (Railway):</strong> Conexión directa con GitHub → build & deploy automáticos.
                                                                         Servicio Docker para la app y MySQL gestionado (plugin de Railway).
                                                                         Dominio personalizado y TLS gestionados por Railway (reverse proxy nativo) → sin Nginx propio.
                                                                         Variables de entorno y secretos gestionados desde el panel de Railway..</li>
                        <li><strong>Gestión de ficheros:</strong> En local: volumen Docker (/data/uploads).
                                                                  En producción: (recomendado) almacenamiento de objetos (S3/R2/Backblaze B2) con URLs firmadas, evitando el filesystem efímero de la plataforma..</li>
                        <li><strong>Seguridad:</strong> JWT con expiración/refresh; BCryptPasswordEncoder.
                                                        Cabeceras HTTP y CORS configurables por entorno.
                                                        Rotación sencilla de secretos mediante variables..</li>
                        <li><strong>Límite de 30 minutos para usuarios no administradores:</strong> Configurar un límite de tiempo para los usuarios sin rol de administrador, de forma que los datos se eliminaran automáticamente después de 30 minutos, representó un desafío técnico y funcional. Esta funcionalidad ha sido diseñada pensando en la futura escalabilidad, permitiendo eliminar el límite si se decide monetizar la aplicación.</li>
                        <li><strong>Operación:</strong> Logs centralizados (Railway Logs) y métricas básicas.
                                                        Jobs programados para limpieza de datos (usuarios free con ventana de 30min) usando tareas/cron de Spring..</li>
                      </ul>

                      <p><strong>Lo que aprendí:</strong> Este proyecto me permitió adquirir y consolidar varias habilidades clave:</p>
                      <ul>
                        <li><strong>Seguridad en aplicaciones web:</strong> Implementé medidas de seguridad efectivas como la autenticación JWT y el encriptado de contraseñas con BCrypt, lo que me brindó una comprensión profunda de las mejores prácticas de seguridad para aplicaciones web.</li>
                        <li><strong>Manejo de JPA y persistencia de datos:</strong> Aprendí a gestionar relaciones complejas entre entidades en JPA, así como a implementar funcionalidades avanzadas de búsqueda y eliminación de datos, como la asociación de departamentos con los currículums de cada usuario.</li>
                        <li><strong>Despliegue en producción:</strong> Docker y ciclos de despliegue reproducibles; Railway como PaaS con CI/CD desde GitHub.</li>
                        <li><strong>Producción:</strong> configuración por entorno, secretos, dominios, TLS y logging.</li>
                        <li><strong>Escalabilidad y gestión de usuarios:</strong> a configuración de límites temporales para usuarios no administradores me ha preparado para futuros escenarios de escalabilidad, donde la aplicación podría monetizarse eliminando el límite para ciertos planes.</li>
                      </ul>

                      <p><strong>Resumen:</strong> Este proyecto me brindó una experiencia valiosa en el desarrollo de aplicaciones web completas, desde la configuración de seguridad en el backend hasta el despliegue en producción. Me ayudó a resolver problemas complejos y configurar un entorno seguro y escalable para futuras mejoras y monetización.</p>
                    </div>
                  )}
                </li>

        {/* Proyecto Power BI */}

        <li>
          <span onClick={() => toggleDetails('powerbi')} className="details-toggle">
            PowerBI 05/2024 {openDetails.powerbi ? <FaCaretUp /> : <FaCaretDown />}
          </span>

          {/* Proyectos Power BI */}
          {openDetails.powerbi && (
            <div className="project-details">
              <ul className="subproject-list"> {/* Agregamos la lista */}
                {/* Proyecto 1 */}
                <li>
                  <span onClick={() => toggleDetails('powerbiProject1')} className="details-toggle">
                    Proyecto 1 {openDetails.powerbiProject1 ? <FaCaretUp /> : <FaCaretDown />}
                  </span>
                  {openDetails.powerbiProject1 && (
                    <div className="sub-project-details">
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
                </li>

                {/* Proyecto 2 */}
                <li>
                  <span onClick={() => toggleDetails('powerbiProject2')} className="details-toggle">
                    Proyecto 2 {openDetails.powerbiProject2 ? <FaCaretUp /> : <FaCaretDown />}
                  </span>
                  {openDetails.powerbiProject2 && (
                    <div className="sub-project-details">
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
                </li>
              </ul> {/* Cierre de la lista */}
            </div>
          )}

        </li>

                {/* Nueva sección: Proyectos ESP-32 */}
                <li>
                  <span onClick={() => toggleDetails('esp32')} className="details-toggle">
                    Proyectos ESP-32 02/2024 {openDetails.esp32 ? <FaCaretUp /> : <FaCaretDown />}
                  </span>

                  {openDetails.esp32 && (
                    <div className="project-details">
                      <p><strong>Descripción:</strong> Durante mi trabajo con la ESP-32, en la formación de Programación para soluciones de IoT y Smart City aplicables a entornos 5G, desarrollé varios proyectos que incluían control de sensores, transmisión de datos y visualización en tiempo real.</p>

                      <p><strong>Video demostrativo:</strong></p>

                      {/* 🔥 Envolver el iframe en un contenedor para hacerlo responsivo */}
                      <div className="video-container">
                        <iframe
                          src="https://drive.google.com/file/d/1kmrXXQwMVttvhUb8ZvTKGML3ux-9eem4/preview"
                          title="Proyecto ESP-32"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>

                      <p><strong>Galería de imágenes:</strong></p>
                      <div className="project-images">
                        <img src={esp32_1} alt="ESP32 Proyecto 1" />
                        <img src={esp32_2} alt="ESP32 Proyecto 2" />
                        <img src={esp32_3} alt="ESP32 Proyecto 3" />
                        <img src={esp32_4} alt="ESP32 Proyecto 4" />
                        <img src={esp32_5} alt="ESP32 Proyecto 5" />
                        <img src={esp32_6} alt="ESP32 Proyecto 6" />
                      </div>
                    </div>
                  )}
                </li>


        {/* Nueva sección: Proyectos Synergym */}
        <li>
          <span onClick={() => toggleDetails('synergym')} className="details-toggle">
            Synergym 2022/2023 {openDetails.synergym ? <FaCaretUp /> : <FaCaretDown />}
          </span>

          {/* Proyectos Synergym */}
          {openDetails.synergym && (
            <div className="project-details">
              <p>Proyectos que creé durante mi etapa como Director de Club para mejorar flujos de trabajo, automatizar procesos, análisis de datos y toma de decisiones, todo orientado a mejorar el rendimiento de los clubs en función de los KPI´s y objetivos marcados por la compañía. Aproveché mis conocimientos en la nube para poder trabajar en remoto en muchas ocasiones.</p>

              {/* Lista de subproyectos */}
              <ul className="subproject-list">
                {/* Proyecto 1 */}
                <li>
                  <span onClick={() => toggleDetails('synergymProject1')} className="details-toggle">
                    INCIDENCIAS CLUB {openDetails.synergymProject1 ? <FaCaretUp /> : <FaCaretDown />}
                  </span>
                  {openDetails.synergymProject1 && (
                    <div className="sub-project-details">
                      <p><strong>Funcionalidad:</strong> Creé esta hoja para documentar y hacer un seguimiento de todas las incidencias relacionadas con la sala de fitness. Asigné columnas a los miembros del staff para que pudieran registrar problemas específicos, como fallos en las máquinas o el estado del material. Con esta hoja, gestioné el proceso de resolución de incidencias de manera efectiva, supervisando el estado ("Pendientes," "Solucionadas") y calculando métricas que me ayudaban a analizar el rendimiento del equipo y mejorar la experiencia de los socios.</p>
                      <img src={incidenciasSala} alt="Incidencias Sala" />
                    </div>
                  )}
                </li>

                {/* Proyecto 2 */}
                <li>
                  <span onClick={() => toggleDetails('synergymProject2')} className="details-toggle">
                    INCIDENCIAS SOCIOS {openDetails.synergymProject2 ? <FaCaretUp /> : <FaCaretDown />}
                  </span>
                  {openDetails.synergymProject2 && (
                    <div className="sub-project-details">
                      <p><strong>Funcionalidad:</strong> Esta hoja la diseñé para gestionar incidencias relacionadas directamente con los socios del club. Incluí columnas para registrar información importante del socio, como DNI y teléfono, y la descripción de la incidencia. También habilité el seguimiento del estado de la incidencia (e.g., "Pendientes," "Solucionadas"). Con esta herramienta, pude mejorar la atención al cliente y asegurar una resolución rápida de los problemas, aumentando la satisfacción y retención de los socios.</p>
                      <img src={listadoIncidenciasSocios} alt="Listado Incidencias Socios" />
                    </div>
                  )}
                </li>

                {/* Proyecto 3 */}
                <li>
                  <span onClick={() => toggleDetails('synergymProject3')} className="details-toggle">
                    LISTADO DE BAJAS {openDetails.synergymProject3 ? <FaCaretUp /> : <FaCaretDown />}
                  </span>
                  {openDetails.synergymProject3 && (
                    <div className="sub-project-details">
                      <p><strong>Funcionalidad:</strong>  Creé esta hoja para analizar las bajas de los socios a lo largo del año. Desarrollé categorías específicas que identificaban las causas de las bajas (e.g., "Cambio de Gimnasio," "Económica," "El Gimnasio Lleno"). Esto me permitía identificar los motivos más frecuentes de las bajas y ajustar las estrategias de retención, haciendo un seguimiento mensual del número de bajas y comparándolo con el desempeño del staff.</p>
                      <img src={retencionsocioslistabobajas} alt="Listados Llamadas Bajas Anualidad" />
                    </div>
                  )}
                </li>

                {/* Proyecto 4 */}
                <li>
                  <span onClick={() => toggleDetails('synergymProject4')} className="details-toggle">
                    Bank Rejections {openDetails.synergymProject4 ? <FaCaretUp /> : <FaCaretDown />}
                  </span>
                  {openDetails.synergymProject4 && (
                    <div className="sub-project-details">
                      <p><strong>Funcionalidad:</strong>  Esta hoja la implementé para gestionar las devoluciones de cuotas o servicios. Hice un seguimiento detallado de las incidencias relacionadas, indicando motivos como "Enfermedad," "Inseguridad," o "Atención Staff." Además, registré los canales de contacto utilizados (e.g., SMS, llamadas) y asigné responsabilidades al staff. Este enfoque me ayudó a coordinar el proceso de gestión de devoluciones y a identificar las causas principales, mejorando la eficiencia en la resolución de incidencias.</p>
                      <img src={retencionsocioslistadodevolucionesbancarias} alt="Listados Llamadas Devoluciones" />
                    </div>
                  )}
                </li>

                {/* Proyecto 5 */}
                <li>
                  <span onClick={() => toggleDetails('synergymProject5')} className="details-toggle">
                    Net Promotore Score {openDetails.synergymProject5 ? <FaCaretUp /> : <FaCaretDown />}
                  </span>
                  {openDetails.synergymProject5 && (
                    <div className="sub-project-details">
                      <p><strong>Funcionalidad:</strong> Creé esta hoja para analizar el Net Promoter Score (NPS) de los socios y gestionar las acciones de seguimiento basadas en sus respuestas. Registré motivos específicos que afectan la satisfacción de los socios, como "Cambios de Horarios," "Mala Atención," y "Climatización." Además, realicé un seguimiento del número de llamadas y contactos realizados por el staff, asignando tareas específicas. Esta herramienta me permitió coordinar esfuerzos para mejorar la satisfacción del cliente y optimizar la experiencia en el club.</p>
                      <img src={retencionsocioslistadoNPS} alt="Listados Llamadas NPS" />
                    </div>
                  )}
                </li>

                {/* Proyecto 6 */}
                <li>
                  <span onClick={() => toggleDetails('synergymProject6')} className="details-toggle">
                    INTERACCIONES {openDetails.synergymProject6 ? <FaCaretUp /> : <FaCaretDown />}
                  </span>
                  {openDetails.synergymProject6 && (
                    <div className="sub-project-details">
                      <p><strong>Funcionalidad:</strong> Diseñé esta hoja para analizar el rendimiento del staff en sus interacciones con los socios. Registré actividades como "HUELLA," "TOURS," y las comparé entre los distintos miembros del equipo, incluidas sus tasas de cumplimiento. También llevé un registro mensual de los resultados del equipo. Esto me permitió evaluar la efectividad de cada miembro y mejorar las operaciones diarias para garantizar un servicio de calidad.</p>
                      <img src={reporteinteracciones} alt="Interacciones Staff 2023" />
                    </div>
                  )}
                </li>

                {/* Proyecto 7 */}
                <li>
                  <span onClick={() => toggleDetails('synergymProject7')} className="details-toggle">
                    OBJETIVOS STAFF {openDetails.synergymProject7 ? <FaCaretUp /> : <FaCaretDown />}
                  </span>
                  {openDetails.synergymProject7 && (
                    <div className="sub-project-details">
                      <p><strong>Funcionalidad:</strong> Esta herramienta la desarrollé para planificar y hacer seguimiento de los objetivos semanales del personal. Cada hoja semanal registraba las métricas clave, como número de socios, ventas, y diferencias con el presupuesto. También incluí un "FOCUS DE LA SEMANA" para orientar las prioridades del equipo. La hoja me ayudó a ajustar las estrategias según el progreso real, proporcionando un análisis detallado del desempeño semanal.</p>
                      <img src={pizarraobjetivosStaff} alt="Pizarra Online Objetivos Staff" />
                    </div>
                  )}
                </li>

                {/* Proyecto 8 */}
                <li>
                  <span onClick={() => toggleDetails('synergymProject8')} className="details-toggle">
                    DÍA DE PRUEBA {openDetails.synergymProject8 ? <FaCaretUp /> : <FaCaretDown />}
                  </span>
                  {openDetails.synergymProject8 && (
                    <div className="sub-project-details">
                      <p><strong>Funcionalidad:</strong> Creé esta hoja para gestionar las actividades durante los días de prueba, que eran clave para captar nuevos socios. Hice un seguimiento de actividades como "DÍA PRUEBA ATENDIDO" y "CONTACTADO VENDIDO," registrando la participación y éxito de cada miembro del staff. Además, evalué la efectividad de las promociones y campañas de marketing, facilitando la toma de decisiones para mejorar la conversión de los días de prueba en nuevas inscripciones.</p>
                      <img src={controldiapruebasocio} alt="Listado Día Prueba Sevilla Este 2023" />
                    </div>
                  )}
                </li>

                {/* Proyecto 9 */}
                <li>
                  <span onClick={() => toggleDetails('synergymProject9')} className="details-toggle">
                    CHECKLIST APERTURA {openDetails.synergymProject9 ? <FaCaretUp /> : <FaCaretDown />}
                  </span>
                  {openDetails.synergymProject9 && (
                    <div className="sub-project-details">
                      <p><strong>Funcionalidad:</strong>  Diseñé esta hoja como una herramienta de planificación para las aperturas del club. Incluí columnas que especificaban quién abría el club cada día, con un registro de la fecha y hora de apertura. Añadí un campo para observaciones, lo que me permitió mejorar la rutina de apertura al recoger y analizar cualquier incidencia. Esta planificación garantizaba que cada jornada se iniciara de manera ordenada y eficiente.</p>
                      <img src={checklistaperturaclub} alt="Checklist Apertura 2023" />
                    </div>
                  )}
                </li>

                {/* Proyecto 10 */}
                <li>
                  <span onClick={() => toggleDetails('synergymProject10')} className="details-toggle">
                    RETENCIÓN DE BAJAS {openDetails.synergymProject10 ? <FaCaretUp /> : <FaCaretDown />}
                  </span>
                  {openDetails.synergymProject10 && (
                    <div className="sub-project-details">
                      <p><strong>Funcionalidad:</strong> Esta hoja la creé para registrar y analizar el desempeño individual de cada miembro del staff en el contexto de un reto mensual dirigido a retener a los socios que deseaban darse de baja. Medí los esfuerzos y resultados de cada persona, como el número de retos asumidos y éxitos logrados. Esta herramienta me permitía evaluar la efectividad del equipo y ajustar las estrategias de retención, identificando cuáles acciones tenían un mayor impacto en la retención de los socios.</p>
                      <img src={retencionsocioreto21dias} alt="2022 Reto 21 Días - Retención Baja" />
                    </div>
                  )}
                </li>
              </ul>
            </div>
          )}
        </li>
        {/* Nueva sección: Proyectos Viding */}
        <li>
          <span onClick={() => toggleDetails('viding')} className="details-toggle">
            Viding 2014/2021 {openDetails.viding ? <FaCaretUp /> : <FaCaretDown />}
          </span>

          {/* Proyectos Viding */}
          {openDetails.viding && (
            <div className="project-details">
              <ul className="subproject-list">
                {/* Proyecto 1: Gestión Servicio Entrenamiento Personal */}
                <li>
                  <span onClick={() => toggleDetails('vidingProject1')} className="details-toggle">
                    Gestión Servicio Entrenamiento Personal 2018/2021 {openDetails.vidingProject1 ? <FaCaretUp /> : <FaCaretDown />}
                  </span>
                  {openDetails.vidingProject1 && (
                    <div className="sub-project-details">
                      <p><strong>Funcionalidad:</strong> Desarrollé un control detallado del presupuesto y los objetivos financieros del servicio de entrenamiento personal en el año 2018. Mi responsabilidad como gestor del departamento incluía monitorear el volumen de ventas de cada entrenador y comparar los resultados con los objetivos establecidos por la compañía.
                      <li></li>
                      <ul>
                                              <li><strong>Planificación y Control de Presupuesto:</strong> La hoja registra el "OBJETIVO (Sin IVA) 2018" para cada mes, proporcionando una guía clara de las metas financieras a alcanzar. Esto me permitía saber de antemano cuánto debía facturar el departamento mes a mes, sirviendo como referencia para evaluar el rendimiento.</li>
                                              <li><strong>Desglose Mensual y Semestral:</strong> En la hoja, se incluyen columnas que detallan la "Cuota EP Partida (REMESA PROVIS)" tanto sin IVA como con IVA, lo cual me ayudaba a mantener una visión clara de las finanzas. También hay un resumen del "OBJETIVO ANUAL" y secciones específicas para el "Obj 1er Semestre" y "Objetivo 2º Semestre," lo que facilitaba el análisis de los resultados a nivel global y semestral.</li>
                                              <li><strong>Análisis de Desempeño:</strong> Con estos datos, pude controlar las ventas de cada entrenador, comparar los ingresos reales con los objetivos, y detectar áreas que necesitaban mejoras. A partir de este análisis, proporcionaba feedback a los entrenadores, ajustaba estrategias y planificaba acciones correctivas para asegurar que se alcanzaran los objetivos financieros del departamento.</li>
                                              <li><strong>Presentación de Resultados:</strong> La hoja me permitió presentar un análisis de los datos y resultados, mostrando de manera clara si el equipo estaba cumpliendo con las metas financieras tanto a nivel global como individual. Esto resultaba fundamental para la toma de decisiones y para demostrar el impacto del trabajo del equipo en el logro de los objetivos de la compañía.</li>
                                              <li><strong>Conclusión:</strong> Como gestor del departamento de entrenamiento personal, esta hoja fue crucial para llevar un control exhaustivo de las ventas, evaluar el rendimiento de los entrenadores, y mantener el rumbo hacia los objetivos financieros marcados por la compañía. Me proporcionaba una visión completa del presupuesto anual y mensual, facilitando la toma de decisiones y la mejora continua del servicio, logrando alcanzar los objetivos marcados. Nota: los datos mostrados no son reales por cuestión de confidencialidad.</li>
                      </ul>
                      </p>

                      <div className="project-images">
                        <img src={gestionep1} alt="Gestión EP 1" />
                        <img src={gestionep2} alt="Gestión EP 2" />
                        <img src={gestionep3} alt="Gestión EP 3" />
                        <img src={gestionep5} alt="Gestión EP 4" />
                      </div>
                    </div>
                  )}
                </li>

                {/* Proyecto 2: Club Triatlón 2015 */}
                <li>
                  <span onClick={() => toggleDetails('vidingProject2')} className="details-toggle">
                    CLUB TRIATLON 2015/2016 {openDetails.vidingProject2 ? <FaCaretUp /> : <FaCaretDown />}
                  </span>
                  {openDetails.vidingProject2 && (
                    <div className="sub-project-details">
                      <p><strong>Resumen:</strong> Fui fundador del club de triatlón Viding, motivando a los usuarios interesados en participar y creando una comunidad centrada en un reto motivante y saludable. Guié los entrenamientos y proporcioné asesoramiento personalizado, planificando rutas, inscripciones y un objetivo claro: culminar el Triatlón modalidad Súper Sprint. La creación de este club contribuyó al desarrollo de una nueva comunidad dentro de Viding, en línea con los objetivos y presupuestos de la compañía.</p>
                      <img src={fototriatlon} alt="Club Triatlón 2015" />
                    </div>
                  )}
                </li>
              </ul>
            </div>
          )}
        </li>
        </ul>
        </section>
        );
        }

        export default Projects;
