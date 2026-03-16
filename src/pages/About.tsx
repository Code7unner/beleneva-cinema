import { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import SectionLabel from '../components/ui/SectionLabel'

import aboutHeroBg from '../assets/about-hero-bg.jpg'
import aboutExpTalantino from '../assets/about-exp-talantino.jpg'
import aboutExpFilm from '../assets/about-exp-film.jpg'
import aboutExpCommunity from '../assets/about-exp-community.jpg'
import aboutHobbyDance from '../assets/about-hobby-dance.jpg'
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
    <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden" style={{ paddingBottom: '10vh' }}>
      <img src={aboutHeroBg} alt="" className="absolute inset-0 w-full h-full object-cover object-center" />
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0,0,0,0.4)' }} />

      <div className="relative z-10 flex flex-col items-center text-center px-6" style={{ gap: '24px' }}>
        <h1 className="md:whitespace-nowrap" style={{ color: '#e6e6e6', fontSize: 'clamp(24px, 3.6vw, 54px)', fontWeight: 700, lineHeight: 1.5, margin: 0, textTransform: 'uppercase' }}>
          педагог, режиссёр, креативный директор
        </h1>
        <p style={{ fontSize: '18px', fontWeight: 400, lineHeight: 1.5, color: '#e6e6e6', maxWidth: '973px', textAlign: 'center', margin: 0 }}>
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

      {/* Section label with back arrow — within normal padding */}
      <div
        style={{
          paddingLeft: 'clamp(24px, 9.84vw, 189px)',
          paddingRight: 'clamp(24px, 9.58vw, 184px)',
          paddingTop: 'clamp(48px, 4vw, 80px)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '64px' }}>
          <Link to="/" style={{ width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
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
        className="flex flex-col lg:flex-row"
        style={{
          paddingLeft: 'clamp(24px, 6.67vw, 128px)',
          paddingRight: 0,
          paddingBottom: 'clamp(48px, 4vw, 80px)',
          marginTop: '100px',
          gap: 'clamp(32px, 5vw, 96px)',
          alignItems: 'flex-start',
        }}
      >
        {/* Left column: handwritten text + diploma slider — wider to match Figma diploma size */}
        <div style={{ width: '48%', flexShrink: 0 }} className="max-lg:!w-full max-lg:!px-6">

          {/* Handwritten annotation */}
          <p style={{ fontFamily: 'Caveat, cursive', color: '#e6e6e6', fontSize: '20px', fontWeight: 400, lineHeight: '20px', letterSpacing: '0.25px', margin: 0, whiteSpace: 'pre-line', paddingLeft: 'clamp(0px, 3.44vw, 66px)', transform: 'rotate(-12deg)', transformOrigin: 'top left' }}>
            {'Учиться 9 лет, чтобы ЧТО?!\nГлубина профессии, дисциплина\nи профессиональная выдержка'}
          </p>

          {/* Diploma slider: [←] [slide] [→] — margin-top matches Figma gap (352−124−118=110px) */}
          <div style={{ display: 'flex', alignItems: 'stretch', marginTop: '40px' }}>
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
        </div>

        {/* Right column: education list — 816/1920 ≈ 42.5% of viewport, scrollable if overflows */}
        <div
          style={{ width: '42.5%', flexShrink: 0, display: 'flex', flexDirection: 'column', gap: '64px', maxHeight: '80vh', overflowY: 'auto', paddingRight: '16px' }}
          className="max-lg:!w-full max-lg:!px-6 education-scroll"
        >
          {educationItems.map((item, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '12px', paddingTop: '12px', paddingBottom: '12px', borderBottom: '0.5px solid #e6e6e6' }}>
              <span style={{ color: '#b3b3b3', fontSize: '18px', fontWeight: 400, lineHeight: '27px', textTransform: 'uppercase' }}>
                {item.years}
              </span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <h3 style={{ color: '#e6e6e6', fontSize: '32px', fontWeight: 500, lineHeight: 1.5, margin: 0, textTransform: 'uppercase' }}>
                  {item.title}
                </h3>
                <p style={{ color: '#b3b3b3', fontSize: '18px', fontWeight: 400, lineHeight: '27px', margin: 0, whiteSpace: 'pre-line' }}>
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
      className="w-full"
      style={{
        backgroundColor: '#0e1012',
        paddingLeft: 'clamp(24px, 9.84vw, 189px)',
        paddingRight: 'clamp(24px, 9.58vw, 184px)',
        paddingBottom: 'clamp(64px, 5.72vw, 110px)',
      }}
    >
      <div className="mobile-scroll flex flex-row lg:flex-row" style={{ gap: '32px' }}>
        {experienceItems.map((item, i) => (
          <div key={i} className="min-w-[80vw] md:min-w-0" style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {/* Year / city — centered */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
              <span style={{ color: '#b3b3b3', fontSize: '18px', fontWeight: 400, lineHeight: '27px', textTransform: 'uppercase' }}>{item.year}</span>
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#8f1d1d', display: 'inline-block', flexShrink: 0 }} />
              <span style={{ color: '#b3b3b3', fontSize: '18px', fontWeight: 400, lineHeight: '27px', textTransform: 'uppercase' }}>{item.city}</span>
            </div>

            {/* Cover image */}
            <div style={{ position: 'relative', width: '100%', aspectRatio: '508 / 499', borderRadius: '24px', overflow: 'hidden' }}>
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
              <h3 style={{ color: '#e6e6e6', fontSize: '28px', fontWeight: 500, lineHeight: 1.5, margin: 0, textTransform: 'uppercase' }}>
                {item.title}
              </h3>
              <p style={{ color: '#b3b3b3', fontSize: '18px', fontWeight: 400, lineHeight: '27px', margin: 0 }}>
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

// ─── Hobby ──────────────────────────────────────────────────────────────────

function HobbySection() {
  return (
    <section
      className="w-full"
      style={{
        backgroundColor: '#0e1012',
        paddingTop: 'clamp(64px, 5.72vw, 110px)',
        paddingBottom: 'clamp(64px, 5.72vw, 110px)',
        paddingLeft: 'clamp(24px, 9.84vw, 189px)',
        paddingRight: 'clamp(24px, 9.58vw, 184px)',
      }}
    >
      <SectionLabel text="ХОББИ" />

      <div style={{ marginTop: '64px', display: 'flex', flexDirection: 'column', gap: '64px', maxWidth: '1594px', textAlign: 'center' }}>
        {/* Dance video image with text overlay */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            aspectRatio: '1594 / 739',
            borderRadius: '24px',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img src={aboutHobbyDance} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(14,16,18,0.5)' }} />
          <p className="text-[20px] md:text-[32px]" style={{ position: 'relative', zIndex: 1, color: '#e6e6e6', fontWeight: 500, lineHeight: 1.5, margin: 0, textTransform: 'uppercase', textAlign: 'center', padding: '0 clamp(24px, 5vw, 80px)' }}>
            Я изучаю йогу, провожу мастер-классы<br />по растяжке, расслаблению и медитации
          </p>
        </div>

        {/* Description text */}
        <p className="text-[18px] md:text-[28px]" style={{ color: '#e6e6e6', fontWeight: 400, lineHeight: 1.5, margin: 0, textTransform: 'uppercase' }}>
          У меня 10 лет опыта в классическом балете, пластическом театре в Санкт-Петербурге и SMStretching в Москве.
        </p>

        {/* Gallery 4 images */}
        <div className="grid grid-cols-2 lg:grid-cols-4" style={{ gap: '10px' }}>
          {hobbyGallery.map((img, i) => (
            <div key={i} style={{ aspectRatio: '391 / 402', borderRadius: '12px', overflow: 'hidden' }}>
              <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          ))}
        </div>

        {/* Closing text */}
        <p className="text-[18px] md:text-[28px]" style={{ color: '#e6e6e6', fontWeight: 400, lineHeight: 1.5, margin: 0, textTransform: 'uppercase' }}>
          Эти практики помогают мне сохранять внимание, концентрацию и устойчивость в профессии, и я делюсь ими с учениками и командами в проектах.
        </p>
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
