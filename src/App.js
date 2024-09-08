// Importamos los componentes de las diferentes secciones
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Education from './components/Education';
import Courses from './components/Courses';
import Skills from './components/Skills';
// Importamos el componente Footer para mostrar al final de la página
import Footer from './components/Footer';
// Importamos el componente Navbar para la navegación
import Navbar from './components/Navbar';
// Importamos los estilos de la aplicación
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Menú de navegación con logo, texto y fotografía */}
      <Navbar />

      {/* Imagen de fondo solo en el cuerpo de la página */}
      <div className="background-container">
        {/* Secciones del currículum */}
        <AboutMe />
        <Experience />
        <Education />
        <Courses />
        <Skills />
      </div>

      {/* Pie de página */}
      <Footer />
    </div>
  );
}

export default App;
