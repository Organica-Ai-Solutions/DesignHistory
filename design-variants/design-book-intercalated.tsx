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
  Clock,
  Star,
  Users,
  Lightbulb,
  Globe,
} from "lucide-react"

const bookPages = [
  { id: "cover", type: "cover", title: "Cover" },
  { id: "toc", type: "toc", title: "Table of Contents" },
  { id: "intro", type: "intro", title: "Introduction" },

  // Historical Chapter
  { id: "historical-divider", type: "chapter-divider", chapter: "Historical Foundations", subtitle: "1900s - 1980s" },

  { id: "bauhaus-history", type: "history", style: "Bauhaus", period: "1919-1933", icon: Grid },
  { id: "bauhaus-design", type: "style", style: "Bauhaus", period: "1919-1933", icon: Grid },

  { id: "artdeco-history", type: "history", style: "Art Deco", period: "1920s-1930s", icon: Gem },
  { id: "artdeco-design", type: "style", style: "Art Deco", period: "1920s-1930s", icon: Gem },

  { id: "swiss-history", type: "history", style: "Swiss Design", period: "1950s-1960s", icon: Square },
  { id: "swiss-design", type: "style", style: "Swiss Design", period: "1950s-1960s", icon: Square },

  { id: "memphis-history", type: "history", style: "Memphis Design", period: "1980s", icon: Triangle },
  { id: "memphis-design", type: "style", style: "Memphis Design", period: "1980s", icon: Triangle },

  // Digital Chapter
  { id: "digital-divider", type: "chapter-divider", chapter: "The Digital Revolution", subtitle: "1990s - 2010s" },

  { id: "skeuomorphism-history", type: "history", style: "Skeuomorphism", period: "2000s-2010s", icon: Eye },
  { id: "skeuomorphism-design", type: "style", style: "Skeuomorphism", period: "2000s-2010s", icon: Eye },

  { id: "flat-history", type: "history", style: "Flat Design", period: "2010s", icon: Square },
  { id: "flat-design", type: "style", style: "Flat Design", period: "2010s", icon: Square },

  { id: "material-history", type: "history", style: "Material Design", period: "2014-Present", icon: Layers },
  { id: "material-design", type: "style", style: "Material Design", period: "2014-Present", icon: Layers },

  { id: "neumorphism-history", type: "history", style: "Neumorphism", period: "2019-2020", icon: Circle },
  { id: "neumorphism-design", type: "style", style: "Neumorphism", period: "2019-2020", icon: Circle },

  // Contemporary Chapter
  {
    id: "contemporary-divider",
    type: "chapter-divider",
    chapter: "Contemporary Movements",
    subtitle: "2010s - Present",
  },

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

  { id: "conclusion", type: "conclusion", title: "The Future of Design" },
]

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
    philosophy:
      "Form follows function. The Bauhaus sought to unite art, craft, and industrial production, believing that good design should be accessible to all social classes.",
    context:
      "Post-WWI Germany was rebuilding, and there was a need for affordable, functional design. The industrial revolution demanded new approaches to mass production.",
    impact:
      "Bauhaus principles became the foundation of modern design education and influenced architecture, furniture, typography, and product design worldwide.",
    notableWorks: [
      "Wassily Chair by Marcel Breuer",
      "Bauhaus Building in Dessau",
      "Universal typeface by Herbert Bayer",
    ],
    legacy:
      "Modern design schools, minimalist architecture, and the concept of 'good design for everyone' all trace back to Bauhaus principles.",
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
    philosophy:
      "Luxury, glamour, and modernity. Art Deco celebrated machine age aesthetics while maintaining decorative richness and craftsmanship.",
    context:
      "The Roaring Twenties brought economic prosperity, jazz culture, and optimism about technology and the future.",
    impact:
      "Influenced architecture, fashion, jewelry, and graphic design. Became synonymous with the glamour of the Jazz Age.",
    notableWorks: ["Chrysler Building", "Rockefeller Center", "Lalique glass designs", "Cassandre posters"],
    legacy:
      "Art Deco revival in the 1960s and 1980s. Still influences luxury branding and architectural details today.",
  },
  "Swiss Design": {
    founders: ["Max Bill", "Josef Müller-Brockmann", "Armin Hofmann", "Emil Ruder"],
    location: "Switzerland (Basel, Zurich)",
    keyEvents: [
      { year: "1950s", event: "Movement emerges in Swiss design schools" },
      { year: "1957", event: "Helvetica typeface created by Max Miedinger" },
      { year: "1960s", event: "International recognition and adoption" },
      { year: "1970s", event: "Becomes standard for corporate identity" },
      { year: "1980s", event: "Postmodern reaction begins to challenge the style" },
    ],
    philosophy:
      "Objectivity, clarity, and functionality. Design should communicate clearly without personal expression interfering with the message.",
    context:
      "Post-WWII reconstruction needed clear, efficient communication. Switzerland's neutrality allowed for objective, non-political design approach.",
    impact: "Became the foundation for corporate identity design and influenced graphic design education worldwide.",
    notableWorks: ["Helvetica typeface", "Swiss International Airlines branding", "Müller-Brockmann concert posters"],
    legacy:
      "Modern corporate branding, grid systems in web design, and minimalist graphic design all stem from Swiss Design principles.",
  },
  "Memphis Design": {
    founders: ["Ettore Sottsass", "Michele De Lucchi", "Matteo Thun", "George Sowden"],
    location: "Milan, Italy",
    keyEvents: [
      { year: "1980", event: "Ettore Sottsass forms Memphis Group" },
      { year: "1981", event: "First Memphis collection debuts at Milan Furniture Fair" },
      { year: "1982-1985", event: "Peak years of Memphis influence" },
      { year: "1987", event: "Memphis Group officially disbands" },
      { year: "2000s", event: "Memphis revival in contemporary design" },
    ],
    philosophy:
      "Anti-functional, anti-hierarchical design that challenged modernist principles. Embraced decoration, color, and playfulness over utility.",
    context:
      "Reaction against the sterile minimalism of 1970s design. Postmodern philosophy questioned the authority of 'good taste' and functional design.",
    impact:
      "Liberated design from functional constraints and influenced fashion, graphics, and product design with bold, expressive aesthetics.",
    notableWorks: ["Carlton bookshelf by Ettore Sottsass", "Tahiti lamp by Ettore Sottsass", "Casablanca sideboard"],
    legacy:
      "Postmodern design, maximalist interiors, and contemporary 'weird' design movements all trace back to Memphis principles.",
  },
  Skeuomorphism: {
    founders: ["Apple Design Team", "Jonathan Ive", "Scott Forstall"],
    location: "Silicon Valley, California",
    keyEvents: [
      { year: "2007", event: "iPhone launches with skeuomorphic iOS interface" },
      { year: "2010", event: "iPad popularizes skeuomorphic design patterns" },
      { year: "2011", event: "Peak of skeuomorphic design in mobile apps" },
      { year: "2013", event: "iOS 7 introduces flat design, ending skeuomorphic era" },
      { year: "2020s", event: "Subtle return in neumorphism and tactile interfaces" },
    ],
    philosophy:
      "Digital interfaces should mimic real-world objects to help users understand functionality through familiar metaphors.",
    context:
      "Early smartphone users needed familiar visual cues to understand new touch interfaces. Skeuomorphism bridged physical and digital worlds.",
    impact:
      "Made smartphones accessible to mainstream users and established design patterns still used in mobile interfaces today.",
    notableWorks: ["iOS Calculator app", "iBooks bookshelf", "Voice Memos cassette tape", "Compass app"],
    legacy:
      "Established mobile design conventions and proved the importance of intuitive interface design for mass adoption.",
  },
  "Flat Design": {
    founders: ["Microsoft Design Team", "Apple (iOS 7)", "Google Material Design"],
    location: "Global (Microsoft, Apple, Google)",
    keyEvents: [
      { year: "2010", event: "Microsoft introduces Metro design language" },
      { year: "2012", event: "Windows Phone showcases flat design principles" },
      { year: "2013", event: "iOS 7 adopts flat design, mainstream adoption" },
      { year: "2014", event: "Google introduces Material Design" },
      { year: "2015", event: "Flat design becomes web standard" },
    ],
    philosophy:
      "Remove unnecessary decorative elements to focus on content and functionality. Embrace the digital medium rather than mimicking physical objects.",
    context:
      "Mobile devices needed faster loading interfaces. High-resolution screens made subtle details less necessary for usability.",
    impact:
      "Revolutionized web and mobile design, improved performance, and created cleaner, more accessible interfaces.",
    notableWorks: ["Windows Phone interface", "iOS 7 redesign", "Google's Material Design", "Flat UI frameworks"],
    legacy:
      "Modern web design, mobile app interfaces, and the emphasis on performance over decoration in digital design.",
  },
  "Material Design": {
    founders: ["Google Design Team", "Matias Duarte", "Nicholas Jitkoff"],
    location: "Mountain View, California",
    keyEvents: [
      { year: "2014", event: "Material Design introduced at Google I/O" },
      { year: "2015", event: "Android Lollipop implements Material Design" },
      { year: "2016", event: "Material Design expands to web applications" },
      { year: "2018", event: "Material Design 2.0 introduces theming" },
      { year: "2021", event: "Material You brings dynamic personalization" },
    ],
    philosophy:
      "Inspired by paper and ink, Material Design creates a visual language that synthesizes classic principles of good design with innovation and technology.",
    context:
      "Google needed a unified design language across all platforms. Users demanded more sophisticated and beautiful interfaces.",
    impact:
      "Standardized Android design and influenced web design with its systematic approach to color, typography, and motion.",
    notableWorks: ["Android interface", "Google apps ecosystem", "Material Design Components", "Flutter framework"],
    legacy: "Design systems thinking, component-based design, and the integration of motion as a design element.",
  },
  Neumorphism: {
    founders: ["Alexander Plyuto", "Michal Malewicz", "UI/UX design community"],
    location: "Global design community (online)",
    keyEvents: [
      { year: "2019", event: "Alexander Plyuto coins term 'neumorphism'" },
      { year: "2020", event: "Dribbble and design communities embrace the trend" },
      { year: "2020", event: "Accessibility concerns raised about low contrast" },
      { year: "2021", event: "Trend peaks and begins to decline" },
      { year: "2022", event: "Selective adoption in specific use cases" },
    ],
    philosophy:
      "Soft, extruded interfaces that appear to emerge from the background, creating a tactile, almost physical feeling in digital interfaces.",
    context:
      "Designers sought alternatives to flat design. Touch interfaces benefited from visual cues suggesting physical interaction.",
    impact:
      "Influenced mobile app design and created new possibilities for tactile digital interfaces, though limited by accessibility concerns.",
    notableWorks: ["Smart home app interfaces", "Music player designs", "Calculator apps", "Meditation app UIs"],
    legacy:
      "Demonstrated the cyclical nature of design trends and the importance of balancing aesthetics with accessibility.",
  },
  Brutalism: {
    founders: ["Pascal Deville", "Heydon Pickering", "Web design community"],
    location: "Global web design community",
    keyEvents: [
      { year: "2014", event: "brutalistwebsites.com launches" },
      { year: "2016", event: "Major brands experiment with brutal aesthetics" },
      { year: "2017", event: "Balenciaga website embraces brutalist design" },
      { year: "2018", event: "Academic and cultural institutions adopt the style" },
      { year: "2020", event: "Brutalism influences mainstream web design" },
    ],
    philosophy:
      "Raw, honest, and intentionally crude design that rejects conventional beauty standards and embraces functionality over form.",
    context:
      "Reaction against polished, corporate web design. Designers sought authenticity and wanted to challenge user expectations.",
    impact:
      "Liberated web design from conventional constraints and influenced experimental approaches to digital interfaces.",
    notableWorks: [
      "Balenciaga website",
      "Yale School of Art website",
      "Bloomberg Businessweek",
      "Various artist portfolios",
    ],
    legacy:
      "Encouraged experimental web design and proved that unconventional aesthetics could be effective for certain brands and contexts.",
  },
  Glassmorphism: {
    founders: ["Michal Malewicz", "Apple Design Team", "UI design community"],
    location: "Global design community",
    keyEvents: [
      { year: "2020", event: "macOS Big Sur introduces translucent elements" },
      { year: "2020", event: "Michal Malewicz popularizes 'glassmorphism' term" },
      { year: "2021", event: "Windows 11 adopts Fluent Design with glass effects" },
      { year: "2021", event: "Web designers embrace CSS backdrop-filter" },
      { year: "2022", event: "Mainstream adoption in mobile and web interfaces" },
    ],
    philosophy:
      "Translucent, layered interfaces that create depth and hierarchy through transparency and blur effects, mimicking frosted glass.",
    context:
      "Powerful devices could handle complex visual effects. Users appreciated sophisticated, layered interfaces that felt premium.",
    impact:
      "Influenced modern operating system design and created new possibilities for layered, translucent web interfaces.",
    notableWorks: [
      "macOS Big Sur interface",
      "Windows 11 Fluent Design",
      "iOS Control Center",
      "Various web applications",
    ],
    legacy: "Advanced CSS capabilities and demonstrated how visual effects could enhance rather than hinder usability.",
  },
  "Dark Mode": {
    founders: ["Apple", "Google", "Microsoft", "Various app developers"],
    location: "Global tech industry",
    keyEvents: [
      { year: "2018", event: "macOS Mojave introduces system-wide dark mode" },
      { year: "2019", event: "iOS 13 and Android 10 add dark mode support" },
      { year: "2019", event: "Major apps and websites implement dark themes" },
      { year: "2020", event: "Dark mode becomes standard feature expectation" },
      { year: "2021", event: "Automatic dark mode based on time/ambient light" },
    ],
    philosophy:
      "Reduce eye strain, save battery life on OLED screens, and provide a premium, focused user experience, especially in low-light conditions.",
    context:
      "Increased screen time and awareness of digital wellness. OLED technology made dark interfaces more energy-efficient.",
    impact:
      "Became essential feature for all digital products and influenced color palette choices across the design industry.",
    notableWorks: ["iOS Dark Mode", "Android Dark Theme", "Twitter dark mode", "YouTube dark theme"],
    legacy:
      "Established user expectation for theme choice and influenced the development of adaptive, context-aware interfaces.",
  },
  Claymorphism: {
    founders: ["Michal Malewicz", "3D design community", "UI/UX designers"],
    location: "Global design community",
    keyEvents: [
      { year: "2021", event: "Michal Malewicz introduces claymorphism concept" },
      { year: "2021", event: "3D design tools make clay effects accessible" },
      { year: "2022", event: "Mobile apps experiment with clay-like interfaces" },
      { year: "2022", event: "Gaming and entertainment apps adopt the style" },
      { year: "2023", event: "Selective adoption in specific app categories" },
    ],
    philosophy:
      "Playful, tactile interfaces that use soft shadows and rounded forms to create clay-like, three-dimensional elements that feel approachable and fun.",
    context: "Users sought more playful, human interfaces. 3D design tools became more accessible to UI designers.",
    impact:
      "Influenced mobile app design, particularly in gaming and lifestyle categories, bringing more personality to digital interfaces.",
    notableWorks: [
      "Various mobile game interfaces",
      "Meditation apps",
      "Fitness tracking apps",
      "Creative tool interfaces",
    ],
    legacy: "Demonstrated the value of playful design in creating emotional connections with users.",
  },
  Vaporwave: {
    founders: ["Chuck Person", "James Ferraro", "Internet art community"],
    location: "Internet culture (global)",
    keyEvents: [
      { year: "2010", event: "Chuck Person's Eccojams Vol. 1 released" },
      { year: "2011", event: "James Ferraro's Far Side Virtual gains attention" },
      { year: "2012-2014", event: "Vaporwave aesthetic spreads on Tumblr and Reddit" },
      { year: "2015", event: "Mainstream recognition and commercialization begins" },
      { year: "2020s", event: "Nostalgic revival and influence on contemporary design" },
    ],
    philosophy:
      "Nostalgic critique of consumer capitalism through appropriated 80s/90s imagery, creating dreamlike, surreal digital environments.",
    context:
      "Internet culture's relationship with nostalgia and capitalism. Digital natives processing pre-internet aesthetics through contemporary lens.",
    impact:
      "Influenced graphic design, web design, and created new forms of digital art that blur the lines between critique and celebration.",
    notableWorks: [
      "Macintosh Plus album covers",
      "Tumblr aesthetic blogs",
      "Vaporwave art generators",
      "Retro-futuristic websites",
    ],
    legacy:
      "Demonstrated how internet culture could create and spread aesthetic movements, influencing contemporary nostalgia-based design.",
  },
  Y2K: {
    founders: ["Technology industry", "Millennium celebration culture"],
    location: "Global technology and design industry",
    keyEvents: [
      { year: "1995-1999", event: "Y2K anxiety and millennium preparation" },
      { year: "1999-2001", event: "Peak of futuristic optimism and design" },
      { year: "2000", event: "Millennium celebration and technological hope" },
      { year: "2001", event: "Dot-com crash begins decline of aesthetic" },
      { year: "2020s", event: "Nostalgic revival among Gen Z and millennials" },
    ],
    philosophy:
      "Optimistic futurism celebrating technology's potential, characterized by metallic textures, holographic effects, and digital imagery.",
    context:
      "Millennium transition created unprecedented technological optimism. The internet was new and exciting, promising to transform everything.",
    impact:
      "Influenced early web design, product design, and fashion. Created lasting associations between metallic aesthetics and technological progress.",
    notableWorks: ["iMac G3 design", "Early web graphics", "Millennium celebration graphics", "Tech product packaging"],
    legacy:
      "Contemporary revival demonstrates cyclical nature of design trends and nostalgia's power in aesthetic movements.",
  },
  "Frutiger Aero": {
    founders: ["Corporate design teams", "Technology companies", "Adrian Frutiger (typography)"],
    location: "Global corporate design (especially tech companies)",
    keyEvents: [
      { year: "2004", event: "Windows XP and early glossy web design" },
      { year: "2006-2008", event: "Peak adoption in corporate and tech design" },
      { year: "2007", event: "iPhone launch reinforces glossy, nature-inspired design" },
      { year: "2010", event: "Environmental consciousness influences design choices" },
      { year: "2013", event: "Flat design movement ends Frutiger Aero dominance" },
    ],
    philosophy:
      "Clean, optimistic design combining technology with nature imagery, suggesting harmony between digital progress and environmental consciousness.",
    context:
      "Environmental awareness growing alongside technological advancement. Companies wanted to appear both innovative and environmentally responsible.",
    impact:
      "Dominated corporate design for nearly a decade and established visual language for 'clean technology' and environmental responsibility.",
    notableWorks: [
      "Windows Vista/7 wallpapers",
      "Early iPhone interfaces",
      "Corporate environmental campaigns",
      "Tech company branding",
    ],
    legacy:
      "Influenced contemporary sustainable design and the association between clean aesthetics and environmental responsibility.",
  },
  Cyberpunk: {
    founders: ["William Gibson", "Ridley Scott", "Digital art community"],
    location: "Science fiction literature and film, later digital design",
    keyEvents: [
      { year: "1982", event: "Blade Runner film establishes visual language" },
      { year: "1984", event: "William Gibson's Neuromancer published" },
      { year: "1990s", event: "Cyberpunk aesthetic enters video games" },
      { year: "2000s", event: "Web design adopts cyberpunk elements" },
      { year: "2020", event: "Cyberpunk 2077 game renews mainstream interest" },
    ],
    philosophy:
      "High-tech, low-life aesthetic exploring the dark side of technological progress, featuring neon colors, urban decay, and digital dystopia.",
    context:
      "Growing concerns about technology's impact on society, corporate power, and digital surveillance in increasingly connected world.",
    impact:
      "Influenced video game design, web interfaces, and created visual language for discussing technology's darker implications.",
    notableWorks: [
      "Blade Runner visual design",
      "Matrix film trilogy",
      "Cyberpunk video games",
      "Hacker culture websites",
    ],
    legacy:
      "Continues to influence how we visualize future technology and provides aesthetic framework for discussing digital dystopia.",
  },
}

const IntroductionPage = () => (
  <div className="min-h-screen bg-white p-12">
    <div className="max-w-6xl mx-auto">
      <h1 className="text-5xl font-bold text-gray-800 mb-6">Introduction</h1>
      <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mb-8"></div>
      <p className="text-xl text-gray-700 leading-relaxed">
        Welcome to "The Visual Evolution," a journey through the history of design movements from the early 1900s to the
        present day. This book explores the principles, key figures, and cultural impact of each movement, providing
        insights into how design has shaped our world.
      </p>
    </div>
  </div>
)

const ChapterDivider = ({ chapter, subtitle }) => (
  <div className="min-h-screen bg-gray-100 p-12">
    <div className="max-w-6xl mx-auto">
      <h1 className="text-5xl font-bold text-gray-800 mb-6">{chapter}</h1>
      <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mb-8"></div>
      <p className="text-xl text-gray-700 leading-relaxed">{subtitle}</p>
    </div>
  </div>
)

const ConclusionPage = () => (
  <div className="min-h-screen bg-white p-12">
    <div className="max-w-6xl mx-auto">
      <h1 className="text-5xl font-bold text-gray-800 mb-6">Conclusion</h1>
      <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mb-8"></div>
      <p className="text-xl text-gray-700 leading-relaxed">
        As we look to the future, design will continue to evolve, driven by technological advancements and changing
        cultural values. The movements explored in this book serve as a foundation for understanding the past and
        shaping the future of design.
      </p>
    </div>
  </div>
)

const StylePage = ({ style, period, icon: IconComponent }) => {
  // Placeholder for StylePage component
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
          <p className="text-xl text-gray-700 leading-relaxed">Style Page Content for {style}</p>
        </div>
      </div>
    </div>
  )
}

const HistoryPage = ({ style, period, icon: IconComponent }) => {
  const data = historyData[style]
  if (!data) return <div>Loading...</div>

  return (
    <div className="min-h-screen bg-white p-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
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
          <p className="text-xl text-gray-700 leading-relaxed">{data.philosophy}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Historical Context */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                <Globe className="w-6 h-6 text-blue-600" />
                Historical Context
              </h2>
              <p className="text-gray-700 leading-relaxed">{data.context}</p>
            </div>

            {/* Key Figures */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                <Users className="w-6 h-6 text-green-600" />
                Key Figures
              </h2>
              <div className="space-y-2">
                {data.founders.map((founder, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium">{founder}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-sm text-gray-600">
                <strong>Location:</strong> {data.location}
              </div>
            </div>

            {/* Cultural Impact */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                <Lightbulb className="w-6 h-6 text-orange-600" />
                Cultural Impact
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">{data.impact}</p>
              <div className="text-sm text-gray-600">
                <strong>Legacy:</strong> {data.legacy}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Timeline */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <Clock className="w-6 h-6 text-purple-600" />
                Timeline
              </h2>
              <div className="space-y-4">
                {data.keyEvents.map((event, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-8 bg-purple-600 text-white rounded-lg flex items-center justify-center text-sm font-bold">
                        {event.year}
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-700 text-sm leading-relaxed">{event.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Notable Works */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                <Star className="w-6 h-6 text-yellow-600" />
                Notable Works
              </h2>
              <div className="space-y-3">
                {data.notableWorks.map((work, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{work}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Philosophy Quote */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl text-white">
              <h2 className="text-xl font-bold mb-4">Design Philosophy</h2>
              <blockquote className="text-lg italic leading-relaxed">"{data.philosophy}"</blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
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

      <div className="text-white/60 text-lg">
        {bookPages.length} Pages • 16 Design Movements • Rich Historical Context
      </div>
    </div>
  </div>
)

const TableOfContents = ({ goToPage }) => {
  const chapters = [
    { title: "Introduction", subtitle: "The Language of Visual Design", pages: [2] },
    { title: "Historical Foundations", subtitle: "1900s - 1980s", pages: [3, 4, 5, 6, 7, 8, 9, 10, 11] },
    { title: "The Digital Revolution", subtitle: "1990s - 2010s", pages: [12, 13, 14, 15, 16, 17, 18, 19, 20, 21] },
    { title: "Contemporary Movements", subtitle: "2010s - Present", pages: [22, 23, 24, 25, 26, 27, 28, 29, 30, 31] },
    { title: "Digital Aesthetics", subtitle: "Cultural Phenomena", pages: [32, 33, 34, 35, 36, 37, 38, 39, 40, 41] },
    { title: "Conclusion", subtitle: "The Future of Design", pages: [42] },
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

        <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">What's New in This Edition</h2>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>Rich historical context for each design movement</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>Detailed timelines and key figures</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
              <span>Cultural impact and legacy analysis</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
              <span>Interactive visual examples paired with history</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default function DesignBookIntercalated() {
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
