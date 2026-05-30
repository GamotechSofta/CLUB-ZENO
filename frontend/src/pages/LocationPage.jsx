import { MapPin, Phone, Clock, Navigation, Landmark } from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'
import {
  SITE,
  fullAddress,
  mapsEmbedUrl,
  mapsLinkUrl,
  telUrl,
  whatsappUrl,
} from '../config/site'

export default function LocationPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Find Us"
          title="Visit"
          highlight="CLUB ZENO"
          subtitle="Corporate rooftop gym opposite Westside Mall on Wardha Road, Nagpur."
        />

        <div className="grid lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div className="rounded-2xl border border-white/10 bg-[#0c0c12] p-6 space-y-5">
              <div className="flex gap-4">
                <MapPin className="h-6 w-6 text-cyan-400 shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Address (GBP NAP)</h3>
                  <p className="text-[#9ca3af] text-sm leading-relaxed">{fullAddress}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Landmark className="h-6 w-6 text-cyan-400 shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Landmark</h3>
                  <p className="text-[#9ca3af] text-sm">{SITE.landmark}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="h-6 w-6 text-cyan-400 shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <a href={telUrl()} className="text-cyan-400 hover:underline">
                    {SITE.phoneDisplay}
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock className="h-6 w-6 text-cyan-400 shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Hours</h3>
                  <p className="text-[#9ca3af] text-sm">{SITE.hours}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={mapsLinkUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full zeno-gradient px-6 py-3 font-semibold text-sm"
              >
                <Navigation className="h-4 w-4" />
                Open in Google Maps
              </a>
              <a
                href={whatsappUrl(`Hi, I need directions to ${SITE.name} on Wardha Road.`)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-semibold text-sm hover:bg-white/10"
              >
                WhatsApp for Directions
              </a>
            </div>

            <p className="text-xs text-[#6b7280]">
              Replace the map embed URL in <code className="text-cyan-400">site.js</code>{' '}
              with your exact Google Business Profile embed link for best GBP accuracy.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden border border-white/10 aspect-square lg:aspect-auto lg:min-h-[480px]">
            <iframe
              title="CLUB ZENO location map Nagpur"
              src={mapsEmbedUrl}
              className="h-full w-full min-h-[400px] lg:min-h-[480px]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
