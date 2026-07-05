import { motion } from 'framer-motion'

// Button used for the final analysis action with a premium AI-inspired motion style.
function UploadButton({ disabled = false, label = 'Analyze Face', onClick }) {
  return (
    <motion.button
      type="button"
      disabled={disabled}
      onClick={onClick}
      whileHover={!disabled ? { scale: 1.03, y: -1 } : undefined}
      whileTap={!disabled ? { scale: 0.97 } : undefined}
      className={`rounded-full px-6 py-3 text-sm font-semibold shadow-lg transition ${
        disabled
          ? 'cursor-not-allowed bg-slate-300 text-slate-500 shadow-none'
          : 'bg-gradient-to-r from-sky-500 via-cyan-400 to-fuchsia-500 text-white shadow-sky-500/20 hover:shadow-xl hover:shadow-sky-500/30'
      }`}
    >
      {label}
    </motion.button>
  )
}

export default UploadButton
