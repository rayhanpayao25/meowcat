"use client"

import { useState, useRef } from "react"
import { Upload, ImageIcon, RefreshCw, Heart, Sparkles } from "lucide-react"

// Sample cat breeds with descriptions
const CAT_BREEDS = [
  { name: "Maine Coon", confidence: 0.92, description: "Known for their large size and tufted ears." },
  { name: "Siamese", confidence: 0.87, description: "Distinctive color points and blue eyes." },
  { name: "Persian", confidence: 0.78, description: "Long hair and flat face with round eyes." },
  { name: "Bengal", confidence: 0.65, description: "Spotted or marbled coat resembling wild cats." },
  { name: "Ragdoll", confidence: 0.59, description: "Large, muscular semi-longhair cat with blue eyes." },
]

export default function CatClassifier() {
  const [image, setImage] = useState(null)
  const [previewUrl, setPreviewUrl] = useState(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [results, setResults] = useState(null)
  const fileInputRef = useRef(null)

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file && file.type.startsWith("image/")) {
      setImage(file)
      setPreviewUrl(URL.createObjectURL(file))
      setResults(null)
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    const file = e.dataTransfer.files[0]
    if (file && file.type.startsWith("image/")) {
      setImage(file)
      setPreviewUrl(URL.createObjectURL(file))
      setResults(null)
    }
  }

  const handleDragOver = (e) => {
    e.preventDefault()
  }

  const analyzeCat = () => {
    if (!image) return

    setIsAnalyzing(true)

    // Simulate ML processing with timeout
    setTimeout(() => {
      // Get random 2-3 breeds from our sample data
      const numBreeds = Math.floor(Math.random() * 2) + 2
      const shuffled = [...CAT_BREEDS].sort(() => 0.5 - Math.random())
      const selectedBreeds = shuffled.slice(0, numBreeds)

      setResults({
        breeds: selectedBreeds,
        mood: ["Happy", "Curious", "Sleepy", "Playful"][Math.floor(Math.random() * 4)],
        age: Math.floor(Math.random() * 15) + 1,
      })

      setIsAnalyzing(false)
    }, 2500)
  }

  const handleUseSampleImage = (num) => {
    // Use local images instead of placekitten
    const sampleImages = ["/src/assets/maine coon cat.jpg", "/src/assets/Siamese.jpg"]
    setPreviewUrl(sampleImages[num - 1])
    setImage(true)
    setResults(null)
  }

  const resetClassifier = () => {
    setImage(null)
    setPreviewUrl(null)
    setResults(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  return (
    <section id="classifier" className="my-16 animate-fade-in">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 gradient-text inline-block">Cat Breed Classifier</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Upload your cat's photo and our AI will identify the breed, estimate age, and analyze mood!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="overflow-hidden rounded-3xl border border-pink-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <div
            className="h-80 flex flex-col items-center justify-center p-6 border-2 border-dashed border-pink-300 rounded-3xl cursor-pointer hover:border-pink-500 transition-colors"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onClick={() => fileInputRef.current?.click()}
          >
            {previewUrl ? (
              <div className="relative w-full h-full">
                <img
                  src={previewUrl || "/placeholder.svg"}
                  alt="Cat preview"
                  className="w-full h-full object-contain rounded-2xl"
                  onError={(e) => {
                    // Fallback to a placeholder if the image fails to load
                    e.target.src = "https://placekitten.com/600/400?image=1"
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-200/20 to-transparent rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ) : (
              <div className="text-center">
                <div className="w-24 h-24 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-float">
                  <Upload className="h-10 w-10 text-pink-500" />
                </div>
                <p className="text-lg mb-2 font-medium">Drop your cat image here</p>
                <p className="text-sm text-gray-500">or click to browse</p>
              </div>
            )}
            <input type="file" ref={fileInputRef} onChange={handleFileChange} accept="image/*" className="hidden" />
          </div>
        </div>

        <div className="flex flex-col">
          <div className="mb-4 flex flex-wrap gap-2">
            <button
              onClick={() => handleUseSampleImage(1)}
              className="flex-1 py-2 px-4 rounded-full border border-pink-300 hover:bg-pink-100 hover:text-pink-500 transition-colors flex items-center justify-center gap-2"
            >
              <ImageIcon className="h-4 w-4" /> Sample Cat 1
            </button>
            <button
              onClick={() => handleUseSampleImage(2)}
              className="flex-1 py-2 px-4 rounded-full border border-pink-300 hover:bg-pink-100 hover:text-pink-500 transition-colors flex items-center justify-center gap-2"
            >
              <ImageIcon className="h-4 w-4" /> Sample Cat 2
            </button>
          </div>

          <div className="flex-1 rounded-3xl border border-pink-200 shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            {!image && (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-pink-500 animate-pulse-slow" />
                </div>
                <p className="text-lg mb-2 font-medium">No image selected</p>
                <p className="text-sm text-gray-500">Upload or select a sample image to analyze</p>
              </div>
            )}

            {image && !isAnalyzing && !results && (
              <div className="text-center py-12">
                <button
                  onClick={analyzeCat}
                  className="animate-pulse rounded-full px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all bg-pink-500 hover:bg-pink-600 text-white flex items-center justify-center gap-2"
                >
                  <Sparkles className="h-5 w-5" /> Analyze Cat
                </button>
              </div>
            )}

            {isAnalyzing && (
              <div className="text-center py-12">
                <div className="relative w-24 h-24 mx-auto mb-6">
                  <div className="absolute inset-0 rounded-full bg-pink-200 animate-ping"></div>
                  <div className="relative flex items-center justify-center w-full h-full bg-pink-100 rounded-full">
                    <RefreshCw className="animate-spin h-10 w-10 text-pink-500" />
                  </div>
                </div>
                <p className="text-lg font-medium">Analyzing cat image...</p>
                <p className="text-sm text-gray-500 mt-2">Our AI is examining whiskers, fur patterns, and ear shape</p>
              </div>
            )}

            {results && (
              <div className="py-4">
                <h3 className="text-xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                  Analysis Results
                </h3>

                <div className="mb-6">
                  <h4 className="font-medium mb-2">Breed Prediction</h4>
                  <div className="space-y-3">
                    {results.breeds.map((breed, index) => (
                      <div key={index} className="bg-pink-50 p-3 rounded-xl hover:bg-pink-100 transition-colors">
                        <div className="flex justify-between mb-1">
                          <span className="font-medium">{breed.name}</span>
                          <span className="text-pink-500 font-bold">{Math.round(breed.confidence * 100)}%</span>
                        </div>
                        <div className="w-full bg-white rounded-full h-2.5">
                          <div
                            className="bg-pink-500 h-2.5 rounded-full animate-grow-width"
                            style={{ width: `${breed.confidence * 100}%` }}
                          ></div>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">{breed.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-pink-50 p-4 rounded-xl text-center">
                    <h4 className="font-medium mb-2">Estimated Age</h4>
                    <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                      {results.age} years
                    </p>
                  </div>
                  <div className="bg-pink-50 p-4 rounded-xl text-center">
                    <h4 className="font-medium mb-2">Mood</h4>
                    <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                      {results.mood}
                    </p>
                  </div>
                </div>

                <button
                  onClick={resetClassifier}
                  className="w-full py-2 rounded-full border border-pink-300 hover:bg-pink-100 hover:text-pink-500 transition-colors"
                >
                  Analyze Another Cat
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
