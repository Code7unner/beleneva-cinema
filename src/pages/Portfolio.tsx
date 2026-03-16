import { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import SectionLabel from '../components/ui/SectionLabel'
import { films, editingSliderWorks, editingStandaloneWork, youtubeWorks } from '../data/films'

// ─── Film Slider ────────────────────────────────────────────────────────────

const FILM_ARROW_W = 'clamp(40px, 9.6vw, 185px)'

function FilmSlider() {
  const [idx, setIdx] = useState(0)
  const prev = () => setIdx(i => (i - 1 + films.length) % films.length)
  const next = () => setIdx(i => (i + 1) % films.length)

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'stretch' }}>
        <button
          onClick={prev}
          aria-label="Предыдущий"
          className="hidden md:flex"
          style={{ width: FILM_ARROW_W, flexShrink: 0, alignItems: 'center', justifyContent: 'center', background: 'none', border: 'none', cursor: 'pointer' }}
        >
          <svg width="17" height="30" viewBox="0 0 17 30" fill="none">
            <path d="M15 2L2 15L15 28" stroke="#e6e6e6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div className="mobile-scroll md:!overflow-hidden" style={{ width: '100%' }}>
            <div
              className="md:transition-transform md:duration-[450ms] md:ease-[cubic-bezier(0.4,0,0.2,1)]"
              style={{
                display: 'flex',
                transform: `translateX(-${idx * 100}%)`,
              }}
            >
              {films.map(film => (
                <div
                  key={film.slug}
                  style={{ width: '100%', flexShrink: 0, position: 'relative', aspectRatio: '1300/706', overflow: 'hidden', borderRadius: '24px' }}
                >
                  <img src={film.slide} alt={film.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', bottom: 'clamp(12px, 1.8vw, 28px)', left: 0, right: 0, display: 'flex', justifyContent: 'center' }}>
                    <Link
                      to={`/films/${film.slug}`}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '10px',
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
                      <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
                        <path d="M1 1.5L11 7L1 12.5V1.5Z" fill="#0e1012" stroke="#0e1012" strokeWidth="1.5" strokeLinejoin="round"/>
                      </svg>
                      СМОТРЕТЬ ПОДРОБНЕЕ
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p style={{ color: '#e6e6e6', fontSize: 'clamp(16px, 1.46vw, 28px)', fontWeight: 500, lineHeight: 1.5, textAlign: 'center', margin: 0 }}>
            {films[idx].title} ({films[idx].year})
          </p>

          <div className="hidden md:flex" style={{ justifyContent: 'center', gap: '8px' }}>
            {films.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                aria-label={'Слайд ' + (i + 1)}
                style={{ width: '8px', height: '8px', borderRadius: '50%', border: 'none', cursor: 'pointer', backgroundColor: i === idx ? '#e6e6e6' : '#313131', padding: 0 }}
              />
            ))}
          </div>
        </div>

        <button
          onClick={next}
          aria-label="Следующий"
          className="hidden md:flex"
          style={{ width: FILM_ARROW_W, flexShrink: 0, alignItems: 'center', justifyContent: 'center', background: 'none', border: 'none', cursor: 'pointer' }}
        >
          <svg width="17" height="30" viewBox="0 0 17 30" fill="none">
            <path d="M2 2L15 15L2 28" stroke="#e6e6e6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  )
}

// ─── Editing Card ────────────────────────────────────────────────────────────

function EditingCard({ work, buttonText = 'ЧИТАТЬ' }: { work: { slug: string; title: string; year: string; city: string; role: string; thumbnail: string }; buttonText?: string }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
        <span style={{ color: '#b3b3b3', fontSize: '18px', fontWeight: 400, lineHeight: '27px' }}>{work.year}</span>
        <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#8f1d1d', display: 'inline-block', flexShrink: 0 }} />
        <span style={{ color: '#b3b3b3', fontSize: '18px', fontWeight: 400, lineHeight: '27px' }}>{work.city}</span>
      </div>

      <div className="editing-cover" style={{ position: 'relative', width: '100%', overflow: 'hidden', borderRadius: '24px' }}>
        <img src={work.thumbnail} alt={work.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', bottom: '24px', left: 0, right: 0, display: 'flex', justifyContent: 'center' }}>
          <Link
            to={`/films/${work.slug}`}
            style={{
              backgroundColor: '#e6e6e6',
              color: '#0e1012',
              fontSize: '14px',
              fontWeight: 700,
              textTransform: 'uppercase',
              padding: '16px 32px',
              borderRadius: '32px',
              textDecoration: 'none',
              display: 'inline-block',
            }}
          >
            {buttonText}
          </Link>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', textAlign: 'center' }}>
        <p style={{ color: '#e6e6e6', fontSize: '28px', fontWeight: 500, lineHeight: 1.5, margin: 0 }}>
          {work.title}
        </p>
        <p style={{ color: '#b3b3b3', fontSize: '18px', fontWeight: 400, lineHeight: '27px', margin: 0 }}>
          {work.role}
        </p>
      </div>
    </div>
  )
}

// ─── Editing Slider ─────────────────────────────────────────────────────────

const EDIT_ARROW_W = 'clamp(32px, 5.2vw, 100px)'

function EditingSlider() {
  const [idx, setIdx] = useState(0)
  const total = editingSliderWorks.length
  const prev = () => setIdx(i => (i - 1 + total) % total)
  const next = () => setIdx(i => (i + 1) % total)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
        <span style={{ color: '#b3b3b3', fontSize: '18px', fontWeight: 400, lineHeight: '27px' }}>{editingSliderWorks[idx].year}</span>
        <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#8f1d1d', display: 'inline-block', flexShrink: 0 }} />
        <span style={{ color: '#b3b3b3', fontSize: '18px', fontWeight: 400, lineHeight: '27px' }}>{editingSliderWorks[idx].city}</span>
      </div>

      <div style={{ display: 'flex', alignItems: 'stretch' }}>
        <button
          onClick={prev}
          aria-label="Предыдущий"
          className="hidden md:flex"
          style={{ width: EDIT_ARROW_W, flexShrink: 0, alignItems: 'center', justifyContent: 'center', background: 'none', border: 'none', cursor: 'pointer' }}
        >
          <svg width="17" height="30" viewBox="0 0 17 30" fill="none">
            <path d="M15 2L2 15L15 28" stroke="#e6e6e6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div className="mobile-scroll md:!overflow-hidden" style={{ flex: 1, minWidth: 0, borderRadius: '24px' }}>
          <div
            className="md:transition-transform md:duration-[450ms] md:ease-[cubic-bezier(0.4,0,0.2,1)]"
            style={{
              display: 'flex',
              transform: `translateX(-${idx * 100}%)`,
            }}
          >
            {editingSliderWorks.map(work => (
              <div
                key={work.slug}
                className="editing-cover"
                style={{ width: '100%', flexShrink: 0, position: 'relative', overflow: 'hidden' }}
              >
                <img src={work.thumbnail} alt={work.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', bottom: '24px', left: 0, right: 0, display: 'flex', justifyContent: 'center' }}>
                  <Link
                    to={`/films/${work.slug}`}
                    style={{
                      backgroundColor: '#e6e6e6',
                      color: '#0e1012',
                      fontSize: '14px',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      padding: '16px 32px',
                      borderRadius: '32px',
                      textDecoration: 'none',
                      display: 'inline-block',
                    }}
                  >
                    ЧИТАТЬ СЦЕНАРИЙ
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={next}
          aria-label="Следующий"
          className="hidden md:flex"
          style={{ width: EDIT_ARROW_W, flexShrink: 0, alignItems: 'center', justifyContent: 'center', background: 'none', border: 'none', cursor: 'pointer' }}
        >
          <svg width="17" height="30" viewBox="0 0 17 30" fill="none">
            <path d="M2 2L15 15L2 28" stroke="#e6e6e6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      <div className="md:px-[clamp(32px,5.2vw,100px)]" style={{ display: 'flex', flexDirection: 'column', gap: '16px', textAlign: 'center' }}>
        <p style={{ color: '#e6e6e6', fontSize: '28px', fontWeight: 500, lineHeight: 1.5, margin: 0 }}>
          {editingSliderWorks[idx].title}
        </p>
        <p style={{ color: '#b3b3b3', fontSize: '18px', fontWeight: 400, lineHeight: '27px', margin: 0 }}>
          {editingSliderWorks[idx].role}
        </p>
      </div>

      <div className="hidden md:flex" style={{ justifyContent: 'center', gap: '8px' }}>
        {editingSliderWorks.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            aria-label={'Слайд ' + (i + 1)}
            style={{ width: '8px', height: '8px', borderRadius: '50%', border: 'none', cursor: 'pointer', backgroundColor: i === idx ? '#e6e6e6' : '#313131', padding: 0 }}
          />
        ))}
      </div>
    </div>
  )
}

// ─── Page ───────────────────────────────────────────────────────────────────

export default function Portfolio() {
  return (
    <Layout>
      <section className="w-full" style={{ backgroundColor: '#0e1012' }}>
        <div
          style={{
            paddingTop: '100px',
            paddingBottom: 0,
            paddingLeft: 'clamp(24px, 9.84vw, 189px)',
            paddingRight: 'clamp(24px, 9.58vw, 184px)',
          }}
        >
          {/* Section label with back arrow */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '64px', marginBottom: '32px' }}>
            <Link to="/" style={{ width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="18" height="30" viewBox="0 0 17 30" fill="none">
                <path d="M15 2L2 15L15 28" stroke="#e6e6e6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <SectionLabel text="ПОРТФОЛИО" />
          </div>
        </div>

        {/* ── КИНО ── */}
        <div
          style={{
            paddingLeft: 'clamp(24px, 9.84vw, 189px)',
            paddingRight: 'clamp(24px, 9.58vw, 184px)',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '64px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', textAlign: 'center' }}>
              <h3 className="text-[32px] md:text-[42px] xl:text-[54px]" style={{ color: '#e6e6e6', fontWeight: 700, lineHeight: 1.5, margin: 0 }}>
                КИНО
              </h3>
              <p className="text-[18px] md:text-[32px]" style={{ color: '#e6e6e6', fontWeight: 500, lineHeight: 1.5, margin: 0, textTransform: 'uppercase' }}>
                Я создаю формы не ради форм. Мне важно, чтобы каждый проект говорил. Без лишнего шума. Точно. От всего сердца.
              </p>
            </div>
            <FilmSlider />
          </div>
        </div>

        {/* ── РЕДАКТУРА ── */}
        <div
          style={{
            marginTop: '80px',
            paddingLeft: 'clamp(24px, 9.84vw, 189px)',
            paddingRight: 'clamp(24px, 9.58vw, 184px)',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '64px' }}>
            <h3 className="text-[32px] md:text-[42px] xl:text-[54px]" style={{ color: '#e6e6e6', fontWeight: 700, lineHeight: 1.5, margin: 0, textAlign: 'center' }}>
              РЕДАКТУРА
            </h3>
            <div className="flex flex-col lg:flex-row" style={{ gap: '25px', alignItems: 'flex-start' }}>
              <div style={{ width: '61.3%', flexShrink: 0 }} className="max-lg:!w-full">
                <EditingSlider />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <EditingCard work={editingStandaloneWork} />
              </div>
            </div>
          </div>
        </div>

        {/* ── ЮТУБ ── */}
        <div
          style={{
            marginTop: '80px',
            paddingLeft: 'clamp(24px, 9.84vw, 189px)',
            paddingRight: 'clamp(24px, 9.58vw, 184px)',
            paddingBottom: 'clamp(64px, 5.72vw, 110px)',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '64px' }}>
            <h3 className="text-[32px] md:text-[42px] xl:text-[54px]" style={{ color: '#e6e6e6', fontWeight: 700, lineHeight: 1.5, margin: 0, textAlign: 'center' }}>
              ЮТУБ
            </h3>
            {youtubeWorks.map(work => (
              <div key={work.slug} style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
                  <span style={{ color: '#b3b3b3', fontSize: '18px', fontWeight: 400, lineHeight: '27px' }}>{work.year}</span>
                  <span style={{ width: '16px', height: '16px', borderRadius: '50%', backgroundColor: '#8f1d1d', display: 'inline-block', flexShrink: 0 }} />
                  <span style={{ color: '#b3b3b3', fontSize: '18px', fontWeight: 400, lineHeight: '27px' }}>{work.city}</span>
                </div>
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    aspectRatio: '1540/739',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <img src={work.thumbnail} alt={work.title} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(14,16,18,0.5)' }} />
                  <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center', textAlign: 'center', padding: '0 clamp(24px, 5vw, 80px)' }}>
                    <p style={{ color: '#e6e6e6', fontSize: '28px', fontWeight: 500, lineHeight: 1.5, margin: 0 }}>
                      {work.title}
                    </p>
                    <p style={{ color: '#e6e6e6', fontSize: '18px', fontWeight: 400, lineHeight: '27px', margin: 0, maxWidth: '857px' }}>
                      {work.description}
                    </p>
                    <Link
                      to={`/films/${work.slug}`}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '10px',
                        backgroundColor: '#e6e6e6',
                        color: '#0e1012',
                        fontSize: '14px',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        padding: '16px 32px',
                        borderRadius: '32px',
                        textDecoration: 'none',
                        marginTop: '8px',
                      }}
                    >
                      <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
                        <path d="M1 1.5L11 7L1 12.5V1.5Z" fill="#0e1012" stroke="#0e1012" strokeWidth="1.5" strokeLinejoin="round"/>
                      </svg>
                      СМОТРЕТЬ ТРЕЙЛЕР
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}
