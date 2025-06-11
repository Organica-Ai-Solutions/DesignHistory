"use client"

import { forwardRef, useEffect, useImperativeHandle, useRef } from "react"

interface AudioPlayerProps {
  src?: string
}

export const AudioPlayer = forwardRef<HTMLAudioElement, AudioPlayerProps>(({ src = "/sounds.mp3" }, ref) => {
  const audioRef = useRef<HTMLAudioElement>(null)

  useImperativeHandle(ref, () => audioRef.current as HTMLAudioElement)

  useEffect(() => {
    // Preload audio
    if (audioRef.current) {
      audioRef.current.load()
    }
  }, [])

  return (
    <audio ref={audioRef} className="hidden" preload="auto">
      <source src={src} type="audio/mpeg" />
    </audio>
  )
})

AudioPlayer.displayName = "AudioPlayer"
