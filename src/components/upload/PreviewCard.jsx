import { motion } from 'framer-motion'
import { CheckCircle2, RotateCcw } from 'lucide-react'

// Shows a captured image preview with a success badge and a retake action.
function PreviewCard({ previewUrl, label, onRetake, successText }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="overflow-hidden rounded-[1.2rem] border border-emerald-200/80 bg-gradient-to-br from-emerald-50 via-white to-cyan-50 shadow-[0_16px_50px_-24px_rgba(16,185,129,0.35)]"
    >
      <div className="relative h-56 w-full overflow-hidden">
        <img src={previewUrl} alt={label} className="h-full w-full object-cover" />
        <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-slate-950/70 px-3 py-2 text-sm text-white backdrop-blur-sm">
          <div className="flex items-center gap-2 font-medium">
            <CheckCircle2 size={16} className="text-emerald-400" />
            <span>{successText}</span>
          </div>
          <button
            type="button"
            onClick={onRetake}
            className="flex items-center gap-1 rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-xs font-semibold text-white transition hover:bg-white/20"
          >
            <RotateCcw size={12} />
            Retake
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default PreviewCard
