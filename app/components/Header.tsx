"use client"

import type { PersonalInfo } from "../types/cv.types"
import Image from "next/image"
import { useState } from "react"

interface HeaderProps {
  data: PersonalInfo
}

export default function Header({ data }: HeaderProps) {
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownloadPDF = async () => {
    setIsDownloading(true)
    try {
      // Simular descarga - en producción conectarías con una API
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Crear un enlace temporal para descargar
      const link = document.createElement("a")
      link.href = "/cv-paola-morales.pdf" // Archivo PDF que debes subir a public/
      link.download = "CV-Paola-Valentina-Morales-Orozco.pdf"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (error) {
      console.error("Error al descargar PDF:", error)
    } finally {
      setIsDownloading(false)
    }
  }

  return (
    <header className="relative overflow-hidden">
      {/* Imagen de portada con overlay mejorado */}
      <div className="relative h-64 md:h-80 bg-gradient-to-r from-pink-200 via-pink-100 to-purple-200 dark:from-purple-900 dark:via-purple-800 dark:to-pink-900">
        <Image
          src="/portada.png"
          alt="Portada profesional"
          width={1920}
          height={300}
          className="w-full h-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-white/30 dark:from-transparent dark:via-black/20 dark:to-black/40"></div>

        {/* Elementos decorativos flotantes */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-pink-300/30 rounded-full blur-lg animate-pulse delay-1000"></div>
      </div>

      {/* Avatar mejorado con animación */}
      <div className="flex justify-center -mt-20 mb-8">
        <div className="relative group">
          <div className="w-40 h-40 bg-gradient-to-br from-pink-500 to-purple-500 dark:from-purple-600 dark:to-pink-600 rounded-full p-1 shadow-2xl hover:shadow-pink-500/25 transition-all duration-500 hover:scale-105">
            <div className="w-full h-full bg-white dark:bg-gray-800 rounded-full overflow-hidden">
              {data.avatar ? (
                <img
                  src={data.avatar || "/placeholder.svg"}
                  alt={`${data.nombre} ${data.apellidos}`}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-6xl bg-gradient-to-br from-pink-100 to-purple-100 dark:from-purple-900 dark:to-pink-900">
                  👩‍🔬
                </div>
              )}
            </div>
          </div>
          {/* Indicador de estado online */}
          <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-white dark:border-gray-800 shadow-lg animate-pulse"></div>
        </div>
      </div>

      {/* Información personal mejorada */}
      <div className="text-center px-8 pb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-2">
          {data.nombre} {data.apellidos}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">
          Ingeniera en Procesos Químicos
        </p>
        <p className="text-sm text-pink-600 dark:text-pink-400 mb-6 font-medium">
          🔬 Especialista en Control de Calidad & Validación
        </p>

        {/* Información de contacto mejorada */}
        <div className="flex flex-wrap justify-center gap-4 text-gray-600 dark:text-gray-300 mb-8 text-sm">
          <a
            href={`mailto:${data.email}`}
            className="flex items-center gap-2 hover:text-pink-600 dark:hover:text-pink-400 transition-colors duration-300 hover:scale-105 transform"
          >
            <span className="text-lg">📧</span>
            {data.email}
          </a>
          {data.telefono && (
            <a
              href={`tel:${data.telefono}`}
              className="flex items-center gap-2 hover:text-pink-600 dark:hover:text-pink-400 transition-colors duration-300 hover:scale-105 transform"
            >
              <span className="text-lg">📱</span>
              {data.telefono}
            </a>
          )}
          {data.direccion && (
            <span className="flex items-center gap-2">
              <span className="text-lg">📍</span>
              {data.direccion}
            </span>
          )}
        </div>

        {/* Botones de acción mejorados */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href={data.linkedin || "https://www.linkedin.com/in/paola-valentina-morales-orozco/"}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gradient-to-r from-pink-100 to-purple-100 hover:from-pink-200 hover:to-purple-200 dark:from-purple-600 dark:to-pink-600 dark:hover:from-purple-500 dark:hover:to-pink-500 text-gray-800 dark:text-white px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105 transform"
          >
            <span className="text-lg group-hover:scale-110 transition-transform">💼</span>
            LinkedIn
          </a>
          <button
            onClick={handleDownloadPDF}
            disabled={isDownloading}
            className="group bg-white dark:bg-gray-800 border-2 border-pink-200 dark:border-purple-500 hover:bg-pink-50 dark:hover:bg-purple-600 text-gray-800 dark:text-white px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105 transform disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isDownloading ? (
              <>
                <span className="animate-spin text-lg">⏳</span>
                Descargando...
              </>
            ) : (
              <>
                <span className="text-lg group-hover:scale-110 transition-transform">📄</span>
                Descargar PDF
              </>
            )}
          </button>
        </div>
      </div>
    </header>
  )
}
