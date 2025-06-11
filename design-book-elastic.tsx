"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  BookOpen,
  Menu,
  Bookmark,
  ChevronLeft,
  ChevronRight,
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
  Smartphone,
  Beaker,
  Clock,
  Star,
  Users,
  Lightbulb,
  Globe,
  Volume2,
  Settings,
  User,
  Mail,
  Calendar,
  Phone,
  Wifi,
  Battery,
  Signal,
  Search,
  Sun,
  Cloud,
  Droplets,
  Wind,
} from "lucide-react"

const bookPages = [
  { id: "cover", type: "cover", title: "Cover" },
  { id: "toc", type: "toc", title: "Table of Contents" },
  { id: "intro", type: "intro", title: "Introduction" },
  { id: "historical-divider", type: "chapter-divider", chapter: "Historical Foundations", subtitle: "1900s - 1980s" },
  { id: "bauhaus-history", type: "history", style: "Bauhaus", period: "1919-1933", icon: Grid },
  { id: "bauhaus-design", type: "style", style: "Bauhaus", period: "1919-1933", icon: Grid },
  { id: "artdeco-history", type: "history", style: "Art Deco", period: "1920s-1930s", icon: Gem },
  { id: "artdeco-design", type: "style", style: "Art Deco", period: "1920s-1930s", icon: Gem },
  { id: "frutiger-history", type: "history", style: "Frutiger Aero", period: "2004-2013", icon: Leaf },
  { id: "frutiger-design", type: "style", style: "Frutiger Aero", period: "2004-2013", icon: Leaf },
  { id: "liquidglass-history", type: "history", style: "Liquid Glass", period: "2025-Present", icon: Smartphone },
  { id: "liquidglass-design", type: "style", style: "Liquid Glass", period: "2025-Present", icon: Smartphone },
  { id: "conclusion", type: "conclusion", title: "The Future of Design" },
]

const historyData: Record<string, any> = {
  Bauhaus: {
    founders: ["Walter Gropius", "Ludwig Mies van der Rohe", "Marcel Breuer"],
    location: "Weimar, Dessau, Berlin (Germany)",
    keyEvents: [
      { year: "1919", event: "Bauhaus school founded by Walter Gropius" },
      { year: "1925", event: "School moves to Dessau, iconic building constructed" },
      { year: "1933", event: "Nazis force closure of the school" },
    ],
    philosophy: "Form follows function. The Bauhaus sought to unite art, craft, and industrial production.",
    context: "Post-WWI Germany was rebuilding, and there was a need for affordable, functional design.",
    impact: "Bauhaus principles became the foundation of modern design education worldwide.",
    notableWorks: ["Wassily Chair by Marcel Breuer", "Bauhaus Building in Dessau"],
    legacy: "Modern design schools and the concept of 'good design for everyone' trace back to Bauhaus.",
  },
  "Art Deco": {
    founders: ["Various artists and designers", "Influenced by Exposition Internationale"],
    location: "Paris, France (spread globally)",
    keyEvents: [
      { year: "1925", event: "Exposition Internationale des Arts Décoratifs in Paris" },
      { year: "1930", event: "Chrysler Building completed in New York" },
    ],
    philosophy: "Luxury, glamour, and modernity with machine age aesthetics.",
    context: "The Roaring Twenties brought economic prosperity and optimism about technology.",
    impact: "Influenced architecture, fashion, jewelry, and graphic design.",
    notableWorks: ["Chrysler Building", "Rockefeller Center"],
    legacy: "Still influences luxury branding and architectural details today.",
  },
  "Frutiger Aero": {
    founders: ["Corporate design teams", "Technology companies"],
    location: "Global corporate design (especially tech companies)",
    keyEvents: [
      { year: "2004", event: "Windows XP and early glossy web design" },
      { year: "2007", event: "iPhone launch reinforces glossy, nature-inspired design" },
      { year: "2013", event: "Flat design movement ends Frutiger Aero dominance" },
    ],
    philosophy: "Clean, optimistic design combining technology with nature imagery.",
    context: "Environmental awareness growing alongside technological advancement.",
    impact: "Dominated corporate design for nearly a decade.",
    notableWorks: ["Windows Vista/7 wallpapers", "Early iPhone interfaces"],
    legacy: "Influenced contemporary sustainable design and environmental responsibility.",
  },
  "Liquid Glass": {
    founders: ["Apple Design Team", "Craig Federighi", "Human Interface Team"],
    location: "Cupertino, California",
    keyEvents: [
      { year: "2025", event: "Liquid Glass introduced at WWDC 2025" },
      { year: "2025", event: "iOS 26 and macOS Tahoe launch with Liquid Glass" },
      { year: "2026", event: "Liquid Glass expands to Apple Vision Pro" },
    ],
    philosophy: "Interfaces should feel alive, mimicking liquid glass that refracts light and responds to touch.",
    context: "Advanced GPU capabilities and spatial computing demand sophisticated visual languages.",
    impact: "Revolutionizing digital interfaces to feel more physical and emotionally engaging.",
    notableWorks: ["iOS 26 interface", "macOS Tahoe design", "Apple Vision Pro spatial UI"],
    legacy: "Establishing new standards for premium digital interfaces.",
  },
}

export default function DesignBookElastic() {
  const [currentPage, setCurrentPage] = useState(0)
  const [showTableOfContents, setShowTableOfContents] = useState(false)
  const [bookmarkPage, setBookmarkPage] = useState<number | null>(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

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

  const goToPage = (pageIndex: number) => {
    setCurrentPage(pageIndex)
    setShowTableOfContents(false)
  }

  const getCurrentPageData = () => {
    return bookPages[currentPage]
  }

  // Cover Page with responsive elastic layout
  const CoverPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <div className="container mx-auto px-4 py-8 sm:py-16 flex items-center justify-center min-h-screen">
        <div className="max-w-5xl w-full text-center">
          <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 mx-auto mb-6 sm:mb-8 bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <BookOpen className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 text-white" />
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent leading-tight px-4">
            The Visual Evolution
          </h1>

          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-white/90 mb-6 sm:mb-8 px-4">
            Complete Design Movements Collection
          </h2>

          <div className="text-base sm:text-lg lg:text-xl text-white/70 mb-8 sm:mb-12 px-4">
            From Bauhaus (1919) to Apple's Liquid Glass (2025+)
          </div>

          {/* Responsive grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-8 sm:mb-12 max-w-4xl mx-auto px-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 lg:p-6 border border-white/20 hover:bg-white/20 transition-colors duration-300">
              <Palette className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-yellow-400 mx-auto mb-2" />
              <div className="text-white text-xs sm:text-sm lg:text-base font-medium">Historical</div>
              <div className="text-white/60 text-xs">1900s-1980s</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 lg:p-6 border border-white/20 hover:bg-white/20 transition-colors duration-300">
              <Monitor className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-blue-400 mx-auto mb-2" />
              <div className="text-white text-xs sm:text-sm lg:text-base font-medium">Digital</div>
              <div className="text-white/60 text-xs">1990s-2010s</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 lg:p-6 border border-white/20 hover:bg-white/20 transition-colors duration-300">
              <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-pink-400 mx-auto mb-2" />
              <div className="text-white text-xs sm:text-sm lg:text-base font-medium">Contemporary</div>
              <div className="text-white/60 text-xs">2010s-Present</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 lg:p-6 border border-white/20 hover:bg-white/20 transition-colors duration-300">
              <Eye className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-purple-400 mx-auto mb-2" />
              <div className="text-white text-xs sm:text-sm lg:text-base font-medium">Future</div>
              <div className="text-white/60 text-xs">2020s+</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm sm:text-base text-white/60 px-4">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{bookPages.length} Interactive Pages</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4" />
              <span>106+ Years of Design</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              <span>Including Apple's Liquid Glass</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  // Frutiger Aero Design with elastic layout
  const FrutigerAeroDesign = () => (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-300 via-emerald-200 to-blue-400">
        {isClient && (
          <>
            <div className="absolute top-20 left-10 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-br from-cyan-300/30 to-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-48 sm:w-80 h-48 sm:h-80 bg-gradient-to-tl from-emerald-300/40 to-teal-400/30 rounded-full blur-2xl animate-pulse"></div>
          </>
        )}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 sm:py-16">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-4 sm:mb-6 drop-shadow-2xl">
            Frutiger Aero
          </h1>
          <p className="text-lg sm:text-xl text-white/90">Clean Technology, Natural Harmony</p>
          <p className="text-sm sm:text-base text-white/70 mt-2">2004-2013 • Environmental Optimism Era</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          <Card className="bg-white/20 backdrop-blur-xl border-white/30 shadow-2xl hover:shadow-3xl transition-all duration-300">
            <CardContent className="p-6 sm:p-8">
              <div className="flex items-center gap-4 mb-6">
                <Sun className="w-10 h-10 sm:w-12 sm:h-12 text-yellow-400 drop-shadow-lg" />
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white drop-shadow-md">Clean Energy</h3>
                  <p className="text-white/80">Sustainable Technology</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-white/90 text-sm sm:text-base">Solar Efficiency</span>
                  <span className="text-white font-semibold">92%</span>
                </div>
                <div className="h-3 bg-white/20 rounded-full overflow-hidden shadow-inner">
                  <div className="h-full w-[92%] bg-gradient-to-r from-yellow-400 to-orange-400 shadow-sm rounded-full transition-all duration-1000"></div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/15 backdrop-blur-xl border-white/25 shadow-2xl hover:shadow-3xl transition-all duration-300">
            <CardContent className="p-6 sm:p-8">
              <div className="flex items-center gap-4 mb-6">
                <Leaf className="w-10 h-10 sm:w-12 sm:h-12 text-emerald-400 drop-shadow-lg" />
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white drop-shadow-md">Eco System</h3>
                  <p className="text-white/80">Environmental Balance</p>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <Wind className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-300 mx-auto mb-2" />
                  <div className="text-xs text-white/80">Clean Air</div>
                </div>
                <div className="text-center">
                  <Droplets className="w-6 h-6 sm:w-8 sm:h-8 text-blue-300 mx-auto mb-2" />
                  <div className="text-xs text-white/80">Pure Water</div>
                </div>
                <div className="text-center">
                  <Cloud className="w-6 h-6 sm:w-8 sm:h-8 text-gray-300 mx-auto mb-2" />
                  <div className="text-xs text-white/80">Fresh Air</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )

  // Liquid Glass Design with elastic layout
  const LiquidGlassDesign = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {isClient && (
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
          <div className="absolute top-20 left-20 w-64 sm:w-80 h-64 sm:h-80 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        </div>
      )}

      <div className="relative z-10 container mx-auto px-4 py-8 sm:py-16">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-4 drop-shadow-2xl">
            Liquid Glass
          </h1>
          <p className="text-lg sm:text-xl text-white/80">Apple's Revolutionary Interface Language</p>
          <p className="text-sm sm:text-base text-white/60 mt-2">2025-Present • Speculative Future Design</p>
        </div>

        <div className="max-w-md mx-auto mb-8 sm:mb-12">
          <div className="bg-black rounded-[2rem] sm:rounded-[3rem] p-2 shadow-2xl">
            <div className="bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-[1.5rem] sm:rounded-[2.5rem] p-3 sm:p-4 backdrop-blur-3xl border border-white/10">
              <div className="flex justify-between items-center text-white text-xs sm:text-sm mb-4 sm:mb-6">
                <div className="font-medium">9:41</div>
                <div className="flex items-center gap-1">
                  <Signal className="w-3 h-3 sm:w-4 sm:h-4" />
                  <Wifi className="w-3 h-3 sm:w-4 sm:h-4" />
                  <Battery className="w-3 h-3 sm:w-4 sm:h-4" />
                </div>
              </div>

              <div className="grid grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-6">
                {[
                  { icon: Phone, name: "Phone", color: "from-green-400 to-emerald-500" },
                  { icon: Mail, name: "Mail", color: "from-blue-400 to-cyan-500" },
                  { icon: Calendar, name: "Calendar", color: "from-red-400 to-pink-500" },
                  { icon: Settings, name: "Settings", color: "from-gray-400 to-slate-500" },
                ].map((app, i) => (
                  <div key={i} className="text-center">
                    <div className={`w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br ${app.color}/30 backdrop-blur-xl border border-white/20 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300`}>
                      <app.icon className="w-5 h-5 sm:w-7 sm:h-7 text-white drop-shadow-lg" />
                    </div>
                    <div className="text-white text-xs mt-1 drop-shadow-sm">{app.name}</div>
                  </div>
                ))}
              </div>

              <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl sm:rounded-3xl p-3 sm:p-4 shadow-2xl">
                <div className="flex items-center gap-3">
                  <Volume2 className="w-4 h-4 sm:w-5 sm:h-5 text-white/80" />
                  <div className="flex-1 bg-white/20 rounded-full h-2 sm:h-3 shadow-inner backdrop-blur-sm">
                    <div className="bg-gradient-to-r from-blue-400 to-purple-500 h-full w-2/3 rounded-full shadow-lg"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderCurrentPage = () => {
    const pageData = getCurrentPageData()

    switch (pageData.type) {
      case "cover":
        return <CoverPage />
      case "style":
        if (pageData.style === "Frutiger Aero") return <FrutigerAeroDesign />
        if (pageData.style === "Liquid Glass") return <LiquidGlassDesign />
        return <CoverPage />
      default:
        return <CoverPage />
    }
  }

  if (!isClient) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading Design Experience...</div>
      </div>
    )
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      {renderCurrentPage()}

      {/* Responsive Navigation */}
      <div className="fixed bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-white/90 backdrop-blur-xl rounded-full px-3 sm:px-4 lg:px-6 py-2 sm:py-3 flex items-center gap-2 sm:gap-4 shadow-2xl border border-gray-200">
          <Button
            onClick={prevPage}
            disabled={currentPage === 0}
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 border-0 rounded-full w-8 h-8 sm:w-10 sm:h-10 p-0 disabled:opacity-50 transition-all duration-200"
          >
            <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4" />
          </Button>

          <div className="text-gray-700 text-xs sm:text-sm font-medium min-w-12 sm:min-w-16 lg:min-w-20 text-center">
            {currentPage + 1} / {totalPages}
          </div>

          <Button
            onClick={nextPage}
            disabled={currentPage === totalPages - 1}
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 border-0 rounded-full w-8 h-8 sm:w-10 sm:h-10 p-0 disabled:opacity-50 transition-all duration-200"
          >
            <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
          </Button>
        </div>
      </div>

      {/* Responsive Controls */}
      <div className="fixed top-4 sm:top-6 lg:top-8 right-4 sm:right-6 lg:right-8 z-50">
        <div className="flex gap-2">
          <Button
            onClick={() => setShowTableOfContents(!showTableOfContents)}
            className="bg-white/90 hover:bg-white text-gray-700 border border-gray-200 rounded-full w-10 h-10 sm:w-12 sm:h-12 p-0 transition-all duration-200"
          >
            <Menu className="w-3 h-3 sm:w-4 sm:h-4" />
          </Button>

          <Button
            onClick={() => setBookmarkPage(currentPage)}
            className="bg-white/90 hover:bg-white text-gray-700 border border-gray-200 rounded-full w-10 h-10 sm:w-12 sm:h-12 p-0 transition-all duration-200"
          >
            <Bookmark className={`w-3 h-3 sm:w-4 sm:h-4 ${bookmarkPage === currentPage ? "fill-current text-blue-500" : ""}`} />
          </Button>
        </div>
      </div>

      {/* Responsive Progress */}
      <div className="fixed top-4 sm:top-6 lg:top-8 left-4 sm:left-6 lg:left-8 z-50">
        <div className="bg-white/90 backdrop-blur-xl rounded-lg px-3 sm:px-4 py-2 border border-gray-200 max-w-xs">
          <div className="text-gray-700 text-xs sm:text-sm font-medium truncate">
            {getCurrentPageData().title || getCurrentPageData().style || getCurrentPageData().chapter}
          </div>
          <div className="w-20 sm:w-24 lg:w-32 h-1 bg-gray-200 rounded-full mt-1">
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