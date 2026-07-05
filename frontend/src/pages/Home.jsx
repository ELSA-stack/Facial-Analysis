import { motion } from 'framer-motion'
import { BarChart3, CloudUpload, Rocket } from 'lucide-react'
import AnimatedButton from '../components/ui/AnimatedButton'
import HoverCard from '../components/ui/HoverCard'
import RevealAnimation from '../components/ui/RevealAnimation'

// Premium landing experience for the product, keeping the current structure while elevating the feel.
function Home() {
  const highlights = [
    {
      title: 'Fast upload flow',
      text: 'Start from a simple upload experience with clear guidance and a smooth first step.',
      icon: CloudUpload,
      accent: 'from-cyan-400 to-sky-500',
    },
    {
      title: 'Clean result view',
      text: 'Present analysis output in a modern card-based layout that is easy to understand.',
      icon: BarChart3,
      accent: 'from-violet-500 to-fuchsia-500',
    },
    {
      title: 'Built for growth',
      text: 'The structure is ready for future backend integration and richer AI features.',
      icon: Rocket,
      accent: 'from-emerald-400 to-cyan-500',
    },
  ]

  return (
    <div className="space-y-16 py-6 sm:py-10">
      <RevealAnimation>
        <section className="relative overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-[rgba(15,23,42,0.55)] px-6 py-10 text-white shadow-[0_30px_110px_-35px_rgba(34,211,238,0.35)] backdrop-blur-2xl sm:px-10 lg:px-14 lg:py-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.24),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(244,114,182,0.2),_transparent_24%)]" />
          <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:26px_26px]" />
          <div className="relative grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <motion.span
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex rounded-full border border-cyan-300/30 bg-cyan-400/10 px-3 py-1 text-sm font-medium text-cyan-100 shadow-[0_0_20px_rgba(34,211,238,0.14)] backdrop-blur"
              >
                AI-powered facial analysis
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
                  className="max-w-xl text-lg leading-8 text-slate-300"
                >
                  Upload three facial images and receive intelligent AI-powered insights using computer vision and facial landmark analysis.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="flex flex-col gap-3 sm:flex-row"
              >
                <AnimatedButton href="/upload">Start Analysis</AnimatedButton>
                <motion.a
                  href="/about"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="rounded-full border border-white/20 bg-white/10 px-5 py-3 text-center text-sm font-semibold text-slate-100 backdrop-blur transition hover:bg-white/15"
                >
                  Learn more
                </motion.a>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 28, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="rounded-[1.6rem] border border-cyan-400/20 bg-slate-900/70 p-5 shadow-[0_20px_80px_-25px_rgba(34,211,238,0.35)] backdrop-blur-xl"
            >
              <div className="rounded-[1.4rem] border border-white/10 bg-slate-950/70 p-6 shadow-inner">
                <div className="mb-4 flex items-center justify-between">
                  <p className="text-sm font-medium text-slate-300">Live analysis preview</p>
                  <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-sm font-medium text-emerald-300">
                    94% confident
                  </span>
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
                  <div className="rounded-xl border border-white/10 bg-white/10 p-4 sm:col-span-2">
                    <p className="text-sm text-slate-400">Suggested next step</p>
                    <p className="mt-1 text-xl font-semibold text-white">Upload a clearer image for better scoring</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </RevealAnimation>

      <RevealAnimation delay={0.15}>
        <section className="space-y-6">
          <div className="rounded-[1.8rem] border border-white/10 bg-[rgba(15,23,42,0.45)] p-8 text-center shadow-[0_20px_70px_-28px_rgba(2,6,23,0.7)] backdrop-blur-[18px] sm:p-10">
            <h2 className="text-3xl font-extrabold tracking-tight text-white drop-shadow-[0_0_18px_rgba(34,211,238,0.2)] sm:text-4xl">
              Why teams love this experience
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-lg text-slate-300">
              A simple, polished interface for showcasing AI-powered analysis in a product demo or startup presentation.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {highlights.map((feature, index) => {
              const Icon = feature.icon

              return (
                <HoverCard key={feature.title} className="group relative overflow-hidden p-6">
                  <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                    className="relative mb-5"
                  >
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${feature.accent} blur-2xl opacity-40`} />
                    <div className={`relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${feature.accent} text-white shadow-[0_0_20px_rgba(34,211,238,0.2)]`}>
                      <Icon className="h-5 w-5" />
                    </div>
                  </motion.div>
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  <p className="mt-2 text-slate-300">{feature.text}</p>
                </HoverCard>
              )
            })}
          </div>
        </section>
      </RevealAnimation>
    </div>
  )
}

export default Home
