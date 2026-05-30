import { Share2 } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { TRAINERS } from '../../config/site'

export default function TrainersSection() {
  return (
    <section id="trainers" className="pt-8 pb-8 sm:pt-10 sm:pb-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Expert Trainers"
          title="Meet Your"
          highlight="Mentors"
          subtitle="Our certified trainers bring years of expertise and passion to help you achieve your best self at CLUB ZENO."
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {TRAINERS.map((trainer, i) => (
            <article
              key={trainer.name}
              className={`group relative rounded-2xl overflow-hidden aspect-[3/4] ${
                i === 2 ? 'lg:scale-105 zeno-border-glow' : 'border border-white/10'
              }`}
            >
              <img
                src={trainer.image}
                alt={trainer.name}
                className="absolute inset-0 h-full w-full object-cover transition group-hover:scale-105 duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition">
                <a
                  href={trainer.social.instagram}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-black/60 backdrop-blur text-white hover:bg-cyan-500/80"
                  aria-label={`${trainer.name} Instagram`}
                >
                  <Share2 className="h-4 w-4" />
                </a>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-5">
                <h3 className="text-sm sm:text-lg font-bold leading-tight">{trainer.name}</h3>
                <p className="text-xs sm:text-sm text-cyan-400 line-clamp-2">{trainer.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
