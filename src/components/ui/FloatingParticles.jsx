import { motion, useReducedMotion } from 'framer-motion'

// Lightweight floating particles that add motion to the background without sacrificing performance.
function FloatingParticles({ count = 50 }) {
  const shouldReduceMotion = useReducedMotion()
  const particles = Array.from({ length: count }, (_, index) => ({
    id: index,
    left: `${(index * 13 + 5) % 100}%`,
    top: `${(index * 17 + 8) % 100}%`,
    size: 2 + (index % 6) * 2,
    delay: index * 0.08,
    duration: 12 + (index % 5) * 2,
  }))

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-white/90 shadow-[0_0_10px_rgba(255,255,255,0.8)]"
          style={{ left: particle.left, top: particle.top, width: particle.size, height: particle.size }}
          animate={shouldReduceMotion ? undefined : { y: [0, -22, 0], x: [0, 10, 0], opacity: [0.25, 0.8, 0.25] }}
          transition={{ duration: particle.duration, repeat: Infinity, delay: particle.delay, ease: 'easeInOut' }}
        />
      ))}
    </div>
  )
}

export default FloatingParticles
