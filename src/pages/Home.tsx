import { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import SectionLabel from '../components/ui/SectionLabel'
import Button from '../components/ui/Button'
import { films, editingWorks, youtubeWorks } from '../data/films'
import { courses } from '../data/courses'
import heroBg from '../assets/hero-bg.png'
import logo from '../assets/logo.png'
import iraPhoto from '../assets/ira-photo.png'

// ─── Hero ────────────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#0e1012]/60" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0e1012]/30 via-transparent to-[#0e1012]/80" />

      {/* Content — centered */}
      <div className="relative z-10 flex flex-col items-center text-center px-6" style={{ gap: '64px' }}>
        <img
          src={logo}
          alt="Beleneva Cinema"
          className="w-full max-w-[320px] md:max-w-[600px] lg:max-w-[900px]"
        />
        <p
          className="text-[#e6e6e6] max-w-[1537px] w-full"
          style={{ fontSize: '28px', fontWeight: 500, lineHeight: '42px', letterSpacing: 0, textAlign: 'center' }}
        >
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
    <section className="w-full py-20 px-8 md:px-16">
      <div className="max-w-[1600px] mx-auto">
        <SectionLabel text="ОБО МНЕ" className="mb-10" />
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          {/* Text */}
          <div className="flex-1 max-w-2xl">
            <h2 className="text-[#e6e6e6] text-4xl md:text-5xl font-bold leading-tight mb-3">
              Привет, я Ирина Беленева
            </h2>
            <p className="text-[#b3b3b3] text-sm font-bold tracking-widest uppercase mb-8">
              ПЕДАГОГ, РЕЖИССЕР, КРЕАТИВНЫЙ ДИРЕКТОР
            </p>
            <div className="flex flex-col gap-3 text-[#e6e6e6] text-base leading-relaxed mb-10">
              <p>Я разрабатываю концепции и структуру проектов в кино и видеопроизводстве.</p>
              <p>Работаю индивидуально и с командами.</p>
              <p>Моя цель — глубина, ясность и результат.</p>
            </div>
            <Button as="a" href="/about">
              ПОДРОБНЕЕ ОБО МНЕ
            </Button>
          </div>

          {/* Photo */}
          <div className="w-full lg:w-[400px] aspect-[3/4] shrink-0 overflow-hidden">
            <img
              src={iraPhoto}
              alt="Ирина Беленева"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Portfolio ────────────────────────────────────────────────────────────────

function FilmSlider() {
  const cinemaFilms = films.filter(f => f.category === 'cinema')
  const [idx, setIdx] = useState(0)

  const prev = () => setIdx(i => (i - 1 + cinemaFilms.length) % cinemaFilms.length)
  const next = () => setIdx(i => (i + 1) % cinemaFilms.length)

  const film = cinemaFilms[idx]

  return (
    <div className="relative flex items-center gap-4">
      {/* Arrow left */}
      <button
        onClick={prev}
        className="shrink-0 w-10 h-10 flex items-center justify-center text-[#e6e6e6] hover:text-white text-2xl transition-colors"
      >
        ‹
      </button>

      {/* Film card */}
      <Link
        to={`/films/${film.slug}`}
        className="flex-1 relative aspect-video bg-[#1a1c1f] overflow-hidden group"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full border-2 border-[#e6e6e6] flex items-center justify-center group-hover:bg-[#e6e6e6]/10 transition-colors">
            <span className="text-[#e6e6e6] text-2xl ml-1">▶</span>
          </div>
        </div>
        <div className="absolute bottom-4 left-0 right-0 flex justify-center">
          <span className="bg-[#0e1012]/80 text-[#e6e6e6] text-xs font-bold tracking-widest uppercase px-4 py-2">
            смотреть подробнее
          </span>
        </div>
      </Link>

      {/* Arrow right */}
      <button
        onClick={next}
        className="shrink-0 w-10 h-10 flex items-center justify-center text-[#e6e6e6] hover:text-white text-2xl transition-colors"
      >
        ›
      </button>
    </div>
  )
}

function PortfolioSection() {
  return (
    <section className="w-full py-20 px-8 md:px-16">
      <div className="max-w-[1600px] mx-auto">
        <SectionLabel text="ПОРТФОЛИО" className="mb-14" />

        {/* КИНО */}
        <div className="mb-20">
          <h3 className="text-[#e6e6e6] text-3xl md:text-4xl font-bold text-center tracking-widest uppercase mb-4">
            КИНО
          </h3>
          <p className="text-[#e6e6e6] text-center text-sm leading-relaxed uppercase tracking-wide max-w-2xl mx-auto mb-10">
            Я создаю формы не ради форм. Мне важно, чтобы каждый проект говорил.
            Без лишнего шума. Точно. От всего сердца.
          </p>
          <div className="max-w-3xl mx-auto">
            <FilmSlider />
            <p className="text-center text-[#e6e6e6] text-sm font-bold tracking-widest uppercase mt-4">
              {films.filter(f => f.category === 'cinema')[0].title} ({films.filter(f => f.category === 'cinema')[0].year})
            </p>
          </div>
        </div>

        {/* РЕДАКТУРА */}
        <div className="mb-20">
          <h3 className="text-[#e6e6e6] text-3xl md:text-4xl font-bold text-center tracking-widest uppercase mb-10">
            РЕДАКТУРА
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {editingWorks.map(work => (
              <Link
                key={work.slug}
                to={`/films/${work.slug}`}
                className="group relative aspect-[4/3] bg-[#1a1c1f] overflow-hidden"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full border border-[#e6e6e6] flex items-center justify-center group-hover:bg-[#e6e6e6]/10 transition-colors">
                    <span className="text-[#e6e6e6] text-sm ml-0.5">▶</span>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0e1012]/90 p-4">
                  <p className="text-[#e6e6e6] text-sm font-bold tracking-wide uppercase">
                    {work.title}
                  </p>
                  <p className="text-[#b3b3b3] text-xs leading-relaxed mt-1 line-clamp-2">
                    {work.role}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* ЮТУБ */}
        <div>
          <h3 className="text-[#e6e6e6] text-3xl md:text-4xl font-bold text-center tracking-widest uppercase mb-10">
            ЮТУБ
          </h3>
          <div className="max-w-4xl mx-auto">
            {youtubeWorks.map(work => (
              <div key={work.slug} className="relative aspect-video bg-[#1a1c1f] overflow-hidden group">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full border-2 border-[#e6e6e6] flex items-center justify-center group-hover:bg-[#e6e6e6]/10 transition-colors">
                    <span className="text-[#e6e6e6] text-2xl ml-1">▶</span>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0e1012]/90 p-6">
                  <div className="flex items-center gap-3 text-[#b3b3b3] text-xs tracking-widest uppercase mb-2">
                    <span>{work.year}</span>
                    <span>·</span>
                    <span>{work.city}</span>
                    <span>·</span>
                    <span>{work.views} просмотров</span>
                  </div>
                  <p className="text-[#e6e6e6] text-base font-bold tracking-wide uppercase">
                    {work.title}
                  </p>
                  <button className="mt-3 flex items-center gap-2 text-[#e6e6e6] text-xs font-bold tracking-widest uppercase hover:text-white transition-colors">
                    <span className="w-5 h-5 rounded-full border border-[#e6e6e6] flex items-center justify-center text-[10px] ml-0.5">▶</span>
                    смотреть лайвер
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Courses ─────────────────────────────────────────────────────────────────

function CoursesSection() {
  return (
    <section className="w-full py-20 px-8 md:px-16">
      <div className="max-w-[1600px] mx-auto">
        <SectionLabel text="КУРСЫ" className="mb-8" />
        <p className="text-[#e6e6e6] text-base leading-relaxed max-w-3xl mb-12 uppercase tracking-wide">
          я основала кино-школу двшк на дальнем востоке, где мы учимся владеть своим телом,
          эмоциями, посылом, чтобы грамотно формулировать задачи и предлагать множество
          вариантов актерской игры
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {courses.map(course => (
            <div key={course.id} className="bg-[#1a1c1f] p-8 flex flex-col gap-4">
              <div>
                <p className="text-[#b3b3b3] text-xs tracking-widest uppercase mb-3">
                  {course.subtitle}
                </p>
                <h3 className="text-[#e6e6e6] text-lg md:text-xl font-bold tracking-wide uppercase leading-snug mb-4">
                  {course.title}
                </h3>
                <p className="text-[#b3b3b3] text-sm leading-relaxed">
                  {course.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-3 mt-auto pt-2">
                {course.buttons.map(btn => (
                  <Button key={btn.label} variant={btn.variant} as="a" href="/courses">
                    {btn.label}
                  </Button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <CoursesSection />
    </Layout>
  )
}
