'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

interface Point {
  x: number
  y: number
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

      // Draw web connections - sticky, organic
      ctx.lineWidth = 2

      nodes.forEach((node) => {
        const distance = Math.hypot(currentCursorX - node.x, currentCursorY - node.y)
        const maxDistance = 250

        if (distance < maxDistance) {
          const opacity = (1 - distance / maxDistance) * 0.2
          const stretch = distance / maxDistance

          // Sticky, curved connection
          ctx.beginPath()
          ctx.moveTo(currentCursorX, currentCursorY)

          // Control points for organic curve
          const controlX = (currentCursorX + node.x) / 2 + (Math.random() - 0.5) * 20
          const controlY = (currentCursorY + node.y) / 2 + (Math.random() - 0.5) * 20

          ctx.quadraticCurveTo(controlX, controlY, node.x, node.y)

          // Green/yellow gradient
          const gradient = ctx.createLinearGradient(currentCursorX, currentCursorY, node.x, node.y)
          gradient.addColorStop(0, `rgba(100, 200, 50, ${opacity})`)
          gradient.addColorStop(0.5, `rgba(150, 220, 80, ${opacity * 0.8})`)
          gradient.addColorStop(1, `rgba(200, 200, 50, ${opacity * 0.6})`)

          ctx.strokeStyle = gradient
          ctx.stroke()

          // Organic blob at node
          ctx.beginPath()
          ctx.arc(node.x, node.y, 3 * (1 - stretch), 0, Math.PI * 2)
          ctx.fillStyle = `rgba(150, 220, 80, ${opacity * 0.6})`
          ctx.fill()
        }
      })

      // Connect nearby nodes - very subtle background web
      ctx.lineWidth = 1
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const distance = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y)
          if (distance < 200) {
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.strokeStyle = 'rgba(100, 200, 50, 0.02)'
            ctx.stroke()
          }
        }
      }

      // Draw cursor center - organic blob
      const pulseSize = 4 + Math.sin(Date.now() / 500) * 1
      ctx.beginPath()
      ctx.arc(currentCursorX, currentCursorY, pulseSize, 0, Math.PI * 2)
      const cursorGradient = ctx.createRadialGradient(
        currentCursorX, currentCursorY, 0,
        currentCursorX, currentCursorY, pulseSize
      )
      cursorGradient.addColorStop(0, 'rgba(150, 220, 80, 0.5)')
      cursorGradient.addColorStop(1, 'rgba(100, 200, 50, 0.2)')
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
        className="fixed inset-0 pointer-events-none z-0 opacity-70"
        style={{ mixBlendMode: 'screen' }}
      />

      {/* Cursor glow - organic green/yellow */}
      <motion.div
        className="fixed pointer-events-none z-0 w-12 h-12 -ml-6 -mt-6 rounded-full blur-xl"
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
          opacity: isVisible ? 0.4 : 0,
          background: 'radial-gradient(circle, rgba(150, 220, 80, 0.3), rgba(100, 200, 50, 0.1))',
        }}
        transition={{ duration: 0.2 }}
      />
    </>
  )
}
