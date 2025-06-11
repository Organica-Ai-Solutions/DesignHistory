"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { useMobile } from "@/hooks/use-mobile"

interface NeonCatcherProps {
  onGameOver: (score: number) => void
  playSound: (type: "click" | "hover" | "catch" | "miss" | "gameOver" | "start") => void
  soundEnabled: boolean
}

interface FallingObject {
  id: number
  x: number
  y: number
  speed: number
  type: "good" | "bad"
  size: number
  color: string
}

export function NeonCatcher({ onGameOver, playSound, soundEnabled }: NeonCatcherProps) {
  const [playerPosition, setPlayerPosition] = useState(50) // Percentage from left
  const [score, setScore] = useState(0)
  const [fallingObjects, setFallingObjects] = useState<FallingObject[]>([])
  const [gameSpeed, setGameSpeed] = useState(1)
  const [lives, setLives] = useState(3)
  const [isGameActive, setIsGameActive] = useState(true)
  const gameAreaRef = useRef<HTMLDivElement>(null)
  const playerRef = useRef<HTMLDivElement>(null)
  const requestRef = useRef<number>()
  const lastTimeRef = useRef<number>(0)
  const objectIdRef = useRef<number>(0)
  const isMobile = useMobile()

  // Initialize game
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setPlayerPosition((prev) => Math.max(5, prev - 5))
      } else if (e.key === "ArrowRight") {
        setPlayerPosition((prev) => Math.min(95, prev + 5))
      }
    }

    // Touch controls for mobile
    const leftControl = document.getElementById("left-control")
    const rightControl = document.getElementById("right-control")

    const handleLeftTouch = () => {
      setPlayerPosition((prev) => Math.max(5, prev - 5))
    }

    const handleRightTouch = () => {
      setPlayerPosition((prev) => Math.min(95, prev + 5))
    }

    if (leftControl) {
      leftControl.addEventListener("touchstart", handleLeftTouch)
      leftControl.addEventListener("mousedown", handleLeftTouch)
    }

    if (rightControl) {
      rightControl.addEventListener("touchstart", handleRightTouch)
      rightControl.addEventListener("mousedown", handleRightTouch)
    }

    window.addEventListener("keydown", handleKeyDown)

    // Start game loop
    requestRef.current = requestAnimationFrame(gameLoop)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)

      if (leftControl) {
        leftControl.removeEventListener("touchstart", handleLeftTouch)
        leftControl.removeEventListener("mousedown", handleLeftTouch)
      }

      if (rightControl) {
        rightControl.removeEventListener("touchstart", handleRightTouch)
        rightControl.removeEventListener("mousedown", handleRightTouch)
      }

      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current)
      }
    }
  }, [])

  // Increase game speed as score increases
  useEffect(() => {
    setGameSpeed(1 + Math.floor(score / 10) * 0.1)
  }, [score])

  // End game when lives run out
  useEffect(() => {
    if (lives <= 0 && isGameActive) {
      setIsGameActive(false)
      setTimeout(() => {
        onGameOver(score)
      }, 1000)
    }
  }, [lives, isGameActive, onGameOver, score])

  const gameLoop = (time: number) => {
    if (!lastTimeRef.current) {
      lastTimeRef.current = time
    }

    const deltaTime = time - lastTimeRef.current
    lastTimeRef.current = time

    // Update falling objects
    updateFallingObjects(deltaTime)

    // Create new objects
    if (Math.random() < 0.02 * gameSpeed && fallingObjects.length < 10) {
      createFallingObject()
    }

    // Check collisions
    checkCollisions()

    // Continue game loop
    requestRef.current = requestAnimationFrame(gameLoop)
  }

  const updateFallingObjects = (deltaTime: number) => {
    setFallingObjects((prevObjects) => {
      return prevObjects
        .map((obj) => ({
          ...obj,
          y: obj.y + obj.speed * gameSpeed * (deltaTime / 16),
        }))
        .filter((obj) => {
          // Remove objects that have fallen past the bottom
          if (obj.y > 100) {
            // If it was a good object that was missed
            if (obj.type === "good") {
              setLives((prev) => prev - 1)
              if (soundEnabled) playSound("miss")
            }
            return false
          }
          return true
        })
    })
  }

  const createFallingObject = () => {
    const id = objectIdRef.current++
    const x = Math.random() * 90 + 5 // 5% to 95% from left
    const speed = 0.1 + Math.random() * 0.1 // Base speed
    const type = Math.random() > 0.2 ? "good" : "bad" // 20% chance of bad object

    const goodColors = ["from-cyan-400 to-blue-500", "from-purple-400 to-indigo-500", "from-pink-400 to-rose-500"]

    const badColors = ["from-red-500 to-orange-600"]

    const color =
      type === "good"
        ? goodColors[Math.floor(Math.random() * goodColors.length)]
        : badColors[Math.floor(Math.random() * badColors.length)]

    const size = type === "good" ? 30 + Math.random() * 20 : 25 + Math.random() * 15

    setFallingObjects((prev) => [...prev, { id, x, y: -10, speed, type, size, color }])
  }

  const checkCollisions = () => {
    if (!playerRef.current) return

    const playerRect = playerRef.current.getBoundingClientRect()

    setFallingObjects((prevObjects) => {
      return prevObjects.filter((obj) => {
        if (!gameAreaRef.current) return true

        const gameAreaRect = gameAreaRef.current.getBoundingClientRect()
        const objX = gameAreaRect.width * (obj.x / 100)
        const objY = gameAreaRect.height * (obj.y / 100)
        const objSize = obj.size

        // Calculate distance between player center and object center
        const playerCenterX = playerRect.left + playerRect.width / 2
        const playerCenterY = playerRect.top + playerRect.height / 2
        const objCenterX = gameAreaRect.left + objX
        const objCenterY = gameAreaRect.top + objY

        const distance = Math.sqrt(Math.pow(playerCenterX - objCenterX, 2) + Math.pow(playerCenterY - objCenterY, 2))

        // Collision detected
        if (distance < playerRect.width / 2 + objSize / 2) {
          if (obj.type === "good") {
            setScore((prev) => prev + 1)
            if (soundEnabled) playSound("catch")
          } else {
            setLives((prev) => prev - 1)
            if (soundEnabled) playSound("miss")
          }
          return false
        }
        return true
      })
    })
  }

  return (
    <div
      ref={gameAreaRef}
      className="w-full h-full relative overflow-hidden bg-gradient-to-b from-black/50 to-purple-900/30"
    >
      {/* Player */}
      <motion.div
        ref={playerRef}
        className="absolute bottom-5 w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 shadow-lg shadow-purple-500/50 flex items-center justify-center"
        animate={{ left: `calc(${playerPosition}% - 2rem)` }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
      >
        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-300 to-purple-400" />
        </div>
      </motion.div>

      {/* Falling objects */}
      {fallingObjects.map((obj) => (
        <motion.div
          key={obj.id}
          className={`absolute rounded-full bg-gradient-to-b ${obj.color} shadow-lg`}
          style={{
            left: `${obj.x}%`,
            top: `${obj.y}%`,
            width: obj.size,
            height: obj.size,
          }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.2 }}
        >
          <div className="absolute inset-1 rounded-full bg-white/30 opacity-70" />
        </motion.div>
      ))}

      {/* Lives display */}
      <div className="absolute top-4 right-4 flex">
        {[...Array(3)].map((_, i) => (
          <div key={i} className={`w-4 h-4 rounded-full mx-1 ${i < lives ? "bg-pink-500" : "bg-white/20"}`} />
        ))}
      </div>

      {/* Score display */}
      <div className="absolute top-4 left-4 text-lg font-bold">{score}</div>
    </div>
  )
}
