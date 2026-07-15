import { useNavigate } from 'react-router-dom'

// This section invites the user to take the next step and start analyzing their face.
function CTASection() {
  const navigate = useNavigate()

  return (
    <section className="rounded-[2rem] border border-slate-200/70 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 p-8 text-white shadow-[0_20px_70px_-20px_rgba(15,23,42,0.45)] sm:p-10">
      <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-300">Ready to explore?</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Analyze Your Face</h2>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            Start the experience and generate your own AI-powered facial analysis report in just a few steps.
          </p>
        </div>

        <button
          type="button"
          onClick={() => navigate('/upload')}
          className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-500 via-cyan-400 to-fuchsia-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-sky-500/30"
        >
          Analyze Your Face
        </button>
      </div>
    </section>
  )
}

export default CTASection
