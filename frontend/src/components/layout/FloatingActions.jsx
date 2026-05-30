import { Phone } from 'lucide-react'
import { telUrl, whatsappUrl } from '../../config/site'
import WhatsAppIcon from '../ui/WhatsAppIcon'

export default function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href={whatsappUrl()}
        target="_blank"
        rel="noreferrer"
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/40 transition hover:scale-105 hover:bg-[#20bd5a]"
        aria-label="Chat on WhatsApp"
        title="WhatsApp"
      >
        <WhatsAppIcon className="h-8 w-8" />
      </a>
      <a
        href={telUrl()}
        className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-[#0c0c12]/95 backdrop-blur text-white shadow-xl transition hover:scale-105 hover:border-cyan-500/50"
        aria-label="Call CLUB ZENO"
        title="Call Now"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  )
}
