import type { Skill } from "../types/cv.types"

interface SkillsProps {
  data: Skill[]
}

export default function Skills({ data }: SkillsProps) {
  return (
    <section className="mb-16">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 bg-purple-100 dark:bg-purple-800 rounded-xl flex items-center justify-center text-xl">
          ✨
        </div>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Competencias</h2>
      </div>
      <div className="space-y-6">
        {data.map((category, index) => (
          <div key={index}>
            <h3 className="font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
              <span>{category.categoria === "Técnicas" ? "🔧" : "💡"}</span>
              {category.categoria}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.habilidades.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="bg-gradient-to-r from-pink-50 to-purple-50 dark:from-purple-900 dark:to-pink-900 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-full text-sm hover:from-pink-100 hover:to-purple-100 dark:hover:from-purple-800 dark:hover:to-pink-800 transition-all duration-300 hover:scale-105 transform"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
