import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../context/UserContext'

function Login() {
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
    navigate('/upload')
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-8">
      <form onSubmit={handleSubmit} className="w-full max-w-md rounded-[1.2rem] border border-white/10 bg-[rgba(15,23,42,0.75)] p-6 shadow-lg backdrop-blur-md">
        <h2 className="text-2xl font-semibold text-white">Sign in to Face Insight AI</h2>
        <p className="mt-2 text-sm text-slate-300">Enter your name and optional gender to personalize your experience.</p>

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
            </select>
          </label>

          <div className="mt-4 flex justify-end gap-3">
            <button type="submit" className="rounded-full bg-gradient-to-r from-cyan-400 to-sky-500 px-4 py-2 text-sm font-semibold text-slate-950">Continue</button>
          </div>
        </div>
      </form>
    </main>
  )
}

export default Login
