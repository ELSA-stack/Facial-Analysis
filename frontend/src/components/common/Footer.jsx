// Reusable footer component.
function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>© 2026 Face Insight AI. Built for demo and educational use.</p>
        <div className="flex gap-4">
          <a href="/about" className="hover:text-slate-900">
            About
          </a>
          <a href="/upload" className="hover:text-slate-900">
            Upload
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
