import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import UploadCard from '../components/upload/UploadCard'
import UploadButton from '../components/upload/UploadButton'
import UploadProgress from '../components/upload/UploadProgress'
import AnimatedBackground from '../components/ui/AnimatedBackground'
import MouseGlow from '../components/ui/MouseGlow'
import RevealAnimation from '../components/ui/RevealAnimation'

function Upload() {
  const navigate = useNavigate()

  const [images, setImages] = useState({
    front: null,
    left: null,
    right: null,
  })
  const [hovered, setHovered] = useState(false)
  const glowX = useMotionValue(0)
  const glowY = useMotionValue(0)
  const smoothGlowX = useSpring(glowX, { stiffness: 80, damping: 24, mass: 0.4 })
  const smoothGlowY = useSpring(glowY, { stiffness: 80, damping: 24, mass: 0.4 })

  const handleImageChange = (key, file) => {
    if (!file) return

    setImages((prev) => ({
      ...prev,
      [key]: file,
    }))
  }

  const uploadedCount = Object.values(images).filter(Boolean).length
  const allSelected = uploadedCount === 3

  const handleAnalyze = () => {
    if (!allSelected) return
    navigate('/loading')
  }

  useEffect(() => {
    if (!hovered) {
      glowX.set(0)
      glowY.set(0)
    }
  }, [glowX, glowY, hovered])

  return (
    <div className="relative py-6 sm:py-8">
      <MouseGlow />
      <motion.div
        onMouseMove={(event) => {
          setHovered(true)
          const bounds = event.currentTarget.getBoundingClientRect()
          glowX.set((event.clientX - bounds.left - bounds.width / 2) / 12)
          glowY.set((event.clientY - bounds.top - bounds.height / 2) / 12)
        }}
        onMouseLeave={() => setHovered(false)}
        className="relative"
      >
      <AnimatedBackground className="rounded-[2rem] border border-cyan-400/20 bg-slate-950/60 p-4 shadow-[0_20px_80px_-24px_rgba(34,211,238,0.25)] backdrop-blur-md sm:p-6 lg:p-8">
        <RevealAnimation>
          <div className="relative z-10 mb-8 max-w-3xl">
            <h1 className="text-3xl font-semibold tracking-tight text-slate-800">Upload facial images</h1>
            <p className="mt-2 text-slate-600">
              Add a front, left-profile and right-profile image to prepare your facial analysis request.
            </p>
          </div>
        </RevealAnimation>

        <RevealAnimation delay={0.08}>
          <div className="relative z-10">
            <UploadProgress uploadedCount={uploadedCount} />
          </div>
        </RevealAnimation>

        <div className="relative z-10 mt-6 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {[
            { key: 'front', title: 'Front Face', description: 'Upload a clear front-facing photo.' },
            { key: 'left', title: 'Left Profile', description: 'Upload a clear left-side profile photo.' },
            { key: 'right', title: 'Right Profile', description: 'Upload a clear right-side profile photo.' },
          ].map((item, index) => (
            <RevealAnimation key={item.key} delay={0.1 + index * 0.07}>
              <UploadCard
                title={item.title}
                description={item.description}
                image={images[item.key]}
                onImageChange={(file) => handleImageChange(item.key, file)}
              />
            </RevealAnimation>
          ))}
        </div>

        <RevealAnimation delay={0.22}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative z-10 mt-8 flex flex-col gap-3 rounded-[1.7rem] border border-slate-200/70 bg-white/80 p-5 shadow-[0_16px_50px_-24px_rgba(15,23,42,0.2)] backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <p className="font-medium text-slate-800">Ready to analyze?</p>
              <p className="text-sm text-slate-600">
                {allSelected ? 'All three images are selected and ready.' : 'Please upload all three images to enable analysis.'}
              </p>
            </div>

            <UploadButton label="Analyze Face" disabled={!allSelected} onClick={handleAnalyze} />
          </motion.div>
        </RevealAnimation>
      </AnimatedBackground>
      </motion.div>
    </div>
  )
}

export default Upload