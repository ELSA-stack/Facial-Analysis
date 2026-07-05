import { motion, useReducedMotion } from 'framer-motion'
import AuroraBackground from './AuroraBackground'
import FaceMesh from './FaceMesh'
import FloatingShapes from './FloatingShapes'
import MouseGlow from './MouseGlow'
import NeuralNetwork from './NeuralNetwork'
import Particles from './Particles'

function AnimatedScene() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <MouseGlow />
      <AuroraBackground />
      <motion.div
        className="absolute inset-0"
        animate={shouldReduceMotion ? undefined : { scale: [1, 1.015, 1], opacity: [0.9, 1, 0.9] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.16),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(168,85,247,0.14),transparent_32%),radial-gradient(circle_at_50%_100%,rgba(236,72,153,0.12),transparent_38%)]" />
      </motion.div>
      <NeuralNetwork />
      <FaceMesh />
      <FloatingShapes />
      <Particles count={220} />
    </div>
  )
}

export default AnimatedScene
