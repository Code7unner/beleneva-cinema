import { useState } from 'react'
import { Link } from 'react-router-dom'
import { reviews } from '../../data/courses'

export default function Footer({ showReviews = false }: { showReviews?: boolean }) {
  const [reviewIdx, setReviewIdx] = useState(0)

  const prev = () => setReviewIdx(i => (i - 1 + reviews.length) % reviews.length)
  const next = () => setReviewIdx(i => (i + 1) % reviews.length)

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer id="contacts" style={{ backgroundColor: '#0e1012' }}>
      {/* Contacts (+ Reviews on home page) */}
      <div
        style={{
          paddingTop: 'clamp(64px, 10.26vw, 197px)',
          paddingLeft: 'clamp(24px, 9.84vw, 189px)',
          paddingRight: 'clamp(24px, 9.58vw, 184px)',
        }}
      >
        {showReviews ? (
          /* Home page: two-column layout with reviews */
          <div className="flex flex-col lg:flex-row" style={{ gap: '64px' }}>
            {/* Left: Contacts */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '80px', flexShrink: 0 }} className="w-full lg:w-[558px]">
              <ContactsLabel />
              <ContactsContent />
            </div>

            {/* Right: Reviews + Telegram button */}
            <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: '64px' }}>
              {/* Review slider */}
              <div className="lg:h-[419px]" style={{ position: 'relative', backgroundColor: '#313131', borderRadius: '32px', width: '100%', overflow: 'hidden' }}>
                <div
                  style={{
                    display: 'flex',
                    height: '100%',
                    transition: 'transform 0.45s cubic-bezier(0.4, 0, 0.2, 1)',
                    transform: `translateX(-${reviewIdx * 100}%)`,
                  }}
                >
                  {reviews.map((review) => (
                    <div
                      key={review.id}
                      style={{
                        width: '100%',
                        flexShrink: 0,
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <div style={{ width: 'clamp(40px, 6.35vw, 122px)', flexShrink: 0 }} />
                      <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 'clamp(16px, 1.67vw, 32px)', paddingTop: 'clamp(20px, 2.08vw, 40px)', paddingBottom: 'clamp(30px, 2.6vw, 50px)' }}>
                        <p style={{ color: '#e6e6e6', fontSize: 'clamp(14px, 1.04vw, 20px)', fontWeight: 700, textAlign: 'center', margin: 0, textTransform: 'uppercase' }}>
                          Отзывы о работе в школе:
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(12px, 1.25vw, 24px)' }}>
                          <p style={{ color: '#e6e6e6', fontSize: 'clamp(13px, 0.94vw, 18px)', fontWeight: 400, lineHeight: 1.5, margin: 0 }}>
                            {review.text}
                          </p>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', alignItems: 'flex-end' }}>
                            <p style={{ color: '#e6e6e6', fontSize: 'clamp(14px, 1.04vw, 20px)', fontWeight: 700, margin: 0 }}>
                              {review.author}
                            </p>
                            <p style={{ color: '#b3b3b3', fontSize: 'clamp(12px, 0.94vw, 18px)', fontWeight: 400, margin: 0, textTransform: 'uppercase' }}>
                              {review.role}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div style={{ width: 'clamp(40px, 6.35vw, 122px)', flexShrink: 0 }} />
                    </div>
                  ))}
                </div>

                <button
                  onClick={prev}
                  aria-label="Предыдущий"
                  style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 'clamp(40px, 6.35vw, 122px)', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'none', border: 'none', cursor: 'pointer', zIndex: 2 }}
                >
                  <svg width="17" height="30" viewBox="0 0 17 30" fill="none">
                    <path d="M15 2L2 15L15 28" stroke="#e6e6e6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                <button
                  onClick={next}
                  aria-label="Следующий"
                  style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 'clamp(40px, 6.35vw, 122px)', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'none', border: 'none', cursor: 'pointer', zIndex: 2 }}
                >
                  <svg width="17" height="30" viewBox="0 0 17 30" fill="none">
                    <path d="M2 2L15 15L2 28" stroke="#e6e6e6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                <div style={{ position: 'absolute', bottom: '16px', left: 0, right: 0, display: 'flex', justifyContent: 'center', gap: '10px', zIndex: 2 }}>
                  {reviews.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setReviewIdx(i)}
                      aria-label={'Отзыв ' + (i + 1)}
                      style={{ width: '10px', height: '10px', borderRadius: '50%', border: 'none', cursor: 'pointer', backgroundColor: i === reviewIdx ? '#e6e6e6' : '#666', padding: 0 }}
                    />
                  ))}
                </div>
              </div>

              <a
                href="https://t.me/"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  alignSelf: 'flex-end',
                  backgroundColor: '#e6e6e6',
                  color: '#0e1012',
                  fontSize: '14px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  padding: '16px 32px',
                  borderRadius: '32px',
                  textDecoration: 'none',
                }}
              >
                TELEGRAM киношколы
              </a>
            </div>
          </div>
        ) : (
          /* Other pages: simple contacts block */
          <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
            <ContactsLabel />
            <ContactsContent centered />
          </div>
        )}
      </div>

      {/* Bottom menu */}
      <div
        className="flex items-center justify-between md:justify-between"
        style={{
          height: '195px',
          paddingLeft: 'clamp(24px, 9.84vw, 189px)',
          paddingRight: 'clamp(24px, 9.58vw, 184px)',
          borderTop: '1px solid #313131',
          marginTop: 'clamp(48px, 5vw, 100px)',
        }}
      >
        <nav className="hidden md:flex items-center gap-8 lg:gap-[308px]">
          <Link to="/about" style={{ color: '#e6e6e6', fontSize: '16px', fontWeight: 700, textDecoration: 'none' }}>
            ОБО МНЕ
          </Link>
          <Link to="/portfolio" style={{ color: '#e6e6e6', fontSize: '16px', fontWeight: 700, textDecoration: 'none' }}>
            ПОРТФОЛИО
          </Link>
          <Link to="/courses" style={{ color: '#e6e6e6', fontSize: '16px', fontWeight: 700, textDecoration: 'none' }}>
            КУРСЫ
          </Link>
        </nav>

        {/* Mobile: Telegram + scroll-up in a row */}
        <div className="flex md:hidden items-center gap-4 w-full justify-between">
          <a
            href="https://t.me/"
            target="_blank"
            rel="noreferrer"
            aria-label="Telegram"
            style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '32px', height: '32px' }}
          >
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M23.2 9.5L20.5 22.8C20.3 23.7 19.7 24 18.9 23.5L14.9 20.6L13 22.4C12.8 22.6 12.6 22.8 12.2 22.8L12.5 18.7L20 12C20.3 11.7 19.9 11.6 19.5 11.9L10.4 17.6L6.5 16.4C5.6 16.1 5.6 15.5 6.7 15L22.1 9.1C22.8 8.8 23.5 9.2 23.2 9.5Z" fill="#e6e6e6" />
            </svg>
          </a>
          <button
            onClick={scrollToTop}
            aria-label="Наверх"
            style={{
              width: '51px',
              height: '51px',
              borderRadius: '50%',
              border: '1px solid #e6e6e6',
              backgroundColor: 'transparent',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg width="25" height="28" viewBox="0 0 25 28" fill="none">
              <path d="M12.5 27V1M12.5 1L1 12.5M12.5 1L24 12.5" stroke="#e6e6e6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Desktop: scroll-up button */}
        <button
          onClick={scrollToTop}
          aria-label="Наверх"
          className="hidden md:flex"
          style={{
            width: '51px',
            height: '51px',
            borderRadius: '50%',
            border: '1px solid #e6e6e6',
            backgroundColor: 'transparent',
            cursor: 'pointer',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <svg width="25" height="28" viewBox="0 0 25 28" fill="none">
            <path d="M12.5 27V1M12.5 1L1 12.5M12.5 1L24 12.5" stroke="#e6e6e6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </footer>
  )
}

function ContactsLabel() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '64px' }}>
      <span style={{ width: '16px', height: '16px', borderRadius: '50%', backgroundColor: '#8f1d1d', flexShrink: 0, display: 'inline-block' }} />
      <span style={{ color: '#e6e6e6', fontSize: '24px', fontWeight: 700, lineHeight: '36px' }}>КОНТАКТЫ</span>
    </div>
  )
}

function ContactsContent({ centered = false }: { centered?: boolean }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '64px' }}>
      <h2 className="text-[24px] md:text-[32px]" style={{ color: '#e6e6e6', fontWeight: 500, lineHeight: 1.5, margin: 0, textTransform: 'uppercase', ...(centered ? { textAlign: 'center' as const } : {}) }}>
        Свяжитесь со мной любым удобным способом
      </h2>

      <div className={centered ? 'flex-col md:flex-row' : 'flex-col'} style={{ display: 'flex', alignItems: centered ? 'flex-start' : 'flex-start', gap: '32px', width: '100%' }}>
        {/* Email */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
          <span className="text-[14px] md:text-[18px]" style={{ color: '#b3b3b3', fontWeight: 400, textTransform: 'uppercase' }}>Email</span>
          <a href="mailto:beleneva_irina@mail.ru" className="text-[18px] md:text-[24px]" style={{ color: '#e6e6e6', fontWeight: 500, textDecoration: 'none', textTransform: 'uppercase' }}>
            Beleneva_irina@mail.ru
          </a>
        </div>

        {/* Phone */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
          <span className="text-[14px] md:text-[18px]" style={{ color: '#b3b3b3', fontWeight: 400, textTransform: 'uppercase' }}>Телефон</span>
          <a href="tel:+79811690818" className="text-[18px] md:text-[24px]" style={{ color: '#e6e6e6', fontWeight: 500, textDecoration: 'none' }}>
            + 7 (981) 169 0818
          </a>
        </div>

        {/* Telegram icon */}
        <a
          href="https://t.me/"
          target="_blank"
          rel="noreferrer"
          aria-label="Telegram"
          style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '32px', height: '32px', flexShrink: 0 }}
        >
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M23.2 9.5L20.5 22.8C20.3 23.7 19.7 24 18.9 23.5L14.9 20.6L13 22.4C12.8 22.6 12.6 22.8 12.2 22.8L12.5 18.7L20 12C20.3 11.7 19.9 11.6 19.5 11.9L10.4 17.6L6.5 16.4C5.6 16.1 5.6 15.5 6.7 15L22.1 9.1C22.8 8.8 23.5 9.2 23.2 9.5Z" fill="#e6e6e6" />
          </svg>
        </a>
      </div>
    </div>
  )
}
