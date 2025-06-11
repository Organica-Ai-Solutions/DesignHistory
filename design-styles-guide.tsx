"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Palette,
  Layers,
  Zap,
  Sparkles,
  Grid,
  Circle,
  Square,
  Triangle,
  Eye,
  Cpu,
  Leaf,
  Gem,
  Music,
  Gamepad2,
  Monitor,
} from "lucide-react"

const designStyles = {
  historical: [
    {
      name: "Bauhaus",
      period: "1919-1933",
      description: "Form follows function. Clean geometry, primary colors, sans-serif typography.",
      characteristics: ["Geometric shapes", "Primary colors", "Functional design", "Sans-serif fonts"],
      colors: ["#FF0000", "#0000FF", "#FFFF00", "#000000", "#FFFFFF"],
      icon: Grid,
    },
    {
      name: "Art Deco",
      period: "1920s-1930s",
      description: "Luxury and glamour with geometric patterns, metallic finishes, and bold typography.",
      characteristics: ["Geometric patterns", "Metallic accents", "Bold typography", "Luxury materials"],
      colors: ["#FFD700", "#000000", "#C0C0C0", "#8B4513", "#FFFFFF"],
      icon: Gem,
    },
    {
      name: "Swiss Design",
      period: "1950s-1960s",
      description: "International Typographic Style emphasizing cleanliness, readability, and objectivity.",
      characteristics: ["Grid systems", "Sans-serif typography", "Asymmetrical layouts", "White space"],
      colors: ["#FF0000", "#000000", "#FFFFFF", "#808080"],
      icon: Square,
    },
    {
      name: "Memphis Design",
      period: "1980s",
      description: "Postmodern movement with bright colors, geometric shapes, and playful patterns.",
      characteristics: ["Bright colors", "Geometric shapes", "Playful patterns", "Bold contrasts"],
      colors: ["#FF69B4", "#00FFFF", "#FFFF00", "#FF4500", "#9370DB"],
      icon: Triangle,
    },
  ],
  digital: [
    {
      name: "Skeuomorphism",
      period: "2000s-2010s",
      description: "Digital interfaces that mimic real-world objects with textures, shadows, and depth.",
      characteristics: ["Realistic textures", "Drop shadows", "Gradients", "3D effects"],
      colors: ["#4A90E2", "#7ED321", "#F5A623", "#D0021B", "#9013FE"],
      icon: Eye,
    },
    {
      name: "Flat Design",
      period: "2010s",
      description: "Minimalist approach removing all decorative elements, focusing on simplicity.",
      characteristics: ["No shadows", "Solid colors", "Simple typography", "Minimal icons"],
      colors: ["#3498DB", "#E74C3C", "#2ECC71", "#F39C12", "#9B59B6"],
      icon: Square,
    },
    {
      name: "Material Design",
      period: "2014-Present",
      description: "Google's design language combining flat design with subtle depth and motion.",
      characteristics: ["Paper metaphor", "Subtle shadows", "Bold colors", "Meaningful motion"],
      colors: ["#2196F3", "#4CAF50", "#FF9800", "#F44336", "#9C27B0"],
      icon: Layers,
    },
    {
      name: "Neumorphism",
      period: "2019-2020",
      description: "Soft UI combining skeuomorphism and flat design with subtle, inset shadows.",
      characteristics: ["Soft shadows", "Monochromatic", "Subtle depth", "Minimalist"],
      colors: ["#E0E5EC", "#FFFFFF", "#A3B1C6", "#C8D0E7", "#BDC9D7"],
      icon: Circle,
    },
  ],
  contemporary: [
    {
      name: "Brutalism",
      period: "2010s-Present",
      description: "Raw, bold, and intentionally crude design breaking conventional rules.",
      characteristics: ["Bold typography", "High contrast", "Raw aesthetics", "Unconventional layouts"],
      colors: ["#000000", "#FFFFFF", "#FF0000", "#00FF00", "#0000FF"],
      icon: Zap,
    },
    {
      name: "Glassmorphism",
      period: "2020-Present",
      description: "Frosted glass effect with transparency, blur, and subtle borders.",
      characteristics: ["Transparency", "Backdrop blur", "Subtle borders", "Layered elements"],
      colors: ["rgba(255,255,255,0.1)", "rgba(255,255,255,0.2)", "#FFFFFF", "#000000"],
      icon: Eye,
    },
    {
      name: "Dark Mode",
      period: "2018-Present",
      description: "Dark color schemes reducing eye strain and improving battery life.",
      characteristics: ["Dark backgrounds", "Light text", "Reduced blue light", "High contrast"],
      colors: ["#121212", "#1E1E1E", "#FFFFFF", "#BB86FC", "#03DAC6"],
      icon: Monitor,
    },
    {
      name: "Claymorphism",
      period: "2021-Present",
      description: "3D clay-like elements with soft shadows and rounded corners.",
      characteristics: ["3D elements", "Soft shadows", "Rounded corners", "Playful colors"],
      colors: ["#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4", "#FFEAA7"],
      icon: Circle,
    },
  ],
  aesthetic: [
    {
      name: "Vaporwave",
      period: "2010s-Present",
      description: "Retro-futuristic aesthetic with neon colors, grids, and 80s nostalgia.",
      characteristics: ["Neon colors", "Grid patterns", "Retro elements", "Synthwave vibes"],
      colors: ["#FF00FF", "#00FFFF", "#FF1493", "#9400D3", "#000080"],
      icon: Music,
    },
    {
      name: "Y2K",
      period: "Late 90s-Early 2000s",
      description: "Millennium bug era design with metallic textures, gradients, and futuristic elements.",
      characteristics: ["Metallic textures", "Gradients", "Futuristic fonts", "Chrome effects"],
      colors: ["#C0C0C0", "#0080FF", "#FF00FF", "#00FF00", "#FFFF00"],
      icon: Cpu,
    },
    {
      name: "Frutiger Aero",
      period: "2004-2013",
      description: "Clean, nature-inspired design with glossy elements and environmental themes.",
      characteristics: ["Nature imagery", "Glossy elements", "Blue-green palette", "Clean typography"],
      colors: ["#87CEEB", "#98FB98", "#00CED1", "#32CD32", "#FFFFFF"],
      icon: Leaf,
    },
    {
      name: "Cyberpunk",
      period: "1980s-Present",
      description: "High-tech, low-life aesthetic with neon colors and dystopian elements.",
      characteristics: ["Neon colors", "Dark backgrounds", "Glitch effects", "Futuristic fonts"],
      colors: ["#00FF41", "#FF0080", "#0080FF", "#FFFF00", "#000000"],
      icon: Gamepad2,
    },
  ],
}

export default function DesignStylesGuide() {
  const [selectedStyle, setSelectedStyle] = useState(null)

  const StyleCard = ({ style, category }) => {
    const IconComponent = style.icon
    return (
      <Card
        className="cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg"
        onClick={() => setSelectedStyle({ ...style, category })}
      >
        <CardHeader className="pb-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <IconComponent className="w-5 h-5 text-white" />
            </div>
            <div>
              <CardTitle className="text-lg">{style.name}</CardTitle>
              <Badge variant="secondary" className="text-xs">
                {style.period}
              </Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600 mb-3">{style.description}</p>
          <div className="flex gap-1 mb-3">
            {style.colors.slice(0, 5).map((color, i) => (
              <div
                key={i}
                className="w-6 h-6 rounded border border-gray-200"
                style={{ backgroundColor: color.includes("rgba") ? color : color }}
              />
            ))}
          </div>
          <div className="flex flex-wrap gap-1">
            {style.characteristics.slice(0, 2).map((char, i) => (
              <Badge key={i} variant="outline" className="text-xs">
                {char}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    )
  }

  const StyleShowcase = ({ style }) => {
    if (!style) return null

    const showcaseStyles = {
      bauhaus: "bg-white border-4 border-black p-8",
      "art deco": "bg-gradient-to-b from-yellow-400 to-yellow-600 text-black p-8",
      "swiss design": "bg-white p-8 grid grid-cols-2 gap-4",
      "memphis design": "bg-gradient-to-br from-pink-400 via-cyan-400 to-yellow-400 p-8",
      skeuomorphism: "bg-gradient-to-b from-gray-100 to-gray-300 p-8 shadow-inner",
      "flat design": "bg-blue-500 text-white p-8",
      "material design": "bg-blue-500 text-white p-8 shadow-lg",
      neumorphism: "bg-gray-200 p-8 shadow-inner",
      brutalism: "bg-black text-white p-8 border-4 border-red-500",
      glassmorphism: "bg-white/20 backdrop-blur-xl border border-white/30 p-8",
      "dark mode": "bg-gray-900 text-white p-8",
      claymorphism: "bg-gradient-to-br from-red-400 to-pink-400 p-8 rounded-3xl shadow-2xl",
      vaporwave: "bg-gradient-to-b from-purple-900 via-pink-500 to-cyan-400 text-white p-8",
      y2k: "bg-gradient-to-br from-silver via-blue-400 to-purple-500 text-white p-8",
      "frutiger aero": "bg-gradient-to-br from-sky-300 to-emerald-300 p-8",
      cyberpunk: "bg-black text-green-400 p-8 border border-green-400",
    }

    const styleClass = showcaseStyles[style.name.toLowerCase()] || "bg-gray-100 p-8"

    return (
      <div className="mt-6">
        <h3 className="text-xl font-bold mb-4">Style Showcase: {style.name}</h3>
        <div className={`rounded-lg ${styleClass} min-h-32 flex items-center justify-center`}>
          <div className="text-center">
            <h4 className="text-2xl font-bold mb-2">{style.name}</h4>
            <p className="opacity-80">{style.period}</p>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold mb-2">Key Characteristics:</h4>
            <ul className="space-y-1">
              {style.characteristics.map((char, i) => (
                <li key={i} className="text-sm flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  {char}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Color Palette:</h4>
            <div className="flex flex-wrap gap-2">
              {style.colors.map((color, i) => (
                <div key={i} className="text-center">
                  <div
                    className="w-12 h-12 rounded border border-gray-200 mb-1"
                    style={{ backgroundColor: color.includes("rgba") ? color : color }}
                  />
                  <div className="text-xs font-mono">{color}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Design Styles Guide
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore the evolution of design from historical movements to contemporary digital aesthetics
          </p>
        </div>

        <Tabs defaultValue="historical" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="historical" className="flex items-center gap-2">
              <Palette className="w-4 h-4" />
              Historical
            </TabsTrigger>
            <TabsTrigger value="digital" className="flex items-center gap-2">
              <Monitor className="w-4 h-4" />
              Digital Era
            </TabsTrigger>
            <TabsTrigger value="contemporary" className="flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Contemporary
            </TabsTrigger>
            <TabsTrigger value="aesthetic" className="flex items-center gap-2">
              <Eye className="w-4 h-4" />
              Aesthetic Movements
            </TabsTrigger>
          </TabsList>

          {Object.entries(designStyles).map(([category, styles]) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {styles.map((style, index) => (
                  <StyleCard key={index} style={style} category={category} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {selectedStyle && (
          <Card className="mt-8">
            <CardContent className="p-6">
              <StyleShowcase style={selectedStyle} />
            </CardContent>
          </Card>
        )}

        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Design Evolution Timeline</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="text-sm text-gray-600">
                <strong>Pre-Digital Era (1900s-1990s):</strong> Design was primarily print-focused, emphasizing
                craftsmanship, typography, and physical materials.
              </div>
              <div className="text-sm text-gray-600">
                <strong>Early Digital (1990s-2000s):</strong> Web design emerged with limitations, leading to
                skeuomorphic interfaces that mimicked real-world objects.
              </div>
              <div className="text-sm text-gray-600">
                <strong>Mobile Revolution (2007-2015):</strong> Touch interfaces drove flat design, prioritizing
                usability and performance over decoration.
              </div>
              <div className="text-sm text-gray-600">
                <strong>Modern Era (2015-Present):</strong> Diverse styles coexist, from brutalism to glassmorphism,
                reflecting both nostalgia and innovation.
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
