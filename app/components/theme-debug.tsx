"use client"

import { useTheme } from "./theme-provider"
import { useEffect, useState } from "react"

export function ThemeDebug() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [htmlClass, setHtmlClass] = useState("")

  useEffect(() => {
    setMounted(true)
    setHtmlClass(document.documentElement.className)
  }, [theme])

  if (!mounted) return null

  return (
    <div className="fixed bottom-4 left-4 z-50 p-2 bg-black/80 text-white text-xs rounded">
      <div>Tema actual: {theme}</div>
      <div>HTML class: {htmlClass}</div>
      <div>Modo: {theme === "light" ? "Claro" : "Oscuro"}</div>
    </div>
  )
}
