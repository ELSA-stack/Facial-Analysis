import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

// Reusable navigation bar component with a premium, glassy feel and subtle motion.
function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 18)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { href: '/', label: 'Home' },
    { href: '/upload', label: 'Upload' },
    { href: '/about', label: 'About' },
  ]

  return (
    <nav className={`sticky top-0 z-20 border-b border-cyan-400/20 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-xl' : 'bg-slate-950/60 backdrop-blur-md'}`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <motion.a
          href="/"
          whileHover={{ scale: 1.04, y: -1 }}
          className="relative text-xl font-semibold tracking-tight text-slate-100"
        >
          <span className="relative inline-flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
            Face Insight AI
          </span>
        </motion.a>

        <div className="hidden items-center gap-6 text-sm text-slate-300 sm:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="group relative px-1 py-2 transition hover:text-white">
              <span className="relative after:absolute after:bottom-[-3px] after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-cyan-400 after:transition-transform after:duration-300 group-hover:after:scale-x-100">
                {link.label}
              </span>
            </a>
          ))}
        </div>

        <motion.a
          href="/upload"
          whileHover={{ scale: 1.03, y: -1 }}
          whileTap={{ scale: 0.97 }}
          className="rounded-full border border-cyan-400/30 bg-slate-900/90 px-4 py-2 text-sm font-medium text-cyan-100 shadow-[0_0_24px_rgba(34,211,238,0.14)] transition hover:border-cyan-300/60 hover:bg-slate-800"
        >
          Get started
        </motion.a>
      </div>
    </nav>
  )
}

export default Navbar
