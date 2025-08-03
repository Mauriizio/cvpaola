import { DefaultSeoProps } from "next-seo"

const config: DefaultSeoProps = {
  titleTemplate: "%s | Paola V. Morales Orozco",
  defaultTitle: "CV | Paola V. Morales Orozco",
  description: "Currículum profesional de Paola Valentina Morales Orozco",
  canonical: "https://paolacv.vercel.app",
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://paolacv.vercel.app",
    siteName: "CV Paola Morales",
    title: "CV - Paola Valentina Morales Orozco",
    description: "Currículum profesional de Paola Valentina Morales Orozco",
  },
  additionalMetaTags: [
    {
      name: "author",
      content: "Paola Valentina Morales Orozco",
    },
    {
      name: "keywords",
      content: "curriculum, cv, hoja de vida, Paola Morales",
    },
  ],
}

export default config
