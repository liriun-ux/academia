import Link from 'next/link';
import Image from 'next/image';

const whatsapp = "59170000000";

function WhatsAppLink({
  message,
  children,
  className = "",
}: {
  message?: string;
  children: React.ReactNode;
  className?: string;
}) {
  const url = message
    ? `https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`
    : `https://wa.me/${whatsapp}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}

export default function HomePage() {
  return (
    <main className="inicio">
      {/* HERO */}
      <header className="hero container">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="status-pill">
              <span className="pulse-dot" />
              <span>CONVOCATORIA UMSA 2026/2027</span>
              <strong>INSCRIPCIONES ABIERTAS</strong>
            </div>

            <h1>
              La Ciencia de
              <br />
              <span className="white-gradient">Ingresar a la UMSA</span>
              <span className="accent-gradient">
                En el Primer Intento.
              </span>
            </h1>

            <p className="hero-description">
              Plataforma de preparación intensiva y simulacros predictivos con
              Inteligencia Académica para los exámenes{" "}
              <strong>PSA y Cursos Prefacultativos</strong> en Medicina,
              Ingeniería y Ciencias Puras.
            </p>

            <div className="hero-actions">
              <WhatsAppLink
                message="Hola, quiero reservar mi cupo"
                className="primary-button"
              >
                <span className="whatsapp-icon">◉</span>
                Inscribirme por WhatsApp
              </WhatsAppLink>

              <a href="#programas" className="secondary-button">
                Explorar Facultades <span>›</span>
              </a>
            </div>

            <div className="stats">
              <div>
                <strong>+1,200</strong>
                <span>Admitidos Oficiales</span>
              </div>
              <div>
                <strong className="green-text">96.4%</strong>
                <span>Precisión de Examen</span>
              </div>
              <div>
                <strong className="cyan-text">7 Años</strong>
                <span>Líderes en La Paz</span>
              </div>
            </div>
          </div>

          {/* DASHBOARD MOCKUP */}
          <div className="dashboard-wrap">
            <div className="dashboard">
              <div className="window-bar">
                <div className="window-dots">
                  <i className="red" />
                  <i className="yellow" />
                  <i className="green" />
                </div>
                <span>PSA_ANALYTICS_V4.2.LOG</span>
              </div>

              <div className="score-card">
                <div className="row-between">
                  <span>PROBABILIDAD DE INGRESO</span>
                  <b>OPTIMAL</b>
                </div>
                <strong>
                  92.8 <small>/ 100 PTS</small>
                </strong>
                <div className="progress">
                  <div />
                </div>
              </div>

              <div className="metric-grid">
                <div className="metric">
                  <span>MATEMÁTICAS / FÍSICA</span>
                  <strong>98/100</strong>
                  <small className="green-text">↑ Top 2% General</small>
                </div>
                <div className="metric">
                  <span>QUÍMICA / BIOLOGÍA</span>
                  <strong>94/100</strong>
                  <small className="cyan-text">✓ Nivel Sobresaliente</small>
                </div>
              </div>

              <div className="activity">
                <div>
                  <span>● Simulacro Ingeniería #14 completado</span>
                  <small>Hace 2m</small>
                </div>
                <div>
                  <span>ϟ Banco de Preguntas UMSA actualizado</span>
                  <small>Hoy</small>
                </div>
              </div>

              <div className="guarantee">◆ Garantía de Preparación</div>
            </div>
          </div>
        </div>
      </header>
      </main>
  )
}
