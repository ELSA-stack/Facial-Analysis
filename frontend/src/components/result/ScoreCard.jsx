import { motion } from 'framer-motion'

// This card shows a single headline metric in a polished, reusable format.
function ScoreCard({ title, value, description, accent = 'from-sky-500 to-cyan-400' }) {
  const hasValue = value !== null && value !== undefined && value !== ''

  return (
    <motion.article
      whileHover={{ y: -5, scale: 1.01, boxShadow: '0 24px 70px -24px rgba(15,23,42,0.28)' }}
      transition={{ type: 'spring', stiffness: 220, damping: 18 }}
      className="group rounded-[1.75rem] border border-slate-200/70 bg-white/80 p-6 shadow-[0_16px_45px_-20px_rgba(15,23,42,0.25)] backdrop-blur-xl"
    >
      <div className={`inline-flex rounded-2xl bg-gradient-to-br ${accent} p-[1px]`}>
        <div className="rounded-[15px] bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
          {title}
        </div>
      </div>

      <div className="mt-5">
        {hasValue ? (
          <p className="text-4xl font-semibold tracking-tight text-slate-900">{value}</p>
        ) : (
          <div className="space-y-2">
            <div className="h-10 w-20 animate-pulse rounded-full bg-slate-200" />
            <div className="h-3 w-32 animate-pulse rounded-full bg-slate-100" />
          </div>
        )}
      </div>

      <p className="mt-4 text-sm leading-6 text-slate-600">
        {hasValue ? description : 'Waiting for analysis... Data will appear after processing.'}
      </p>
    </motion.article>
  )
}

export default ScoreCard
