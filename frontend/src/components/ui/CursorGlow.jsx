import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

// A subtle cursor-following glow that adds depth without distracting from the experience.
function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const onMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY })
    }

    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 opacity-70"
      animate={{ x: position.x - 250, y: position.y - 250 }}
      transition={{ type: 'spring', stiffness: 80, damping: 24, mass: 0.4 }}
    >
      <div className="h-64 w-64 rounded-full bg-[radial-gradient(circle,_rgba(34,211,238,0.18),_rgba(34,211,238,0)_70%)] blur-3xl" />
    </motion.div>
  )
}

export default CursorGlow
