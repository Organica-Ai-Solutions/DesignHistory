"use client"

import type React from "react"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface NavigationMenuProps {
  isOpen: boolean
  onClose: () => void
  sections: Array<{
    id: string
    title: string
    icon: React.ReactNode
  }>
  activeSection: number
  setActiveSection: (index: number) => void
  playSound: (type: "click" | "hover" | "navigation" | "success") => void
}

export function NavigationMenu({
  isOpen,
  onClose,
  sections,
  activeSection,
  setActiveSection,
  playSound,
}: NavigationMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-40 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            className="relative bg-gradient-to-br from-purple-900/80 to-fuchsia-900/80 backdrop-blur-lg rounded-3xl p-10 max-w-3xl w-full border border-white/10 overflow-hidden"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 20 }}
          >
            {/* Background glow effect */}
            <motion.div
              className="absolute w-64 h-64 rounded-full bg-pink-500/20 blur-3xl"
              animate={{
                x: [0, 100, 200, 100, 0],
                y: [0, 50, 100, 50, 0],
              }}
              transition={{
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />

            <div className="grid grid-cols-2 gap-6 relative z-10">
              {sections.map((section, index) => (
                <motion.div
                  key={section.id}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <Link
                    href={`#${section.id}`}
                    onClick={() => {
                      setActiveSection(index)
                      onClose()
                      playSound("navigation")
                    }}
                    className={`flex flex-col items-center p-6 rounded-xl transition-all border ${
                      activeSection === index
                        ? "bg-white/10 border-white/20"
                        : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
                    }`}
                    onMouseEnter={() => playSound("hover")}
                  >
                    <motion.div
                      className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
                        activeSection === index
                          ? "bg-gradient-to-r from-pink-500 to-violet-500"
                          : "bg-gradient-to-r from-pink-500/70 to-violet-500/70"
                      }`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      {section.icon}
                    </motion.div>
                    <h3 className="text-xl font-bold">{section.title}</h3>
                    <motion.div
                      className={`mt-2 flex items-center ${
                        activeSection === index ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                      } transition-opacity`}
                      initial={{ x: -10 }}
                      whileHover={{ x: 0 }}
                    >
                      <span className="text-sm mr-1">Explore</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
