"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Heart } from "lucide-react"

import maineCoonImage from "../assets/maine coon cat.jpg"
import siameseImage from "../assets/Siamese.jpg"
import bengalImage from "../assets/bengal.jpg"
import persianImage from "../assets/persian.jpg"
import ragdollImage from "../assets/ragdoll.jpg"
import scottishFoldImage from "../assets/ScottishFold.jpg"


const GALLERY_ITEMS = [
  {
    id: 1,
    src: maineCoonImage,
    breed: "Maine Coon",
    confidence: "92%",
    owner: "Sarah J.",
  },
  {
    id: 2,
    src: siameseImage,
    breed: "Siamese",
    confidence: "87%",
    owner: "Mike T.",
  },
  {
    id: 3,
    src: bengalImage,
    breed: "Bengal",
    confidence: "94%",
    owner: "Emma R.",
  },
  {
    id: 4,
    src: persianImage,
    breed: "Persian",
    confidence: "89%",
    owner: "John D.",
  },
  {
    id: 5,
    src: ragdollImage,
    breed: "Ragdoll",
    confidence: "91%",
    owner: "Lisa M.",
  },
  {
    id: 6,
    src: scottishFoldImage,
    breed: "Scottish Fold",
    confidence: "88%",
    owner: "Alex P.",
  },
]

export default function CatGallery() {
  const [currentPage, setCurrentPage] = useState(0)
  const [likedItems, setLikedItems] = useState({})
  const itemsPerPage = 3
  const totalPages = Math.ceil(GALLERY_ITEMS.length / itemsPerPage)

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  const toggleLike = (id) => {
    setLikedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const currentItems = GALLERY_ITEMS.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)

  return (
    <section id="gallery" className="my-16 animate-fade-in">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 inline-block">
          Recent Predictions
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Check out these adorable cats that our AI has recently analyzed!
        </p>
      </div>

      <div className="relative">
        <div className="grid md:grid-cols-3 gap-6">
          {currentItems.map((item) => (
            <div
              key={item.id}
              className="overflow-hidden group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 rounded-3xl border border-pink-200 shadow-md"
            >
              <div className="relative h-48 overflow-hidden rounded-t-3xl">
                <img
                  src={item.src || "/placeholder.svg"}
                  alt={`${item.breed} cat`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    console.log(`Failed to load image: ${item.src}`)
                    e.target.src = `https://placekitten.com/600/400?image=${item.id}`
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-500/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <p className="font-bold">{item.breed}</p>
                    <p className="text-sm">Confidence: {item.confidence}</p>
                  </div>
                </div>
                <button
                  className={`absolute top-2 right-2 rounded-full p-2 bg-white/80 hover:bg-white ${likedItems[item.id] ? "text-pink-500" : "text-gray-400"}`}
                  onClick={(e) => {
                    e.stopPropagation()
                    toggleLike(item.id)
                  }}
                >
                  <Heart className={`h-5 w-5 ${likedItems[item.id] ? "fill-current" : ""}`} />
                </button>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-bold">{item.breed}</h3>
                    <p className="text-sm text-gray-500">Uploaded by {item.owner}</p>
                  </div>
                  <div className="bg-pink-100 text-pink-500 px-2 py-1 rounded-full text-sm font-medium">
                    {item.confidence}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center mt-8 space-x-2">
            <button
              onClick={prevPage}
              className="rounded-full w-10 h-10 flex items-center justify-center border border-pink-300 hover:bg-pink-100 hover:text-pink-500 transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  currentPage === index
                    ? "bg-pink-500 text-white"
                    : "border border-pink-300 hover:bg-pink-100 hover:text-pink-500"
                } transition-colors`}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={nextPage}
              className="rounded-full w-10 h-10 flex items-center justify-center border border-pink-300 hover:bg-pink-100 hover:text-pink-500 transition-colors"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
