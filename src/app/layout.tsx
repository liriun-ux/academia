import type { Metadata, Viewport } from "next";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Inter, Montserrat } from 'next/font/google'
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";


const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-montserrat',
})

import {
  serifFont,
  sansFont,
  heroFont,
  gontserratFont
} from "../componentes/fonts";
import Footer from "@/componentes/Footer";
import Navbar from "@/componentes/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Configuración del Viewport
export const viewport: Viewport = {
  themeColor: '#0A192F',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

// Metadata Global SEO y Open Graph
export const metadata: Metadata = {
  metadataBase: new URL('https://academia-omega-nine.vercel.app'), // Cambia por tu dominio real cuando lo despliegues
  title: {
    default: 'Academia Pre-UMSA | Preparación Exámenes PSA y Prefacultativos',
    template: '%s | Academia Pre-UMSA',
  },
  description:
    'Preparación especializada para el ingreso a la Universidad Mayor de San Andrés (UMSA). Cursos intensivos para Ingeniería, Medicina y Ciencias Puras en La Paz y El Alto.',
  keywords: [
    'UMSA',
    'Pre UMSA',
    'PSA UMSA',
    'Prefacultativo UMSA',
    'Facultad de Ingeniería UMSA',
    'Facultad de Medicina UMSA',
    'Examen de ingreso UMSA',
    'La Paz Bolivia',
    'El Alto Bolivia',
    'Academia preuniversitaria UMSA',
  ],
  authors: [{ name: 'Academia Pre-UMSA' }],
  creator: 'Academia Pre-UMSA',
  publisher: 'Academia Pre-UMSA',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  // Favicons
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },

  // Open Graph (WhatsApp, Facebook, LinkedIn)
openGraph: {
    type: 'website',
    locale: 'es_BO',
    url: 'https://academia-omega-nine.vercel.app/',
    title: 'Academia Pre-UMSA | Preparación PSA y Prefacultativos',
    description: 'Asegura tu ingreso a la UMSA en Medicina, Ingeniería y Ciencias Puras.',
    siteName: 'Academia Pre-UMSA',
    images: [
      {
        url: '/og.png', // O la URL absoluta donde alojes la imagen
        width: 756,
        height: 618,
        alt: 'Academia Pre-UMSA | Preparación PSA y Prefacultativos',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Academia Pre-UMSA | Preparación PSA y Prefacultativos',
    description: 'Asegura tu ingreso a la UMSA en Medicina, Ingeniería y Ciencias Puras.',
    images: ['/og.png'],
  },

  // Indexación para Motores de Búsqueda
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${spaceGrotesk.variable} ${inter.variable} ${montserrat.variable} ${gontserratFont.variable} ${heroFont.variable} ${serifFont.variable} ${sansFont.variable} ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-grid-pattern">

  <div className="fixed inset-0 radial-gradient-glow pointer-events-none z-0"></div>
  <div className="fixed top-1/3 -left-40 w-96 h-96 bg-neonGreen rounded-full blur-[120px] pointer-events-none"></div>
  <div className="fixed bottom-10 -right-40 w-96 h-96 bg-neonCyan rounded-full blur-[120px] pointer-events-none"></div>
    <Navbar/>
      {children}
      <Footer/>
      </body>
    </html>
  );
}
