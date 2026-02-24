export interface Film {
  slug: string
  title: string
  year: string
  city: string
  category: 'cinema' | 'editing'
  description?: string
  thumbnail?: string
}

export const films: Film[] = [
  {
    slug: 'ne-snimayte-v-cheloveka',
    title: '«Не снимайте в человека»',
    year: '2024',
    city: 'Санкт-Петербург',
    category: 'cinema',
    description: 'Короткометражный фильм режиссёра, сценариста и продюсера Ирины Беленевой об этике видеосъёмки в общественных местах',
  },
  {
    slug: 'zamkadny-barysh',
    title: '«Замкадный Барыш»',
    year: '2023',
    city: 'Москва',
    category: 'cinema',
    description: 'Документальный проект',
  },
  {
    slug: 'sanya',
    title: '«Саня»',
    year: '2023',
    city: 'Москва',
    category: 'cinema',
    description: 'Короткометражный фильм',
  },
  {
    slug: 'prezhde-chem-uyti',
    title: '«Прежде чем уйти»',
    year: '2022',
    city: 'Москва',
    category: 'cinema',
    description: 'Короткометражный фильм',
  },
]

export const editingWorks = [
  {
    slug: 'ne-snimayte-v-cheloveka',
    title: '«Не снимайте в человека»',
    role: 'Режиссёр, режиссёр монтажа, продюсер. Участие в конкурсных программах по всей России',
  },
  {
    slug: 'komar-kotory-ne-umel-pet',
    title: '«Комар, который не умел петь»',
    role: 'Режиссёр монтажа',
  },
]

export const youtubeWorks = [
  {
    slug: 'inostrancy-v-rossini',
    title: '«Иностранцы в России»',
    year: '2022',
    city: 'Москва',
    views: '1.2M',
  },
]
