const HEADER_OFFSET = 96

export function scrollToSection(hash) {
  const id = hash.replace('#', '')
  const el = document.getElementById(id)
  if (!el) return false

  const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET

  window.scrollTo({
    top: Math.max(0, top),
    behavior: 'smooth',
  })

  return true
}

/** Retry until section exists (mobile / route change) */
export function scrollToSectionWhenReady(hash) {
  const run = () => scrollToSection(hash)

  run()

  requestAnimationFrame(run)

  const delays = [50, 150, 350, 600]
  delays.forEach((ms) => window.setTimeout(run, ms))
}

/** Logo / Home — always land on home page top */
export function goToHomeTop(navigate) {
  navigate({ pathname: '/' })
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
