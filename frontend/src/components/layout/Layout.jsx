import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import FloatingActions from './FloatingActions'
import { scrollToSectionWhenReady } from '../../lib/scrollToSection'

export default function Layout() {
  const { pathname, hash } = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onHashClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]')
      if (!anchor || pathname !== '/') return

      const href = anchor.getAttribute('href')
      if (!href?.startsWith('#')) return

      e.preventDefault()
      const targetHash = href
      navigate({ pathname: '/', hash: targetHash }, { replace: false })
      scrollToSectionWhenReady(targetHash)
    }

    document.addEventListener('click', onHashClick)
    return () => document.removeEventListener('click', onHashClick)
  }, [pathname, navigate])

  useEffect(() => {
    if (hash) {
      scrollToSectionWhenReady(hash)
      return
    }

    if (pathname !== '/') {
      window.scrollTo({ top: 0, behavior: 'auto' })
    }
  }, [pathname, hash])

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <FloatingActions />
    </>
  )
}
