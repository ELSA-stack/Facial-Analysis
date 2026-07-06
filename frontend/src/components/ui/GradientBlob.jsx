import { motion, useReducedMotion } from 'framer-motion'

// A soft animated gradient blob that adds depth to the AI-style background.
function GradientBlob({
  className = '',
  size = '20rem',
  top = '10%',
  left = '10%',
  gradient = 'radial-gradient(circle at 30% 30%, rgba(56, 189, 248, 0.34), transparent 60%)',
  duration = 18,
  delay = 0,
}) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      aria-hidden="true"
      className={`absolute rounded-full blur-3xl ${className}`}
      style={{ top, left, width: size, height: size, background: gradient }}
      animate={shouldReduceMotion ? { opacity: [0.7, 0.8, 0.7] } : { x: [0, 18, 0], y: [0, -14, 0], scale: [1, 1.04, 1], opacity: [0.65, 0.9, 0.65] }}
      transition={{ duration, repeat: Infinity, ease: 'easeInOut', delay }}
    />
  )
}

export default GradientBlob
