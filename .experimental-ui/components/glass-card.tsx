"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

interface GlassCardProps {
  index: number
  title: string
  playSound: (type: "click" | "hover" | "navigation" | "success") => void
}

export function GlassCard({ index, title, playSound }: GlassCardProps) {
  return (
    <motion.div
      className="w-64 h-40 rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/10 p-5 flex flex-col justify-between"
      initial={{
        y: 100 + index * 20,
        opacity: 0,
        rotateX: 10,
        rotateY: index % 2 === 0 ? 5 : -5,
      }}
      animate={{
        y: 0,
        opacity: 1,
        rotateX: 0,
        rotateY: 0,
      }}
      transition={{
        delay: 0.8 + index * 0.2,
        type: "spring",
        damping: 20,
      }}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
      whileHover={{
        y: -10,
        rotateX: 5,
        rotateY: index % 2 === 0 ? 5 : -5,
        transition: { duration: 0.3 },
      }}
      onMouseEnter={() => playSound("hover")}
    >
      <div className="text-sm text-white/70">0{index + 1}</div>
      <div>
        <h3 className="text-lg font-medium">{title}</h3>
        <div className="flex items-center mt-2 text-sm text-white/70 group">
          <span>Explore</span>
          <motion.div className="ml-2" initial={{ x: 0 }} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
            <ArrowRight className="w-4 h-4" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
