"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
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

const styleData = {
  Bauhaus: {
    description:
      "The Bauhaus movement revolutionized design by emphasizing functionality over decoration. Founded in Germany in 1919, it sought to merge fine arts with craftsmanship and industrial production.",
    characteristics: [
      "Geometric shapes and clean lines",
      "Primary color palette (red, blue, yellow)",
      "Sans-serif typography",
      "Form follows function philosophy",
      "Integration of art and technology",
    ],
    colors: ["#FF0000", "#0000FF", "#FFFF00", "#000000", "#FFFFFF"],
    impact:
      "Bauhaus laid the foundation for modern design education and influenced everything from architecture to product design.",
  },
  "Art Deco": {
    description:
      "Art Deco emerged in the 1920s as a symbol of luxury and modernity. This decorative style combined traditional craftsmanship with machine-age imagery and materials.",
    characteristics: [
      "Geometric patterns and symmetry",
      "Metallic finishes and rich materials",
      "Bold, stylized typography",
      "Sunburst and zigzag motifs",
      "Emphasis on vertical lines",
    ],
    colors: ["#FFD700", "#000000", "#C0C0C0", "#8B4513", "#FFFFFF"],
    impact:
      "Art Deco influenced architecture, fashion, and graphic design, becoming synonymous with the glamour of the Jazz Age.",
  },
  "Swiss Design": {
    description:
      "Swiss Design, also known as International Typographic Style, emerged in Switzerland in the 1950s. It emphasized cleanliness, readability, and objectivity in visual communication.",
    characteristics: [
      "Mathematical grid systems",
      "Sans-serif typography (especially Helvetica)",
      "Asymmetrical layouts",
      "Generous use of white space",
      "Photography over illustration",
    ],
    colors: ["#FF0000", "#000000", "#FFFFFF", "#808080"],
    impact: "Swiss Design became the foundation for corporate identity and modern graphic design principles worldwide.",
  },
  "Memphis Design": {
    description:
      "Memphis Design was a 1980s postmodern movement that rejected minimalism in favor of bright colors, bold patterns, and playful forms. It challenged conventional design rules.",
    characteristics: [
      "Bright, clashing colors",
      "Geometric shapes and patterns",
      "Playful, unconventional forms",
      "Mix of materials and textures",
      "Anti-functional aesthetic",
    ],
    colors: ["#FF69B4", "#00FFFF", "#FFFF00", "#FF4500", "#9370DB"],
    impact:
      "Memphis Design influenced fashion, furniture, and graphic design, paving the way for postmodern aesthetics.",
  },
  Skeuomorphism: {
    description:
      "Skeuomorphism in digital design involves creating interface objects that mimic their real-world counterparts. This approach helped users understand new digital interfaces by relating them to familiar physical objects.",
    characteristics: [
      "Realistic textures and materials",
      "Drop shadows and gradients",
      "3D effects and depth",
      "Detailed iconography",
      "Physical metaphors",
    ],
    colors: ["#4A90E2", "#7ED321", "#F5A623", "#D0021B", "#9013FE"],
    impact:
      "Skeuomorphism dominated early smartphone interfaces and helped users transition from physical to digital interactions.",
  },
  "Flat Design": {
    description:
      "Flat Design emerged as a reaction to skeuomorphism, stripping away all decorative elements to focus on simplicity and functionality. It prioritized content and usability over visual embellishment.",
    characteristics: [
      "No shadows, gradients, or textures",
      "Solid, bright colors",
      "Simple typography",
      "Minimal iconography",
      "Focus on content hierarchy",
    ],
    colors: ["#3498DB", "#E74C3C", "#2ECC71", "#F39C12", "#9B59B6"],
    impact:
      "Flat Design influenced mobile interfaces and web design, emphasizing performance and clarity over decoration.",
  },
  "Material Design": {
    description:
      "Google's Material Design combines the classic principles of good design with innovation and technology. It's based on the metaphor of paper and ink, creating a visual language that synthesizes classic principles with innovation.",
    characteristics: [
      "Paper and ink metaphor",
      "Subtle shadows and elevation",
      "Bold, vibrant colors",
      "Meaningful motion and transitions",
      "Grid-based layouts",
    ],
    colors: ["#2196F3", "#4CAF50", "#FF9800", "#F44336", "#9C27B0"],
    impact: "Material Design standardized Google's design language and influenced Android app development worldwide.",
  },
  Neumorphism: {
    description:
      "Neumorphism, or 'Soft UI,' combines elements of skeuomorphism and flat design. It creates subtle, soft shadows that make elements appear to extrude from or indent into the background.",
    characteristics: [
      "Soft, subtle shadows",
      "Monochromatic color schemes",
      "Minimal contrast",
      "Extruded and indented elements",
      "Clean, modern aesthetics",
    ],
    colors: ["#E0E5EC", "#FFFFFF", "#A3B1C6", "#C8D0E7", "#BDC9D7"],
    impact:
      "Neumorphism gained popularity in UI design for its modern, tactile appearance, though accessibility concerns limited its adoption.",
  },
  Brutalism: {
    description:
      "Digital Brutalism draws inspiration from Brutalist architecture, embracing raw, bold, and intentionally crude design elements. It deliberately breaks conventional design rules to create impactful, memorable experiences.",
    characteristics: [
      "Bold, heavy typography",
      "High contrast colors",
      "Raw, unpolished aesthetics",
      "Unconventional layouts",
      "Intentional 'ugliness'",
    ],
    colors: ["#000000", "#FFFFFF", "#FF0000", "#00FF00", "#0000FF"],
    impact: "Brutalism challenges design conventions and has influenced experimental web design and brand identities.",
  },
  Glassmorphism: {
    description:
      "Glassmorphism creates a frosted glass effect using transparency, blur, and subtle borders. This trend gained popularity for its modern, elegant appearance and ability to create depth without heavy shadows.",
    characteristics: [
      "Transparency and backdrop blur",
      "Subtle, light borders",
      "Layered visual hierarchy",
      "Soft, dreamy aesthetics",
      "Light color palettes",
    ],
    colors: ["rgba(255,255,255,0.1)", "rgba(255,255,255,0.2)", "#FFFFFF", "#000000"],
    impact:
      "Glassmorphism influenced modern UI design, particularly in mobile apps and web interfaces seeking a premium feel.",
  },
  "Dark Mode": {
    description:
      "Dark Mode design uses dark color schemes to reduce eye strain, improve battery life on OLED screens, and provide a sleek, modern appearance. It has become a standard feature in most digital interfaces.",
    characteristics: [
      "Dark backgrounds with light text",
      "Reduced blue light emission",
      "High contrast for readability",
      "Accent colors for emphasis",
      "Consistent dark theme across elements",
    ],
    colors: ["#121212", "#1E1E1E", "#FFFFFF", "#BB86FC", "#03DAC6"],
    impact:
      "Dark Mode has become essential for user experience, influencing everything from operating systems to individual apps.",
  },
  Claymorphism: {
    description:
      "Claymorphism creates 3D clay-like elements with soft shadows and rounded corners. This playful design trend adds depth and tactility to digital interfaces while maintaining a friendly, approachable aesthetic.",
    characteristics: [
      "3D clay-like elements",
      "Soft, diffused shadows",
      "Rounded corners and organic shapes",
      "Playful, vibrant colors",
      "Tactile appearance",
    ],
    colors: ["#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4", "#FFEAA7"],
    impact:
      "Claymorphism brings playfulness to digital design, particularly popular in mobile apps and creative interfaces.",
  },
  Vaporwave: {
    description:
      "Vaporwave is a microgenre and art movement that emerged in the early 2010s. It's characterized by a nostalgic and surrealist engagement with retro cultural aesthetics, particularly from the 1980s and 1990s.",
    characteristics: [
      "Neon pink and cyan colors",
      "Retro computer graphics",
      "Grid patterns and wireframes",
      "80s and 90s nostalgia",
      "Glitch and VHS aesthetics",
    ],
    colors: ["#FF00FF", "#00FFFF", "#FF1493", "#9400D3", "#000080"],
    impact: "Vaporwave influenced internet culture, music, and visual design, creating a distinct aesthetic movement.",
  },
  Y2K: {
    description:
      "Y2K aesthetic draws from the late 1990s and early 2000s, characterized by futuristic optimism, metallic textures, and digital imagery. It reflects the millennium's technological hopes and fears.",
    characteristics: [
      "Metallic and chrome textures",
      "Holographic and iridescent effects",
      "Futuristic typography",
      "Digital and pixelated imagery",
      "Bright, saturated colors",
    ],
    colors: ["#C0C0C0", "#0080FF", "#FF00FF", "#00FF00", "#FFFF00"],
    impact:
      "Y2K aesthetic has seen a revival in contemporary design, influencing fashion, web design, and digital art.",
  },
  "Frutiger Aero": {
    description:
      "Frutiger Aero was a design aesthetic prominent from 2004 to 2013, characterized by skeuomorphic design, glossy textures, and nature imagery. It represented optimism about technology and environmental consciousness.",
    characteristics: [
      "Glossy, translucent elements",
      "Nature imagery (water, sky, plants)",
      "Blue and green color palettes",
      "Clean, sans-serif typography",
      "Environmental themes",
    ],
    colors: ["#87CEEB", "#98FB98", "#00CED1", "#32CD32", "#FFFFFF"],
    impact:
      "Frutiger Aero influenced corporate design, particularly in tech companies, representing a clean, optimistic future.",
  },
  Cyberpunk: {
    description:
      "Cyberpunk aesthetic draws from the science fiction subgenre, featuring high-tech, low-life themes with neon colors, dark backgrounds, and futuristic elements. It represents dystopian technological futures.",
    characteristics: [
      "Neon colors on dark backgrounds",
      "Glitch and digital noise effects",
      "Futuristic, angular typography",
      "Circuit board and tech imagery",
      "High contrast lighting",
    ],
    colors: ["#00FF41", "#FF0080", "#0080FF", "#FFFF00", "#000000"],
    impact:
      "Cyberpunk aesthetic influences gaming, film, and digital art, representing both fascination and fear of technology.",
  },
}

export default function DesignBookFixed() {
  const [currentPage, setCurrentPage] = useState(0)
  const [showTableOfContents, setShowTableOfContents] = useState(false)
  const [bookmarkPage, setBookmarkPage] = useState(null)

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
    const data = styleData[style]
    if (!data) return <div>Loading...</div>

    return (
      <div className="min-h-screen bg-white p-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <IconComponent className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-5xl font-bold text-gray-800">{style}</h1>
                <div className="text-gray-600 text-lg">{period}</div>
              </div>
            </div>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mb-8"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-3xl font-semibold text-gray-800 mb-6">Overview</h2>
              <p className="text-lg leading-relaxed text-gray-700 mb-8">{data.description}</p>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Key Characteristics</h3>
              <ul className="space-y-3 mb-8">
                {data.characteristics.map((char, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{char}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Cultural Impact</h3>
              <p className="text-gray-700 leading-relaxed">{data.impact}</p>
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">Color Palette</h3>
                <div className="grid grid-cols-5 gap-3 mb-6">
                  {data.colors.map((color, i) => (
                    <div key={i} className="text-center">
                      <div
                        className="w-16 h-16 rounded-lg border border-gray-200 mb-2 shadow-sm"
                        style={{ backgroundColor: color }}
                      ></div>
                      <div className="text-xs font-mono text-gray-600">{color}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">Visual Example</h3>
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg p-8 text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <IconComponent className="w-12 h-12 text-white" />
                  </div>
                  <div className="text-lg font-semibold text-gray-800 mb-2">{style}</div>
                  <div className="text-sm text-gray-600">Interactive showcase available separately</div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
