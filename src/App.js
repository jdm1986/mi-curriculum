// Importamos los componentes de las diferentes secciones
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Education from './components/Education';
import Courses from './components/Courses';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
// Importamos el componente Footer para mostrar al final de la página
import Footer from './components/Footer';
// Importamos el componente Navbar para la navegación
import Navbar from './components/Navbar';
// Importamos los estilos de la aplicación
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="background-container">
        <section id="about-me">
          <AboutMe />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="courses">
          <Courses />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default App;
