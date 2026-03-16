import { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import SectionLabel from '../components/ui/SectionLabel'
import { films, editingSliderWorks, editingStandaloneWork, youtubeWorks } from '../data/films'
import { courses } from '../data/courses'
import heroBg from '../assets/hero-bg.png'
import logo from '../assets/logo.png'
import iraPhoto from '../assets/ira-photo.png'

// ─── Hero ────────────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden" style={{ paddingBottom: '10vh' }}>
      <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover object-center" />
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(14,16,18,0.6)' }} />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(14,16,18,0.3), transparent 40%, rgba(14,16,18,0.8))' }} />

      <div className="relative z-10 flex flex-col items-center text-center px-6" style={{ gap: '64px' }}>
        <img src={logo} alt="Beleneva Cinema" className="w-full max-w-[320px] md:max-w-[600px] lg:max-w-[900px]" />
        <p className="text-[18px] md:text-[28px]" style={{ fontWeight: 500, lineHeight: 1.5, letterSpacing: 0, textAlign: 'center', color: '#e6e6e6', maxWidth: '1537px', textTransform: 'uppercase' }}>
          Я создаю формы не ради форм. Мне важно, чтобы каждый проект говорил.<br />
          Без лишнего шума. Точно. От всего сердца.
        </p>
      </div>
    </section>
  )
}

// ─── About ───────────────────────────────────────────────────────────────────

function AboutSection() {
  return (
    <section className="w-full" style={{ backgroundColor: '#0e1012', boxSizing: 'border-box' }}>
      <div
        style={{
          paddingTop: 'clamp(64px, 7.03vw, 135px)',
          paddingBottom: 'clamp(48px, 5.42vw, 104px)',
          paddingLeft: 'clamp(24px, 9.84vw, 189px)',
          paddingRight: 'clamp(24px, 9.58vw, 184px)',
        }}
      >
        <div className="flex flex-col lg:flex-row" style={{ gap: '32px', alignItems: 'flex-start' }}>

          {/* Left: text block */}
          <div className="flex-1 min-w-0" style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>

            {/* Section label */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '64px' }}>
              <span style={{ width: '16px', height: '16px', borderRadius: '50%', backgroundColor: '#8f1d1d', flexShrink: 0, display: 'inline-block' }} />
              <span style={{ color: '#e6e6e6', fontSize: '24px', fontWeight: 700, lineHeight: '36px' }}>ОБО МНЕ</span>
            </div>

            {/* Texts */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              <h2
                className="text-[32px] md:text-[42px] xl:text-[54px]"
                style={{ color: '#e6e6e6', fontWeight: 700, lineHeight: 1.5, margin: 0, textTransform: 'uppercase' }}
              >
                Привет, я Ирина Беленева
              </h2>
              <p
                className="text-[20px] md:text-[24px] xl:text-[28px]"
                style={{ color: '#e6e6e6', fontWeight: 500, lineHeight: 1.5, margin: 0, textTransform: 'uppercase' }}
              >
                педагог, режиссёр, креативный директор
              </p>
              <p
                className="text-[18px] md:text-[20px] xl:text-[24px]"
                style={{ color: '#e6e6e6', fontWeight: 400, lineHeight: 1.5, margin: 0 }}
              >
                Я разрабатываю концепции и структуру проектов в кино и видеопроизводстве.{' '}
                Работаю индивидуально и с командами.{' '}
                Моя цель — глубина, ясность и результат.
              </p>
            </div>

            {/* Button */}
            <Link
              to="/about"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#e6e6e6',
                color: '#0e1012',
                fontSize: '14px',
                fontWeight: 700,
                textTransform: 'uppercase',
                padding: '16px 32px',
                borderRadius: '32px',
                textDecoration: 'none',
                alignSelf: 'flex-start',
              }}
            >
              подробнее обо мне
            </Link>
          </div>

          {/* Right: photo */}
          <div
            className="w-full lg:w-[38%]"
            style={{ flexShrink: 0, borderRadius: '32px', overflow: 'hidden', aspectRatio: '602 / 757' }}
          >
            <img
              src={iraPhoto}
              alt="Ирина Беленева"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Film Slider ──────────────────────────────────────────────────────────────
// Figma layout: [←arrow 185px] [image 1300px] [arrow→ 185px]
// Arrows are flex siblings of the image — NOT overlaid on it.
// Slides animate via translateX on the inner strip.

const FILM_ARROW_W = 'clamp(40px, 9.6vw, 185px)' // 185/1920 ≈ 9.6%

function FilmSlider() {
  const [idx, setIdx] = useState(0)
  const prev = () => setIdx(i => (i - 1 + films.length) % films.length)
  const next = () => setIdx(i => (i + 1) % films.length)

  return (
    <div>
      {/* ── Row: [←] [slides] [→] ── */}
      <div style={{ display: 'flex', alignItems: 'stretch' }}>

        {/* Arrow left — hidden on mobile */}
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

        {/* Slides area */}
        <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: '24px' }}>

          {/* Image strip — mobile: horizontal scroll, desktop: translateX */}
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

                  {/* Watch button */}
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

          {/* Film title */}
          <p style={{ color: '#e6e6e6', fontSize: 'clamp(16px, 1.46vw, 28px)', fontWeight: 500, lineHeight: 1.5, textAlign: 'center', margin: 0 }}>
            {films[idx].title} ({films[idx].year})
          </p>

          {/* Dots */}
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

        {/* Arrow right — hidden on mobile */}
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

// ─── Editing Card ─────────────────────────────────────────────────────────────

function EditingCard({ work, buttonText = 'ЧИТАТЬ' }: { work: { slug: string; title: string; year: string; city: string; role: string; thumbnail: string }; buttonText?: string }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      {/* Year / city */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
        <span style={{ color: '#b3b3b3', fontSize: '18px', fontWeight: 400, lineHeight: '27px' }}>{work.year}</span>
        <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#8f1d1d', display: 'inline-block', flexShrink: 0 }} />
        <span style={{ color: '#b3b3b3', fontSize: '18px', fontWeight: 400, lineHeight: '27px' }}>{work.city}</span>
      </div>

      {/* Thumbnail with read button */}
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

      {/* Title + description */}
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

// ─── Editing Slider ───────────────────────────────────────────────────────────
// Figma: arrows flank only the image area; year/city + title/desc are outside arrows

const EDIT_ARROW_W = 'clamp(32px, 5.2vw, 100px)'

function EditingSlider() {
  const [idx, setIdx] = useState(0)
  const total = editingSliderWorks.length
  const prev = () => setIdx(i => (i - 1 + total) % total)
  const next = () => setIdx(i => (i + 1) % total)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      {/* Year / city */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
        <span style={{ color: '#b3b3b3', fontSize: '18px', fontWeight: 400, lineHeight: '27px' }}>{editingSliderWorks[idx].year}</span>
        <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#8f1d1d', display: 'inline-block', flexShrink: 0 }} />
        <span style={{ color: '#b3b3b3', fontSize: '18px', fontWeight: 400, lineHeight: '27px' }}>{editingSliderWorks[idx].city}</span>
      </div>

      {/* [←] [image] [→] */}
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

      {/* Title + description */}
      <div className="md:px-[clamp(32px,5.2vw,100px)]" style={{ display: 'flex', flexDirection: 'column', gap: '16px', textAlign: 'center' }}>
        <p style={{ color: '#e6e6e6', fontSize: '28px', fontWeight: 500, lineHeight: 1.5, margin: 0 }}>
          {editingSliderWorks[idx].title}
        </p>
        <p style={{ color: '#b3b3b3', fontSize: '18px', fontWeight: 400, lineHeight: '27px', margin: 0 }}>
          {editingSliderWorks[idx].role}
        </p>
      </div>

      {/* Dots */}
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

// ─── Portfolio section ────────────────────────────────────────────────────────

function PortfolioSection() {
  return (
    <section className="w-full" style={{ backgroundColor: '#0e1012' }}>
      <div
        style={{
          paddingTop: 'clamp(64px, 5.72vw, 110px)',
          paddingBottom: 'clamp(64px, 5.72vw, 110px)',
          paddingLeft: 'clamp(24px, 9.84vw, 189px)',
          paddingRight: 'clamp(24px, 9.58vw, 184px)',
        }}
      >
        <SectionLabel text="ПОРТФОЛИО" />

        {/* ── КИНО ── */}
        <div style={{ marginTop: '80px', display: 'flex', flexDirection: 'column', gap: '64px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', textAlign: 'center' }}>
            <h3 className="text-[32px] md:text-[42px] xl:text-[54px]" style={{ color: '#e6e6e6', fontWeight: 700, lineHeight: 1.5, margin: 0 }}>
              КИНО
            </h3>
            <p className="text-[20px] md:text-[26px] xl:text-[32px]" style={{ color: '#e6e6e6', fontWeight: 500, lineHeight: 1.5, margin: 0 }}>
              Я создаю формы не ради форм. Мне важно, чтобы каждый проект говорил.<br />
              Без лишнего шума. Точно. От всего сердца.
            </p>
          </div>
          <FilmSlider />
        </div>

        {/* ── РЕДАКТУРА ── */}
        <div style={{ marginTop: '80px', display: 'flex', flexDirection: 'column', gap: '64px' }}>
          <h3 className="text-[32px] md:text-[42px] xl:text-[54px]" style={{ color: '#e6e6e6', fontWeight: 700, lineHeight: 1.5, margin: 0, textAlign: 'center' }}>
            РЕДАКТУРА
          </h3>
          {/* Slider (left, ~61%) + Standalone card (right, ~37%) */}
          <div className="flex flex-col lg:flex-row" style={{ gap: '25px', alignItems: 'flex-start' }}>
            <div style={{ width: '61.3%', flexShrink: 0 }} className="max-lg:!w-full">
              <EditingSlider />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <EditingCard work={editingStandaloneWork} />
            </div>
          </div>
        </div>

        {/* ── ЮТУБ ── */}
        <div style={{ marginTop: '80px', display: 'flex', flexDirection: 'column', gap: '64px' }}>
          <h3 className="text-[32px] md:text-[42px] xl:text-[54px]" style={{ color: '#e6e6e6', fontWeight: 700, lineHeight: 1.5, margin: 0, textAlign: 'center' }}>
            ЮТУБ
          </h3>
          {youtubeWorks.map(work => (
            <div key={work.slug} style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {/* Year / city */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
                <span style={{ color: '#b3b3b3', fontSize: '18px', fontWeight: 400, lineHeight: '27px' }}>{work.year}</span>
                <span style={{ width: '16px', height: '16px', borderRadius: '50%', backgroundColor: '#8f1d1d', display: 'inline-block', flexShrink: 0 }} />
                <span style={{ color: '#b3b3b3', fontSize: '18px', fontWeight: 400, lineHeight: '27px' }}>{work.city}</span>
              </div>
              {/* Video frame */}
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
  )
}

// ─── Courses ─────────────────────────────────────────────────────────────────

function CoursesSection() {
  return (
    <section className="w-full" style={{ backgroundColor: '#0e1012' }}>
      <div
        style={{
          paddingTop: 'clamp(64px, 5.72vw, 110px)',
          paddingBottom: 'clamp(64px, 5.72vw, 110px)',
          paddingLeft: 'clamp(24px, 9.84vw, 189px)',
          paddingRight: 'clamp(24px, 9.58vw, 184px)',
        }}
      >
        <SectionLabel text="КУРСЫ" />

        <div style={{ maxWidth: '1540px', marginTop: '64px', display: 'flex', flexDirection: 'column', gap: '64px' }}>
          <p className="text-[18px] md:text-[28px]" style={{ color: '#e6e6e6', fontWeight: 400, lineHeight: 1.5, margin: 0, textTransform: 'uppercase' }}>
            я основала дальневосточную школу кино (двшк), где  мы учимся владеть своим телом, эмоциями, посылом, чтобы грамотно формулировать задачи и предлагать множество вариантов актерской игры
          </p>

          <div className="flex flex-col lg:flex-row" style={{ gap: '24px' }}>
            {courses.map(course => (
              <div
                key={course.id}
                style={{
                  flex: 1,
                  backgroundColor: '#313131',
                  borderRadius: '32px',
                  padding: '32px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '64px',
                }}
              >
                <p style={{ color: '#b3b3b3', fontSize: '18px', fontWeight: 400, lineHeight: '27px', margin: 0, textTransform: 'uppercase' }}>
                  {course.subtitle}
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', flex: 1 }}>
                  <h3 style={{ color: '#e6e6e6', fontSize: '28px', fontWeight: 500, lineHeight: '42px', margin: 0, textTransform: 'uppercase' }}>
                    {course.title}
                  </h3>
                  <p style={{ color: '#e6e6e6', fontSize: '18px', fontWeight: 400, lineHeight: '27px', margin: 0 }}>
                    {course.description}
                  </p>
                </div>
                <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
                  {course.buttons.map(btn => (
                    <Link
                      key={btn.label}
                      to="/courses"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
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
                      {btn.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <Layout showReviews>
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <CoursesSection />
    </Layout>
  )
}
