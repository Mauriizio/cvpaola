import { Experience as ExperienceType } from "../types/cv.types"

interface ExperienceProps {
  data: ExperienceType[]
}

export default function Experience({ data }: ExperienceProps) {
  return (
    <section className="mb-24">
      <div className="flex items-center gap-4 mb-10">
        <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center text-2xl">
          💼
        </div>
        <h2 className="text-2xl font-bold text-gray-800">Experiencia Laboral</h2>
      </div>
      <div className="space-y-8">
        {data.map((item, index) => (
          <div
            key={item.id}
            className="bg-white p-8 rounded-2xl soft-shadow transition-all duration-300 hover:translate-y-[-2px]"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">{item.cargo}</h3>
                <p className="text-pink-600 font-medium text-sm">{item.empresa}</p>
              </div>
              <span className="bg-pink-50 text-gray-700 px-4 py-2 rounded-full text-xs">
                {item.fechaInicio} - {item.fechaFin}
              </span>
            </div>
            <ul className="space-y-3 mt-4">
              {item.descripcion.map((desc, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-gray-600">
                  <span className="text-pink-400 mt-0.5">•</span>
                  <span className="leading-relaxed">{desc}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
