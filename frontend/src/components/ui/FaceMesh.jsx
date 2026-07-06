import { motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'

// A large glowing face mesh that stays behind the content and subtly tracks the cursor.
function FaceMesh() {
  const shouldReduceMotion = useReducedMotion()
  const [cursor, setCursor] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMove = (event) => {
      setCursor({ x: event.clientX, y: event.clientY })
    }

    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.08]"
      animate={shouldReduceMotion ? undefined : { rotate: [0, 1.2, 0], x: [0, 14, 0], y: [0, -10, 0] }}
      transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
      style={{ x: (cursor.x / window.innerWidth - 0.5) * 10, y: (cursor.y / window.innerHeight - 0.5) * 8 }}
    >
      <svg viewBox="0 0 512 512" className="h-[52rem] w-[52rem] max-w-full drop-shadow-[0_0_40px_rgba(34,211,238,0.35)]">
        <g stroke="rgba(34,211,238,0.95)" strokeWidth="2.2" fill="none" strokeLinecap="round">
          <path d="M208 136c24-24 72-24 96 0" />
          <path d="M178 178c20 14 56 24 78 24s58-10 78-24" />
          <path d="M178 210c14 22 26 36 46 42" />
          <path d="M334 210c-14 22-26 36-46 42" />
          <path d="M172 238c26 48 78 72 124 72s98-24 128-72" />
          <path d="M140 290c38 44 82 66 136 66s100-22 136-66" />
          <path d="M208 132v-28" />
          <path d="M304 132v-28" />
          <path d="M214 314l-34 78" />
          <path d="M298 314l34 78" />
          <circle cx="210" cy="176" r="2.2" fill="rgba(34,211,238,0.95)" />
          <circle cx="302" cy="176" r="2.2" fill="rgba(34,211,238,0.95)" />
          <circle cx="256" cy="224" r="2.4" fill="rgba(34,211,238,0.95)" />
          <circle cx="208" cy="292" r="2.2" fill="rgba(34,211,238,0.95)" />
          <circle cx="304" cy="292" r="2.2" fill="rgba(34,211,238,0.95)" />
        </g>
      </svg>
    </motion.div>
  )
}

export default FaceMesh
