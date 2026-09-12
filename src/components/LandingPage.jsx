import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Brain, Camera, ShieldCheck, Sparkles } from 'lucide-react'
import { useState } from 'react'
import { useUser } from '../context/UserContext'
import FeatureCards from './FeatureCards'
import { useNavigate } from 'react-router-dom'

function LandingPage() {
  const { user } = useUser()
  const [isModalOpen] = useState(false)
  const navigate = useNavigate()

  return (
    <div className="relative pb-8 sm:pb-10">
      <section className="relative overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-slate-950/55 px-6 py-10 text-white shadow-[0_30px_110px_-35px_rgba(34,211,238,0.35)] backdrop-blur-2xl sm:px-10 lg:px-14 lg:py-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.24),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(244,114,182,0.2),_transparent_24%)]" />
        <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:26px_26px]" />
        <motion.div
          animate={{ y: [0, -8, 0], opacity: [0.35, 0.6, 0.35] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute left-10 top-10 h-28 w-28 rounded-full bg-cyan-400/20 blur-[90px]"
        />
        <motion.div
          animate={{ y: [0, 12, 0], opacity: [0.25, 0.45, 0.25] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-6 right-10 h-36 w-36 rounded-full bg-fuchsia-500/20 blur-[100px]"
        />

        <div className="relative grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-400/10 px-3 py-1 text-sm font-medium text-cyan-100 shadow-[0_0_20px_rgba(34,211,238,0.14)] backdrop-blur"
            >
              <Sparkles className="h-4 w-4" />
              Premium AI onboarding experience
            </motion.span>

            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="bg-gradient-to-r from-white via-cyan-100 to-sky-300 bg-clip-text text-4xl font-extrabold leading-tight tracking-tight text-transparent drop-shadow-[0_0_22px_rgba(34,211,238,0.18)] sm:text-5xl lg:text-6xl"
              >
                Face Insight AI
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-2xl font-semibold text-slate-100 sm:text-3xl"
              >
                Discover what AI sees in your face.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25 }}
                className="max-w-xl text-lg leading-8 text-slate-300"
              >
                Our intelligent facial analysis system examines facial features using advanced computer vision and AI to generate detailed insights, confidence scores, and a personalized experience.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col gap-3 sm:flex-row"
            >
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate('/login')}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-sky-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_30px_rgba(34,211,238,0.25)] transition"
              >
                Start Analysis
                <ArrowRight className="h-4 w-4" />
              </motion.button>
              <motion.a
                href="#features"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="rounded-full border border-white/20 bg-white/10 px-5 py-3 text-center text-sm font-semibold text-slate-100 backdrop-blur transition hover:bg-white/15"
              >
                Learn More
              </motion.a>
            </motion.div>

            <div className="flex flex-wrap items-center gap-3 text-sm text-slate-300">
              <span className="rounded-full border border-cyan-400/20 bg-white/10 px-3 py-1">
                {user?.name ? `Welcome back, ${user.name}` : 'New experience ready'}
              </span>
              <span className="rounded-full border border-white/10 bg-slate-900/60 px-3 py-1">
                30–60 seconds to uncover your report
              </span>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-[1.6rem] border border-cyan-400/20 bg-slate-900/70 p-5 shadow-[0_20px_80px_-25px_rgba(34,211,238,0.35)] backdrop-blur-xl"
          >
            <div className="rounded-[1.4rem] border border-white/10 bg-slate-950/70 p-6 shadow-inner">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-sm font-medium text-slate-300">Live AI preview</p>
                <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-sm font-medium text-emerald-300">
                  94% confident
                </span>
              </div>
              <div className="space-y-3">
                <div className="rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 to-slate-900/70 p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-cyan-100">
                      <Brain className="h-4 w-4" />
                      Facial intelligence
                    </div>
                    <span className="text-sm font-semibold text-white">Excellent</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-800">
                    <div className="h-2 w-[92%] rounded-full bg-gradient-to-r from-cyan-400 to-sky-500" />
                  </div>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl border border-white/10 bg-white/10 p-4">
                    <p className="text-sm text-slate-400">Face shape</p>
                    <p className="mt-1 text-xl font-semibold text-white">Oval</p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/10 p-4">
                    <p className="text-sm text-slate-400">Mood</p>
                    <p className="mt-1 text-xl font-semibold text-white">Calm</p>
                  </div>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/10 p-4">
                  <div className="flex items-center gap-2 text-slate-200">
                    <Camera className="h-4 w-4 text-cyan-300" />
                    Ready for three-angle capture
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <FeatureCards />
    </div>
  )
}

export default LandingPage
