import { motion } from 'framer-motion'

// A reusable card wrapper that responds gently to cursor movement and hover.
function HoverCard({ children, className = '', hoverClassName = '' }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.03, boxShadow: '0 24px 80px -24px rgba(34, 211, 238, 0.35)' }}
      transition={{ type: 'spring', stiffness: 220, damping: 18 }}
      className={`rounded-[1.6rem] border border-white/10 bg-[rgba(15,23,42,0.55)] shadow-[0_16px_60px_-24px_rgba(2,6,23,0.7)] backdrop-blur-xl transition-colors duration-300 hover:border-cyan-400/40 hover:bg-[rgba(15,23,42,0.7)] ${className} ${hoverClassName}`}
    >
      {children}
    </motion.div>
  )
}

export default HoverCard
