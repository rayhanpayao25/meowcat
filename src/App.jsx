"use client"

import { useState } from "react"
import Header from "./components/Header"
import CatClassifier from "./components/CatClassifier"
import CatGallery from "./components/CatGallery"
import InfoSection from "./components/InfoSection"
import Footer from "./components/Footer"
import "./App.css"

function App() {
  const [theme, setTheme] = useState("light")

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <main className={`min-h-screen ${theme} bg-pink-gradient`}>
      <div className="container mx-auto px-4 py-8">
        <Header theme={theme} toggleTheme={toggleTheme} />
        <div className="hero-section text-center my-12 animate-fade-in">
          <div className="relative">
            <div className="absolute -z-10 inset-0 bg-gradient-to-r from-pink-200/70 to-purple-200/70 rounded-full blur-3xl opacity-70"></div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 gradient-text animate-float">Meowcat AI</h1>
            <div className="flex justify-center">
              <p className="text-xl md:text-2xl mb-8 text-gray-600 max-w-2xl">
                Advanced cat breed classification powered by machine learning with a touch of
                <span className="text-pink-500 font-semibold animate-sparkle"> magic ✨</span>
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <span className="inline-flex items-center justify-center p-1 rounded-full bg-pink-100 text-pink-500 text-sm font-medium px-4 py-2">
              🐱 Cat-friendly
            </span>
            <span className="inline-flex items-center justify-center p-1 rounded-full bg-purple-100 text-purple-500 text-sm font-medium px-4 py-2">
              🧠 AI-powered
            </span>
            <span className="inline-flex items-center justify-center p-1 rounded-full bg-pink-100 text-pink-500 text-sm font-medium px-4 py-2">
              ✨ 100% Adorable
            </span>
          </div>
        </div>
        <CatClassifier />
        <CatGallery />
        <InfoSection />
        <Footer />
      </div>
    </main>
  )
}

export default App
