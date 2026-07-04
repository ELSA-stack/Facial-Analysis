import ImagePreview from './ImagePreview'

// Presentational card for a single facial view upload.
function UploadCard({
  title,
  description,
  previewUrl,
  isUploaded,
  fileName,
  buttonLabel,
  onFileSelect,
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-slate-800">{title}</h3>
        <p className="mt-1 text-sm text-slate-600">{description}</p>
      </div>

      <ImagePreview previewUrl={previewUrl} label={title} isUploaded={isUploaded} />

      <label className="mt-4 flex cursor-pointer items-center justify-center rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50">
        <span>{buttonLabel}</span>
        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(event) => onFileSelect(event.target.files?.[0])}
        />
      </label>

      {isUploaded ? (
        <p className="mt-3 text-sm text-emerald-600">✓ Uploaded: {fileName}</p>
      ) : (
        <p className="mt-3 text-sm text-slate-500">Please choose an image</p>
      )}
    </div>
  )
}

export default UploadCard
