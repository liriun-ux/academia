'use client';

import { useState } from 'react';

export default function AreaCienciasPurasPage() {
  const [openSubject, setOpenSubject] = useState<string | null>(null);

  const toggleSubject = (subject: string) => {
    setOpenSubject(openSubject === subject ? null : subject);
  };

  return (
    <main className="area-page ">
      {/* HERO DE ÁREA */}
      <header className="area-hero inf_img">
        <h1>Preparación para la Facultad de Ciencias Puras y Naturales (FCPN UMSA)</h1>
        <p>
          Preparación para las carreras de Informática, Biología, Física, Química, Matemáticas y Estadística.
        </p>
        <span className="badge-approval">Tasa de Aprobación en la FCPN: 94%</span>
      </header>

      {/* ESTRUCTURA DEL EXAMEN */}
      <section className="area-section">
        <h2>Estructura del Examen FCPN UMSA</h2>
        <p>Evaluación según la carrera elegida dentro de la FCPN:</p>
        <ul className="ponderacion-list">
          <li className="ponderacion-item">
            <strong>Matemáticas y Lógica</strong>
            <p>35% del total</p>
          </li>
          <li className="ponderacion-item">
            <strong>Física o Biología</strong>
            <p>30% del total</p>
          </li>
          <li className="ponderacion-item">
            <strong>Química</strong>
            <p>25% del total</p>
          </li>
          <li className="ponderacion-item">
            <strong>Lógica Algorítmica</strong>
            <p>10% del total</p>
          </li>
        </ul>
      </section>

      {/* TEMARIO DESPLEGABLE */}
      <section className="area-section">
        <h2>Temario Oficial Analítico</h2>
        <div className="accordion-container">
          {/* Materia 1 */}
          <div className="accordion-item">
            <button className="accordion-trigger" onClick={() => toggleSubject('logica')}>
              <h3>Lógica Matemática y Algoritmos</h3>
              <span className="accordion-icon">{openSubject === 'logica' ? '−' : '+'}</span>
            </button>
            {openSubject === 'logica' && (
              <div className="accordion-content">
                <ul>
                  <li>Proposiciones lógicas y tablas de verdad</li>
                  <li>Teoría de conjuntos y diagramas de Venn</li>
                  <li>Razonamiento deductivo e inductivo</li>
                  <li>Introducción a diagramas de flujo y pseudocódigo</li>
                </ul>
              </div>
            )}
          </div>

          {/* Materia 2 */}
          <div className="accordion-item">
            <button className="accordion-trigger" onClick={() => toggleSubject('matematicafcpn')}>
              <h3>Matemática Avanzada</h3>
              <span className="accordion-icon">{openSubject === 'matematicafcpn' ? '−' : '+'}</span>
            </button>
            {openSubject === 'matematicafcpn' && (
              <div className="accordion-content">
                <ul>
                  <li>Álgebra superior y matrices</li>
                  <li>Sistemas de ecuaciones lineales</li>
                  <li>Geometría plana y del espacio</li>
                  <li>Trigonometría analítica y funciones complejas</li>
                </ul>
              </div>
            )}
          </div>

          {/* Materia 3 */}
          <div className="accordion-item">
            <button className="accordion-trigger" onClick={() => toggleSubject('cienciaspuras')}>
              <h3>Física y Química Fundamental</h3>
              <span className="accordion-icon">{openSubject === 'cienciaspuras' ? '−' : '+'}</span>
            </button>
            {openSubject === 'cienciaspuras' && (
              <div className="accordion-content">
                <ul>
                  <li>Mecánica clásica y análisis dimensional</li>
                  <li>Termodinámica básica</li>
                  <li>Estructura atómica y tabla periódica</li>
                  <li>Reacciones químicas y transformaciones energéticas</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* HORARIOS */}
      <section className="area-section">
        <h2>Horarios Disponibles para Ciencias Puras</h2>
        <ul className="horarios-grid">
          <li className="horario-card">
            <strong>Turno Mañana</strong>
            <p>08:30 a 11:30</p>
          </li>
          <li className="horario-card">
            <strong>Turno Tarde</strong>
            <p>15:00 a 18:00</p>
          </li>
          <li className="horario-card">
            <strong>Turno Noche</strong>
            <p>18:30 a 21:00</p>
          </li>
        </ul>
      </section>

      {/* BANNER CTA */}
      <section className="cta-banner-area">
        <h2>Ingresa a la Facultad de Ciencias Puras UMSA</h2>
        <p>Aprende de ex-auxiliares con los mejores puntajes de la carrera.</p>
        <a
          href="https://wa.me/59170000000?text=Hola,%20quiero%20inscribirme%20al%20área%20de%20Ciencias%20Puras%20UMSA"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Inscribirme por WhatsApp
        </a>
      </section>
    </main>
  );
}
