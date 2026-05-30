import {
  Cpu,
  Dumbbell,
  Flame,
  Activity,
  HeartPulse,
  Wind,
  TrendingUp,
} from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { SERVICES } from '../../config/site'

const iconMap = {
  cpu: Cpu,
  dumbbell: Dumbbell,
  flame: Flame,
  activity: Activity,
  'heart-pulse': HeartPulse,
  wind: Wind,
  'trending-up': TrendingUp,
}

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-[#030306]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Everything You Need to"
          highlight="Succeed"
          subtitle="From AI modes to recovery & sauna — a complete ecosystem for your fitness journey at CLUB ZENO, Nagpur."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon]
            return (
              <article
                key={service.id}
                className="group rounded-2xl border border-white/10 bg-[#0c0c12] p-6 transition hover:border-cyan-500/30 hover:-translate-y-1"
              >
                <div
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${service.accent} mb-4`}
                >
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                <p className="text-sm text-[#9ca3af] leading-relaxed">
                  {service.description}
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
