'use client'

import { useEffect, useRef } from 'react'

export default function GlitchBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let glitchTimer: NodeJS.Timeout

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Digital rain characters
    const chars = 'ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍ01$'.split('')
    const fontSize = 14
    const columns = Math.floor(canvas.width / fontSize)
    const drops: number[] = Array(columns).fill(1)

    // Glitch state
    let glitchActive = false
    let glitchBlocks: Array<{ x: number; y: number; w: number; h: number }> = []

    // Random glitch activation
    const triggerGlitch = () => {
      glitchActive = true
      glitchBlocks = []

      // Generate random glitch blocks
      const numBlocks = Math.floor(Math.random() * 3) + 2
      for (let i = 0; i < numBlocks; i++) {
        glitchBlocks.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          w: Math.random() * 200 + 50,
          h: Math.random() * 100 + 20,
        })
      }

      setTimeout(() => {
        glitchActive = false
      }, 100)
    }

    // Trigger glitch every 2-4 seconds
    const scheduleNextGlitch = () => {
      const delay = 2000 + Math.random() * 2000
      glitchTimer = setTimeout(() => {
        triggerGlitch()
        scheduleNextGlitch()
      }, delay)
    }
    scheduleNextGlitch()

    const draw = () => {
      // Semi-transparent black background for trail effect
      ctx.fillStyle = 'rgba(10, 10, 10, 0.15)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Digital rain - very subtle
      ctx.font = `${fontSize}px monospace`

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)]
        const x = i * fontSize
        const y = drops[i] * fontSize

        // Very subtle opacity - mostly invisible
        const isRed = Math.random() > 0.98
        const opacity = 0.03 + Math.random() * 0.02
        ctx.fillStyle = isRed
          ? `rgba(139, 0, 0, ${opacity})`
          : `rgba(244, 244, 240, ${opacity})`

        ctx.fillText(char, x, y)

        // Reset drop randomly
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }

      // Scan lines (very subtle)
      const scanLineY = (Date.now() / 10) % canvas.height
      ctx.fillStyle = 'rgba(139, 0, 0, 0.01)'
      ctx.fillRect(0, scanLineY, canvas.width, 1)

      // VHS tracking lines (barely visible)
      const trackingLineY = (Date.now() / 30) % canvas.height
      ctx.strokeStyle = 'rgba(139, 0, 0, 0.008)'
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.moveTo(0, trackingLineY)
      ctx.lineTo(canvas.width, trackingLineY)
      ctx.stroke()

      animationFrameId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationFrameId)
      clearTimeout(glitchTimer)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none opacity-20"
      style={{ zIndex: 1 }}
    />
  )
}
