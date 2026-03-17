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
          paddingLeft: 'clamp(16px, 9.84vw, 189px)',
          paddingRight: 'clamp(16px, 9.58vw, 184px)',
          paddingBottom: '64px',
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

      {/* Mobile: scroll-up button — floats bottom-right of contacts area */}
      <div className="flex md:hidden justify-end" style={{ paddingRight: '32px', paddingBottom: '32px' }}>
        <button
          onClick={scrollToTop}
          aria-label="Наверх"
          style={{
            width: '48px',
            height: '46px',
            borderRadius: '70px',
            border: '1px solid #e6e6e6',
            backgroundColor: 'transparent',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0px 0px 18px 0px #e6e6e6',
          }}
        >
          <svg width="20" height="22" viewBox="0 0 25 28" fill="none">
            <path d="M12.5 27V1M12.5 1L1 12.5M12.5 1L24 12.5" stroke="#e6e6e6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* Desktop bottom menu */}
      <div
        className="hidden md:flex items-center justify-between"
        style={{
          height: '195px',
          paddingLeft: 'clamp(24px, 9.84vw, 189px)',
          paddingRight: 'clamp(24px, 9.58vw, 184px)',
          borderTop: '1px solid #313131',
          marginTop: 'clamp(48px, 5vw, 100px)',
        }}
      >
        <nav className="flex items-center gap-8 lg:gap-[308px]">
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
    </footer>
  )
}

function ContactsLabel() {
  return (
    <div className="flex items-center gap-3 md:gap-16">
      <span className="w-2.5 h-2.5 md:w-4 md:h-4 rounded-full bg-[#8f1d1d] flex-shrink-0 inline-block" />
      <span className="text-[16px] md:text-[24px] font-bold text-[#e6e6e6]" style={{ lineHeight: '36px' }}>КОНТАКТЫ</span>
    </div>
  )
}

function ContactsContent({ centered = false }: { centered?: boolean }) {
  return (
    <div className="flex flex-col gap-16">
      <h2 className="text-[22px] md:text-[32px]" style={{ color: '#e6e6e6', fontWeight: 500, lineHeight: 1.5, margin: 0, textTransform: 'uppercase', ...(centered ? { textAlign: 'center' as const } : {}) }}>
        Свяжитесь со мной любым удобным способом
      </h2>

      <div className="flex flex-col gap-6 w-full" style={centered ? {} : {}}>
        {/* Email */}
        <div className="flex flex-col gap-2 uppercase">
          <span className="text-[13px] md:text-[18px] text-[#b3b3b3]" style={{ letterSpacing: '-0.65px' }}>Email</span>
          <a href="mailto:beleneva_irina@mail.ru" className="text-[15px] md:text-[24px] font-medium text-[#e6e6e6]" style={{ textDecoration: 'none' }}>
            Beleneva_irina@mail.ru
          </a>
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-2 uppercase">
          <span className="text-[13px] md:text-[18px] text-[#b3b3b3]" style={{ letterSpacing: '-0.65px' }}>Телефон</span>
          <a href="tel:+79811690818" className="text-[15px] md:text-[24px] font-medium text-[#e6e6e6]" style={{ textDecoration: 'none' }}>
            + 7 (981) 169 0818
          </a>
        </div>

        {/* Telegram icon */}
        <a
          href="https://t.me/BelenevaRa"
          target="_blank"
          rel="noreferrer"
          aria-label="Telegram"
          className="w-[46px] h-[46px] md:w-[32px] md:h-[32px] flex-shrink-0 inline-flex items-center justify-center"
        >
          <svg viewBox="0 0 46 46" fill="none" className="w-full h-full">
            <rect x="0.5" y="0.5" width="45" height="45" rx="15.5" stroke="#e6e6e6" strokeWidth="1.6" />
            <path d="M31.5 15.5L28 30.5C27.7 31.6 27 32 26 31.3L21.2 27.8L19 30C18.7 30.3 18.5 30.5 18 30.5L18.4 25.5L27.5 18C27.8 17.7 27.4 17.5 26.9 17.8L15.8 24.5L11 23C9.9 22.7 9.9 22 11.3 21.4L30 14.5C30.8 14.2 31.7 14.7 31.5 15.5Z" fill="#e6e6e6" />
          </svg>
        </a>
      </div>
    </div>
  )
}
