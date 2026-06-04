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

        <div className="grid grid-cols-2 gap-3 sm:mx-auto sm:max-w-4xl sm:grid-cols-3 sm:gap-6">
          {TRAINERS.map((trainer) => (
            <article
              key={trainer.id}
              className="group overflow-hidden rounded-xl border border-white/10 bg-[#0c0c12] transition hover:border-cyan-500/40 sm:rounded-2xl"
            >
              <div className="aspect-[3/4] overflow-hidden bg-[#030306]">
                <img
                  src={trainer.image}
                  alt={`${trainer.name}, CLUB ZENO mentor`}
                  className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="px-2 py-3 text-center sm:px-4 sm:py-5">
                <h3 className="text-sm font-bold text-white sm:text-lg">{trainer.name}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
