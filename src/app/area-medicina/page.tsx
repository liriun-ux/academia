'use client';

import { useState } from 'react';

export default function AreaMedicinaPage() {
  const [openSubject, setOpenSubject] = useState<string | null>(null);

  const toggleSubject = (subject: string) => {
    setOpenSubject(openSubject === subject ? null : subject);
  };

  return (
    <main className="area-page">
      {/* HERO DE ÁREA */}
      <header className="area-hero">
        <h1>Preparación para la Facultad de Medicina, Enfermería y Odontología (FMS UMSA)</h1>
        <p>
          Entrenamiento intensivo de memorización activa, mnemotecnias y resolución de pruebas de
          admisión para la Facultad de Ciencias de la Salud.
        </p>
        <span className="badge-approval">Tasa de Aprobación en Salud: 89%</span>
      </header>

      {/* ESTRUCTURA DEL EXAMEN */}
      <section className="area-section">
        <h2>Estructura del Examen Salud UMSA</h2>
        <p>Distribución de áreas evaluadas en las pruebas oficiales:</p>
        <ul className="ponderacion-list">
          <li className="ponderacion-item">
            <strong>Biología y Morfofisiología</strong>
            <p>40% del total</p>
          </li>
          <li className="ponderacion-item">
            <strong>Química</strong>
            <p>20% del total</p>
          </li>
          <li className="ponderacion-item">
            <strong>Física Médica</strong>
            <p>20% del total</p>
          </li>
          <li className="ponderacion-item">
            <strong>Lenguaje y Comprensión</strong>
            <p>20% del total</p>
          </li>
        </ul>
      </section>

      {/* TEMARIO DESPLEGABLE */}
      <section className="area-section">
        <h2>Temario Oficial Analítico</h2>
        <div className="accordion-container">
          {/* Materia 1 */}
          <div className="accordion-item">
            <button className="accordion-trigger" onClick={() => toggleSubject('biologia')}>
              <h3>Biología Celular y Humana</h3>
              <span className="accordion-icon">{openSubject === 'biologia' ? '−' : '+'}</span>
            </button>
            {openSubject === 'biologia' && (
              <div className="accordion-content">
                <ul>
                  <li>La célula: Estructura, organelos y función celular</li>
                  <li>Genética mendeliana, ADN y ARN</li>
                  <li>Sistemas del cuerpo humano: Digestivo, Circulatorio, Respiratorio y Renal</li>
                  <li>Sistema Nervioso, Endocrino y Reproductor</li>
                  <li>Ecología y salud pública en Bolivia</li>
                </ul>
              </div>
            )}
          </div>

          {/* Materia 2 */}
          <div className="accordion-item">
            <button className="accordion-trigger" onClick={() => toggleSubject('morfofisiologia')}>
              <h3>Morfofisiología</h3>
              <span className="accordion-icon">{openSubject === 'morfofisiologia' ? '−' : '+'}</span>
            </button>
            {openSubject === 'morfofisiologia' && (
              <div className="accordion-content">
                <ul>
                  <li>Terminología anatómica y planos corporales</li>
                  <li>Sistema osteoarticular y muscular principal</li>
                  <li>Histología básica: Tejidos epitelial, conectivo, muscular y nervioso</li>
                  <li>Fisiología de la circulación sanguínea y respiración</li>
                </ul>
              </div>
            )}
          </div>

          {/* Materia 3 */}
          <div className="accordion-item">
            <button className="accordion-trigger" onClick={() => toggleSubject('quimicamed')}>
              <h3>Química Orgánica y Bioquímica</h3>
              <span className="accordion-icon">{openSubject === 'quimicamed' ? '−' : '+'}</span>
            </button>
            {openSubject === 'quimicamed' && (
              <div className="accordion-content">
                <ul>
                  <li>Hidrocarburos alifáticos y aromáticos</li>
                  <li>Grupos funcionales (Alcoholes, Cetonas, Ácidos Carboxílicos, Aminas)</li>
                  <li>Biomoléculas: Carbohidratos, Lípidos, Proteínas y Ácidos Nucleicos</li>
                  <li>Soluciones, pH y amortiguadores en fluidos biológicos</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* HORARIOS */}
      <section className="area-section">
        <h2>Horarios Disponibles para Medicina</h2>
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
        <h2>¿Quieres asegurar tu cupo en Medicina UMSA?</h2>
        <p>Inscríbete hoy y accede de inmediato al banco de exámenes pasados resueltos.</p>
        <a
          href="https://wa.me/59170000000?text=Hola,%20quiero%20inscribirme%20al%20área%20de%20Medicina%20UMSA"
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
