import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useRef } from 'react'

// A soft radial light that follows the cursor and highlights nearby UI elements.
function MouseLight() {
  const containerRef = useRef(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const smoothX = useSpring(mouseX, { stiffness: 90, damping: 26, mass: 0.35 })
  const smoothY = useSpring(mouseY, { stiffness: 90, damping: 26, mass: 0.35 })

  useEffect(() => {
    const element = containerRef.current
    if (!element) return

    const handleMove = (event) => {
      const bounds = element.getBoundingClientRect()
      mouseX.set(event.clientX - bounds.left)
      mouseY.set(event.clientY - bounds.top)
    }

    element.addEventListener('mousemove', handleMove)
    return () => element.removeEventListener('mousemove', handleMove)
  }, [mouseX, mouseY])

  return (
    <motion.div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <motion.div
        className="absolute h-72 w-72 rounded-full blur-[110px]"
        style={{
          background: 'radial-gradient(circle, rgba(34, 211, 238, 0.18), transparent 70%)',
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
    </motion.div>
  )
}

export default MouseLight
