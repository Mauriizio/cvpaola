import { Suspense } from "react"
import Header from "./components/Header"
import Education from "./components/Education"
import Experience from "./components/Experience"
import Skills from "./components/Skills"
import Certificates from "./components/Certificates"
import Footer from "./components/Footer"
import { ThemeToggle } from "./components/theme-toggle"
import { personalInfo, education, experience, skills, certificates } from "./data/cv-data"
import Loading from "./loading"

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <ThemeToggle />
      <main className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
        <div className="w-full max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-2xl md:rounded-2xl overflow-hidden transition-all duration-300">
          <Header data={personalInfo} />
          <div className="px-12 md:px-20 py-16 space-y-20">
            <Education data={education} />
            <Experience data={experience} />
            <Skills data={skills} />
            <Certificates data={certificates} />
          </div>
          <Footer />
        </div>
      </main>
    </Suspense>
  )
}
