import { useState } from 'react'
import { Link } from 'react-router-dom'
import SectionLabel from '../ui/SectionLabel'
import { reviews } from '../../data/courses'

export default function Footer() {
  const [reviewIdx, setReviewIdx] = useState(0)

  const prev = () => setReviewIdx(i => (i - 1 + reviews.length) % reviews.length)
  const next = () => setReviewIdx(i => (i + 1) % reviews.length)

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer id="contacts" className="bg-[#0e1012] pt-16 pb-8 px-8 md:px-16">
      {/* Contacts + Reviews */}
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 mb-16">

          {/* Contacts */}
          <div className="flex-1">
            <SectionLabel text="КОНТАКТЫ" className="mb-8" />
            <h2 className="text-[#e6e6e6] text-3xl md:text-[32px] font-medium leading-tight mb-8 max-w-md">
              Свяжитесь со мной любым удобным способом
            </h2>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:beleneva_irina@mail.ru"
                className="text-[#e6e6e6] text-base font-bold tracking-widest uppercase hover:text-white transition-colors"
              >
                BELENEVA_IRINA@MAIL.RU
              </a>
              <a
                href="tel:+79861090018"
                className="text-[#e6e6e6] text-base font-bold tracking-widest uppercase hover:text-white transition-colors"
              >
                +7 (986) 109 0018
              </a>
              <a
                href="https://t.me/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-[#e6e6e6] hover:text-white transition-colors"
                aria-label="Telegram"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.26 13.49l-2.98-.924c-.648-.204-.661-.648.136-.961l11.647-4.492c.537-.194 1.006.131.831.108z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Reviews */}
          <div className="flex-1 max-w-xl">
            <div className="relative bg-[#313131] p-8 min-h-[200px] flex flex-col justify-between">
              <div>
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: reviews[reviewIdx].stars }).map((_, i) => (
                    <span key={i} className="text-[#8f1d1d] text-lg">★</span>
                  ))}
                </div>
                <p className="text-[#e6e6e6] text-sm leading-relaxed mb-4">
                  {reviews[reviewIdx].text}
                </p>
                <p className="text-[#b3b3b3] text-sm font-bold">
                  {reviews[reviewIdx].author}
                </p>
              </div>
              {/* Arrows */}
              <div className="flex items-center gap-4 mt-6">
                <button onClick={prev} className="text-[#e6e6e6] hover:text-white transition-colors text-xl">‹</button>
                <div className="flex gap-2">
                  {reviews.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setReviewIdx(i)}
                      className={`w-2 h-2 rounded-full transition-colors ${i === reviewIdx ? 'bg-[#e6e6e6]' : 'bg-[#b3b3b3]'}`}
                    />
                  ))}
                </div>
                <button onClick={next} className="text-[#e6e6e6] hover:text-white transition-colors text-xl">›</button>
              </div>
            </div>
            <div className="mt-4">
              <a
                href="https://t.me/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center bg-[#e6e6e6] text-[#0e1012] text-sm font-bold tracking-widest uppercase px-6 py-3 hover:bg-white transition-colors"
              >
                TELEGRAM киношколы
              </a>
            </div>
          </div>
        </div>

        {/* Bottom menu */}
        <div className="border-t border-[#313131] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <nav className="flex flex-wrap gap-8">
            <Link to="/about" className="text-[#e6e6e6] text-base font-bold tracking-widest uppercase hover:text-white transition-colors">
              ОБО МНЕ
            </Link>
            <Link to="/portfolio" className="text-[#e6e6e6] text-base font-bold tracking-widest uppercase hover:text-white transition-colors">
              ПОРТФОЛИО
            </Link>
            <Link to="/courses" className="text-[#e6e6e6] text-base font-bold tracking-widest uppercase hover:text-white transition-colors">
              КУРСЫ
            </Link>
          </nav>
          <button
            onClick={scrollToTop}
            className="flex items-center justify-center w-12 h-12 border border-[#e6e6e6] text-[#e6e6e6] hover:bg-[#e6e6e6] hover:text-[#0e1012] transition-all"
            aria-label="Наверх"
          >
            ↑
          </button>
        </div>
      </div>
    </footer>
  )
}
