import { useMemo, useState } from 'react'
import UploadCard from '../components/upload/UploadCard'
import UploadButton from '../components/upload/UploadButton'

// Upload page for collecting three facial view images.
function Upload() {
  const [images, setImages] = useState({
    front: null,
    left: null,
    right: null,
  })

  const previewUrls = useMemo(() => {
    return Object.fromEntries(
      Object.entries(images).map(([key, file]) => [key, file ? URL.createObjectURL(file) : '']),
    )
  }, [images])

  const handleFileChange = (key, file) => {
    if (!file) return

    setImages((prev) => ({ ...prev, [key]: file }))
  }

  const handleAnalyze = () => {
    console.log('Sending images to backend...')
  }

  const uploadedCount = Object.values(images).filter(Boolean).length
  const allSelected = uploadedCount === 3

  return (
    <div className="py-6 sm:py-8">
      <div className="mb-8 max-w-3xl">
        <h1 className="text-3xl font-semibold text-slate-800">Upload facial images</h1>
        <p className="mt-2 text-slate-600">
          Add a front, left-profile, and right-profile image to prepare your facial analysis request.
        </p>
      </div>

      <div className="mb-6 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex flex-wrap items-center gap-3 text-sm font-medium text-slate-700">
          <span className="rounded-full bg-slate-900 px-3 py-1 text-white">Step 1 of 2</span>
          <span>{uploadedCount}/3 images uploaded</span>
          <span className="text-slate-500">
            {allSelected ? 'All required images are ready.' : 'Upload all three images to continue.'}
          </span>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-3 lg:grid-cols-2">
        <UploadCard
          title="Front Face"
          description="Upload a clear front-facing photo."
          previewUrl={previewUrls.front}
          isUploaded={Boolean(images.front)}
          fileName={images.front?.name || ''}
          buttonLabel={images.front ? 'Replace image' : 'Upload image'}
          onFileSelect={(file) => handleFileChange('front', file)}
        />
        <UploadCard
          title="Left Profile"
          description="Upload a clear left-side profile photo."
          previewUrl={previewUrls.left}
          isUploaded={Boolean(images.left)}
          fileName={images.left?.name || ''}
          buttonLabel={images.left ? 'Replace image' : 'Upload image'}
          onFileSelect={(file) => handleFileChange('left', file)}
        />
        <UploadCard
          title="Right Profile"
          description="Upload a clear right-side profile photo."
          previewUrl={previewUrls.right}
          isUploaded={Boolean(images.right)}
          fileName={images.right?.name || ''}
          buttonLabel={images.right ? 'Replace image' : 'Upload image'}
          onFileSelect={(file) => handleFileChange('right', file)}
        />
      </div>

      <div className="mt-8 flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-medium text-slate-800">Ready to analyze?</p>
          <p className="text-sm text-slate-600">
            {allSelected
              ? 'All three images are selected and ready.'
              : 'Please upload all three images to enable analysis.'}
          </p>
        </div>
        <UploadButton disabled={!allSelected} label="Analyze Face" onClick={handleAnalyze} />
      </div>
    </div>
  )
}

export default Upload
