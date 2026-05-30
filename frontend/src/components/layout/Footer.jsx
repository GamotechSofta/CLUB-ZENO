import { Link } from 'react-router-dom'
import { Share2, Globe, PlayCircle, MapPin, Phone, Mail, Clock } from 'lucide-react'
import { SITE, fullAddress, telUrl } from '../../config/site'
import Logo from '../ui/Logo'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-[#030306]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 pb-12 sm:pt-10 sm:pb-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo
              className="h-10 w-auto max-w-[200px] sm:h-11 sm:max-w-[220px] mb-4"
              link
            />
            <p className="text-sm text-[#9ca3af] leading-relaxed mb-4">
              {SITE.tagline}. Premium gym on Wardha Road, Nagpur — opposite Westside
              Mall.
            </p>
            <div className="flex gap-3">
              <a
                href={SITE.social.instagram}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-white/10 p-2.5 text-white/70 hover:border-cyan-500/50 hover:text-cyan-400 transition"
                aria-label="Instagram"
              >
                <Share2 className="h-5 w-5" />
              </a>
              <a
                href={SITE.social.facebook}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-white/10 p-2.5 text-white/70 hover:border-cyan-500/50 hover:text-cyan-400 transition"
                aria-label="Facebook"
              >
                <Globe className="h-5 w-5" />
              </a>
              <a
                href={SITE.social.youtube}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-white/10 p-2.5 text-white/70 hover:border-cyan-500/50 hover:text-cyan-400 transition"
                aria-label="YouTube"
              >
                <PlayCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-[#9ca3af]">
              <li>
                <Link to="/" className="hover:text-cyan-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-cyan-400 transition">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-cyan-400 transition">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/location" className="hover:text-cyan-400 transition">
                  Location
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-cyan-400 transition">
                  Contact
                </Link>
              </li>
              <li>
                <a href="/#contact" className="hover:text-cyan-400 transition">
                  Book Trial / Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">NAP (Google Business)</h3>
            <ul className="space-y-3 text-sm text-[#9ca3af]">
              <li className="flex gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-cyan-400 mt-0.5" />
                <span itemProp="address">{fullAddress}</span>
              </li>
              <li className="flex gap-2">
                <span className="text-cyan-400 font-medium shrink-0">Landmark:</span>
                <span>{SITE.landmark}</span>
              </li>
              <li className="flex gap-2">
                <Phone className="h-4 w-4 shrink-0 text-cyan-400" />
                <a href={telUrl()} className="hover:text-white transition">
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li className="flex gap-2">
                <Mail className="h-4 w-4 shrink-0 text-cyan-400" />
                <a
                  href={`mailto:${SITE.email}`}
                  className="hover:text-white transition"
                >
                  {SITE.email}
                </a>
              </li>
              <li className="flex gap-2">
                <Clock className="h-4 w-4 shrink-0 text-cyan-400" />
                <span>{SITE.hours}</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Local SEO Keywords</h3>
            <p className="text-xs text-[#6b7280] leading-relaxed">
              {SITE.gbpKeywords.join(' · ')}
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-4 text-sm text-[#6b7280]">
          <p>
            © {year} {SITE.name}. All rights reserved.
          </p>
          <p>
            Gym in Nagpur · Fitness center Wardha Road · Opposite Westside Mall
          </p>
        </div>
      </div>
    </footer>
  )
}
