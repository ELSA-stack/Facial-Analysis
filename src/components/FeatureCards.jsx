import { motion } from 'framer-motion'
import { Brain, Camera, ShieldCheck, Sparkles } from 'lucide-react'

const features = [
  {
    title: 'AI Face Analysis',
    text: 'Advanced landmark detection and facial intelligence.',
    icon: Brain,
    accent: 'from-cyan-400 to-sky-500',
  },
  {
    title: 'Personalized Report',
    text: 'Detailed insights with visual scoring.',
    icon: Sparkles,
    accent: 'from-violet-500 to-fuchsia-500',
  },
  {
    title: 'Privacy First',
    text: 'Your photos are securely processed and never shared.',
    icon: ShieldCheck,
    accent: 'from-emerald-400 to-cyan-500',
  },
  {
    title: 'Fun AI Reward',
    text: 'Unlock a personalized cat meme based on your final score.',
    icon: Camera,
    accent: 'from-amber-400 to-orange-500',
  },
]

function FeatureCards() {
  return (
    <section id="features" className="mt-8 space-y-6">
      <div className="rounded-[1.8rem] border border-white/10 bg-[rgba(15,23,42,0.45)] p-8 text-center shadow-[0_20px_70px_-28px_rgba(2,6,23,0.7)] backdrop-blur-[18px] sm:p-10">
        <h2 className="text-3xl font-extrabold tracking-tight text-white drop-shadow-[0_0_18px_rgba(34,211,238,0.2)] sm:text-4xl">
          Designed to feel effortless and memorable
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-lg text-slate-300">
          A premium onboarding experience that builds anticipation before the analysis begins.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {features.map((feature, index) => {
          const Icon = feature.icon

          return (
            <motion.article
              key={feature.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-900/65 p-6 shadow-[0_18px_50px_-24px_rgba(15,23,42,0.7)] backdrop-blur-xl"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.accent} opacity-0 transition duration-300 group-hover:opacity-10`} />
              <div className="relative mb-5">
                <div className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${feature.accent} text-white shadow-[0_0_20px_rgba(34,211,238,0.2)]`}>
                  <Icon className="h-5 w-5" />
                </div>
              </div>
              <h3 className="relative text-xl font-semibold text-white">{feature.title}</h3>
              <p className="relative mt-2 text-slate-300">{feature.text}</p>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}

export default FeatureCards
