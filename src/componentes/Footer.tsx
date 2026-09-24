import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer-site">
      <div className="footer-container">
        
        {/* COLUMNA 1: SOBRE LA ACADEMIA */}
        <div className="footer-col footer-about">
          <h3 className="footer-title">Academia Pre-UMSA</h3>
          <p>
            Especialistas en la preparación de alto rendimiento para el Examen de Suficiencia 
            Académica (PSA) y Cursos Prefacultativos de la UMSA en La Paz y El Alto.
          </p>
          <div className="footer-badge">
            <span>🎓 +1,200 Ingresantes Admitidos</span>
          </div>
        </div>

        {/* COLUMNA 2: PROGRAMAS POR FACULTAD */}
        <div className="footer-col">
          <h4 className="footer-subtitle">Programas</h4>
          <ul className="footer-links">
            <li>
              <Link href="/area-ingenieria">Facultad de Ingeniería (FING)</Link>
            </li>
            <li>
              <Link href="/area-medicina">Facultad de Medicina (FMS)</Link>
            </li>
            <li>
              <Link href="/area-ciencias-puras">Ciencias Puras (FCPN)</Link>
            </li>
            <li>
              <Link href="/#programas">Todos los Cursos</Link>
            </li>
          </ul>
        </div>

        {/* COLUMNA 3: ENLACES RÁPIDOS */}
        <div className="footer-col">
          <h4 className="footer-subtitle">Navegación</h4>
          <ul className="footer-links">
            <li>
              <Link href="/">Inicio</Link>
            </li>
            <li>
              <a href="/#programas">Facultades</a>
            </li>
            <li>
              <a href="https://wa.me/59170000000?text=Hola,%20quiero%20consultar%20sobre%20los%20precios" target="_blank" rel="noopener noreferrer">
                Precios e Inscripciones
              </a>
            </li>
            <li>
              <a href="https://wa.me/59170000000?text=Hola,%20quisiera%20ubicación%20de%20las%20sedes" target="_blank" rel="noopener noreferrer">
                Ubicación de Sedes
              </a>
            </li>
          </ul>
        </div>

        {/* COLUMNA 4: CONTACTO DIRECTO */}
        <div className="footer-col">
          <h4 className="footer-subtitle">Contacto & Sedes</h4>
          <address className="footer-contact-info">
            <p>
              <strong>Sede La Paz:</strong> Av. Villazón, Edif. Multicentro, Piso 3 (Frente al Monoblock).
            </p>
            <p>
              <strong>Sede El Alto:</strong> Av. 6 de Marzo, Edif. Alborada, Piso 2 (La Ceja).
            </p>
            <p className="footer-phone">
              <strong>WhatsApp:</strong> +591 70000000
            </p>
          </address>
        </div>

      </div>

      {/* BARRA INFERIOR DE COPYRIGHT */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p>© {new Date().getFullYear()} Academia Pre-UMSA. Todos los derechos reservados.</p>
          <p className="footer-legal-note">
            *Institución de preparación independiente. No afiliada oficialmente a la administración central de la UMSA.
          </p>
        </div>
      </div>
    </footer>
  );
}
