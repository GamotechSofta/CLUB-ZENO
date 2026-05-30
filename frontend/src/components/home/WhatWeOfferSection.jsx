import {
  Cpu,
  Dumbbell,
  Flame,
  Activity,
  HeartPulse,
  Layers,
} from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { WHAT_WE_OFFER_ITEMS } from '../../config/whatWeOffer'

const iconMap = {
  cpu: Cpu,
  dumbbell: Dumbbell,
  flame: Flame,
  activity: Activity,
  'heart-pulse': HeartPulse,
  layers: Layers,
}

export default function WhatWeOfferSection() {
  return (
    <section id="what-we-offer" className="pt-8 pb-8 sm:pt-10 sm:pb-10 bg-[#030306]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="What We Offer"
          title="Everything You Need to"
          highlight="Succeed"
          subtitle="A glimpse of what CLUB ZENO offers — full details on our Services page."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {WHAT_WE_OFFER_ITEMS.map((item) => {
            if (item.image) {
              return (
                <article
                  key={item.id}
                  className="group overflow-hidden rounded-2xl border border-white/10 bg-[#0c0c12] transition hover:border-cyan-500/30 hover:-translate-y-1"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </article>
              )
            }

            const Icon = iconMap[item.icon]
            return (
              <article
                key={item.id}
                className="group rounded-2xl border border-white/10 bg-[#0c0c12] p-6 transition hover:border-cyan-500/30 hover:-translate-y-1"
              >
                <div
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${item.accent} mb-4`}
                >
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-[#9ca3af] leading-relaxed">
                  {item.description}
                </p>
                <div className="mt-6 h-0.5 w-full rounded-full bg-white/5 overflow-hidden">
                  <div className="h-full w-0 group-hover:w-full zeno-gradient transition-all duration-500" />
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
