"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useMobile } from "@/hooks/use-mobile"

export function FloatingBlobs() {
  const [blobs, setBlobs] = useState<Array<{ id: number; size: number; x: number; y: number; opacity: number }>>([])
  const isMobile = useMobile()

  useEffect(() => {
    // Create fewer blobs on mobile
    const blobCount = isMobile ? 10 : 20

    const newBlobs = Array.from({ length: blobCount }, (_, i) => ({
      id: i,
      size: Math.random() * (isMobile ? 150 : 300) + 50,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      opacity: Math.random() * 0.3 + 0.1,
    }))

    setBlobs(newBlobs)
  }, [isMobile])

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {blobs.map((blob) => (
        <motion.div
          key={blob.id}
          className="absolute rounded-full bg-white/10 backdrop-blur-sm"
          initial={{
            width: blob.size,
            height: blob.size,
            x: blob.x,
            y: blob.y,
            opacity: blob.opacity,
          }}
          animate={{
            x: [blob.x, blob.x + (Math.random() * 200 - 100), blob.x],
            y: [blob.y, blob.y + (Math.random() * 200 - 100), blob.y],
            opacity: [blob.opacity, blob.opacity * 0.6, blob.opacity],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: Math.random() * 20 + 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}
