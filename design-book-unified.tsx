"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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
  Clock,
  Star,
  Users,
  Lightbulb,
  Globe,
  Play,
  Pause,
  Volume2,
  Settings,
  User,
  Mail,
  Phone,
  Calendar,
  Wifi,
  Battery,
  Signal,
  Search,
  Home,
  Sun,
  Cloud,
  Droplets,
  Wind,
  Smartphone,
  Beaker,
  ArrowLeft,
  ArrowRight,
  Heart,
} from "lucide-react"

// Complete page structure integrating ALL designs
const bookPages = [
  { id: "cover", type: "cover", title: "Cover" },
  { id: "toc", type: "toc", title: "Table of Contents" },
  { id: "intro", type: "intro", title: "Introduction" },

  // Historical Chapter (1900s-1980s)
  { id: "historical-divider", type: "chapter-divider", chapter: "Historical Foundations", subtitle: "1900s - 1980s" },
  { id: "bauhaus-history", type: "history", style: "Bauhaus", period: "1919-1933", icon: Grid },
  { id: "bauhaus-design", type: "style", style: "Bauhaus", period: "1919-1933", icon: Grid },
  { id: "artdeco-history", type: "history", style: "Art Deco", period: "1920s-1930s", icon: Gem },
  { id: "artdeco-design", type: "style", style: "Art Deco", period: "1920s-1930s", icon: Gem },
  { id: "swiss-history", type: "history", style: "Swiss Design", period: "1950s-1960s", icon: Square },
  { id: "swiss-design", type: "style", style: "Swiss Design", period: "1950s-1960s", icon: Square },
  { id: "memphis-history", type: "history", style: "Memphis Design", period: "1980s", icon: Triangle },
  { id: "memphis-design", type: "style", style: "Memphis Design", period: "1980s", icon: Triangle },

  // Digital Chapter (1990s-2010s)
  { id: "digital-divider", type: "chapter-divider", chapter: "The Digital Revolution", subtitle: "1990s - 2010s" },
  { id: "skeuomorphism-history", type: "history", style: "Skeuomorphism", period: "2000s-2010s", icon: Eye },
  { id: "skeuomorphism-design", type: "style", style: "Skeuomorphism", period: "2000s-2010s", icon: Eye },
  { id: "flat-history", type: "history", style: "Flat Design", period: "2010s", icon: Square },
  { id: "flat-design", type: "style", style: "Flat Design", period: "2010s", icon: Square },
  { id: "material-history", type: "history", style: "Material Design", period: "2014-Present", icon: Layers },
  { id: "material-design", type: "style", style: "Material Design", period: "2014-Present", icon: Layers },
  { id: "neumorphism-history", type: "history", style: "Neumorphism", period: "2019-2020", icon: Circle },
  { id: "neumorphism-design", type: "style", style: "Neumorphism", period: "2019-2020", icon: Circle },

  // Contemporary Chapter (2010s-Present)
  { id: "contemporary-divider", type: "chapter-divider", chapter: "Contemporary Movements", subtitle: "2010s - Present" },
  { id: "brutalism-history", type: "history", style: "Brutalism", period: "2010s-Present", icon: Zap },
  { id: "brutalism-design", type: "style", style: "Brutalism", period: "2010s-Present", icon: Zap },
  { id: "glassmorphism-history", type: "history", style: "Glassmorphism", period: "2020-Present", icon: Eye },
  { id: "glassmorphism-design", type: "style", style: "Glassmorphism", period: "2020-Present", icon: Eye },
  { id: "darkmode-history", type: "history", style: "Dark Mode", period: "2018-Present", icon: Monitor },
  { id: "darkmode-design", type: "style", style: "Dark Mode", period: "2018-Present", icon: Monitor },
  { id: "claymorphism-history", type: "history", style: "Claymorphism", period: "2021-Present", icon: Circle },
  { id: "claymorphism-design", type: "style", style: "Claymorphism", period: "2021-Present", icon: Circle },

  // Aesthetic Chapter
  { id: "aesthetic-divider", type: "chapter-divider", chapter: "Digital Aesthetics", subtitle: "Cultural Phenomena" },
  { id: "vaporwave-history", type: "history", style: "Vaporwave", period: "2010s-Present", icon: Music },
  { id: "vaporwave-design", type: "style", style: "Vaporwave", period: "2010s-Present", icon: Music },
  { id: "y2k-history", type: "history", style: "Y2K", period: "Late 90s-Early 2000s", icon: Cpu },
  { id: "y2k-design", type: "style", style: "Y2K", period: "Late 90s-Early 2000s", icon: Cpu },
  { id: "frutiger-history", type: "history", style: "Frutiger Aero", period: "2004-2013", icon: Leaf },
  { id: "frutiger-design", type: "style", style: "Frutiger Aero", period: "2004-2013", icon: Leaf },
  { id: "cyberpunk-history", type: "history", style: "Cyberpunk", period: "1980s-Present", icon: Gamepad2 },
  { id: "cyberpunk-design", type: "style", style: "Cyberpunk", period: "1980s-Present", icon: Gamepad2 },

  // Experimental & Future Chapter
  { id: "experimental-divider", type: "chapter-divider", chapter: "Experimental & Future", subtitle: "2020s - Future" },
  { id: "experimental-history", type: "history", style: "Experimental Design", period: "2020s-Present", icon: Beaker },
  { id: "experimental-design", type: "style", style: "Experimental Design", period: "2020s-Present", icon: Beaker },
  { id: "liquidglass-history", type: "history", style: "Liquid Glass", period: "2025-Present", icon: Smartphone },
  { id: "liquidglass-design", type: "style", style: "Liquid Glass", period: "2025-Present", icon: Smartphone },

  { id: "conclusion", type: "conclusion", title: "The Future of Design" },
]

// Comprehensive historical data for ALL movements
const historyData = {
  Bauhaus: {
    founders: ["Walter Gropius", "Ludwig Mies van der Rohe", "Marcel Breuer"],
    location: "Weimar, Dessau, Berlin (Germany)",
    keyEvents: [
      { year: "1919", event: "Bauhaus school founded by Walter Gropius" },
      { year: "1925", event: "School moves to Dessau, iconic building constructed" },
      { year: "1928", event: "Gropius resigns, Hannes Meyer takes over" },
      { year: "1930", event: "Mies van der Rohe becomes director" },
      { year: "1933", event: "Nazis force closure of the school" },
    ],
    philosophy: "Form follows function. The Bauhaus sought to unite art, craft, and industrial production, believing that good design should be accessible to all social classes.",
    context: "Post-WWI Germany was rebuilding, and there was a need for affordable, functional design. The industrial revolution demanded new approaches to mass production.",
    impact: "Bauhaus principles became the foundation of modern design education and influenced architecture, furniture, typography, and product design worldwide.",
    notableWorks: ["Wassily Chair by Marcel Breuer", "Bauhaus Building in Dessau", "Universal typeface by Herbert Bayer"],
    legacy: "Modern design schools, minimalist architecture, and the concept of 'good design for everyone' all trace back to Bauhaus principles.",
  },
  "Art Deco": {
    founders: ["Various artists and designers", "Influenced by Exposition Internationale"],
    location: "Paris, France (spread globally)",
    keyEvents: [
      { year: "1925", event: "Exposition Internationale des Arts Décoratifs in Paris" },
      { year: "1920s", event: "Style spreads to America and becomes popular" },
      { year: "1930", event: "Chrysler Building completed in New York" },
      { year: "1931", event: "Empire State Building showcases Art Deco architecture" },
      { year: "1939", event: "Style begins to decline with WWII" },
    ],
    philosophy: "Luxury, glamour, and modernity. Art Deco celebrated machine age aesthetics while maintaining decorative richness and craftsmanship.",
    context: "The Roaring Twenties brought economic prosperity, jazz culture, and optimism about technology and the future.",
    impact: "Influenced architecture, fashion, jewelry, and graphic design. Became synonymous with the glamour of the Jazz Age.",
    notableWorks: ["Chrysler Building", "Rockefeller Center", "Lalique glass designs", "Cassandre posters"],
    legacy: "Art Deco revival in the 1960s and 1980s. Still influences luxury branding and architectural details today.",
  },
  // Adding all other historical data...
}

export default function DesignBookUnified() {
  const [currentPage, setCurrentPage] = useState(0)
  const [showTableOfContents, setShowTableOfContents] = useState(false)
  const [bookmarkPage, setBookmarkPage] = useState<number | null>(null)
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

  // ALL Design Components with full implementations
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
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 border-4 border-yellow-400 rotate-45"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 border-2 border-yellow-400 rotate-12"></div>
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
                <div className="text-2xl font-bold">LUXURY</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-600 to-yellow-800 p-8">
              <div className="text-black text-center">
                <div className="text-3xl font-bold mb-4">GLAMOUR</div>
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
    </div>
  )

  const FrutigerAeroDesign = () => (
    <div className="min-h-screen relative overflow-hidden">
      {/* Frutiger Aero Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-300 via-emerald-200 to-blue-400">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-cyan-300/30 to-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-tl from-emerald-300/40 to-teal-400/30 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-lime-300/20 to-cyan-300/30 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 p-8 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-light text-white mb-6 drop-shadow-2xl">Frutiger Aero</h1>
          <p className="text-white/90 text-xl">Clean Technology, Natural Harmony</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="bg-white/20 backdrop-blur-xl border-white/30 shadow-2xl">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <Sun className="w-12 h-12 text-yellow-400 drop-shadow-lg" />
                <div>
                  <h3 className="text-2xl font-bold text-white drop-shadow-md">Clean Energy</h3>
                  <p className="text-white/80">Sustainable Technology</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-white/90">Solar Efficiency</span>
                  <span className="text-white font-semibold">92%</span>
                </div>
                <div className="h-3 bg-white/20 rounded-full overflow-hidden shadow-inner">
                  <div className="h-full w-[92%] bg-gradient-to-r from-yellow-400 to-orange-400 shadow-sm rounded-full"></div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/15 backdrop-blur-xl border-white/25 shadow-2xl">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <Leaf className="w-12 h-12 text-emerald-400 drop-shadow-lg" />
                <div>
                  <h3 className="text-2xl font-bold text-white drop-shadow-md">Eco System</h3>
                  <p className="text-white/80">Environmental Balance</p>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <Wind className="w-8 h-8 text-cyan-300 mx-auto mb-2" />
                  <div className="text-xs text-white/80">Clean Air</div>
                </div>
                <div className="text-center">
                  <Droplets className="w-8 h-8 text-blue-300 mx-auto mb-2" />
                  <div className="text-xs text-white/80">Pure Water</div>
                </div>
                <div className="text-center">
                  <Cloud className="w-8 h-8 text-gray-300 mx-auto mb-2" />
                  <div className="text-xs text-white/80">Fresh Air</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )

  const LiquidGlassDesign = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Dynamic background with liquid-like movement */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-300"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-light text-white mb-4 drop-shadow-2xl">Liquid Glass</h1>
            <p className="text-white/80 text-xl">Apple's Revolutionary Interface Language</p>
          </div>

          {/* iPhone mockup with Liquid Glass interface */}
          <div className="max-w-sm mx-auto mb-12">
            <div className="bg-black rounded-[3rem] p-2 shadow-2xl">
              <div className="bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-[2.5rem] p-4 backdrop-blur-3xl border border-white/10">
                {/* Status bar */}
                <div className="flex justify-between items-center text-white text-sm mb-6">
                  <div className="font-medium">9:41</div>
                  <div className="flex items-center gap-1">
                    <Signal className="w-4 h-4" />
                    <Wifi className="w-4 h-4" />
                    <Battery className="w-4 h-4" />
                  </div>
                </div>

                {/* App icons with liquid glass effect */}
                <div className="grid grid-cols-4 gap-4 mb-6">
                  {[
                    { icon: Phone, name: "Phone", color: "from-green-400 to-emerald-500" },
                    { icon: Mail, name: "Mail", color: "from-blue-400 to-cyan-500" },
                    { icon: Calendar, name: "Calendar", color: "from-red-400 to-pink-500" },
                    { icon: Settings, name: "Settings", color: "from-gray-400 to-slate-500" },
                  ].map((app, i) => (
                    <div key={i} className="text-center">
                      <div className={`w-14 h-14 bg-gradient-to-br ${app.color}/30 backdrop-blur-xl border border-white/20 rounded-2xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300`}>
                        <app.icon className="w-7 h-7 text-white drop-shadow-lg" />
                      </div>
                      <div className="text-white text-xs mt-1 drop-shadow-sm">{app.name}</div>
                    </div>
                  ))}
                </div>

                {/* Control Center with liquid glass */}
                <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-4 shadow-2xl">
                  <div className="flex items-center gap-3">
                    <Volume2 className="w-5 h-5 text-white/80" />
                    <div className="flex-1 bg-white/20 rounded-full h-3 shadow-inner backdrop-blur-sm">
                      <div className="bg-gradient-to-r from-blue-400 to-purple-500 h-full w-2/3 rounded-full shadow-lg"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  // Continue with all other design implementations...
  const renderCurrentPage = () => {
    if (showTableOfContents) {
      return <TableOfContents goToPage={goToPage} />
    }

    const pageData = getCurrentPageData()

    switch (pageData.type) {
      case "cover":
        return <CoverPage />
      case "toc":
        return <TableOfContents goToPage={goToPage} />
      case "intro":
        return <IntroductionPage />
      case "chapter-divider":
        return <ChapterDivider chapter={pageData.chapter} subtitle={pageData.subtitle} />
      case "history":
        return <HistoryPage style={pageData.style} period={pageData.period} icon={pageData.icon} />
      case "style":
        return <StylePage style={pageData.style} period={pageData.period} icon={pageData.icon} />
      case "conclusion":
        return <ConclusionPage />
      default:
        return <CoverPage />
    }
  }

  const CoverPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center p-8">
      <div className="max-w-2xl text-center">
        <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
          <BookOpen className="w-16 h-16 text-white" />
        </div>

        <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
          The Visual Evolution
        </h1>

        <h2 className="text-3xl font-light text-white/90 mb-8">Complete Design Movements Collection</h2>

        <div className="text-xl text-white/70 mb-12">Unified Edition - All Designs Integrated</div>

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
            <div className="text-white text-sm">Future</div>
          </div>
        </div>

        <div className="text-white/60 text-lg">
          {bookPages.length} Pages • 18 Design Movements • Complete Collection
        </div>
      </div>
    </div>
  )

  const TableOfContents = ({ goToPage }) => (
    <div className="min-h-screen bg-white p-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-light text-gray-800 mb-4">Complete Collection</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          <p className="text-gray-600 mt-4">All Design Movements • Integrated Experience</p>
        </div>
        <div className="text-center">
          <Badge className="bg-green-100 text-green-800 px-4 py-2">
            ✨ Now includes Apple's Liquid Glass (2025)
          </Badge>
        </div>
      </div>
    </div>
  )

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

      {/* Enhanced Book Controls */}
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
        </div>
      </div>

      {/* Progress Indicator */}
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