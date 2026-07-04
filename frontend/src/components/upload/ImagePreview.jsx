// Shows the uploaded image preview or a placeholder state.
function ImagePreview({ previewUrl, label, isUploaded }) {
  return (
    <div className="flex h-48 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
      {previewUrl ? (
        <div className="relative h-full w-full">
          <img src={previewUrl} alt={label} className="h-full w-full object-cover" />
          <div className="absolute inset-x-0 bottom-0 flex items-center justify-center bg-slate-900/70 px-3 py-2 text-sm text-white">
            {isUploaded ? '✓ Uploaded' : 'Preview ready'}
          </div>
        </div>
      ) : (
        <div className="text-center text-sm text-slate-500">
          <p className="font-medium text-slate-700">{label}</p>
          <p className="mt-1">No image selected yet</p>
        </div>
      )}
    </div>
  )
}

export default ImagePreview
