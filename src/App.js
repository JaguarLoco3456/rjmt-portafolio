import './App.css';
import React, { useState } from 'react';
import avatar from './assets/avatar.png';
import experienciaImg from './assets/experiencia.jpg';
import { FaLaptopCode, FaStar, FaGamepad } from 'react-icons/fa';
import fondo from './assets/ghibli-data-bg.png'; // ✅ Solo si está en src/assets

function App() {
  const [mostrarExperiencia, setMostrarExperiencia] = useState(false);
  const [mostrarHobbies, setMostrarHobbies] = useState(false);
  const [mostrarLogros, setMostrarLogros] = useState(false);

  const toggleExperiencia = () => setMostrarExperiencia(prev => !prev);
  const toggleHobbies = () => setMostrarHobbies(prev => !prev);
  const toggleLogros = () => setMostrarLogros(prev => !prev);

  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${fondo})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh'
      }}
    >
      <header className="hero">
        <div className="perfil-contenedor">
          <img src={avatar} alt="Javi" className="avatar" />
          <div className="info-box">
            <h2>Ramón Javier Monroy Torre</h2>
            <p><strong>Teléfono:</strong> +52 56 1800 3081</p>
            <p><strong>Empresa:</strong> Sinnia, Data Laboratory</p>
            <p><strong>Puesto:</strong> Senior Data Analyst</p>
            <p><strong>Email:</strong> javitorresin40@gmail.com</p>
          </div>
        </div>
        <h1>Bienvenido a mi espacio de trabajo</h1>
        <p>¿Qué quieres saber de mí?</p>
      </header>

      <section className="cards">
        <Card icon={<FaLaptopCode size={40} />} title="Mi experiencia laboral" onClick={toggleExperiencia} />
        <Card icon={<FaGamepad size={40} />} title="Mis hobbies" onClick={toggleHobbies} />
        <Card icon={<FaStar size={40} />} title="Mis logros" onClick={toggleLogros} />
      </section>

      {mostrarExperiencia && (
        <section className="experience">
          <h2>Mi experiencia laboral</h2>
          <p>Soy analista de datos con más de 5 años de experiencia...</p>
          {/* Resto del contenido */}
          <img src={experienciaImg} alt="Visual de experiencia" className="experience-img" />
        </section>
      )}

      {mostrarHobbies && (
        <section className="experience">
          <h2>Mis hobbies</h2>
          <p>Aunque mi día a día está lleno de datos...</p>
          <img src={experienciaImg} alt="Visual de hobbies" className="experience-img" />
        </section>
      )}

      {mostrarLogros && (
        <section className="experience">
          <h2>Mis logros</h2>
          <ul>
            <li>Desarrollé un sistema de clasificación automática...</li>
          </ul>
          <img src={experienciaImg} alt="Visual de logros" className="experience-img" />
        </section>
      )}
    </div>
  );
}

function Card({ icon, title, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <div className="icon">{icon}</div>
      <h3>{title}</h3>
    </div>
  );
}

export default App;
