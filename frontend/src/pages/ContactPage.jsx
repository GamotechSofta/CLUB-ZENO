import { MapPin, Phone as PhoneIcon } from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'
import EnquiryForm from '../components/forms/EnquiryForm'
import { InstagramIcon } from '../components/ui/SocialIcons'
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
                    <PhoneIcon className="h-5 w-5 text-cyan-400 shrink-0" />
                    {SITE.phoneDisplay}
                  </a>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#0c0c12] p-6">
              <h3 className="font-semibold mb-4">Connect With Us</h3>
              <div className="flex flex-wrap gap-3">
                <a
                  href={SITE.social.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-lg border border-white/10 p-2.5 text-[#E4405F] hover:border-[#E4405F]/60 hover:bg-[#E4405F]/10 transition"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="h-5 w-5" />
                </a>
                <a
                  href={telUrl()}
                  className="inline-flex rounded-lg border border-white/10 p-2.5 text-cyan-400 hover:border-cyan-400/60 hover:bg-cyan-400/10 transition"
                  aria-label="Call CLUB ZENO"
                >
                  <PhoneIcon className="h-5 w-5" />
                </a>
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-lg border border-white/10 p-2.5 text-[#25D366] hover:border-[#25D366]/60 hover:bg-[#25D366]/10 transition"
                  aria-label="Chat on WhatsApp"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3">
            <EnquiryForm />
          </div>
        </div>
      </div>
    </div>
  )
}
