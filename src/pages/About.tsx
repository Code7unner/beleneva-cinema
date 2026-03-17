import { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import SectionLabel from '../components/ui/SectionLabel'

import aboutHeroBg from '../assets/about-hero-bg.jpg'
import aboutExpTalantino from '../assets/about-exp-talantino.jpg'
import aboutExpFilm from '../assets/about-exp-film.jpg'
import aboutExpCommunity from '../assets/about-exp-community.jpg'
import aboutHobbyDance from '../assets/about-hobby-dance.jpg'
import hobbyYogaVideo from '../assets/hobby-yoga.MP4'
import aboutHobby1 from '../assets/about-hobby-1.jpg'
import aboutHobby2 from '../assets/about-hobby-2.jpg'
import aboutHobby3 from '../assets/about-hobby-3.jpg'
import aboutHobby4 from '../assets/about-hobby-4.jpg'
import aboutDiploma1 from '../assets/about-diploma-1.jpg'
import aboutDiploma2 from '../assets/about-diploma-2.jpg'

// ─── Education data ─────────────────────────────────────────────────────────

const educationItems = [
  {
    years: '2016 - 2019',
    title: 'СПБГИК, Санкт-Петербург',
    description: 'Кафедра документального кино и телефильма',
  },
  {
    years: '2019',
    title: 'Институт Петербурга',
    description: 'экскурсоведение',
  },
  {
    years: '2019 - 2024',
    title: 'ВГИК, Москва',
    description: 'мастерская режиссуры игрового кино \nи телефильма  (В. В. МЕНЬШОВА ДАЛЕЕ С. В. УРСУЛЯКА)',
  },
  {
    years: '2025',
    title: 'Институт развития профессионального образования',
    description: 'повышение квалификации в интеграции \nколледжа креативных индустрий',
  },
]

const diplomaSlides = [
  { image: aboutDiploma1, title: 'ИНСТИТУТ РАЗВИТИЯ ПРОФЕССИОНАЛЬНОГО ОБРАЗОВАНИЯ' },
  { image: aboutDiploma2, title: 'ВГИК, МОСКВА' },
]

const experienceItems = [
  {
    year: '2024',
    city: 'МОСКВА',
    image: aboutExpTalantino,
    title: 'киношкола «Талантино»',
    description: 'Киношкола для детей и подростков, приглашенный педагог.',
  },
  {
    year: '2025',
    city: 'Владивосток',
    image: aboutExpFilm,
    title: 'Короткометражный фильм',
    description: 'Короткометражный фильм для Феско, где я работала кастинг-директором, подбирала всех актеров. Снимал продакшн из Казани "Zilant Pro"',
    hasButton: true,
  },
  {
    year: '2025-2026',
    city: 'ДАЛЬНИЙ ВОСТОК',
    image: aboutExpCommunity,
    title: 'Режиссерское сообщество',
    description: 'Ведение тг-сообщества, организация лекций, мастер-классов, воркшопов. Привлечение сторонних педагогов в рамках образовательной программы, разработка и организация сценарного хакатона, объединение съемочных групп для создания дальневосточного киноальманаха.',
  },
]

const hobbyGallery = [aboutHobby1, aboutHobby2, aboutHobby3, aboutHobby4]

// ─── Hero ────────────────────────────────────────────────────────────────────

function AboutHero() {
  return (
    <section className="relative w-full h-[804px] md:h-screen min-h-[600px] flex items-center justify-center overflow-hidden" style={{ paddingBottom: '10vh' }}>
      <img src={aboutHeroBg} alt="" className="absolute inset-0 w-full h-full object-cover object-center" />
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0,0,0,0.4)' }} />

      {/* Back arrow — mobile only */}
      <Link to="/" className="absolute top-[28px] left-[16px] z-20 w-[44px] h-[44px] flex items-center justify-center md:hidden">
        <svg width="14" height="24" viewBox="0 0 17 30" fill="none">
          <path d="M15 2L2 15L15 28" stroke="#e6e6e6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>

      <div className="relative z-10 flex flex-col items-center text-center px-6" style={{ gap: '24px' }}>
        <h1 className="text-[32px] md:text-[clamp(24px,3.6vw,54px)] md:whitespace-nowrap" style={{ color: '#e6e6e6', fontWeight: 700, lineHeight: 1.5, margin: 0, textTransform: 'uppercase' }}>
          педагог, режиссёр, креативный директор
        </h1>
        <p className="text-[14px] md:text-[18px] max-w-[335px] md:max-w-[973px]" style={{ fontWeight: 400, lineHeight: 1.5, color: '#e6e6e6', textAlign: 'center', margin: 0 }}>
          Я разрабатываю концепции и структуру проектов в кино и видеопроизводстве. Создаю образовательные программы для режиссёров и актёров, провожу мастер-классы и тренинги, направленные на развитие лидерских качеств, харизмы и уверенности.
        </p>
        <Link
          to="/portfolio"
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
          СМОТРЕТЬ РАБОТЫ
        </Link>
      </div>
    </section>
  )
}

// ─── Education ──────────────────────────────────────────────────────────────

function EducationSection() {
  const [slideIdx, setSlideIdx] = useState(0)
  const prevSlide = () => setSlideIdx(i => (i - 1 + diplomaSlides.length) % diplomaSlides.length)
  const nextSlide = () => setSlideIdx(i => (i + 1) % diplomaSlides.length)

  return (
    <section className="w-full" style={{ backgroundColor: '#0e1012' }}>

      {/* Section label with back arrow — back arrow hidden on mobile (moved to hero) */}
      <div className="px-[16px] md:px-[clamp(24px,9.84vw,189px)] md:pr-[clamp(24px,9.58vw,184px)]" style={{ paddingTop: 'clamp(64px, 4.17vw, 80px)' }}>
        <div className="md:flex md:items-center md:gap-[64px]">
          <Link to="/" className="hidden md:flex items-center justify-center" style={{ width: '60px', height: '60px', flexShrink: 0 }}>
            <svg width="18" height="30" viewBox="0 0 17 30" fill="none">
              <path d="M15 2L2 15L15 28" stroke="#e6e6e6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <SectionLabel text="ОБРАЗОВАНИЕ" />
        </div>
      </div>

      {/*
        Figma layout (1920×1026):
        - Handwritten text: pos=(194, 124)
        - Education list:   pos=(1104, 124), 816×894
        - Diploma slider:   pos=(128, 352),  808×550
        Slider bleeds 61px past left padding (189−128=61).
        Education list goes to right edge (1104+816=1920).
      */}
      <div
        className="flex flex-col lg:flex-row px-[16px] md:px-0"
        style={{
          paddingBottom: 'clamp(48px, 4.17vw, 80px)',
          marginTop: 'clamp(64px, 5.2vw, 100px)',
          alignItems: 'flex-start',
        }}
      >
        {/* Left column: handwritten text + diploma slider */}
        <div className="w-full lg:w-[48%] flex-shrink-0 md:pl-[clamp(24px,6.67vw,128px)]">

          {/* Handwritten annotation */}
          <p className="text-[16px] md:text-[20px] -rotate-[8deg] md:-rotate-[12deg] origin-top-left" style={{ fontFamily: 'Caveat, cursive', color: '#e6e6e6', fontWeight: 400, lineHeight: '20px', letterSpacing: '0.25px', margin: 0, whiteSpace: 'pre-line', paddingLeft: 'clamp(0px, 3.44vw, 66px)' }}>
            {'Учиться 9 лет, чтобы ЧТО?!\nГлубина профессии, дисциплина\nи профессиональная выдержка'}
          </p>

          {/* Diploma slider — desktop: arrow slider, mobile: horizontal scroll strip */}

          {/* Desktop arrow slider */}
          <div className="hidden md:flex items-stretch" style={{ marginTop: '40px' }}>
            {/* Left arrow */}
            <button
              onClick={prevSlide}
              aria-label="Предыдущий диплом"
              style={{ width: 'clamp(40px, 5.6vw, 108px)', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'none', border: 'none', cursor: 'pointer' }}
            >
              <svg width="17" height="30" viewBox="0 0 17 30" fill="none">
                <path d="M15 2L2 15L15 28" stroke="#e6e6e6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Slides */}
            <div style={{ flex: 1, minWidth: 0, overflow: 'hidden' }}>
              <div
                style={{
                  display: 'flex',
                  transition: 'transform 0.45s cubic-bezier(0.4, 0, 0.2, 1)',
                  transform: `translateX(-${slideIdx * 100}%)`,
                }}
              >
                {diplomaSlides.map((slide, i) => (
                  <div key={i} style={{ width: '100%', flexShrink: 0, display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    <div style={{ width: '100%', aspectRatio: '594 / 417', borderRadius: '12px', overflow: 'hidden' }}>
                      <img src={slide.image} alt={slide.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <p style={{ color: '#e6e6e6', fontSize: 'clamp(20px, 1.46vw, 28px)', fontWeight: 500, lineHeight: 1.5, margin: 0, textTransform: 'uppercase', textAlign: 'center' }}>
                      {slide.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right arrow */}
            <button
              onClick={nextSlide}
              aria-label="Следующий диплом"
              style={{ width: 'clamp(40px, 5.6vw, 108px)', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'none', border: 'none', cursor: 'pointer' }}
            >
              <svg width="17" height="30" viewBox="0 0 17 30" fill="none">
                <path d="M2 2L15 15L2 28" stroke="#e6e6e6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          {/* Mobile horizontal scroll strip */}
          <div className="mobile-scroll md:hidden flex gap-[12px]" style={{ marginTop: '40px' }}>
            {diplomaSlides.map((slide, i) => (
              <div key={i} className="w-[350px] flex-shrink-0 flex flex-col gap-[12px]">
                <div className="w-full rounded-[10px] overflow-hidden" style={{ aspectRatio: '350 / 262' }}>
                  <img src={slide.image} alt={slide.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <p style={{ color: '#e6e6e6', fontSize: '16px', fontWeight: 500, lineHeight: 1.5, margin: 0, textTransform: 'uppercase', textAlign: 'center' }}>
                  {slide.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right column: education list — 816/1920 ≈ 42.5% of viewport, scrollable if overflows */}
        <div
          className="w-full lg:w-[42.5%] flex-shrink-0 flex flex-col gap-[40px] md:gap-[64px] md:max-h-[80vh] md:overflow-y-auto pr-[16px] mt-[40px] lg:mt-0 education-scroll"
        >
          {educationItems.map((item, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '12px', paddingTop: '12px', paddingBottom: '12px', borderBottom: '0.5px solid #e6e6e6' }}>
              <span className="text-[13px] md:text-[18px]" style={{ color: '#b3b3b3', fontWeight: 400, lineHeight: '27px', textTransform: 'uppercase' }}>
                {item.years}
              </span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <h3 className="text-[15px] md:text-[32px]" style={{ color: '#e6e6e6', fontWeight: 500, lineHeight: 1.5, margin: 0, textTransform: 'uppercase' }}>
                  {item.title}
                </h3>
                <p className="text-[14px] md:text-[18px]" style={{ color: '#b3b3b3', fontWeight: 400, lineHeight: '27px', margin: 0, whiteSpace: 'pre-line' }}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Experience ─────────────────────────────────────────────────────────────

function ExperienceSection() {
  return (
    <section
      className="w-full px-[16px] md:px-0"
      style={{
        backgroundColor: '#0e1012',
        paddingTop: 'clamp(64px, 4.17vw, 80px)',
        paddingBottom: 'clamp(64px, 4.17vw, 80px)',
      }}
    >
      <div className="md:px-[clamp(24px,9.84vw,189px)]">
        <div className="mobile-scroll md:!overflow-hidden flex flex-row" style={{ gap: '24px' }}>
          {experienceItems.map((item, i) => (
            <div key={i} className="w-[350px] md:w-auto flex-shrink-0 md:flex-shrink md:flex-1" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {/* Year / city — centered */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                <span className="text-[13px] md:text-[18px]" style={{ color: '#b3b3b3', fontWeight: 400, lineHeight: '27px', textTransform: 'uppercase' }}>{item.year}</span>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#8f1d1d', display: 'inline-block', flexShrink: 0 }} />
                <span className="text-[13px] md:text-[18px]" style={{ color: '#b3b3b3', fontWeight: 400, lineHeight: '27px', textTransform: 'uppercase' }}>{item.city}</span>
              </div>

              {/* Cover image */}
              <div className="rounded-[20px] md:rounded-[24px] overflow-hidden aspect-[347/341] md:aspect-[508/499]" style={{ position: 'relative', width: '100%' }}>
                <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                {item.hasButton && (
                  <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Link
                      to="/portfolio"
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
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M8 5L19 12L8 19V5Z" fill="#0e1012" stroke="#0e1012" strokeWidth="1.5" strokeLinejoin="round" />
                      </svg>
                      СМОТРЕТЬ фильм
                    </Link>
                  </div>
                )}
              </div>

              {/* Title + description */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginTop: '12px', textAlign: 'center' }}>
                <h3 className="text-[16px] md:text-[28px]" style={{ color: '#e6e6e6', fontWeight: 500, lineHeight: 1.5, margin: 0, textTransform: 'uppercase' }}>
                  {item.title}
                </h3>
                <p className="text-[14px] md:text-[18px]" style={{ color: '#b3b3b3', fontWeight: 400, lineHeight: '27px', margin: 0 }}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Hobby ──────────────────────────────────────────────────────────────────

function HobbySection() {
  return (
    <section
      className="w-full px-[16px] md:px-0"
      style={{
        backgroundColor: '#0e1012',
        paddingTop: 'clamp(64px, 4.17vw, 80px)',
        paddingBottom: 'clamp(64px, 4.17vw, 80px)',
      }}
    >
      <div className="md:px-[clamp(24px,9.84vw,189px)]">
        <SectionLabel text="ХОББИ" />

        <div className="mt-12 md:mt-16" style={{ display: 'flex', flexDirection: 'column', gap: '64px', maxWidth: '1594px', textAlign: 'center' }}>
          {/* Dance video image with text overlay */}
          <div
            className="rounded-none md:rounded-[24px] -mx-[16px] md:mx-0"
            style={{
              position: 'relative',
              width: 'auto',
              aspectRatio: '1594 / 739',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <video
              src={hobbyYogaVideo}
              autoPlay
              loop
              muted
              playsInline
              poster={aboutHobbyDance}
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(14,16,18,0.5)' }} />
            <p className="text-[22px] md:text-[32px]" style={{ position: 'relative', zIndex: 1, color: '#e6e6e6', fontWeight: 500, lineHeight: 1.5, margin: 0, textTransform: 'uppercase', textAlign: 'center', padding: '0 clamp(24px, 5vw, 80px)' }}>
              Я изучаю йогу, провожу мастер-классы<br />по растяжке, расслаблению и медитации
            </p>
          </div>

          {/* Description text */}
          <p className="text-[15px] md:text-[28px]" style={{ color: '#e6e6e6', fontWeight: 400, lineHeight: 1.5, margin: 0, textTransform: 'uppercase' }}>
            У меня 10 лет опыта в классическом балете, пластическом театре в Санкт-Петербурге и SMStretching в Москве.
          </p>

          {/* Gallery — mobile: horizontal scroll, desktop: grid */}
          <div className="mobile-scroll md:!overflow-hidden flex md:grid md:grid-cols-4 gap-[8px] md:gap-[10px] -mx-[16px] px-[16px] md:mx-0 md:px-0">
            {hobbyGallery.map((img, i) => (
              <div key={i} className="w-[350px] h-[360px] md:w-auto md:h-auto flex-shrink-0 md:flex-shrink rounded-[10px] md:rounded-[12px] overflow-hidden md:aspect-[391/402]">
                <img src={img} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>

          {/* Closing text */}
          <p className="text-[15px] md:text-[28px]" style={{ color: '#e6e6e6', fontWeight: 400, lineHeight: 1.5, margin: 0, textTransform: 'uppercase' }}>
            Эти практики помогают мне сохранять внимание, концентрацию и устойчивость в профессии, и я делюсь ими с учениками и командами в проектах.
          </p>
        </div>
      </div>
    </section>
  )
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function About() {
  return (
    <Layout>
      <AboutHero />
      <EducationSection />
      <ExperienceSection />
      <HobbySection />
    </Layout>
  )
}
