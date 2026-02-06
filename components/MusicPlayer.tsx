'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 600)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
        if (isMuted) {
          setIsMuted(false)
          audioRef.current.muted = false
        }
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (audioRef.current) {
      const newMutedState = !isMuted
      audioRef.current.muted = newMutedState
      setIsMuted(newMutedState)
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-8 right-8 z-40"
        >
          {/* Hidden audio element */}
          <audio
            ref={audioRef}
            loop
            muted={isMuted}
            src={process.env.NEXT_PUBLIC_MUSIC_URL || '/music/track.mp3'}
          />

          {/* Music player controls */}
          <div className="flex flex-col gap-2">
            {/* Play/Pause button */}
            <motion.button
              onClick={togglePlay}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <div className="w-12 h-12 glass-heavy border border-bone/20 backdrop-blur-xl flex items-center justify-center relative overflow-hidden">
                {/* Scan line */}
                <motion.div
                  className="absolute inset-0 bg-accent/10"
                  animate={{
                    y: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />

                {/* Icon */}
                {isPlaying ? (
                  // Pause icon (two bars)
                  <div className="relative z-10 flex gap-1">
                    <div className="w-1 h-4 bg-bone group-hover:bg-accent transition-colors duration-300" />
                    <div className="w-1 h-4 bg-bone group-hover:bg-accent transition-colors duration-300" />
                  </div>
                ) : (
                  // Play icon (triangle)
                  <svg
                    className="relative z-10 w-4 h-4 ml-0.5 fill-bone group-hover:fill-accent transition-colors duration-300"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}

                {/* Corner markers */}
                <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-accent/40" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-accent/40" />
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 bg-accent/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            </motion.button>

            {/* Mute/Unmute button */}
            <motion.button
              onClick={toggleMute}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <div className="w-12 h-12 glass-heavy border border-bone/20 backdrop-blur-xl flex items-center justify-center relative overflow-hidden">
                {/* Icon */}
                {isMuted ? (
                  // Muted icon
                  <svg
                    className="relative z-10 w-4 h-4 stroke-bone/50 group-hover:stroke-accent transition-colors duration-300"
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                    <line x1="23" y1="9" x2="17" y2="15" />
                    <line x1="17" y1="9" x2="23" y2="15" />
                  </svg>
                ) : (
                  // Unmuted icon
                  <svg
                    className="relative z-10 w-4 h-4 stroke-bone group-hover:stroke-accent transition-colors duration-300"
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                    <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                  </svg>
                )}

                {/* Corner markers */}
                <div className="absolute top-0 right-0 w-2 h-2 border-r border-t border-bone/20" />
                <div className="absolute bottom-0 left-0 w-2 h-2 border-l border-b border-bone/20" />
              </div>
            </motion.button>

            {/* Now playing indicator */}
            {isPlaying && !isMuted && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="glass border border-bone/10 px-2 py-1 mt-1"
              >
                <div className="flex items-center gap-1.5">
                  {/* Audio bars animation */}
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="w-0.5 bg-accent"
                      animate={{
                        height: ['4px', '12px', '4px'],
                      }}
                      transition={{
                        duration: 0.6,
                        repeat: Infinity,
                        delay: i * 0.2,
                        ease: 'easeInOut',
                      }}
                    />
                  ))}
                  <span className="font-mono text-[10px] text-bone/40 ml-1">
                    LIVE
                  </span>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
