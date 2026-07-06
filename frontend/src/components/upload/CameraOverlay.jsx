import { motion } from 'framer-motion'

// Decorative overlay used on top of the live camera stream to guide the face position.
function CameraOverlay({ instruction, helperText }) {
  return (
    <div className="pointer-events-none absolute inset-0 flex flex-col justify-between rounded-[1.2rem] bg-slate-950/20 p-4">
      <div className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white/90 backdrop-blur-sm">
        {instruction}
      </div>

      <div className="flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0.7, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.25 }}
          className="relative h-44 w-32 rounded-[45%] border-[2px] border-cyan-300/80 shadow-[0_0_0_9999px_rgba(2,6,23,0.4)] sm:h-56 sm:w-40"
        />
      </div>

      <div className="rounded-2xl border border-white/10 bg-slate-950/55 px-3 py-2 text-center text-[11px] font-medium text-slate-100 backdrop-blur-md sm:text-sm">
        {helperText}
      </div>
    </div>
  )
}

export default CameraOverlay
