"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  ArrowRight,
  Play,
  Pause,
  Volume2,
  Settings,
  User,
  Mail,
  Phone,
  Calendar,
  Clock,
  Zap,
  Wifi,
  Battery,
  Signal,
  Download,
  Share,
  Heart,
  Star,
  Search,
  Menu,
  Home,
  Leaf,
  Sun,
  Cloud,
  Droplets,
  Wind,
} from "lucide-react"

const designs = [
  {
    id: "bauhaus",
    name: "Bauhaus",
    category: "historical",
  },
  {
    id: "artdeco",
    name: "Art Deco",
    category: "historical",
  },
  {
    id: "swiss",
    name: "Swiss Design",
    category: "historical",
  },
  {
    id: "memphis",
    name: "Memphis Design",
    category: "historical",
  },
  {
    id: "skeuomorphism",
    name: "Skeuomorphism",
    category: "digital",
  },
  {
    id: "flat",
    name: "Flat Design",
    category: "digital",
  },
  {
    id: "material",
    name: "Material Design",
    category: "digital",
  },
  {
    id: "neumorphism",
    name: "Neumorphism",
    category: "digital",
  },
  {
    id: "brutalism",
    name: "Brutalism",
    category: "contemporary",
  },
  {
    id: "glassmorphism",
    name: "Glassmorphism",
    category: "contemporary",
  },
  {
    id: "darkmode",
    name: "Dark Mode",
    category: "contemporary",
  },
  {
    id: "claymorphism",
    name: "Claymorphism",
    category: "contemporary",
  },
  {
    id: "vaporwave",
    name: "Vaporwave",
    category: "aesthetic",
  },
  {
    id: "y2k",
    name: "Y2K",
    category: "aesthetic",
  },
  {
    id: "frutiger",
    name: "Frutiger Aero",
    category: "aesthetic",
  },
  {
    id: "cyberpunk",
    name: "Cyberpunk",
    category: "aesthetic",
  },
]

export default function DesignShowcase() {
  const [currentDesign, setCurrentDesign] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  const nextDesign = () => {
    setCurrentDesign((prev) => (prev + 1) % designs.length)
  }

  const prevDesign = () => {
    setCurrentDesign((prev) => (prev - 1 + designs.length) % designs.length)
  }

  const BauhausDesign = () => (
    <div className="bg-white min-h-screen">
      <div className="border-b-8 border-black p-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-3 gap-8">
            <div className="col-span-2">
              <h1 className="text-6xl font-bold text-black mb-4" style={{ fontFamily: "Arial, sans-serif" }}>
                BAUHAUS
              </h1>
              <div className="w-32 h-2 bg-red-500 mb-4"></div>
              <p className="text-xl text-black leading-relaxed">
                FORM FOLLOWS FUNCTION. DESIGN IS NOT DECORATION BUT THE ESSENCE OF PRODUCTS.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-full h-32 bg-red-500"></div>
              <div className="w-full h-32 bg-blue-500"></div>
              <div className="w-full h-32 bg-yellow-500"></div>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-4 gap-4">
            <div className="bg-black text-white p-6 text-center">
              <div className="w-8 h-8 border-2 border-white mx-auto mb-2"></div>
              <div className="text-sm font-bold">GEOMETRY</div>
            </div>
            <div className="bg-red-500 text-white p-6 text-center">
              <div className="w-8 h-8 bg-white mx-auto mb-2 rounded-full"></div>
              <div className="text-sm font-bold">PRIMARY</div>
            </div>
            <div className="bg-blue-500 text-white p-6 text-center">
              <div className="w-0 h-0 border-l-4 border-r-4 border-b-8 border-l-transparent border-r-transparent border-b-white mx-auto mb-2"></div>
              <div className="text-sm font-bold">FUNCTION</div>
            </div>
            <div className="bg-yellow-500 text-black p-6 text-center">
              <div className="w-8 h-2 bg-black mx-auto mb-2"></div>
              <div className="text-sm font-bold">MINIMAL</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const ArtDecoDesign = () => (
    <div className="bg-gradient-to-b from-black via-gray-900 to-black min-h-screen text-white">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 border-4 border-gold rotate-45"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 border-2 border-gold rotate-12"></div>
        </div>
        <div className="relative z-10 p-12">
          <div className="text-center mb-12">
            <div className="inline-block">
              <h1 className="text-8xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent">
                DECO
              </h1>
              <div className="w-full h-1 bg-gradient-to-r from-yellow-400 to-yellow-600"></div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 p-8 clip-path-polygon">
              <div className="text-black text-center">
                <div className="text-4xl font-bold mb-2">1925</div>
                <div className="text-lg">EXPOSITION</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 border-4 border-yellow-400">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 mx-auto mb-4 transform rotate-45"></div>
                <div className="text-xl font-bold">LUXURY</div>
                <div className="text-sm opacity-80">GEOMETRIC ELEGANCE</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-600 to-yellow-800 p-8">
              <div className="text-black text-center">
                <div className="text-2xl font-bold mb-2">GLAMOUR</div>
                <div className="space-y-2">
                  <div className="w-full h-1 bg-black"></div>
                  <div className="w-3/4 h-1 bg-black mx-auto"></div>
                  <div className="w-1/2 h-1 bg-black mx-auto"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-8 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-12 py-4">
              <div className="text-lg font-bold">METROPOLITAN</div>
              <div className="w-2 h-8 bg-black"></div>
              <div className="text-lg font-bold">MODERN</div>
              <div className="w-2 h-8 bg-black"></div>
              <div className="text-lg font-bold">MAGNIFICENT</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const SwissDesign = () => (
    <div className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto p-8">
        <div className="grid grid-cols-12 gap-4 h-screen">
          <div className="col-span-8 grid grid-rows-6 gap-4">
            <div className="row-span-2 flex items-center">
              <h1 className="text-7xl font-light text-black" style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>
                Swiss Design
              </h1>
            </div>
            <div className="row-span-1 bg-red-500"></div>
            <div className="row-span-3 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <p className="text-lg leading-relaxed text-black">
                  International Typographic Style emphasizes cleanliness, readability, and objectivity.
                </p>
                <div className="space-y-2">
                  <div className="text-sm text-gray-600">Grid Systems</div>
                  <div className="text-sm text-gray-600">Sans-serif Typography</div>
                  <div className="text-sm text-gray-600">Asymmetrical Layouts</div>
                  <div className="text-sm text-gray-600">White Space</div>
                </div>
              </div>
              <div className="bg-gray-100 p-6">
                <div className="space-y-4">
                  <div className="w-full h-2 bg-black"></div>
                  <div className="w-3/4 h-2 bg-gray-400"></div>
                  <div className="w-1/2 h-2 bg-gray-300"></div>
                  <div className="w-full h-2 bg-black"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-4 grid grid-rows-6 gap-4">
            <div className="row-span-2 bg-black flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-4xl font-light mb-2">1957</div>
                <div className="text-sm">HELVETICA</div>
              </div>
            </div>
            <div className="row-span-2 bg-gray-100 p-4">
              <div className="text-center">
                <div className="text-2xl font-light text-black mb-2">GRID</div>
                <div className="grid grid-cols-3 gap-1">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className="aspect-square bg-gray-300"></div>
                  ))}
                </div>
              </div>
            </div>
            <div className="row-span-2 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-light text-red-500">+</div>
                <div className="text-sm text-black mt-2">OBJECTIVE</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const MemphisDesign = () => (
    <div className="bg-gradient-to-br from-pink-400 via-yellow-300 to-cyan-400 min-h-screen overflow-hidden relative">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-red-500 rotate-45"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-blue-500 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-40 h-8 bg-green-500 rotate-12"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-purple-500"></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-orange-500 transform rotate-45"></div>
      </div>

      <div className="relative z-10 p-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-8xl font-black text-black mb-8 transform -rotate-2">MEMPHIS</h1>

          <div className="grid grid-cols-3 gap-8 mt-16">
            <div className="bg-black text-white p-8 transform rotate-3">
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400 mx-auto mb-4 rounded-full"></div>
                <div className="text-xl font-bold">PLAYFUL</div>
              </div>
            </div>

            <div className="bg-white text-black p-8 transform -rotate-2 border-8 border-black">
              <div className="text-center">
                <div className="w-16 h-4 bg-red-500 mx-auto mb-4"></div>
                <div className="text-xl font-bold">BOLD</div>
              </div>
            </div>

            <div className="bg-green-400 text-black p-8 transform rotate-1">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500 mx-auto mb-4 transform rotate-45"></div>
                <div className="text-xl font-bold">RADICAL</div>
              </div>
            </div>
          </div>

          <div className="mt-16 bg-white text-black p-8 transform -rotate-1 border-4 border-black">
            <div className="text-2xl font-bold mb-4">POSTMODERN REBELLION</div>
            <div className="flex justify-center gap-4">
              <div className="w-8 h-8 bg-red-500"></div>
              <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
              <div className="w-8 h-8 bg-yellow-500 transform rotate-45"></div>
              <div className="w-8 h-8 bg-green-500"></div>
              <div className="w-8 h-8 bg-purple-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const SkeuomorphismDesign = () => (
    <div className="bg-gradient-to-b from-gray-200 to-gray-400 min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-b from-gray-100 to-gray-300 rounded-2xl shadow-2xl p-8 border border-gray-400">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Music Player</h1>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="bg-gradient-to-b from-gray-800 to-black rounded-xl p-8 shadow-inner">
            <div className="bg-gradient-to-br from-gray-700 to-gray-900 rounded-full w-48 h-48 mx-auto shadow-2xl relative">
              <div className="absolute inset-4 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full shadow-inner">
                <div className="absolute inset-8 bg-gradient-to-br from-gray-800 to-black rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-gray-600 rounded-full"></div>
                </div>
              </div>
            </div>

            <div className="text-center mt-8 text-white">
              <div className="text-xl font-semibold mb-2">Now Playing</div>
              <div className="text-lg text-gray-300">Ambient Sounds</div>
            </div>
          </div>

          <div className="mt-8 flex justify-center gap-4">
            <Button className="bg-gradient-to-b from-gray-300 to-gray-500 hover:from-gray-200 hover:to-gray-400 text-gray-800 shadow-lg border border-gray-400 rounded-full w-12 h-12">
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <Button
              onClick={() => setIsPlaying(!isPlaying)}
              className="bg-gradient-to-b from-blue-400 to-blue-600 hover:from-blue-300 hover:to-blue-500 shadow-lg border border-blue-300 rounded-full w-16 h-16"
            >
              {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
            </Button>
            <Button className="bg-gradient-to-b from-gray-300 to-gray-500 hover:from-gray-200 hover:to-gray-400 text-gray-800 shadow-lg border border-gray-400 rounded-full w-12 h-12">
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          <div className="mt-8 bg-gradient-to-b from-gray-100 to-gray-200 rounded-lg p-4 shadow-inner">
            <div className="flex items-center gap-3">
              <Volume2 className="w-5 h-5 text-gray-600" />
              <div className="flex-1 bg-gradient-to-b from-gray-300 to-gray-400 rounded-full h-3 shadow-inner">
                <div className="bg-gradient-to-b from-blue-400 to-blue-600 h-full w-3/4 rounded-full shadow-sm"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const FlatDesign = () => (
    <div className="bg-blue-500 min-h-screen">
      <div className="max-w-4xl mx-auto p-8">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-light text-white mb-4">Flat Design</h1>
          <div className="w-24 h-1 bg-white mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 text-center">
            <div className="w-16 h-16 bg-red-500 mx-auto mb-4"></div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Simple</h3>
            <p className="text-gray-600">No shadows, gradients, or textures</p>
          </div>

          <div className="bg-white p-8 text-center">
            <div className="w-16 h-16 bg-green-500 mx-auto mb-4 rounded-full"></div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Clean</h3>
            <p className="text-gray-600">Focus on content and usability</p>
          </div>

          <div className="bg-white p-8 text-center">
            <div className="w-16 h-16 bg-orange-500 mx-auto mb-4"></div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Minimal</h3>
            <p className="text-gray-600">Less is more philosophy</p>
          </div>
        </div>

        <div className="mt-12 bg-white p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">Dashboard</h2>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white">Settings</Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-red-500 text-white p-6 text-center">
              <div className="text-3xl font-bold">42</div>
              <div className="text-sm">Projects</div>
            </div>
            <div className="bg-green-500 text-white p-6 text-center">
              <div className="text-3xl font-bold">18</div>
              <div className="text-sm">Completed</div>
            </div>
            <div className="bg-orange-500 text-white p-6 text-center">
              <div className="text-3xl font-bold">7</div>
              <div className="text-sm">In Progress</div>
            </div>
            <div className="bg-purple-500 text-white p-6 text-center">
              <div className="text-3xl font-bold">3</div>
              <div className="text-sm">Pending</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const MaterialDesign = () => (
    <div className="bg-gray-100 min-h-screen">
      <div className="bg-blue-500 text-white p-6 shadow-lg">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-medium">Material Design</h1>
          <div className="flex items-center gap-4">
            <Search className="w-6 h-6" />
            <Menu className="w-6 h-6" />
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="bg-red-500 text-white">
              <CardTitle>Paper Metaphor</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-gray-600 mb-4">Digital material inspired by paper and ink</p>
              <Button className="bg-red-500 hover:bg-red-600 text-white shadow-md">Learn More</Button>
            </CardContent>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="bg-green-500 text-white">
              <CardTitle>Bold Colors</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-gray-600 mb-4">Vibrant hues and meaningful motion</p>
              <Button className="bg-green-500 hover:bg-green-600 text-white shadow-md">Explore</Button>
            </CardContent>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="bg-orange-500 text-white">
              <CardTitle>Elevation</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-gray-600 mb-4">Surfaces and shadows create hierarchy</p>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white shadow-md">Discover</Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-medium text-gray-800 mb-6">Floating Action Button</h2>
          <div className="relative">
            <div className="bg-gray-50 p-8 rounded-lg">
              <p className="text-gray-600 mb-4">
                The floating action button represents the primary action in an application.
              </p>
              <div className="flex gap-4">
                <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full w-14 h-14 shadow-lg">
                  <Heart className="w-6 h-6" />
                </Button>
                <Button className="bg-pink-500 hover:bg-pink-600 text-white rounded-full w-14 h-14 shadow-lg">
                  <Share className="w-6 h-6" />
                </Button>
                <Button className="bg-purple-500 hover:bg-purple-600 text-white rounded-full w-14 h-14 shadow-lg">
                  <Download className="w-6 h-6" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const NeumorphismDesign = () => (
    <div className="bg-gray-200 min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-light text-gray-700 mb-4">Neumorphism</h1>
          <p className="text-gray-600">Soft UI with subtle depth</p>
        </div>

        <div className="bg-gray-200 p-8 rounded-3xl shadow-inner">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-200 p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-light text-gray-700 mb-6">Music Player</h2>

              <div className="bg-gray-200 w-48 h-48 mx-auto rounded-full shadow-inner mb-8 flex items-center justify-center">
                <div className="bg-gray-200 w-32 h-32 rounded-full shadow-lg flex items-center justify-center">
                  <Button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-700 w-16 h-16 rounded-full shadow-lg border-0"
                  >
                    {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-gray-200 p-4 rounded-xl shadow-inner">
                  <div className="flex items-center gap-3">
                    <Volume2 className="w-5 h-5 text-gray-600" />
                    <div className="flex-1 bg-gray-200 rounded-full h-2 shadow-inner">
                      <div className="bg-blue-400 h-full w-3/4 rounded-full shadow-sm"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-200 p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-light text-gray-700 mb-4">Controls</h3>
                <div className="grid grid-cols-2 gap-4">
                  <Button className="bg-gray-200 hover:bg-gray-300 text-gray-700 p-4 rounded-xl shadow-lg border-0">
                    <Settings className="w-6 h-6" />
                  </Button>
                  <Button className="bg-gray-200 hover:bg-gray-300 text-gray-700 p-4 rounded-xl shadow-lg border-0">
                    <User className="w-6 h-6" />
                  </Button>
                  <Button className="bg-gray-200 hover:bg-gray-300 text-gray-700 p-4 rounded-xl shadow-lg border-0">
                    <Mail className="w-6 h-6" />
                  </Button>
                  <Button className="bg-gray-200 hover:bg-gray-300 text-gray-700 p-4 rounded-xl shadow-lg border-0">
                    <Phone className="w-6 h-6" />
                  </Button>
                </div>
              </div>

              <div className="bg-gray-200 p-6 rounded-2xl shadow-inner">
                <h3 className="text-xl font-light text-gray-700 mb-4">Status</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Battery</span>
                    <span className="text-gray-700 font-medium">85%</span>
                  </div>
                  <div className="bg-gray-200 rounded-full h-2 shadow-inner">
                    <div className="bg-green-400 h-full w-[85%] rounded-full shadow-sm"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const BrutalismDesign = () => (
    <div className="bg-black min-h-screen text-white overflow-hidden">
      <div className="border-8 border-red-500 m-4 min-h-[calc(100vh-2rem)]">
        <div className="border-4 border-white m-4 min-h-[calc(100vh-4rem)] p-8">
          <div className="text-center mb-8">
            <h1 className="text-9xl font-black text-white mb-4 transform -skew-x-12">BRUTAL</h1>
            <div className="bg-red-500 h-4 w-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-4 border-green-500 p-8 bg-white text-black">
              <h2 className="text-4xl font-black mb-4">RAW</h2>
              <p className="text-xl font-bold leading-tight">
                BREAKING CONVENTIONAL RULES. INTENTIONALLY CRUDE. BOLD TYPOGRAPHY.
              </p>
              <div className="mt-6 space-y-2">
                <div className="bg-black text-white p-2 text-center font-black">FUNCTION</div>
                <div className="bg-red-500 text-white p-2 text-center font-black">OVER</div>
                <div className="bg-green-500 text-black p-2 text-center font-black">FORM</div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-red-500 text-white p-6 border-4 border-white">
                <div className="text-3xl font-black">ERROR 404</div>
                <div className="text-lg font-bold">PAGE NOT FOUND</div>
              </div>

              <div className="bg-green-500 text-black p-6 border-4 border-black">
                <div className="text-2xl font-black mb-2">SUBMIT</div>
                <div className="bg-black text-white p-2 text-center font-bold">CLICK HERE</div>
              </div>

              <div className="bg-blue-500 text-white p-6 border-4 border-yellow-500">
                <div className="text-2xl font-black mb-2">WARNING</div>
                <div className="font-bold">SYSTEM OVERLOAD</div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-block bg-white text-black p-8 border-8 border-red-500 transform rotate-2">
              <div className="text-6xl font-black">NO</div>
              <div className="text-2xl font-bold">DECORATION</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const GlassmorphismDesign = () => (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-purple-400 via-pink-500 to-red-500">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/30 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-light text-white mb-4 drop-shadow-lg">Glassmorphism</h1>
            <p className="text-white/80 text-lg">Frosted glass aesthetic</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Profile</h3>
                    <p className="text-white/70 text-sm">User settings</p>
                  </div>
                </div>
                <Button className="w-full bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm">
                  View Profile
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Messages</h3>
                    <p className="text-white/70 text-sm">3 unread</p>
                  </div>
                </div>
                <Button className="w-full bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm">
                  Open Messages
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/15 backdrop-blur-xl border border-white/25 shadow-2xl">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-white/25 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Settings className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Settings</h3>
                    <p className="text-white/70 text-sm">Preferences</p>
                  </div>
                </div>
                <Button className="w-full bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm">
                  Configure
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8">
            <Card className="bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold text-white mb-6">Dashboard</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 border border-white/30">
                    <div className="text-3xl font-bold text-white">42</div>
                    <div className="text-white/70 text-sm">Projects</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 border border-white/30">
                    <div className="text-3xl font-bold text-white">18</div>
                    <div className="text-white/70 text-sm">Completed</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 border border-white/30">
                    <div className="text-3xl font-bold text-white">7</div>
                    <div className="text-white/70 text-sm">In Progress</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 border border-white/30">
                    <div className="text-3xl font-bold text-white">3</div>
                    <div className="text-white/70 text-sm">Pending</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )

  const DarkModeDesign = () => (
    <div className="bg-gray-900 min-h-screen text-white">
      <div className="bg-gray-800 border-b border-gray-700 p-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Dark Mode Interface</h1>
          <div className="flex items-center gap-4">
            <Badge className="bg-purple-600 text-white">
              <Zap className="w-3 h-3 mr-1" />
              Pro
            </Badge>
            <div className="flex items-center gap-2">
              <Signal className="w-4 h-4 text-gray-400" />
              <Wifi className="w-4 h-4 text-gray-400" />
              <Battery className="w-4 h-4 text-green-400" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Home className="w-5 h-5" />
                Dashboard
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Active Users</span>
                  <span className="text-white font-semibold">1,234</span>
                </div>
                <div className="bg-gray-700 rounded-full h-2">
                  <div className="bg-purple-500 h-full w-3/4 rounded-full"></div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Schedule
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <div>
                    <div className="text-white text-sm">Team Meeting</div>
                    <div className="text-gray-400 text-xs">10:00 AM</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <div>
                    <div className="text-white text-sm">Project Review</div>
                    <div className="text-gray-400 text-xs">2:00 PM</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="text-sm">
                  <div className="text-white">File uploaded</div>
                  <div className="text-gray-400 text-xs">2 minutes ago</div>
                </div>
                <div className="text-sm">
                  <div className="text-white">Task completed</div>
                  <div className="text-gray-400 text-xs">5 minutes ago</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">System Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-white font-semibold">System Online</div>
                  <div className="text-gray-400 text-sm">All services running</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <Wifi className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-white font-semibold">Network Stable</div>
                  <div className="text-gray-400 text-sm">Low latency</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <Battery className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-white font-semibold">Power Optimal</div>
                  <div className="text-gray-400 text-sm">85% remaining</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )

  const ClaymorphismDesign = () => (
    <div className="bg-gradient-to-br from-orange-200 to-pink-200 min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Claymorphism</h1>
          <p className="text-gray-600 text-lg">3D clay-like soft elements</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-red-400 to-red-500 p-8 rounded-3xl shadow-2xl transform hover:scale-105 transition-transform">
            <div className="text-center text-white">
              <div className="w-16 h-16 bg-white/30 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Favorites</h3>
              <p className="text-white/80">24 items saved</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-400 to-blue-500 p-8 rounded-3xl shadow-2xl transform hover:scale-105 transition-transform">
            <div className="text-center text-white">
              <div className="w-16 h-16 bg-white/30 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                <Star className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Reviews</h3>
              <p className="text-white/80">4.8 rating</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-400 to-green-500 p-8 rounded-3xl shadow-2xl transform hover:scale-105 transition-transform">
            <div className="text-center text-white">
              <div className="w-16 h-16 bg-white/30 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                <Download className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Downloads</h3>
              <p className="text-white/80">1.2k this month</p>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-br from-purple-400 to-purple-500 p-8 rounded-3xl shadow-2xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Music Player</h2>

          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 mb-6">
            <div className="text-center text-white">
              <div className="text-xl font-semibold mb-2">Now Playing</div>
              <div className="text-lg text-white/80">Chill Vibes Playlist</div>
            </div>
          </div>

          <div className="flex justify-center gap-6 mb-6">
            <Button className="bg-white/30 hover:bg-white/40 text-white w-16 h-16 rounded-full shadow-lg border-0">
              <ArrowLeft className="w-6 h-6" />
            </Button>
            <Button
              onClick={() => setIsPlaying(!isPlaying)}
              className="bg-white/40 hover:bg-white/50 text-white w-20 h-20 rounded-full shadow-lg border-0"
            >
              {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8" />}
            </Button>
            <Button className="bg-white/30 hover:bg-white/40 text-white w-16 h-16 rounded-full shadow-lg border-0">
              <ArrowRight className="w-6 h-6" />
            </Button>
          </div>

          <div className="bg-white/20 rounded-2xl p-4">
            <div className="flex items-center gap-3">
              <Volume2 className="w-5 h-5 text-white" />
              <div className="flex-1 bg-white/30 rounded-full h-3 shadow-inner">
                <div className="bg-white h-full w-2/3 rounded-full shadow-sm"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const VaporwaveDesign = () => (
    <div className="bg-gradient-to-b from-purple-900 via-pink-500 to-cyan-400 min-h-screen overflow-hidden relative">
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 400" className="w-full h-64">
            <defs>
              <linearGradient id="grid" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ff00ff" />
                <stop offset="100%" stopColor="#00ffff" />
              </linearGradient>
            </defs>
            {[...Array(20)].map((_, i) => (
              <line key={i} x1={i * 60} y1="0" x2={i * 60} y2="400" stroke="url(#grid)" strokeWidth="1" opacity="0.6" />
            ))}
            {[...Array(10)].map((_, i) => (
              <line
                key={i}
                x1="0"
                y1={i * 40}
                x2="1200"
                y2={i * 40}
                stroke="url(#grid)"
                strokeWidth="1"
                opacity="0.6"
              />
            ))}
          </svg>
        </div>
      </div>

      <div className="relative z-10 p-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-8xl font-bold mb-4 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            ＶＡＰＯＲＷＡＶＥ
          </h1>
          <div className="text-2xl text-white mb-12 font-mono">ａ ｅ ｓ ｔ ｈ ｅ ｔ ｉ ｃ</div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-pink-500/80 to-purple-600/80 backdrop-blur-sm p-6 border border-cyan-400/50">
              <div className="text-center text-white">
                <div className="text-4xl mb-2">🌴</div>
                <div className="text-xl font-bold mb-2">ＲＥＴＲＯ</div>
                <div className="text-sm opacity-80">Nostalgic vibes</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-500/80 to-blue-600/80 backdrop-blur-sm p-6 border border-pink-400/50">
              <div className="text-center text-white">
                <div className="text-4xl mb-2">🌊</div>
                <div className="text-xl font-bold mb-2">ＷＡＶＥ</div>
                <div className="text-sm opacity-80">Synthwave sounds</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-500/80 to-pink-600/80 backdrop-blur-sm p-6 border border-cyan-400/50">
              <div className="text-center text-white">
                <div className="text-4xl mb-2">🌙</div>
                <div className="text-xl font-bold mb-2">ＮＩＧＨＴ</div>
                <div className="text-sm opacity-80">Neon dreams</div>
              </div>
            </div>
          </div>

          <div className="bg-black/60 backdrop-blur-sm p-8 border-2 border-cyan-400">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-4">ＮＯＷ ＰＬＡＹＩＮＧ</div>
              <div className="text-xl text-pink-400 mb-6">Midnight City - Synthwave Mix</div>

              <div className="flex justify-center gap-6 mb-6">
                <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white border border-cyan-400 w-12 h-12">
                  <ArrowLeft className="w-5 h-5" />
                </Button>
                <Button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white border border-pink-400 w-16 h-16"
                >
                  {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                </Button>
                <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white border border-cyan-400 w-12 h-12">
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>

              <div className="bg-black/40 p-4 border border-cyan-400/50">
                <div className="flex items-center gap-3">
                  <Volume2 className="w-5 h-5 text-cyan-400" />
                  <div className="flex-1 bg-black/60 rounded h-2 border border-pink-400/50">
                    <div className="bg-gradient-to-r from-pink-400 to-cyan-400 h-full w-3/4 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const Y2KDesign = () => (
    <div className="bg-gradient-to-br from-silver via-blue-400 to-purple-500 min-h-screen overflow-hidden relative">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-60 blur-sm"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-gradient-to-br from-green-400 to-blue-500 opacity-60 blur-sm"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full opacity-60 blur-sm"></div>
      </div>

      <div className="relative z-10 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-7xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
              Y2K
            </h1>
            <div className="text-2xl text-white font-bold">MILLENNIUM AESTHETIC</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-xl p-8 rounded-2xl border border-white/30 shadow-2xl">
              <h2 className="text-3xl font-bold text-white mb-6">CYBER PORTAL</h2>

              <div className="space-y-4">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-4 rounded-lg text-black font-bold text-center">
                  ENTER THE MATRIX
                </div>
                <div className="bg-gradient-to-r from-green-400 to-blue-500 p-4 rounded-lg text-white font-bold text-center">
                  DIGITAL REVOLUTION
                </div>
                <div className="bg-gradient-to-r from-pink-400 to-purple-500 p-4 rounded-lg text-white font-bold text-center">
                  FUTURE IS NOW
                </div>
              </div>

              <div className="mt-6 text-center">
                <Button className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-white font-bold px-8 py-3 rounded-full shadow-lg">
                  CONNECT
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-yellow-400/80 to-orange-500/80 p-6 rounded-2xl shadow-2xl">
                <div className="text-center text-black">
                  <div className="text-4xl font-bold mb-2">2000</div>
                  <div className="text-lg font-semibold">MILLENNIUM BUG</div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-400/80 to-blue-500/80 p-6 rounded-2xl shadow-2xl">
                <div className="text-center text-white">
                  <div className="text-2xl font-bold mb-2">CHROME</div>
                  <div className="text-sm">Metallic textures</div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-pink-400/80 to-purple-500/80 p-6 rounded-2xl shadow-2xl">
                <div className="text-center text-white">
                  <div className="text-2xl font-bold mb-2">HOLOGRAM</div>
                  <div className="text-sm">Iridescent effects</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-black/60 to-gray-900/60 backdrop-blur-xl p-8 rounded-2xl border border-cyan-400/50">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-4">SYSTEM STATUS</div>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-green-500/80 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-white">ONLINE</div>
                  <div className="text-sm text-white/80">All systems go</div>
                </div>
                <div className="bg-yellow-500/80 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-black">LOADING</div>
                  <div className="text-sm text-black/80">Processing data</div>
                </div>
                <div className="bg-blue-500/80 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-white">SECURE</div>
                  <div className="text-sm text-white/80">Encrypted connection</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const FrutigerAeroDesign = () => (
    <div className="bg-gradient-to-br from-sky-300 via-emerald-200 to-blue-400 min-h-screen relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-cyan-300/30 to-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-tl from-emerald-300/40 to-teal-400/30 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-lime-300/20 to-cyan-300/30 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/40 rounded-full animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-6xl font-light text-white mb-4 drop-shadow-lg">Frutiger Aero</h1>
            <p className="text-white/90 text-xl">Clean, nature-inspired design</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-white/30 backdrop-blur-xl border-white/40 shadow-2xl hover:shadow-3xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                  <Droplets className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 drop-shadow-md">Water</h3>
                <p className="text-white/80">Pure and refreshing</p>
              </CardContent>
            </Card>

            <Card className="bg-white/30 backdrop-blur-xl border-white/40 shadow-2xl hover:shadow-3xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                  <Leaf className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 drop-shadow-md">Nature</h3>
                <p className="text-white/80">Eco-friendly living</p>
              </CardContent>
            </Card>

            <Card className="bg-white/30 backdrop-blur-xl border-white/40 shadow-2xl hover:shadow-3xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                  <Sun className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 drop-shadow-md">Energy</h3>
                <p className="text-white/80">Sustainable power</p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-white/20 backdrop-blur-2xl border-white/30 shadow-2xl">
            <CardContent className="p-8">
              <h2 className="text-3xl font-light text-white mb-6 text-center drop-shadow-md">
                Environmental Dashboard
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-white/90 flex items-center gap-2">
                      <Cloud className="w-4 h-4" />
                      Air Quality
                    </span>
                    <span className="text-white font-semibold">Excellent</span>
                  </div>
                  <div className="bg-white/20 rounded-full h-3 shadow-inner">
                    <div className="bg-gradient-to-r from-green-400 to-emerald-500 h-full w-[90%] rounded-full shadow-sm"></div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-white/90 flex items-center gap-2">
                      <Droplets className="w-4 h-4" />
                      Water Purity
                    </span>
                    <span className="text-white font-semibold">95%</span>
                  </div>
                  <div className="bg-white/20 rounded-full h-3 shadow-inner">
                    <div className="bg-gradient-to-r from-blue-400 to-cyan-500 h-full w-[95%] rounded-full shadow-sm"></div>
                  </div>
                </div>

                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                  <div className="text-center">
                    <div className="text-4xl font-light text-white mb-2">22°C</div>
                    <div className="text-white/80 mb-4">Perfect Temperature</div>
                    <div className="flex justify-center gap-4">
                      <div className="text-center">
                        <Sun className="w-6 h-6 text-yellow-400 mx-auto mb-1" />
                        <div className="text-xs text-white/80">Sunny</div>
                      </div>
                      <div className="text-center">
                        <Wind className="w-6 h-6 text-cyan-300 mx-auto mb-1" />
                        <div className="text-xs text-white/80">Light breeze</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )

  const CyberpunkDesign = () => (
    <div className="bg-black min-h-screen text-green-400 overflow-hidden relative">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse delay-500"></div>
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-pink-500 to-transparent animate-pulse delay-1000"></div>
        <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-blue-500 to-transparent animate-pulse delay-1500"></div>
      </div>

      <div className="relative z-10 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-7xl font-bold mb-4 bg-gradient-to-r from-green-400 via-cyan-400 to-pink-500 bg-clip-text text-transparent">
              CYBERPUNK
            </h1>
            <div className="text-xl text-cyan-400 font-mono">&gt; HIGH TECH, LOW LIFE _</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-2 border-green-400 bg-black/80 p-6">
              <div className="text-green-400 font-mono mb-4">
                <div className="text-lg mb-2">&gt; SYSTEM_STATUS.exe</div>
                <div className="text-sm opacity-80">Initializing neural interface...</div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-cyan-400">CPU_LOAD:</span>
                  <span className="text-green-400">87%</span>
                </div>
                <div className="bg-green-400/20 h-2 border border-green-400">
                  <div className="bg-green-400 h-full w-[87%] animate-pulse"></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-cyan-400">MEMORY:</span>
                  <span className="text-green-400">12.4GB</span>
                </div>
                <div className="bg-cyan-400/20 h-2 border border-cyan-400">
                  <div className="bg-cyan-400 h-full w-[74%] animate-pulse"></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-pink-500">NET_CONN:</span>
                  <span className="text-green-400">SECURE</span>
                </div>
              </div>

              <div className="mt-6 text-center">
                <Button className="bg-green-400/20 hover:bg-green-400/30 text-green-400 border border-green-400 font-mono">
                  &gt; JACK_IN
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              <div className="border border-cyan-400 bg-cyan-400/10 p-4">
                <div className="text-cyan-400 font-mono text-center">
                  <div className="text-2xl mb-2">2077</div>
                  <div className="text-sm">NIGHT CITY</div>
                </div>
              </div>

              <div className="border border-pink-500 bg-pink-500/10 p-4">
                <div className="text-pink-500 font-mono text-center">
                  <div className="text-lg mb-2">NEON_DREAMS</div>
                  <div className="text-xs">Augmented reality</div>
                </div>
              </div>

              <div className="border border-yellow-400 bg-yellow-400/10 p-4">
                <div className="text-yellow-400 font-mono text-center">
                  <div className="text-lg mb-2">CHROME_CORP</div>
                  <div className="text-xs">Mega corporation</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 border-2 border-green-400 bg-black/90 p-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400 mb-4 font-mono">&gt; TERMINAL_ACCESS</div>

              <div className="bg-black border border-green-400 p-4 text-left font-mono text-sm">
                <div className="text-green-400">
                  <span className="text-cyan-400">user@cyberdeck:~$</span> ls -la
                </div>
                <div className="text-green-400 opacity-80">
                  drwxr-xr-x 2 user user 4096 Dec 25 23:59 neural_implants/
                </div>
                <div className="text-green-400 opacity-80">-rw-r--r-- 1 user user 2048 Dec 25 23:58 hack_tools.exe</div>
                <div className="text-green-400 opacity-80">
                  -rw-r--r-- 1 user user 1024 Dec 25 23:57 encrypted_data.bin
                </div>
                <div className="text-green-400">
                  <span className="text-cyan-400">user@cyberdeck:~$</span> <span className="animate-pulse">_</span>
                </div>
              </div>

              <div className="mt-6 flex justify-center gap-4">
                <Button className="bg-green-400/20 hover:bg-green-400/30 text-green-400 border border-green-400 font-mono">
                  HACK
                </Button>
                <Button className="bg-pink-500/20 hover:bg-pink-500/30 text-pink-500 border border-pink-500 font-mono">
                  DECRYPT
                </Button>
                <Button className="bg-cyan-400/20 hover:bg-cyan-400/30 text-cyan-400 border border-cyan-400 font-mono">
                  UPLOAD
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderCurrentDesign = () => {
    const design = designs[currentDesign]
    switch (design.id) {
      case "bauhaus":
        return <BauhausDesign />
      case "artdeco":
        return <ArtDecoDesign />
      case "swiss":
        return <SwissDesign />
      case "memphis":
        return <MemphisDesign />
      case "skeuomorphism":
        return <SkeuomorphismDesign />
      case "flat":
        return <FlatDesign />
      case "material":
        return <MaterialDesign />
      case "neumorphism":
        return <NeumorphismDesign />
      case "brutalism":
        return <BrutalismDesign />
      case "glassmorphism":
        return <GlassmorphismDesign />
      case "darkmode":
        return <DarkModeDesign />
      case "claymorphism":
        return <ClaymorphismDesign />
      case "vaporwave":
        return <VaporwaveDesign />
      case "y2k":
        return <Y2KDesign />
      case "frutiger":
        return <FrutigerAeroDesign />
      case "cyberpunk":
        return <CyberpunkDesign />
      default:
        return <BauhausDesign />
    }
  }

  return (
    <div className="relative">
      {renderCurrentDesign()}

      {/* Navigation Controls */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-black/80 backdrop-blur-xl rounded-full px-6 py-3 flex items-center gap-4 border border-white/20">
          <Button
            onClick={prevDesign}
            className="bg-white/20 hover:bg-white/30 text-white border-0 rounded-full w-10 h-10 p-0"
          >
            <ArrowLeft className="w-4 h-4" />
          </Button>

          <div className="text-white text-sm font-medium min-w-32 text-center">{designs[currentDesign].name}</div>

          <Button
            onClick={nextDesign}
            className="bg-white/20 hover:bg-white/30 text-white border-0 rounded-full w-10 h-10 p-0"
          >
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Design Counter */}
      <div className="fixed top-8 right-8 z-50">
        <div className="bg-black/80 backdrop-blur-xl rounded-lg px-4 py-2 border border-white/20">
          <div className="text-white text-sm">
            {currentDesign + 1} / {designs.length}
          </div>
        </div>
      </div>
    </div>
  )
}
