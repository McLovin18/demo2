import "./globals.css";

import Footer from "./components/Footer";
import { cookies } from "next/headers";
import Navbar from "./components/Navbar";
import { UserProvider } from "./context/UserContext";
import { OnboardingProvider } from "./context/OnboardingContext";
import { ToastProvider } from "./context/ToastContext";
import LayoutContentClient from "./components/LayoutContentClient";
import { StructuredData } from "./components/StructuredData";
import type { Metadata, Viewport } from "next";
import { Source_Serif_4 } from "next/font/google";

// ISR Global
export const revalidate = 1800;

// Cambiar cuando tengas el dominio definitivo
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://terciopeloaccesorios.com";

const SITE_NAME = "Terciopelo | Accesorios con Estilo en Medellín";

const sourceSerif4 = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-source-serif-4",
});

export const metadata: Metadata = {
  title: {
    default: "Terciopelo | Accesorios con Estilo en Medellín, Colombia",
    template: "%s | Terciopelo",
  },

  description:
    "Complementa tu outfit con Terciopelo. Accesorios personalizados y diseños únicos, compra 100% segura, con envíos a todo lugar desde Medellín.",

  keywords: [
    "accesorios Medellín",
    "accesorios personalizados Colombia",
    "joyería de moda Colombia",
    "accesorios mujer Medellín",
    "diseños únicos accesorios",
    "Terciopelo accesorios",
    "compra segura accesorios Colombia",
    "anillos y accesorios personalizados",
    "accesorios con estilo",
    "tienda de accesorios Medellín",
    "envíos accesorios Colombia",
    "ventas al detal accesorios",
  ],

  creator: SITE_NAME,

  publisher: SITE_NAME,

  metadataBase: new URL(SITE_URL),

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",

  openGraph: {
    type: "website",
    locale: "es_CO",
    url: SITE_URL,
    siteName: SITE_NAME,

    title: "Terciopelo | Accesorios con Estilo",

    description:
      "Complementa tu outfit con Terciopelo. Accesorios personalizados y diseños únicos, con envíos a todo lugar desde Medellín.",

    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Terciopelo - Accesorios con estilo",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Terciopelo",

    description:
      "Complementa tu outfit con Terciopelo. Accesorios personalizados con envíos a todo lugar desde Medellín.",

    images: [`${SITE_URL}/twitter-image.jpg`],
  },

  alternates: {
    canonical: SITE_URL,
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  verification: {
    google: "", // colocar Search Console cuando el dominio esté activo
  },

  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: SITE_NAME,
  },

  category: "Accesorios y Joyería",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={sourceSerif4.variable}>
      <head>
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-K1Q0MYDSKF"
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-K1Q0MYDSKF');
            `,
          }}
        />

        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons+Round"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />

        <StructuredData />
      </head>

      <body className="relative min-h-screen">

        {/* Capa oscura */}
        <div className="fixed inset-0 -z-10 bg-black/45" />

        <ToastProvider>
          <OnboardingProvider>
            <LayoutContentClient>
              {children}
            </LayoutContentClient>
          </OnboardingProvider>
        </ToastProvider>

      </body>
    </html>
  );
}