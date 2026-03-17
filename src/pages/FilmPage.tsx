import { useParams, Link } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import SectionLabel from '../components/ui/SectionLabel'
import PlayButton from '../components/ui/PlayButton'
import { films } from '../data/films'

import filmNsvHero from '../assets/film-nsv-hero.jpg'
import filmNsvBts1 from '../assets/film-nsv-bts-1.jpg'
import filmNsvBts2 from '../assets/film-nsv-bts-2.jpg'
import filmNsvBts3 from '../assets/film-nsv-bts-3.jpg'
import filmNsvBts4 from '../assets/film-nsv-bts-4.jpg'
import filmOtherZamkadny from '../assets/film-other-zamkadny.jpg'
import filmOtherPrezhde from '../assets/film-other-prezhde.jpg'
import filmOtherSanya from '../assets/film-other-sanya.jpg'

import filmSanyaHero from '../assets/film-sanya-hero.jpg'
import filmSanyaBts1 from '../assets/film-sanya-bts-1.jpg'
import filmSanyaBts2 from '../assets/film-sanya-bts-2.jpg'
import filmSanyaBts3 from '../assets/film-sanya-bts-3.jpg'
import filmSanyaBts4 from '../assets/film-sanya-bts-4.jpg'
import filmOtherNsv from '../assets/film-other-nsv.jpg'

import filmZamkadnyHero from '../assets/film-zamkadny-hero.jpg'
import filmZamkadnyBts1 from '../assets/film-zamkadny-bts-1.jpg'
import filmZamkadnyBts2 from '../assets/film-zamkadny-bts-2.jpg'
import filmZamkadnyBts3 from '../assets/film-zamkadny-bts-3.jpg'

import filmPrezhdeHero from '../assets/film-prezhde-hero.jpg'
import filmPrezhdeBts1 from '../assets/film-prezhde-bts-1.jpg'
import filmPrezhdeBts2 from '../assets/film-prezhde-bts-2.jpg'
import filmPrezhdeBts3 from '../assets/film-prezhde-bts-3.jpg'
import filmPrezhdeBts4 from '../assets/film-prezhde-bts-4.jpg'

const filmPages: Record<string, {
  hero: string
  description: string
  btsPhotos: string[]
  otherWorks: { slug: string; title: string; image: string }[]
  watchLabel?: string
  watchUrl?: string
}> = {
  'zamkadny-barysh': {
    hero: filmZamkadnyHero,
    description: 'Фильм о Дальнем Востоке, браконьерах и уезжающей молодёжи.',
    watchLabel: 'СМОТРЕТЬ ФИЛЬМ',
    btsPhotos: [filmZamkadnyBts1, filmZamkadnyBts2, filmZamkadnyBts3, filmOtherZamkadny],
    otherWorks: [
      { slug: 'ne-snimayte-v-cheloveka', title: '«Не снимайте в человека»', image: filmOtherNsv },
      { slug: 'sanya', title: '«Саня»', image: filmOtherSanya },
      { slug: 'prezhde-chem-uyti', title: '«Прежде, чем уйти»', image: filmOtherPrezhde },
    ],
  },
  'ne-snimayte-v-cheloveka': {
    hero: filmNsvHero,
    description: 'Во время экскурсии по крыше падает человек. На место происшествия выезжает съемочная группа во главе с репортером Яной. Их цель - снять разоблачающий репортаж о деятельности нелегальных экскурсоводов, но все меняется, когда Яна узнает, что в падении человека виноват отнюдь не гид. Проект является грантополучателем РОСМОЛОДЕЖЬ на экономическом форуме "Таргим" 2023.',
    watchLabel: 'СМОТРЕТЬ ТРЕЙЛЕР',
    watchUrl: 'https://www.youtube.com/watch?v=XwvhDVqq_oQ',
    btsPhotos: [filmNsvBts1, filmNsvBts2, filmNsvBts3, filmNsvBts4],
    otherWorks: [
      { slug: 'zamkadny-barysh', title: '«Замкадный барыш»', image: filmOtherZamkadny },
      { slug: 'prezhde-chem-uyti', title: '«Прежде, чем уйти»', image: filmOtherPrezhde },
      { slug: 'sanya', title: '«Саня»', image: filmOtherSanya },
    ],
  },
  'prezhde-chem-uyti': {
    hero: filmPrezhdeHero,
    description: 'Игровой короткометражный фильм, 22 мин., о бабушке, которая расстреляла бандитов.',
    watchLabel: 'СМОТРЕТЬ ФИЛЬМ',
    btsPhotos: [filmPrezhdeBts1, filmPrezhdeBts2, filmPrezhdeBts3, filmPrezhdeBts4],
    otherWorks: [
      { slug: 'zamkadny-barysh', title: '«Замкадный барыш»', image: filmOtherZamkadny },
      { slug: 'ne-snimayte-v-cheloveka', title: '«Не снимайте в человека»', image: filmOtherNsv },
      { slug: 'sanya', title: '«Саня»', image: filmOtherSanya },
    ],
  },
  'sanya': {
    hero: filmSanyaHero,
    description: 'Адаптация пьесы «Плач в пригоршню» В. Гуркина.',
    watchLabel: 'СМОТРЕТЬ ФИЛЬМ',
    btsPhotos: [filmSanyaBts1, filmSanyaBts2, filmSanyaBts3, filmSanyaBts4],
    otherWorks: [
      { slug: 'zamkadny-barysh', title: '«Замкадный барыш»', image: filmOtherZamkadny },
      { slug: 'prezhde-chem-uyti', title: '«Прежде, чем уйти»', image: filmOtherPrezhde },
      { slug: 'ne-snimayte-v-cheloveka', title: '«Не снимайте в человека»', image: filmOtherNsv },
    ],
  },
}

export default function FilmPage() {
  const { slug } = useParams()
  const film = films.find(f => f.slug === slug)

  if (!film) {
    return (
      <Layout>
        <div className="px-8 md:px-16 py-20 text-[#e6e6e6]">Фильм не найден</div>
      </Layout>
    )
  }

  const pageData = slug ? filmPages[slug] : undefined

  return (
    <Layout>
      <section
        className="w-full bg-[#0e1012]"
        style={{
          paddingTop: 'clamp(64px, 5.2vw, 100px)',
          paddingLeft: 'clamp(16px, 8.49vw, 163px)',
          paddingRight: 'clamp(16px, 8.49vw, 163px)',
          paddingBottom: 'clamp(64px, 4.17vw, 80px)',
        }}
      >

        {/* Back arrow + КИНО label */}
        {/* Mobile: stacked vertically, Desktop: inline */}
        <div className="flex flex-col gap-[16px] mb-[48px] md:flex-row md:items-center md:gap-[46px] md:mb-[80px]">
          <Link to="/portfolio" className="w-[44px] h-[44px] md:w-[60px] md:h-[60px] flex items-center justify-center shrink-0">
            <svg width="18" height="30" viewBox="0 0 17 30" fill="none">
              <path d="M15 2L2 15L15 28" stroke="#e6e6e6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <SectionLabel text="КИНО" />
        </div>

        {/* Hero card with background image */}
        <div className="flex flex-col md:block">
          {/* Mobile hero: full-width, no border-radius, 512px height, trailer button at bottom-center */}
          <div
            className="block md:hidden relative h-[512px] overflow-hidden"
            style={{
              width: '100vw',
              marginLeft: 'calc(-1 * clamp(16px, 8.49vw, 163px))',
            }}
          >
            <img
              src={pageData?.hero || film.slide}
              alt={film.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent 60%)' }} />
            {/* Trailer button at bottom-center */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
              <a
                href={pageData?.watchUrl || '#'}
                className="inline-flex items-center gap-[10px] bg-[#e6e6e6] text-[#0e1012] text-[14px] font-bold uppercase px-8 py-4 rounded-full no-underline whitespace-nowrap"
              >
                <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
                  <path d="M1 1.5L11 7L1 12.5V1.5Z" fill="#0e1012" stroke="#0e1012" strokeWidth="1.5" strokeLinejoin="round" />
                </svg>
                {pageData?.watchLabel || 'СМОТРЕТЬ ТРЕЙЛЕР'}
              </a>
            </div>
          </div>

          {/* Desktop hero: with border-radius, title+description inside */}
          <div
            className="hidden md:flex aspect-[1594/739]"
            style={{
              position: 'relative',
              width: '100%',
              borderRadius: '24px',
              overflow: 'hidden',
              alignItems: 'flex-end',
              padding: 'clamp(24px, 3.3vw, 64px)',
            }}
          >
            <img
              src={pageData?.hero || film.slide}
              alt={film.title}
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent 60%)' }} />

            <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '994px' }}>
              <h1 style={{ color: '#e6e6e6', fontSize: '32px', fontWeight: 500, lineHeight: 1.5, margin: 0 }}>
                {film.title} ({film.year})
              </h1>
              {pageData && (
                <p style={{ color: '#e6e6e6', fontSize: '18px', fontWeight: 400, lineHeight: 1.5, margin: 0 }}>
                  {pageData.description}
                </p>
              )}
              <div style={{ display: 'flex', gap: '32px' }}>
                <a
                  href={pageData?.watchUrl || '#'}
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
                    <path d="M1 1.5L11 7L1 12.5V1.5Z" fill="#0e1012" stroke="#0e1012" strokeWidth="1.5" strokeLinejoin="round" />
                  </svg>
                  {pageData?.watchLabel || 'СМОТРЕТЬ ТРЕЙЛЕР'}
                </a>
              </div>
            </div>
          </div>

          {/* Mobile: title + description below hero */}
          <div className="flex md:hidden flex-col gap-[24px] mt-[48px]">
            <h1 className="text-[22px] md:text-[24px] font-medium leading-[1.5] m-0 uppercase text-[#e6e6e6]">
              {film.title} ({film.year})
            </h1>
            {pageData && (
              <p className="text-[14px] md:text-[16px] font-normal leading-[1.5] m-0 text-[#e6e6e6] max-w-[405px]">
                {pageData.description}
              </p>
            )}
          </div>
        </div>

        {/* Behind the scenes */}
        {pageData?.btsPhotos && pageData.btsPhotos.length > 0 && (
          <div className="mt-[64px] md:mt-[80px] flex flex-col gap-[48px] md:gap-[64px]">
            <h2 className="text-[22px] md:text-[32px] font-medium leading-[1.5] m-0 text-[#e6e6e6]">
              BEHIND THE SCENES
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-[8px] md:gap-[10px]">
              {pageData.btsPhotos.map((photo, i) => (
                <div key={i} className="aspect-square md:aspect-square rounded-[10px] md:rounded-[12px] overflow-hidden">
                  <img src={photo} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Other works */}
        {pageData?.otherWorks && pageData.otherWorks.length > 0 && (
          <div className="mt-[64px] md:mt-[80px] flex flex-col gap-[48px] md:gap-[64px]">
            <h2 className="text-[22px] md:text-[32px] font-medium leading-[1.5] m-0 text-[#e6e6e6] text-center">
              ДРУГИЕ МОИ РАБОТЫ
            </h2>
            <div className="mobile-scroll flex flex-row md:grid md:grid-cols-3 gap-[12px] md:gap-[24px]">
              {pageData.otherWorks.map(work => (
                <Link
                  key={work.slug}
                  to={`/films/${work.slug}`}
                  className="min-w-[350px] h-[357px] md:min-w-0 md:h-auto md:aspect-[513/523] relative rounded-[10px] md:rounded-[12px] overflow-hidden flex flex-col justify-end no-underline"
                >
                  <img src={work.image} alt={work.title} className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%)' }} />

                  {/* Play button — center */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[70%] z-[2]">
                    <PlayButton />
                  </div>

                  {/* Title — bottom center */}
                  <div className="relative z-[1] p-6 text-center">
                    <p className="text-[15px] md:text-[20px] font-medium leading-[1.5] m-0 uppercase text-[#e6e6e6]">
                      {work.title}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>
    </Layout>
  )
}
