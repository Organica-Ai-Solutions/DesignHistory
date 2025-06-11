"use client"

import { motion, type MotionValue } from "framer-motion"

interface ScrollProgressProps {
  progress: MotionValue<number>
}

export function ScrollProgress({ progress }: ScrollProgressProps) {
  return (
    <motion.div
      className="fixed bottom-8 right-8 z-30"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, type: "spring" }}
    >
      <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
        <svg width="40" height="40" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="8" />
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="white"
            strokeWidth="8"
            strokeDasharray="283"
            style={{
              strokeDashoffset: progress.get() * 283,
              transformOrigin: "center",
              rotate: "-90deg",
            }}
          />
        </svg>
      </div>
    </motion.div>
  )
}
