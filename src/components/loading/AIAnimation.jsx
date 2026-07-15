import { useEffect, useState } from 'react'

// Futuristic scanner animation for the loading experience.
function AIAnimation() {
  const [phase, setPhase] = useState(0)

  useEffect(() => {
    const id = window.setInterval(() => {
      setPhase((prev) => (prev + 1) % 4)
    }, 900)

    return () => window.clearInterval(id)
  }, [])

  return (
    <div className="relative mx-auto flex h-72 w-72 items-center justify-center rounded-full border border-cyan-400/30 bg-slate-950/70 shadow-[0_0_80px_rgba(34,211,238,0.25)]">
      <div className="absolute inset-5 rounded-full border border-cyan-400/20" />
      <div className="absolute inset-10 rounded-full border border-fuchsia-500/20" />
      <div className="absolute inset-0 rounded-full border border-white/10" />

      <div
        className="absolute h-44 w-44 rounded-full border-2 border-cyan-400/60"
        style={{ transform: `rotate(${phase * 45}deg)` }}
      />
      <div className="absolute h-56 w-56 rounded-full border border-fuchsia-400/30" />

      <div className="absolute inset-0 rounded-full" style={{ animation: 'spin 6s linear infinite' }} />
      <div
        className="absolute h-40 w-40 rounded-full bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-fuchsia-500/20 blur-2xl"
        style={{ transform: `scale(${1 + phase * 0.04})` }}
      />

      <div className="absolute h-24 w-24 rounded-full border border-white/20 bg-white/10 backdrop-blur-xl" />
      <div className="absolute h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_20px_#22d3ee]" />

      <div className="absolute left-1/2 top-4 h-16 w-1 -translate-x-1/2 rounded-full bg-gradient-to-b from-cyan-300 via-cyan-500 to-transparent opacity-80" />
      <div className="absolute bottom-8 left-8 h-8 w-8 rounded-full border border-fuchsia-400/40" />
      <div className="absolute right-10 top-12 h-6 w-6 rounded-full border border-cyan-400/40" />
      <div className="absolute bottom-12 right-10 h-7 w-7 rounded-full border border-white/20" />
    </div>
  )
}

export default AIAnimation
