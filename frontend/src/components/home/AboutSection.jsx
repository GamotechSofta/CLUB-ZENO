import { Award, Users, Clock, TrendingUp } from 'lucide-react'
import GradientText from '../ui/GradientText'
import { ABOUT_IMAGE, STATS } from '../../config/site'

const iconMap = {
  users: Users,
  award: Award,
  clock: Clock,
  'trending-up': TrendingUp,
}

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
            <div className="absolute -bottom-6 -right-4 sm:right-6 rounded-xl border border-white/10 bg-[#0c0c12]/95 backdrop-blur p-5 zeno-glow max-w-[200px]">
              <Award className="h-8 w-8 text-cyan-400 mb-2" />
              <p className="text-3xl font-bold">10+</p>
              <p className="text-sm text-[#9ca3af]">Years of Excellence</p>
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

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {STATS.map(({ icon, value, label }) => {
                const Icon = iconMap[icon]
                return (
                  <div key={label}>
                    <Icon className="h-5 w-5 text-cyan-400 mb-2" />
                    <p className="text-xl sm:text-2xl font-bold">{value}</p>
                    <p className="text-xs sm:text-sm text-[#6b7280] mt-1">{label}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
