import type React from "react"
import type { Metadata } from "next"
import { ThemeProvider } from "./components/theme-provider"
import { ThemeScript } from "./components/theme-script"
import "./globals.css"

export const metadata: Metadata = {
  title: "CV | Paola V. Morales Orozco - Ingeniera en Procesos Químicos",
  description:
    "Currículum profesional de Paola Valentina Morales Orozco, Ingeniera en Procesos Químicos con experiencia en control de calidad y validación farmacéutica en Venezuela",
  authors: [{ name: "Paola Valentina Morales Orozco" }],
  keywords: [
    "curriculum vitae",
    "CV",
    "Paola Morales Orozco",
    "Ingeniera Procesos Químicos",
    "control calidad",
    "Venezuela",
    "HPLC",
    "farmacéutica",
    "Yaracuy",
    "San Felipe",
    "validación",
    "aseguramiento calidad",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "CV - Paola Valentina Morales Orozco",
    description: "Ingeniera en Procesos Químicos | Analista de Calidad | Venezuela",
    type: "website",
    locale: "es_VE",
    url: "https://www.paolamorales.online/",
    siteName: "CV Paola Morales",
    images: [
      {
        url: "https://www.paolamorales.online/mini-logo.png",
        width: 512,
        height: 512,
        alt: "CV Paola Valentina Morales Orozco",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "CV - Paola V. Morales Orozco",
    description: "Ingeniera en Procesos Químicos con experiencia en control de calidad",
    images: ["https://www.paolamorales.online/mini-logo.png"],
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F8DEFF" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1a1a" },
  ],
  alternates: {
    canonical: "https://www.paolamorales.online/",
  },
  icons: {
    icon: [
      { url: "/mini-logo.png", sizes: "32x32", type: "image/png" },
      { url: "/mini-logo.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/mini-logo.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/mini-logo.png",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <ThemeScript />
        <link rel="icon" type="image/png" sizes="32x32" href="/mini-logo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/mini-logo.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/mini-logo.png" />
        <link rel="shortcut icon" href="/mini-logo.png" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Paola Valentina Morales Orozco",
              jobTitle: "Ingeniera en Procesos Químicos",
              email: "paolavmoraleso@gmail.com",
              telephone: "+58 412-5194333",
              url: "https://www.paolamorales.online/",
              image: "https://www.paolamorales.online/fotoperfil.jpg",
              address: {
                "@type": "PostalAddress",
                addressLocality: "San Felipe",
                addressRegion: "Yaracuy",
                addressCountry: "VE",
              },
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "Universidad Politécnica Territorial de Yaracuy 'Arístides Bastidas'",
              },
              worksFor: {
                "@type": "Organization",
                name: "Laboratorio Pifano, C.A",
              },
            }),
          }}
        />
      </head>
      <body className="transition-colors duration-300">
        <ThemeProvider defaultTheme="light" storageKey="paola-cv-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
