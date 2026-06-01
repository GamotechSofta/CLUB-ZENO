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
          {TRAINERS.map((trainer) => (
            <article
              key={trainer.id}
              className="flex items-center justify-center rounded-2xl border border-white/10 bg-[#0c0c12] px-4 py-8 sm:py-10 text-center transition hover:border-cyan-500/40"
            >
              <h3 className="text-sm sm:text-lg font-bold leading-snug text-white">
                {trainer.name}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
