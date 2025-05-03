"use client"

import { useRef, useEffect, useState } from "react"
import { useMousePosition } from "@/hooks/use-mouse-position"

interface SparklesProps {
  id?: string
  className?: string
  background?: string
  minSize?: number
  maxSize?: number
  particleDensity?: number
  particleColor?: string
  particleImage?: string
  particleSpeed?: number
}

export const SparklesCore = ({
  id,
  className,
  background = "transparent",
  minSize = 0.4,
  maxSize = 1,
  particleDensity = 100,
  particleColor = "#FFF",
  particleImage,
  particleSpeed = 1,
}: SparklesProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mousePosition = useMousePosition()
  const mouse = useRef({ x: 0, y: 0 })
  const canvasSize = useRef({ w: 0, h: 0 })
  const particles = useRef<any[]>([])
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    if (mousePosition.x !== null && mousePosition.y !== null) {
      mouse.current.x = mousePosition.x
      mouse.current.y = mousePosition.y
    }
  }, [mousePosition])

  const initializeCanvas = () => {
    if (!canvasRef.current) return
    const ctx = canvasRef.current.getContext("2d")
    if (!ctx) return

    resizeCanvas()
    createParticles()
    animateParticles()
    setIsInitialized(true)
  }

  const resizeCanvas = () => {
    if (!canvasRef.current) return
    const canvas = canvasRef.current
    const parent = canvas.parentElement
    if (!parent) return

    canvas.width = parent.clientWidth
    canvas.height = parent.clientHeight
    canvasSize.current.w = canvas.width
    canvasSize.current.h = canvas.height
  }

  const createParticles = () => {
    particles.current = []
    const particleCount = Math.min(particleDensity, 500)
    for (let i = 0; i < particleCount; i++) {
      particles.current.push({
        x: Math.random() * canvasSize.current.w,
        y: Math.random() * canvasSize.current.h,
        size: Math.random() * (maxSize - minSize) + minSize,
        speedX: (Math.random() - 0.5) * particleSpeed,
        speedY: (Math.random() - 0.5) * particleSpeed,
        color: particleColor,
      })
    }
  }

  const drawParticles = (ctx: CanvasRenderingContext2D) => {
    particles.current.forEach((particle) => {
      ctx.beginPath()
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
      ctx.fillStyle = particle.color
      ctx.fill()
    })
  }

  const updateParticles = () => {
    particles.current.forEach((particle) => {
      particle.x += particle.speedX
      particle.y += particle.speedY

      if (particle.x > canvasSize.current.w) {
        particle.x = 0
      } else if (particle.x < 0) {
        particle.x = canvasSize.current.w
      }

      if (particle.y > canvasSize.current.h) {
        particle.y = 0
      } else if (particle.y < 0) {
        particle.y = canvasSize.current.h
      }

      // Mouse interaction
      const dx = mouse.current.x - particle.x
      const dy = mouse.current.y - particle.y
      const distance = Math.sqrt(dx * dx + dy * dy)
      const maxDistance = 100

      if (distance < maxDistance) {
        const force = (maxDistance - distance) / maxDistance
        const angle = Math.atan2(dy, dx)
        particle.speedX -= Math.cos(angle) * force * 0.1
        particle.speedY -= Math.sin(angle) * force * 0.1
      }
    })
  }

  const animateParticles = () => {
    if (!canvasRef.current) return
    const ctx = canvasRef.current.getContext("2d")
    if (!ctx) return

    ctx.clearRect(0, 0, canvasSize.current.w, canvasSize.current.h)
    ctx.fillStyle = background
    ctx.fillRect(0, 0, canvasSize.current.w, canvasSize.current.h)

    updateParticles()
    drawParticles(ctx)
    connectParticles(ctx)

    requestAnimationFrame(animateParticles)
  }

  const connectParticles = (ctx: CanvasRenderingContext2D) => {
    const maxDistance = 100
    for (let i = 0; i < particles.current.length; i++) {
      for (let j = i + 1; j < particles.current.length; j++) {
        const dx = particles.current[i].x - particles.current[j].x
        const dy = particles.current[i].y - particles.current[j].y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < maxDistance) {
          const opacity = 1 - distance / maxDistance
          ctx.beginPath()
          ctx.strokeStyle = `rgba(79, 70, 229, ${opacity * 0.2})`
          ctx.lineWidth = 0.5
          ctx.moveTo(particles.current[i].x, particles.current[i].y)
          ctx.lineTo(particles.current[j].x, particles.current[j].y)
          ctx.stroke()
        }
      }
    }
  }

  useEffect(() => {
    if (!isInitialized) {
      initializeCanvas()
    }

    const handleResize = () => {
      resizeCanvas()
      createParticles()
    }

    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [isInitialized])

  return <canvas ref={canvasRef} id={id} className={className} style={{ background }} />
}
