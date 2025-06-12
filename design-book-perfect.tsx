"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { trackEvent } from "@/components/Analytics"
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
  Users,
  Lightbulb,
  Globe,
  Play,
  Pause,
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
  ShoppingCart,
  MessageCircle,
  Camera,
  Headphones,
  CloudRain,
  Zap as ZapIcon,
  Shield,
  TrendingUp,
  Award,
  Target,
  Briefcase,
  Coffee,
  Gamepad,
  Terminal,
  Info,
} from "lucide-react"

// Complete book structure with ALL design movements
const bookPages = [
  { id: "cover", type: "cover", title: "The Visual Evolution" },
  { id: "toc", type: "toc", title: "Table of Contents" },
  { id: "intro", type: "intro", title: "Introduction" },

  // Historical Foundations (1900s-1980s)
  { id: "historical-divider", type: "chapter-divider", chapter: "Historical Foundations", subtitle: "1900s - 1980s", description: "The foundational movements that shaped modern design" },
  { id: "bauhaus-history", type: "history", style: "Bauhaus", period: "1919-1933", icon: Grid },
  { id: "bauhaus-design", type: "style", style: "Bauhaus", period: "1919-1933", icon: Grid },
  { id: "artdeco-history", type: "history", style: "Art Deco", period: "1920s-1930s", icon: Gem },
  { id: "artdeco-design", type: "style", style: "Art Deco", period: "1920s-1930s", icon: Gem },
  { id: "swiss-history", type: "history", style: "Swiss Design", period: "1950s-1960s", icon: Square },
  { id: "swiss-design", type: "style", style: "Swiss Design", period: "1950s-1960s", icon: Square },
  { id: "memphis-history", type: "history", style: "Memphis Design", period: "1980s", icon: Triangle },
  { id: "memphis-design", type: "style", style: "Memphis Design", period: "1980s", icon: Triangle },

  // Digital Revolution (1990s-2010s)
  { id: "digital-divider", type: "chapter-divider", chapter: "The Digital Revolution", subtitle: "1990s - 2010s", description: "The emergence of digital interfaces and screen-based design" },
  { id: "skeuomorphism-history", type: "history", style: "Skeuomorphism", period: "2000s-2010s", icon: Eye },
  { id: "skeuomorphism-design", type: "style", style: "Skeuomorphism", period: "2000s-2010s", icon: Eye },
  { id: "flat-history", type: "history", style: "Flat Design", period: "2010s", icon: Square },
  { id: "flat-design", type: "style", style: "Flat Design", period: "2010s", icon: Square },
  { id: "material-history", type: "history", style: "Material Design", period: "2014-Present", icon: Layers },
  { id: "material-design", type: "style", style: "Material Design", period: "2014-Present", icon: Layers },
  { id: "neumorphism-history", type: "history", style: "Neumorphism", period: "2019-2020", icon: Circle },
  { id: "neumorphism-design", type: "style", style: "Neumorphism", period: "2019-2020", icon: Circle },

  // Contemporary Movements (2010s-Present)
  { id: "contemporary-divider", type: "chapter-divider", chapter: "Contemporary Movements", subtitle: "2010s - Present", description: "Modern design movements breaking conventional rules" },
  { id: "brutalism-history", type: "history", style: "Brutalism", period: "2010s-Present", icon: Zap },
  { id: "brutalism-design", type: "style", style: "Brutalism", period: "2010s-Present", icon: Zap },
  { id: "glassmorphism-history", type: "history", style: "Glassmorphism", period: "2020-Present", icon: Eye },
  { id: "glassmorphism-design", type: "style", style: "Glassmorphism", period: "2020-Present", icon: Eye },
  { id: "darkmode-history", type: "history", style: "Dark Mode", period: "2018-Present", icon: Monitor },
  { id: "darkmode-design", type: "style", style: "Dark Mode", period: "2018-Present", icon: Monitor },
  { id: "claymorphism-history", type: "history", style: "Claymorphism", period: "2021-Present", icon: Circle },
  { id: "claymorphism-design", type: "style", style: "Claymorphism", period: "2021-Present", icon: Circle },

  // Digital Aesthetics (Cultural Phenomena)
  { id: "aesthetic-divider", type: "chapter-divider", chapter: "Digital Aesthetics", subtitle: "Cultural Phenomena", description: "Internet-born aesthetics and nostalgic movements" },
  { id: "vaporwave-history", type: "history", style: "Vaporwave", period: "2010s-Present", icon: Music },
  { id: "vaporwave-design", type: "style", style: "Vaporwave", period: "2010s-Present", icon: Music },
  { id: "y2k-history", type: "history", style: "Y2K", period: "Late 90s-Early 2000s", icon: Cpu },
  { id: "y2k-design", type: "style", style: "Y2K", period: "Late 90s-Early 2000s", icon: Cpu },
  { id: "frutiger-history", type: "history", style: "Frutiger Aero", period: "2004-2013", icon: Leaf },
  { id: "frutiger-design", type: "style", style: "Frutiger Aero", period: "2004-2013", icon: Leaf },
  { id: "cyberpunk-history", type: "history", style: "Cyberpunk", period: "1980s-Present", icon: Gamepad2 },
  { id: "cyberpunk-design", type: "style", style: "Cyberpunk", period: "1980s-Present", icon: Gamepad2 },

  // Experimental & Future (2020s-Future)
  { id: "experimental-divider", type: "chapter-divider", chapter: "Experimental & Future", subtitle: "2020s - Future", description: "Cutting-edge and speculative design concepts" },
  { id: "experimental-history", type: "history", style: "Experimental Design", period: "2020s-Present", icon: Beaker },
  { id: "experimental-design", type: "style", style: "Experimental Design", period: "2020s-Present", icon: Beaker },
  { id: "quantum-history", type: "history", style: "Quantum UI", period: "2023-Present", icon: Zap },
  { id: "quantum-design", type: "style", style: "Quantum UI", period: "2023-Present", icon: Zap },
  { id: "liquidglass-history", type: "history", style: "Liquid Glass", period: "2025-Present", icon: Smartphone },
  { id: "liquidglass-design", type: "style", style: "Liquid Glass", period: "2025-Present", icon: Smartphone },

  { id: "conclusion", type: "conclusion", title: "The Future of Design" },
]

// Complete historical data for ALL movements
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
      { year: "1920s", event: "Movement begins in Paris" },
      { year: "1925", event: "Exposition Internationale des Arts Décoratifs in Paris" },
      { year: "1930", event: "Chrysler Building completed in New York" },
      { year: "1931", event: "Empire State Building exemplifies Art Deco architecture" },
      { year: "1939", event: "Movement declines with start of WWII" },
    ],
    philosophy: "Luxury, glamour, and modernity with machine age aesthetics. Art Deco celebrated technological progress and the modern industrial world.",
    context: "The Roaring Twenties brought economic prosperity and optimism about technology. Society embraced luxury and progress after WWI.",
    impact: "Influenced architecture, fashion, jewelry, and graphic design, becoming synonymous with luxury and modernity.",
    notableWorks: ["Chrysler Building", "Rockefeller Center", "Miami Beach Art Deco District"],
    legacy: "Still influences luxury branding, hotel design, and architectural details in contemporary design.",
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
    philosophy: "Objectivity, clarity, and functionality. Design should communicate clearly without personal expression interfering with the message.",
    context: "Post-WWII reconstruction needed clear, efficient communication. Switzerland's neutrality allowed for objective, non-political design approach.",
    impact: "Became the foundation for corporate identity design and influenced graphic design education worldwide.",
    notableWorks: ["Helvetica typeface", "Swiss International Airlines branding", "Müller-Brockmann concert posters"],
    legacy: "Modern corporate branding, grid systems in web design, and minimalist graphic design all stem from Swiss Design principles.",
  },
  "Memphis Design": {
    founders: ["Ettore Sottsass", "Michele De Lucchi", "Matteo Thun", "George Sowden"],
    location: "Milan, Italy",
    keyEvents: [
      { year: "1981", event: "Memphis Group founded by Ettore Sottsass" },
      { year: "1981", event: "First Memphis exhibition at Salone del Mobile" },
      { year: "1982-1987", event: "Peak years of Memphis furniture production" },
      { year: "1988", event: "Group officially dissolves" },
      { year: "2000s", event: "Revival in contemporary design and fashion" },
    ],
    philosophy: "Reject functionalism in favor of playful, expressive design. Challenge conventional rules with bold colors and unconventional forms.",
    context: "Reaction against the minimalism of the 1970s. Postmodernism encouraged experimentation and rule-breaking in design.",
    impact: "Influenced fashion, furniture, and graphic design, paving the way for postmodern aesthetics and experimental design.",
    notableWorks: ["Carlton Room Divider", "Tahiti Lamp", "Beverly Sideboard"],
    legacy: "Contemporary maximalist design, bold color palettes, and experimental furniture design trace back to Memphis principles.",
  },
  Skeuomorphism: {
    founders: ["Apple Design Team", "Jonathan Ive", "Scott Forstall"],
    location: "Cupertino, California (Apple) and globally",
    keyEvents: [
      { year: "2000s", event: "Early digital interfaces begin mimicking real objects" },
      { year: "2007", event: "iPhone launch showcases skeuomorphic iOS" },
      { year: "2010", event: "iPad further popularizes skeuomorphic design" },
      { year: "2011", event: "iOS peak skeuomorphism with iOS 6" },
      { year: "2013", event: "iOS 7 marks shift away from skeuomorphism" },
    ],
    philosophy: "Digital interfaces should mimic familiar real-world objects to help users understand new technology.",
    context: "Early smartphone and tablet users needed familiar visual cues to navigate new digital interfaces.",
    impact: "Made digital interfaces more accessible but eventually became seen as unnecessary decoration.",
    notableWorks: ["iOS Calendar app", "macOS Leather Address Book", "Windows XP icons"],
    legacy: "Taught users digital interface conventions, paving the way for more abstract design approaches.",
  },
  "Flat Design": {
    founders: ["Microsoft Design Team", "Apple Design Team", "Google Material Team"],
    location: "Global tech companies",
    keyEvents: [
      { year: "2010", event: "Microsoft introduces Metro design language" },
      { year: "2012", event: "Windows Phone 7 showcases flat design" },
      { year: "2013", event: "iOS 7 abandons skeuomorphism for flat design" },
      { year: "2014", event: "Google introduces Material Design" },
      { year: "2015", event: "Flat design becomes industry standard" },
    ],
    philosophy: "Remove all decorative elements and focus on functionality, simplicity, and content.",
    context: "High-resolution screens made detailed textures unnecessary. Focus shifted to performance and loading speed.",
    impact: "Revolutionized digital design by prioritizing functionality over decoration.",
    notableWorks: ["iOS 7 interface", "Windows Phone Metro", "Google Material Design"],
    legacy: "Established modern digital design principles emphasizing simplicity and performance.",
  },
  "Material Design": {
    founders: ["Google Design Team", "Matias Duarte", "Nicholas Jitkoff"],
    location: "Mountain View, California (Google)",
    keyEvents: [
      { year: "2014", event: "Material Design introduced at Google I/O" },
      { year: "2015", event: "Material Design implemented across Google products" },
      { year: "2016", event: "Material Design Lite launched for web" },
      { year: "2018", event: "Material Design 2.0 (Material Theming) released" },
      { year: "2021", event: "Material You (Material Design 3) introduced" },
    ],
    philosophy: "Combine the best of flat design with subtle depth and meaningful motion inspired by paper and ink.",
    context: "Response to criticism that flat design was too stark. Needed to add warmth while maintaining simplicity.",
    impact: "Influenced design systems across the industry and established principles for motion and depth.",
    notableWorks: ["Android Material Design", "Google Web Apps", "Material Design Components"],
    legacy: "Set the standard for comprehensive design systems and component libraries.",
  },
  Neumorphism: {
    founders: ["Michal Malewicz", "Design community on Dribbble"],
    location: "Internet design communities",
    keyEvents: [
      { year: "2019", event: "Michal Malewicz coins the term 'Neumorphism'" },
      { year: "2020", event: "Trend explodes on Dribbble and design social media" },
      { year: "2020", event: "UI kits and design systems emerge" },
      { year: "2021", event: "Accessibility concerns lead to decline" },
      { year: "2022", event: "Used selectively for specific UI elements" },
    ],
    philosophy: "Soft, subtle interfaces that appear to extrude from their background with gentle shadows.",
    context: "Reaction against stark flat design. Designers sought to add depth while maintaining minimalism.",
    impact: "Short-lived but influential trend that explored new ways to create depth in digital interfaces.",
    notableWorks: ["Neumorphic calculator apps", "Music player interfaces", "Smart home dashboards"],
    legacy: "Influenced subtle depth effects and soft shadow techniques in contemporary UI design.",
  },
  Brutalism: {
    founders: ["Web design community", "Pascal Deville", "Heydays Studio"],
    location: "Global web design community",
    keyEvents: [
      { year: "2014", event: "Brutalist Websites collection begins" },
      { year: "2016", event: "Bloomberg.com redesign exemplifies digital brutalism" },
      { year: "2017", event: "Balenciaga website showcases luxury brutalism" },
      { year: "2018", event: "Brutalism influences mainstream web design" },
      { year: "2020", event: "COVID-19 drives more experimental digital design" },
    ],
    philosophy: "Raw, unrefined design that prioritizes function over beauty and breaks conventional rules.",
    context: "Reaction against polished, homogeneous web design. Desire for authentic, unpolished digital experiences.",
    impact: "Challenged design conventions and opened space for more experimental digital design.",
    notableWorks: ["Brutalist Websites", "Bloomberg Businessweek", "Yale School of Art website"],
    legacy: "Legitimized unconventional design approaches and experimental typography on the web.",
  },
  Glassmorphism: {
    founders: ["Apple Design Team", "Design community"],
    location: "Apple and design communities worldwide",
    keyEvents: [
      { year: "2020", event: "macOS Big Sur introduces frosted glass effects" },
      { year: "2020", event: "Design community embraces the aesthetic" },
      { year: "2021", event: "Windows 11 adopts similar translucent effects" },
      { year: "2021", event: "Web implementations become popular" },
      { year: "2022", event: "Glassmorphism becomes mainstream design trend" },
    ],
    philosophy: "Create depth and hierarchy through translucency, blur, and subtle borders rather than shadows.",
    context: "Advanced graphics capabilities allow for complex visual effects. Users appreciate premium, polished interfaces.",
    impact: "Brought elegance and sophistication to digital interfaces while maintaining readability.",
    notableWorks: ["macOS Big Sur interface", "Windows 11 design", "iOS Control Center"],
    legacy: "Established translucency and blur as legitimate design tools for creating visual hierarchy.",
  },
  "Dark Mode": {
    founders: ["Apple", "Google", "Microsoft"],
    location: "Major tech companies globally",
    keyEvents: [
      { year: "2018", event: "macOS Mojave introduces system-wide dark mode" },
      { year: "2019", event: "iOS 13 and Android 10 add dark mode support" },
      { year: "2020", event: "Windows 10 improves dark mode implementation" },
      { year: "2021", event: "Most major apps and websites support dark mode" },
      { year: "2022", event: "Dark mode becomes default for many users" },
    ],
    philosophy: "Reduce eye strain, improve battery life, and provide alternative aesthetic that some users prefer.",
    context: "Increased screen time and awareness of digital wellness. OLED screens benefit from dark pixels using less power.",
    impact: "Became essential feature for digital products and changed how designers think about color systems.",
    notableWorks: ["iOS Dark Mode", "Android Dark Theme", "Twitter Dark Mode"],
    legacy: "Established dual color schemes as standard practice in digital product design.",
  },
  Claymorphism: {
    founders: ["Michal Malewicz", "Design community"],
    location: "Design communities and agencies",
    keyEvents: [
      { year: "2021", event: "Claymorphism emerges as evolution of neumorphism" },
      { year: "2021", event: "3D clay-like aesthetics gain popularity" },
      { year: "2022", event: "Applied to branding and web design" },
      { year: "2022", event: "Animation and motion design adoption" },
      { year: "2023", event: "Integrated into design systems and component libraries" },
    ],
    philosophy: "Create warm, approachable interfaces using 3D clay-like elements with soft shadows and organic shapes.",
    context: "Pandemic-era design seeking comfort and warmth. Reaction against cold, sterile digital interfaces.",
    impact: "Added playfulness and approachability to digital design while maintaining sophistication.",
    notableWorks: ["Claymorphic mobile apps", "3D website elements", "Animated clay icons"],
    legacy: "Influenced organic shapes and warm color palettes in contemporary design.",
  },
  Vaporwave: {
    founders: ["Internet music communities", "Daniel Lopatin", "James Ferraro"],
    location: "Internet communities, originally music-focused",
    keyEvents: [
      { year: "2010", event: "Early vaporwave music emerges online" },
      { year: "2012", event: "Visual aesthetic crystallizes around the music" },
      { year: "2014", event: "Vaporwave aesthetics spread to design communities" },
      { year: "2016", event: "Mainstream brands adopt vaporwave elements" },
      { year: "2020", event: "Synthwave and retrowave become popular in UI design" },
    ],
    philosophy: "Nostalgic, dreamy aesthetic celebrating 80s and 90s technology and consumer culture.",
    context: "Internet nostalgia for pre-internet era. Ironic celebration of consumer culture and capitalism.",
    impact: "Influenced color palettes, typography, and visual aesthetics across design disciplines.",
    notableWorks: ["Vaporwave album covers", "Synthwave UI themes", "Retro gaming interfaces"],
    legacy: "Made neon colors and retro-futuristic aesthetics acceptable in contemporary design.",
  },
  Y2K: {
    founders: ["Late 90s tech culture", "Millennium celebration"],
    location: "Global technology and entertainment industries",
    keyEvents: [
      { year: "1999", event: "Y2K fears drive futuristic design trends" },
      { year: "2000", event: "Millennium celebration embraces chrome and gradients" },
      { year: "2001", event: "Tech bubble burst, but aesthetic continues" },
      { year: "2019", event: "Y2K revival begins in fashion and design" },
      { year: "2022", event: "Y2K aesthetic fully mainstream again" },
    ],
    philosophy: "Optimistic futurism with metallic textures, gradients, and technology-celebrating visuals.",
    context: "Millennium transition created excitement about the future and technology's possibilities.",
    impact: "Defined early 2000s visual culture and influenced digital design aesthetics.",
    notableWorks: ["Early Windows XP themes", "iPod advertising", "Early web design"],
    legacy: "Cyclical revival shows the enduring appeal of optimistic, technology-celebrating design.",
  },
  "Frutiger Aero": {
    founders: ["Corporate design teams", "Technology companies"],
    location: "Global corporate design (especially tech companies)",
    keyEvents: [
      { year: "2004", event: "Windows XP and early glossy web design popularize the look" },
      { year: "2007", event: "iPhone launch reinforces glossy, nature-inspired design" },
      { year: "2009", event: "Environmental awareness peaks, influencing design" },
      { year: "2011", event: "Skeuomorphic iOS represents peak Frutiger Aero" },
      { year: "2013", event: "Flat design movement ends Frutiger Aero dominance" },
    ],
    philosophy: "Clean, optimistic design combining technology with nature imagery and environmental responsibility.",
    context: "Environmental awareness growing alongside technological advancement. Corporate social responsibility becomes important.",
    impact: "Dominated corporate design for nearly a decade, especially in tech and environmental sectors.",
    notableWorks: ["Windows Vista/7 wallpapers", "Early iPhone interfaces", "Corporate environmental campaigns"],
    legacy: "Influenced contemporary sustainable design thinking and environmental responsibility in branding.",
  },
  Cyberpunk: {
    founders: ["William Gibson", "Ridley Scott", "Cyberpunk literature and film"],
    location: "Science fiction literature and film, later digital design",
    keyEvents: [
      { year: "1984", event: "William Gibson's 'Neuromancer' defines cyberpunk" },
      { year: "1982", event: "Blade Runner establishes cyberpunk visual language" },
      { year: "1995", event: "The Matrix popularizes cyberpunk aesthetics" },
      { year: "2010s", event: "Gaming industry embraces cyberpunk design" },
      { year: "2020", event: "Cyberpunk 2077 brings aesthetic to mainstream" },
    ],
    philosophy: "High-tech, low-life aesthetic exploring the intersection of technology and society.",
    context: "Dystopian fiction responding to rapid technological change and corporate power.",
    impact: "Influenced gaming, film, and digital interface design with neon colors and futuristic typography.",
    notableWorks: ["Cyberpunk 2077", "Tron Legacy", "Matrix digital interfaces"],
    legacy: "Provides visual language for discussing technology's impact on society and human experience.",
  },
  "Experimental Design": {
    founders: ["Design studios worldwide", "Independent designers", "Art schools"],
    location: "Global design community",
    keyEvents: [
      { year: "2020", event: "COVID-19 pushes designers to experiment with new approaches" },
      { year: "2021", event: "Web3 and NFTs create demand for experimental visuals" },
      { year: "2022", event: "AI tools democratize experimental design creation" },
      { year: "2023", event: "Experimental design influences mainstream products" },
      { year: "2024", event: "Virtual and augmented reality create new design possibilities" },
    ],
    philosophy: "Push boundaries of what's possible in design, exploring new technologies and creative approaches.",
    context: "Rapid technological advancement and cultural change drive experimentation in design.",
    impact: "Continuously pushes the field forward and influences the adoption of new design approaches.",
    notableWorks: ["Generative art projects", "AR/VR interfaces", "AI-assisted design"],
    legacy: "Represents the cutting edge of design practice and future possibilities.",
  },
  "Quantum UI": {
    founders: ["Organica AI Solutions", "AI-assisted designers", "Quantum computing researchers"],
    location: "Global (Research labs and tech companies)",
    keyEvents: [
      { year: "2023", event: "First quantum-inspired UI patterns emerge" },
      { year: "2024", event: "AI-generated morphing interfaces gain popularity" },
      { year: "2024", event: "Neural interface prototypes influence UI design" },
      { year: "2025", event: "Quantum UI principles adopted by major platforms" },
    ],
    philosophy: "Interfaces that exist in multiple states simultaneously, morphing based on context and user intent.",
    context: "Advances in quantum computing and AI create new paradigms for thinking about interface states and transitions.",
    impact: "Introduced concepts of probabilistic interfaces and reality-shifting UI elements.",
    notableWorks: ["Morphing interface systems", "AI-generated art integration", "Quantum state UI elements"],
    legacy: "Paving the way for neural interfaces and quantum-inspired interaction design.",
  },
  "Liquid Glass": {
    founders: ["Apple Design Team", "Craig Federighi", "Human Interface Team"],
    location: "Cupertino, California",
    keyEvents: [
      { year: "2025", event: "Liquid Glass introduced at WWDC 2025" },
      { year: "2025", event: "iOS 26 and macOS Tahoe launch with Liquid Glass" },
      { year: "2025", event: "Third-party developers adopt Liquid Glass principles" },
      { year: "2026", event: "Competitors respond with similar glass-like interfaces" },
      { year: "2026", event: "Liquid Glass expands to Apple Vision Pro and spatial computing" },
    ],
    philosophy: "Interfaces should feel alive and responsive, mimicking the behavior of liquid glass that refracts light and responds to touch with fluid, natural motion.",
    context: "Advanced GPU capabilities and spatial computing demand more sophisticated visual languages. Users expect interfaces that feel magical and responsive.",
    impact: "Revolutionizing how we think about digital interfaces, making them feel more physical and emotionally engaging through advanced visual effects.",
    notableWorks: ["iOS 26 interface", "macOS Tahoe design", "Apple Vision Pro spatial UI", "Third-party app adoptions"],
    legacy: "Establishing new standards for premium digital interfaces and pushing the boundaries of what's possible in real-time interface rendering.",
  },
}

export default function DesignBookPerfect() {
  const [currentPage, setCurrentPage] = useState(0)
  const [showTableOfContents, setShowTableOfContents] = useState(false)
  const [bookmarkPage, setBookmarkPage] = useState<number | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const totalPages = bookPages.length

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      const newPage = currentPage + 1
      setCurrentPage(newPage)
      trackEvent('page_navigation', {
        action: 'next',
        from_page: currentPage + 1,
        to_page: newPage + 1,
        page_title: getCurrentPageData().title || getCurrentPageData().style
      })
    }
  }

  const prevPage = () => {
    if (currentPage > 0) {
      const newPage = currentPage - 1
      setCurrentPage(newPage)
      trackEvent('page_navigation', {
        action: 'previous',
        from_page: currentPage + 1,
        to_page: newPage + 1,
        page_title: getCurrentPageData().title || getCurrentPageData().style
      })
    }
  }

  const goToPage = (pageIndex: number) => {
    setCurrentPage(pageIndex)
    setShowTableOfContents(false)
  }

  const getCurrentPageData = () => {
    return bookPages[currentPage]
  }

  // Perfect Cover Page with stunning design
  const CoverPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-tl from-purple-400/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-yellow-400/10 to-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 sm:py-16 flex items-center justify-center min-h-screen">
        <div className="max-w-6xl w-full text-center">
          <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 mx-auto mb-8 sm:mb-12 bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl transform hover:scale-110 transition-all duration-500">
            <BookOpen className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 text-white drop-shadow-lg" />
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent leading-tight px-4">
            The Visual Evolution
          </h1>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-white/90 mb-6 sm:mb-8 px-4">
            Complete Design Movements Collection
          </h2>

          <div className="text-lg sm:text-xl lg:text-2xl text-white/70 mb-8 sm:mb-12 px-4">
            From Bauhaus (1919) to Apple's Liquid Glass (2025+)
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 max-w-5xl mx-auto px-4">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <Palette className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-yellow-400 mx-auto mb-3 drop-shadow-lg" />
              <div className="text-white text-sm sm:text-base lg:text-lg font-semibold mb-1">Historical</div>
              <div className="text-white/60 text-xs sm:text-sm">1900s-1980s</div>
              <div className="text-white/40 text-xs mt-1">4 Movements</div>
            </div>
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <Monitor className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-blue-400 mx-auto mb-3 drop-shadow-lg" />
              <div className="text-white text-sm sm:text-base lg:text-lg font-semibold mb-1">Digital</div>
              <div className="text-white/60 text-xs sm:text-sm">1990s-2010s</div>
              <div className="text-white/40 text-xs mt-1">4 Movements</div>
            </div>
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-pink-400 mx-auto mb-3 drop-shadow-lg" />
              <div className="text-white text-sm sm:text-base lg:text-lg font-semibold mb-1">Contemporary</div>
              <div className="text-white/60 text-xs sm:text-sm">2010s-Present</div>
              <div className="text-white/40 text-xs mt-1">4 Movements</div>
            </div>
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <Eye className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-purple-400 mx-auto mb-3 drop-shadow-lg" />
              <div className="text-white text-sm sm:text-base lg:text-lg font-semibold mb-1">Future</div>
              <div className="text-white/60 text-xs sm:text-sm">2020s+</div>
              <div className="text-white/40 text-xs mt-1">7 Movements</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-sm sm:text-base lg:text-lg text-white/60 px-4">
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 lg:w-6 lg:h-6" />
              <span>{bookPages.length} Interactive Pages</span>
            </div>
            <div className="flex items-center gap-3">
              <Star className="w-5 h-5 lg:w-6 lg:h-6" />
              <span>106+ Years of Design</span>
            </div>
            <div className="flex items-center gap-3">
              <Sparkles className="w-5 h-5 lg:w-6 lg:h-6" />
              <span>20 Design Movements</span>
            </div>
          </div>

          <div className="mt-8 sm:mt-12">
            <Badge className="bg-gradient-to-r from-green-400 to-emerald-500 text-white px-6 py-2 text-sm sm:text-base font-semibold shadow-xl">
              ✨ Including Apple's Liquid Glass (2025)
            </Badge>
          </div>
        </div>
      </div>
    </div>
  )

  // Perfect Table of Contents
  const TableOfContents = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 p-8 sm:p-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">Complete Collection</h1>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg sm:text-xl text-gray-600 mb-8">Navigate through 106+ years of design evolution</p>
          <Badge className="bg-gradient-to-r from-green-400 to-emerald-500 text-white px-6 py-2 text-sm font-semibold">
            ✨ All Design Movements • Fully Interactive
          </Badge>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {[
            { 
              chapter: "Historical Foundations", 
              subtitle: "1900s - 1980s", 
              description: "The foundational movements that shaped modern design",
              movements: ["Bauhaus", "Art Deco", "Swiss Design", "Memphis Design"]
            },
            { 
              chapter: "The Digital Revolution", 
              subtitle: "1990s - 2010s", 
              description: "The emergence of digital interfaces and screen-based design",
              movements: ["Skeuomorphism", "Flat Design", "Material Design", "Neumorphism"]
            },
            { 
              chapter: "Contemporary Movements", 
              subtitle: "2010s - Present", 
              description: "Modern design movements breaking conventional rules",
              movements: ["Brutalism", "Glassmorphism", "Dark Mode", "Claymorphism"]
            },
            { 
              chapter: "Digital Aesthetics", 
              subtitle: "Cultural Phenomena", 
              description: "Internet-born aesthetics and nostalgic movements",
              movements: ["Vaporwave", "Y2K", "Frutiger Aero", "Cyberpunk"]
            },
            { 
              chapter: "Experimental & Future", 
              subtitle: "2020s - Future", 
              description: "Cutting-edge and speculative design concepts",
              movements: ["Experimental Design", "Quantum UI", "Liquid Glass"]
            },
          ].map((chapter, index) => (
            <Card key={index} className="p-6 hover:shadow-xl transition-shadow duration-300 cursor-pointer">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{chapter.chapter}</h3>
                  <p className="text-gray-600">{chapter.subtitle}</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">{chapter.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {chapter.movements.map((movement, i) => (
                  <Badge key={i} variant="outline" className="text-xs">
                    {movement}
                  </Badge>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{chapter.movements.length * 2} pages</span>
                <Button size="sm" className="bg-blue-500 hover:bg-blue-600">Explore</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )

  // Perfect Bauhaus Design with authentic visual elements
  const BauhausDesign = () => (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-12 gap-4 mb-8">
          <div className="col-span-8">
            <h1 className="text-6xl sm:text-8xl font-bold text-black mb-4 tracking-tight">BAUHAUS</h1>
            <div className="flex gap-4 mb-6">
              <div className="w-16 h-16 bg-red-500"></div>
              <div className="w-16 h-16 bg-blue-500"></div>
              <div className="w-16 h-16 bg-yellow-500"></div>
            </div>
          </div>
          <div className="col-span-4 flex items-center justify-center">
            <div className="w-32 h-32 bg-black transform rotate-45"></div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6">
            <h2 className="text-2xl font-bold text-black mb-4">FORM</h2>
            <div className="space-y-4">
              <div className="w-full h-4 bg-red-500"></div>
              <div className="w-3/4 h-4 bg-blue-500"></div>
              <div className="w-1/2 h-4 bg-yellow-500"></div>
            </div>
          </div>

          <div className="bg-black text-white p-6">
            <h2 className="text-2xl font-bold mb-4">FUNCTION</h2>
            <div className="grid grid-cols-2 gap-2">
              <div className="aspect-square bg-white"></div>
              <div className="aspect-square bg-red-500"></div>
              <div className="aspect-square bg-blue-500"></div>
              <div className="aspect-square bg-yellow-500"></div>
            </div>
          </div>

          <div className="bg-gray-200 p-6">
            <h2 className="text-2xl font-bold text-black mb-4">CRAFT</h2>
            <div className="space-y-2">
              <div className="h-2 bg-black"></div>
              <div className="h-2 bg-black w-4/5"></div>
              <div className="h-2 bg-black w-3/5"></div>
              <div className="h-2 bg-black w-2/5"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  // Perfect Liquid Glass Design with advanced effects
  const LiquidGlassDesign = () => (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Very subtle background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-32 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-40 w-80 h-80 bg-indigo-100/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 p-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-6xl font-light text-gray-700 mb-6">Liquid Glass</h1>
            <p className="text-2xl text-gray-500 font-light">Apple's Spatial Interface Language</p>
            <p className="text-lg text-gray-400">2025 - Present</p>
          </div>

          {/* Main Interface Mockup - Much More Subtle */}
          <div className="bg-white/20 rounded-3xl p-8 mb-8" style={{ backdropFilter: 'blur(8px)' }}>
            <div className="flex justify-between items-center mb-8">
              <div className="text-4xl font-light text-gray-700">9:41</div>
              <div className="text-xl text-gray-500">Tue Apr 1</div>
            </div>

            {/* Widget Grid - Extremely Subtle */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              {/* Weather Widget */}
              <div className="col-span-2 bg-white/30 rounded-2xl p-6 hover:bg-white/40 transition-all duration-300" style={{ backdropFilter: 'blur(4px)' }}>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-sm text-gray-500">San Francisco</div>
                    <div className="text-3xl font-light text-gray-700">72°</div>
                  </div>
                  <div className="w-12 h-12 bg-yellow-200/50 rounded-full flex items-center justify-center">
                    <Sun className="w-6 h-6 text-yellow-600" />
                  </div>
                </div>
                <div className="text-sm text-gray-500">Partly Cloudy</div>
                <div className="text-xs text-gray-400 mt-1">H:76° L:65°</div>
              </div>

              {/* Calendar Widget */}
              <div className="bg-white/25 rounded-2xl p-4 hover:bg-white/35 transition-all duration-300" style={{ backdropFilter: 'blur(4px)' }}>
                <div className="text-center">
                  <div className="text-xs text-gray-400 uppercase tracking-wide mb-1">April</div>
                  <div className="text-3xl font-light text-gray-700 mb-2">1</div>
                  <div className="text-xs text-gray-500">Tuesday</div>
                </div>
              </div>

              {/* Photos Widget */}
              <div className="bg-white/20 rounded-2xl p-4 hover:bg-white/30 transition-all duration-300" style={{ backdropFilter: 'blur(4px)' }}>
                <div className="w-full h-16 bg-purple-100/40 rounded-xl mb-2 flex items-center justify-center">
                  <Camera className="w-6 h-6 text-gray-500" />
                </div>
                <div className="text-xs text-gray-500 text-center">Photos</div>
              </div>
            </div>

                         {/* App Icons - Extremely Soft */}
             <div className="grid grid-cols-4 gap-6">
               {[
                 { icon: Phone, label: "Phone", bg: "bg-green-100/60" },
                 { icon: Mail, label: "Mail", bg: "bg-blue-100/60" },
                 { icon: Music, label: "Music", bg: "bg-pink-100/60" },
                 { icon: Camera, label: "Camera", bg: "bg-gray-100/60" },
               ].map((app, i) => (
                 <div key={i} className="text-center">
                   <div className={`w-16 h-16 ${app.bg} rounded-2xl mx-auto mb-2 flex items-center justify-center hover:scale-105 transition-transform duration-200`} style={{ backdropFilter: 'blur(2px)' }}>
                     <app.icon className="w-8 h-8 text-gray-600" />
                   </div>
                   <div className="text-xs text-gray-500">{app.label}</div>
                 </div>
               ))}
             </div>
          </div>

          {/* Technical Principles */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
              <h3 className="text-2xl font-light text-gray-700 mb-6">Design Principles</h3>
              <div className="space-y-4">
                {[
                  "Ultra-subtle transparency layers",
                  "Seamless wallpaper integration", 
                  "Refined blur effects",
                  "Spatial depth perception",
                  "Organic glass behavior"
                ].map((principle, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-400/40 rounded-full"></div>
                    <span className="text-gray-600">{principle}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
              <h3 className="text-2xl font-light text-gray-700 mb-6">Technical Innovation</h3>
              <div className="space-y-4">
                <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                  <h4 className="font-medium text-gray-700 mb-2">Adaptive Transparency</h4>
                  <p className="text-sm text-gray-600">Elements adjust opacity based on content beneath</p>
                </div>
                <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                  <h4 className="font-medium text-gray-700 mb-2">Contextual Blur</h4>
                  <p className="text-sm text-gray-600">Blur intensity varies with background complexity</p>
                </div>
                <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                  <h4 className="font-medium text-gray-700 mb-2">Liquid Physics</h4>
                  <p className="text-sm text-gray-600">Natural, fluid response to user interaction</p>
                </div>
                
                {/* Technical Note */}
                <div className="bg-amber-50/50 border border-amber-200/30 rounded-2xl p-4 mt-6">
                  <h4 className="font-medium text-amber-800 mb-2 flex items-center gap-2">
                    <Info className="w-4 h-4" />
                    Native vs Web Implementation
                  </h4>
                  <p className="text-xs text-amber-700 leading-relaxed">
                    Apple's native Liquid Glass uses Swift/UIKit with direct GPU access via Metal API. 
                    Web implementations using CSS backdrop-filter are limited by browser rendering engines 
                    and cannot achieve the same level of system integration and performance as native iOS apps.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  // Perfect Frutiger Aero Design
  const FrutigerAeroDesign = () => (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-300 via-emerald-200 to-blue-400">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-cyan-300/30 to-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-tl from-emerald-300/40 to-teal-400/30 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-lime-300/20 to-cyan-400/20 rounded-full blur-xl animate-pulse"></div>
      </div>

      <div className="relative z-10 p-8 sm:p-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl sm:text-6xl font-light text-white mb-6 drop-shadow-2xl">
              Frutiger Aero
            </h1>
            <p className="text-xl text-white/90 mb-2">Clean Technology, Natural Harmony</p>
            <p className="text-base text-white/70">2004-2013 • Environmental Optimism Era</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="bg-white/20 backdrop-blur-xl border-white/30 shadow-2xl hover:shadow-3xl transition-all duration-300">
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
                  <div className="h-4 bg-white/20 rounded-full overflow-hidden shadow-inner">
                    <div className="h-full w-[92%] bg-gradient-to-r from-yellow-400 to-orange-400 shadow-sm rounded-full transition-all duration-1000"></div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mt-6">
                    <div className="text-center">
                      <Wind className="w-8 h-8 text-cyan-300 mx-auto mb-2" />
                      <div className="text-xs text-white/80">Clean Air</div>
                    </div>
                    <div className="text-center">
                      <Droplets className="w-8 h-8 text-blue-300 mx-auto mb-2" />
                      <div className="text-xs text-white/80">Pure Water</div>
                    </div>
                    <div className="text-center">
                      <Leaf className="w-8 h-8 text-green-300 mx-auto mb-2" />
                      <div className="text-xs text-white/80">Green Earth</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/15 backdrop-blur-xl border-white/25 shadow-2xl hover:shadow-3xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <Globe className="w-12 h-12 text-blue-400 drop-shadow-lg" />
                  <div>
                    <h3 className="text-2xl font-bold text-white drop-shadow-md">Eco System</h3>
                    <p className="text-white/80">Environmental Balance</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    { label: "Carbon Neutral", value: "98%", color: "from-green-400 to-emerald-500" },
                    { label: "Renewable Energy", value: "85%", color: "from-blue-400 to-cyan-500" },
                    { label: "Waste Reduction", value: "76%", color: "from-yellow-400 to-orange-500" },
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white/90 text-sm">{item.label}</span>
                        <span className="text-white font-semibold text-sm">{item.value}</span>
                      </div>
                      <div className="h-2 bg-white/20 rounded-full overflow-hidden shadow-inner">
                        <div className={`h-full bg-gradient-to-r ${item.color} shadow-sm rounded-full transition-all duration-1000`}
                             style={{ width: item.value }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )

  // Introduction Page
  const IntroductionPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 p-8 sm:p-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-800 mb-6">Introduction</h1>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
        </div>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Welcome to <strong>"The Visual Evolution,"</strong> a comprehensive journey through the history of design movements from the 
            early 1900s to the cutting-edge developments of today. This book explores the principles, key figures, and 
            cultural impact of each movement, providing insights into how design has shaped our world and continues to evolve.
          </p>
          
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            From the revolutionary Bauhaus movement to Apple's latest Liquid Glass interface language, we trace the 
            threads that connect historical design principles to contemporary digital experiences. Each movement is 
            presented with both historical context and visual examples, allowing you to understand not just what these 
            styles looked like, but why they emerged and how they influenced the future of design.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <Card className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">What You'll Discover</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 18 major design movements</li>
                <li>• 106+ years of design evolution</li>
                <li>• Interactive visual examples</li>
                <li>• Historical context and impact</li>
                <li>• Future design trends</li>
              </ul>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Navigation Guide</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Use arrow keys or buttons to navigate</li>
                <li>• Bookmark your favorite pages</li>
                <li>• Jump to chapters via table of contents</li>
                <li>• Share designs with colleagues</li>
                <li>• Download for offline reading</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )

  // Chapter Divider Pages
  const ChapterDivider = ({ chapter, subtitle, description }: { chapter: string, subtitle: string, description: string }) => (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 p-8 sm:p-12 flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-2xl">{chapter}</h1>
        <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-pink-500 mb-8 mx-auto"></div>
        <p className="text-2xl sm:text-3xl text-white/80 mb-8 font-light">{subtitle}</p>
        <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">{description}</p>
      </div>
    </div>
  )

  // Art Deco Design
  const ArtDecoDesign = () => (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 border-4 border-yellow-400 rotate-45"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 border-2 border-yellow-400 rotate-12"></div>
        </div>
        <div className="relative z-10 p-12">
          <div className="text-center mb-12">
            <h1 className="text-8xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              ART DECO
            </h1>
            <p className="text-2xl text-yellow-400">Luxury • Glamour • Modernity</p>
            <p className="text-lg text-white/70">1920s-1930s</p>
          </div>

          <div className="grid grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 backdrop-blur-xl border border-yellow-400/30">
              <CardContent className="p-8 text-center">
                <Gem className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-yellow-400 mb-4">Geometric Patterns</h3>
                <div className="space-y-2">
                  <div className="h-4 bg-gradient-to-r from-yellow-400 to-yellow-600 transform skew-x-12"></div>
                  <div className="h-4 bg-gradient-to-r from-yellow-400 to-yellow-600 w-3/4 mx-auto"></div>
                  <div className="h-4 bg-gradient-to-r from-yellow-400 to-yellow-600 w-1/2 mx-auto transform -skew-x-12"></div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-800/50 to-black/50 backdrop-blur-xl border border-gray-600">
              <CardContent className="p-8 text-center">
                <Star className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-yellow-400 mb-4">Metallic Finishes</h3>
                <div className="grid grid-cols-2 gap-2">
                  <div className="aspect-square bg-gradient-to-br from-yellow-400 to-yellow-600"></div>
                  <div className="aspect-square bg-gradient-to-br from-gray-400 to-gray-600"></div>
                  <div className="aspect-square bg-gradient-to-br from-yellow-600 to-yellow-800"></div>
                  <div className="aspect-square bg-gradient-to-br from-gray-600 to-gray-800"></div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 backdrop-blur-xl border border-yellow-400/30">
              <CardContent className="p-8 text-center">
                <Target className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-yellow-400 mb-4">Sunburst Motifs</h3>
                <div className="relative w-24 h-24 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-transparent rounded-full"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-transparent rounded-full rotate-45"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-transparent rounded-full rotate-90"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-transparent rounded-full rotate-135"></div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )

  // Material Design
  const MaterialDesign = () => (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-blue-500 text-white p-4 shadow-lg">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-medium">Material Design</h1>
          <div className="flex items-center gap-3">
            <Search className="w-6 h-6" />
            <Menu className="w-6 h-6" />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="bg-red-500 text-white p-4">
              <h3 className="font-semibold text-lg">Paper Metaphor</h3>
            </div>
            <CardContent className="p-6">
              <p className="text-gray-600 mb-4">Digital material inspired by paper and ink</p>
              <Button className="bg-red-500 hover:bg-red-600 text-white shadow-md">Learn More</Button>
            </CardContent>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="bg-green-500 text-white p-4">
              <h3 className="font-semibold text-lg">Bold Colors</h3>
            </div>
            <CardContent className="p-6">
              <p className="text-gray-600 mb-4">Vibrant hues and meaningful motion</p>
              <Button className="bg-green-500 hover:bg-green-600 text-white shadow-md">Explore</Button>
            </CardContent>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="bg-orange-500 text-white p-4">
              <h3 className="font-semibold text-lg">Elevation</h3>
            </div>
            <CardContent className="p-6">
              <p className="text-gray-600 mb-4">Surfaces create visual hierarchy</p>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white shadow-md">Discover</Button>
            </CardContent>
          </Card>
        </div>

        <Card className="shadow-lg p-8">
          <h2 className="text-2xl font-medium text-gray-800 mb-6">Floating Action Buttons</h2>
          <div className="flex gap-4">
            <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full w-14 h-14 shadow-lg p-0">
              <Heart className="w-6 h-6" />
            </Button>
            <Button className="bg-pink-500 hover:bg-pink-600 text-white rounded-full w-14 h-14 shadow-lg p-0">
              <Share className="w-6 h-6" />
            </Button>
            <Button className="bg-purple-500 hover:bg-purple-600 text-white rounded-full w-14 h-14 shadow-lg p-0">
              <Download className="w-6 h-6" />
            </Button>
          </div>
        </Card>
      </div>
    </div>
  )

  // Dark Mode Design
  const DarkModeDesign = () => (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-light text-white mb-4">Dark Mode</h1>
          <p className="text-xl text-gray-300 mb-2">Reduced Eye Strain • Better Battery Life</p>
          <p className="text-base text-gray-400">2018-Present</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Benefits</h3>
              <div className="space-y-4">
                {[
                  { icon: Eye, label: "Reduced Eye Strain", value: "67%" },
                  { icon: Battery, label: "Battery Savings", value: "43%" },
                  { icon: Clock, label: "Better Sleep", value: "52%" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <item.icon className="w-8 h-8 text-blue-400" />
                    <div className="flex-1">
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-300">{item.label}</span>
                        <span className="text-white font-semibold">{item.value}</span>
                      </div>
                      <div className="h-2 bg-gray-700 rounded-full">
                        <div 
                          className="h-full bg-blue-500 rounded-full" 
                          style={{ width: item.value }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Color Palette</h3>
              <div className="grid grid-cols-4 gap-3">
                {[
                  { name: "Background", color: "bg-gray-900" },
                  { name: "Surface", color: "bg-gray-800" },
                  { name: "Primary", color: "bg-blue-500" },
                  { name: "Accent", color: "bg-purple-500" },
                  { name: "Text Primary", color: "bg-white" },
                  { name: "Text Secondary", color: "bg-gray-300" },
                  { name: "Border", color: "bg-gray-700" },
                  { name: "Error", color: "bg-red-500" },
                ].map((item, i) => (
                  <div key={i} className="text-center">
                    <div className={`w-full h-12 ${item.color} rounded mb-2`}></div>
                    <div className="text-xs text-gray-400">{item.name}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )

  // Add more designs here...
  // Vaporwave Design
  const VaporwaveDesign = () => (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-pink-900 to-blue-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-cyan-500/30 to-transparent"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-2 border-pink-500/50 rounded-full animate-pulse"></div>
      </div>
      
      <div className="relative z-10 p-8 sm:p-12">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-6xl sm:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            VAPORWAVE
          </h1>
          <p className="text-2xl text-pink-300 mb-8">A E S T H E T I C</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-pink-500/20 backdrop-blur-xl border border-pink-400/30">
              <CardContent className="p-8 text-center">
                <Music className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-pink-300">Synthwave</h3>
                <p className="text-pink-200/80">Nostalgic electronic music</p>
              </CardContent>
            </Card>
            
            <Card className="bg-purple-500/20 backdrop-blur-xl border border-purple-400/30">
              <CardContent className="p-8 text-center">
                <Gamepad className="w-16 h-16 text-pink-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-purple-300">Retro Gaming</h3>
                <p className="text-purple-200/80">80s arcade aesthetics</p>
              </CardContent>
            </Card>
            
            <Card className="bg-cyan-500/20 backdrop-blur-xl border border-cyan-400/30">
              <CardContent className="p-8 text-center">
                <Star className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-cyan-300">Neon Dreams</h3>
                <p className="text-cyan-200/80">Digital landscapes</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )

  // Generic Style Page for other designs
  const GenericStylePage = ({ style, period }: { style: string, period: string }) => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8 sm:p-12">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl sm:text-6xl font-bold text-gray-800 mb-6">{style}</h1>
        <p className="text-xl text-gray-600 mb-8">{period}</p>
        <Card className="p-8 text-left">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Design Characteristics</h3>
          <p className="text-gray-600 mb-6">
            This design movement represents a significant evolution in visual communication and user experience design.
            Each movement builds upon previous innovations while introducing new concepts and approaches.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Key Features</h4>
              <ul className="text-gray-600 space-y-1">
                <li>• Distinctive visual language</li>
                <li>• Innovative typography</li>
                <li>• Unique color palette</li>
                <li>• Revolutionary layout principles</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Cultural Impact</h4>
              <ul className="text-gray-600 space-y-1">
                <li>• Influenced contemporary design</li>
                <li>• Shaped user expectations</li>
                <li>• Advanced accessibility</li>
                <li>• Established new standards</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )

  // History Page Template - Now using actual historical data
  const HistoryPage = ({ style, period }: { style: string, period: string }) => {
    const history = historyData[style as keyof typeof historyData]
    
    if (!history) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-100 to-gray-200 p-8 sm:p-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-gray-800 mb-4">{style} History</h1>
              <p className="text-xl text-gray-600">{period}</p>
              <p className="text-red-600 mt-4">Historical data not found for this movement.</p>
            </div>
          </div>
        </div>
      )
    }

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-100 to-gray-200 p-8 sm:p-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-800 mb-4">{style} History</h1>
            <p className="text-xl text-gray-600 mb-6">{period}</p>
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed">
                {history.philosophy}
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="p-6 bg-white/80 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <Users className="w-6 h-6 mr-2 text-blue-600" />
                Key Figures & Location
              </h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Founders & Leaders:</h4>
                  <ul className="text-gray-600 space-y-1">
                    {history.founders.map((founder: string, i: number) => (
                      <li key={i}>• {founder}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Origin:</h4>
                  <p className="text-gray-600">{history.location}</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 bg-white/80 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <Clock className="w-6 h-6 mr-2 text-green-600" />
                Historical Context
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {history.context}
              </p>
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Cultural Impact:</h4>
                <p className="text-gray-600 leading-relaxed">
                  {history.impact}
                </p>
              </div>
            </Card>
          </div>

          <Card className="p-8 bg-white/80 backdrop-blur-sm mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <Star className="w-7 h-7 mr-3 text-yellow-600" />
              Key Historical Events
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {history.keyEvents.map((event: any, i: number) => (
                <div key={i} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4 border border-gray-200">
                  <div className="text-2xl font-bold text-blue-600 mb-2">{event.year}</div>
                  <p className="text-gray-700 text-sm leading-relaxed">{event.event}</p>
                </div>
              ))}
            </div>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-6 bg-white/80 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <Award className="w-6 h-6 mr-2 text-purple-600" />
                Notable Works
              </h3>
              <ul className="text-gray-600 space-y-2">
                {history.notableWorks.map((work: string, i: number) => (
                  <li key={i} className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>{work}</span>
                  </li>
                ))}
              </ul>
            </Card>
            
            <Card className="p-6 bg-white/80 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <TrendingUp className="w-6 h-6 mr-2 text-green-600" />
                Legacy & Influence
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {history.legacy}
              </p>
            </Card>
          </div>
        </div>
      </div>
    )
  }

  // Conclusion Page
  const ConclusionPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-8 sm:p-12">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl sm:text-6xl font-bold text-white mb-8">The Future of Design</h1>
        <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-pink-500 mx-auto mb-12"></div>
        
        <div className="text-white/90 text-lg leading-relaxed space-y-6 mb-12">
          <p>
            As we've journeyed through 106+ years of design evolution, from the foundational principles of Bauhaus 
            to the speculative interfaces of Apple's Liquid Glass, we see design as a continuous conversation 
            between past, present, and future.
          </p>
          
          <p>
            Each movement we've explored emerged from specific cultural, technological, and social contexts, 
            yet their influence extends far beyond their original time periods. The grid systems of Swiss Design 
            still structure our websites, the bold experimentation of Memphis Design encourages contemporary 
            risk-taking, and the accessibility focus of Dark Mode reflects our growing understanding of inclusive design.
          </p>
          
          <p>
            Looking ahead, design will continue to evolve as new technologies like AI, AR/VR, and spatial computing 
            create possibilities we can barely imagine today. The principles we've learned—form follows function, 
            user-centered design, inclusive accessibility—will guide us as we create the visual languages of tomorrow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-white/10 backdrop-blur-xl border border-white/20 p-6">
            <Lightbulb className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Innovation</h3>
            <p className="text-white/80 text-sm">Pushing boundaries while respecting foundations</p>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-xl border border-white/20 p-6">
            <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Inclusion</h3>
            <p className="text-white/80 text-sm">Designing for all users and contexts</p>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-xl border border-white/20 p-6">
            <Globe className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Sustainability</h3>
            <p className="text-white/80 text-sm">Responsible design for our planet's future</p>
          </Card>
        </div>
        
        <div className="mt-12">
          <p className="text-white/70 text-lg">
            Thank you for joining us on this visual evolution journey. 
            The future of design starts with understanding our past.
          </p>
        </div>
      </div>
    </div>
  )

  // Swiss Design
  const SwissDesign = () => (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-12 gap-4 mb-8">
          <div className="col-span-3">
            <div className="h-full bg-red-500"></div>
          </div>
          <div className="col-span-9 pl-8">
            <h1 className="text-8xl font-light text-black mb-2 leading-none">helvetica</h1>
            <h2 className="text-4xl font-light text-gray-700 mb-6">International Typographic Style</h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
              Objectivity, clarity, and functionality. Swiss Design emphasizes clean typography, 
              mathematical grids, and minimal visual elements.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-8 mb-12">
          <div className="text-center">
            <div className="h-32 bg-black mb-4"></div>
            <p className="text-sm font-medium text-gray-800">Typography</p>
          </div>
          <div className="text-center">
            <div className="h-32 bg-red-500 mb-4"></div>
            <p className="text-sm font-medium text-gray-800">Color</p>
          </div>
          <div className="text-center">
            <div className="h-32 border-2 border-black mb-4 grid grid-cols-3 gap-0">
              <div className="bg-gray-100"></div>
              <div className="bg-gray-200"></div>
              <div className="bg-gray-300"></div>
              <div className="bg-gray-400"></div>
              <div className="bg-gray-500"></div>
              <div className="bg-gray-600"></div>
              <div className="bg-gray-700"></div>
              <div className="bg-gray-800"></div>
              <div className="bg-gray-900"></div>
            </div>
            <p className="text-sm font-medium text-gray-800">Grid</p>
          </div>
          <div className="text-center">
            <div className="h-32 bg-white border-2 border-black mb-4 flex items-center justify-center">
              <div className="w-8 h-8 bg-red-500"></div>
            </div>
            <p className="text-sm font-medium text-gray-800">Space</p>
          </div>
        </div>

        <div className="bg-gray-50 p-8">
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-light text-black mb-4">Principles</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Mathematical grid systems</li>
                <li>• Sans-serif typography</li>
                <li>• Asymmetrical layouts</li>
                <li>• Objective visual communication</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-light text-black mb-4">Influence</h3>
              <p className="text-gray-700 leading-relaxed">
                Became the foundation for corporate identity design and influenced 
                graphic design education worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  // Memphis Design
  const MemphisDesign = () => (
    <div className="min-h-screen bg-gradient-to-br from-pink-300 via-yellow-300 to-cyan-300 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-8xl font-black text-black mb-4 transform rotate-2">MEMPHIS</h1>
          <p className="text-2xl font-bold text-purple-600 transform -rotate-1">Postmodern Rebellion</p>
          <p className="text-lg text-gray-800">1980s • Milan, Italy</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="bg-gradient-to-br from-pink-400 to-orange-400 border-4 border-black transform rotate-3 hover:rotate-6 transition-transform">
            <CardContent className="p-8">
              <Triangle className="w-16 h-16 text-white mb-4 mx-auto" />
              <h3 className="text-2xl font-black text-white mb-2">Geometric Chaos</h3>
              <p className="text-white/90">Bold shapes defying conventional rules</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-cyan-400 to-blue-500 border-4 border-black transform -rotate-2 hover:-rotate-4 transition-transform">
            <CardContent className="p-8">
              <Circle className="w-16 h-16 text-white mb-4 mx-auto" />
              <h3 className="text-2xl font-black text-white mb-2">Bright Colors</h3>
              <p className="text-white/90">Clashing hues and playful combinations</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-yellow-400 to-red-400 border-4 border-black transform rotate-1 hover:rotate-3 transition-transform">
            <CardContent className="p-8">
              <Square className="w-16 h-16 text-white mb-4 mx-auto" />
              <h3 className="text-2xl font-black text-white mb-2">Anti-Function</h3>
              <p className="text-white/90">Form over function philosophy</p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-white border-4 border-black p-8 transform rotate-1">
          <div className="grid grid-cols-6 gap-4">
            {[
              "bg-pink-400", "bg-cyan-400", "bg-yellow-400", 
              "bg-orange-400", "bg-purple-400", "bg-green-400"
            ].map((color, i) => (
              <div key={i} className={`h-24 ${color} border-2 border-black transform ${i % 2 ? 'rotate-45' : '-rotate-45'}`}></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )

  // Skeuomorphism Design
  const SkeuomorphismDesign = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-gray-800 to-black p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold text-white mb-4 drop-shadow-2xl">Skeuomorphism</h1>
          <p className="text-xl text-gray-300">Digital Realism • Familiar Metaphors</p>
          <p className="text-base text-gray-400">2000s-2010s</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 shadow-2xl border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-6">Calculator</h3>
            <div className="bg-black rounded-2xl p-6 shadow-inner">
              <div className="bg-green-900 text-green-300 p-4 rounded-lg mb-4 font-mono text-right text-2xl border border-green-800">
                1,234.56
              </div>
              <div className="grid grid-cols-4 gap-3">
                {['C', '±', '%', '÷', '7', '8', '9', '×', '4', '5', '6', '−', '1', '2', '3', '+'].map((btn, i) => (
                  <Button key={i} className="h-14 bg-gradient-to-b from-gray-300 to-gray-400 hover:from-gray-200 hover:to-gray-300 text-black font-bold shadow-lg border border-gray-500 rounded-lg">
                    {btn}
                  </Button>
                ))}
                <Button className="col-span-2 h-14 bg-gradient-to-b from-gray-300 to-gray-400 hover:from-gray-200 hover:to-gray-300 text-black font-bold shadow-lg border border-gray-500 rounded-lg">
                  0
                </Button>
                <Button className="h-14 bg-gradient-to-b from-gray-300 to-gray-400 hover:from-gray-200 hover:to-gray-300 text-black font-bold shadow-lg border border-gray-500 rounded-lg">
                  .
                </Button>
                <Button className="h-14 bg-gradient-to-b from-orange-400 to-orange-500 hover:from-orange-300 hover:to-orange-400 text-white font-bold shadow-lg border border-orange-600 rounded-lg">
                  =
                </Button>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-yellow-600 to-yellow-800 rounded-2xl p-6 shadow-2xl border-2 border-yellow-500">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-xl shadow-lg"></div>
                <h3 className="text-xl font-bold text-white">Notes</h3>
              </div>
              <div className="bg-yellow-100 rounded-lg p-4 shadow-inner border border-yellow-200">
                <p className="text-gray-800 font-handwriting">Remember to buy milk...</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-600 to-green-800 rounded-2xl p-6 shadow-2xl border-2 border-green-500">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-300 to-green-500 rounded-xl shadow-lg"></div>
                <h3 className="text-xl font-bold text-white">Calendar</h3>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-inner">
                <div className="grid grid-cols-7 gap-1 text-xs">
                  {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
                    <div key={`${day}-${index}`} className="text-center font-bold text-gray-600 p-2">{day}</div>
                  ))}
                  {Array.from({length: 35}, (_, i) => (
                    <div key={i} className="text-center p-2 hover:bg-gray-100 rounded">
                      {i > 6 && i < 30 ? i - 6 : ''}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  // Flat Design
  const FlatDesign = () => (
    <div className="min-h-screen bg-white">
      <div className="bg-blue-500 text-white p-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-light">Flat Design</h1>
          <p className="text-lg opacity-90">Simplicity • Functionality • Clarity</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center">
            <div className="w-20 h-20 bg-red-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <Mail className="w-10 h-10 text-white" />
            </div>
            <h3 className="font-medium text-gray-800">Mail</h3>
            <p className="text-sm text-gray-500">Simple icons</p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-green-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <Phone className="w-10 h-10 text-white" />
            </div>
            <h3 className="font-medium text-gray-800">Phone</h3>
            <p className="text-sm text-gray-500">Bold colors</p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-purple-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <Camera className="w-10 h-10 text-white" />
            </div>
            <h3 className="font-medium text-gray-800">Camera</h3>
            <p className="text-sm text-gray-500">No gradients</p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-orange-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <Music className="w-10 h-10 text-white" />
            </div>
            <h3 className="font-medium text-gray-800">Music</h3>
            <p className="text-sm text-gray-500">Clean design</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="p-6 shadow-none border border-gray-200">
            <h3 className="text-xl font-medium text-gray-800 mb-4">Design Principles</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700">Remove all decorative elements</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Use solid, bright colors</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span className="text-gray-700">Emphasize typography</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span className="text-gray-700">Focus on usability</span>
              </li>
            </ul>
          </Card>

          <Card className="p-6 shadow-none border border-gray-200">
            <h3 className="text-xl font-medium text-gray-800 mb-4">Color Palette</h3>
            <div className="grid grid-cols-5 gap-3">
              {[
                { name: "Blue", color: "bg-blue-500" },
                { name: "Green", color: "bg-green-500" },
                { name: "Red", color: "bg-red-500" },
                { name: "Purple", color: "bg-purple-500" },
                { name: "Orange", color: "bg-orange-500" },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className={`w-full h-16 ${item.color} rounded mb-2`}></div>
                  <p className="text-xs text-gray-600">{item.name}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  )

  // Neumorphism Design  
  const NeumorphismDesign = () => (
    <div className="min-h-screen bg-gray-200 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-light text-gray-700 mb-4">Neumorphism</h1>
          <p className="text-xl text-gray-600">Soft UI • Subtle Depth</p>
          <p className="text-base text-gray-500">2019-2020</p>
        </div>

        <div className="bg-gray-200 p-8 rounded-3xl shadow-inner">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gray-200 p-8 rounded-3xl shadow-lg">
              <h2 className="text-2xl font-light text-gray-700 mb-6">Music Player</h2>
              
              <div className="bg-gray-200 w-40 h-40 mx-auto rounded-full shadow-inner mb-8 flex items-center justify-center">
                <div className="bg-gray-200 w-32 h-32 rounded-full shadow-lg flex items-center justify-center">
                  <Button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-700 w-16 h-16 rounded-full shadow-lg border-0"
                  >
                    {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                  </Button>
                </div>
              </div>

              <div className="bg-gray-200 p-4 rounded-2xl shadow-inner mb-6">
                <div className="flex items-center gap-3">
                  <Volume2 className="w-5 h-5 text-gray-600" />
                  <div className="flex-1 bg-gray-200 rounded-full h-3 shadow-inner">
                    <div className="bg-blue-400 h-full w-3/4 rounded-full shadow-sm"></div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center gap-4">
                <Button className="bg-gray-200 hover:bg-gray-300 text-gray-700 w-12 h-12 rounded-full shadow-lg border-0">
                  <ArrowLeft className="w-5 h-5" />
                </Button>
                <Button className="bg-gray-200 hover:bg-gray-300 text-gray-700 w-12 h-12 rounded-full shadow-lg border-0">
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-200 p-6 rounded-3xl shadow-lg">
                <h3 className="text-lg font-light text-gray-700 mb-4">Controls</h3>
                <div className="grid grid-cols-2 gap-4">
                  <Button className="bg-gray-200 hover:bg-gray-300 text-gray-700 p-4 rounded-2xl shadow-lg border-0 h-16">
                    <Settings className="w-6 h-6" />
                  </Button>
                  <Button className="bg-gray-200 hover:bg-gray-300 text-gray-700 p-4 rounded-2xl shadow-lg border-0 h-16">
                    <User className="w-6 h-6" />
                  </Button>
                </div>
              </div>

              <div className="bg-gray-200 p-6 rounded-3xl shadow-inner">
                <h3 className="text-lg font-light text-gray-700 mb-4">Stats</h3>
                <div className="space-y-4">
                  {[
                    { label: "Battery", value: "85%", width: "85%" },
                    { label: "Storage", value: "67%", width: "67%" },
                    { label: "Memory", value: "42%", width: "42%" },
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-600 text-sm">{item.label}</span>
                        <span className="text-gray-700 font-medium text-sm">{item.value}</span>
                      </div>
                      <div className="bg-gray-200 rounded-full h-2 shadow-inner">
                        <div 
                          className="bg-blue-400 h-full rounded-full shadow-sm transition-all duration-1000"
                          style={{ width: item.width }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  // Brutalism Design
  const BrutalismDesign = () => (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <div className="border-4 border-red-500 m-4 min-h-[calc(100vh-2rem)]">
        <div className="border-2 border-white m-2 min-h-[calc(100vh-4rem)] p-6">
          <div className="text-center mb-8">
            <h1 className="text-8xl font-black text-white mb-4 transform -skew-x-12 tracking-wider">BRUTAL</h1>
            <div className="bg-red-500 h-4 w-full mb-4"></div>
            <p className="text-2xl font-bold text-yellow-400 transform skew-x-6">RAW DIGITAL AESTHETIC</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="border-4 border-green-500 p-8 bg-white text-black">
              <h2 className="text-4xl font-black mb-4 transform rotate-2">ANTI-DESIGN</h2>
              <p className="text-xl font-bold leading-tight mb-6">
                BREAKING CONVENTIONAL RULES. INTENTIONALLY CRUDE. FUNCTION OVER FORM.
              </p>
              <div className="space-y-3">
                <div className="bg-black text-white p-3 text-center font-black text-lg transform -rotate-1">
                  NO BEAUTY
                </div>
                <div className="bg-red-500 text-white p-3 text-center font-black text-lg transform rotate-1">
                  JUST FUNCTION
                </div>
                <div className="bg-green-500 text-black p-3 text-center font-black text-lg transform -rotate-1">
                  PURE UTILITY
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-red-500 text-white p-6 border-4 border-white transform rotate-1">
                <div className="text-3xl font-black">ERROR 404</div>
                <div className="text-lg font-bold">PAGE DESTROYED</div>
                <div className="text-sm mt-2">DEAL WITH IT</div>
              </div>

              <div className="bg-green-500 text-black p-6 border-4 border-black transform -rotate-2">
                <div className="text-2xl font-black mb-3">SUBMIT NOW</div>
                <Button className="bg-black text-white font-black p-4 border-0 w-full transform hover:rotate-1 transition-transform">
                  CLICK OR DIE
                </Button>
              </div>

              <div className="bg-blue-500 text-white p-6 border-4 border-yellow-500">
                <div className="text-2xl font-black mb-2">WARNING!</div>
                <div className="font-bold">SYSTEM OVERLOAD IMMINENT</div>
                <div className="text-sm mt-2 opacity-80">PREPARE FOR CHAOS</div>
              </div>

              <div className="bg-yellow-400 text-black p-6 border-4 border-red-500 transform rotate-1">
                <div className="text-xl font-black">EMBRACE THE UGLY</div>
                <div className="text-sm font-bold mt-2">BEAUTY IS OVERRATED</div>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t-4 border-white pt-6">
            <div className="grid grid-cols-4 gap-4">
              {['HARSH', 'BOLD', 'CRUDE', 'RAW'].map((word, i) => (
                <div key={i} className={`p-4 text-center font-black text-2xl transform rotate-${i % 2 ? '2' : '-2'} ${
                  i % 4 === 0 ? 'bg-red-500' : 
                  i % 4 === 1 ? 'bg-green-500 text-black' : 
                  i % 4 === 2 ? 'bg-blue-500' : 'bg-yellow-400 text-black'
                }`}>
                  {word}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  // Glassmorphism Design  
  const GlassmorphismDesign = () => (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-purple-400 via-pink-500 to-red-500">
      <div className="absolute inset-0">
        <div className="absolute top-16 left-16 w-48 h-48 bg-white/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-16 right-16 w-64 h-64 bg-blue-500/30 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-yellow-400/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative z-10 p-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-6xl font-light text-white mb-6 drop-shadow-lg">Glassmorphism</h1>
            <p className="text-2xl text-white/80">Frosted Glass Aesthetic</p>
            <p className="text-lg text-white/60">2020-Present</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl hover:bg-white/25 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Profile</h3>
                    <p className="text-white/70 text-sm">User Settings</p>
                  </div>
                </div>
                <Button className="w-full bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm">
                  View Profile
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Messages</h3>
                    <p className="text-white/70 text-sm">5 unread</p>
                  </div>
                </div>
                <Button className="w-full bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm">
                  Open Messages
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/15 backdrop-blur-xl border border-white/25 shadow-2xl hover:bg-white/20 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-white/25 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Settings className="w-5 h-5 text-white" />
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

          <div className="bg-white/10 backdrop-blur-3xl border border-white/20 rounded-3xl p-8 shadow-2xl">
            <h3 className="text-2xl font-light text-white mb-6">Glass Layers</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                { opacity: "bg-white/5", label: "5% Opacity" },
                { opacity: "bg-white/10", label: "10% Opacity" },
                { opacity: "bg-white/20", label: "20% Opacity" },
                { opacity: "bg-white/30", label: "30% Opacity" },
              ].map((item, i) => (
                <div key={i} className={`${item.opacity} backdrop-blur-xl border border-white/20 rounded-2xl p-6 text-center`}>
                  <div className="text-white font-medium mb-2">{item.label}</div>
                  <div className="text-white/70 text-sm">Backdrop blur</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  // Claymorphism Design
  const ClaymorphismDesign = () => (
    <div className="min-h-screen bg-gradient-to-br from-orange-200 via-pink-200 to-purple-200 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold text-gray-800 mb-4">Claymorphism</h1>
          <p className="text-2xl text-gray-700">3D Clay Elements</p>
          <p className="text-lg text-gray-600">2021-Present</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-gradient-to-br from-pink-300 to-pink-400 rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-transform duration-300" style={{
            boxShadow: '20px 20px 60px #d1d5db, -20px -20px 60px #ffffff',
          }}>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-red-500 rounded-full mx-auto mb-4 shadow-lg" style={{
                boxShadow: 'inset 5px 5px 10px #ef4444, inset -5px -5px 10px #f87171',
              }}></div>
              <h3 className="text-xl font-bold text-white mb-2">Soft Shadows</h3>
              <p className="text-white/90">Organic clay-like feel</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-300 to-blue-400 rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-transform duration-300" style={{
            boxShadow: '20px 20px 60px #d1d5db, -20px -20px 60px #ffffff',
          }}>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-2xl mx-auto mb-4 shadow-lg transform rotate-12" style={{
                boxShadow: 'inset 5px 5px 10px #06b6d4, inset -5px -5px 10px #22d3ee',
              }}></div>
              <h3 className="text-xl font-bold text-white mb-2">Rounded Corners</h3>
              <p className="text-white/90">Playful geometry</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-300 to-green-400 rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-transform duration-300" style={{
            boxShadow: '20px 20px 60px #d1d5db, -20px -20px 60px #ffffff',
          }}>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-full mx-auto mb-4 shadow-lg" style={{
                boxShadow: 'inset 5px 5px 10px #10b981, inset -5px -5px 10px #34d399',
              }}></div>
              <h3 className="text-xl font-bold text-white mb-2">3D Elements</h3>
              <p className="text-white/90">Tactile appearance</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-300 to-purple-400 rounded-3xl p-8 shadow-2xl" style={{
          boxShadow: '30px 30px 60px #d1d5db, -30px -30px 60px #ffffff',
        }}>
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Interactive Clay Elements</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Heart, color: "from-red-400 to-red-500" },
              { icon: Star, color: "from-yellow-400 to-yellow-500" },
              { icon: Music, color: "from-purple-400 to-purple-500" },
              { icon: Camera, color: "from-blue-400 to-blue-500" },
            ].map((item, i) => (
              <Button
                key={i}
                className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-2xl border-0 hover:scale-110 transition-all duration-300`}
                style={{
                  boxShadow: 'inset 8px 8px 16px rgba(0,0,0,0.1), inset -8px -8px 16px rgba(255,255,255,0.1)',
                }}
              >
                <item.icon className="w-8 h-8 text-white" />
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )

  // Y2K Design
  const Y2KDesign = () => (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-black overflow-hidden relative">
      <div className="relative z-10 p-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-500 to-lime-400 mb-4 animate-pulse">
              Y2K
            </h1>
            <p className="text-2xl text-cyan-300 font-bold">Digital Millennium Aesthetic</p>
            <p className="text-lg text-gray-400">1998-2005</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-purple-800/50 to-blue-800/50 border border-cyan-400 rounded-2xl p-8 backdrop-blur-sm">
              <h2 className="text-3xl font-bold text-cyan-300 mb-6">Cyber Portal</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-black/30 rounded-lg border border-lime-400">
                  <div className="w-3 h-3 bg-lime-400 rounded-full animate-pulse"></div>
                  <span className="text-lime-300 font-mono">SYSTEM ONLINE</span>
                </div>
                <div className="flex items-center gap-4 p-4 bg-black/30 rounded-lg border border-pink-400">
                  <div className="w-3 h-3 bg-pink-400 rounded-full animate-pulse"></div>
                  <span className="text-pink-300 font-mono">MATRIX CONNECTED</span>
                </div>
                <div className="flex items-center gap-4 p-4 bg-black/30 rounded-lg border border-cyan-400">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                  <span className="text-cyan-300 font-mono">FUTURE LOADING...</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-400 rounded-2xl p-6 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-pink-300 mb-4">Digital Dreams</h3>
                <div className="grid grid-cols-3 gap-3">
                  {Array.from({length: 9}).map((_, i) => (
                    <div key={i} className={`h-12 rounded-lg border ${
                      i % 3 === 0 ? 'bg-cyan-400/20 border-cyan-400' :
                      i % 3 === 1 ? 'bg-pink-400/20 border-pink-400' :
                      'bg-lime-400/20 border-lime-400'
                    } animate-pulse`}></div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-lime-500/20 to-cyan-500/20 border border-lime-400 rounded-2xl p-6 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-lime-300 mb-4">Millennium Bug</h3>
                <div className="font-mono text-center">
                  <div className="text-3xl text-red-400 font-black">00:00:00</div>
                  <div className="text-sm text-gray-400 mt-2">JAN 01, 2000</div>
                  <div className="text-xs text-lime-300 mt-1 animate-pulse">SURVIVED</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 border border-cyan-400 rounded-3xl p-8 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                { text: "CHROME", color: "text-cyan-300 border-cyan-400" },
                { text: "MATRIX", color: "text-lime-300 border-lime-400" },
                { text: "NEON", color: "text-pink-300 border-pink-400" },
                { text: "CYBER", color: "text-purple-300 border-purple-400" },
              ].map((item, i) => (
                <div key={i} className={`p-4 text-center font-black text-xl ${item.color} border rounded-xl bg-black/20 hover:bg-black/40 transition-all cursor-pointer transform hover:scale-105`}>
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  // Cyberpunk Design
  const CyberpunkDesign = () => (
    <div className="min-h-screen bg-black text-cyan-400 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-black opacity-80"></div>
      
      <div className="relative z-10 p-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-8xl font-black text-cyan-400 mb-4 relative">
              CYBERPUNK
              <div className="absolute -top-2 -right-2 text-pink-500 text-lg font-mono animate-pulse">2077</div>
            </h1>
            <p className="text-2xl text-pink-400 font-bold">High Tech • Low Life</p>
            <p className="text-lg text-gray-400 font-mono">FUTURE_NOIR.EXE</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-black border-2 border-cyan-400 rounded-lg p-6 hover:border-pink-400 transition-colors">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Terminal className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-cyan-400">NEURAL LINK</h3>
              </div>
              <div className="space-y-2 font-mono text-sm">
                <div className="text-green-400">{'>>'} jack_in.exe</div>
                <div className="text-yellow-400">{'>>'} connection_established</div>
                <div className="text-cyan-400">{'>>'} accessing_mainframe...</div>
                <div className="text-pink-400 animate-pulse">{'>>'} ghost_in_the_shell</div>
              </div>
            </div>

            <div className="bg-black border-2 border-pink-400 rounded-lg p-6 hover:border-cyan-400 transition-colors">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Zap className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-pink-400">ELECTRIC DREAMS</h3>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {Array.from({length: 8}).map((_, i) => (
                  <div key={i} className={`h-8 rounded ${
                    i % 4 === 0 ? 'bg-cyan-400/20 border border-cyan-400/50' :
                    i % 4 === 1 ? 'bg-pink-400/20 border border-pink-400/50' :
                    i % 4 === 2 ? 'bg-purple-400/20 border border-purple-400/50' :
                    'bg-green-400/20 border border-green-400/50'
                  } animate-pulse`} style={{animationDelay: `${i * 0.2}s`}}></div>
                ))}
              </div>
            </div>

            <div className="bg-black border-2 border-purple-400 rounded-lg p-6 hover:border-green-400 transition-colors">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Eye className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-purple-400">AUGMENTED REALITY</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-2 border border-green-400/30 rounded">
                  <span className="text-green-400 text-sm">HEALTH</span>
                  <div className="w-20 h-2 bg-black border border-green-400">
                    <div className="w-4/5 h-full bg-green-400"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center p-2 border border-cyan-400/30 rounded">
                  <span className="text-cyan-400 text-sm">ENERGY</span>
                  <div className="w-20 h-2 bg-black border border-cyan-400">
                    <div className="w-3/5 h-full bg-cyan-400"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center p-2 border border-pink-400/30 rounded">
                  <span className="text-pink-400 text-sm">RAM</span>
                  <div className="w-20 h-2 bg-black border border-pink-400">
                    <div className="w-2/3 h-full bg-pink-400"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-black border-2 border-green-400 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-green-400 mb-6 text-center">NEON CITY GRID</h3>
            <div className="grid grid-cols-8 gap-2">
              {Array.from({length: 64}).map((_, i) => (
                <div
                  key={i}
                  className={`h-8 rounded-sm ${
                    Math.random() > 0.7 ? 'bg-cyan-400' :
                    Math.random() > 0.8 ? 'bg-pink-400' :
                    Math.random() > 0.9 ? 'bg-green-400' :
                    'bg-gray-800 border border-gray-700'
                  } transition-all duration-1000`}
                  style={{
                    animationDelay: `${i * 0.05}s`,
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  // Experimental Design - Advanced Fluid Interface
  const ExperimentalDesign = () => (
    <div className="min-h-screen bg-gradient-to-br from-violet-900 via-purple-800 to-fuchsia-900 text-white overflow-hidden relative">
      {/* Animated background elements */}
      <div className="relative z-10 p-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="mb-6 inline-block">
              <span className="px-4 py-1 rounded-full text-sm bg-white/10 backdrop-blur-sm border border-white/20">
                Reimagining Digital Experiences
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300">
                Break Free From
              </span>{" "}
              <br />
              <span className="text-white relative inline-block">
                Conventional Design
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-6 text-white/80 max-w-2xl mx-auto">
              Explore a new dimension of interactive experiences where boundaries dissolve and creativity flows without limits.
            </p>
            
            <div className="mt-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-xl border border-white/20 rounded-2xl px-6 py-3 inline-block">
              <p className="text-sm text-white/80 font-medium">Created by <span className="text-yellow-400 font-bold">Organica AI Solutions</span></p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button className="px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium shadow-lg shadow-pink-500/20 transform hover:scale-105 transition-all">
              <Sparkles className="mr-2 w-5 h-5" />
              Start Exploring
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
            <Button className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium hover:bg-white/20 transition-all transform hover:scale-105">
              <Gamepad2 className="mr-2 w-5 h-5" />
              Interactive Demo
            </Button>
          </div>

          {/* Floating Cards with 3D Effect */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { title: "Fluid Motion", desc: "Dynamic morphing elements that change shape", icon: "⚡", gradient: "from-pink-500/30 to-purple-500/30" },
              { title: "Depth Perception", desc: "Layered cards with sophisticated depth effects", icon: "🌊", gradient: "from-purple-500/30 to-blue-500/30" },
              { title: "Spatial Design", desc: "True 3D-feeling navigation and interactions", icon: "✨", gradient: "from-blue-500/30 to-cyan-500/30" },
            ].map((card, i) => (
              <div key={i} className="relative group cursor-pointer">
                <div className={`absolute inset-0 bg-gradient-to-r ${card.gradient} rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300`}></div>
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/10 p-8 group-hover:scale-105 group-hover:rotate-1 transition-all duration-300">
                  <div className="text-6xl mb-4 text-center">{card.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2 text-center">{card.title}</h3>
                  <p className="text-white/70 text-sm text-center">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Advanced Features Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-xl border border-white/20 rounded-3xl p-8">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <Zap className="mr-3 w-8 h-8 text-yellow-400" />
                Morphing Interfaces
              </h2>
              <div className="space-y-4">
                {['Fluid Layouts', 'Dynamic Typography', 'Organic Shapes', 'Responsive Physics'].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-white/10 rounded-2xl border border-white/20 hover:bg-white/20 hover:scale-105 transition-all cursor-pointer">
                    <div className={`w-4 h-4 rounded-full ${
                      i % 4 === 0 ? 'bg-yellow-400' :
                      i % 4 === 1 ? 'bg-pink-400' :
                      i % 4 === 2 ? 'bg-cyan-400' : 'bg-green-400'
                    } animate-pulse`}></div>
                    <span className="text-white font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-xl border border-white/20 rounded-3xl p-8">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <Layers className="mr-3 w-8 h-8 text-cyan-400" />
                Quantum UI Elements
              </h2>
              <div className="space-y-4">
                <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 text-white border-0 rounded-2xl p-4 transform hover:scale-105 hover:rotate-1 transition-all">
                  Morph Button ⚡
                </Button>
                <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500 text-white border-0 rounded-2xl p-4 transform hover:scale-105 hover:-rotate-1 transition-all">
                  Quantum State 🌊
                </Button>
                <Button className="w-full bg-gradient-to-r from-green-500 to-yellow-500 hover:from-yellow-500 hover:to-green-500 text-white border-0 rounded-2xl p-4 transform hover:scale-105 hover:rotate-1 transition-all">
                  Reality Shift ✨
                </Button>
              </div>
            </div>
          </div>

          {/* Advanced Technology Stack */}
          <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-xl border border-white/20 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center flex items-center justify-center">
              <Cpu className="mr-3 w-8 h-8 text-purple-400" />
              Advanced Technology Stack
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { title: 'Framer Motion', desc: 'Spring physics & morphing', icon: '🎭' },
                { title: 'React Three Fiber', desc: '3D scene integration', icon: '🎯' },
                { title: 'Interactive Audio', desc: 'Sound feedback system', icon: '🔊' },
                { title: 'Spatial Design', desc: '3D perspective transforms', icon: '🌟' },
              ].map((tech, i) => (
                <div key={i} className="text-center p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 hover:scale-105 hover:rotate-1 transition-all transform cursor-pointer">
                  <div className="text-3xl mb-2">{tech.icon}</div>
                  <h4 className="text-lg font-bold text-white mb-2">{tech.title}</h4>
                  <p className="text-white/70 text-sm">{tech.desc}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <Button className="px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium shadow-lg shadow-purple-500/20 transform hover:scale-105 transition-all">
                <Terminal className="mr-2 w-5 h-5" />
                View Source Code
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  // Quantum UI Design - Original Morphing Interface Design
  const QuantumUIDesign = () => (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-8 overflow-hidden relative">
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-cyan-400 mb-4 transform hover:scale-110 transition-transform">
            QUANTUM UI
          </h1>
          <p className="text-2xl text-white/80">Reality Shifting • Multiple States</p>
          <p className="text-lg text-white/60">2023 - Present</p>
          <div className="mt-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-xl border border-white/20 rounded-2xl px-6 py-3 inline-block">
            <p className="text-sm text-white/80 font-medium">Created by <span className="text-yellow-400 font-bold">Organica AI Solutions</span></p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-xl border border-white/20 rounded-3xl p-8 transform hover:rotate-1 transition-transform">
              <h2 className="text-3xl font-bold text-white mb-6">Morphing Interfaces</h2>
              <div className="space-y-4">
                {['Quantum States', 'Reality Shifting', 'Probabilistic UI', 'Neural Patterns'].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-white/10 rounded-2xl border border-white/20 hover:bg-white/20 transition-all">
                    <div className={`w-4 h-4 rounded-full ${
                      i % 4 === 0 ? 'bg-yellow-400' :
                      i % 4 === 1 ? 'bg-pink-400' :
                      i % 4 === 2 ? 'bg-cyan-400' : 'bg-green-400'
                    } animate-pulse`}></div>
                    <span className="text-white font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-xl border border-white/20 rounded-3xl p-8 transform hover:-rotate-1 transition-transform">
              <h2 className="text-2xl font-bold text-white mb-4">AI-Generated Art</h2>
              <div className="grid grid-cols-3 gap-3">
                {Array.from({length: 9}).map((_, i) => (
                  <div
                    key={i}
                    className="aspect-square rounded-xl bg-gradient-to-br from-purple-400 to-pink-500 opacity-70 hover:opacity-100 transition-opacity transform hover:scale-110"
                    style={{
                      background: `linear-gradient(${Math.random() * 360}deg, hsl(${Math.random() * 360}, 70%, 60%), hsl(${Math.random() * 360}, 70%, 60%))`,
                      animationDelay: `${i * 0.1}s`,
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-green-500/20 to-yellow-500/20 backdrop-blur-xl border border-white/20 rounded-3xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Quantum UI Elements</h2>
              <div className="space-y-4">
                <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 text-white border-0 rounded-2xl p-4 transform hover:scale-105 transition-all">
                  Superposition Button
                </Button>
                <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500 text-white border-0 rounded-2xl p-4 transform hover:scale-105 transition-all">
                  Entangled State
                </Button>
                <Button className="w-full bg-gradient-to-r from-green-500 to-yellow-500 hover:from-yellow-500 hover:to-green-500 text-white border-0 rounded-2xl p-4 transform hover:scale-105 transition-all">
                  Wave Collapse
                </Button>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 backdrop-blur-xl border border-white/20 rounded-3xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Data Visualization</h2>
              <div className="space-y-3">
                {Array.from({length: 6}).map((_, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-12 text-white/60 text-sm">Data {i + 1}</div>
                    <div className="flex-1 bg-white/10 rounded-full h-3">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${
                          i % 3 === 0 ? 'from-purple-400 to-pink-400' :
                          i % 3 === 1 ? 'from-cyan-400 to-blue-400' :
                          'from-green-400 to-yellow-400'
                        } transition-all duration-2000`}
                        style={{ width: `${20 + Math.random() * 60}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-xl border border-white/20 rounded-3xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Future Concepts</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Neural Interfaces', desc: 'Direct brain-computer interaction' },
              { title: 'Holographic UI', desc: 'Three-dimensional user interfaces' },
              { title: 'Quantum Computing', desc: 'Parallel reality processing' },
            ].map((concept, i) => (
              <div key={i} className="text-center p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all transform hover:scale-105">
                <h4 className="text-xl font-bold text-white mb-2">{concept.title}</h4>
                <p className="text-white/70 text-sm">{concept.desc}</p>
              </div>
            ))}
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
      case "toc":
        return <TableOfContents />
      case "intro":
        return <IntroductionPage />
      case "chapter-divider":
        return <ChapterDivider 
          chapter={pageData.chapter || "Chapter"} 
          subtitle={pageData.subtitle || "Subtitle"}
          description={pageData.description || "Description"}
        />
      case "history":
        return <HistoryPage style={pageData.style || "Design Movement"} period={pageData.period || "Period"} />
      case "conclusion":
        return <ConclusionPage />
      case "style":
        // Implement specific design pages
        switch (pageData.style) {
          case "Bauhaus":
            return <BauhausDesign />
          case "Art Deco":
            return <ArtDecoDesign />
          case "Material Design":
            return <MaterialDesign />
          case "Dark Mode":
            return <DarkModeDesign />
          case "Liquid Glass":
            return <LiquidGlassDesign />
          case "Frutiger Aero":
            return <FrutigerAeroDesign />
          case "Vaporwave":
            return <VaporwaveDesign />
          case "Swiss Design":
            return <SwissDesign />
          case "Memphis Design":
            return <MemphisDesign />
          case "Skeuomorphism":
            return <SkeuomorphismDesign />
          case "Flat Design":
            return <FlatDesign />
          case "Neumorphism":
            return <NeumorphismDesign />
          case "Brutalism":
            return <BrutalismDesign />
          case "Glassmorphism":
            return <GlassmorphismDesign />
          case "Claymorphism":
            return <ClaymorphismDesign />
          case "Y2K":
            return <Y2KDesign />
          case "Cyberpunk":
            return <CyberpunkDesign />
          case "Experimental Design":
            return <ExperimentalDesign />
          case "Quantum UI":
            return <QuantumUIDesign />
          default:
            return <GenericStylePage style={pageData.style || "Design Movement"} period={pageData.period || "Period"} />
        }
      default:
        return <CoverPage />
    }
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      {renderCurrentPage()}

      {/* Perfect Navigation with premium design */}
      <div className="fixed bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-white/95 backdrop-blur-2xl rounded-full px-4 sm:px-6 py-3 sm:py-4 flex items-center gap-4 sm:gap-6 shadow-2xl border border-gray-200/50">
          <Button
            onClick={prevPage}
            disabled={currentPage === 0}
            className="bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-700 border-0 rounded-full w-10 h-10 sm:w-12 sm:h-12 p-0 disabled:opacity-50 transition-all duration-300 shadow-lg disabled:shadow-none"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </Button>

          <div className="text-gray-700 text-sm sm:text-base font-medium min-w-16 sm:min-w-20 text-center">
            <div className="text-xs sm:text-sm text-gray-500">Page</div>
            <div className="font-bold">{currentPage + 1} / {totalPages}</div>
          </div>

          <Button
            onClick={nextPage}
            disabled={currentPage === totalPages - 1}
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 rounded-full w-10 h-10 sm:w-12 sm:h-12 p-0 disabled:opacity-50 transition-all duration-300 shadow-lg disabled:shadow-none"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </Button>
        </div>
      </div>

      {/* Perfect Controls */}
      <div className="fixed top-6 sm:top-8 right-6 sm:right-8 z-50">
        <div className="flex gap-3">
          <Button
            onClick={() => setShowTableOfContents(!showTableOfContents)}
            className="bg-white/95 backdrop-blur-xl hover:bg-white text-gray-700 border border-gray-200/50 rounded-full w-12 h-12 sm:w-14 sm:h-14 p-0 transition-all duration-300 shadow-xl"
          >
            <Menu className="w-4 h-4 sm:w-5 sm:h-5" />
          </Button>

          <Button
            onClick={() => {
              setBookmarkPage(currentPage)
              trackEvent('bookmark_page', {
                page_number: currentPage + 1,
                page_title: getCurrentPageData().title || getCurrentPageData().style,
                page_type: getCurrentPageData().type
              })
            }}
            className="bg-white/95 backdrop-blur-xl hover:bg-white text-gray-700 border border-gray-200/50 rounded-full w-12 h-12 sm:w-14 sm:h-14 p-0 transition-all duration-300 shadow-xl"
          >
            <Bookmark className={`w-4 h-4 sm:w-5 sm:h-5 ${bookmarkPage === currentPage ? "fill-current text-blue-500" : ""}`} />
          </Button>

          <Button
            className="bg-white/95 backdrop-blur-xl hover:bg-white text-gray-700 border border-gray-200/50 rounded-full w-12 h-12 sm:w-14 sm:h-14 p-0 transition-all duration-300 shadow-xl"
          >
            <Share className="w-4 h-4 sm:w-5 sm:h-5" />
          </Button>
        </div>
      </div>

      {/* Perfect Progress Indicator */}
      <div className="fixed top-6 sm:top-8 left-6 sm:left-8 z-50">
        <div className="bg-white/95 backdrop-blur-xl rounded-2xl px-4 sm:px-6 py-3 sm:py-4 border border-gray-200/50 max-w-xs sm:max-w-sm shadow-xl">
          <div className="text-gray-700 text-sm sm:text-base font-semibold truncate mb-2">
            {getCurrentPageData().title || getCurrentPageData().style || getCurrentPageData().chapter}
          </div>
          <div className="w-32 sm:w-40 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-500"
              style={{ width: `${((currentPage + 1) / totalPages) * 100}%` }}
            ></div>
          </div>
          <div className="text-xs text-gray-500 mt-1">
            {getCurrentPageData().period && `${getCurrentPageData().period} • `}
            Chapter {Math.floor(currentPage / 10) + 1}
          </div>
        </div>
      </div>
    </div>
  )
} 