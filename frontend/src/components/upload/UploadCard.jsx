import ImagePreview from './ImagePreview'

// Reusable UI component for a single upload card.
function UploadCard({ title, description, image, onImageChange }) {
  // Create a temporary preview URL when a file is selected.
  const previewUrl = image ? URL.createObjectURL(image) : ''

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-slate-800">{title}</h3>
        <p className="mt-1 text-sm text-slate-600">{description}</p>
      </div>

      <ImagePreview previewUrl={previewUrl} label={title} isUploaded={Boolean(image)} />

      <label className="mt-4 flex cursor-pointer items-center justify-center rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50">
        <span>{image ? 'Replace image' : 'Upload image'}</span>
        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(event) => onImageChange(event.target.files?.[0])}
        />
      </label>

      {image ? (
        <p className="mt-3 text-sm text-emerald-600">✓ Uploaded: {image.name}</p>
      ) : (
        <p className="mt-3 text-sm text-slate-500">Please choose an image</p>
      )}
    </div>
  )
}

export default UploadCard
