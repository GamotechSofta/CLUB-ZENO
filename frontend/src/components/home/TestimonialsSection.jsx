import { useRef, useState, useEffect, useCallback } from 'react'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { TESTIMONIALS } from '../../config/site'

export default function TestimonialsSection() {
  const scrollRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const scrollToIndex = useCallback((index) => {
    const container = scrollRef.current
    if (!container) return
    const card = container.children[index]
    if (!card) return
    const offset = card.offsetLeft - container.offsetLeft
    container.scrollTo({ left: offset, behavior: 'smooth' })
    setActiveIndex(index)
  }, [])

  const goPrev = () => scrollToIndex(Math.max(0, activeIndex - 1))
  const goNext = () => scrollToIndex(Math.min(TESTIMONIALS.length - 1, activeIndex + 1))

  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    const onScroll = () => {
      const cards = Array.from(container.children)
      const scrollLeft = container.scrollLeft
      let closest = 0
      let minDist = Infinity
      cards.forEach((card, i) => {
        const dist = Math.abs(card.offsetLeft - container.offsetLeft - scrollLeft)
        if (dist < minDist) {
          minDist = dist
          closest = i
        }
      })
      setActiveIndex(closest)
    }

    container.addEventListener('scroll', onScroll, { passive: true })
    return () => container.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section id="testimonials" className="pt-8 pb-8 sm:pt-10 sm:pb-10 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Testimonials"
          title="What Our"
          highlight="Members Say"
          subtitle="Real stories from members training at CLUB ZENO, Nagpur."
        />

        <div className="relative md:px-14">
          <button
            type="button"
            onClick={goPrev}
            disabled={activeIndex === 0}
            className="absolute left-0 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur transition hover:bg-white/15 disabled:cursor-not-allowed disabled:opacity-30 md:flex"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={goNext}
            disabled={activeIndex === TESTIMONIALS.length - 1}
            className="absolute right-0 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur transition hover:bg-white/15 disabled:cursor-not-allowed disabled:opacity-30 md:flex"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div
            ref={scrollRef}
            className="-mx-4 flex gap-5 overflow-x-auto overflow-y-hidden px-4 scroll-smooth snap-x snap-mandatory sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            role="list"
            aria-label="Member testimonials"
          >
            {TESTIMONIALS.map((t) => (
              <blockquote
                key={t.name}
                role="listitem"
                className="w-[min(85vw,320px)] shrink-0 snap-start rounded-2xl border border-white/10 bg-[#0c0c12] p-6 sm:w-[320px] sm:p-8"
              >
                <Quote className="h-8 w-8 text-cyan-500/40 mb-4" />
                <p className="text-[#d1d5db] leading-relaxed mb-6">&ldquo;{t.text}&rdquo;</p>
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-cyan-400 text-cyan-400" />
                  ))}
                </div>
                <footer>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-[#6b7280]">{t.role}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => scrollToIndex(i)}
              className={`rounded-full transition-all ${
                i === activeIndex ? 'h-2 w-8 zeno-gradient' : 'h-2 w-2 bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
              aria-current={i === activeIndex ? 'true' : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
