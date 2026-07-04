import Navbar from './Navbar'
import Footer from './Footer'

// Shared page layout with navbar and footer.
function Layout({ children }) {
  return (
    <div className="min-h-screen bg-slate-50 text-gray-800">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
