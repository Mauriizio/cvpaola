"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"

type Theme = "dark" | "light"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const initialState: ThemeProviderState = {
  theme: "light",
  setTheme: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultTheme = "light",
  storageKey = "paola-cv-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Solo ejecutar en el cliente
    if (typeof window === "undefined") return

    const root = window.document.documentElement

    // Obtener tema guardado
    const savedTheme = localStorage.getItem(storageKey) as Theme
    const initialTheme = savedTheme || defaultTheme

    // Limpiar todas las clases de tema
    root.classList.remove("light", "dark")

    // Aplicar el tema correcto
    root.classList.add(initialTheme)
    setTheme(initialTheme)
    setMounted(true)
  }, [defaultTheme, storageKey])

  const value = {
    theme,
    setTheme: (newTheme: Theme) => {
      if (typeof window === "undefined") return

      const root = window.document.documentElement

      // Limpiar clases anteriores
      root.classList.remove("light", "dark")

      // Aplicar nueva clase
      root.classList.add(newTheme)

      // Guardar en localStorage
      localStorage.setItem(storageKey, newTheme)

      // Actualizar estado
      setTheme(newTheme)
    },
  }

  // No renderizar hasta que esté montado para evitar hydration mismatch
  if (!mounted) {
    return <div style={{ visibility: "hidden" }}>{children}</div>
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined) throw new Error("useTheme must be used within a ThemeProvider")

  return context
}
