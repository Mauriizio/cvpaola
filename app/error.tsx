"use client"

import { useEffect } from "react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error("Error en la aplicación:", error)
  }, [error])

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">¡Oops! Algo salió mal</h2>
        <p className="text-gray-600 mb-6">
          Hubo un problema cargando el CV. Por favor, intenta nuevamente.
        </p>
        <button
          onClick={reset}
          className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-lg transition-colors"
        >
          Intentar nuevamente
        </button>
      </div>
    </div>
  )
}
