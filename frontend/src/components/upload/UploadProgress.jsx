// Progress indicator for the three required upload steps.
function UploadProgress({ uploadedCount, totalCount = 3 }) {
  return (
    <div className="mb-6 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex flex-wrap items-center gap-3 text-sm font-medium text-slate-700">
        <span className="rounded-full bg-slate-900 px-3 py-1 text-white">Step 1 of 2</span>
        <span>{uploadedCount}/{totalCount} images uploaded</span>
        <span className="text-slate-500">
          {uploadedCount === totalCount
            ? 'All required images are ready.'
            : 'Upload all three images to continue.'}
        </span>
      </div>
    </div>
  )
}

export default UploadProgress
