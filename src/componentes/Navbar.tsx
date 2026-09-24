'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Ocultar al deslizar hacia abajo / Mostrar al deslizar hacia arriba
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false); // Oculta nav al bajar
      } else {
        setIsVisible(true); // Muestra nav al subir
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Bloquear scroll del body cuando el menú móvil está abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      {/* HEADER SUPERIOR VISIBLE / OCULTABLE CON SCROLL */}
      <header className={`header-site ${isVisible ? 'header-visible' : 'header-hidden'}`}>
        <div className="nav-container">
          
          {/* LOGOTIPO */}
          <Link href="/" className="nav-logo" onClick={closeMenu}>
            <span>PRE-UMSA</span>
            <small>ACADEMIA</small>
          </Link>

          {/* MENÚ DE ESCRITORIO (DESKTOP) */}
          <nav className="nav-desktop">
            <ul className="nav-links">
              <li>
                <Link href="/">Inicio</Link>
              </li>
              <li>
                <Link href="/area-ingenieria">Ingeniería</Link>
              </li>
              <li>
                <Link href="/area-medicina">Medicina</Link>
              </li>
              <li>
                <Link href="/area-ciencias-puras">Ciencias Puras</Link>
              </li>
              <li>
                <a href="/#programas">Programas</a>
              </li>
            </ul>
          </nav>

          {/* BOTÓN CTA DESKTOP */}
          <div className="nav-actions-desktop">
            <a
              href="https://wa.me/59170000000?text=Hola,%20quiero%20información%20de%20inscripción"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-nav-whatsapp"
            >
              Inscribirme
            </a>
          </div>

          {/* BOTÓN HAMBURGUESA MÓVIL */}
          <button
            className={`hamburger-btn ${isMenuOpen ? 'is-active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </header>

      {/* OVERLAY Y MENÚ MÓVIL DESPLEGABLE */}
      <div className={`mobile-overlay ${isMenuOpen ? 'overlay-active' : ''}`} onClick={closeMenu} />

      <aside className={`mobile-drawer ${isMenuOpen ? 'drawer-active' : ''}`}>
        <div className="drawer-header">
          <div className="nav-logo">
            <span>PRE-UMSA</span>
            <small>ACADEMIA</small>
          </div>
          <button className="close-btn" onClick={closeMenu} aria-label="Cerrar menú">
            ✕
          </button>
        </div>

        <nav className="drawer-nav">
          <ul className=''>
            <li>
              <Link href="/" onClick={closeMenu}>
                 Inicio
              </Link>
            </li>
            <li>
              <Link href="/area-ingenieria" onClick={closeMenu}>
                 Área Ingeniería 
              </Link>
            </li>
            <li>
              <Link href="/area-medicina" onClick={closeMenu}>
                 Área Medicina 
              </Link>
            </li>
            <li>
              <Link href="/area-ciencias-puras" onClick={closeMenu}>
                 Área Ciencias Puras 
              </Link>
            </li>
            <li>
              <a href="/#programas" onClick={closeMenu}>
                 Ver Todos los Cursos
              </a>
            </li>
          </ul>
        </nav>

        <div className="drawer-footer">
          <a
            href="https://wa.me/59170000000?text=Hola,%20quiero%20información%20de%20inscripción"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary drawer-btn"
            onClick={closeMenu}
          >
            Inscribirme por WhatsApp
          </a>
          <p className="drawer-contact-note">Sedes en La Paz (Monoblock) y El Alto (La Ceja)</p>
        </div>
      </aside>
    </>
  );
}
