import './App.css';
import React, { useState } from 'react';
import avatar from './assets/avatar.png';
import experienciaImg from './assets/experiencia.jpg';
import hobbieImg from './assets/hobbieImage.png';
import logrosImg from './assets/logrosImage.png';
import { FaLaptopCode, FaStar, FaGamepad } from 'react-icons/fa';
import fondo from './assets/ghibli-data-bg.png'; // ✅ Solo si está en src/assets

function App() {
  const [mostrarExperiencia, setMostrarExperiencia] = useState(false);
  const toggleExperiencia = () => setMostrarExperiencia(prev => !prev);

  const [mostrarHobbies, setMostrarHobbies] = useState(false);
  const toggleHobbies = () => setMostrarHobbies(prev => !prev);

  const [mostrarLogros, setMostrarLogros] = useState(false);
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
          <p>Soy analista de datos con más de 5 años de experiencia en el tratamiento de grandes volúmenes de datos estructurados. En mi día a día, desarrollo soluciones que procesan millones de caracteres a través de consultas SQL optimizadas y pipelines automatizados.</p>
          <p>Trabajo con herramientas como <strong>Python, SQL, Looker, Tableau, BigQuery</strong> y desarrollo procesos ETL eficientes para transformar datos complejos en visualizaciones y reportes accionables.</p>
          <p>He diseñado modelos de clasificación automatizada aplicando enfoques como <strong>Zero-shot learning</strong>, <strong>Bayesianos</strong> y <strong>bag-of-words</strong>, adaptados a proyectos con enfoques jurídicos, educativos, sociales y comerciales.</p>
          <p>Uno de los casos más relevantes fue el análisis de más de <strong>32,000 comentarios</strong> en TikTok para detectar patrones temáticos y sentimentales, apoyando la toma de decisiones reputacionales.</p>
          <p>También he trabajado con instituciones como <strong>Bancomext</strong> en la optimización de su estrategia digital, así como en el desarrollo de sistemas de monitoreo para la <strong>prevención de riesgos reputacionales</strong>, identificando crisis potenciales a partir de tendencias emergentes en redes sociales.</p>
          <p>Mi enfoque combina <strong>automatización, análisis cualitativo y storytelling de datos</strong> para ayudar a las organizaciones a convertir la información en decisiones inteligentes.</p>
          <img src={experienciaImg} alt="Visual de experiencia" className="experience-img" />
        </section>
      )}

      {mostrarHobbies && (
        <section className="experience">
          <h2>Mis hobbies</h2>
          <p>Aunque mi día a día está lleno de datos, algoritmos y dashboards, también valoro el equilibrio a través de actividades que me conectan con mi lado más creativo y activo.</p>
          <p>Me apasiona tocar la guitarra, explorar nuevos acordes y componer música. Es una forma de expresión que me ayuda a mantener la concentración y creatividad incluso en proyectos analíticos.</p>
          <p>También disfruto salir en bicicleta, ya sea para relajarme o para recorrer nuevas rutas. El ejercicio y la naturaleza son clave para liberar ideas y mantenerme enfocado.</p>
          <p>Además, soy fan de los videojuegos estratégicos y de rol, donde la lógica, la resolución de problemas y la toma de decisiones también son protagonistas —muy parecido a mi enfoque en datos.</p>
          <img src={hobbieImg} alt="Visual de hobbies" className="experience-img" />
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
          <img src={logrosImg} alt="Visual de logros" className="experience-img" />
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
