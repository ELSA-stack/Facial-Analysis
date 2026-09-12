import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

function CameraInstructions({ agreed, setAgreed, onContinue }) {
  return (
    <div className="space-y-5">
      <div>
        <p className="text-xl font-semibold text-white">Camera guidelines</p>
        <p className="mt-2 text-slate-300">A few friendly reminders will help your experience feel polished and accurate.</p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {[
          ['💡', 'Good lighting'],
          ['😀', 'Neutral expression'],
          ['🚫', 'Remove sunglasses'],
          ['👓', 'Keep your whole face visible'],
        ].map(([emoji, label]) => (
          <div key={label} className="rounded-2xl border border-white/10 bg-slate-900/70 p-4 text-sm text-slate-200">
            <span className="mr-2 text-lg">{emoji}</span>
            {label}
          </div>
        ))}
      </div>

      <label className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 text-sm text-slate-200">
        <input type="checkbox" checked={agreed} onChange={() => setAgreed((value) => !value)} className="mt-1 h-4 w-4 rounded border-white/20 bg-slate-900" />
        <span>I understand and agree to allow camera access for face analysis.</span>
      </label>

      <motion.button
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        onClick={onContinue}
        disabled={!agreed}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-sky-500 px-4 py-2 text-sm font-semibold text-slate-950 transition disabled:cursor-not-allowed disabled:opacity-50"
      >
        Continue
        <ArrowRight className="h-4 w-4" />
      </motion.button>
    </div>
  )
}

export default CameraInstructions
