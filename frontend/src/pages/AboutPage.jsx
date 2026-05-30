import { Share2, Globe, PlayCircle } from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'
import TestimonialsSection from '../components/home/TestimonialsSection'
import { SITE, fullAddress } from '../config/site'

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="About CLUB ZENO"
          title="Nagpur's Premium"
          highlight="Rooftop Gym"
          subtitle={`Located at ${SITE.landmark}, we are redefining fitness in Nagpur with technology-driven training and world-class facilities.`}
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          <img
            src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&h=500&fit=crop"
            alt="About CLUB ZENO"
            className="rounded-2xl zeno-border-glow w-full object-cover aspect-video"
          />
          <div className="space-y-4 text-[#9ca3af] leading-relaxed">
            <p>
              <strong className="text-white">{SITE.name}</strong> is a corporate rooftop
              fitness center offering AI modes, kettlebell training, CrossFit HIIT,
              resistance training, recovery with sauna, slider pilates, and compound
              movement programs.
            </p>
            <p>
              Our mission is to deliver a premium, results-focused experience for every
              member—from beginners to athletes—right in the heart of Jai Prakash Nagar
              on Wardha Road.
            </p>
            <p>
              <strong className="text-white">Address:</strong> {fullAddress}
            </p>
            <p>
              <strong className="text-white">Landmark:</strong> {SITE.landmark}
            </p>

            <div className="pt-6">
              <h3 className="text-white font-semibold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a
                  href={SITE.social.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 hover:border-cyan-500/50 transition"
                >
                  <Share2 className="h-5 w-5 text-cyan-400" />
                  Instagram
                </a>
                <a
                  href={SITE.social.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 hover:border-cyan-500/50 transition"
                >
                  <Globe className="h-5 w-5 text-cyan-400" />
                  Facebook
                </a>
                <a
                  href={SITE.social.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 hover:border-cyan-500/50 transition"
                >
                  <PlayCircle className="h-5 w-5 text-cyan-400" />
                  YouTube
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TestimonialsSection />
    </div>
  )
}
