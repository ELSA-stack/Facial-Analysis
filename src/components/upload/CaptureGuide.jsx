import { Camera, Sparkles } from 'lucide-react'

// Small instructional card shown before the user begins a capture session.
function CaptureGuide({ title, description, instruction }) {
  return (
    <div className="flex flex-col gap-3 rounded-[1.2rem] border border-cyan-200/70 bg-slate-950/80 p-4 text-white shadow-[0_20px_60px_-24px_rgba(6,182,212,0.25)]">
      <div className="flex items-center gap-2 text-sm font-semibold text-cyan-200">
        <Camera size={16} />
        <span>Ready for {title.toLowerCase()}</span>
      </div>

      <div>
        <p className="font-semibold text-white">{description}</p>
        <p className="mt-2 text-sm text-slate-300">{instruction}</p>
      </div>

      <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-2 text-xs text-slate-200">
        <Sparkles size={14} className="text-cyan-300" />
        Keep your face inside the guide for the best results.
      </div>
    </div>
  )
}

export default CaptureGuide
