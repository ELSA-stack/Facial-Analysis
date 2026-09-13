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

  const isActive = (path) => location.pathname === path

  return (
    <header className="border-b border-gray-800 bg-gray-950/80 backdrop-blur-md sticky top-0 z-40">
      <div className="mx-auto flex max-w-6xl items-center justify-between p-4">
        {/* Brand Logo */}
        <Link to={isAuthenticated ? '/app' : '/'} className="flex items-center gap-2.5 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-emerald-500 to-purple-600 text-white shadow-md shadow-emerald-950/50 group-hover:scale-105 transition">
            <Sparkles className="h-5 w-5" />
          </div>
          <span className="text-lg font-extrabold tracking-tight text-white">
            Meme<span className="text-emerald-400">Recreator</span>
          </span>
        </Link>

        {/* Nav Links */}
        <nav className="flex items-center gap-2 sm:gap-4 text-sm font-medium">
          {isAuthenticated ? (
            <>
              <Link
                to="/app"
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg transition ${
                  isActive('/app')
                    ? 'bg-gray-800 text-emerald-400'
                    : 'text-gray-300 hover:text-white hover:bg-gray-900'
                }`}
              >
                Dashboard
              </Link>

              <Link
                to="/camera"
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg transition ${
                  isActive('/camera')
                    ? 'bg-purple-600/20 text-purple-300 border border-purple-500/30 font-semibold'
                    : 'text-gray-300 hover:text-white hover:bg-gray-900'
                }`}
              >
                <Trophy className="h-4 w-4 text-amber-400" /> Meme Challenge
              </Link>
            </>
          ) : null}

          <Link
            to="/about"
            className={`flex items-center gap-1.5 px-3 py-2 rounded-lg transition ${
              isActive('/about')
                ? 'bg-gray-800 text-emerald-400'
                : 'text-gray-300 hover:text-white hover:bg-gray-900'
            }`}
          >
            <Info className="h-4 w-4" /> About
          </Link>

          {/* User Session & Auth Buttons */}
          {isAuthenticated ? (
            <div className="flex items-center gap-3 border-l border-gray-800 pl-3 sm:pl-4">
              <span className="text-xs text-gray-400 hidden sm:inline-block">
                Hi, <span className="font-semibold text-gray-200">{user?.name}</span>
              </span>
              <button
                onClick={logout}
                className="flex items-center gap-1 rounded-lg border border-gray-800 bg-gray-900 hover:bg-gray-800 px-3 py-1.5 text-xs text-gray-300 transition"
              >
                <LogOut className="h-3.5 w-3.5" /> Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2 border-l border-gray-800 pl-3 sm:pl-4">
              <Link
                to="/login"
                className="flex items-center gap-1 rounded-lg border border-gray-800 bg-gray-900 hover:bg-gray-800 px-3 py-1.5 text-xs font-semibold text-gray-200 transition"
              >
                <LogIn className="h-3.5 w-3.5" /> Sign In
              </Link>
              <Link
                to="/register"
                className="flex items-center gap-1 rounded-lg bg-emerald-600 hover:bg-emerald-500 px-3 py-1.5 text-xs font-semibold text-white transition shadow-sm"
              >
                <UserPlus className="h-3.5 w-3.5" /> Register
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  )
}
