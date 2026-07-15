import { motion, useReducedMotion } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'

function Particles({ count = 220 }) {
  const shouldReduceMotion = useReducedMotion()
  const [cursor, setCursor] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMove = (event) => {
      setCursor({ x: event.clientX, y: event.clientY })
    }

    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  const particles = useMemo(() =>
    Array.from({ length: count }, (_, index) => {
      const left = ((index * 37) % 100) + 0.5
      const top = ((index * 53 + 11) % 100) + 0.5
      const size = 1.6 + (index % 7) * 1.6
      const duration = 8 + (index % 9) * 1.8
      const delay = (index % 10) * 0.16
      const opacity = 0.24 + (index % 6) * 0.14
      return { id: index, left: `${left}%`, top: `${top}%`, size, duration, delay, opacity }
    }),
    [count],
  )

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((particle) => {
        const dx = cursor.x - window.innerWidth / 2
        const dy = cursor.y - window.innerHeight / 2
        const distance = Math.hypot(dx, dy)
        const influence = Math.max(0, 1 - distance / 900)
        const offsetX = (particle.id % 2 === 0 ? 1 : -1) * influence * 14
        const offsetY = (particle.id % 3 === 0 ? 1 : -1) * influence * 10

        return (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              left: particle.left,
              top: particle.top,
              width: particle.size,
              height: particle.size,
              opacity: particle.opacity,
              background: 'radial-gradient(circle, rgba(255,255,255,0.95), rgba(34,211,238,0.4) 55%, transparent 100%)',
              boxShadow: '0 0 16px rgba(56,189,248,0.55)',
              transform: `translate3d(${offsetX}px, ${offsetY}px, 0)`,
            }}
            animate={shouldReduceMotion ? undefined : { y: [0, -28, 0], x: [0, 12, 0], scale: [0.9, 1.25, 0.9], opacity: [particle.opacity * 0.6, particle.opacity * 1.25, particle.opacity * 0.6] }}
            transition={{ duration: particle.duration, repeat: Infinity, delay: particle.delay, ease: 'easeInOut' }}
          />
        )
      })}
    </div>
  )
}

export default Particles
