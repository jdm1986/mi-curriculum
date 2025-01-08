// Importamos React para usar JSX
import React, { useState } from 'react';
// Importamos los estilos específicos de este componente
import './CoursesFit.css';
import { FaDumbbell, FaCaretDown, FaCaretUp } from 'react-icons/fa';
import bfTrainer from '../assets/certificados fit/BFTrainer.png';
import cicloFeda from '../assets/certificados fit/CicloFeda.png';
import crossfit from '../assets/certificados fit/crossfitlevel1.png';
import emergencias from '../assets/certificados fit/EncargadoEmergencias.png';
import personalTrainer from '../assets/certificados fit/EPersonal.png';
import pilatesSuelo from '../assets/certificados fit/especialistapilatessuelo.png';
import gestionDeportiva from '../assets/certificados fit/gestiondeportivafemxa.png';
import marketing from '../assets/certificados fit/marketingestrategicoyoperacional.png';
import svbDesa from '../assets/certificados fit/svbYdesa.png';

// Definimos el componente CoursesFit
function CoursesFit() {
  const [activeImage, setActiveImage] = useState(null); // Para saber cuál está abierto

  // Datos de las formaciones, con fecha asociada
  const courses = [
    {
      title: 'Gestión de Instalaciones Deportivas',
      institution: 'Femxa Formación',
      date: 'May 2020',
      image: gestionDeportiva,
      id: 'gestionDeportiva',
    },
    {
      title: 'BF Trainer Basic - Rookie Trainer',
      institution: 'Brooklyn Fitboxing',
      date: 'Feb 2020',
      image: bfTrainer,
      id: 'bfTrainer',
    },
    {
      title: 'CrossFit Level 1 Trainer',
      institution: 'CrossFit Inc.',
      date: 'Ago 2015',
      image: crossfit,
      id: 'crossfit',
    },
    {
      title: 'Especialista en Pilates Suelo',
      institution: 'Orthos Formación',
      date: 'May 2014',
      image: pilatesSuelo,
      id: 'pilatesSuelo',
    },
    {
      title: 'Personal Trainer',
      institution: 'Albe Formación',
      date: 'Dic 2013',
      image: personalTrainer,
      id: 'personalTrainer',
    },
    {
      title: 'Soporte Vital Básico y Desfibrilación Semiautomática',
      institution: 'SEMICYUC',
      date: 'Nov 2013',
      image: svbDesa,
      id: 'svbDesa',
    },
    {
      title: 'Marketing Estratégico y Operacional en Instalaciones Deportivas',
      institution: 'MAS+',
      date: 'Ago 2013',
      image: marketing,
      id: 'marketing',
    },
    {
      title: 'Encargado de Emergencias y Primeros Auxilios',
      institution: 'Alhambra Formación',
      date: 'Feb 2013',
      image: emergencias,
      id: 'emergencias',
    },
    {
      title: 'Ciclo Indoor',
      institution: 'FEDA Sevilla',
      date: 'Feb 2007',
      image: cicloFeda,
      id: 'cicloFeda',
    },
  ];

  // Ordenar por fecha (más reciente primero)
  const sortedCourses = courses.sort((a, b) => new Date(b.date) - new Date(a.date));

  // Función para alternar la visualización de la imagen
  const toggleImage = (id) => {
    setActiveImage(activeImage === id ? null : id); // Si la imagen está activa, la cierra, si no, la abre
  };

  return (
    <section className="courses-fit">
      <h2><FaDumbbell className="section-icon" /> Formación Fitness</h2>
      <ul>
        {sortedCourses.map((course) => (
          <li key={course.id}>
            <strong>{course.title}</strong>
            <p><em>{course.institution}</em> ({course.date})</p>
            <span onClick={() => toggleImage(course.id)} className="caret-icon">
              {activeImage === course.id ? <FaCaretUp /> : <FaCaretDown />}
            </span>
            {activeImage === course.id && (
              <div className="certificate-image">
                <img src={course.image} alt={`Certificado ${course.title}`} />
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CoursesFit;
