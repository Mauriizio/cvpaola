export interface PersonalInfo {
  nombre: string
  apellidos: string
  email: string
  telefono?: string
  direccion?: string
  linkedin?: string
  github?: string
  avatar?: string // Ruta de la imagen del avatar
}

export interface Education {
  id: string
  titulo: string
  institucion: string
  fechaInicio: string
  fechaFin: string
  descripcion?: string
}

export interface Experience {
  id: string
  cargo: string
  empresa: string
  fechaInicio: string
  fechaFin: string
  descripcion: string[]
}

export interface Skill {
  categoria: string
  habilidades: string[]
}

export interface Certificate {
  id: string
  nombre: string
  institucion: string
  fecha: string
  imagen?: string
  url?: string
}
