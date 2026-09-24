import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Academia Pre-UMSA - Asegura tu Ingreso en el Primer Intento';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          backgroundColor: '#0A192F',
          padding: '80px',
          fontFamily: 'sans-serif',
        }}
      >
        {/* LOGO SUPERIOR */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div
            style={{
              width: '24px',
              height: '24px',
              backgroundColor: '#FFB800',
              borderRadius: '50%',
            }}
          />
          <span
            style={{
              fontSize: '32px',
              fontWeight: '800',
              color: '#FFFFFF',
              letterSpacing: '2px',
            }}
          >
            PRE-UMSA ACADEMIA
          </span>
        </div>

        {/* TITULAR CENTRAL */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <span
            style={{
              fontSize: '20px',
              fontWeight: '700',
              color: '#FFB800',
              letterSpacing: '1px',
            }}
          >
            PREPARACIÓN DE ALTO RENDIMIENTO UMSA 2026
          </span>
          <h1
            style={{
              fontSize: '56px',
              fontWeight: '800',
              color: '#FFFFFF',
              lineHeight: 1.1,
              margin: 0,
              maxWidth: '900px',
            }}
          >
            Asegura tu Ingreso a la UMSA en el Primer Intento
          </h1>
          <p
            style={{
              fontSize: '24px',
              color: '#94A3B8',
              margin: 0,
              maxWidth: '850px',
            }}
          >
            Ingeniería (FING) • Medicina (FMS) • Ciencias Puras (FCPN) | La Paz y El Alto
          </p>
        </div>

        {/* PIE DE FOTO - INDICADOR */}
        <div
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '2px solid rgba(255, 255, 255, 0.1)',
            paddingTop: '32px',
          }}
        >
          <span style={{ fontSize: '20px', color: '#CBD5E1', fontWeight: '600' }}>
            🎓 +1,200 Admitidos a la UMSA
          </span>
          <span style={{ fontSize: '20px', color: '#FFB800', fontWeight: '700' }}>
            Inscripciones Abiertas
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
