// Reusable navigation bar component.
function Navbar() {
  return (
    <nav className="border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="/" className="text-xl font-semibold text-slate-800">
          Face Insight AI
        </a>
        <div className="hidden items-center gap-6 text-sm text-slate-600 sm:flex">
          <a href="/" className="hover:text-slate-900">
            Home
          </a>
          <a href="/upload" className="hover:text-slate-900">
            Upload
          </a>
          <a href="/about" className="hover:text-slate-900">
            About
          </a>
        </div>
        <a
          href="/upload"
          className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
        >
          Get started
        </a>
      </div>
    </nav>
  )
}

export default Navbar
