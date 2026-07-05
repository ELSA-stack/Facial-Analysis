import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'
import AnimatedScene from './AnimatedScene'

// A premium full-screen dark AI scene that stays alive behind the content.
function AnimatedBackground({ children, className = '' }) {
  const containerRef = useRef(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const smoothX = useSpring(mouseX, { stiffness: 70, damping: 28, mass: 0.4 })
  const smoothY = useSpring(mouseY, { stiffness: 70, damping: 28, mass: 0.4 })
  const sceneX = useTransform(smoothX, (value) => value / 18)
  const sceneY = useTransform(smoothY, (value) => value / 18)

  useEffect(() => {
    const element = containerRef.current
    if (!element) return

    const handleMove = (event) => {
      const bounds = element.getBoundingClientRect()
      const x = event.clientX - bounds.left
      const y = event.clientY - bounds.top
      mouseX.set((x / bounds.width - 0.5) * 24)
      mouseY.set((y / bounds.height - 0.5) * 24)
    }

    element.addEventListener('mousemove', handleMove)
    return () => element.removeEventListener('mousemove', handleMove)
  }, [mouseX, mouseY])

  return (
    <motion.div
      ref={containerRef}
      className={`relative isolate overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(6,182,212,0.16),_transparent_25%),radial-gradient(circle_at_85%_10%,_rgba(168,85,247,0.18),_transparent_28%),linear-gradient(135deg,_#020617_0%,_#030712_45%,_#0f172a_100%)] ${className}`}
      style={{ x: sceneX, y: sceneY }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.04),rgba(255,255,255,0)_40%,rgba(6,182,212,0.06)_100%)]" />
      <AnimatedScene />
      <div className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,0.9)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.9)_1px,transparent_1px)] [background-size:34px_34px]" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}

export default AnimatedBackground
