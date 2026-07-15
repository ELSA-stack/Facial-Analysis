import { motion, useReducedMotion } from 'framer-motion'

// Four giant auroras that continuously drift and pulse across the scene.
function AuroraBackground() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute left-[-12%] top-[-16%] h-[40rem] w-[40rem] rounded-full blur-[180px]"
        style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.52), transparent 68%)', opacity: 0.56 }}
        animate={shouldReduceMotion ? undefined : { x: [0, 90, 0], y: [0, -70, 0], scale: [1, 1.12, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-[-10%] top-[4%] h-[42rem] w-[42rem] rounded-full blur-[190px]"
        style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.48), transparent 70%)', opacity: 0.54 }}
        animate={shouldReduceMotion ? undefined : { x: [0, -110, 0], y: [0, 45, 0], scale: [1, 1.16, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[-16%] left-[8%] h-[38rem] w-[38rem] rounded-full blur-[180px]"
        style={{ background: 'radial-gradient(circle, rgba(236,72,153,0.44), transparent 72%)', opacity: 0.5 }}
        animate={shouldReduceMotion ? undefined : { x: [0, 70, 0], y: [0, -32, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[6%] right-[8%] h-[34rem] w-[34rem] rounded-full blur-[170px]"
        style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.46), transparent 71%)', opacity: 0.56 }}
        animate={shouldReduceMotion ? undefined : { x: [0, -60, 0], y: [0, 50, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}

export default AuroraBackground
