// This card presents a detailed analysis section and keeps the placeholder state visually clear.
function AnalysisCard({ title, value, placeholder = 'Waiting for analysis...' }) {
  const hasValue = value !== null && value !== undefined && value !== ''

  return (
    <article className="rounded-[1.75rem] border border-slate-200/70 bg-white/80 p-6 shadow-[0_16px_45px_-20px_rgba(15,23,42,0.2)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_-20px_rgba(15,23,42,0.3)]">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
      <span
  className={`rounded-full px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] ${
    hasValue
      ? 'bg-green-100 text-green-700'
      : 'bg-slate-100 text-slate-500'
  }`}
>
  {hasValue ? 'Completed' : 'Pending'}
</span>  
      </div>

      <div className="mt-5 rounded-2xl border border-dashed border-slate-200 bg-slate-50/70 p-4">
        {hasValue ? (
          <p className="text-base font-medium text-slate-800">{value}</p>
        ) : (
          <div className="space-y-3">
            <div className="h-4 w-3/4 animate-pulse rounded-full bg-slate-200" />
            <div className="h-4 w-2/3 animate-pulse rounded-full bg-slate-100" />
            <div className="h-4 w-1/2 animate-pulse rounded-full bg-slate-100" />
            <p className="pt-2 text-sm text-slate-500">{placeholder}</p>
          </div>
        )}
      </div>
    </article>
  )
}

export default AnalysisCard
