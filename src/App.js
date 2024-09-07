import logo from './logo.svg';
import './App.css';
// Importamos los componentes AboutMe y Experience
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Education from './components/Education';
import Courses from './components/Courses';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>¡Hola, soy Jesús!</h1>
        <p>Este es mi currículum web desarrollado en React.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprende React
        </a>
      </header>

      {/* Incluimos las secciones de Sobre mí y Experiencia Laboral */}
      <AboutMe />
      <Experience />
      <Education />
      <Courses />
      <Skills />
    </div>
  );
}

export default App;
