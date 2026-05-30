import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { LogIn, Menu, X } from 'lucide-react'
import { SITE } from '../../config/site'

const navLinks = [
  { to: '/#about', label: 'About', hash: true },
  { to: '/#services', label: 'Services', hash: true },
  { to: '/#trainers', label: 'Trainers', hash: true },
  { to: '/#pricing', label: 'Pricing', hash: true },
  { to: '/location', label: 'Location' },
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  const handleNav = (to, hash) => {
    setOpen(false)
    if (hash && location.pathname !== '/') {
      window.location.href = to
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-4 py-3 backdrop-blur-xl sm:px-6">
          <Link to="/" className="flex items-center gap-2.5 shrink-0">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg zeno-gradient text-sm font-black">
              Z
            </span>
            <span className="text-lg font-bold tracking-wide">{SITE.name}</span>
          </Link>

          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map(({ to, label, hash }) => (
              <li key={to + label}>
                {hash ? (
                  <a
                    href={to}
                    onClick={() => handleNav(to, hash)}
                    className="rounded-full px-4 py-2 text-sm text-white/80 transition hover:bg-white/10 hover:text-white"
                  >
                    {label}
                  </a>
                ) : (
                  <NavLink
                    to={to}
                    className={({ isActive }) =>
                      `rounded-full px-4 py-2 text-sm transition ${
                        isActive
                          ? 'bg-white/10 text-white'
                          : 'text-white/80 hover:bg-white/10 hover:text-white'
                      }`
                    }
                  >
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
            Enquire Now
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
              {navLinks.map(({ to, label, hash }) => (
                <li key={to + label}>
                  {hash ? (
                    <a
                      href={to}
                      className="block rounded-lg px-4 py-3 text-white/90 hover:bg-white/10"
                      onClick={() => setOpen(false)}
                    >
                      {label}
                    </a>
                  ) : (
                    <NavLink
                      to={to}
                      className="block rounded-lg px-4 py-3 text-white/90 hover:bg-white/10"
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
                  Enquire Now
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  )
}
