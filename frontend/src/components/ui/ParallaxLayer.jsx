import { motion, useReducedMotion } from 'framer-motion'

// A lightweight floating layer that adds subtle depth without heavy animation cost.
function ParallaxLayer({ className = '', children, offset = 12 }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      aria-hidden="true"
      className={`pointer-events-none absolute ${className}`}
      animate={shouldReduceMotion ? undefined : { y: [0, -offset, 0], x: [0, offset / 2, 0], rotate: [0, 0.6, 0] }}
      transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  )
}

export default ParallaxLayer
