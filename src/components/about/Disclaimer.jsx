// This highlighted card communicates the product's educational scope in a clear, friendly way.
function Disclaimer() {
  return (
    <section className="rounded-[2rem] border border-amber-200/70 bg-gradient-to-br from-amber-50 to-orange-50 p-8 shadow-[0_20px_70px_-20px_rgba(251,191,36,0.25)] sm:p-10">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-100 text-2xl text-amber-700">
          ⚠️
        </div>
        <div>
          <h2 className="text-xl font-semibold text-slate-900">Disclaimer</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700">
            This application is developed for educational and demonstration purposes. The generated
            facial analysis is AI-based and should not be considered a medical, scientific, or
            professional evaluation.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Disclaimer
