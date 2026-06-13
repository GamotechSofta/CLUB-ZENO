import { Clock } from 'lucide-react'
import GradientText from '../ui/GradientText'
import { ABOUT_IMAGE, SITE } from '../../config/site'

export default function AboutSection() {
  return (
    <section id="about" className="pt-2 pb-8 sm:pt-10 sm:pb-10 relative">
      <div className="absolute right-0 top-1/4 h-48 w-1 zeno-gradient rounded-full opacity-60 hidden lg:block" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative">
            <div className="zeno-border-glow rounded-2xl overflow-hidden">
              <img
                src={ABOUT_IMAGE}
                alt="CLUB ZENO gym interior Nagpur"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
          </div>

          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Where Strength Meets <GradientText>Passion</GradientText>
            </h2>
            <p className="mt-6 text-[#9ca3af] leading-relaxed">
              {`CLUB ZENO is Nagpur's premium fitness destination at K10 Corporate, Top Floor, Jai Prakash Nagar — opposite Westside Mall on Wardha Road (landmark: above Skechers). We combine AI-guided training modes, CrossFit HIIT, kettlebell work, and recovery with sauna under one roof.`}
            </p>
            <p className="mt-4 text-[#9ca3af] leading-relaxed">
              Our certified trainers deliver personalized programs in a high-energy,
              community-driven environment built for real results—from compound lifts to
              slider pilates.
            </p>

            <div className="mt-10 inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
              <Clock className="h-5 w-5 shrink-0 text-cyan-400" aria-hidden />
              <p className="text-sm sm:text-base leading-none">
                <span className="font-semibold text-white">Open Hours</span>
                <span className="mx-2 text-[#6b7280]">·</span>
                <span className="text-[#9ca3af]">{SITE.hoursShort}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
