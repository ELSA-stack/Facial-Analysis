// This table is designed to display structured measurement data once the backend sends it.
function MeasurementTable({ measurements = [] }) {
  const hasMeasurements = measurements.length > 0

  return (
    <section className="rounded-[1.75rem] border border-slate-200/70 bg-white/80 p-6 shadow-[0_16px_45px_-20px_rgba(15,23,42,0.2)] backdrop-blur-xl">
      <h2 className="text-lg font-semibold text-slate-900">Facial Measurements</h2>
      <p className="mt-2 text-sm leading-6 text-slate-600">
        Structured values will appear here as soon as the API returns measurable data.
      </p>

      <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200">
        <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-700">Metric</th>
              <th className="px-4 py-3 font-semibold text-slate-700">Value</th>
              <th className="px-4 py-3 font-semibold text-slate-700">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 bg-white">
            {hasMeasurements ? (
              measurements.map((item, index) => (
                <tr key={`${item.label || 'metric'}-${index}`} className="transition hover:bg-slate-50">
                  <td className="px-4 py-3 text-slate-700">{item.label || '—'}</td>
                  <td className="px-4 py-3 text-slate-700">{item.value ?? '—'}</td>
                  <td className="px-4 py-3 text-green-600">Completed</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="px-4 py-8 text-center text-sm text-slate-500">
                  Measurements will appear after processing.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default MeasurementTable
