import { motion } from 'framer-motion'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../context/UserContext'

function UserInformationModal({ onClose }) {
  const navigate = useNavigate()
  const { user, updateUserInfo } = useUser()
  const [name, setName] = useState(user?.name || '')
  const [gender, setGender] = useState(user?.gender || '')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name.trim()) {
      setError('Full name is required')
      return
    }
    updateUserInfo({ name: name.trim(), gender: gender || '' })
    onClose && onClose()
    navigate('/upload')
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 px-4 py-6 backdrop-blur-sm">
      <motion.form initial={{ y: 20 }} animate={{ y: 0 }} onSubmit={handleSubmit} className="w-full max-w-md rounded-[1.2rem] border border-white/10 bg-[rgba(255,255,255,0.04)] p-6 shadow-lg backdrop-blur-md">
        <h3 className="text-xl font-semibold text-white">Tell us about you</h3>
        <p className="mt-2 text-sm text-slate-300">Provide your full name (required) and optional gender for personalization only.</p>

        <div className="mt-4 grid gap-3">
          <label className="text-sm text-slate-200">
            Full Name
            <input value={name} onChange={(e) => setName(e.target.value)} className="mt-2 w-full rounded-lg border border-white/10 bg-transparent px-3 py-2 text-white outline-none" placeholder="Your full name" />
          </label>
          {error && <div className="text-sm text-rose-300">{error}</div>}

          <label className="text-sm text-slate-200">
            Gender (optional)
            <select value={gender} onChange={(e) => setGender(e.target.value)} className="mt-2 w-full rounded-lg border border-white/10 bg-transparent px-3 py-2 text-white outline-none">
              <option value="">Prefer not to say</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Non-binary">Non-binary</option>
              <option value="Prefer not to say">Prefer not to say</option>
            </select>
          </label>

          <div className="mt-4 flex justify-end gap-3">
            <button type="button" onClick={onClose} className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-200">Cancel</button>
            <button type="submit" className="rounded-full bg-gradient-to-r from-cyan-400 to-sky-500 px-4 py-2 text-sm font-semibold text-slate-950">Continue</button>
          </div>
        </div>
      </motion.form>
    </motion.div>
  )
}

export default UserInformationModal
