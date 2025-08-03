"use client"
import { useState } from "react"
import { Certificate } from "../types/cv.types"

interface CertificatesProps {
  data: Certificate[]
}

export default function Certificates({ data }: CertificatesProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [imageError, setImageError] = useState<{ [key: string]: boolean }>({})
  const [modalOpen, setModalOpen] = useState(false)
  const [modalImage, setModalImage] = useState("")

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % data.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + data.length) % data.length)
  }

  const handleImageError = (certId: string) => {
    setImageError((prev) => ({ ...prev, [certId]: true }))
  }

  const openModal = (imageSrc: string) => {
    setModalImage(imageSrc)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
    setModalImage("")
  }

  return (
    <>
      <section className="mb-20">
        <div className="flex items-center gap-5 mb-10">
          <div className="w-12 h-12 bg-[#F8DEFF] rounded-xl flex items-center justify-center text-2xl">
            🏆
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Certificaciones</h2>
        </div>

        <div className="relative bg-white rounded-2xl soft-shadow p-2 min-h-[450px]">
          <div className="flex items-center justify-between h-full">
            <button
              onClick={prev}
              className="p-3 rounded-full bg-pink-50 hover:bg-pink-100 transition-colors text-xl"
            >
              ←
            </button>

            <div className="flex-1 mx-4">
              <div className="text-center mb-6">
                <h3 className="font-semibold text-xl text-gray-800 mb-3 leading-relaxed">
                  {data[currentIndex].nombre}
                </h3>
                <p className="text-gray-600 text-lg mb-2">{data[currentIndex].institucion}</p>
                <p className="text-pink-600 font-medium">{data[currentIndex].fecha}</p>
              </div>

              {/* Área de imagen del diploma */}
              <div className="bg-gray-50 rounded-xl p-0 min-h-[250px] flex items-center justify-center">
                {data[currentIndex].imagen && !imageError[data[currentIndex].id] ? (
                  <div
                    className="relative w-full h-[250px] cursor-pointer group"
                    onClick={() => openModal(data[currentIndex].imagen!)}
                  >
                    <img
                      src={data[currentIndex].imagen}
                      alt={data[currentIndex].nombre}
                      className="w-full h-full object-contain rounded-lg shadow-md transition-all duration-300 group-hover:scale-[1.02]"
                      onError={() => handleImageError(data[currentIndex].id)}
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-white bg-black/70 px-4 py-2 rounded-full text-sm">
                        🔍 Ver en grande
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="text-center">
                    <span className="text-6xl mb-4 block">📜</span>
                    <p className="text-gray-500">Vista previa del diploma</p>
                  </div>
                )}
              </div>
            </div>

            <button
              onClick={next}
              className="p-3 rounded-full bg-pink-50 hover:bg-pink-100 transition-colors text-xl"
            >
              →
            </button>
          </div>

          <div className="flex justify-center gap-3 mt-8">
            {data.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all ${
                  idx === currentIndex ? "bg-pink-500 w-8" : "bg-gray-300 w-2"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Modal para imagen ampliada */}
      {modalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <img
              src={modalImage}
              alt="Diploma ampliado"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-white text-gray-800 rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  )
}
