import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

function UserInfoForm({ name, setName, gender, setGender, nameError, onContinue }) {
  return (
    <div className="space-y-5">
      <div>
        <p className="text-lg font-semibold text-white">Before we begin, let’s personalize your experience.</p>
        <p className="mt-2 text-slate-300">A few quick details help us tailor the experience and make it feel more personal.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2 text-sm text-slate-200 sm:col-span-2">
          <span>Full Name</span>
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Alex Morgan"
            className="w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-white outline-none ring-0 transition focus:border-cyan-400"
          />
          {nameError ? <span className="text-sm text-rose-300">{nameError}</span> : null}
        </label>

        <label className="space-y-2 text-sm text-slate-200">
          <span>Gender</span>
          <select
            value={gender}
            onChange={(event) => setGender(event.target.value)}
            className="w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-white outline-none focus:border-cyan-400"
          >
            <option value="">Prefer not to say</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Prefer not to say">Prefer not to say</option>
          </select>
        </label>
        <div className="rounded-2xl border border-cyan-400/20 bg-cyan-500/10 p-4 text-sm text-cyan-100">
          <div className="flex items-center gap-2 font-medium">
            <Sparkles className="h-4 w-4" />
            Personalization ready
          </div>
          <p className="mt-2 text-cyan-50/80">We’ll use your name throughout the experience and keep it saved for your next visit.</p>
        </div>
      </div>

      <motion.button
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        onClick={onContinue}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-sky-500 px-4 py-2 text-sm font-semibold text-slate-950"
      >
        Continue
        <ArrowRight className="h-4 w-4" />
      </motion.button>
    </div>
  )
}

export default UserInfoForm
