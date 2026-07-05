import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

// A lightweight gradient that follows the cursor and brings life to the background.
function MouseGradient() {
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
      className="pointer-events-none fixed inset-0 z-0"
      animate={{ background: `radial-gradient(380px circle at ${position.x}px ${position.y}px, rgba(34,211,238,0.14), transparent 60%)` }}
      transition={{ type: 'spring', stiffness: 80, damping: 30, mass: 0.4 }}
    />
  )
}

export default MouseGradient
