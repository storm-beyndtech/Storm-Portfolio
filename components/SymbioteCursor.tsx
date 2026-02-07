'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

interface Point {
  x: number
  y: number
  phase: number
  drift: number
  bias: number
}

export default function SymbioteCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)

  const springConfig = { damping: 40, stiffness: 80, mass: 1.5 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  const [nodes, setNodes] = useState<Point[]>([])
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Generate web anchor points
    const generateNodes = () => {
      const nodeCount = 12
      const points: Point[] = []
      for (let i = 0; i < nodeCount; i++) {
        points.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          phase: Math.random() * Math.PI * 2,
          drift: 20 + Math.random() * 35,
          bias: 0.6 + Math.random() * 0.6,
        })
      }
      setNodes(points)
    }

    generateNodes()
    window.addEventListener('resize', generateNodes)

    return () => window.removeEventListener('resize', generateNodes)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const updateCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    updateCanvasSize()
    window.addEventListener('resize', updateCanvasSize)

    let currentCursorX = 0
    let currentCursorY = 0

    const unsubscribeX = cursorXSpring.on('change', (v) => {
      currentCursorX = v
    })
    const unsubscribeY = cursorYSpring.on('change', (v) => {
      currentCursorY = v
    })

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      if (!isVisible) return

      const time = performance.now() / 1000

      // Draw web connections - sticky, organic, MORE VISIBLE
      ctx.lineWidth = 6.4

      nodes.forEach((node) => {
        const wobbleX = Math.sin(time * 0.35 + node.phase) * node.drift
        const wobbleY = Math.cos(time * 0.28 + node.phase) * (node.drift * 0.7)
        const nx = node.x + wobbleX
        const ny = node.y + wobbleY

        const distance = Math.hypot(currentCursorX - nx, currentCursorY - ny)
        const maxDistance = 250

        if (distance < maxDistance) {
          const opacity = (1 - distance / maxDistance) * 1.25 * node.bias
          const stretch = distance / maxDistance

          // Sticky, curved connection
          ctx.beginPath()
          ctx.moveTo(currentCursorX, currentCursorY)

          // Control points for organic curve
          const controlX = (currentCursorX + nx) / 2 + Math.sin(time + node.phase) * 26
          const controlY = (currentCursorY + ny) / 2 + Math.cos(time * 0.8 + node.phase) * 22

          ctx.quadraticCurveTo(controlX, controlY, nx, ny)

          // Deep maroon web for high contrast without extra glow
          const gradient = ctx.createLinearGradient(currentCursorX, currentCursorY, nx, ny)
          gradient.addColorStop(0, `rgba(40, 4, 8, ${opacity})`)
          gradient.addColorStop(0.5, `rgba(75, 8, 14, ${opacity * 0.9})`)
          gradient.addColorStop(1, `rgba(35, 4, 8, ${opacity * 0.75})`)

          ctx.strokeStyle = gradient
          ctx.stroke()

          // Organic blob at node - visible
          ctx.beginPath()
          ctx.arc(nx, ny, 4 * (1 - stretch), 0, Math.PI * 2)
          const blobGradient = ctx.createRadialGradient(nx, ny, 0, nx, ny, 4 * (1 - stretch))
          blobGradient.addColorStop(0, `rgba(210, 200, 200, ${opacity * 0.5})`)
          blobGradient.addColorStop(1, `rgba(80, 25, 30, ${opacity * 0.35})`)
          ctx.fillStyle = blobGradient
          ctx.fill()
        }
      })

      // Connect nearby nodes - more visible background web
      ctx.lineWidth = 3.6
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const ni = nodes[i]
          const nj = nodes[j]
          const nix = ni.x + Math.sin(time * 0.35 + ni.phase) * ni.drift
          const niy = ni.y + Math.cos(time * 0.28 + ni.phase) * (ni.drift * 0.7)
          const njx = nj.x + Math.sin(time * 0.35 + nj.phase) * nj.drift
          const njy = nj.y + Math.cos(time * 0.28 + nj.phase) * (nj.drift * 0.7)
          const distance = Math.hypot(nix - njx, niy - njy)
          if (distance < 340) {
            ctx.beginPath()
            ctx.moveTo(nix, niy)
            ctx.lineTo(njx, njy)
            const bgGradient = ctx.createLinearGradient(nix, niy, njx, njy)
            bgGradient.addColorStop(0, 'rgba(55, 8, 10, 0.07)')
            bgGradient.addColorStop(1, 'rgba(35, 6, 8, 0.07)')
            ctx.strokeStyle = bgGradient
            ctx.stroke()
          }
        }
      }

      // Draw cursor center - organic pulsing blob
      const pulseSize = 10 + Math.sin(Date.now() / 500) * 4.2
      ctx.beginPath()
      ctx.arc(currentCursorX, currentCursorY, pulseSize, 0, Math.PI * 2)
      const cursorGradient = ctx.createRadialGradient(
        currentCursorX, currentCursorY, 0,
        currentCursorX, currentCursorY, pulseSize
      )
      cursorGradient.addColorStop(0, 'rgba(200, 190, 190, 0.65)')
      cursorGradient.addColorStop(0.5, 'rgba(120, 50, 60, 0.4)')
      cursorGradient.addColorStop(1, 'rgba(70, 16, 20, 0.25)')
      ctx.fillStyle = cursorGradient
      ctx.fill()
    }

    const animate = () => {
      draw()
      requestAnimationFrame(animate)
    }
    animate()

    return () => {
      unsubscribeX()
      unsubscribeY()
      window.removeEventListener('resize', updateCanvasSize)
    }
  }, [cursorXSpring, cursorYSpring, nodes, isVisible])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [cursorX, cursorY])

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
        style={{ mixBlendMode: 'screen', opacity: 0.9 }}
      />

      {/* Cursor glow kept minimal to avoid washing out the webs */}
      <motion.div
        className="fixed pointer-events-none z-0 w-16 h-16 -ml-8 -mt-8 rounded-full blur-2xl"
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
          opacity: isVisible ? 0.65 : 0,
          background: 'radial-gradient(circle, rgba(160, 120, 120, 0.4), rgba(110, 30, 40, 0.25), rgba(60, 8, 12, 0.12))',
        }}
        transition={{ duration: 0.2 }}
      />
    </>
  )
}
