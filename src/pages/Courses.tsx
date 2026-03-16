import { Link } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import SectionLabel from '../components/ui/SectionLabel'

import courseHeroBg from '../assets/course-hero-bg.jpg'
import courseCard1 from '../assets/course-card-1.jpg'
import courseCard2 from '../assets/course-card-2.jpg'
import courseCard3 from '../assets/course-card-3.jpg'
import courseCard4 from '../assets/course-card-4.jpg'

const infoCards = [
  {
    image: courseCard1,
    title: 'время проведения',
    description: 'Занятия проходят преимущественно в утреннее или вечернее время по будням и выходным. Я стараюсь подбирать график под каждый набор для удобства большинства. Урок длится от 2 до 4 часов с перерывами.',
  },
  {
    image: courseCard2,
    title: 'Педагоги',
    description: 'Со второго потока я подключаю к процессу специалистов из других сфер. Каждый поток уникальный и адаптируется под запрос набирающейся группы. Следите за анонсами и опросами в режиссерском чате в tg.',
  },
  {
    image: courseCard3,
    title: 'Возрастные ограничения',
    description: 'Интересно и познавательно будет для всех возрастов. Набор веду начиная с 15 лет и без верхнего порога.',
  },
  {
    image: courseCard4,
    title: 'Стоимость участия в мастерских',
    description: 'Действует система абонементов (оплата раз в месяц). Стоимость меняется в зависимости от набора и итоговых работ, которые будут создавать ученики.',
  },
]

// ─── Hero ────────────────────────────────────────────────────────────────────

function CourseHero() {
  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '645px',
        display: 'flex',
        alignItems: 'flex-end',
        overflow: 'hidden',
        padding: '50px clamp(24px, 9.95vw, 191px)',
      }}
    >
      <img src={courseHeroBg} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
      <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(14,16,18,0.6)' }} />

      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '1037px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <h1 style={{ color: '#e6e6e6', fontSize: '28px', fontWeight: 500, lineHeight: 1.5, margin: 0 }}>
            Режиссерско-актерская мастерская
          </h1>
          <p style={{ color: '#b3b3b3', fontSize: '18px', fontWeight: 400, lineHeight: '27px', margin: 0 }}>
            2 месяца · цена уточняется
          </p>
        </div>
        <p style={{ color: '#e6e6e6', fontSize: '18px', fontWeight: 400, lineHeight: 1.5, margin: 0 }}>
          Здесь мы учимся владеть своим телом, эмоциями, посылом, чтобы грамотно формулировать задачи и предлагать множество вариантов актерской игры. Помимо отработки профессиональных режиссерских и актерских навыков на площадке вы научитесь проявляться во внешнем мире соразмерно вашему внутреннему наполнению. Обнаружите блоки, а через них - новые точки роста.
        </p>
        <a
          href="https://t.me/"
          target="_blank"
          rel="noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'flex-start',
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
          ЗАПИСАТЬСЯ
        </a>
      </div>
    </section>
  )
}

// ─── Info Cards ─────────────────────────────────────────────────────────────

function InfoCardsSection() {
  return (
    <section
      style={{
        backgroundColor: '#0e1012',
        paddingLeft: 'clamp(24px, 9.48vw, 182px)',
        paddingRight: 'clamp(24px, 9.48vw, 182px)',
        paddingTop: 'clamp(48px, 4vw, 80px)',
        paddingBottom: 'clamp(64px, 5.72vw, 110px)',
      }}
    >
      {/* Section label with back arrow */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '64px', marginBottom: '80px' }}>
        <Link to="/" style={{ width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <svg width="18" height="30" viewBox="0 0 17 30" fill="none">
            <path d="M15 2L2 15L15 28" stroke="#e6e6e6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
        <SectionLabel text="КУРСЫ" />
      </div>

      {/* Cards grid: mobile horizontal scroll, desktop 2×2 */}
      <div className="mobile-scroll flex flex-row lg:flex-wrap" style={{ gap: '24px' }}>
        {infoCards.map((card, i) => (
          <div key={i} className="min-w-[80vw] lg:min-w-0 lg:w-[calc(50%-12px)]">
            <InfoCard card={card} />
          </div>
        ))}
      </div>
    </section>
  )
}

function InfoCard({ card }: { card: { image: string; title: string; description: string } }) {
  return (
    <div
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
      <div style={{ width: '100%', aspectRatio: '701 / 314', borderRadius: '24px', overflow: 'hidden' }}>
        <img src={card.image} alt={card.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <h3 style={{ color: '#e6e6e6', fontSize: '28px', fontWeight: 500, lineHeight: 1.5, margin: 0, textTransform: 'uppercase' }}>
          {card.title}
        </h3>
        <p style={{ color: '#e6e6e6', fontSize: '18px', fontWeight: 400, lineHeight: '27px', margin: 0 }}>
          {card.description}
        </p>
      </div>
    </div>
  )
}

// ─── Page ───────────────────────────────────────────────────────────────────

export default function Courses() {
  return (
    <Layout>
      <CourseHero />
      <InfoCardsSection />
    </Layout>
  )
}
