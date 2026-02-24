import { useParams } from 'react-router-dom'
import Layout from '../components/layout/Layout'

export default function FilmPage() {
  const { slug } = useParams()
  return (
    <Layout>
      <div className="px-8 md:px-16 py-20 text-[#e6e6e6]">Фильм: {slug} — в разработке</div>
    </Layout>
  )
}
