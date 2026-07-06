// This section showcases the technologies that power the product in a polished badge grid.
const technologies = ['React', 'Vite', 'Tailwind CSS', 'FastAPI', 'Python', 'MediaPipe', 'OpenCV', 'Git & GitHub']

function TechStack() {
  return (
    <section className="rounded-[2rem] border border-slate-200/70 bg-white/80 p-8 shadow-[0_20px_70px_-20px_rgba(15,23,42,0.2)] backdrop-blur-xl sm:p-10">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Technology Stack</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">Built with modern tools</h2>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {technologies.map((tech) => (
          <div
            key={tech}
            className="rounded-[1.25rem] border border-slate-200/70 bg-gradient-to-br from-slate-50 to-white px-5 py-4 text-center text-sm font-semibold text-slate-700 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:text-slate-900"
          >
            {tech}
          </div>
        ))}
      </div>
    </section>
  )
}

export default TechStack
