import { motion } from 'framer-motion'
import { Camera, Sparkles } from 'lucide-react'

function LoadingScreen({ progress = 70, label = 'Preparing your report...' }) {
  return (
    <div className="rounded-[2rem] border border-cyan-400/20 bg-slate-950/70 p-6 shadow-[0_20px_80px_-24px_rgba(34,211,238,0.35)] backdrop-blur-xl sm:p-8">
      <div className="flex flex-col items-center text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
          className="flex h-20 w-20 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-500/10"
        >
          <Camera className="h-9 w-9 text-cyan-200" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mt-6"
        >
          <p className="text-sm font-medium uppercase tracking-[0.35em] text-cyan-200/80">Analyzing</p>
          <h3 className="mt-2 text-2xl font-semibold text-white">{label}</h3>
          <p className="mt-2 text-slate-300">Scanning facial geometry and preparing a personalized experience.</p>
        </motion.div>

        <div className="mt-6 w-full max-w-md">
          <div className="mb-3 flex items-center justify-between text-sm text-slate-300">
            <span>Progress</span>
            <span>{progress}%</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-slate-800">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.6 }}
              className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-sky-500"
            />
          </div>
        </div>

        <div className="mt-6 flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-100">
          <Sparkles className="h-4 w-4" />
          AI is working on your report
        </div>
      </div>
    </div>
  )
}

export default LoadingScreen
