import { motion } from 'framer-motion'
import ImagePreview from './ImagePreview'

// Reusable UI component for a single upload card with premium motion and hover states.
function UploadCard({ title, description, image, onImageChange }) {
  const previewUrl = image ? URL.createObjectURL(image) : ''
  const isUploaded = Boolean(image)

  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01, boxShadow: '0 24px 70px -24px rgba(15, 23, 42, 0.25)' }}
      transition={{ type: 'spring', stiffness: 220, damping: 18 }}
      className="rounded-[1.7rem] border border-slate-200/70 bg-white/80 p-5 shadow-[0_16px_50px_-24px_rgba(15,23,42,0.2)] backdrop-blur-xl"
    >
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-slate-800">{title}</h3>
        <p className="mt-1 text-sm text-slate-600">{description}</p>
      </div>

      <ImagePreview previewUrl={previewUrl} label={title} isUploaded={isUploaded} />

      <motion.label
        whileHover={{ scale: 1.02, y: -1 }}
        whileTap={{ scale: 0.97 }}
        className="mt-4 flex cursor-pointer items-center justify-center rounded-full border border-slate-300/80 bg-gradient-to-r from-slate-50 to-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:border-cyan-300 hover:text-slate-900"
      >
        <span>{isUploaded ? 'Replace image' : 'Upload image'}</span>
        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(event) => onImageChange(event.target.files?.[0])}
        />
      </motion.label>

      <motion.p
        initial={false}
        animate={{ color: isUploaded ? '#059669' : '#64748b' }}
        className="mt-3 text-sm"
      >
        {isUploaded ? `✓ Uploaded: ${image.name}` : 'Please choose an image'}
      </motion.p>
    </motion.div>
  )
}

export default UploadCard
