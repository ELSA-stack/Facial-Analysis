import { motion } from 'framer-motion'

function getCatMeme(score, name) {
  if (score >= 95) {
    return {
      title: 'Legendary Happy Cat 😺',
      message: `${name || 'You'}, AI thinks you're absolutely legendary today!`,
      accent: 'from-cyan-400 to-sky-500',
    }
  }

  if (score >= 85) {
    return {
      title: 'Cool Sunglasses Cat 😎',
      message: `${name || 'You'}, your confidence level is cooler than this cat.`,
      accent: 'from-violet-500 to-fuchsia-500',
    }
  }

  if (score >= 70) {
    return {
      title: 'Proud Cat 😼',
      message: 'Looking great! AI is impressed.',
      accent: 'from-emerald-400 to-cyan-500',
    }
  }

  if (score >= 50) {
    return {
      title: 'Thinking Cat 🤔',
      message: 'Not bad! Better lighting could improve your score.',
      accent: 'from-amber-400 to-orange-500',
    }
  }

  return {
    title: 'Motivational Cute Cat 🥹',
    message: `Don't worry ${name || 'friend'}, every masterpiece deserves another try.`,
    accent: 'from-rose-400 to-pink-500',
  }
}

function CatMemeCard({ score, name }) {
  const meme = getCatMeme(score, name)

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      className={`rounded-[1.5rem] border border-white/10 bg-gradient-to-br ${meme.accent} p-[1px] shadow-[0_18px_50px_-24px_rgba(15,23,42,0.7)]`}
    >
      <div className="rounded-[1.45rem] bg-slate-950/90 p-5 text-white">
        <div className="text-4xl">😺</div>
        <h3 className="mt-3 text-xl font-semibold">{meme.title}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-300">{meme.message}</p>
      </div>
    </motion.div>
  )
}

export default CatMemeCard
