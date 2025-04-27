"use client"

import { useState, useEffect } from "react"
import { Heart, ArrowLeft, Info, Camera } from 'lucide-react'

// Import all cat images from assets
import ChiranImg from './assets/chiran.jpg'
import aliImg from './assets/ali.jpg'
import beautyImg from './assets/beauty.jpg'
import koniImg from './assets/koni.jpg'
import skyImg from './assets/sky.png'
import sojiImg from './assets/soji.png'
import LeviImg from './assets/levi.jpg'
import sheverImg from './assets/shever.png'
import nikoyImg from './assets/nikoy.png'
import kaiImg from './assets/kai.jpg'
import babiesImg from './assets/babies.png'


export default function RayhanCat({ theme, setTheme, goBack }) {
  const [selectedImage, setSelectedImage] = useState(null)
  const [catFact, setCatFact] = useState("Cats spend 70% of their lives sleeping.")
  const [isLoading, setIsLoading] = useState(false)
  
  // Create an array of cat images with metadata
  const catImages = [
    { 
      src: ChiranImg, 
      name: "Chiran",
    },
    { 
      src: aliImg,  
      name: "Ali",
    },
    { 
      src: beautyImg,  
      name: "Beauty",    },
    { 
      src: koniImg, 
      name: "Koni",
    },
    { 
        src: kaiImg, 
        name: "Kai",
 },
    { 
      src: skyImg, 
      name: "Sky",
    },
    { 
      src: sojiImg, 
      name: "Soji",
    },
    { 
      src: LeviImg, 
      name: "Levi",
    },
    { 
        src: sheverImg, 
        name: "shever",
      },
  { 
      src: nikoyImg, 
      name: "nikoy",
    },
    { 
        src: babiesImg, 
        name: "Babies",
      }
  ]

  const fetchCatFact = async () => {
    try {
      setIsLoading(true)
      // You can replace this with an actual cat facts API if desired
      const facts = [
        "Cats have five toes on their front paws, but only four on their back paws.",
        "A group of cats is called a 'clowder'.",
        "Cats can rotate their ears 180 degrees.",
        "The world's oldest cat lived to be 38 years old.",
        "Cats can jump up to six times their length.",
        "Cats have a third eyelid called a 'haw'.",
        "A cat's nose print is unique, like a human's fingerprint.",
        "Cats can make over 100 vocal sounds, while dogs can only make about 10.",
        "A cat's purr vibrates at a frequency that promotes bone and tissue healing.",
        "Cats spend about 30-50% of their day grooming themselves.",
      ]

      setTimeout(() => {
        setCatFact(facts[Math.floor(Math.random() * facts.length)])
        setIsLoading(false)
      }, 500)
    } catch (error) {
      console.error("Error fetching cat fact:", error)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    document.title = "Rayhan Cat - Meowcat AI"
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="container mx-auto px-4 py-8">
      <button
        onClick={goBack}
        className="inline-flex items-center text-pink-500 hover:text-pink-600 mb-8 transition-colors"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Home
      </button>

      <div className="hero-section text-center my-12 animate-fade-in">
        <div className="relative">
          <div className="absolute -z-10 inset-0 bg-gradient-to-r from-pink-200/70 to-purple-200/70 rounded-full blur-3xl opacity-70"></div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 gradient-text animate-float">Rayhan's Cat Gallery</h1>
          <div className="flex justify-center">
            <p className="text-xl md:text-2xl mb-8 text-gray-600 max-w-2xl">
              Welcome to my cat collection pictures
              <span className="text-pink-500 font-semibold animate-sparkle"> ✨</span>
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <span className="inline-flex items-center justify-center p-1 rounded-full bg-pink-100 text-pink-500 text-sm font-medium px-4 py-2">
            🐱 {catImages.length} Cats
          </span>
          <span className="inline-flex items-center justify-center p-1 rounded-full bg-purple-100 text-purple-500 text-sm font-medium px-4 py-2">
            <Camera className="h-4 w-4 mr-1" /> Photo Gallery
          </span>
          <span className="inline-flex items-center justify-center p-1 rounded-full bg-pink-100 text-pink-500 text-sm font-medium px-4 py-2">
            <Info className="h-4 w-4 mr-1" /> Breed Information
          </span>
        </div>
      </div>

      <div className={`bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-12 ${theme === "dark" ? "bg-gray-800 text-white" : ""}`}>
        <h2 className="text-2xl font-bold text-pink-500 mb-6 flex items-center">
          <Heart className="h-5 w-5 mr-2 fill-pink-500" /> Cat Fact of the Day
        </h2>
        <div className={`${theme === "dark" ? "bg-gray-700" : "bg-pink-50"} rounded-xl p-6 text-center`}>
          <p className={`text-lg italic ${theme === "dark" ? "text-gray-200" : "text-gray-700"}`}>{catFact}</p>
          <button
            onClick={fetchCatFact}
            className="mt-4 px-4 py-2 rounded-full bg-pink-500 hover:bg-pink-600 text-white font-medium transition-colors duration-300"
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Get Another Fact"}
          </button>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-pink-500 mb-6 flex items-center">
        <Camera className="h-5 w-5 mr-2" /> My Cat Collection
      </h2>
      
      {/* Image Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {catImages.map((cat, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-xl shadow-md transition-all duration-300 hover:shadow-lg cursor-pointer"
            onClick={() => setSelectedImage(cat)}
          >
            <div className="aspect-square overflow-hidden">
              <img 
                src={cat.src || "/placeholder.svg"} 
                alt={cat.alt} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <h3 className="text-white text-xl font-bold">{cat.name}</h3>
              <p className="text-white/90 text-sm">{cat.description}</p>
            </div>
          </div>
        ))}
      </div>

  
      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="max-w-4xl w-full bg-white rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img 
                src={selectedImage.src || "/placeholder.svg"} 
                alt={selectedImage.alt} 
                className="w-full h-auto max-h-[70vh] object-contain"
              />
              <button 
                className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900">{selectedImage.breed}</h3>
              <p className="text-gray-700 mt-2">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}