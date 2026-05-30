import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import GradientText from '../ui/GradientText'
import { HERO_SLIDES } from '../../config/site'

export default function Hero() {
  const [index, setIndex] = useState(0)

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % HERO_SLIDES.length)
  }, [])

  const prev = () => {
    setIndex((i) => (i - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)
  }

  useEffect(() => {
    const t = setInterval(next, 6000)
    return () => clearInterval(t)
  }, [next])

  const slide = HERO_SLIDES[index]

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {HERO_SLIDES.map((s, i) => (
        <div
          key={s.image}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={s.image}
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-transparent to-black/40" />
        </div>
      ))}

      <button
        type="button"
        onClick={prev}
        className="absolute left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur transition hover:bg-white/10 sm:left-8"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        type="button"
        onClick={next}
        className="absolute right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur transition hover:bg-white/10 sm:right-8"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/50 px-4 py-1.5 text-sm mb-6 backdrop-blur">
            <span className="h-2 w-2 rounded-full zeno-gradient" />
            <span>{slide.badge}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1]">
            {slide.title}{' '}
            <GradientText>{slide.highlight}</GradientText>
          </h1>
          <p className="mt-6 text-lg text-white/75 max-w-xl leading-relaxed">
            {slide.subtitle}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#trial"
              className="inline-flex rounded-full zeno-gradient px-8 py-3.5 font-semibold text-white shadow-lg zeno-glow transition hover:opacity-90"
            >
              Join Now
            </a>
            <a
              href="#pricing"
              className="inline-flex rounded-full border border-white/30 px-8 py-3.5 font-semibold text-white transition hover:bg-white/10"
            >
              View Plans
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all ${
                i === index ? 'w-8 zeno-gradient' : 'w-2 bg-white/40'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
