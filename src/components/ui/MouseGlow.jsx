import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

// A vivid cursor-following glow that makes the scene feel alive and responsive.
function MouseGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY })
    }

    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0"
      animate={{ background: `radial-gradient(640px circle at ${position.x}px ${position.y}px, rgba(34,211,238,0.18), transparent 64%)` }}
      transition={{ type: 'spring', stiffness: 70, damping: 24, mass: 0.4 }}
    />
  )
}

export default MouseGlow
