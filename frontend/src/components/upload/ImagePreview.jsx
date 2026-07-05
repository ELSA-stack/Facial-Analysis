import { motion } from 'framer-motion'

// Shows the uploaded image preview or a placeholder state with a polished visual treatment.
function ImagePreview({ previewUrl, label, isUploaded }) {
  return (
    <motion.div
      layout
      className="flex h-48 items-center justify-center overflow-hidden rounded-[1.3rem] border border-slate-200 bg-gradient-to-br from-slate-50 to-white"
    >
      {previewUrl ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.35 }}
          className="relative h-full w-full"
        >
          <img src={previewUrl} alt={label} className="h-full w-full object-cover" />
          <div className="absolute inset-x-0 bottom-0 flex items-center justify-center bg-slate-900/70 px-3 py-2 text-sm text-white backdrop-blur-sm">
            {isUploaded ? '✓ Uploaded' : 'Preview ready'}
          </div>
        </motion.div>
      ) : (
        <div className="text-center text-sm text-slate-500">
          <p className="font-medium text-slate-700">{label}</p>
          <p className="mt-1">No image selected yet</p>
        </div>
      )}
    </motion.div>
  )
}

export default ImagePreview
