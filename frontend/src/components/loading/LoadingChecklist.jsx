const steps = [
  'Mapping facial landmarks',
  'Comparing light and texture patterns',
  'Preparing a structured report',
]

function LoadingChecklist() {
  return (
    <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 backdrop-blur-xl">
      <div className="mb-4 flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-cyan-300">
        <span className="h-2 w-2 rounded-full bg-cyan-300" />
        Analysis pipeline
      </div>
      <ul className="space-y-3">
        {steps.map((step, index) => (
          <li key={step} className="flex items-center gap-3 text-sm text-slate-300">
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-cyan-400/40 bg-cyan-400/10 text-xs font-semibold text-cyan-300">
              {index + 1}
            </span>
            {step}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default LoadingChecklist
