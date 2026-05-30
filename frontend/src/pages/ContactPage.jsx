import { Mail, MapPin, Phone } from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'
import EnquiryForm from '../components/forms/EnquiryForm'
import { FacebookIcon, InstagramIcon, YoutubeIcon } from '../components/ui/SocialIcons'
import WhatsAppIcon from '../components/ui/WhatsAppIcon'
import { SITE, fullAddress, telUrl, whatsappUrl } from '../config/site'

export default function ContactPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Contact"
          title="Get in"
          highlight="Touch"
          subtitle="Send a message or reach us directly. We respond quickly on WhatsApp and phone."
        />

        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-2xl border border-white/10 bg-[#0c0c12] p-6">
              <h3 className="font-semibold mb-4">Contact Details</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex gap-3 text-[#9ca3af]">
                  <MapPin className="h-5 w-5 text-cyan-400 shrink-0" />
                  {fullAddress}
                </li>
                <li>
                  <a
                    href={telUrl()}
                    className="flex gap-3 text-[#9ca3af] hover:text-white transition"
                  >
                    <Phone className="h-5 w-5 text-cyan-400 shrink-0" />
                    {SITE.phoneDisplay}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="flex gap-3 text-[#9ca3af] hover:text-white transition"
                  >
                    <Mail className="h-5 w-5 text-cyan-400 shrink-0" />
                    {SITE.email}
                  </a>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#0c0c12] p-5">
              <h3 className="font-semibold mb-4 text-white text-center sm:text-left">
                Follow Us
              </h3>
              <div className="flex justify-center gap-3 sm:flex-col sm:gap-2 sm:justify-stretch">
                <a
                  href={SITE.social.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="flex items-center justify-center rounded-xl border border-white/10 p-3.5 transition hover:border-cyan-500/50 sm:justify-start sm:gap-3 sm:px-4 sm:py-3"
                >
                  <InstagramIcon className="h-6 w-6 shrink-0 text-cyan-400 sm:h-5 sm:w-5" />
                  <span className="hidden sm:inline text-sm text-[#9ca3af] hover:text-white">
                    Instagram
                  </span>
                </a>
                <a
                  href={SITE.social.facebook}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="flex items-center justify-center rounded-xl border border-white/10 p-3.5 transition hover:border-cyan-500/50 sm:justify-start sm:gap-3 sm:px-4 sm:py-3"
                >
                  <FacebookIcon className="h-6 w-6 shrink-0 text-cyan-400 sm:h-5 sm:w-5" />
                  <span className="hidden sm:inline text-sm text-[#9ca3af] hover:text-white">
                    Facebook
                  </span>
                </a>
                <a
                  href={SITE.social.youtube}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube"
                  className="flex items-center justify-center rounded-xl border border-white/10 p-3.5 transition hover:border-cyan-500/50 sm:justify-start sm:gap-3 sm:px-4 sm:py-3"
                >
                  <YoutubeIcon className="h-6 w-6 shrink-0 text-cyan-400 sm:h-5 sm:w-5" />
                  <span className="hidden sm:inline text-sm text-[#9ca3af] hover:text-white">
                    YouTube
                  </span>
                </a>
              </div>
            </div>

            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-3 rounded-2xl bg-[#25D366] p-6 text-center font-semibold text-white transition hover:bg-[#20bd5a]"
            >
              <WhatsAppIcon className="h-6 w-6" />
              Chat on WhatsApp
            </a>
          </div>
          <div className="lg:col-span-3">
            <EnquiryForm />
          </div>
        </div>
      </div>
    </div>
  )
}
