import { Github, Twitter, Instagram, Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="mt-16 border-t pt-8 pb-4 border-pink-200">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center">
              <div className="mr-2 text-2xl">🐱</div>
              <h2 className="text-xl font-bold text-pink-500">Meowcat AI</h2>
            </div>
            <p className="text-sm text-gray-500 mt-2">Advanced cat breed classification powered by machine learning</p>
          </div>

          
        </div>

        <div className="mt-8 pt-4 border-t text-center text-sm text-gray-500 border-pink-100">
          <p className="mt-1">
            Made with <Heart className="h-3 w-3 inline text-pink-500 fill-current" /> for cat lovers everywhere
          </p>
        </div>
      </div>
    </footer>
  )
}
