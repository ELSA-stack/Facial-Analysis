// Button used for the final analysis action.
function UploadButton({ disabled = false, label = 'Analyze Face', onClick }) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={`rounded-full px-6 py-3 text-sm font-semibold transition ${
        disabled
          ? 'cursor-not-allowed bg-slate-300 text-slate-500'
          : 'bg-blue-600 text-white hover:bg-blue-500'
      }`}
    >
      {label}
    </button>
  )
}

export default UploadButton
