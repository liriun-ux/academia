'use client';

import { useState } from 'react';

export default function AreaIngenieriaPage() {
  const [openSubject, setOpenSubject] = useState<string | null>(null);

  const toggleSubject = (subject: string) => {
    setOpenSubject(openSubject === subject ? null : subject);
  };

  return (
    <main className="area-page">
      {/* HERO DE ÁREA */}
      <header className="area-hero">
        <h1>Preparación para la Facultad de Ingeniería (FING UMSA)</h1>
        <p>
          Programa intensivo diseñado para aprobar el Examen de Suficiencia Académica (PSA)
          y los Cursos Prefacultativos de la FING UMSA.
        </p>
        <span className="badge-approval">Tasa de Aprobación en la FING: 92%</span>
      </header>

      {/* ESTRUCTURA DEL EXAMEN */}
      <section className="area-section">
        <h2>Estructura y Ponderación del Examen UMSA</h2>
        <p>El examen de ingreso evalúa 4 materias fundamentales con la siguiente distribución:</p>
        <ul className="ponderacion-list">
          <li className="ponderacion-item">
            <strong>Matemáticas / Cálculo</strong>
            <p>30% del total</p>
          </li>
          <li className="ponderacion-item">
            <strong>Física</strong>
            <p>30% del total</p>
          </li>
          <li className="ponderacion-item">
            <strong>Química</strong>
            <p>30% del total</p>
          </li>
          <li className="ponderacion-item">
            <strong>Álgebra / Razonamiento</strong>
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
            <button className="accordion-trigger" onClick={() => toggleSubject('matematicas')}>
              <h3>Matemáticas y Cálculo I</h3>
              <span className="accordion-icon">{openSubject === 'matematicas' ? '−' : '+'}</span>
            </button>
            {openSubject === 'matematicas' && (
              <div className="accordion-content">
                <ul>
                  <li>Álgebra elemental, polinomios y factorización</li>
                  <li>Ecuaciones e inecuaciones de primer y segundo grado</li>
                  <li>Funciones, dominio, codominio y gráficas</li>
                  <li>Trigonometría e identidades trigonométricas</li>
                  <li>Geometría analítica: Recta, circunferencia, parábola, elipse</li>
                  <li>Introducción a límites y derivadas</li>
                </ul>
              </div>
            )}
          </div>

          {/* Materia 2 */}
          <div className="accordion-item">
            <button className="accordion-trigger" onClick={() => toggleSubject('fisica')}>
              <h3>Física Preuniversitaria</h3>
              <span className="accordion-icon">{openSubject === 'fisica' ? '−' : '+'}</span>
            </button>
            {openSubject === 'fisica' && (
              <div className="accordion-content">
                <ul>
                  <li>Vectores en 2D y 3D</li>
                  <li>Cinemática: MRU, MRUV, Caída libre y Movimiento Parabólico</li>
                  <li>Dinámica de la partícula y Leyes de Newton</li>
                  <li>Trabajo, Energía y Potencia</li>
                  <li>Estática y Equilibrio de cuerpos rígidos</li>
                  <li>Hidrostática y Presión</li>
                </ul>
              </div>
            )}
          </div>

          {/* Materia 3 */}
          <div className="accordion-item">
            <button className="accordion-trigger" onClick={() => toggleSubject('quimica')}>
              <h3>Química General</h3>
              <span className="accordion-icon">{openSubject === 'quimica' ? '−' : '+'}</span>
            </button>
            {openSubject === 'quimica' && (
              <div className="accordion-content">
                <ul>
                  <li>Materia, estructura atómica y tabla periódica</li>
                  <li>Nomenclatura inorgánica (IUPAC, Tradicional, Stock)</li>
                  <li>Enlace químico y estado gaseoso</li>
                  <li>Balance de reacciones redox y estequiometría</li>
                  <li>Soluciones y concentraciones (Molaridad, Normalidad)</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* HORARIOS */}
      <section className="area-section">
        <h2>Horarios Disponibles para Ingeniería</h2>
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
        <h2>¿Listo para tu ingreso a Ingeniería UMSA?</h2>
        <p>Asegura tu cupo en los grupos reducidos antes del inicio de clases.</p>
        <a
          href="https://wa.me/59170000000?text=Hola,%20quiero%20inscribirme%20al%20área%20de%20Ingeniería%20UMSA"
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
