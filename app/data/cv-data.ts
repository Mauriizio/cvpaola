import type { PersonalInfo, Education, Experience, Skill, Certificate } from "../types/cv.types"

export const personalInfo: PersonalInfo = {
  nombre: "Paola Valentina",
  apellidos: "Morales Orozco",
  email: "paolavmoraleso@gmail.com",
  telefono: "+58 412-5194333",
  direccion: "San Felipe, Yaracuy, Venezuela",
  linkedin: "https://www.linkedin.com/in/paola-valentina-morales-orozco/",
  github: "", // No tiene GitHub según indicaste
  avatar: "/fotoperfil.jpg",
}

export const education: Education[] = [
  {
    id: "1",
    titulo: "Ingeniería en Procesos Químicos",
    institucion: "Universidad Politécnica Territorial de Yaracuy 'Arístides Bastidas'",
    fechaInicio: "2019",
    fechaFin: "2024",
    descripcion: "PNF en Procesos Químicos - Especialización en Control de Calidad y Validación",
  },
  {
    id: "2",
    titulo: "TSU en Procesos Químicos",
    institucion: "Universidad Politécnica Territorial de Yaracuy 'Arístides Bastidas'",
    fechaInicio: "2019",
    fechaFin: "2022",
    descripcion: "Técnico Superior Universitario con enfoque en análisis químico",
  },
  {
    id: "3",
    titulo: "Bachiller en Ciencias",
    institucion: "U.E. 'Arístides Rojas'",
    fechaInicio: "2014",
    fechaFin: "2019",
    descripcion: "Educación Media con mención en Ciencias",
  },
]

export const experience: Experience[] = [
  {
    id: "1",
    cargo: "Analista de Aseguramiento de la Calidad / Validación",
    empresa: "Laboratorio Pifano, C.A",
    fechaInicio: "2024",
    fechaFin: "Presente",
    descripcion: [
      "Gestión integral de documentación regulatoria y sistemas de calidad farmacéutica",
      "Implementación de controles de calidad y detección proactiva de desviaciones",
      "Aseguramiento del cumplimiento de estándares GxP y normativas internacionales",
      "Calificación de equipos críticos y validación de sistemas de apoyo",
      "Análisis por cromatografía HPLC y técnicas analíticas avanzadas",
    ],
  },
]

export const skills: Skill[] = [
  {
    categoria: "Técnicas",
    habilidades: [
      "Microsoft Office Suite",
      "Microsoft Excel Avanzado",
      "Sistemas GxP (GMP, GLP, GCP)",
      "Cromatografía HPLC",
      "Validación de Procesos",
      "Control de Calidad Farmacéutico",
    ],
  },
  {
    categoria: "Profesionales",
    habilidades: [
      "Pensamiento Analítico",
      "Resolución de Problemas Complejos",
      "Liderazgo de Equipos",
      "Comunicación Efectiva",
      "Innovación y Creatividad",
      "Adaptabilidad y Flexibilidad",
      "Gestión de Proyectos",
    ],
  },
]

export const certificates: Certificate[] = [
  {
    id: "1",
    nombre: "Ingeniero en Procesos Químicos",
    institucion: "Universidad Politécnica Territorial de Yaracuy 'Arístides Bastidas'",
    fecha: "Jul 2024",
    imagen: "/diplomas/diploma (2).png",
  },
  {
    id: "2",
    nombre: "Técnico Superior Universitario en Procesos Químicos",
    institucion: "Universidad Politécnica Territorial de Yaracuy 'Arístides Bastidas'",
    fecha: "Agt 2022",
    imagen: "/diplomas/diploma (1).png",
  },
  {
    id: "3",
    nombre: "Curso de Microsoft Excel Avanzado",
    institucion: "CUAM - Academia Valencia",
    fecha: "2024",
    imagen: "/diplomas/diploma (4).png",
  },
  {
    id: "4",
    nombre: "Formulación y Evaluación de Proyectos Socio Productivos",
    institucion: "Fundacite Yaracuy",
    fecha: "Agt 2022",
    imagen: "/diplomas/diploma (3).png",
  },
]
