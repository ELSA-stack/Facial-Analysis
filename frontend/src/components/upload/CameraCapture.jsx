import { AnimatePresence, motion } from 'framer-motion'
import { Camera, Upload } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

import CameraOverlay from './CameraOverlay'
import CaptureGuide from './CaptureGuide'
import PreviewCard from './PreviewCard'

// Reusable camera capture experience with a file-picker fallback.
function CameraCapture({
  title,
  description,
  instruction,
  helperText,
  successText,
  capturedImage,
  onCapture,
  onRetake,
  isActive = false,
}) {
  const videoRef = useRef(null)
  const fileInputRef = useRef(null)
  const [isCameraOpen, setIsCameraOpen] = useState(false)
  const [error, setError] = useState('')
  const [isCapturing, setIsCapturing] = useState(false)

  useEffect(() => {
    if (!isCameraOpen) return undefined

    let stream
    let cancelled = false

    const startCamera = async () => {
      if (!navigator.mediaDevices?.getUserMedia) {
        setError('Camera access is not supported in this browser. You can still choose a photo from your files.')
        return
      }

      try {
        stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: 'user' },
          audio: false,
        })

        if (cancelled) {
          stream.getTracks().forEach((track) => track.stop())
          return
        }

        if (videoRef.current) {
          videoRef.current.srcObject = stream
        }
      } catch {
        setError('Camera permission was denied or is unavailable. You can still choose a photo from your files.')
      }
    }

    startCamera()

    return () => {
      cancelled = true
      if (stream) {
        stream.getTracks().forEach((track) => track.stop())
      }
    }
  }, [isCameraOpen])

  const handleCapture = () => {
    if (!videoRef.current || isCapturing) return

    setIsCapturing(true)

    const video = videoRef.current
    const canvas = document.createElement('canvas')
    canvas.width = video.videoWidth || 1280
    canvas.height = video.videoHeight || 720

    const context = canvas.getContext('2d')
    if (!context) {
      setError('The camera frame could not be prepared. Please try again.')
      setIsCapturing(false)
      return
    }

    context.drawImage(video, 0, 0, canvas.width, canvas.height)

    canvas.toBlob(
      (blob) => {
        if (!blob) {
          setError('The captured frame was not created. Please try again.')
          setIsCapturing(false)
          return
        }

        const file = new File([blob], `${title.toLowerCase().replace(/\s+/g, '-')}-${Date.now()}.jpg`, {
          type: 'image/jpeg',
        })

        onCapture(file)
        setIsCameraOpen(false)
        setError('')
        setIsCapturing(false)
      },
      'image/jpeg',
      0.92,
    )
  }

  const handleFilePicker = (event) => {
    const file = event.target.files?.[0]
    if (file) {
      onCapture(file)
      setError('')
    }
  }

  return (
    <div className={`rounded-[1.2rem] border p-3 transition-all ${isActive ? 'border-cyan-400/70 bg-cyan-50/80 shadow-[0_18px_45px_-24px_rgba(34,211,238,0.45)]' : 'border-slate-200/80 bg-white/80'}`}>
      <div className="mb-3 flex items-center justify-between gap-2">
        <div>
          <p className="text-sm font-semibold text-slate-800">{title}</p>
          <p className="text-xs text-slate-500">{description}</p>
        </div>
        <div className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${isActive ? 'bg-cyan-500 text-white' : 'bg-slate-100 text-slate-600'}`}>
          {isActive ? 'Live' : 'Ready'}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {capturedImage ? (
          <motion.div key="preview" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <PreviewCard previewUrl={URL.createObjectURL(capturedImage)} label={title} onRetake={onRetake} successText={successText} />
          </motion.div>
        ) : isCameraOpen ? (
          <motion.div key="camera" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="relative overflow-hidden rounded-[1.2rem]">
            <video ref={videoRef} autoPlay playsInline muted className="h-56 w-full object-cover" />
            <CameraOverlay instruction={title} helperText={helperText} />

            <div className="absolute inset-x-3 bottom-3 flex flex-wrap items-center justify-between gap-2 rounded-full border border-white/20 bg-slate-950/65 px-3 py-2 backdrop-blur-md">
              <button
                type="button"
                onClick={handleCapture}
                disabled={isCapturing}
                className="rounded-full bg-gradient-to-r from-sky-500 via-cyan-400 to-fuchsia-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:shadow-xl hover:shadow-cyan-500/30 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isCapturing ? 'Capturing…' : 'Capture'}
              </button>

              <button
                type="button"
                onClick={() => setIsCameraOpen(false)}
                className="rounded-full border border-white/20 bg-white/10 px-3 py-2 text-sm font-medium text-white transition hover:bg-white/20"
              >
                Close
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div key="chooser" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-3">
            <CaptureGuide title={title} description={description} instruction={instruction} />

            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setIsCameraOpen(true)}
                className="flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 via-cyan-400 to-fuchsia-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:shadow-xl hover:shadow-cyan-500/30"
              >
                <Camera size={16} />
                {`📷 Capture ${title}`}
              </button>

              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-cyan-300 hover:text-slate-900"
              >
                <Upload size={16} />
                Choose file
              </button>
            </div>

            <input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={handleFilePicker} />

            {error ? <p className="text-sm text-rose-600">{error}</p> : null}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default CameraCapture
