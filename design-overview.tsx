"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
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
  Eye,
  Monitor,
  Smartphone,
  Beaker,
  Palette,
  Clock,
  ArrowRight,
  Sparkles,
} from "lucide-react"

const allDesignMovements = [
  // Historical (1900s-1980s)
  {
    category: "Historical Foundations",
    period: "1900s - 1980s",
    description: "The foundational movements that shaped modern design",
    movements: [
      {
        name: "Bauhaus",
        period: "1919-1933",
        icon: Grid,
        color: "from-red-500 to-blue-500",
        description: "Form follows function. Geometric, minimal, functional design.",
        keyPrinciples: ["Geometric shapes", "Primary colors", "Sans-serif typography", "Functional design"],
      },
      {
        name: "Art Deco",
        period: "1920s-1930s", 
        icon: Gem,
        color: "from-yellow-400 to-yellow-600",
        description: "Luxury and glamour with geometric patterns and metallic finishes.",
        keyPrinciples: ["Geometric patterns", "Metallic accents", "Bold typography", "Luxury materials"],
      },
      {
        name: "Swiss Design",
        period: "1950s-1960s",
        icon: Square,
        color: "from-gray-500 to-red-500",
        description: "International Typographic Style emphasizing cleanliness and objectivity.",
        keyPrinciples: ["Grid systems", "Sans-serif typography", "Asymmetrical layouts", "White space"],
      },
      {
        name: "Memphis Design",
        period: "1980s",
        icon: Triangle,
        color: "from-pink-400 to-cyan-400",
        description: "Postmodern movement with bright colors and playful patterns.",
        keyPrinciples: ["Bright colors", "Geometric shapes", "Playful patterns", "Bold contrasts"],
      },
    ],
  },
  // Digital Era (1990s-2010s)
  {
    category: "The Digital Revolution",
    period: "1990s - 2010s",
    description: "The emergence of digital interfaces and screen-based design",
    movements: [
      {
        name: "Skeuomorphism",
        period: "2000s-2010s",
        icon: Eye,
        color: "from-blue-500 to-green-500",
        description: "Digital interfaces that mimic real-world objects with textures and depth.",
        keyPrinciples: ["Realistic textures", "Drop shadows", "Gradients", "3D effects"],
      },
      {
        name: "Flat Design",
        period: "2010s",
        icon: Square,
        color: "from-blue-500 to-purple-500",
        description: "Minimalist approach removing decorative elements, focusing on simplicity.",
        keyPrinciples: ["No shadows", "Solid colors", "Simple typography", "Minimal icons"],
      },
      {
        name: "Material Design",
        period: "2014-Present",
        icon: Layers,
        color: "from-green-500 to-blue-500",
        description: "Google's design language combining flat design with subtle depth.",
        keyPrinciples: ["Paper metaphor", "Subtle shadows", "Bold colors", "Meaningful motion"],
      },
      {
        name: "Neumorphism",
        period: "2019-2020",
        icon: Circle,
        color: "from-gray-300 to-gray-500",
        description: "Soft UI combining skeuomorphism and flat design with subtle shadows.",
        keyPrinciples: ["Soft shadows", "Monochromatic", "Subtle depth", "Minimalist"],
      },
    ],
  },
  // Contemporary (2010s-Present)
  {
    category: "Contemporary Movements",
    period: "2010s - Present",
    description: "Modern design movements breaking conventional rules",
    movements: [
      {
        name: "Brutalism",
        period: "2010s-Present",
        icon: Zap,
        color: "from-black to-red-500",
        description: "Raw, bold design breaking conventional rules with high contrast.",
        keyPrinciples: ["Bold typography", "High contrast", "Raw aesthetics", "Unconventional layouts"],
      },
      {
        name: "Glassmorphism",
        period: "2020-Present",
        icon: Eye,
        color: "from-blue-400 to-purple-400",
        description: "Frosted glass effect with transparency, blur, and subtle borders.",
        keyPrinciples: ["Transparency", "Backdrop blur", "Subtle borders", "Layered elements"],
      },
      {
        name: "Dark Mode",
        period: "2018-Present",
        icon: Monitor,
        color: "from-gray-800 to-purple-600",
        description: "Dark color schemes reducing eye strain and improving battery life.",
        keyPrinciples: ["Dark backgrounds", "Light text", "Reduced blue light", "High contrast"],
      },
      {
        name: "Claymorphism",
        period: "2021-Present",
        icon: Circle,
        color: "from-orange-400 to-pink-400",
        description: "3D clay-like elements with soft shadows and rounded corners.",
        keyPrinciples: ["3D elements", "Soft shadows", "Rounded corners", "Playful colors"],
      },
    ],
  },
  // Aesthetic Movements
  {
    category: "Digital Aesthetics",
    period: "Cultural Phenomena", 
    description: "Internet-born aesthetics and nostalgic movements",
    movements: [
      {
        name: "Vaporwave",
        period: "2010s-Present",
        icon: Music,
        color: "from-purple-500 to-pink-500",
        description: "Retro-futuristic aesthetic with neon colors and 80s nostalgia.",
        keyPrinciples: ["Neon colors", "Grid patterns", "Retro elements", "Synthwave vibes"],
      },
      {
        name: "Y2K",
        period: "Late 90s-Early 2000s",
        icon: Cpu,
        color: "from-cyan-400 to-purple-500",
        description: "Millennium bug era design with metallic textures and futuristic elements.",
        keyPrinciples: ["Metallic textures", "Gradients", "Futuristic fonts", "Chrome effects"],
      },
      {
        name: "Frutiger Aero",
        period: "2004-2013",
        icon: Leaf,
        color: "from-sky-400 to-emerald-400",
        description: "Clean, nature-inspired design with glossy elements and environmental themes.",
        keyPrinciples: ["Nature imagery", "Glossy elements", "Blue-green palette", "Clean typography"],
      },
      {
        name: "Cyberpunk",
        period: "1980s-Present",
        icon: Gamepad2,
        color: "from-green-400 to-cyan-400",
        description: "High-tech, low-life aesthetic with neon colors and dystopian elements.",
        keyPrinciples: ["Neon colors", "Dark backgrounds", "Glitch effects", "Futuristic fonts"],
      },
    ],
  },
  // Experimental & Future
  {
    category: "Experimental & Future",
    period: "2020s - Future",
    description: "Cutting-edge and speculative design concepts",
    movements: [
      {
        name: "Experimental Design",
        period: "2020s-Present",
        icon: Beaker,
        color: "from-violet-500 to-purple-600",
        description: "Boundary-pushing designs exploring new possibilities in digital interfaces.",
        keyPrinciples: ["Innovation", "Experimentation", "User experience", "Technology integration"],
      },
      {
        name: "Liquid Glass",
        period: "2025-Present",
        icon: Smartphone,
        color: "from-blue-400 to-indigo-600",
        description: "Apple's revolutionary interface language with fluid, responsive glass-like elements.",
        keyPrinciples: ["Dynamic refraction", "Sensory computing", "Depth layers", "Liquid motion"],
        isNew: true,
      },
    ],
  },
]

export default function DesignOverview() {
  const [selectedMovement, setSelectedMovement] = useState(null)

  const MovementCard = ({ movement, category }) => {
    const IconComponent = movement.icon
    return (
      <Card
        className="cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl relative group"
        onClick={() => setSelectedMovement({ ...movement, category })}
      >
        {movement.isNew && (
          <Badge className="absolute -top-2 -right-2 bg-green-500 text-white z-10">
            NEW
          </Badge>
        )}
        <CardHeader className="pb-3">
          <div className="flex items-center gap-3">
            <div className={`w-12 h-12 bg-gradient-to-br ${movement.color} rounded-xl flex items-center justify-center shadow-lg`}>
              <IconComponent className="w-6 h-6 text-white" />
            </div>
            <div>
              <CardTitle className="text-lg">{movement.name}</CardTitle>
              <div className="text-sm text-gray-500">{movement.period}</div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">{movement.description}</p>
          <div className="flex flex-wrap gap-1">
            {movement.keyPrinciples.slice(0, 2).map((principle, i) => (
              <Badge key={i} variant="outline" className="text-xs">
                {principle}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    )
  }

  const CategorySection = ({ categoryData }) => (
    <div className="mb-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">{categoryData.category}</h2>
        <p className="text-lg text-gray-600 mb-1">{categoryData.period}</p>
        <p className="text-sm text-gray-500 max-w-2xl mx-auto">{categoryData.description}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categoryData.movements.map((movement, index) => (
          <MovementCard key={index} movement={movement} category={categoryData.category} />
        ))}
      </div>
    </div>
  )

  const MovementDetail = ({ movement }) => {
    if (!movement) return null
    
    const IconComponent = movement.icon
    return (
      <Card className="mt-8">
        <CardContent className="p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className={`w-16 h-16 bg-gradient-to-br ${movement.color} rounded-2xl flex items-center justify-center shadow-xl`}>
              <IconComponent className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-800">{movement.name}</h3>
              <p className="text-lg text-gray-600">{movement.period}</p>
              <Badge className="mt-1">{movement.category}</Badge>
            </div>
          </div>
          
          <p className="text-lg text-gray-700 mb-6">{movement.description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Key Principles</h4>
              <ul className="space-y-2">
                {movement.keyPrinciples.map((principle, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">{principle}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Quick Facts</h4>
              <div className="space-y-3">
                <div>
                  <span className="text-sm font-medium text-gray-600">Period:</span>
                  <span className="ml-2 text-gray-800">{movement.period}</span>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-600">Category:</span>
                  <span className="ml-2 text-gray-800">{movement.category}</span>
                </div>
                {movement.isNew && (
                  <div>
                    <Badge className="bg-green-100 text-green-800">
                      ✨ Latest Addition
                    </Badge>
                  </div>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  const totalMovements = allDesignMovements.reduce((sum, category) => sum + category.movements.length, 0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Complete Design Collection
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Explore {totalMovements} design movements from 1919 to 2025+
          </p>
          <div className="flex items-center justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>106 Years of Design History</span>
            </div>
            <div className="flex items-center gap-2">
              <Palette className="w-4 h-4" />
              <span>5 Major Categories</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              <span>Interactive Examples</span>
            </div>
          </div>
        </div>

        {/* Categories */}
        {allDesignMovements.map((categoryData, index) => (
          <CategorySection key={index} categoryData={categoryData} />
        ))}

        {/* Selected Movement Detail */}
        {selectedMovement && <MovementDetail movement={selectedMovement} />}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="inline-block">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Ready to Explore?</h3>
              <p className="text-gray-600 mb-6">
                Dive into the complete interactive experience with historical context, visual examples, and design principles.
              </p>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3">
                Open Interactive Book
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 