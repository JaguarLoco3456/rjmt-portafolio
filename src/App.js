// src/App.js
import './App.css';
import React from 'react';
import avatar from './assets/avatar.png'; // Asegúrate de tener esta imagen en src/assets/
import { FaLaptopCode, FaStar, FaGamepad } from 'react-icons/fa';

function App() {
  return (
    <div className="App">
      <header className="hero">
        <img src={avatar} alt="Javi" className="avatar" />
        <h1>Bienvenido a mi espacio de trabajo</h1>
        <p>¿Qué querés saber de mí?</p>
      </header>

      <section className="cards">
        <Card icon={<FaGamepad size={40} />} title="Mis hobbies" />
        <Card icon={<FaLaptopCode size={40} />} title="Mi experiencia laboral" />
        <Card icon={<FaStar size={40} />} title="Mis logros" />
      </section>
    </div>
  );
}

function Card({ icon, title }) {
  return (
    <div className="card">
      <div className="icon">{icon}</div>
      <h3>{title}</h3>
    </div>
  );
}

export default App;
