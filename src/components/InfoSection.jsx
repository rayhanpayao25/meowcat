import { Brain, Cpu, Database, LineChart, Sparkles, Heart, Star } from "lucide-react"

export default function InfoSection() {
  return (
    <section id="about" className="my-16 animate-fade-in">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 inline-block">
          How It Works
        </h2>
      
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <h3 className="text-2xl font-bold mb-4 text-pink-500">Cat Breed Classification</h3>
          <p className="text-lg mb-6 text-gray-600">
            Our advanced machine learning model has been trained on thousands of cat images to accurately identify over
            40 different cat breeds. The model analyzes facial features, body structure, fur patterns, and other
            distinctive characteristics.
          </p>
          <p className="text-lg text-gray-600">
            The neural network uses a convolutional architecture optimized for image recognition, with multiple layers
            that extract increasingly complex features from the input image.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="inline-flex items-center justify-center p-1 rounded-full bg-pink-100 text-pink-500 text-sm font-medium px-4 py-2">
              <Sparkles className="h-4 w-4 mr-2" /> AI-powered
            </span>
            <span className="inline-flex items-center justify-center p-1 rounded-full bg-purple-100 text-purple-500 text-sm font-medium px-4 py-2">
              <Heart className="h-4 w-4 mr-2" /> Cat-friendly
            </span>
            <span className="inline-flex items-center justify-center p-1 rounded-full bg-pink-100 text-pink-500 text-sm font-medium px-4 py-2">
              <Star className="h-4 w-4 mr-2" /> Fast results
            </span>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -z-10 inset-0 bg-gradient-to-r from-pink-200 to-purple-200 rounded-3xl blur-xl"></div>
          <div className="h-full rounded-3xl border border-pink-200 shadow-lg p-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center text-center p-4 rounded-2xl bg-white/50 hover:bg-white/80 transition-colors transform hover:-translate-y-1 hover:shadow-md duration-300">
                <Brain className="h-12 w-12 mb-3 text-pink-500" />
                <h4 className="font-bold text-lg">Neural Network</h4>
                <p className="text-sm text-gray-500">Deep learning model with 50+ million parameters</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 rounded-2xl bg-white/50 hover:bg-white/80 transition-colors transform hover:-translate-y-1 hover:shadow-md duration-300">
                <Database className="h-12 w-12 mb-3 text-purple-500" />
                <h4 className="font-bold text-lg">Training Data</h4>
                <p className="text-sm text-gray-500">Trained on 100,000+ cat images</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 rounded-2xl bg-white/50 hover:bg-white/80 transition-colors transform hover:-translate-y-1 hover:shadow-md duration-300">
                <Cpu className="h-12 w-12 mb-3 text-pink-500" />
                <h4 className="font-bold text-lg">Processing</h4>
                <p className="text-sm text-gray-500">GPU-accelerated inference</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 rounded-2xl bg-white/50 hover:bg-white/80 transition-colors transform hover:-translate-y-1 hover:shadow-md duration-300">
                <LineChart className="h-12 w-12 mb-3 text-purple-500" />
                <h4 className="font-bold text-lg">Accuracy</h4>
                <p className="text-sm text-gray-500">95% accuracy on test data</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center max-w-2xl mx-auto bg-pink-50 p-8 rounded-3xl">
        <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-float">
          <Heart className="h-8 w-8 text-pink-500" />
        </div>
        <h3 className="text-2xl font-bold mb-4 text-pink-500">Why Use Meowcat AI?</h3>
        <p className="text-lg mb-6 text-gray-600">
          Whether you're a cat owner curious about your feline friend's breed, a veterinarian looking for a quick
          reference, or just a cat enthusiast, our tool provides fast and accurate breed identification.
        </p>
        <div className="inline-flex items-center justify-center p-2 rounded-full bg-pink-100 text-pink-500 text-sm font-medium px-6 animate-bounce">
          <Sparkles className="h-4 w-4 mr-2" /> No sign-up required!
        </div>
      </div>
    </section>
  )
}
