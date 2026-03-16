import { type ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'

export default function Layout({ children, showReviews = false }: { children: ReactNode; showReviews?: boolean }) {
  return (
    <div className="min-h-screen bg-[#0e1012] flex flex-col">
      <Header />
      <main className="flex-1 pt-[75px]">
        {children}
      </main>
      <Footer showReviews={showReviews} />
    </div>
  )
}
