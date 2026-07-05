import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import UploadButton from '../components/upload/UploadButton'
import UploadProgress from '../components/upload/UploadProgress'
import CameraCapture from '../components/upload/CameraCapture'
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
            <div className="rounded-[30px] border border-white/10 bg-[rgba(15,23,42,0.65)] p-10 shadow-[0_0_80px_rgba(56,189,248,0.15)] backdrop-blur-[20px]">
              <h1 className="text-5xl font-extrabold tracking-tight text-white drop-shadow-[0_2px_0_rgba(0,0,0,0.85)] [text-shadow:0_0_24px_rgba(56,189,248,0.55)]">
                Upload facial images
              </h1>
              <p className="mt-3 text-lg text-slate-300">
                Capture a front, left-profile and right-profile photo to prepare your facial analysis request.
              </p>
            </div>
          </div>
        </RevealAnimation>

        <RevealAnimation delay={0.08}>
          <div className="relative z-10">
            <UploadProgress uploadedCount={uploadedCount} />
          </div>
        </RevealAnimation>

        <div className="relative z-10 mt-6 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {[
            {
              key: 'front',
              title: 'Front Face',
              description: 'Capture a clear front-facing photo.',
              instruction: 'Look straight into the camera.',
              helperText: 'Keep your face inside the guide. Good lighting improves accuracy.',
              successText: '✓ Front Face Captured',
            },
            {
              key: 'left',
              title: 'Left Profile',
              description: 'Turn your face slightly left for a clean side profile.',
              instruction: 'Turn your face slightly left.',
              helperText: 'Look directly at the camera and keep your profile inside the guide.',
              successText: '✓ Left Profile Captured',
            },
            {
              key: 'right',
              title: 'Right Profile',
              description: 'Turn your face slightly right for the final angle.',
              instruction: 'Turn your face slightly right.',
              helperText: 'Remove glasses if possible and keep the lighting soft and even.',
              successText: '✓ Right Profile Captured',
            },
          ].map((item, index) => (
            <RevealAnimation key={item.key} delay={0.1 + index * 0.07}>
              <CameraCapture
                title={item.title}
                description={item.description}
                instruction={item.instruction}
                helperText={item.helperText}
                successText={item.successText}
                capturedImage={images[item.key]}
                onCapture={(file) => handleImageChange(item.key, file)}
                onRetake={() => handleImageChange(item.key, null)}
                isActive={Boolean(images[item.key])}
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
                {allSelected ? 'All three images are captured and ready.' : 'Capture all three images to enable analysis.'}
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