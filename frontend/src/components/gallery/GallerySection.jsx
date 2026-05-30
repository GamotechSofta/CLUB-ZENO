import { useCallback, useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { GALLERY_CATEGORIES, GALLERY_IMAGES } from '../../config/gallery'

export default function GallerySection() {
  const [filter, setFilter] = useState('All')
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const filtered =
    filter === 'All'
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === filter)

  const closeLightbox = useCallback(() => setLightboxIndex(null), [])

  const goPrev = useCallback(() => {
    setLightboxIndex((i) =>
      i === null ? null : (i - 1 + filtered.length) % filtered.length,
    )
  }, [filtered.length])

  const goNext = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i + 1) % filtered.length))
  }, [filtered.length])

  useEffect(() => {
    if (lightboxIndex === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') goPrev()
      if (e.key === 'ArrowRight') goNext()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [lightboxIndex, closeLightbox, goPrev, goNext])

  const active = lightboxIndex !== null ? filtered[lightboxIndex] : null

  return (
    <section id="gallery" className="py-16 sm:py-20 bg-[#030306] border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Gallery"
          title="Inside"
          highlight="CLUB ZENO"
          subtitle="Explore our rooftop gym, training zones, CrossFit HIIT floor, and recovery space on Wardha Road, Nagpur."
        />

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {GALLERY_CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => {
                setFilter(cat)
                setLightboxIndex(null)
              }}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                filter === cat
                  ? 'zeno-gradient text-white'
                  : 'border border-white/10 text-[#9ca3af] hover:border-cyan-500/40 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {filtered.map((item, i) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setLightboxIndex(i)}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-[#0c0c12] text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="aspect-square w-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-3 opacity-0 transition group-hover:opacity-100">
                <span className="text-xs font-medium text-white/90">{item.category}</span>
                <ZoomIn className="h-4 w-4 text-cyan-400" />
              </div>
            </button>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-[#9ca3af]">No photos in this category yet.</p>
        )}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
          onClick={closeLightbox}
        >
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute right-4 top-4 z-10 rounded-full border border-white/20 bg-black/60 p-2 text-white hover:bg-white/10"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              goPrev()
            }}
            className="absolute left-2 sm:left-6 z-10 rounded-full border border-white/20 bg-black/60 p-3 text-white hover:bg-white/10"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              goNext()
            }}
            className="absolute right-2 sm:right-6 z-10 rounded-full border border-white/20 bg-black/60 p-3 text-white hover:bg-white/10"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <figure
            className="relative max-h-[85vh] max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={active.src}
              alt={active.alt}
              className="mx-auto max-h-[80vh] w-auto max-w-full rounded-lg object-contain"
            />
            <figcaption className="mt-4 text-center text-sm text-[#9ca3af]">
              {active.alt}
              <span className="mx-2 text-white/30">·</span>
              <span className="text-cyan-400">{active.category}</span>
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  )
}
