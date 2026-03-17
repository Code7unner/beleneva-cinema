import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'ОБО МНЕ', to: '/about' },
  { label: 'ПОРТФОЛИО', to: '/portfolio' },
  { label: 'КУРСЫ', to: '/courses' },
  { label: 'КОНТАКТЫ', to: '#contacts' },
]

const mobileNavLinks = [
  { label: 'ОБО МНЕ', to: '/about' },
  { label: 'ПОРТФОЛИО', to: '/portfolio' },
  { label: 'КУРСЫ', to: '/courses' },
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
            href="https://t.me/BelenevaIRA"
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

      {/* Mobile header bar */}
      <div className="flex md:hidden h-full items-center justify-end" style={{ paddingRight: '8px' }}>
        <button
          onClick={() => setMenuOpen(true)}
          style={{ padding: '24px', background: 'none', border: 'none', cursor: 'pointer' }}
          aria-label="Меню"
        >
          <svg width="30" height="20" viewBox="0 0 30 20" fill="none">
            <line x1="0" y1="1" x2="30" y2="1" stroke="#e6e6e6" strokeWidth="2" />
            <line x1="0" y1="10" x2="30" y2="10" stroke="#e6e6e6" strokeWidth="2" />
            <line x1="0" y1="19" x2="30" y2="19" stroke="#e6e6e6" strokeWidth="2" />
          </svg>
        </button>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`md:hidden fixed inset-0 z-[60] transition-visibility ${menuOpen ? 'visible' : 'invisible'}`}
        onClick={() => setMenuOpen(false)}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-300 ease-in-out ${menuOpen ? 'opacity-40' : 'opacity-0'}`}
        />

        {/* Menu panel */}
        <div
          className={`absolute right-0 top-0 bottom-0 w-[275px] bg-[#e6e6e6] flex flex-col transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          style={{ paddingTop: '24px', paddingBottom: '24px', paddingLeft: '24px', paddingRight: '24px' }}
          onClick={e => e.stopPropagation()}
        >
            {/* Close button */}
            <button
              onClick={() => setMenuOpen(false)}
              className="self-end w-8 h-8 flex items-center justify-center flex-shrink-0"
              aria-label="Закрыть"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 1L13 13M13 1L1 13" stroke="#0e1012" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>

            {/* Middle: nav + contacts, fills remaining space */}
            <div className="flex flex-col justify-between flex-1 min-h-0" style={{ marginTop: '64px' }}>
              {/* Nav links */}
              <nav className="flex flex-col" style={{ gap: '64px' }}>
                {mobileNavLinks.map(link => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center justify-between w-full"
                  >
                    <span className="text-[16px] font-bold text-[#0e1012]">
                      {link.label}
                    </span>
                    <svg width="14" height="24" viewBox="0 0 14 24" fill="none">
                      <path d="M2 2L12 12L2 22" stroke="#0e1012" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                ))}

                {/* Telegram button */}
                <a
                  href="https://t.me/BelenevaIRA"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center h-12 rounded-3xl bg-[#0e1012] text-[#e6e6e6] text-[11px] font-bold uppercase tracking-wide self-center"
                  style={{ paddingLeft: '32px', paddingRight: '32px' }}
                >
                  TELEGRAM канал
                </a>
              </nav>

              {/* Contacts at bottom */}
              <div className="flex flex-col uppercase" style={{ gap: '48px' }}>
                <div className="flex flex-col" style={{ gap: '8px' }}>
                  <span className="text-[13px] text-[#b3b3b3]" style={{ letterSpacing: '-0.65px' }}>Email</span>
                  <span className="text-[15px] font-medium text-[#323232]">Beleneva_irina@mail.ru</span>
                </div>
                <div className="flex flex-col" style={{ gap: '8px' }}>
                  <span className="text-[13px] text-[#b3b3b3]" style={{ letterSpacing: '-0.65px' }}>Телефон</span>
                  <span className="text-[15px] font-medium text-[#323232]">+ 7 (981) 169 0818</span>
                </div>
              </div>
            </div>
          </div>
      </div>
    </header>
  )
}
