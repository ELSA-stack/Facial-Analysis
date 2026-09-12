import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import UserInformationModal from './UserInformationModal'

function WelcomeScreen({ onClose }) {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <section className="relative overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-slate-950/55 px-6 py-10 text-white shadow-[0_30px_110px_-35px_rgba(34,211,238,0.35)] backdrop-blur-2xl sm:px-10 lg:px-14 lg:py-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50/10 px-3 py-1 text-sm font-medium text-sky-200">
            AI-powered facial insights
          </div>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Welcome to Face Insight AI
          </h1>

          <p className="mt-4 text-lg text-slate-300">
            Discover AI-powered facial insights with a personalized experience.
          </p>

          <p className="mt-4 max-w-xl text-base leading-7 text-slate-400">
            Our AI analyzes facial features using advanced computer vision to generate intelligent insights and a personalized report.
          </p>

          <div className="mt-6">
            <button
              onClick={() => setOpen(true)}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-sky-500 px-5 py-3 text-sm font-semibold text-slate-950"
            >
              Get Started
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {open && <UserInformationModal onClose={() => { setOpen(false); onClose && onClose() }} />}
    </div>
  )
}

export default WelcomeScreen
