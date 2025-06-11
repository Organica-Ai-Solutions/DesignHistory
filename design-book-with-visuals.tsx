"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Bookmark,
  Share,
  Download,
  Menu,
  Palette,
  Monitor,
  Sparkles,
  Eye,
  Grid,
  Gem,
  Square,
  Triangle,
  Circle,
  Zap,
  Layers,
  Cpu,
  Leaf,
  Music,
  Gamepad2,
  Play,
  Pause,
  ArrowLeft,
  ArrowRight,
  Volume2,
  Settings,
  User,
  Mail,
  Calendar,
  Clock,
  Wifi,
  Battery,
  Signal,
  DownloadIcon,
  ShareIcon,
  Heart,
  Star,
  Search,
  Home,
  Sun,
  Cloud,
  Droplets,
  Wind,
} from "lucide-react"

const bookPages = [
  { id: "cover", type: "cover", title: "Cover" },
  { id: "toc", type: "toc", title: "Table of Contents" },
  { id: "intro", type: "intro", title: "Introduction" },

  // Historical Chapter
  { id: "historical-divider", type: "chapter-divider", chapter: "Historical Foundations", subtitle: "1900s - 1980s" },
  { id: "bauhaus", type: "style", style: "Bauhaus", period: "1919-1933", icon: Grid },
  { id: "artdeco", type: "style", style: "Art Deco", period: "1920s-1930s", icon: Gem },
  { id: "swiss", type: "style", style: "Swiss Design", period: "1950s-1960s", icon: Square },
  { id: "memphis", type: "style", style: "Memphis Design", period: "1980s", icon: Triangle },

  // Digital Chapter
  { id: "digital-divider", type: "chapter-divider", chapter: "The Digital Revolution", subtitle: "1990s - 2010s" },
  { id: "skeuomorphism", type: "style", style: "Skeuomorphism", period: "2000s-2010s", icon: Eye },
  { id: "flat", type: "style", style: "Flat Design", period: "2010s", icon: Square },
  { id: "material", type: "style", style: "Material Design", period: "2014-Present", icon: Layers },
  { id: "neumorphism", type: "style", style: "Neumorphism", period: "2019-2020", icon: Circle },

  // Contemporary Chapter
  {
    id: "contemporary-divider",
    type: "chapter-divider",
    chapter: "Contemporary Movements",
    subtitle: "2010s - Present",
  },
  { id: "brutalism", type: "style", style: "Brutalism", period: "2010s-Present", icon: Zap },
  { id: "glassmorphism", type: "style", style: "Glassmorphism", period: "2020-Present", icon: Eye },
  { id: "darkmode", type: "style", style: "Dark Mode", period: "2018-Present", icon: Monitor },
  { id: "claymorphism", type: "style", style: "Claymorphism", period: "2021-Present", icon: Circle },

  // Aesthetic Chapter
  { id: "aesthetic-divider", type: "chapter-divider", chapter: "Digital Aesthetics", subtitle: "Cultural Phenomena" },
  { id: "vaporwave", type: "style", style: "Vaporwave", period: "2010s-Present", icon: Music },
  { id: "y2k", type: "style", style: "Y2K", period: "Late 90s-Early 2000s", icon: Cpu },
  { id: "frutiger", type: "style", style: "Frutiger Aero", period: "2004-2013", icon: Leaf },
  { id: "cyberpunk", type: "style", style: "Cyberpunk", period: "1980s-Present", icon: Gamepad2 },

  { id: "conclusion", type: "conclusion", title: "The Future of Design" },
]

export default function DesignBookWithVisuals() {
  const [currentPage, setCurrentPage] = useState(0)
  const [showTableOfContents, setShowTableOfContents] = useState(false)
  const [bookmarkPage, setBookmarkPage] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const totalPages = bookPages.length

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
    }
  }

  const goToPage = (pageIndex) => {
    setCurrentPage(pageIndex)
    setShowTableOfContents(false)
  }

  const getCurrentPageData = () => {
    return bookPages[currentPage]
  }

  // All the design components from the original showcase
  const BauhausDesign = () => (
    <div className="bg-white min-h-[600px] p-8">
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
            <div className="w-full h-24 bg-red-500"></div>
            <div className="w-full h-24 bg-blue-500"></div>
            <div className="w-full h-24 bg-yellow-500"></div>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-4 gap-4">
          <div className="bg-black text-white p-4 text-center">
            <div className="w-6 h-6 border-2 border-white mx-auto mb-2"></div>
            <div className="text-sm font-bold">GEOMETRY</div>
          </div>
          <div className="bg-red-500 text-white p-4 text-center">
            <div className="w-6 h-6 bg-white mx-auto mb-2 rounded-full"></div>
            <div className="text-sm font-bold">PRIMARY</div>
          </div>
          <div className="bg-blue-500 text-white p-4 text-center">
            <div className="w-0 h-0 border-l-3 border-r-3 border-b-6 border-l-transparent border-r-transparent border-b-white mx-auto mb-2"></div>
            <div className="text-sm font-bold">FUNCTION</div>
          </div>
          <div className="bg-yellow-500 text-black p-4 text-center">
            <div className="w-6 h-2 bg-black mx-auto mb-2"></div>
            <div className="text-sm font-bold">MINIMAL</div>
          </div>
        </div>
      </div>
    </div>
  )

  const ArtDecoDesign = () => (
    <div className="bg-gradient-to-b from-black via-gray-900 to-black min-h-[600px] text-white p-8">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-64 h-64 border-4 border-yellow-400 rotate-45"></div>
        </div>
        <div className="relative z-10">
          <div className="text-center mb-8">
            <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent">
              DECO
            </h1>
            <div className="w-full h-1 bg-gradient-to-r from-yellow-400 to-yellow-600"></div>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 p-6 text-black text-center">
              <div className="text-3xl font-bold mb-2">1925</div>
              <div className="text-lg">EXPOSITION</div>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 border-4 border-yellow-400 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 mx-auto mb-4 transform rotate-45"></div>
              <div className="text-xl font-bold">LUXURY</div>
            </div>

            <div className="bg-gradient-to-br from-yellow-600 to-yellow-800 p-6 text-black text-center">
              <div className="text-2xl font-bold mb-2">GLAMOUR</div>
              <div className="space-y-2">
                <div className="w-full h-1 bg-black"></div>
                <div className="w-3/4 h-1 bg-black mx-auto"></div>
                <div className="w-1/2 h-1 bg-black mx-auto"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const SwissDesign = () => (
    <div className="bg-white min-h-[600px] p-8">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-8">
            <h1 className="text-5xl font-light text-black mb-8" style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>
              Swiss Design
            </h1>
            <div className="bg-red-500 h-16 mb-6"></div>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-lg leading-relaxed text-black mb-4">
                  International Typographic Style emphasizes cleanliness, readability, and objectivity.
                </p>
                <div className="space-y-2">
                  <div className="text-sm text-gray-600">Grid Systems</div>
                  <div className="text-sm text-gray-600">Sans-serif Typography</div>
                  <div className="text-sm text-gray-600">Asymmetrical Layouts</div>
                </div>
              </div>
              <div className="bg-gray-100 p-4">
                <div className="space-y-3">
                  <div className="w-full h-2 bg-black"></div>
                  <div className="w-3/4 h-2 bg-gray-400"></div>
                  <div className="w-1/2 h-2 bg-gray-300"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-4">
            <div className="bg-black text-white p-6 text-center mb-4">
              <div className="text-3xl font-light mb-2">1957</div>
              <div className="text-sm">HELVETICA</div>
            </div>
            <div className="bg-gray-100 p-4 text-center">
              <div className="text-xl font-light text-black mb-2">GRID</div>
              <div className="grid grid-cols-3 gap-1">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="aspect-square bg-gray-300"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const MemphisDesign = () => (
    <div className="bg-gradient-to-br from-pink-400 via-yellow-300 to-cyan-400 min-h-[600px] overflow-hidden relative p-8">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-24 h-24 bg-red-500 rotate-45"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-blue-500 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-32 h-6 bg-green-500 rotate-12"></div>
        <div className="absolute bottom-10 right-10 w-12 h-12 bg-purple-500"></div>
      </div>

      <div className="relative z-10">
        <div className="text-center">
          <h1 className="text-6xl font-black text-black mb-8 transform -rotate-2">MEMPHIS</h1>

          <div className="grid grid-cols-3 gap-6">
            <div className="bg-black text-white p-6 transform rotate-3 text-center">
              <div className="w-12 h-12 bg-yellow-400 mx-auto mb-4 rounded-full"></div>
              <div className="text-xl font-bold">PLAYFUL</div>
            </div>

            <div className="bg-white text-black p-6 transform -rotate-2 border-8 border-black text-center">
              <div className="w-12 h-3 bg-red-500 mx-auto mb-4"></div>
              <div className="text-xl font-bold">BOLD</div>
            </div>

            <div className="bg-green-400 text-black p-6 transform rotate-1 text-center">
              <div className="w-12 h-12 bg-purple-500 mx-auto mb-4 transform rotate-45"></div>
              <div className="text-xl font-bold">RADICAL</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const SkeuomorphismDesign = () => (
    <div className="bg-gradient-to-b from-gray-200 to-gray-400 min-h-[600px] p-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-gradient-to-b from-gray-100 to-gray-300 rounded-2xl shadow-2xl p-6 border border-gray-400">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Music Player</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="bg-gradient-to-b from-gray-800 to-black rounded-xl p-6 shadow-inner">
            <div className="bg-gradient-to-br from-gray-700 to-gray-900 rounded-full w-32 h-32 mx-auto shadow-2xl relative">
              <div className="absolute inset-3 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full shadow-inner">
                <div className="absolute inset-6 bg-gradient-to-br from-gray-800 to-black rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                </div>
              </div>
            </div>

            <div className="text-center mt-6 text-white">
              <div className="text-lg font-semibold mb-1">Now Playing</div>
              <div className="text-sm text-gray-300">Ambient Sounds</div>
            </div>
          </div>

          <div className="mt-6 flex justify-center gap-3">
            <Button className="bg-gradient-to-b from-gray-300 to-gray-500 hover:from-gray-200 hover:to-gray-400 text-gray-800 shadow-lg border border-gray-400 rounded-full w-10 h-10 p-0">
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <Button
              onClick={() => setIsPlaying(!isPlaying)}
              className="bg-gradient-to-b from-blue-400 to-blue-600 hover:from-blue-300 hover:to-blue-500 shadow-lg border border-blue-300 rounded-full w-12 h-12 p-0"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </Button>
            <Button className="bg-gradient-to-b from-gray-300 to-gray-500 hover:from-gray-200 hover:to-gray-400 text-gray-800 shadow-lg border border-gray-400 rounded-full w-10 h-10 p-0">
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )

  const FlatDesign = () => (
    <div className="bg-blue-500 min-h-[600px] p-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-light text-white mb-4">Flat Design</h1>
          <div className="w-24 h-1 bg-white mx-auto"></div>
        </div>

        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 text-center">
            <div className="w-12 h-12 bg-red-500 mx-auto mb-4"></div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Simple</h3>
            <p className="text-gray-600 text-sm">No shadows or textures</p>
          </div>

          <div className="bg-white p-6 text-center">
            <div className="w-12 h-12 bg-green-500 mx-auto mb-4 rounded-full"></div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Clean</h3>
            <p className="text-gray-600 text-sm">Focus on content</p>
          </div>

          <div className="bg-white p-6 text-center">
            <div className="w-12 h-12 bg-orange-500 mx-auto mb-4"></div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Minimal</h3>
            <p className="text-gray-600 text-sm">Less is more</p>
          </div>
        </div>

        <div className="bg-white p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-800">Dashboard</h2>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white">Settings</Button>
          </div>

          <div className="grid grid-cols-4 gap-3">
            <div className="bg-red-500 text-white p-4 text-center">
              <div className="text-2xl font-bold">42</div>
              <div className="text-xs">Projects</div>
            </div>
            <div className="bg-green-500 text-white p-4 text-center">
              <div className="text-2xl font-bold">18</div>
              <div className="text-xs">Completed</div>
            </div>
            <div className="bg-orange-500 text-white p-4 text-center">
              <div className="text-2xl font-bold">7</div>
              <div className="text-xs">In Progress</div>
            </div>
            <div className="bg-purple-500 text-white p-4 text-center">
              <div className="text-2xl font-bold">3</div>
              <div className="text-xs">Pending</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const MaterialDesign = () => (
    <div className="bg-gray-100 min-h-[600px]">
      <div className="bg-blue-500 text-white p-4 shadow-lg">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <h1 className="text-xl font-medium">Material Design</h1>
          <div className="flex items-center gap-3">
            <Search className="w-5 h-5" />
            <Menu className="w-5 h-5" />
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto p-6">
        <div className="grid grid-cols-3 gap-4 mb-6">
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="bg-red-500 text-white p-4">
              <h3 className="font-semibold">Paper Metaphor</h3>
            </div>
            <CardContent className="p-4">
              <p className="text-gray-600 text-sm mb-3">Digital material inspired by paper</p>
              <Button className="bg-red-500 hover:bg-red-600 text-white shadow-md text-sm">Learn More</Button>
            </CardContent>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="bg-green-500 text-white p-4">
              <h3 className="font-semibold">Bold Colors</h3>
            </div>
            <CardContent className="p-4">
              <p className="text-gray-600 text-sm mb-3">Vibrant hues and motion</p>
              <Button className="bg-green-500 hover:bg-green-600 text-white shadow-md text-sm">Explore</Button>
            </CardContent>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="bg-orange-500 text-white p-4">
              <h3 className="font-semibold">Elevation</h3>
            </div>
            <CardContent className="p-4">
              <p className="text-gray-600 text-sm mb-3">Surfaces create hierarchy</p>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white shadow-md text-sm">Discover</Button>
            </CardContent>
          </Card>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-medium text-gray-800 mb-4">Floating Action Button</h2>
          <div className="flex gap-3">
            <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full w-12 h-12 shadow-lg p-0">
              <Heart className="w-5 h-5" />
            </Button>
            <Button className="bg-pink-500 hover:bg-pink-600 text-white rounded-full w-12 h-12 shadow-lg p-0">
              <ShareIcon className="w-5 h-5" />
            </Button>
            <Button className="bg-purple-500 hover:bg-purple-600 text-white rounded-full w-12 h-12 shadow-lg p-0">
              <DownloadIcon className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )

  const NeumorphismDesign = () => (
    <div className="bg-gray-200 min-h-[600px] p-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-light text-gray-700 mb-4">Neumorphism</h1>
          <p className="text-gray-600">Soft UI with subtle depth</p>
        </div>

        <div className="bg-gray-200 p-6 rounded-3xl shadow-inner">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-200 p-6 rounded-2xl shadow-lg">
              <h2 className="text-xl font-light text-gray-700 mb-4">Music Player</h2>

              <div className="bg-gray-200 w-32 h-32 mx-auto rounded-full shadow-inner mb-6 flex items-center justify-center">
                <div className="bg-gray-200 w-24 h-24 rounded-full shadow-lg flex items-center justify-center">
                  <Button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-700 w-12 h-12 rounded-full shadow-lg border-0"
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </Button>
                </div>
              </div>

              <div className="bg-gray-200 p-3 rounded-xl shadow-inner">
                <div className="flex items-center gap-2">
                  <Volume2 className="w-4 h-4 text-gray-600" />
                  <div className="flex-1 bg-gray-200 rounded-full h-2 shadow-inner">
                    <div className="bg-blue-400 h-full w-3/4 rounded-full shadow-sm"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-200 p-4 rounded-2xl shadow-lg">
                <h3 className="text-lg font-light text-gray-700 mb-3">Controls</h3>
                <div className="grid grid-cols-2 gap-3">
                  <Button className="bg-gray-200 hover:bg-gray-300 text-gray-700 p-3 rounded-xl shadow-lg border-0">
                    <Settings className="w-5 h-5" />
                  </Button>
                  <Button className="bg-gray-200 hover:bg-gray-300 text-gray-700 p-3 rounded-xl shadow-lg border-0">
                    <User className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              <div className="bg-gray-200 p-4 rounded-2xl shadow-inner">
                <h3 className="text-lg font-light text-gray-700 mb-3">Status</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm">Battery</span>
                    <span className="text-gray-700 font-medium text-sm">85%</span>
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
    <div className="bg-black min-h-[600px] text-white overflow-hidden">
      <div className="border-4 border-red-500 m-4 min-h-[550px]">
        <div className="border-2 border-white m-2 min-h-[530px] p-6">
          <div className="text-center mb-6">
            <h1 className="text-6xl font-black text-white mb-4 transform -skew-x-12">BRUTAL</h1>
            <div className="bg-red-500 h-3 w-full"></div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="border-4 border-green-500 p-6 bg-white text-black">
              <h2 className="text-3xl font-black mb-3">RAW</h2>
              <p className="text-lg font-bold leading-tight">BREAKING CONVENTIONAL RULES. INTENTIONALLY CRUDE.</p>
              <div className="mt-4 space-y-2">
                <div className="bg-black text-white p-2 text-center font-black text-sm">FUNCTION</div>
                <div className="bg-red-500 text-white p-2 text-center font-black text-sm">OVER</div>
                <div className="bg-green-500 text-black p-2 text-center font-black text-sm">FORM</div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="bg-red-500 text-white p-4 border-4 border-white">
                <div className="text-2xl font-black">ERROR 404</div>
                <div className="text-sm font-bold">PAGE NOT FOUND</div>
              </div>

              <div className="bg-green-500 text-black p-4 border-4 border-black">
                <div className="text-lg font-black mb-2">SUBMIT</div>
                <div className="bg-black text-white p-2 text-center font-bold text-sm">CLICK HERE</div>
              </div>

              <div className="bg-blue-500 text-white p-4 border-4 border-yellow-500">
                <div className="text-lg font-black mb-1">WARNING</div>
                <div className="font-bold text-sm">SYSTEM OVERLOAD</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const GlassmorphismDesign = () => (
    <div className="min-h-[600px] relative overflow-hidden bg-gradient-to-br from-purple-400 via-pink-500 to-red-500">
      <div className="absolute inset-0">
        <div className="absolute top-16 left-16 w-48 h-48 bg-white/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-16 right-16 w-64 h-64 bg-blue-500/30 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-yellow-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 p-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-light text-white mb-4 drop-shadow-lg">Glassmorphism</h1>
            <p className="text-white/80 text-lg">Frosted glass aesthetic</p>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-6">
            <Card className="bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl">
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-sm">Profile</h3>
                    <p className="text-white/70 text-xs">Settings</p>
                  </div>
                </div>
                <Button className="w-full bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm text-xs">
                  View Profile
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl">
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-sm">Messages</h3>
                    <p className="text-white/70 text-xs">3 unread</p>
                  </div>
                </div>
                <Button className="w-full bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm text-xs">
                  Open Messages
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/15 backdrop-blur-xl border border-white/25 shadow-2xl">
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 bg-white/25 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Settings className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-sm">Settings</h3>
                    <p className="text-white/70 text-xs">Preferences</p>
                  </div>
                </div>
                <Button className="w-full bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm text-xs">
                  Configure
                </Button>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Dashboard</h2>
              <div className="grid grid-cols-4 gap-3">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 border border-white/30 text-center">
                  <div className="text-2xl font-bold text-white">42</div>
                  <div className="text-white/70 text-xs">Projects</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 border border-white/30 text-center">
                  <div className="text-2xl font-bold text-white">18</div>
                  <div className="text-white/70 text-xs">Completed</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 border border-white/30 text-center">
                  <div className="text-2xl font-bold text-white">7</div>
                  <div className="text-white/70 text-xs">In Progress</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 border border-white/30 text-center">
                  <div className="text-2xl font-bold text-white">3</div>
                  <div className="text-white/70 text-xs">Pending</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )

  const DarkModeDesign = () => (
    <div className="bg-gray-900 min-h-[600px] text-white">
      <div className="bg-gray-800 border-b border-gray-700 p-3">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <h1 className="text-xl font-semibold">Dark Mode Interface</h1>
          <div className="flex items-center gap-3">
            <div className="bg-purple-600 text-white px-2 py-1 rounded text-xs font-medium">Pro</div>
            <div className="flex items-center gap-2">
              <Signal className="w-3 h-3 text-gray-400" />
              <Wifi className="w-3 h-3 text-gray-400" />
              <Battery className="w-3 h-3 text-green-400" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto p-6">
        <div className="grid grid-cols-3 gap-4 mb-6">
          <Card className="bg-gray-800 border-gray-700">
            <div className="p-4">
              <h3 className="text-white flex items-center gap-2 mb-3">
                <Home className="w-4 h-4" />
                Dashboard
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 text-sm">Active Users</span>
                  <span className="text-white font-semibold text-sm">1,234</span>
                </div>
                <div className="bg-gray-700 rounded-full h-2">
                  <div className="bg-purple-500 h-full w-3/4 rounded-full"></div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <div className="p-4">
              <h3 className="text-white flex items-center gap-2 mb-3">
                <Calendar className="w-4 h-4" />
                Schedule
              </h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <div>
                    <div className="text-white text-xs">Team Meeting</div>
                    <div className="text-gray-400 text-xs">10:00 AM</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <div>
                    <div className="text-white text-xs">Project Review</div>
                    <div className="text-gray-400 text-xs">2:00 PM</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <div className="p-4">
              <h3 className="text-white flex items-center gap-2 mb-3">
                <Clock className="w-4 h-4" />
                Activity
              </h3>
              <div className="space-y-2">
                <div className="text-xs">
                  <div className="text-white">File uploaded</div>
                  <div className="text-gray-400">2 min ago</div>
                </div>
                <div className="text-xs">
                  <div className="text-white">Task completed</div>
                  <div className="text-gray-400">5 min ago</div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <Card className="bg-gray-800 border-gray-700">
          <div className="p-6">
            <h2 className="text-white text-lg font-semibold mb-4">System Status</h2>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-600 rounded-full mx-auto mb-2 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="text-white font-semibold text-sm">System Online</div>
                <div className="text-gray-400 text-xs">All services running</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full mx-auto mb-2 flex items-center justify-center">
                  <Wifi className="w-6 h-6 text-white" />
                </div>
                <div className="text-white font-semibold text-sm">Network Stable</div>
                <div className="text-gray-400 text-xs">Low latency</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-600 rounded-full mx-auto mb-2 flex items-center justify-center">
                  <Battery className="w-6 h-6 text-white" />
                </div>
                <div className="text-white font-semibold text-sm">Power Optimal</div>
                <div className="text-gray-400 text-xs">85% remaining</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )

  const ClaymorphismDesign = () => (
    <div className="bg-gradient-to-br from-orange-200 to-pink-200 min-h-[600px] p-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Claymorphism</h1>
          <p className="text-gray-600 text-lg">3D clay-like soft elements</p>
        </div>

        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-red-400 to-red-500 p-6 rounded-3xl shadow-2xl transform hover:scale-105 transition-transform">
            <div className="text-center text-white">
              <div className="w-12 h-12 bg-white/30 rounded-full mx-auto mb-3 flex items-center justify-center shadow-lg">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-1">Favorites</h3>
              <p className="text-white/80 text-sm">24 items saved</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-400 to-blue-500 p-6 rounded-3xl shadow-2xl transform hover:scale-105 transition-transform">
            <div className="text-center text-white">
              <div className="w-12 h-12 bg-white/30 rounded-full mx-auto mb-3 flex items-center justify-center shadow-lg">
                <Star className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-1">Reviews</h3>
              <p className="text-white/80 text-sm">4.8 rating</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-400 to-green-500 p-6 rounded-3xl shadow-2xl transform hover:scale-105 transition-transform">
            <div className="text-center text-white">
              <div className="w-12 h-12 bg-white/30 rounded-full mx-auto mb-3 flex items-center justify-center shadow-lg">
                <DownloadIcon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-1">Downloads</h3>
              <p className="text-white/80 text-sm">1.2k this month</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-400 to-purple-500 p-6 rounded-3xl shadow-2xl">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Music Player</h2>

          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 mb-4">
            <div className="text-center text-white">
              <div className="text-lg font-semibold mb-1">Now Playing</div>
              <div className="text-sm text-white/80">Chill Vibes Playlist</div>
            </div>
          </div>

          <div className="flex justify-center gap-4 mb-4">
            <Button className="bg-white/30 hover:bg-white/40 text-white w-12 h-12 rounded-full shadow-lg border-0">
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <Button
              onClick={() => setIsPlaying(!isPlaying)}
              className="bg-white/40 hover:bg-white/50 text-white w-16 h-16 rounded-full shadow-lg border-0"
            >
              {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
            </Button>
            <Button className="bg-white/30 hover:bg-white/40 text-white w-12 h-12 rounded-full shadow-lg border-0">
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          <div className="bg-white/20 rounded-2xl p-3">
            <div className="flex items-center gap-2">
              <Volume2 className="w-4 h-4 text-white" />
              <div className="flex-1 bg-white/30 rounded-full h-2 shadow-inner">
                <div className="bg-white h-full w-2/3 rounded-full shadow-sm"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const VaporwaveDesign = () => (
    <div className="bg-gradient-to-b from-purple-900 via-pink-500 to-cyan-400 min-h-[600px] overflow-hidden relative">
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 800 200" className="w-full h-32">
            <defs>
              <linearGradient id="grid" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ff00ff" />
                <stop offset="100%" stopColor="#00ffff" />
              </linearGradient>
            </defs>
            {[...Array(15)].map((_, i) => (
              <line key={i} x1={i * 53} y1="0" x2={i * 53} y2="200" stroke="url(#grid)" strokeWidth="1" opacity="0.6" />
            ))}
            {[...Array(8)].map((_, i) => (
              <line key={i} x1="0" y1={i * 25} x2="800" y2={i * 25} stroke="url(#grid)" strokeWidth="1" opacity="0.6" />
            ))}
          </svg>
        </div>
      </div>

      <div className="relative z-10 p-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            ＶＡＰＯＲＷＡＶＥ
          </h1>
          <div className="text-xl text-white mb-8 font-mono">ａ ｅ ｓ ｔ ｈ ｅ ｔ ｉ ｃ</div>

          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-pink-500/80 to-purple-600/80 backdrop-blur-sm p-4 border border-cyan-400/50">
              <div className="text-center text-white">
                <div className="text-3xl mb-2">🌴</div>
                <div className="text-lg font-bold mb-1">ＲＥＴＲＯ</div>
                <div className="text-xs opacity-80">Nostalgic vibes</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-500/80 to-blue-600/80 backdrop-blur-sm p-4 border border-pink-400/50">
              <div className="text-center text-white">
                <div className="text-3xl mb-2">🌊</div>
                <div className="text-lg font-bold mb-1">ＷＡＶＥ</div>
                <div className="text-xs opacity-80">Synthwave sounds</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-500/80 to-pink-600/80 backdrop-blur-sm p-4 border border-cyan-400/50">
              <div className="text-center text-white">
                <div className="text-3xl mb-2">🌙</div>
                <div className="text-lg font-bold mb-1">ＮＩＧＨＴ</div>
                <div className="text-xs opacity-80">Neon dreams</div>
              </div>
            </div>
          </div>

          <div className="bg-black/60 backdrop-blur-sm p-6 border-2 border-cyan-400">
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-400 mb-3">ＮＯＷ ＰＬＡＹＩＮＧ</div>
              <div className="text-lg text-pink-400 mb-4">Midnight City - Synthwave Mix</div>

              <div className="flex justify-center gap-4 mb-4">
                <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white border border-cyan-400 w-10 h-10 p-0">
                  <ArrowLeft className="w-4 h-4" />
                </Button>
                <Button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white border border-pink-400 w-12 h-12 p-0"
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                </Button>
                <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white border border-cyan-400 w-10 h-10 p-0">
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>

              <div className="bg-black/40 p-3 border border-cyan-400/50">
                <div className="flex items-center gap-2">
                  <Volume2 className="w-4 h-4 text-cyan-400" />
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
    <div className="bg-gradient-to-br from-silver via-blue-400 to-purple-500 min-h-[600px] overflow-hidden relative">
      <div className="absolute inset-0">
        <div className="absolute top-8 left-8 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-60 blur-sm"></div>
        <div className="absolute top-16 right-16 w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 opacity-60 blur-sm"></div>
        <div className="absolute bottom-16 left-16 w-32 h-32 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full opacity-60 blur-sm"></div>
      </div>

      <div className="relative z-10 p-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
              Y2K
            </h1>
            <div className="text-xl text-white font-bold">MILLENNIUM AESTHETIC</div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/30 shadow-2xl">
              <h2 className="text-2xl font-bold text-white mb-4">CYBER PORTAL</h2>

              <div className="space-y-3">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-3 rounded-lg text-black font-bold text-center text-sm">
                  ENTER THE MATRIX
                </div>
                <div className="bg-gradient-to-r from-green-400 to-blue-500 p-3 rounded-lg text-white font-bold text-center text-sm">
                  DIGITAL REVOLUTION
                </div>
                <div className="bg-gradient-to-r from-pink-400 to-purple-500 p-3 rounded-lg text-white font-bold text-center text-sm">
                  FUTURE IS NOW
                </div>
              </div>

              <div className="mt-4 text-center">
                <Button className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-white font-bold px-6 py-2 rounded-full shadow-lg">
                  CONNECT
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gradient-to-br from-yellow-400/80 to-orange-500/80 p-4 rounded-2xl shadow-2xl">
                <div className="text-center text-black">
                  <div className="text-3xl font-bold mb-1">2000</div>
                  <div className="text-sm font-semibold">MILLENNIUM BUG</div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-400/80 to-blue-500/80 p-4 rounded-2xl shadow-2xl">
                <div className="text-center text-white">
                  <div className="text-xl font-bold mb-1">CHROME</div>
                  <div className="text-xs">Metallic textures</div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-pink-400/80 to-purple-500/80 p-4 rounded-2xl shadow-2xl">
                <div className="text-center text-white">
                  <div className="text-xl font-bold mb-1">HOLOGRAM</div>
                  <div className="text-xs">Iridescent effects</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-black/60 to-gray-900/60 backdrop-blur-xl p-6 rounded-2xl border border-cyan-400/50">
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-400 mb-3">SYSTEM STATUS</div>
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-green-500/80 p-3 rounded-lg text-center">
                  <div className="text-lg font-bold text-white">ONLINE</div>
                  <div className="text-xs text-white/80">All systems go</div>
                </div>
                <div className="bg-yellow-500/80 p-3 rounded-lg text-center">
                  <div className="text-lg font-bold text-black">LOADING</div>
                  <div className="text-xs text-black/80">Processing data</div>
                </div>
                <div className="bg-blue-500/80 p-3 rounded-lg text-center">
                  <div className="text-lg font-bold text-white">SECURE</div>
                  <div className="text-xs text-white/80">Encrypted connection</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const FrutigerAeroDesign = () => (
    <div className="bg-gradient-to-br from-sky-300 via-emerald-200 to-blue-400 min-h-[600px] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-16 left-8 w-64 h-64 bg-gradient-to-br from-cyan-300/30 to-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-16 right-8 w-48 h-48 bg-gradient-to-tl from-emerald-300/40 to-teal-400/30 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-r from-lime-300/20 to-cyan-300/30 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
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
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-light text-white mb-4 drop-shadow-lg">Frutiger Aero</h1>
            <p className="text-white/90 text-lg">Clean, nature-inspired design</p>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-6">
            <Card className="bg-white/30 backdrop-blur-xl border-white/40 shadow-2xl hover:shadow-3xl transition-all duration-300">
              <CardContent className="p-4 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full mx-auto mb-3 flex items-center justify-center shadow-lg">
                  <Droplets className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 drop-shadow-md">Water</h3>
                <p className="text-white/80 text-sm">Pure and refreshing</p>
              </CardContent>
            </Card>

            <Card className="bg-white/30 backdrop-blur-xl border-white/40 shadow-2xl hover:shadow-3xl transition-all duration-300">
              <CardContent className="p-4 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full mx-auto mb-3 flex items-center justify-center shadow-lg">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 drop-shadow-md">Nature</h3>
                <p className="text-white/80 text-sm">Eco-friendly living</p>
              </CardContent>
            </Card>

            <Card className="bg-white/30 backdrop-blur-xl border-white/40 shadow-2xl hover:shadow-3xl transition-all duration-300">
              <CardContent className="p-4 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full mx-auto mb-3 flex items-center justify-center shadow-lg">
                  <Sun className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 drop-shadow-md">Energy</h3>
                <p className="text-white/80 text-sm">Sustainable power</p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-white/20 backdrop-blur-2xl border-white/30 shadow-2xl">
            <CardContent className="p-6">
              <h2 className="text-2xl font-light text-white mb-4 text-center drop-shadow-md">
                Environmental Dashboard
              </h2>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-white/90 flex items-center gap-2 text-sm">
                      <Cloud className="w-3 h-3" />
                      Air Quality
                    </span>
                    <span className="text-white font-semibold text-sm">Excellent</span>
                  </div>
                  <div className="bg-white/20 rounded-full h-2 shadow-inner">
                    <div className="bg-gradient-to-r from-green-400 to-emerald-500 h-full w-[90%] rounded-full shadow-sm"></div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-white/90 flex items-center gap-2 text-sm">
                      <Droplets className="w-3 h-3" />
                      Water Purity
                    </span>
                    <span className="text-white font-semibold text-sm">95%</span>
                  </div>
                  <div className="bg-white/20 rounded-full h-2 shadow-inner">
                    <div className="bg-gradient-to-r from-blue-400 to-cyan-500 h-full w-[95%] rounded-full shadow-sm"></div>
                  </div>
                </div>

                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                  <div className="text-center">
                    <div className="text-3xl font-light text-white mb-2">22°C</div>
                    <div className="text-white/80 mb-3 text-sm">Perfect Temperature</div>
                    <div className="flex justify-center gap-3">
                      <div className="text-center">
                        <Sun className="w-5 h-5 text-yellow-400 mx-auto mb-1" />
                        <div className="text-xs text-white/80">Sunny</div>
                      </div>
                      <div className="text-center">
                        <Wind className="w-5 h-5 text-cyan-300 mx-auto mb-1" />
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
    <div className="bg-black min-h-[600px] text-green-400 overflow-hidden relative">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse delay-500"></div>
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-pink-500 to-transparent animate-pulse delay-1000"></div>
        <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-blue-500 to-transparent animate-pulse delay-1500"></div>
      </div>

      <div className="relative z-10 p-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 via-cyan-400 to-pink-500 bg-clip-text text-transparent">
              CYBERPUNK
            </h1>
            <div className="text-lg text-cyan-400 font-mono">&gt; HIGH TECH, LOW LIFE _</div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="border-2 border-green-400 bg-black/80 p-4">
              <div className="text-green-400 font-mono mb-3">
                <div className="text-lg mb-1">&gt; SYSTEM_STATUS.exe</div>
                <div className="text-xs opacity-80">Initializing neural interface...</div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-cyan-400 text-sm">CPU_LOAD:</span>
                  <span className="text-green-400 text-sm">87%</span>
                </div>
                <div className="bg-green-400/20 h-2 border border-green-400">
                  <div className="bg-green-400 h-full w-[87%] animate-pulse"></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-cyan-400 text-sm">MEMORY:</span>
                  <span className="text-green-400 text-sm">12.4GB</span>
                </div>
                <div className="bg-cyan-400/20 h-2 border border-cyan-400">
                  <div className="bg-cyan-400 h-full w-[74%] animate-pulse"></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-pink-500 text-sm">NET_CONN:</span>
                  <span className="text-green-400 text-sm">SECURE</span>
                </div>
              </div>

              <div className="mt-4 text-center">
                <Button className="bg-green-400/20 hover:bg-green-400/30 text-green-400 border border-green-400 font-mono text-sm">
                  &gt; JACK_IN
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <div className="border border-cyan-400 bg-cyan-400/10 p-3">
                <div className="text-cyan-400 font-mono text-center">
                  <div className="text-xl mb-1">2077</div>
                  <div className="text-xs">NIGHT CITY</div>
                </div>
              </div>

              <div className="border border-pink-500 bg-pink-500/10 p-3">
                <div className="text-pink-500 font-mono text-center">
                  <div className="text-sm mb-1">NEON_DREAMS</div>
                  <div className="text-xs">Augmented reality</div>
                </div>
              </div>

              <div className="border border-yellow-400 bg-yellow-400/10 p-3">
                <div className="text-yellow-400 font-mono text-center">
                  <div className="text-sm mb-1">CHROME_CORP</div>
                  <div className="text-xs">Mega corporation</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 border-2 border-green-400 bg-black/90 p-6">
            <div className="text-center">
              <div className="text-xl font-bold text-green-400 mb-3 font-mono">&gt; TERMINAL_ACCESS</div>

              <div className="bg-black border border-green-400 p-3 text-left font-mono text-xs">
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

              <div className="mt-4 flex justify-center gap-3">
                <Button className="bg-green-400/20 hover:bg-green-400/30 text-green-400 border border-green-400 font-mono text-xs">
                  HACK
                </Button>
                <Button className="bg-pink-500/20 hover:bg-pink-500/30 text-pink-500 border border-pink-500 font-mono text-xs">
                  DECRYPT
                </Button>
                <Button className="bg-cyan-400/20 hover:bg-cyan-400/30 text-cyan-400 border border-cyan-400 font-mono text-xs">
                  UPLOAD
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  // Cover and other pages remain the same...
  const CoverPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center p-8">
      <div className="max-w-2xl text-center">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
            <BookOpen className="w-16 h-16 text-white" />
          </div>
        </div>

        <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
          The Visual Evolution
        </h1>

        <h2 className="text-3xl font-light text-white/90 mb-8">A Journey Through Design Movements</h2>

        <div className="text-xl text-white/70 mb-12">by Design History Collective</div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <Palette className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
            <div className="text-white text-sm">Historical</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <Monitor className="w-8 h-8 text-blue-400 mx-auto mb-2" />
            <div className="text-white text-sm">Digital</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <Sparkles className="w-8 h-8 text-pink-400 mx-auto mb-2" />
            <div className="text-white text-sm">Contemporary</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <Eye className="w-8 h-8 text-purple-400 mx-auto mb-2" />
            <div className="text-white text-sm">Aesthetic</div>
          </div>
        </div>

        <div className="text-white/60 text-lg">{totalPages} Pages • 16 Design Movements • Interactive Examples</div>
      </div>
    </div>
  )

  const TableOfContents = () => {
    const chapters = [
      { title: "Introduction", subtitle: "The Language of Visual Design", pages: [2] },
      { title: "Historical Foundations", subtitle: "1900s - 1980s", pages: [3, 4, 5, 6, 7] },
      { title: "The Digital Revolution", subtitle: "1990s - 2010s", pages: [8, 9, 10, 11, 12] },
      { title: "Contemporary Movements", subtitle: "2010s - Present", pages: [13, 14, 15, 16, 17] },
      { title: "Digital Aesthetics", subtitle: "Cultural Phenomena", pages: [18, 19, 20, 21, 22] },
      { title: "Conclusion", subtitle: "The Future of Design", pages: [23] },
    ]

    return (
      <div className="min-h-screen bg-white p-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-light text-gray-800 mb-4">Table of Contents</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          </div>

          <div className="space-y-6">
            {chapters.map((chapter, index) => (
              <div
                key={index}
                onClick={() => goToPage(chapter.pages[0])}
                className="flex items-center justify-between p-6 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors group"
              >
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                      {chapter.title}
                    </h3>
                    <p className="text-gray-600">{chapter.subtitle}</p>
                  </div>
                </div>
                <div className="text-gray-400 font-mono">
                  Pages {chapter.pages[0] + 1}-{chapter.pages[chapter.pages.length - 1] + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  const IntroductionPage = () => (
    <div className="min-h-screen bg-white p-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-6xl font-light text-gray-800 mb-6">Introduction</h1>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mb-8"></div>
          <h2 className="text-2xl text-gray-600 font-light">The Language of Visual Design</h2>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl leading-relaxed text-gray-700 mb-8">
            Design is the silent language that speaks to us every day. From the moment we wake up and check our phones
            to the billboards we pass on our commute, visual design shapes our perception of the world around us.
          </p>

          <p className="text-lg leading-relaxed text-gray-600 mb-8">
            This book is a journey through the evolution of visual design movements, from the revolutionary Bauhaus
            school of the early 20th century to the digital aesthetics that define our contemporary culture. Each
            movement tells a story—not just of visual preferences, but of technological advancement, cultural shifts,
            and human creativity.
          </p>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">What You'll Discover</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <span>The historical context behind each design movement</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                <span>Interactive examples that bring each style to life</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                <span>The cultural and technological forces that shaped visual trends</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
                <span>How past movements influence contemporary design</span>
              </li>
            </ul>
          </div>

          <p className="text-lg leading-relaxed text-gray-600 mb-8">
            Whether you're a designer seeking inspiration, a student of visual culture, or simply curious about the
            world around you, this exploration will deepen your understanding of how design shapes our daily
            experiences.
          </p>

          <div className="text-center">
            <div className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full">
              <span className="font-semibold">Let the journey begin...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const ChapterDivider = ({ chapter, subtitle }) => (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-8">
      <div className="text-center max-w-2xl">
        <div className="mb-8">
          <div className="text-6xl font-bold text-white mb-4">Chapter {Math.floor((currentPage - 2) / 5) + 1}</div>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-8"></div>
        </div>

        <h1 className="text-5xl font-bold text-white mb-6">{chapter}</h1>
        <h2 className="text-2xl text-gray-300 mb-12">{subtitle}</h2>
      </div>
    </div>
  )

  const StylePage = ({ style, period, icon: IconComponent }) => {
    const getDesignComponent = () => {
      switch (style) {
        case "Bauhaus":
          return <BauhausDesign />
        case "Art Deco":
          return <ArtDecoDesign />
        case "Swiss Design":
          return <SwissDesign />
        case "Memphis Design":
          return <MemphisDesign />
        case "Skeuomorphism":
          return <SkeuomorphismDesign />
        case "Flat Design":
          return <FlatDesign />
        case "Material Design":
          return <MaterialDesign />
        case "Neumorphism":
          return <NeumorphismDesign />
        case "Brutalism":
          return <BrutalismDesign />
        case "Glassmorphism":
          return <GlassmorphismDesign />
        case "Dark Mode":
          return <DarkModeDesign />
        case "Claymorphism":
          return <ClaymorphismDesign />
        case "Vaporwave":
          return <VaporwaveDesign />
        case "Y2K":
          return <Y2KDesign />
        case "Frutiger Aero":
          return <FrutigerAeroDesign />
        case "Cyberpunk":
          return <CyberpunkDesign />
        default:
          return <BauhausDesign />
      }
    }

    return (
      <div className="min-h-screen bg-white">
        <div className="bg-gray-50 p-8 border-b border-gray-200">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <IconComponent className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-800">{style}</h1>
                <div className="text-gray-600">{period}</div>
              </div>
            </div>
            <p className="text-gray-700 text-lg">Interactive design showcase</p>
          </div>
        </div>
        {getDesignComponent()}
      </div>
    )
  }

  const ConclusionPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-indigo-900 flex items-center justify-center p-8">
      <div className="max-w-4xl text-center text-white">
        <h1 className="text-6xl font-bold mb-8">The Future of Design</h1>
        <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-pink-500 mx-auto mb-12"></div>

        <p className="text-xl leading-relaxed mb-8">
          As we've journeyed through the evolution of design movements, one thing becomes clear: design is never static.
          Each movement builds upon the last, reacting to cultural shifts, technological advances, and human needs.
        </p>

        <p className="text-lg leading-relaxed mb-12">
          The future of design will continue to be shaped by emerging technologies like AI, AR/VR, and sustainable
          practices. New aesthetic movements will emerge, challenging our current understanding of beauty, function, and
          meaning.
        </p>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">What's Next?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div>
              <h3 className="font-semibold mb-2">Emerging Trends</h3>
              <ul className="space-y-1 text-sm">
                <li>• AI-generated design</li>
                <li>• Sustainable design practices</li>
                <li>• Inclusive and accessible design</li>
                <li>• Immersive 3D interfaces</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Future Considerations</h3>
              <ul className="space-y-1 text-sm">
                <li>• Environmental impact</li>
                <li>• Cultural sensitivity</li>
                <li>• Technological ethics</li>
                <li>• Human-centered design</li>
              </ul>
            </div>
          </div>
        </div>

        <p className="text-lg">
          Thank you for joining us on this visual journey. The story of design continues to unfold, and you are part of
          writing its next chapter.
        </p>
      </div>
    </div>
  )

  const renderCurrentPage = () => {
    if (showTableOfContents) {
      return <TableOfContents />
    }

    const pageData = getCurrentPageData()

    switch (pageData.type) {
      case "cover":
        return <CoverPage />
      case "toc":
        return <TableOfContents />
      case "intro":
        return <IntroductionPage />
      case "chapter-divider":
        return <ChapterDivider chapter={pageData.chapter} subtitle={pageData.subtitle} />
      case "style":
        return <StylePage style={pageData.style} period={pageData.period} icon={pageData.icon} />
      case "conclusion":
        return <ConclusionPage />
      default:
        return <CoverPage />
    }
  }

  return (
    <div className="relative">
      {renderCurrentPage()}

      {/* Book Navigation */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-white/90 backdrop-blur-xl rounded-full px-6 py-3 flex items-center gap-4 shadow-2xl border border-gray-200">
          <Button
            onClick={prevPage}
            disabled={currentPage === 0}
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 border-0 rounded-full w-10 h-10 p-0 disabled:opacity-50"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>

          <div className="text-gray-700 text-sm font-medium min-w-20 text-center">
            {currentPage + 1} / {totalPages}
          </div>

          <Button
            onClick={nextPage}
            disabled={currentPage === totalPages - 1}
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 border-0 rounded-full w-10 h-10 p-0 disabled:opacity-50"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Book Controls */}
      <div className="fixed top-8 right-8 z-50">
        <div className="flex gap-2">
          <Button
            onClick={() => setShowTableOfContents(!showTableOfContents)}
            className="bg-white/90 hover:bg-white text-gray-700 border border-gray-200 rounded-full w-12 h-12 p-0"
          >
            <Menu className="w-4 h-4" />
          </Button>

          <Button
            onClick={() => setBookmarkPage(currentPage)}
            className="bg-white/90 hover:bg-white text-gray-700 border border-gray-200 rounded-full w-12 h-12 p-0"
          >
            <Bookmark className={`w-4 h-4 ${bookmarkPage === currentPage ? "fill-current text-blue-500" : ""}`} />
          </Button>

          <Button className="bg-white/90 hover:bg-white text-gray-700 border border-gray-200 rounded-full w-12 h-12 p-0">
            <Share className="w-4 h-4" />
          </Button>

          <Button className="bg-white/90 hover:bg-white text-gray-700 border border-gray-200 rounded-full w-12 h-12 p-0">
            <Download className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Chapter Progress */}
      <div className="fixed top-8 left-8 z-50">
        <div className="bg-white/90 backdrop-blur-xl rounded-lg px-4 py-2 border border-gray-200">
          <div className="text-gray-700 text-sm font-medium">
            {getCurrentPageData().title || getCurrentPageData().style || getCurrentPageData().chapter}
          </div>
          <div className="w-32 h-1 bg-gray-200 rounded-full mt-1">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-300"
              style={{ width: `${((currentPage + 1) / totalPages) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  )
}
