function ProgressPanel({ progress, status }) {
  return (
    <div className="w-full rounded-3xl border border-white/10 bg-slate-900/70 p-6 backdrop-blur-xl">
      <div className="mb-3 flex items-center justify-between text-sm text-slate-300">
        <span>{status}</span>
        <span className="font-semibold text-cyan-300">{progress}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-slate-800">
        <div
          className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
}

export default ProgressPanel
