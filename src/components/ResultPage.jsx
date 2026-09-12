import { motion } from 'framer-motion'
import { ArrowRight, Download, Share2 } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../context/UserContext'
import CatMemeCard from './CatMemeCard'

function ResultPage({ data }) {
  const navigate = useNavigate()
  const { user } = useUser()
  const name = user?.name || 'friend'
  const score = Number(data?.overall_score || 94)

  return (
    <main className="min-h-screen px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6">
        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          className="overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-slate-950/70 p-8 shadow-[0_28px_100px_-35px_rgba(34,211,238,0.4)] backdrop-blur-2xl sm:p-10"
        >
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-5">
              <div className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-100">
                Premium report recap
              </div>
              <div>
                <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                  🎉 Congratulations, {name}!
                </h1>
                <p className="mt-3 text-2xl font-semibold text-slate-100">Your AI Face Report is Ready.</p>
                <p className="mt-3 max-w-2xl text-lg leading-8 text-slate-300">
                  Your analysis has been transformed into a polished, personalized experience with clear metrics and a memorable reward.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  ['Overall Face Score', `${score} / 100`],
                  ['Confidence', '96%'],
                  ['Quality', 'Excellent'],
                  ['Facial Symmetry', 'Excellent'],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-[1.3rem] border border-white/10 bg-white/10 p-4">
                    <p className="text-sm text-slate-400">{label}</p>
                    <p className="mt-1 text-xl font-semibold text-white">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <CatMemeCard score={score} name={name} />
              <div className="rounded-[1.3rem] border border-white/10 bg-white/10 p-5 text-sm text-slate-300">
                <p className="font-semibold text-white">Expression</p>
                <p className="mt-2">Confident</p>
              </div>
            </div>
          </div>
        </motion.section>

        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            onClick={() => navigate('/upload')}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-5 py-3 text-sm font-semibold text-cyan-100"
          >
            Try Again
            <ArrowRight className="h-4 w-4" />
          </button>
          <button className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/10 px-5 py-3 text-sm font-semibold text-slate-100">
            <Download className="h-4 w-4" />
            Download Report
          </button>
          <button className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/10 px-5 py-3 text-sm font-semibold text-slate-100">
            <Share2 className="h-4 w-4" />
            Share Result
          </button>
        </div>
      </div>
    </main>
  )
}

export default ResultPage
