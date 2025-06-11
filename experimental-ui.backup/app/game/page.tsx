"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, ArrowRight, Home, RefreshCw, Volume2, VolumeX } from "lucide-react"
import Link from "next/link"
import { NeonCatcher } from "@/components/game/neon-catcher"
import { AudioPlayer } from "@/components/audio-player"

export default function GamePage() {
  const [gameActive, setGameActive] = useState(false)
  const [gameOver, setGameOver] = useState(false)
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)
  const [soundEnabled, setSoundEnabled] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    // Load high score from localStorage
    const savedHighScore = localStorage.getItem("neonCatcherHighScore")
    if (savedHighScore) {
      setHighScore(Number.parseInt(savedHighScore))
    }
  }, [])

  useEffect(() => {
    // Save high score to localStorage when it changes
    if (score > highScore) {
      setHighScore(score)
      localStorage.setItem("neonCatcherHighScore", score.toString())
    }
  }, [score, highScore])

  const playSound = (type: "click" | "hover" | "catch" | "miss" | "gameOver" | "start") => {
    if (!soundEnabled || !audioRef.current) return

    const sounds = {
      click: 0,
      hover: 1,
      catch: 2,
      miss: 3,
      gameOver: 4,
      start: 5,
    }

    audioRef.current.currentTime = sounds[type] * 0.5
    audioRef.current.play()
  }

  const handleStartGame = () => {
    setGameActive(true)
    setGameOver(false)
    setScore(0)
    playSound("start")
  }

  const handleGameOver = (finalScore: number) => {
    setGameActive(false)
    setGameOver(true)
    setScore(finalScore)
    playSound("gameOver")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-900 via-purple-800 to-fuchsia-900 text-white overflow-hidden">
      {/* Audio player (hidden) */}
      <AudioPlayer ref={audioRef} src="/game-sounds.mp3" />

      {/* Background elements */}
      <div className="fixed inset-0 z-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/5 backdrop-blur-sm"
            initial={{
              width: Math.random() * 300 + 50,
              height: Math.random() * 300 + 50,
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: Math.random() * 0.3,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: [0.1, 0.2, 0.1],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <div className="fixed top-8 left-8 z-50 flex items-center gap-4">
        <Link href="/">
          <motion.button
            className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onMouseEnter={() => playSound("hover")}
            onClick={() => playSound("click")}
          >
            <Home className="w-5 h-5" />
          </motion.button>
        </Link>
        <motion.button
          className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all"
          onClick={() => setSoundEnabled(!soundEnabled)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onMouseEnter={() => playSound("hover")}
        >
          {soundEnabled ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
        </motion.button>
      </div>

      {/* Game container */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-20">
        <motion.div
          className="mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300">
            Neon Catcher
          </h1>
          <p className="text-lg text-white/70">Catch the falling neon orbs to score points</p>
        </motion.div>

        {/* Score display */}
        <motion.div
          className="flex justify-between w-full max-w-md mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="px-4 py-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20">
            <span className="text-sm text-white/70">Score</span>
            <div className="text-2xl font-bold">{score}</div>
          </div>
          <div className="px-4 py-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20">
            <span className="text-sm text-white/70">High Score</span>
            <div className="text-2xl font-bold">{highScore}</div>
          </div>
        </motion.div>

        {/* Game area */}
        <motion.div
          className="w-full max-w-md h-[500px] rounded-2xl bg-black/30 backdrop-blur-md border border-white/10 overflow-hidden relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          {gameActive ? (
            <NeonCatcher onGameOver={handleGameOver} playSound={playSound} soundEnabled={soundEnabled} />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
              <AnimatePresence mode="wait">
                {gameOver ? (
                  <motion.div
                    key="game-over"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex flex-col items-center"
                  >
                    <h2 className="text-3xl font-bold mb-2">Game Over</h2>
                    <p className="text-xl mb-6">
                      Your score: <span className="text-pink-400 font-bold">{score}</span>
                    </p>
                    <motion.button
                      className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium flex items-center justify-center group relative overflow-hidden shadow-lg shadow-pink-500/20 mb-4"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleStartGame}
                      onMouseEnter={() => playSound("hover")}
                    >
                      <motion.span
                        className="absolute inset-0 bg-gradient-to-r from-pink-600/0 via-white/20 to-pink-600/0"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.8 }}
                      />
                      <RefreshCw className="mr-2 w-5 h-5 relative z-10" />
                      <span className="relative z-10">Play Again</span>
                    </motion.button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="start-game"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex flex-col items-center"
                  >
                    <p className="text-lg mb-8 max-w-xs">
                      Use the arrow keys or touch controls to catch falling neon orbs. Avoid the red ones!
                    </p>
                    <motion.button
                      className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium flex items-center justify-center group relative overflow-hidden shadow-lg shadow-pink-500/20"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleStartGame}
                      onMouseEnter={() => playSound("hover")}
                    >
                      <motion.span
                        className="absolute inset-0 bg-gradient-to-r from-pink-600/0 via-white/20 to-pink-600/0"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.8 }}
                      />
                      <span className="relative z-10">Start Game</span>
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </motion.div>

        {/* Controls */}
        {gameActive && (
          <motion.div
            className="mt-6 flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <motion.button
              className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              id="left-control"
            >
              <ArrowLeft className="w-6 h-6" />
            </motion.button>
            <motion.button
              className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              id="right-control"
            >
              <ArrowRight className="w-6 h-6" />
            </motion.button>
          </motion.div>
        )}
      </div>
    </div>
  )
}
