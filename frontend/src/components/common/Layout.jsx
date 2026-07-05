import Navbar from './Navbar'
import Footer from './Footer'
import AnimatedBackground from '../ui/AnimatedBackground'

// Shared page layout with navbar and footer, wrapped in a premium dark animated scene.
function Layout({ children }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#020617] text-slate-100">
      <AnimatedBackground className="min-h-screen">
        <Navbar />
        <main className="relative z-10 mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8">{children}</main>
        <Footer />
      </AnimatedBackground>
    </div>
  )
}

export default Layout
