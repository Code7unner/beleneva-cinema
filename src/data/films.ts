export interface Film {
  slug: string
  title: string
  year: string
  city: string
  category: 'cinema' | 'editing'
  description?: string
  thumbnail: string
  slide: string
}

import filmNsv from '../assets/film-nsvcheloveka.jpg'
import filmZamkadny from '../assets/film-zamkadny.jpg'
import filmSanya from '../assets/film-sanya.jpg'
import filmPrezhde from '../assets/film-prezhde.jpg'
import slideNsv from '../assets/slide-nsvcheloveka.png'
import slideSanya from '../assets/slide-sanya.png'
import slidePrezhde from '../assets/slide-prezhde.png'
import slideZamkadny from '../assets/slide-zamkadny.png'

export const films: Film[] = [
  {
    slug: 'ne-snimayte-v-cheloveka',
    title: '«НЕ СНИМАЙТЕ В ЧЕЛОВЕКА»',
    year: '2024',
    city: 'Санкт-Петербург',
    category: 'cinema',
    description: 'Короткометражный фильм режиссёра, сценариста и продюсера Ирины Беленевой',
    thumbnail: filmNsv,
    slide: slideNsv,
  },
  {
    slug: 'sanya',
    title: '«Саня»',
    year: '2022',
    city: 'Москва',
    category: 'cinema',
    description: 'Короткометражный фильм',
    thumbnail: filmSanya,
    slide: slideSanya,
  },
  {
    slug: 'prezhde-chem-uyti',
    title: '«Прежде, чем уйти»',
    year: '2021',
    city: 'Москва',
    category: 'cinema',
    description: 'Короткометражный фильм',
    thumbnail: filmPrezhde,
    slide: slidePrezhde,
  },
  {
    slug: 'zamkadny-barysh',
    title: '«Замкадный барыш»',
    year: '2020',
    city: 'Москва',
    category: 'cinema',
    description: 'Документальный проект',
    thumbnail: filmZamkadny,
    slide: slideZamkadny,
  },
]

export interface EditingWork {
  slug: string
  title: string
  year: string
  city: string
  role: string
  thumbnail: string
}

import editMarin from '../assets/edit-marin.png'
import editKomar from '../assets/edit-komar.png'

// Slider items (shown in the left slider block)
export const editingSliderWorks: EditingWork[] = [
  {
    slug: 'ne-snimayte-v-cheloveka',
    title: '«Не снимайте в человека»',
    year: '2024',
    city: 'САНКТ-ПЕТЕРБУРГ',
    role: 'Пилот сериала, сценарист, режиссер, креативный директор, руководитель проекта + Реализация обучения внутри команды, поиск финансирования, продвижение.',
    thumbnail: slideNsv,
  },
  {
    slug: 'prezhde-chem-uyti',
    title: '«Прежде, чем уйти»',
    year: '2021',
    city: 'НАРО-ФОМИНСК',
    role: 'Игровой короткометражный фильм, о бабушке, которая расстреляла бандитов.',
    thumbnail: slidePrezhde,
  },
  {
    slug: 'marin-servis',
    title: '«Марин сервис»',
    year: '2026',
    city: 'Владивосток',
    role: 'Сценарий корпоративного ролика для компании "Марин сервис"',
    thumbnail: editMarin,
  },
]

// Standalone item (shown as a single card on the right)
export const editingStandaloneWork: EditingWork = {
  slug: 'komar-kotory-ne-umel-pet',
  title: '«Комар, который не умел петь»',
  year: '2019',
  city: 'САНКТ-ПЕТЕРБУРГ',
  role: 'Отбор произведений, редактура, обложка (макет, рисунок).',
  thumbnail: editKomar,
}

import youtubeInostrantsy from '../assets/youtube-inostrantsy.png'

export const youtubeWorks = [
  {
    slug: 'inostrancy-v-rossini',
    title: '«Иностранцы в России»',
    year: '2023',
    city: 'МОСКВА',
    description: 'Travel-show, пилотная серия. Работа с гл.героем, интервью с индийским блогером Tanya Khanijow, съемка в экспедиции в Мурманске.',
    thumbnail: youtubeInostrantsy,
  },
]
