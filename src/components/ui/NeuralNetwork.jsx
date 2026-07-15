import { motion, useReducedMotion } from 'framer-motion'

// A bright, drifting neural network with glowing nodes and pulsing lines.
function NeuralNetwork() {
  const shouldReduceMotion = useReducedMotion()

  const lines = [
    { x1: '10%', y1: '20%', x2: '30%', y2: '35%' },
    { x1: '30%', y1: '35%', x2: '58%', y2: '24%' },
    { x1: '58%', y1: '24%', x2: '80%', y2: '42%' },
    { x1: '16%', y1: '68%', x2: '43%', y2: '56%' },
    { x1: '43%', y1: '56%', x2: '69%', y2: '74%' },
    { x1: '69%', y1: '74%', x2: '88%', y2: '64%' },
    { x1: '30%', y1: '35%', x2: '45%', y2: '55%' },
    { x1: '58%', y1: '24%', x2: '46%', y2: '58%' },
  ]

  const nodes = [
    { left: '10%', top: '20%' },
    { left: '30%', top: '35%' },
    { left: '58%', top: '24%' },
    { left: '80%', top: '42%' },
    { left: '16%', top: '68%' },
    { left: '43%', top: '56%' },
    { left: '69%', top: '74%' },
    { left: '88%', top: '64%' },
  ]

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden opacity-70"
      animate={shouldReduceMotion ? undefined : { x: [0, 18, 0], y: [0, -10, 0] }}
      transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
    >
      <svg viewBox="0 0 100 100" className="h-full w-full">
        {lines.map((line, index) => (
          <motion.line
            key={index}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke="rgba(34,211,238,0.55)"
            strokeWidth="0.35"
            animate={shouldReduceMotion ? undefined : { opacity: [0.28, 0.8, 0.28] }}
            transition={{ duration: 5 + index * 0.8, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </svg>

      {nodes.map((node, index) => (
        <motion.span
          key={index}
          className="absolute h-2 w-2 rounded-full bg-cyan-200/90 shadow-[0_0_12px_rgba(34,211,238,0.95)]"
          style={{ left: node.left, top: node.top }}
          animate={shouldReduceMotion ? undefined : { scale: [1, 1.7, 1], opacity: [0.35, 0.95, 0.35] }}
          transition={{ duration: 3.2 + index * 0.35, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </motion.div>
  )
}

export default NeuralNetwork
