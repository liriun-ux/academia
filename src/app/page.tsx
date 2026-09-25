import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="inicio">
      {/* SECCIÓN 1: HERO BANNER */}
      <header className="hero">
        <div className="hero-container">
          <span className="hero-tag">APRUEBA ESTE AÑO</span>

          {/* Card hero */}
          <div className="hero-card">
            <h1>Asegura tu Ingreso a la UMSA en el Primer Intento</h1>
            <p>
              Preparación especializada y de alto rendimiento para Exámenes de Suficiencia
              Académica (PSA) y Cursos Prefacultativos en Ingeniería, Medicina y Ciencias Puras.
            </p>
            {/* Botones de Acción */}
            <div className="hero-actions">
              <a
                href="https://wa.me/59170000000?text=Hola,%20quiero%20información%20para%20ingresar%20a%20la%20UMSA"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Inscribirme por WhatsApp
              </a>
              <a href="#programas" className="btn-secondary">
                Ver Programas por Facultad
              </a>
            </div>
          </div>

          {/* Indicadores clave */}
          <div className="hero-stats">
            <div className="stat-card">
              <strong>+1,200</strong>
              <p>Ingresantes Admitidos a la UMSA</p>
            </div>
            <div className="stat-card">
              <strong>95%</strong>
              <p>Efectividad en Simulacros</p>
            </div>
            <div className="stat-card">
              <strong>7 Años</strong>
              <p>Liderando la preparación en La Paz y El Alto</p>
            </div>
          </div>
        </div>
      </header>

      {/* SECCIÓN 2: BANNER DE CONVOCATORIA ACTIVA */}
      <section className="banner-convocatoria">
        <div className="banner-container">
          <span className="badge-alert">CUPOS LIMITADOS - INICIO 15 DE OCTUBRE</span>
          <h2>🚀 Ciclo Intensivo Pre-UMSA 2026 – Convocatoria Abierta</h2>
          <p>Clases presenciales y virtuales con resolución de Exámenes Pasados 2020–2025.</p>
          <a
            href="https://wa.me/59170000000?text=Hola,%20quiero%20reservar%20un%20cupo%20para%20el%20Ciclo%20Intensivo"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Reservar mi Cupo con Descuento
          </a>
        </div>
      </section>

      {/* SECCIÓN 3: PROGRAMAS POR FACULTAD */}
      <section id="programas" className="section-programas">
        <div className="section-header">
          <h2>Elige tu Facultad y Empieza tu Preparación</h2>
          <p>Cursos diseñados según los temarios oficiales actualizados de la UMSA.</p>
        </div>

        <div className="grid-cards">
          {/* Card 1: Ingeniería */}
<article className="card program-card">
      <div className="card-image-wrapper">
        <Image
          src="/img/ing.jpg"
          alt="Fachada de la Facultad de Ingeniería UMSA en la Plaza Obelisco, La Paz"
          width={600}
          height={350}
          className="card-media-img"
          priority
        />
        <div className="card-tag">FING UMSA</div>
      </div>

      <div className="card-content">
        <h3>Facultad de Ingeniería</h3>
        <p>
          <strong>Materias Clave:</strong> Física, Química, Matemáticas (Cálculo) y Álgebra.
        </p>
        <p>
          <strong>Dirigido a:</strong> Pre-Ingeniería Civil, Industrial, Sistemas, Electrónica, Mecánica, Petrolera, etc.
        </p>
        <p>
          <strong>Duración:</strong> 8 a 12 Semanas (Intensivo).
        </p>
        <Link href="/area-ingenieria" className="btn-card">
          Ver Plan de Ingeniería
        </Link>
      </div>
    </article>

          {/* Card 2: Medicina */}
          <article className="card program-card">
      <div className="card-image-wrapper">
        <Image
          src="/img/medicina.jpg"
          alt="Fachada de la Facultad de Ingeniería UMSA en la Plaza Obelisco, La Paz"
          width={600}
          height={350}
          className="card-media-img"
          priority
        />
            <div className="card-tag">FMS UMSA</div>
      </div>
      <div className="card-content">
            <h3>Facultad de Medicina, Enfermería y Tecnología</h3>
            <p><strong>Materias Clave:</strong> Biología Celular, Morfofisiología, Química, Física y Lenguaje.</p>
            <p><strong>Dirigido a:</strong> Medicina, Enfermería, Odontología, Nutrición y Tecnología Médica.</p>
            <p><strong>Duración:</strong> 10 a 14 Semanas (Intensivo).</p>
        </div>
            <Link href="/area-medicina" className="btn-card">
              Ver Plan de Medicina
            </Link>
          </article>

          {/* Card 3: Ciencias Puras */}
          <article className="card program-card">
      <div className="card-image-wrapper">
        <Image
          src="/img/inf.jpg"
          alt="Fachada de la Facultad de Ingeniería UMSA en la Plaza Obelisco, La Paz"
          width={600}
          height={350}
          className="card-media-img"
          priority
        />
            <div className="card-tag">FCPN UMSA</div>
            </div>
      <div className="card-content">
            <h3>Facultad de Ciencias Puras y Naturales</h3>
            <p><strong>Materias Clave:</strong> Matemáticas, Física, Química, Biología, Informática y Estadística.</p>
            <p><strong>Dirigido a:</strong> Cs. de la Computación, Biología, Física, Química, Matemáticas y Estadística.</p>
            <p><strong>Duración:</strong> 8 a 12 Semanas.</p>
            </div>
            <Link href="/area-ciencias-puras" className="btn-card">
              Ver Plan de Ciencias Puras
            </Link>
          </article>
        </div>
      </section>

      {/* SECCIÓN 4: MÉTODO / DIFERENCIADORES */}
      <section className="section-metodo">
        <div className="section-header">
          <h2>¿Por qué somos la Academia N° 1 en Aprobados UMSA?</h2>
        </div>
        <div className="grid-metodo">
          <article className="card metodo-card">
            <span className="step-number">01</span>
            <h3>Simulacros Tipo UMSA</h3>
            <p>Pruebas semanales bajo la misma presión, formato de preguntas y tiempo del examen real.</p>
          </article>
          <article className="card metodo-card">
            <span className="step-number">02</span>
            <h3>Banco de Exámenes Pasados</h3>
            <p>Más de 500 ejercicios resueltos paso a paso de gestiones anteriores.</p>
          </article>
          <article className="card metodo-card">
            <span className="step-number">03</span>
            <h3>Docentes y Auxiliares UMSA</h3>
            <p>Clases impartidas por los mejores auxiliares de docencia y egresados con máxima nota.</p>
          </article>
          <article className="card metodo-card">
            <span className="step-number">04</span>
            <h3>Plataforma y Grabaciones</h3>
            <p>Si no puedes asistir a una clase, accede a la grabación en HD desde cualquier dispositivo.</p>
          </article>
        </div>
      </section>

      {/* SECCIÓN 5: TESTIMONIOS */}
      <section className="section-testimonios">
        <div className="section-header">
          <h2>Nuestros Estudiantes Ya Están en la UMSA</h2>
        </div>
        <div className="grid-testimonios">
          <article className="card testimonio-card">
            <blockquote>
              "Gracias a los simulacros de la academia, el examen de la facultad me pareció muy familiar. Resolví el área de Cálculo sin dudas."
            </blockquote>
            <h3>Mateo Condori</h3>
            <p className="carrera-tag">Ingresó a Ingeniería de Sistemas UMSA (Puntaje: 88/100)</p>
          </article>
          <article className="card testimonio-card">
            <blockquote>
              "Morfofisiología era mi materia más difícil. Los auxiliares nos enseñaron mnemotecnias clave que vinieron exactamente en la prueba."
            </blockquote>
            <h3>Camila Mamani</h3>
            <p className="carrera-tag">Ingresó a Medicina UMSA</p>
          </article>
        </div>
      </section>

      {/* SECCIÓN 6: PRECIOS */}
      <section className="section-precios">
        <div className="section-header">
          <h2>Inversión en tu Futuro Universitario</h2>
        </div>
        <div className="grid-precios">
          {/* Plan Mensual */}
          <article className="card plan-card">
            <h3>Ciclo Mensual</h3>
            <p className="price"><strong>Bs. 250</strong> <span>/ mes</span></p>
            <ul>
              <li>Clases en vivo y presenciales</li>
              <li>PDF de guías y ejercicios</li>
              <li>Simulacros quincenales</li>
            </ul>
            <a
              href="https://wa.me/59170000000?text=Quiero%20el%20Plan%20Mensual"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Elegir Plan Mensual
            </a>
          </article>

          {/* Plan Completo */}
          <article className="card plan-card card-featured">
            <span className="badge-featured">RECOMENDADO</span>
            <h3>Ciclo Completo</h3>
            <p className="price"><strong>Bs. 600</strong> <span>(Pago único)</span></p>
            <p className="promo-text"><em>Promoción: Beca Combo (2 personas por Bs. 500 c/u)</em></p>
            <ul>
              <li>Clases completas hasta el día del examen</li>
              <li>Compendio Impreso de Exámenes Pasados</li>
              <li>Simulacros Ilimitados semanales</li>
              <li>Acceso a Grabaciones HD</li>
              <li>Banco de Preguntas UMSA resuelto</li>
            </ul>
            <a
              href="https://wa.me/59170000000?text=Quiero%20el%20Plan%20Completo"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Asegurar Plan Completo
            </a>
          </article>
        </div>
      </section>

      {/* SECCIÓN 7: SEDES Y CONTACTO */}
      <section className="section-contacto">
        <div className="section-header">
          <h2>Visítanos o Contáctanos</h2>
        </div>
        <div className="contacto-grid">
          <div className="contacto-info">
            <div className="info-block">
              <h3>Sede Central La Paz</h3>
              <p>Av. Villazón, Edificio Multicentro, Piso 3 (Frente al Monoblock Central UMSA).</p>
            </div>

            <div className="info-block">
              <h3>Sede El Alto</h3>
              <p>Av. 6 de Marzo, Calle 2, Edificio Alborada, Piso 2 (A pasos de La Ceja).</p>
            </div>

            <div className="info-block">
              <h3>Horarios de Atención</h3>
              <p>Lunes a Viernes de 08:30 a 18:30 | Sábados de 09:00 a 13:00.</p>
            </div>

            <div className="info-block">
              <h3>Teléfonos / WhatsApp</h3>
              <p>+591 70000000 / +591 22000000</p>
            </div>
          </div>
<div className="mapa-container">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61191.026148777746!2d-68.23432232836215!3d-16.554389285778758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915f206520793ddd%3A0x53f6df346cc69976!2sUniversidad%20Mayor%20de%20San%20Andr%C3%A9s!5e0!3m2!1ses-419!2sbo!4v1790278509401!5m2!1ses-419!2sbo"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="strict-origin-when-cross-origin"
    title="Ubicación UMSA y Sedes"
  />
</div>
        </div>
      </section>

      {/* BOTÓN FLOTANTE PERMANENTE */}
      <a
        href="https://wa.me/59170000000?text=Hola,%20necesito%20orientación%20académica"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-whatsapp-floating"
      >
        <span>💬 Hablar por WhatsApp</span>
      </a>
    </main>
  );
}
