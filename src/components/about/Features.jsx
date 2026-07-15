// This component highlights the core product capabilities in a clear, modern card layout.
const features = [
  'Upload 3 Images',
  'AI Facial Landmark Detection',
  'Face Shape Estimation',
  'Facial Symmetry Analysis',
  'Facial Measurements',
  'Interactive Report',
  'Responsive Design',
]

function Features() {
  return (
    <section className="rounded-[2rem] border border-slate-200/70 bg-white/80 p-8 shadow-[0_20px_70px_-20px_rgba(15,23,42,0.2)] backdrop-blur-xl sm:p-10">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Project Features</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">Everything you need in one experience</h2>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature}
            className="flex items-center gap-3 rounded-[1.25rem] border border-slate-200/70 bg-gradient-to-br from-slate-50 to-white px-4 py-4 text-sm font-medium text-slate-700 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-200"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
              ✓
            </span>
            <span>{feature}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features
