"use client"

import { useState, useEffect, useRef, Suspense } from "react"
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from "framer-motion"
import { Canvas } from "@react-three/fiber"
import { Float, Environment } from "@react-three/drei"
import {
  ChevronRight,
  Menu,
  X,
  ArrowRight,
  Sparkles,
  Zap,
  Layers,
  Palette,
  Volume2,
  VolumeX,
  Gamepad2,
} from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { useMobile } from "@/hooks/use-mobile"
import { FloatingBlobs } from "@/components/floating-blobs"
import { AudioPlayer } from "@/components/audio-player"
import { Model3D } from "@/components/model-3d"
import { GlassCard } from "@/components/glass-card"
import { NavigationMenu } from "@/components/navigation-menu"
import { ScrollProgress } from "@/components/scroll-progress"

export default function ExperimentalUI() {
  const [activeSection, setActiveSection] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [soundEnabled, setSoundEnabled] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)
  const isMobile = useMobile()

  const { scrollYProgress } = useScroll()
  const smoothScrollYProgress = useSpring(scrollYProgress, { damping: 20, stiffness: 100 })

  const backgroundY = useTransform(smoothScrollYProgress, [0, 1], ["0%", "20%"])
  const opacity = useTransform(smoothScrollYProgress, [0, 0.2, 0.4, 0.6, 0.8], [1, 0.8, 0.6, 0.4, 0.2])

  // Track mouse position for interactive elements
  useEffect(() => {
    if (isMobile) return

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [isMobile])

  // Handle section changes based on scroll
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const sectionIndex = Math.min(Math.floor(latest * 5), 3)
    if (sectionIndex !== activeSection && sectionIndex >= 0) {
      setActiveSection(sectionIndex)
      playSound("navigation")
    }
  })

  const playSound = (type: "click" | "hover" | "navigation" | "success") => {
    if (!soundEnabled || !audioRef.current) return

    const sounds = {
      click: 0,
      hover: 1,
      navigation: 2,
      success: 3,
    }

    audioRef.current.currentTime = sounds[type] * 0.5
    audioRef.current.play()
  }

  const handleInteraction = () => {
    if (!hasInteracted) {
      setHasInteracted(true)
    }
  }

  const sections = [
    { id: "discover", title: "Discover", icon: <Sparkles className="w-5 h-5" /> },
    { id: "create", title: "Create", icon: <Zap className="w-5 h-5" /> },
    { id: "explore", title: "Explore", icon: <Layers className="w-5 h-5" /> },
    { id: "design", title: "Design", icon: <Palette className="w-5 h-5" /> },
  ]

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-violet-900 via-purple-800 to-fuchsia-900 text-white overflow-hidden"
      onClick={handleInteraction}
    >
      {/* Audio player (hidden) */}
      <AudioPlayer ref={audioRef} />

      {/* Sound toggle */}
      <motion.button
        className="fixed top-8 left-8 z-50 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all"
        onClick={() => setSoundEnabled(!soundEnabled)}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onMouseEnter={() => playSound("hover")}
        onMouseDown={() => playSound("click")}
      >
        {soundEnabled ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
      </motion.button>

      {/* Game link */}
      <motion.div
        className="fixed top-8 left-24 z-50"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, type: "spring" }}
      >
        <Link href="/game">
          <motion.button
            className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onMouseEnter={() => playSound("hover")}
            onMouseDown={() => playSound("click")}
          >
            <Gamepad2 className="w-5 h-5" />
          </motion.button>
        </Link>
      </motion.div>

      {/* Animated background elements */}
      <FloatingBlobs />

      {/* Interactive cursor follower */}
      {!isMobile && (
        <motion.div
          className="fixed w-40 h-40 rounded-full bg-gradient-to-r from-pink-500/20 to-cyan-500/20 backdrop-blur-md z-0 pointer-events-none mix-blend-screen"
          animate={{
            x: mousePosition.x - 80,
            y: mousePosition.y - 80,
          }}
          transition={{
            type: "spring",
            damping: 30,
            stiffness: 200,
            mass: 0.5,
          }}
        />
      )}

      {/* Navigation button */}
      <motion.nav
        className="fixed top-8 right-8 z-50"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring" }}
      >
        <motion.button
          onClick={() => {
            setMenuOpen(!menuOpen)
            playSound("click")
          }}
          className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onMouseEnter={() => playSound("hover")}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </motion.button>
      </motion.nav>

      {/* Navigation menu */}
      <NavigationMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        sections={sections}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        playSound={playSound}
      />

      {/* Main content with parallax effect */}
      <main className="relative z-10">
        {/* Hero section with staggered text animation */}
        <section className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">
          <motion.div
            className="absolute inset-0 z-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-20"
            style={{ y: backgroundY }}
          />

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="mb-6 inline-block"
            >
              <span className="px-4 py-1 rounded-full text-sm bg-white/10 backdrop-blur-sm border border-white/20">
                Reimagining Digital Experiences
              </span>
            </motion.div>

            <div className="overflow-hidden">
              <motion.h1
                className="text-5xl md:text-7xl font-bold mb-6"
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.2, type: "spring", damping: 20 }}
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300">
                  Break Free From
                </span>{" "}
                <br />
                <motion.span
                  className="text-white relative inline-block"
                  animate={{
                    textShadow: [
                      "0 0 8px rgba(255,255,255,0.4)",
                      "0 0 16px rgba(255,255,255,0.2)",
                      "0 0 8px rgba(255,255,255,0.4)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                >
                  Conventional Design
                </motion.span>
              </motion.h1>
            </div>

            <motion.p
              className="text-xl md:text-2xl mb-10 text-white/80 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Explore a new dimension of interactive experiences where boundaries dissolve and creativity flows without
              limits.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.button
                className="px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium flex items-center justify-center group relative overflow-hidden shadow-lg shadow-pink-500/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={() => playSound("hover")}
                onMouseDown={() => playSound("click")}
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-pink-600/0 via-white/20 to-pink-600/0"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.8 }}
                />
                <span className="relative z-10">Start Exploring</span>
                <motion.span
                  className="relative z-10"
                  initial={{ x: 0, opacity: 0.5 }}
                  animate={{ x: 5, opacity: 1 }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                    duration: 0.6,
                  }}
                >
                  <ChevronRight className="ml-2 w-5 h-5" />
                </motion.span>
              </motion.button>

              <Link href="/game">
                <motion.button
                  className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium hover:bg-white/20 transition-all flex items-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onMouseEnter={() => playSound("hover")}
                  onMouseDown={() => playSound("click")}
                >
                  <Gamepad2 className="mr-2 w-5 h-5" />
                  <span>Play Game</span>
                </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* 3D Model */}
          <div className="absolute bottom-20 left-0 right-0 flex justify-center h-64 pointer-events-none">
            <Suspense fallback={null}>
              <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={0.5} />
                <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
                  <Model3D />
                </Float>
                <Environment preset="city" />
              </Canvas>
            </Suspense>
          </div>

          {/* Floating cards with 3D effect */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-6 px-6 overflow-hidden pointer-events-none md:pointer-events-auto">
            {[...Array(3)].map((_, i) => (
              <GlassCard
                key={i}
                index={i}
                title={["Fluid Motion", "Depth Perception", "Spatial Design"][i]}
                playSound={playSound}
              />
            ))}
          </div>
        </section>

        {/* Content sections */}
        {sections.map((section, index) => (
          <section
            key={section.id}
            id={section.id}
            className="min-h-screen flex items-center justify-center px-6 py-20 relative"
          >
            <motion.div
              className="absolute inset-0 z-0 opacity-30"
              style={{
                background: `radial-gradient(circle at ${index % 2 ? "30%" : "70%"} ${index < 2 ? "30%" : "70%"}, 
                  ${["rgba(236, 72, 153, 0.3)", "rgba(139, 92, 246, 0.3)", "rgba(59, 130, 246, 0.3)", "rgba(16, 185, 129, 0.3)"][index]}, 
                  transparent 50%)`,
              }}
            />

            <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-10 items-center relative z-10">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
                className={cn("order-2", { "md:order-1": index % 2 === 0, "md:order-2": index % 2 !== 0 })}
              >
                <div className="inline-block px-4 py-1 rounded-full text-sm bg-white/10 backdrop-blur-sm border border-white/20 mb-4">
                  {section.title}
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  {
                    ["Discover New Possibilities", "Create Without Limits", "Explore Dimensions", "Design the Future"][
                      index
                    ]
                  }
                </h2>
                <p className="text-lg text-white/80 mb-8">
                  {
                    [
                      "Break free from conventional design patterns and discover a new world of possibilities where digital experiences become more intuitive, engaging, and memorable.",
                      "Our fluid interface adapts to your creativity, providing tools that respond to your imagination rather than constraining it to predefined patterns.",
                      "Navigate through dimensions of content with intuitive gestures and fluid transitions that make exploration feel natural and engaging.",
                      "Shape the future of digital experiences with design tools that understand context and adapt to your creative vision.",
                    ][index]
                  }
                </p>
                <motion.button
                  className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium hover:bg-white/20 transition-all flex items-center group"
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  onMouseEnter={() => playSound("hover")}
                  onMouseDown={() => playSound("click")}
                >
                  <span>Learn More</span>
                  <motion.div className="ml-2" initial={{ x: 0 }} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </motion.button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
                className={cn("order-1", { "md:order-2": index % 2 === 0, "md:order-1": index % 2 !== 0 })}
              >
                <div className="relative">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-pink-500/30 to-purple-500/30 rounded-2xl blur-xl"
                    animate={{
                      scale: [1, 1.05, 1],
                      rotate: [0, 1, 0],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                    }}
                  />
                  <motion.div
                    className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/10"
                    whileHover={{ scale: 1.02, rotateY: 5, rotateX: 5 }}
                    transition={{ duration: 0.3 }}
                    style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
                    onMouseEnter={() => playSound("hover")}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        className="text-6xl"
                        animate={{
                          y: [0, -10, 0],
                          rotate: [0, 5, 0],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Number.POSITIVE_INFINITY,
                          repeatType: "reverse",
                        }}
                      >
                        {section.icon}
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </section>
        ))}
      </main>

      {/* Floating action button */}
      <motion.div
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-30"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, type: "spring" }}
      >
        <motion.button
          className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium flex items-center justify-center shadow-lg shadow-purple-500/20 relative overflow-hidden"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onMouseEnter={() => playSound("hover")}
          onMouseDown={() => playSound("click")}
        >
          <motion.span
            className="absolute inset-0 bg-gradient-to-r from-pink-600/0 via-white/20 to-pink-600/0"
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{ duration: 0.8 }}
          />
          <Sparkles className="mr-2 w-5 h-5 relative z-10" />
          <span className="relative z-10">Get Started</span>
        </motion.button>
      </motion.div>

      {/* Scroll progress indicator */}
      <ScrollProgress progress={smoothScrollYProgress} />
    </div>
  )
}
