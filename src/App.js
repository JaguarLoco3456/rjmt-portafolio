import './App.css';
import React, { useState } from 'react';
import avatar from './assets/avatar.png';
import experienciaImg from './assets/experiencia.jpg';
import { FaLaptopCode, FaStar, FaGamepad } from 'react-icons/fa';

function App() {

  /*Constante para el bloque de Mostrar Experiencia*/
  const [mostrarExperiencia, setMostrarExperiencia] = useState(false);

  const toggleExperiencia = () => {
    setMostrarExperiencia((prev) => !prev);
  };

  /*Constante para el bloque de Mostrar Hobbies*/
  const [mostrarHobbies, setMostrarHobbies] = useState(false);

  const toggleHobbies = () => {
    setMostrarHobbies((prev) => !prev);
  };

/*Constante para el bloque de Mostrar Logros*/
const [mostrarLogros, setMostrarlogros] = useState(false);

const togglelogros = () => {
  setMostrarlogros((prev) => !prev);
};

  return (
    <div className="App">
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
        {/* Botón experiencia laboral ahora es el PRIMERO */}
        <Card
          icon={<FaLaptopCode size={40} />}
          title="Mi experiencia laboral"
          onClick={toggleExperiencia}
        />
        <Card icon={<FaGamepad size={40} />}
        title="Mis hobbies" 
        onClick={toggleHobbies}
        />
        <Card icon={<FaStar size={40} />}
        title="Mis logros" 
        onClick={togglelogros}
        />
      </section>

      {mostrarExperiencia && (
        <section className="experience">
          <h2>Mi experiencia laboral</h2>
          <p>
            Soy analista de datos con más de 5 años de experiencia en el tratamiento de grandes volúmenes de datos estructurados. En mi día a día, desarrollo soluciones que procesan millones de caracteres a través de consultas SQL optimizadas y pipelines automatizados.
          </p>
          <p>
            Trabajo con herramientas como <strong>Python, SQL, Looker, Tableau, BigQuery</strong> y desarrollo procesos ETL eficientes para transformar datos complejos en visualizaciones y reportes accionables.
          </p>
          <p>
            He diseñado modelos de clasificación automatizada aplicando enfoques como <strong>Zero-shot learning</strong>, <strong>Bayesianos</strong> y <strong>bag-of-words</strong>, adaptados a proyectos con enfoques jurídicos, educativos, sociales y comerciales.
          </p>
          <p>
            Uno de los casos más relevantes fue el análisis de más de <strong>32,000 comentarios</strong> en TikTok para detectar patrones temáticos y sentimentales, apoyando la toma de decisiones reputacionales.
          </p>
          <p>
            También he trabajado con instituciones como <strong>Bancomext</strong> en la optimización de su estrategia digital, así como en el desarrollo de sistemas de monitoreo para la <strong>prevención de riesgos reputacionales</strong>, identificando crisis potenciales a partir de tendencias emergentes en redes sociales.
          </p>
          <p>
            Mi enfoque combina <strong>automatización, análisis cualitativo y storytelling de datos</strong> para ayudar a las organizaciones a convertir la información en decisiones inteligentes.
          </p>
          <img src={experienciaImg} alt="Visual de experiencia" className="experience-img" />
        </section>
      )}

{mostrarHobbies && (
        <section className="experience">
          <h2>Mis Hobbies</h2>
          <p>
            Uno de mis mayores gustos es tocar la guitarra y manejar bicleta
          </p>
          <img src={experienciaImg} alt="Visual de experiencia" className="experience-img" />
        </section>
      )}

{mostrarLogros && (
  <section className="experience">
    <h2>Mis logros</h2>
    <ul>
      <li>Desarrollé un sistema de clasificación automática de +30,000 comentarios usando NLP.</li>
      <li>Implementé dashboards ejecutivos para Bancomext y Sinnia con más de 10 KPIs.</li>
      <li>Fui mentor de analistas junior y diseñé la estructura de capacitaciones internas.</li>
      <li>Fui elegido para liderar análisis en casos de crisis de reputación en redes sociales.</li>
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
