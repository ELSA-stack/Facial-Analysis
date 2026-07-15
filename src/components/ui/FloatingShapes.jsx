import { motion, useReducedMotion } from 'framer-motion'

// Floating, glowing shapes that add dramatic depth to the base scene.
function FloatingShapes() {
  const shouldReduceMotion = useReducedMotion()
  const shapes = [
    { left: '10%', top: '16%', size: 90, rotate: 24, className: 'rounded-full border border-cyan-300/50' },
    { left: '82%', top: '18%', size: 72, rotate: -20, className: 'rounded-[1.4rem] border border-fuchsia-300/50' },
    { left: '78%', top: '70%', size: 84, rotate: 18, className: 'border border-cyan-300/40' },
    { left: '16%', top: '72%', size: 60, rotate: -12, className: 'rounded-full border border-white/50' },
    { left: '46%', top: '84%', size: 102, rotate: 32, className: 'rounded-full border border-cyan-300/30' },
  ]

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className={`absolute bg-white/10 backdrop-blur-2xl ${shape.className}`}
          style={{ left: shape.left, top: shape.top, width: shape.size, height: shape.size, rotate: shape.rotate }}
          animate={shouldReduceMotion ? undefined : { y: [0, -18 - index * 3, 0], x: [0, 12 - index * 2, 0], rotate: [shape.rotate, shape.rotate + 8, shape.rotate] }}
          transition={{ duration: 10 + index * 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  )
}

export default FloatingShapes
