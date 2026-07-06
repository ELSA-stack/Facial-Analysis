// This component displays curated strengths or improvement suggestions in a reusable list format.
function SuggestionList({ title, items = [], emptyMessage = 'Nothing to display yet.' }) {
  const hasItems = items.length > 0

  return (
    <section className="rounded-[1.75rem] border border-slate-200/70 bg-white/80 p-6 shadow-[0_16px_45px_-20px_rgba(15,23,42,0.2)] backdrop-blur-xl">
      <h2 className="text-lg font-semibold text-slate-900">{title}</h2>

      {hasItems ? (
        <ul className="mt-5 space-y-3">
          {items.map((item, index) => {
            const content = typeof item === 'string' ? item : item.text || item.label || 'Pending'

            return (
              <li
                key={`${title}-${index}`}
                className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm text-slate-700"
              >
                <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-sky-500" />
                <span>{content}</span>
              </li>
            )
          })}
        </ul>
      ) : (
        <div className="mt-5 rounded-2xl border border-dashed border-slate-200 bg-slate-50/70 p-4 text-sm text-slate-500">
          {emptyMessage}
        </div>
      )}
    </section>
  )
}

export default SuggestionList
