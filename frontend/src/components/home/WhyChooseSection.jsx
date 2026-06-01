import {
  ClipboardList,
  Dumbbell,
  HeartHandshake,
  ShowerHead,
  Star,
  TrendingUp,
  Users,
} from 'lucide-react'
import GradientText from '../ui/GradientText'
import { WHY_CHOOSE_ROWS } from '../../config/whyChooseZeno'

const ICON_MAP = {
  users: Users,
  star: Star,
  'trending-up': TrendingUp,
  dumbbell: Dumbbell,
  'clipboard-list': ClipboardList,
  'heart-handshake': HeartHandshake,
  'shower-head': ShowerHead,
}

function HighlightedText({ text, highlights = [] }) {
  if (!highlights.length) {
    return <>{text}</>
  }

  const pattern = new RegExp(`(${highlights.map((h) => h.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'gi')
  const parts = text.split(pattern)

  return (
    <>
      {parts.map((part, i) =>
        highlights.some((h) => h.toLowerCase() === part.toLowerCase()) ? (
          <span key={i} className="text-cyan-400 font-semibold">
            {part}
          </span>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  )
}

export default function WhyChooseSection() {
  return (
    <section
      id="why-choose"
      className="pt-8 pb-8 sm:pt-10 sm:pb-12 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#030a18] via-[#051525] to-[#030306] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(1,108,251,0.12),transparent_70%)] pointer-events-none" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-8 sm:mb-10">
          WHY CHOOSE{' '}
          <GradientText className="italic">CLUB ZENO?</GradientText>
        </h2>

        <div className="rounded-2xl sm:rounded-3xl border border-cyan-500/25 bg-[#0a1628]/90 backdrop-blur-sm overflow-hidden shadow-[0_0_40px_rgba(1,108,251,0.15)]">
          <div className="hidden sm:grid sm:grid-cols-[1fr_4rem_1fr] gap-2 px-6 py-4 border-b border-cyan-500/20 bg-[#061018]/80">
            <p className="text-center text-sm font-bold uppercase tracking-wider text-white">
              CLUB ZENO
            </p>
            <span aria-hidden />
            <p className="text-center text-sm font-bold uppercase tracking-wider text-white/80">
              ORDINARY GYM
            </p>
          </div>

          <ul className="divide-y divide-cyan-500/15">
            {WHY_CHOOSE_ROWS.map((row) => {
              const Icon = ICON_MAP[row.icon] ?? Users
              return (
                <li
                  key={row.id}
                  className="grid grid-cols-1 sm:grid-cols-[1fr_4rem_1fr] gap-4 sm:gap-2 items-center px-4 sm:px-6 py-6 sm:py-7"
                >
                  <p className="text-center sm:text-right text-xs sm:text-sm font-medium uppercase leading-relaxed text-white/95 order-1 sm:order-1">
                    <span className="sm:hidden text-cyan-400/80 text-[10px] block mb-1">
                      CLUB ZENO
                    </span>
                    <HighlightedText text={row.zeno} highlights={row.highlights} />
                  </p>

                  <div className="flex justify-center order-2 sm:order-2">
                    <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full border-2 border-cyan-400/50 bg-[#061830] text-cyan-300">
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.75} />
                    </div>
                  </div>

                  <p className="text-center sm:text-left text-xs sm:text-sm font-medium uppercase leading-relaxed text-white/55 order-3 sm:order-3">
                    <span className="sm:hidden text-white/40 text-[10px] block mb-1">
                      ORDINARY GYM
                    </span>
                    <HighlightedText
                      text={row.ordinary}
                      highlights={row.ordinaryHighlights}
                    />
                  </p>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
