import { useCallback, useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { GALLERY_IMAGES } from '../../config/gallery'

export default function GallerySection() {
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const closeLightbox = useCallback(() => setLightboxIndex(null), [])

  const goPrev = useCallback(() => {
    setLightboxIndex((i) =>
      i === null ? null : (i - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length,
    )
  }, [])

  const goNext = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i + 1) % GALLERY_IMAGES.length))
  }, [])

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

  const active = lightboxIndex !== null ? GALLERY_IMAGES[lightboxIndex] : null

  return (
    <section id="gallery" className="pt-8 pb-14 sm:pt-10 sm:pb-16 bg-[#030306] border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Gallery"
          title="Inside"
          highlight="CLUB ZENO"
          className="!mb-6 sm:!mb-8"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {GALLERY_IMAGES.map((item, i) => (
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
              <div className="absolute bottom-0 right-0 p-3 opacity-0 transition group-hover:opacity-100">
                <ZoomIn className="h-5 w-5 text-cyan-400" />
              </div>
            </button>
          ))}
        </div>
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
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  )
}
