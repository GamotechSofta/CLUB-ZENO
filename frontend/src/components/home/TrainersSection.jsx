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
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0c0c12] aspect-[3/4] transition hover:border-cyan-500/40"
            >
              <div className="flex flex-1 items-center justify-center border-b border-dashed border-white/10 bg-gradient-to-br from-[#12121a] via-[#0c0c12] to-[#080810]">
                <p className="text-[10px] sm:text-xs font-medium uppercase tracking-widest text-white/30 px-2 text-center">
                  Image placeholder
                </p>
              </div>

              <div className="p-3 sm:p-5 bg-gradient-to-t from-[#0c0c12] to-[#0c0c12]">
                <h3 className="text-sm sm:text-lg font-bold leading-tight text-white">
                  {trainer.name}
                </h3>
                <p className="text-xs sm:text-sm text-cyan-400 line-clamp-2 mt-0.5">
                  {trainer.role}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
