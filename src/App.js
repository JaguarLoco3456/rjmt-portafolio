// src/App.js
import './App.css';
import React, { useState } from 'react';
import avatar from './assets/avatar.png';
import experienciaImg from './assets/experiencia.jpg'; // <- Nueva imagen
import { FaLaptopCode, FaStar, FaGamepad } from 'react-icons/fa';

function App() {
  const [mostrarExperiencia, setMostrarExperiencia] = useState(false);

  const toggleExperiencia = () => {
    setMostrarExperiencia((prev) => !prev);
  };

  return (
    <div className="App">
      <header className="hero">
        <img src={avatar} alt="Javi" className="avatar" />
        <h1>Bienvenido a mi espacio de trabajo</h1>
        <p>¿Qué querés saber de mí?</p>
      </header>

      <section className="cards">
        <Card icon={<FaGamepad size={40} />} title="Mis hobbies" />
        <Card
          icon={<FaLaptopCode size={40} />}
          title="Mi experiencia laboral"
          onClick={toggleExperiencia}
        />
        <Card icon={<FaStar size={40} />} title="Mis logros" />
      </section>

      {mostrarExperiencia && (
        <section className="experience">
          <h2>Mi experiencia laboral</h2>
          <p>
            Como analista de datos, he trabajado con más de <strong>32,000 comentarios</strong> de TikTok y otras plataformas, desarrollando modelos automatizados de clasificación temática y análisis de sentimiento.
          </p>
          <p>
            Tengo experiencia aplicando técnicas de <strong>Zero-shot learning</strong>, modelos <strong>bayesianos</strong> y <strong>bag-of-words</strong>, además de trabajar con APIs, procesos ETL y herramientas como <strong>Python, SQL, Tableau, Looker y BigQuery</strong>.
          </p>
          <p>
            He desarrollado visualizaciones ejecutivas y estrategias digitales para instituciones como <strong>Bancomext</strong>, así como análisis conversacionales de alto impacto en casos como el de <strong>TecMilenio</strong>.
          </p>
          <p>
            Mi enfoque combina <strong>automatización, storytelling de datos y rendimiento en redes sociales</strong> para transformar información en decisiones estratégicas.
          </p>
          <img src={experienciaImg} alt="Visual de experiencia" className="experience-img" />
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
