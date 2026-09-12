import AnimatedBackground from './ui/AnimatedBackground'
import RevealAnimation from './ui/RevealAnimation'
import { useUser } from '../context/UserContext'

function HeroSection() {
  const { user } = useUser()
  const name = user?.name?.trim()

  return (
    <div className="relative z-10 mb-8 max-w-3xl">
      <div className="rounded-[30px] border border-white/10 bg-[rgba(15,23,42,0.65)] p-10 shadow-[0_0_80px_rgba(56,189,248,0.15)] backdrop-blur-[20px]">
        <h1 className="text-5xl font-extrabold tracking-tight text-white drop-shadow-[0_2px_0_rgba(0,0,0,0.85)] [text-shadow:0_0_24px_rgba(56,189,248,0.55)]">
          {name ? `${name}, let’s capture your best angles` : `Let's capture your best angles`}
        </h1>
        <p className="mt-3 text-lg text-slate-300">
          Capture a front, left-profile, and right-profile image to prepare your facial analysis request and unlock a personalized AI report.
        </p>
      </div>
    </div>
  )
}

export default HeroSection
