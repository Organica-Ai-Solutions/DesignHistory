"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Cloud,
  Droplets,
  Leaf,
  Sun,
  Wind,
  Zap,
  Play,
  Pause,
  SkipForward,
  Volume2,
  Wifi,
  Battery,
  Signal,
} from "lucide-react"

export default function Component() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(75)

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Frutiger Aero Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-300 via-emerald-200 to-blue-400">
        {/* Organic flowing shapes */}
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
                  <Badge className="bg-emerald-500/80 text-white border-emerald-400/50">
                    <Leaf className="w-3 h-3 mr-1" />
                    Eco Mode
                  </Badge>
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
                  <SkipForward className="w-4 h-4 rotate-180" />
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
                  <SkipForward className="w-4 h-4" />
                </Button>
              </div>

              <div className="flex items-center gap-2">
                <Volume2 className="w-4 h-4 text-white/60" />
                <div className="flex-1 h-2 bg-slate-700 rounded-full overflow-hidden shadow-inner">
                  <div
                    className="h-full bg-gradient-to-r from-emerald-400 to-cyan-400 shadow-sm"
                    style={{ width: `${volume}%` }}
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
}
