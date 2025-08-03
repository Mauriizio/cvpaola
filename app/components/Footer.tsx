export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-r from-pink-50 to-purple-50 py-12 text-center">
      <p className="text-xl font-semibold text-gray-800 mb-2">Paola Valentina Morales Orozco</p>
      <p className="text-gray-600 mb-4">Ingeniera en Procesos Químicos</p>
      <p className="text-sm text-gray-500">© {currentYear} - Hecho por Maurizio Caballero</p>
    </footer>
  )
}
