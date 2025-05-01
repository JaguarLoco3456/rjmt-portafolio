import './App.css';
import React, { useState, useRef } from 'react';
import avatar from './assets/avatar.png';
import experienciaImg from './assets/experiencia.jpg';
import hobbieImg from './assets/hobbieImage.png';
import logrosImg from './assets/logrosImage.png';
import { FaLaptopCode, FaStar, FaGamepad, FaXTwitter, FaInstagram, FaLinkedin  } from 'react-icons/fa6';
import fondo from './assets/ghibli-data-bg.png'; // ✅ Solo si está en src/assets

function App() {
  const [mostrarExperiencia, setMostrarExperiencia] = useState(false);
  const experienciaRef = useRef(null);
  const toggleExperiencia = () => {
    setMostrarExperiencia(prev => {
      const nuevo = !prev;
      if (!prev) setTimeout(() => experienciaRef.current?.scrollIntoView({ behavior: 'smooth' }), 100);
      return nuevo;
    });
  };

  const [mostrarHobbies, setMostrarHobbies] = useState(false);
  const hobbiesRef = useRef(null);
  const toggleHobbies = () => {
    setMostrarHobbies(prev => {
      const nuevo = !prev;
      if (!prev) setTimeout(() => hobbiesRef.current?.scrollIntoView({ behavior: 'smooth' }), 100);
      return nuevo;
    });
  };

  const [mostrarLogros, setMostrarLogros] = useState(false);
  const logrosRef = useRef(null);
  const toggleLogros = () => {
    setMostrarLogros(prev => {
      const nuevo = !prev;
      if (!prev) setTimeout(() => logrosRef.current?.scrollIntoView({ behavior: 'smooth' }), 100);
      return nuevo;
    });
  };

  const frases = [
    "Los datos también cuentan historias 📊",
    "Bienvenido a mi universo analítico 🚀",
    "Todo problema tiene un patrón 👀",
    "Transformo texto en decisiones ⚡",
    "Si puedes medirlo, puedes mejorarlo 📈",
    "Los datos no mienten, solo hay que saber escucharlos 🧠",
    "Analizar es mi superpoder 🦸‍♂️",
    "El caos también tiene estructura 🔍",
    "Una tabla bien hecha, vale más que mil palabras 📋",
    "Detrás de cada número, hay una historia esperando ser contada ✍️",
    "La intuición es buena, pero los datos son mejores 🎯",
    "Leo bases de datos como otros leen novelas 📚",
    "La verdad está en las queries 🧾",
    "Donde otros ven texto, yo veo patrones 🧩",
    "Entre más limpio el dato, más poderosa la decisión 💎",
    "SQL es mi segundo idioma 💬",
    "Automatizar es amar en silencio 🤖",
    "No soy mago, soy analista de datos 🪄",
    "Mi zona de confort está entre CSVs y queries 📂",
    "Storytelling con Python, SQL y café ☕",
    "Transformo ruido en conocimiento 🌀",
    "Data first, opinion later 👨‍💻",
    "Mido, analizo y conquisto 💥",
    "Cada dashboard tiene su magia ✨",
    "Trabajo en silencios que gritan insights 🔇➡️📢",
    "Convertir datos en acción es mi día a día 🔄",
    "Donde hay data, hay oportunidad 💼",
    "Las mejores decisiones no se toman a ciegas 👁️",
    "Soy quien lee lo que nadie escribe 📈",
    "No hago predicciones, hago modelos con lógica ⚖️",
    "Mi arte es hacer visibles las conexiones invisibles 🕸️",
    "Cada clic es una historia esperando ser entendida 🖱️",
    "No solo analizo datos, los interpreto con propósito 🎯",
    "Dicen que el conocimiento es poder, yo lo filtro primero ⚗️",
    "El dato correcto en el momento correcto lo cambia todo ⏱️"

  ];
  const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
  
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
  <div className="avatar-con-burbuja">
    <div className="nube-comentario">
      {fraseAleatoria}
    </div>
    <img src={avatar} alt="Javi" className="avatar" />
  </div>

  <div className="info-y-qr">
    <div className="info-box">
      <h2>Ramón Javier Monroy Torre</h2>
      <p><strong>Teléfono:</strong> +52 56 1800 3081</p>
      <p><strong>Empresa:</strong> Sinnia, Data Laboratory</p>
      <p><strong>Puesto:</strong> Senior Data Analyst</p>
      <p><strong>Email:</strong> javitorresin40@gmail.com</p>
    </div>
    <div className="qr-box">
      <img src={require('./assets/qr-whatsapp.png')} alt="QR WhatsApp" className="qr-img" />
    </div>
  </div>
</div>



      </header>
      <div className="bienvenidos"> 
          <p>Aquí puedes saber un poco mas sobre mí...</p>
      </div>

      <section className="cards">
        <Card icon={<FaLaptopCode size={40} />} title="Mi experiencia laboral" onClick={toggleExperiencia} />
        <Card icon={<FaGamepad size={40} />} title="Mis hobbies" onClick={toggleHobbies} />
        <Card icon={<FaStar size={40} />} title="Mis logros" onClick={toggleLogros} />
      </section>
      <div className="social-icons">
  <a href="https://x.com/randompumpking?s=21" target="_blank" rel="noopener noreferrer" className="icon-box">
    <FaXTwitter size={20} />
  </a>
  <a href="https://www.instagram.com/rjavimtorre?igsh=ZzRydGV4ZXBiem5y&utm_source=qr" target="_blank" rel="noopener noreferrer" className="icon-box">
    <FaInstagram size={20} />
  </a>
  <a href="https://www.linkedin.com/in/ram%C3%B3n-javier-monroy-torre-9799b7153/" target="_blank" rel="noopener noreferrer" className="icon-box">
    <FaLinkedin size={20} />
  </a>
</div>

      {mostrarExperiencia && (
        <section ref={experienciaRef} className="experience">
          <h2>Mi experiencia laboral</h2>
          <p>Soy analista de datos con más de 5 años de experiencia en el tratamiento de grandes volúmenes de datos estructurados. En mi día a día, desarrollo soluciones que procesan millones de caracteres a través de consultas SQL optimizadas y pipelines automatizados.</p>
          <p>Trabajo con herramientas como <strong>Python, SQL, Looker, Tableau, BigQuery</strong> y desarrollo procesos ETL eficientes para transformar datos complejos en visualizaciones y reportes accionables.</p>
          <p>He diseñado modelos de clasificación automatizada aplicando enfoques como <strong>Zero-shot learning</strong>, <strong>Bayesianos</strong> y <strong>bag-of-words</strong>, adaptados a proyectos con enfoques jurídicos, educativos, sociales y comerciales.</p>
          <p>Uno de los casos más relevantes fue el análisis de más de <strong>32,000 comentarios</strong> en TikTok para detectar patrones temáticos y sentimentales, apoyando la toma de decisiones ejecutivas.</p>
          <p>También he trabajado con <strong>instituciones de gobierno</strong> en la optimización de su estrategia digital, así como en el desarrollo de sistemas de monitoreo para la <strong>prevención de riesgos </strong>, identificando crisis potenciales a partir de tendencias emergentes en redes sociales.</p>
          <p>Mi enfoque combina <strong>automatización, análisis cualitativo y storytelling de datos</strong> para ayudar a las organizaciones a convertir la información en decisiones inteligentes.</p>
          <img src={experienciaImg} alt="Visual de experiencia" className="experience-img" />
        </section>
      )}

      {mostrarHobbies && (
        <section ref={hobbiesRef} className="experience">
          <h2>Mis hobbies</h2>
          <p>En este perfil estamos los fanáticos de los datos,la buena música y el aprendizaje</p>
          <p>Me apasiona tocar la guitarra, explorar nueva música y componer conaciones. Es una forma de expresión que me ayuda a mantener un buen ritmo de vida.</p>
          <p>También disfruto salir en bicicleta, ya sea para hacer ejercicio o para trasladarme de un lado a otro y enocntrar lugares en la CDMX.</p>
          <p>Además, soy fan de los uegos estratégicos y de rol como Risk, Monopoly y a veces Uno.</p>
          <img src={hobbieImg} alt="Visual de hobbies" className="experience-img" />
        </section>
      )}

      {mostrarLogros && (
        <section ref={logrosRef} className="experience">
          <h2>Mis logros</h2>
          <ul>
            <li> Ayudé a desarrollar un sistema de clasificación automática que segmentó más de 30,000 comentarios y 273 publicaciones de TikTok y X durante una crisis reputacional, utilizando NLP, Python y modelos como Gemini Flash 2.0, todo en un periodo de solo 3 días.</li>
            <p></p>
            <li>Ayudé a prevenir problematicas de posible escala y a controlar picos de conversación en casos sensibles para distintas organizaciones.</li>
            <p></p>
            <li>Mediante análisis creativo y cualitativo logré anticipar tendencias y diseñar contenido que penetró orgánicamente en la conversación digital, generando más de 16 millones de impresiones por publicación, un incremento significativo en clics y audiencia.</li>
            <p></p>
            <li>Para una empresa del sector asegurador, logramos duplicar las ventas directas a través de medios digitales en menos de 12 meses, reduciendo el costo por emisión y aumentando significativamente el tráfico al sitio web.</li>
            <p></p>
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
