import {
  Building2,
  CircleHelp,
  ClipboardList,
  ClipboardX,
  Dumbbell,
  HeartCrack,
  HeartHandshake,
  ShowerHead,
  Star,
  TrendingDown,
  TrendingUp,
  UserX,
  Users,
  Weight,
} from 'lucide-react'
import GradientText from '../ui/GradientText'
import { WHY_CHOOSE_ROWS } from '../../config/whyChooseZeno'

const ICON_MAP = {
  users: Users,
  'user-x': UserX,
  star: Star,
  'circle-help': CircleHelp,
  'trending-up': TrendingUp,
  'trending-down': TrendingDown,
  dumbbell: Dumbbell,
  weight: Weight,
  'clipboard-list': ClipboardList,
  'clipboard-x': ClipboardX,
  'heart-handshake': HeartHandshake,
  'heart-crack': HeartCrack,
  'shower-head': ShowerHead,
  'building-2': Building2,
}

function HighlightedText({ text, highlights = [], highlightClass = 'text-cyan-400 font-semibold' }) {
  if (!highlights.length) {
    return <>{text}</>
  }

  const pattern = new RegExp(
    `(${highlights.map((h) => h.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`,
    'gi',
  )
  const parts = text.split(pattern)

  return (
    <>
      {parts.map((part, i) =>
        highlights.some((h) => h.toLowerCase() === part.toLowerCase()) ? (
          <span key={i} className={highlightClass}>
            {part}
          </span>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  )
}

function CompareColumn({ iconKey, text, highlights, highlightClass, variant }) {
  const Icon = ICON_MAP[iconKey] ?? Users
  const isZeno = variant === 'zeno'

  return (
    <div
      className={`flex flex-col items-center justify-center gap-2.5 sm:gap-3 px-3 sm:px-8 py-5 sm:py-7 text-center ${
        isZeno ? 'bg-cyan-500/[0.04]' : 'bg-white/[0.02]'
      }`}
    >
      <div
        className={`flex h-10 w-10 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-full border-2 ${
          isZeno
            ? 'border-cyan-400/50 bg-[#061830] text-cyan-300'
            : 'border-white/15 bg-[#0c1018] text-white/40'
        }`}
      >
        <Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.75} />
      </div>
      <p
        className={`max-w-[13rem] sm:max-w-md lg:max-w-lg text-[10px] sm:text-sm font-medium uppercase leading-relaxed ${
          isZeno ? 'text-white/95' : 'text-white/55'
        }`}
      >
        <HighlightedText
          text={text}
          highlights={highlights}
          highlightClass={highlightClass}
        />
      </p>
    </div>
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

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-8 sm:mb-10">
          WHY CHOOSE{' '}
          <GradientText className="italic">CLUB ZENO?</GradientText>
        </h2>

        <div className="rounded-2xl sm:rounded-3xl border border-cyan-500/25 bg-[#0a1628]/90 backdrop-blur-sm overflow-hidden shadow-[0_0_40px_rgba(1,108,251,0.15)]">
          <div className="grid grid-cols-2 divide-x divide-cyan-500/20 border-b border-cyan-500/20 bg-[#061018]/80">
            <p className="px-4 py-4 text-center text-sm font-bold uppercase tracking-wider text-white">
              CLUB ZENO
            </p>
            <p className="px-4 py-4 text-center text-sm font-bold uppercase tracking-wider text-white/80">
              ORDINARY GYM
            </p>
          </div>

          <ul className="divide-y divide-cyan-500/15">
            {WHY_CHOOSE_ROWS.map((row) => (
              <li
                key={row.id}
                className="grid grid-cols-2 divide-x divide-cyan-500/15"
              >
                <CompareColumn
                  variant="zeno"
                  iconKey={row.zenoIcon}
                  text={row.zeno}
                  highlights={row.highlights}
                />
                <CompareColumn
                  variant="ordinary"
                  iconKey={row.ordinaryIcon}
                  text={row.ordinary}
                  highlights={row.ordinaryHighlights}
                  highlightClass="text-white/75 font-semibold"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
