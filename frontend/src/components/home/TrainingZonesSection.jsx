import { Clock } from 'lucide-react'
import GradientText from '../ui/GradientText'
import { TRAINING_ZONES, TRAINING_ZONES_INTRO } from '../../config/trainingZones'

function ZoneNumber({ n }) {
  return (
    <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-lg border-2 border-cyan-400 bg-[#061830]/90 text-xl sm:text-2xl font-bold text-white shadow-[0_0_20px_rgba(34,211,238,0.25)] backdrop-blur-sm">
      {n}
    </div>
  )
}

/** Same cinematic darkening as the full-bleed zone background */
function ZoneImageOverlay() {
  return (
    <>
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#050508]/95 via-[#050508]/55 to-[#050508]/30"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 via-transparent to-transparent"
        aria-hidden
      />
    </>
  )
}

function ZoneCard({ zone }) {
  const hasInset = zone.insetImage
  const isDesign = zone.id === 'how-we-design'

  return (
    <article className="relative overflow-hidden rounded-2xl sm:rounded-3xl border-2 border-cyan-400/50 shadow-[0_0_30px_rgba(1,108,251,0.12)] min-h-[320px] sm:min-h-[360px] lg:min-h-[400px]">
      {/* Background images */}
      {isDesign ? (
        <div className="absolute inset-0 grid grid-cols-2">
          <img
            src={zone.mainImage}
            alt=""
            className="h-full w-full object-cover object-center"
            loading="lazy"
          />
          <img
            src={zone.secondaryImage}
            alt=""
            className="h-full w-full object-cover object-center"
            loading="lazy"
          />
        </div>
      ) : (
        <>
          <img
            src={zone.mainImage}
            alt={zone.title}
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
          {hasInset && (
            <div className="absolute top-[42%] right-3 sm:right-4 lg:top-[38%] z-[1] w-[34%] max-w-[130px] sm:max-w-[150px] aspect-[4/5] overflow-hidden rounded-lg border-2 border-cyan-400/60 shadow-lg">
              <img
                src={zone.insetImage}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
              <ZoneImageOverlay />
            </div>
          )}
        </>
      )}

      {/* Dark gradient so text reads on image (hero-style) */}
      <ZoneImageOverlay />

      {/* Text on top of image */}
      <div className="relative z-10 p-4 sm:p-6 lg:p-8 max-w-2xl">
        <div className="flex gap-3 sm:gap-4 items-start">
          <ZoneNumber n={zone.number} />
          <div className="min-w-0 flex-1 pt-0.5">
            <h3 className="text-base sm:text-lg lg:text-xl font-bold uppercase tracking-wide text-white drop-shadow-sm">
              {zone.title}
            </h3>
            <p className="mt-1.5 sm:mt-2 text-[11px] sm:text-sm lg:text-[15px] text-white/85 leading-relaxed">
              {zone.description}
            </p>
            {zone.duration && (
              <p className="mt-2 sm:mt-3 inline-flex items-center gap-2 text-[11px] sm:text-sm font-medium text-cyan-400">
                <Clock className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
                Duration — {zone.duration}
              </p>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}

export default function TrainingZonesSection() {
  return (
    <section
      id="training-zones"
      className="relative pt-8 pb-10 sm:pt-10 sm:pb-14 overflow-hidden bg-[#030306]"
    >
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(1,108,251,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(1,108,251,0.08) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#030a18]/80 via-transparent to-[#030306] pointer-events-none" />

      <div className="relative mx-auto max-w-4xl lg:max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tight text-white mb-8 sm:mb-10">
          {TRAINING_ZONES_INTRO.title}{' '}
          <GradientText>{TRAINING_ZONES_INTRO.highlight}</GradientText>{' '}
          {TRAINING_ZONES_INTRO.titleEnd}
        </h2>

        <div className="space-y-5 sm:space-y-6">
          {TRAINING_ZONES.map((zone) => (
            <ZoneCard key={zone.id} zone={zone} />
          ))}
        </div>

        <div className="mt-10 sm:mt-12 flex items-center justify-center gap-4">
          <span className="h-px flex-1 max-w-[80px] sm:max-w-[120px] bg-gradient-to-r from-transparent to-cyan-500/60" />
          <p className="text-center text-sm sm:text-base font-bold uppercase tracking-[0.2em] text-cyan-400">
            {TRAINING_ZONES_INTRO.footer}
          </p>
          <span className="h-px flex-1 max-w-[80px] sm:max-w-[120px] bg-gradient-to-l from-transparent to-cyan-500/60" />
        </div>
      </div>
    </section>
  )
}
