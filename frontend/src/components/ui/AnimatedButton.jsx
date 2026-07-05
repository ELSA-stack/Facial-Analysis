import { motion } from 'framer-motion'

// A premium button with subtle motion and hover glow.
function AnimatedButton({ children, onClick, className = '', href, ...props }) {
  const sharedClasses = `inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-500 via-cyan-400 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_40px_-12px_rgba(56,189,248,0.45)] transition-all duration-300 hover:shadow-[0_16px_50px_-10px_rgba(168,85,247,0.35)] ${className}`

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.03, y: -2 }}
        whileTap={{ scale: 0.97 }}
        className={sharedClasses}
        {...props}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      type="button"
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={sharedClasses}
      {...props}
    >
      {children}
    </motion.button>
  )
}

export default AnimatedButton
