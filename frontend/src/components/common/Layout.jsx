import Navbar from './Navbar'
import Footer from './Footer'

// Shared page layout with navbar and footer.
function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Navbar />
      <main className="mx-auto max-w-6xl p-4">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
