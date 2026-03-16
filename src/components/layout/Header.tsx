import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'ОБО МНЕ', to: '/about' },
  { label: 'ПОРТФОЛИО', to: '/portfolio' },
  { label: 'КУРСЫ', to: '/courses' },
  { label: 'КОНТАКТЫ', to: '#contacts' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0e1012] h-[75px]">
      {/* Desktop */}
      <div className="hidden md:flex h-full items-center justify-center">
        <nav className="flex items-center gap-8">
          {navLinks.map(link =>
            link.to === '#contacts' ? (
              <button
                key={link.to}
                onClick={() => document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-[20px] font-bold tracking-wide transition-colors duration-200 whitespace-nowrap text-[#e6e6e6] hover:text-white bg-transparent border-none cursor-pointer"
              >
                {link.label}
              </button>
            ) : (
              <Link
                key={link.to}
                to={link.to}
                className={`text-[20px] font-bold tracking-wide transition-colors duration-200 whitespace-nowrap ${
                  location.pathname === link.to
                    ? 'text-white'
                    : 'text-[#e6e6e6] hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            )
          )}
          <a
            href="https://t.me/"
            target="_blank"
            rel="noreferrer"
            className="hover:opacity-90 transition-opacity duration-200 whitespace-nowrap"
            style={{
              backgroundColor: '#e6e6e6',
              color: '#0e1012',
              fontSize: '14px',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              padding: '12px 24px',
              borderRadius: '50px',
              textDecoration: 'none',
              display: 'inline-block',
            }}
          >
            TELEGRAM канал
          </a>
        </nav>
      </div>

      {/* Mobile */}
      <div className="flex md:hidden h-full items-center justify-between px-6">
        <Link to="/" className="text-[#e6e6e6] text-sm font-bold tracking-widest uppercase">
          Beleneva Cinema
        </Link>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col gap-1.5 p-2"
          aria-label="Меню"
        >
          <span className={`block w-6 h-0.5 bg-[#e6e6e6] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#e6e6e6] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#e6e6e6] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 top-[75px] bg-[#0e1012] z-40 flex flex-col items-center justify-center gap-8">
          {navLinks.map(link =>
            link.to === '#contacts' ? (
              <button
                key={link.to}
                onClick={() => { setMenuOpen(false); document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="text-[#e6e6e6] text-2xl font-bold tracking-wide hover:text-white transition-colors bg-transparent border-none cursor-pointer"
              >
                {link.label}
              </button>
            ) : (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className="text-[#e6e6e6] text-2xl font-bold tracking-wide hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            )
          )}
          <a
            href="https://t.me/"
            target="_blank"
            rel="noreferrer"
            className="bg-[#e6e6e6] text-[#0e1012] text-sm font-bold tracking-widest uppercase px-6 py-3 hover:bg-white transition-colors"
          >
            TELEGRAM канал
          </a>
        </div>
      )}
    </header>
  )
}
