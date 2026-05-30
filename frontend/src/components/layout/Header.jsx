import { useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { LogIn, Menu, X } from 'lucide-react'
import Logo from '../ui/Logo'
import { goToHomeTop, scrollToSectionWhenReady } from '../../lib/scrollToSection'

const navLinks = [
  { to: '/', label: 'Home', isHome: true },
  { to: '/about', label: 'About Us' },
  { hash: '#what-we-offer', label: 'What We Offer' },
  { to: '/services', label: 'Services' },
  { hash: '#trainers', label: 'Trainers' },
  { to: '/location', label: 'Location' },
  { to: '/contact', label: 'Contact' },
]

function desktopLinkClass({ isActive }) {
  return `rounded-full px-4 py-2 text-sm transition ${
    isActive ? 'bg-white/10 text-white' : 'text-white/80 hover:bg-white/10 hover:text-white'
  }`
}

function mobileLinkClass({ isActive }) {
  return `block rounded-lg px-4 py-3 hover:bg-white/10 ${
    isActive ? 'text-white bg-white/10' : 'text-white/90'
  }`
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const goToSection = (e, hash) => {
    e.preventDefault()
    setOpen(false)

    if (location.pathname === '/') {
      navigate({ pathname: '/', hash })
      scrollToSectionWhenReady(hash)
      return
    }

    navigate({ pathname: '/', hash })
  }

  const goHome = (e) => {
    e.preventDefault()
    setOpen(false)
    goToHomeTop(navigate)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-4 py-3 backdrop-blur-xl sm:px-6">
          <Logo className="h-9 w-auto max-w-[150px] sm:h-10 sm:max-w-[190px]" />

          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map(({ hash, to, label, isHome }) => (
              <li key={(hash || to) + label}>
                {hash ? (
                  <a
                    href={hash}
                    onClick={(e) => goToSection(e, hash)}
                    className="rounded-full px-4 py-2 text-sm text-white/80 transition hover:bg-white/10 hover:text-white"
                  >
                    {label}
                  </a>
                ) : isHome ? (
                  <NavLink to="/" end onClick={goHome} className={desktopLinkClass}>
                    {label}
                  </NavLink>
                ) : (
                  <NavLink to={to} className={desktopLinkClass}>
                    {label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>

          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center gap-2 rounded-full zeno-gradient px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:opacity-90"
          >
            <LogIn className="h-4 w-4" />
            Contact Now
          </Link>

          <button
            type="button"
            className="lg:hidden rounded-lg p-2 text-white/80 hover:bg-white/10"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {open && (
          <div className="mt-2 rounded-2xl border border-white/10 bg-black/95 p-4 backdrop-blur-xl lg:hidden">
            <ul className="flex flex-col gap-1">
              {navLinks.map(({ hash, to, label, isHome }) => (
                <li key={(hash || to) + label}>
                  {hash ? (
                    <a
                      href={hash}
                      className="block rounded-lg px-4 py-3 text-white/90 hover:bg-white/10"
                      onClick={(e) => goToSection(e, hash)}
                    >
                      {label}
                    </a>
                  ) : isHome ? (
                    <NavLink to="/" end onClick={goHome} className={mobileLinkClass}>
                      {label}
                    </NavLink>
                  ) : (
                    <NavLink
                      to={to}
                      className={mobileLinkClass}
                      onClick={() => setOpen(false)}
                    >
                      {label}
                    </NavLink>
                  )}
                </li>
              ))}
              <li>
                <Link
                  to="/contact"
                  className="mt-2 block rounded-full zeno-gradient px-4 py-3 text-center font-semibold"
                  onClick={() => setOpen(false)}
                >
                  Contact Now
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  )
}
