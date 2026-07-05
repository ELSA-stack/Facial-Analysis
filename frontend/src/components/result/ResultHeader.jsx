// This header introduces the report and provides the main action for starting over.
function ResultHeader({ onAnalyzeAgain }) {
  return (
    <header className="rounded-[2rem] border border-slate-200/70 bg-white/70 p-6 shadow-[0_20px_70px_-20px_rgba(15,23,42,0.22)] backdrop-blur-xl sm:p-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">AI Facial Analysis</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Facial Analysis Report
          </h1>
          <p className="mt-3 text-base leading-7 text-slate-600 sm:text-lg">
            Your report is ready to receive live backend insights. Until processing completes,
            the page displays elegant placeholders that will be replaced automatically.
          </p>
        </div>

        <button
          type="button"
          onClick={onAnalyzeAgain}
          className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900"
        >
          Analyze Again
        </button>
      </div>
    </header>
  )
}

export default ResultHeader
