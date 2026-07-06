// This section explains the core workflow in an elegant three-step timeline.
const steps = [
  {
    icon: '📤',
    title: 'Upload Images',
    description: 'Upload clear front, left-profile, and right-profile facial images to start the analysis.',
  },
  {
    icon: '🧠',
    title: 'AI Analysis',
    description:
      'Our AI detects facial landmarks, measures facial proportions, identifies face shape, and evaluates facial symmetry.',
  },
  {
    icon: '📊',
    title: 'Analysis Report',
    description:
      'View an easy-to-understand report containing facial measurements, strengths, and AI-generated insights.',
  },
]

function HowItWorks() {
  return (
    <section className="rounded-[2rem] border border-slate-200/70 bg-white/80 p-8 shadow-[0_20px_70px_-20px_rgba(15,23,42,0.2)] backdrop-blur-xl sm:p-10">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">How It Works</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">A simple three-step experience</h2>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {steps.map((step, index) => (
          <article
            key={step.title}
            className="group rounded-[1.5rem] border border-slate-200/70 bg-gradient-to-br from-white to-slate-50 p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(15,23,42,0.25)]"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-2xl text-white">
              {step.icon}
            </div>
            <div className="mt-5 flex items-center gap-3">
              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">Step {index + 1}</span>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-slate-900">{step.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default HowItWorks
