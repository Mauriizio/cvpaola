"use client"

import { useTheme } from "./theme-provider"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
      aria-label={`Cambiar a modo ${theme === "light" ? "oscuro" : "claro"}`}
    >
      <div className="relative w-6 h-6 flex items-center justify-center">
        {theme === "light" ? (
          <span className="text-xl group-hover:rotate-12 transition-transform duration-300">
            🌙
          </span>
        ) : (
          <span className="text-xl group-hover:rotate-12 transition-transform duration-300">
            ☀️
          </span>
        )}
      </div>
    </button>
  )
}
