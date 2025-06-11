"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
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
} from "lucide-react"

const bookData = {
  title: "The Visual Evolution",
  subtitle: "A Journey Through Design Movements",
  author: "Design History Collective",
  chapters: [
    {
      id: "intro",
      title: "Introduction",
      subtitle: "The Language of Visual Design",
      category: "preface",
      pages: 3,
    },
    {
      id: "historical",
      title: "Historical Foundations",
      subtitle: "1900s - 1980s",
      category: "historical",
      pages: 12,
      styles: ["Bauhaus", "Art Deco", "Swiss Design", "Memphis Design"],
    },
    {
      id: "digital",
      title: "The Digital Revolution",
      subtitle: "1990s - 2010s",
      category: "digital",
      pages: 16,
      styles: ["Skeuomorphism", "Flat Design", "Material Design", "Neumorphism"],
    },
    {
      id: "contemporary",
      title: "Contemporary Movements",
      subtitle: "2010s - Present",
      category: "contemporary",
      pages: 14,
      styles: ["Brutalism", "Glassmorphism", "Dark Mode", "Claymorphism"],
    },
    {
      id: "aesthetic",
      title: "Digital Aesthetics",
      subtitle: "Cultural Phenomena",
      category: "aesthetic",
      pages: 18,
      styles: ["Vaporwave", "Y2K", "Frutiger Aero", "Cyberpunk"],
    },
    {
      id: "conclusion",
      title: "The Future of Design",
      subtitle: "What's Next?",
      category: "conclusion",
      pages: 4,
    },
  ],
}

export default function DesignBook() {
  const [currentPage, setCurrentPage] = useState(0)
  const [showTableOfContents, setShowTableOfContents] = useState(false)
  const [bookmarkPage, setBookmarkPage] = useState(null)

  const totalPages = bookData.chapters.reduce((sum, chapter) => sum + chapter.pages, 0)

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

  const goToChapter = (chapterIndex) => {
    let pageCount = 0
    for (let i = 0; i < chapterIndex; i++) {
      pageCount += bookData.chapters[i].pages
    }
    setCurrentPage(pageCount)
    setShowTableOfContents(false)
  }

  const getCurrentChapter = () => {
    let pageCount = 0
    for (let i = 0; i < bookData.chapters.length; i++) {
      pageCount += bookData.chapters[i].pages
      if (currentPage < pageCount) {
        return { chapter: bookData.chapters[i], chapterIndex: i }
      }
    }
    return { chapter: bookData.chapters[0], chapterIndex: 0 }
  }

  const CoverPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center p-8">
      <div className="max-w-2xl text-center">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
            <BookOpen className="w-16 h-16 text-white" />
          </div>
        </div>

        <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
          {bookData.title}
        </h1>

        <h2 className="text-3xl font-light text-white/90 mb-8">{bookData.subtitle}</h2>

        <div className="text-xl text-white/70 mb-12">by {bookData.author}</div>

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

  const TableOfContents = () => (
    <div className="min-h-screen bg-white p-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-light text-gray-800 mb-4">Table of Contents</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </div>

        <div className="space-y-6">
          {bookData.chapters.map((chapter, index) => (
            <div
              key={chapter.id}
              onClick={() => goToChapter(index)}
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
                  {chapter.styles && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {chapter.styles.map((style, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {style}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div className="text-gray-400 font-mono">{chapter.pages} pages</div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full">
            <BookOpen className="w-5 h-5" />
            <span className="font-semibold">Total: {totalPages} Pages</span>
          </div>
        </div>
      </div>
    </div>
  )

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

  const ChapterDivider = ({ chapter }) => (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-8">
      <div className="text-center max-w-2xl">
        <div className="mb-8">
          <div className="text-6xl font-bold text-white mb-4">
            Chapter {bookData.chapters.findIndex((c) => c.id === chapter.id) + 1}
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-8"></div>
        </div>

        <h1 className="text-5xl font-bold text-white mb-6">{chapter.title}</h1>

        <h2 className="text-2xl text-gray-300 mb-12">{chapter.subtitle}</h2>

        {chapter.styles && (
          <div className="grid grid-cols-2 gap-4">
            {chapter.styles.map((style, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-white font-semibold">{style}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )

  const StylePage = ({ styleName, description, characteristics, period }) => (
    <div className="min-h-screen bg-white p-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Palette className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-800">{styleName}</h1>
              <div className="text-gray-600">{period}</div>
            </div>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Overview</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-8">{description}</p>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Characteristics</h3>
            <ul className="space-y-3">
              {characteristics.map((char, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span className="text-gray-700">{char}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Visual Example</h3>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mx-auto mb-4"></div>
                <div className="text-lg font-semibold text-gray-800 mb-2">{styleName}</div>
                <div className="text-sm text-gray-600">Interactive example available in full showcase</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderCurrentPage = () => {
    if (showTableOfContents) {
      return <TableOfContents />
    }

    if (currentPage === 0) {
      return <CoverPage />
    }

    if (currentPage === 1) {
      return <TableOfContents />
    }

    if (currentPage === 2) {
      return <IntroductionPage />
    }

    // Sample content for demonstration
    const { chapter } = getCurrentChapter()

    if (chapter.id === "historical") {
      return <ChapterDivider chapter={chapter} />
    }

    return (
      <StylePage
        styleName="Bauhaus"
        description="The Bauhaus movement revolutionized design by emphasizing functionality over decoration. Founded in Germany in 1919, it sought to merge fine arts with craftsmanship and industrial production."
        characteristics={[
          "Geometric shapes and clean lines",
          "Primary color palette (red, blue, yellow)",
          "Sans-serif typography",
          "Form follows function philosophy",
          "Integration of art and technology",
        ]}
        period="1919-1933"
      />
    )
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
          <div className="text-gray-700 text-sm font-medium">{getCurrentChapter().chapter.title}</div>
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
