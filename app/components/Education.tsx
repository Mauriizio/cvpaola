import type { Education as EducationType } from "../types/cv.types"

interface EducationProps {
  data: EducationType[]
}

export default function Education({ data }: EducationProps) {
  return (
    <section className="mb-24">
      <div className="flex items-center gap-4 mb-10">
        <div className="w-12 h-12 bg-pink-100 dark:bg-purple-800 rounded-xl flex items-center justify-center text-2xl">
          🎓
        </div>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Educación</h2>
      </div>
      <div className="space-y-6">
        {data.map((item, index) => (
          <div
            key={item.id}
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl soft-shadow transition-all duration-300 hover:-translate-y-1 hover-lift"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                  {item.titulo}
                </h3>
                <p className="text-pink-600 dark:text-pink-400 font-medium text-sm">
                  {item.institucion}
                </p>
                {item.descripcion && (
                  <p className="text-gray-600 dark:text-gray-300 mt-3 text-sm">
                    {item.descripcion}
                  </p>
                )}
              </div>
              <span className="bg-pink-50 dark:bg-purple-900 text-pink-700 dark:text-pink-300 px-4 py-2 rounded-full text-xs font-medium">
                {item.fechaInicio} - {item.fechaFin}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
