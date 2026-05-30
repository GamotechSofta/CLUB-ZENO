import { Star, Quote } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { TESTIMONIALS } from '../../config/site'

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Testimonials"
          title="What Our"
          highlight="Members Say"
          subtitle="Real stories from members training at CLUB ZENO, Nagpur."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <blockquote
              key={t.name}
              className="rounded-2xl border border-white/10 bg-[#0c0c12] p-6 sm:p-8"
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
    </section>
  )
}
