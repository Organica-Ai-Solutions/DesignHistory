"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  BookOpen,
  Menu,
  Bookmark,
  Share,
  Download,
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
  Clock,
  Star,
  Play,
  Pause,
  ArrowLeft,
  ArrowRight,
  Volume2,
  Settings,
  User,
  Mail,
  Calendar,
  Phone,
  Wifi,
  Battery,
  Signal,
  DownloadIcon,
  ShareIcon,
  Heart,
  Search,
  Home,
  Sun,
  Cloud,
  Droplets,
  Wind,
  Smartphone,
  Beaker,
  Globe,
  Users,
  Lightbulb,
} from "lucide-react"

// Fixed page structure to prevent hydration issues
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

  // Experimental Chapter
  { id: "experimental-divider", type: "chapter-divider", chapter: "Experimental & Future", subtitle: "2020s - Future" },
  { id: "experimental-history", type: "history", style: "Experimental Design", period: "2020s-Present", icon: Beaker },
  { id: "experimental-design", type: "style", style: "Experimental Design", period: "2020s-Present", icon: Beaker },
  { id: "liquidglass-history", type: "history", style: "Liquid Glass", period: "2025-Present", icon: Smartphone },
  { id: "liquidglass-design", type: "style", style: "Liquid Glass", period: "2025-Present", icon: Smartphone },

  { id: "conclusion", type: "conclusion", title: "The Future of Design" },
]

// Move historyData outside component to prevent recreating on each render
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
  "Experimental Design": {
    founders: ["Independent designers", "Creative technologists", "Digital art community"],
    location: "Global creative community",
    keyEvents: [
      { year: "2020", event: "COVID-19 accelerates digital experimentation" },
      { year: "2021", event: "NFT boom brings experimental aesthetics mainstream" },
      { year: "2022", event: "AI tools democratize experimental design creation" },
      { year: "2023", event: "WebGL and advanced CSS enable complex interactions" },
      { year: "2024", event: "Experimental design influences major brand identities" },
    ],
    philosophy:
      "Push boundaries of conventional design through technology, interactivity, and unconventional aesthetics. Embrace failure as part of the creative process.",
    context:
      "Rapid technological advancement and digital-first culture created space for radical experimentation. Traditional design rules questioned in digital-native environment.",
    impact:
      "Influenced mainstream design to be more dynamic, interactive, and technologically sophisticated. Bridged gap between art and commercial design.",
    notableWorks: [
      "Interactive web experiences",
      "Generative art projects",
      "AR/VR interfaces",
      "AI-assisted design tools",
    ],
    legacy:
      "Established expectation for dynamic, interactive digital experiences and normalized experimental approaches in commercial design.",
  },
  "Liquid Glass": {
    founders: ["Apple Design Team", "Craig Federighi", "Human Interface Team"],
    location: "Cupertino, California",
    keyEvents: [
      { year: "2025", event: "Liquid Glass introduced at WWDC 2025" },
      { year: "2025", event: "iOS 26 and macOS Tahoe launch with Liquid Glass" },
      { year: "2025", event: "Third-party developers adopt Liquid Glass principles" },
      { year: "2026", event: "Competitors respond with similar glass-like interfaces" },
      { year: "2026", event: "Liquid Glass expands to Apple Vision Pro" },
    ],
    philosophy:
      "Interfaces should feel alive and responsive, mimicking the behavior of liquid glass that refracts light and responds to touch with fluid, natural motion.",
    context:
      "Advanced GPU capabilities and spatial computing demand more sophisticated visual languages. Users expect interfaces that feel magical and responsive.",
    impact:
      "Revolutionizing how we think about digital interfaces, making them feel more physical and emotionally engaging through advanced visual effects.",
    notableWorks: [
      "iOS 26 interface",
      "macOS Tahoe design",
      "Apple Vision Pro spatial UI",
      "Third-party app adoptions",
    ],
    legacy:
      "Establishing new standards for premium digital interfaces and pushing the boundaries of what's possible in real-time interface rendering.",
  },
}

export default function DesignBookComplete() {
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

  // All design components
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

  // NEW: Experimental Design Component
  const ExperimentalDesign = () => (
    <div className="min-h-[600px] bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-cyan-300/30 to-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-tl from-emerald-300/40 to-teal-400/30 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-lime-300/20 to-cyan-300/30 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 p-8 max-w-6xl mx-auto">
        {/* Status Bar - Skeuomorphic */}
        <div className="mb-8">
          <Card className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-xl border-slate-600/50 shadow-2xl">
            <CardContent className="p-4">
              <div className="flex justify-between items-center text-white">
                <div className="flex items-center gap-4">
                  <div className="text-lg font-medium">9:41 AM</div>
                  <div className="bg-emerald-500/80 text-white border-emerald-400/50 px-2 py-1 rounded text-xs flex items-center gap-1">
                    <Leaf className="w-3 h-3" />
                    Eco Mode
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Signal className="w-4 h-4" />
                  <Wifi className="w-4 h-4" />
                  <Battery className="w-4 h-4" />
                  <div className="text-sm">100%</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Weather Widget - Glassmorphic with Frutiger Aero elements */}
          <Card className="bg-white/20 backdrop-blur-xl border-white/30 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Sun className="w-8 h-8 text-yellow-400 drop-shadow-lg" />
                  <div>
                    <h3 className="text-xl font-bold text-white drop-shadow-md">Sunny</h3>
                    <p className="text-white/80 text-sm">San Francisco</p>
                  </div>
                </div>
                <div className="text-3xl font-bold text-white drop-shadow-lg">72°</div>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-4">
                <div className="text-center">
                  <Wind className="w-5 h-5 text-cyan-300 mx-auto mb-1" />
                  <div className="text-xs text-white/80">12 mph</div>
                </div>
                <div className="text-center">
                  <Droplets className="w-5 h-5 text-blue-300 mx-auto mb-1" />
                  <div className="text-xs text-white/80">45%</div>
                </div>
                <div className="text-center">
                  <Cloud className="w-5 h-5 text-gray-300 mx-auto mb-1" />
                  <div className="text-xs text-white/80">Few</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Music Player - Skeuomorphic */}
          <Card className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl border-slate-600/50 shadow-2xl">
            <CardContent className="p-6">
              <div className="text-center mb-4">
                <div className="w-20 h-20 mx-auto mb-3 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-full shadow-inner flex items-center justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-cyan-600 rounded-full shadow-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-slate-800 rounded-full"></div>
                  </div>
                </div>
                <h3 className="text-white font-semibold">Nature Sounds</h3>
                <p className="text-white/60 text-sm">Ambient Collection</p>
              </div>

              <div className="flex justify-center gap-4 mb-4">
                <Button
                  size="sm"
                  className="bg-gradient-to-b from-slate-600 to-slate-700 hover:from-slate-500 hover:to-slate-600 shadow-lg border-slate-500"
                >
                  <ArrowLeft className="w-4 h-4" />
                </Button>
                <Button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="bg-gradient-to-b from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 shadow-lg border-emerald-400 w-12 h-12 rounded-full"
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                </Button>
                <Button
                  size="sm"
                  className="bg-gradient-to-b from-slate-600 to-slate-700 hover:from-slate-500 hover:to-slate-600 shadow-lg border-slate-500"
                >
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>

              <div className="flex items-center gap-2">
                <Volume2 className="w-4 h-4 text-white/60" />
                <div className="flex-1 h-2 bg-slate-700 rounded-full overflow-hidden shadow-inner">
                  <div
                    className="h-full bg-gradient-to-r from-emerald-400 to-cyan-400 shadow-sm"
                    style={{ width: `75%` }}
                  ></div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Energy Widget - Frutiger Aero inspired */}
          <Card className="bg-gradient-to-br from-lime-400/30 to-emerald-500/30 backdrop-blur-xl border-lime-300/40 shadow-2xl">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-lime-400 to-emerald-500 rounded-full shadow-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg drop-shadow-md">Energy</h3>
                  <p className="text-white/80 text-sm">Clean & Renewable</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-white/90 text-sm">Solar</span>
                  <span className="text-white font-semibold">85%</span>
                </div>
                <div className="h-2 bg-white/20 rounded-full overflow-hidden shadow-inner">
                  <div className="h-full w-[85%] bg-gradient-to-r from-yellow-400 to-orange-400 shadow-sm"></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-white/90 text-sm">Wind</span>
                  <span className="text-white font-semibold">62%</span>
                </div>
                <div className="h-2 bg-white/20 rounded-full overflow-hidden shadow-inner">
                  <div className="h-full w-[62%] bg-gradient-to-r from-cyan-400 to-blue-400 shadow-sm"></div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Notification Panel - Glassmorphic */}
          <Card className="bg-white/10 backdrop-blur-2xl border-white/20 shadow-2xl md:col-span-2 lg:col-span-3">
            <CardContent className="p-6">
              <h3 className="text-white font-bold text-lg mb-4 drop-shadow-md">Recent Activity</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { icon: Leaf, text: "Eco mode activated", time: "2 min ago", color: "emerald" },
                  { icon: Droplets, text: "Water usage optimized", time: "5 min ago", color: "blue" },
                  { icon: Sun, text: "Solar panels at peak", time: "12 min ago", color: "yellow" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20"
                  >
                    <div
                      className={`w-8 h-8 bg-gradient-to-br from-${item.color}-400 to-${item.color}-500 rounded-full flex items-center justify-center shadow-lg`}
                    >
                      <item.icon className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-white text-sm font-medium">{item.text}</p>
                      <p className="text-white/60 text-xs">{item.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )

  // NEW: Liquid Glass Design Component
  const LiquidGlassDesign = () => (
    <div className="min-h-[600px] bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Dynamic background with liquid-like movement */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-300"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10 p-8">
        <div className="max-w-4xl mx-auto">
          {/* Header with liquid glass effect */}
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
                    { icon: Music, name: "Music", color: "from-pink-400 to-rose-500" },
                    { icon: User, name: "Contacts", color: "from-orange-400 to-amber-500" },
                    { icon: Clock, name: "Clock", color: "from-purple-400 to-violet-500" },
                    { icon: Search, name: "Search", color: "from-indigo-400 to-blue-500" },
                  ].map((app, i) => (
                    <div key={i} className="text-center">
                      <div
                        className={`w-14 h-14 bg-gradient-to-br ${app.color}/30 backdrop-blur-xl border border-white/20 rounded-2xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300`}
                      >
                        <app.icon className="w-7 h-7 text-white drop-shadow-lg" />
                      </div>
                      <div className="text-white text-xs mt-1 drop-shadow-sm">{app.name}</div>
                    </div>
                  ))}
                </div>

                {/* Control Center with liquid glass */}
                <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-4 shadow-2xl">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl p-4 text-center">
                      <Wifi className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                      <div className="text-white text-sm font-medium">Wi-Fi</div>
                      <div className="text-white/70 text-xs">Connected</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl p-4 text-center">
                      <Battery className="w-8 h-8 text-green-400 mx-auto mb-2" />
                      <div className="text-white text-sm font-medium">Battery</div>
                      <div className="text-white/70 text-xs">85%</div>
                    </div>
                  </div>

                  {/* Volume slider with liquid effect */}
                  <div className="mt-4 bg-white/15 backdrop-blur-xl border border-white/25 rounded-2xl p-4">
                    <div className="flex items-center gap-3">
                      <Volume2 className="w-5 h-5 text-white/80" />
                      <div className="flex-1 bg-white/20 rounded-full h-3 shadow-inner backdrop-blur-sm">
                        <div className="bg-gradient-to-r from-blue-400 to-purple-500 h-full w-2/3 rounded-full shadow-lg"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Home indicator */}
                <div className="mt-6 flex justify-center">
                  <div className="w-32 h-1 bg-white/40 rounded-full backdrop-blur-sm"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400/30 to-cyan-500/30 backdrop-blur-xl border border-white/30 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <Layers className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">Depth & Layers</h3>
                <p className="text-white/70 text-sm">Multiple translucent layers create natural depth perception</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400/30 to-pink-500/30 backdrop-blur-xl border border-white/30 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">Dynamic Refraction</h3>
                <p className="text-white/70 text-sm">Interface elements refract light and respond to movement</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-400/30 to-teal-500/30 backdrop-blur-xl border border-white/30 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">Sensory Computing</h3>
                <p className="text-white/70 text-sm">Interfaces that respond to your senses, not just taps</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )

  // All other components (CoverPage, TableOfContents, etc.) remain the same...
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
            <div className="text-white text-sm">Experimental</div>
          </div>
        </div>

        <div className="text-white/60 text-lg">
          {bookPages.length} Pages • 18 Design Movements • Rich Historical Context
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
      { title: "Experimental & Future", subtitle: "2020s - Future", pages: [42, 43, 44, 45, 46, 47] },
      { title: "Conclusion", subtitle: "The Future of Design", pages: [48] },
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
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>NEW: Experimental Design and Apple's Liquid Glass</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }

  const IntroductionPage = () => (
    <div className="min-h-screen bg-white p-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-800 mb-6">Introduction</h1>
        <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mb-8"></div>
        <p className="text-xl text-gray-700 leading-relaxed mb-8">
          Welcome to "The Visual Evolution," a comprehensive journey through the history of design movements from the
          early 1900s to the cutting-edge developments of today. This book explores the principles, key figures, and
          cultural impact of each movement, providing insights into how design has shaped our world and continues to
          evolve.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed">
          From the revolutionary Bauhaus movement to Apple's latest Liquid Glass interface language, we trace the
          threads that connect historical design principles to contemporary digital experiences. Each movement is
          presented with both historical context and visual examples, allowing you to understand not just what these
          styles looked like, but why they emerged and how they influenced the future of design.
        </p>
      </div>
    </div>
  )

  const ChapterDivider = ({ chapter, subtitle }) => (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-12 flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-6">{chapter}</h1>
        <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mb-8 mx-auto"></div>
        <p className="text-2xl text-gray-700 leading-relaxed">{subtitle}</p>
      </div>
    </div>
  )

  const ConclusionPage = () => (
    <div className="min-h-screen bg-white p-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-800 mb-6">The Future of Design</h1>
        <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mb-8"></div>
        <p className="text-xl text-gray-700 leading-relaxed mb-8">
          As we look to the future, design will continue to evolve, driven by technological advancements, changing
          cultural values, and new ways of human-computer interaction. The movements explored in this book serve as a
          foundation for understanding the past and shaping the future of design.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          From Apple's Liquid Glass to experimental AI-generated interfaces, we're entering an era where design becomes
          more fluid, responsive, and emotionally intelligent. The principles we've learned from historical
          movements—clarity from Swiss Design, playfulness from Memphis, environmental consciousness from Frutiger
          Aero—will continue to inform and inspire future innovations.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed">The visual evolution continues, and you are part of it.</p>
      </div>
    </div>
  )

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

  const StylePage = ({ style, period, icon: IconComponent }) => {
    const styleComponents = {
      Bauhaus: BauhausDesign,
      "Art Deco": ArtDecoDesign,
      "Swiss Design": SwissDesign,
      "Memphis Design": MemphisDesign,
      Skeuomorphism: SkeuomorphismDesign,
      "Flat Design": FlatDesign,
      "Material Design": MaterialDesign,
      Neumorphism: NeumorphismDesign,
      Brutalism: BrutalismDesign,
      Glassmorphism: GlassmorphismDesign,
      "Dark Mode": DarkModeDesign,
      Claymorphism: ClaymorphismDesign,
      Vaporwave: VaporwaveDesign,
      Y2K: Y2KDesign,
      "Frutiger Aero": FrutigerAeroDesign,
      Cyberpunk: CyberpunkDesign,
      "Experimental Design": ExperimentalDesign,
      "Liquid Glass": LiquidGlassDesign,
    }

    const Component = styleComponents[style]

    if (!Component) {
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
              <p className="text-xl text-gray-700 leading-relaxed">Visual example for {style} coming soon...</p>
            </div>
          </div>
        </div>
      )
    }

    return <Component />
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
            <ArrowLeft className="w-4 h-4" />
          </Button>

          <div className="text-gray-700 text-sm font-medium min-w-20 text-center">
            {currentPage + 1} / {totalPages}
          </div>

          <Button
            onClick={nextPage}
            disabled={currentPage === totalPages - 1}
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 border-0 rounded-full w-10 h-10 p-0 disabled:opacity-50"
          >
            <ArrowRight className="w-4 h-4" />
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
            <BookOpen className={`w-4 h-4 ${bookmarkPage === currentPage ? "fill-current text-blue-500" : ""}`} />
          </Button>

          <Button className="bg-white/90 hover:bg-white text-gray-700 border border-gray-200 rounded-full w-12 h-12 p-0">
            <ShareIcon className="w-4 h-4" />
          </Button>

          <Button className="bg-white/90 hover:bg-white text-gray-700 border border-gray-200 rounded-full w-12 h-12 p-0">
            <DownloadIcon className="w-4 h-4" />
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
