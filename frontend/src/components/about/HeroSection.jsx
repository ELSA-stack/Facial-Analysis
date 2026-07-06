// The hero section introduces the product with a premium headline and a visual illustration.
function HeroSection() {
  return (
    <section className="overflow-hidden rounded-[2rem] border border-slate-200/70 bg-white/80 p-8 shadow-[0_20px_70px_-20px_rgba(15,23,42,0.25)] backdrop-blur-xl sm:p-10 lg:p-12">
      <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-sm font-medium text-sky-700">
            <span className="h-2.5 w-2.5 rounded-full bg-sky-500" />
            AI-powered facial analysis
          </div>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            About Face Insight AI
          </h1>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Face Insight AI is an AI-powered facial analysis web application that analyzes three facial
            images—front, left profile, and right profile—using computer vision and artificial
            intelligence to generate a detailed facial analysis report.
          </p>
        </div>

        <div className="relative mx-auto flex w-full max-w-md items-center justify-center">
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-sky-400/20 via-cyan-300/15 to-fuchsia-400/20 blur-3xl" />
          <div className="relative w-full rounded-[2rem] border border-slate-200/70 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 p-6 text-white shadow-2xl">
            <div className="rounded-[1.5rem] border border-white/10 bg-white/10 p-6 backdrop-blur-lg">
              <svg viewBox="0 0 320 240" className="w-full" aria-label="AI facial recognition illustration">
                <rect x="48" y="36" width="224" height="168" rx="24" fill="rgba(255,255,255,0.08)" />
                <circle cx="160" cy="102" r="48" fill="rgba(255,255,255,0.14)" />
                <circle cx="142" cy="94" r="5" fill="white" />
                <circle cx="178" cy="94" r="5" fill="white" />
                <path d="M140 120c10 10 30 10 40 0" stroke="white" strokeWidth="4" strokeLinecap="round" />
                <path d="M112 86c8-24 32-38 48-38s40 14 48 38" stroke="#67e8f9" strokeWidth="6" strokeLinecap="round" />
                <path d="M98 164c10 14 30 24 62 24s52-10 62-24" stroke="#a78bfa" strokeWidth="6" strokeLinecap="round" />
                <path d="M94 78l-30-18" stroke="#67e8f9" strokeWidth="6" strokeLinecap="round" />
                <path d="M226 78l30-18" stroke="#a78bfa" strokeWidth="6" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
