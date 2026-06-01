import { ArrowUpRight } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { WHAT_WE_OFFER_ITEMS } from '../../config/whatWeOffer'

export default function WhatWeOfferSection() {
  return (
    <section id="what-we-offer" className="pt-8 pb-8 sm:pt-10 sm:pb-10 bg-[#030306]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="What We Offer"
          title="Everything You Need to"
          highlight="Succeed"
          subtitle="Premium training zones at CLUB ZENO — explore what we offer on Wardha Road, Nagpur."
        />

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
          {WHAT_WE_OFFER_ITEMS.map((item) => (
            <article
              key={item.id}
              className="group relative min-h-[260px] sm:min-h-[340px] overflow-hidden rounded-2xl border border-white/10 bg-[#0c0c12] transition duration-500 hover:border-cyan-500/40 hover:shadow-[0_0_40px_rgba(1,108,251,0.15)]"
            >
              <div className="absolute inset-0 bottom-[6.5rem] sm:bottom-[8.5rem] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c12]/90 via-[#0c0c12]/20 to-transparent" />
              </div>

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0c0c12] to-[#0c0c12]/95 p-3 sm:p-6">
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <p className="text-[10px] sm:text-xs font-medium uppercase tracking-widest text-cyan-400/90 mb-1 sm:mb-2">
                      CLUB ZENO
                    </p>
                    <h3 className="text-sm sm:text-2xl font-bold text-white leading-tight">
                      {item.title}
                    </h3>
                  </div>
                  <span className="hidden sm:flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur transition group-hover:zeno-gradient group-hover:border-transparent">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </div>
                <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-white/70 leading-relaxed line-clamp-2 sm:line-clamp-3">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
