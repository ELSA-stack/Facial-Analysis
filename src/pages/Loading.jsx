import { motion } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AIAnimation from '../components/loading/AIAnimation'
import FactsTicker from '../components/loading/FactsTicker'
import LoadingChecklist from '../components/loading/LoadingChecklist'
import ProgressPanel from '../components/loading/ProgressPanel'

const statuses = [
  'Preparing the analysis workspace',
  'Scanning facial geometry',
  'Cross-checking image details',
  'Finalizing your summary',
]

function Loading() {
  const navigate = useNavigate()
  const [progress, setProgress] = useState(0)
  const [statusIndex, setStatusIndex] = useState(0)
  const [secondsLeft, setSecondsLeft] = useState(6)

  const currentStatus = useMemo(() => statuses[statusIndex] ?? statuses[statuses.length - 1], [statusIndex])

  useEffect(() => {
    const progressTimer = window.setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          window.clearInterval(progressTimer)
          return 100
        }

        const next = prev + 2
        return next > 100 ? 100 : next
      })
    }, 220)

    const statusTimer = window.setInterval(() => {
      setStatusIndex((prev) => (prev + 1) % statuses.length)
    }, 1500)

    const countdownTimer = window.setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          window.clearInterval(countdownTimer)
          return 0
        }

        return prev - 1
      })
    }, 1000)

    const navigationTimer = window.setTimeout(() => {
      navigate('/result')
    }, 6200)

    return () => {
      window.clearInterval(progressTimer)
      window.clearInterval(statusTimer)
      window.clearInterval(countdownTimer)
      window.clearTimeout(navigationTimer)
    }
  }, [navigate])

  return (
    <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.16),_transparent_32%),linear-gradient(135deg,_#020617_0%,_#030712_45%,_#050816_100%)] px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(192,132,252,0.16),_transparent_35%)]" />
      <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl space-y-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
            <motion.span
              animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 1.4, repeat: Infinity }}
              className="h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_12px_#22d3ee]"
            />
            AI analysis in progress
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Analyzing Your Face</h1>
            <p className="max-w-xl text-lg text-slate-300 sm:text-xl">
              Our AI is processing your facial structure and preparing your report with the precision of a high-end diagnostic studio.
            </p>
          </div>

          <FactsTicker />
          <ProgressPanel progress={progress} status={currentStatus} />
          <LoadingChecklist />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex w-full max-w-xl flex-col items-center gap-5"
        >
          <AIAnimation />
          <div className="rounded-3xl border border-white/10 bg-slate-950/70 px-6 py-5 text-center backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Estimated time</p>
            <p className="mt-2 text-4xl font-semibold text-cyan-300">{secondsLeft}s</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Loading
