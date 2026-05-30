import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Check, Clock, MapPin, Signal } from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'
import ServicesCategoryPills from '../components/services/ServicesCategoryPills'
import {
  SERVICE_CATEGORIES,
  SERVICE_ITEMS,
  SERVICE_SECTIONS,
  SERVICES_INTRO,
} from '../config/servicesContent'
import { SITE, fullAddress } from '../config/site'

function ServiceBlock({ service, imageFirst }) {
  return (
    <article
      id={service.id}
      className="scroll-mt-28 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
    >
      <div
        className={`relative overflow-hidden rounded-2xl border-2 border-dashed border-[#22c55e]/40 aspect-[4/3] flex flex-col ${
          imageFirst ? 'lg:order-1' : 'lg:order-2'
        }`}
      >
        <div className="flex flex-1 items-center justify-center bg-gradient-to-br from-[#12121a] via-[#0c0c12] to-[#080810]">
          <p className="text-xs sm:text-sm font-medium uppercase tracking-widest text-white/30 px-4 text-center">
            Image placeholder
          </p>
        </div>
        <p className="border-t border-dashed border-white/10 bg-[#0c0c12] px-4 py-3 text-sm font-medium text-white/80">
          {service.tagline}
        </p>
      </div>

      <div className={imageFirst ? 'lg:order-2' : 'lg:order-1'}>
        <p className="text-xs font-medium uppercase tracking-widest text-[#22c55e] mb-2">
          {SITE.name}
        </p>
        <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">{service.title}</h3>

        <div className="mt-4 flex flex-wrap gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
            <Clock className="h-3.5 w-3.5 text-[#22d3ee]" />
            {service.duration}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
            <Signal className="h-3.5 w-3.5 text-[#22d3ee]" />
            {service.level}
          </span>
        </div>

        <p className="mt-6 text-[#9ca3af] leading-relaxed">{service.description}</p>

        <ul className="mt-6 space-y-2.5">
          {service.highlights.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-white/85">
              <Check className="h-5 w-5 shrink-0 text-[#22c55e]" />
              {item}
            </li>
          ))}
        </ul>

        <Link
          to="/contact"
          className="mt-8 inline-flex items-center gap-2 rounded-full border-2 border-[#22c55e] bg-[#22c55e] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#16a34a] hover:border-[#16a34a]"
        >
          Book {service.title}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  )
}

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState('all')

  const sectionsToShow = useMemo(() => {
    if (activeCategory === 'all') return SERVICE_SECTIONS
    return SERVICE_SECTIONS.filter((s) => s.id === activeCategory)
  }, [activeCategory])

  let blockIndex = 0

  return (
    <div className="pt-28 pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={SERVICES_INTRO.title}
          highlight={SERVICES_INTRO.highlight}
          className="!mb-4 sm:!mb-5"
        />

        <ServicesCategoryPills
          categories={SERVICE_CATEGORIES}
          activeCategory={activeCategory}
          onChange={setActiveCategory}
        />

        <div className="space-y-20 sm:space-y-28">
          {sectionsToShow.map((section) => {
            const items = SERVICE_ITEMS.filter((s) => s.category === section.id)
            if (!items.length) return null

            return (
              <div key={section.id}>
                <div className="space-y-16 sm:space-y-24">
                  {items.map((service) => {
                    const imageFirst = blockIndex % 2 === 0
                    blockIndex += 1
                    return (
                      <ServiceBlock
                        key={service.id}
                        service={service}
                        imageFirst={imageFirst}
                      />
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-20 rounded-3xl border border-white/10 bg-[#0c0c12] p-8 sm:p-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-white">Visit {SITE.name}</h3>
              <p className="mt-2 text-sm text-[#9ca3af] flex items-start gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-[#22c55e] mt-0.5" />
                {fullAddress}
              </p>
              <p className="mt-1 text-sm text-white/70">Open {SITE.hours}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full zeno-gradient px-6 py-3 font-semibold text-white"
              >
                Enquire Now
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/location"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-semibold text-white hover:bg-white/5"
              >
                Directions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
