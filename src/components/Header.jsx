"use client"

import { useState, useEffect } from "react"
import { Moon, Sun, Menu, X, Heart } from "lucide-react"
import { Button } from "./ui/button"

export default function Header({ theme, toggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2 bg-white/80 backdrop-blur-md shadow-sm" : "py-4"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="mr-2 text-2xl">🐱</div>
          <h2 className="text-xl font-bold text-pink-500">Meowcat AI</h2>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <nav>
            <ul className="flex space-x-6">
              <li className="hover:text-pink-500 transition-colors relative group">
                <a href="#classifier" className="font-medium">
                  Classifier
                </a>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
              </li>
              <li className="hover:text-pink-500 transition-colors relative group">
                <a href="#gallery" className="font-medium">
                  Gallery
                </a>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
              </li>
              <li className="hover:text-pink-500 transition-colors relative group">
                <a href="#about" className="font-medium">
                  About
                </a>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
              </li>
            </ul>
          </nav>
          <Button variant="ghost" size="icon" onClick={toggleTheme} className="animate-pulse-slow rounded-full">
            {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </Button>
          <Button className="rounded-full flex items-center gap-2 bg-pink-500 hover:bg-pink-600">
            <Heart className="h-4 w-4" /> Love Cats
          </Button>
        </div>

        <div className="md:hidden flex items-center">
          <Button variant="ghost" size="icon" onClick={toggleTheme} className="mr-2 rounded-full">
            {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </Button>
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} className="rounded-full">
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-md animate-slide-down">
          <nav className="container mx-auto py-4">
            <ul className="space-y-4">
              <li className="hover:text-pink-500 transition-colors px-4 py-2">
                <a href="#classifier" onClick={() => setIsMenuOpen(false)} className="font-medium">
                  Classifier
                </a>
              </li>
              <li className="hover:text-pink-500 transition-colors px-4 py-2">
                <a href="#gallery" onClick={() => setIsMenuOpen(false)} className="font-medium">
                  Gallery
                </a>
              </li>
              <li className="hover:text-pink-500 transition-colors px-4 py-2">
                <a href="#about" onClick={() => setIsMenuOpen(false)} className="font-medium">
                  About
                </a>
              </li>
              <li className="px-4 py-2">
                <Button className="w-full rounded-full flex items-center justify-center gap-2 bg-pink-500 hover:bg-pink-600">
                  <Heart className="h-4 w-4" /> Love Cats
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}
