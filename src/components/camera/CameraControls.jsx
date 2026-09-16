import { Camera, CameraOff } from 'lucide-react'

export default function CameraControls({
  isStreaming,
  onStartCamera,
  onStopCamera,
}) {
  return (
    <div className="flex flex-col gap-4 rounded-xl border border-gray-800 bg-gray-900/90 p-4 text-white shadow-lg">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          {isStreaming ? (
            <button
              onClick={onStopCamera}
              className="flex items-center gap-2 rounded-lg bg-red-600 hover:bg-red-500 px-4 py-2 text-sm font-medium transition"
            >
              <CameraOff className="h-4 w-4" /> Stop Camera
            </button>
          ) : (
            <button
              onClick={onStartCamera}
              className="flex items-center gap-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 px-5 py-2 text-sm font-medium transition shadow-md shadow-emerald-900/20"
            >
              <Camera className="h-4 w-4" /> Start Camera
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
