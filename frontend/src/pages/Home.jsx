// Homepage for the facial analysis product experience.
function Home() {
  return (
    <div className="space-y-16 py-6 sm:py-10">
      <section className="grid items-center gap-10 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 px-6 py-10 text-white shadow-2xl sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-14 lg:py-16">
        <div className="space-y-6">
          <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm text-blue-100">
            AI-powered face analysis
          </span>
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
              Discover facial insights with clarity and confidence.
            </h1>
            <p className="max-w-xl text-lg text-slate-300">
              Upload an image and explore a modern analysis experience designed for learning, demo projects, and future AI integrations.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="/upload"
              className="rounded-full bg-blue-500 px-5 py-3 text-center font-medium text-white transition hover:bg-blue-400"
            >
              Try the demo
            </a>
            <a
              href="/about"
              className="rounded-full border border-white/20 px-5 py-3 text-center font-medium text-slate-100 transition hover:bg-white/10"
            >
              Learn more
            </a>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">
          <div className="rounded-2xl bg-slate-950/60 p-6 shadow-inner">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm text-slate-300">Live analysis preview</p>
              <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-sm text-emerald-300">
                94% confident
              </span>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-white/10 p-4">
                <p className="text-sm text-slate-300">Face shape</p>
                <p className="mt-1 text-xl font-semibold">Oval</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/10 p-4">
                <p className="text-sm text-slate-300">Mood</p>
                <p className="mt-1 text-xl font-semibold">Calm</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/10 p-4 sm:col-span-2">
                <p className="text-sm text-slate-300">Suggested next step</p>
                <p className="mt-1 text-xl font-semibold">Upload a clearer image for better scoring</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-slate-800">Why teams love this experience</h2>
          <p className="mx-auto mt-2 max-w-2xl text-slate-600">
            A simple, polished interface for showcasing AI-powered analysis in a college project or product demo.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: 'Fast upload flow',
              text: 'Start from a simple upload experience with clear guidance and a smooth first step.',
            },
            {
              title: 'Clean result view',
              text: 'Present analysis output in a modern card-based layout that is easy to understand.',
            },
            {
              title: 'Built for growth',
              text: 'The structure is ready for future backend integration and richer AI features.',
            },
          ].map((feature) => (
            <div key={feature.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 h-10 w-10 rounded-full bg-blue-100" />
              <h3 className="text-xl font-semibold text-slate-800">{feature.title}</h3>
              <p className="mt-2 text-slate-600">{feature.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
