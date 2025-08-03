const fs = require("fs")
const path = require("path")

// Este script genera CSS estático para optimización
const generateStaticCSS = () => {
  const cssContent = `
/* CSS estático optimizado para producción */
.bg-gray-100 { background-color: #f3f4f6; }
.dark .bg-gray-900 { background-color: #111827; }
.bg-white { background-color: #ffffff; }
.dark .bg-gray-800 { background-color: #1f2937; }
.text-gray-800 { color: #1f2937; }
.dark .text-white { color: #ffffff; }
.text-gray-600 { color: #4b5563; }
.dark .text-gray-300 { color: #d1d5db; }
.bg-pink-100 { background-color: #fce7f3; }
.dark .bg-purple-800 { background-color: #6b21a8; }
.text-pink-600 { color: #db2777; }
.dark .text-pink-400 { color: #f472b6; }
.bg-pink-50 { background-color: #fdf2f8; }
.dark .bg-purple-900 { background-color: #581c87; }
.text-pink-700 { color: #be185d; }
.dark .text-pink-300 { color: #f9a8d4; }
.bg-purple-100 { background-color: #ede9fe; }
.text-gray-700 { color: #374151; }
.from-pink-50 { --tw-gradient-from: #fdf2f8; }
.to-purple-50 { --tw-gradient-to: #faf5ff; }
.dark .from-purple-900 { --tw-gradient-from: #581c87; }
.dark .to-pink-900 { --tw-gradient-to: #831843; }
.hover\\:from-pink-100:hover { --tw-gradient-from: #fce7f3; }
.hover\\:to-purple-100:hover { --tw-gradient-to: #ede9fe; }
.dark .hover\\:from-purple-800:hover { --tw-gradient-from: #6b21a8; }
.dark .hover\\:to-pink-800:hover { --tw-gradient-to: #9d174d; }
`

  const outputDir = path.join(process.cwd(), "public", "static")
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true })
  }

  fs.writeFileSync(path.join(outputDir, "optimized.css"), cssContent)
  console.log("✅ CSS estático generado en /public/static/optimized.css")
}

generateStaticCSS()
