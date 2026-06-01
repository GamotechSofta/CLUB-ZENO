import {
  ClipboardCheck,
  Target,
  UserRoundCheck,
  Settings2,
} from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { SESSION_FLOW, SESSION_STEPS } from '../../config/sessionFlow'

const STEP_ICONS = {
  clipboard: ClipboardCheck,
  target: Target,
  coach: UserRoundCheck,
  machine: Settings2,
}

export default function SessionFlowSection() {
  return (
    <section
      id="your-session"
      className="relative overflow-hidden bg-[#030306] pt-8 pb-8 sm:pt-10 sm:pb-10"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(rgba(1,108,251,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(1,108,251,0.08) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#030a18]/80 via-transparent to-[#030306]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={SESSION_FLOW.badge}
          title={SESSION_FLOW.title}
          highlight={SESSION_FLOW.highlight}
          subtitle={SESSION_FLOW.subtitle}
          className="!mb-8 sm:!mb-10"
        />

        <div className="mx-auto w-full max-w-5xl lg:max-w-6xl rounded-2xl border border-white/10 bg-[#0c0c12] overflow-hidden">
          <div className="border-b border-white/10 px-4 py-4 sm:px-6 sm:py-5">
            <h3 className="text-center text-xs sm:text-sm font-bold uppercase tracking-[0.15em] text-cyan-400">
              {SESSION_FLOW.stepsHeading}
            </h3>
          </div>

          <ol className="divide-y divide-white/10">
            {SESSION_STEPS.map((step) => {
              const Icon = STEP_ICONS[step.icon]
              return (
                <li
                  key={step.number}
                  className="flex gap-4 px-4 py-5 sm:gap-5 sm:px-6 sm:py-6"
                >
                  <div className="flex shrink-0 flex-col items-center gap-2">
                    <span className="text-sm sm:text-base font-bold tabular-nums text-cyan-400">
                      {step.number}
                    </span>
                    <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-lg border-2 border-cyan-400 bg-[#061830]/90 text-white shadow-[0_0_20px_rgba(34,211,238,0.2)]">
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </div>
                  </div>
                  <div className="min-w-0 pt-0.5">
                    <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-cyan-400/90">
                      {step.label}
                    </p>
                    <p className="mt-0.5 text-base sm:text-lg font-bold text-white">
                      {step.title}
                    </p>
                    <p className="mt-2 text-xs sm:text-sm text-[#9ca3af] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
