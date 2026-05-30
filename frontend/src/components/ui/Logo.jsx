import { Link } from 'react-router-dom'
import logoSrc from '../../assets/ChatGPT_Image_May_30__2026__02_57_25_PM-removebg-preview.png'
import { SITE } from '../../config/site'

export default function Logo({ className = 'h-9 w-auto max-w-[160px] sm:max-w-[200px]', link = true }) {
  const image = (
    <img
      src={logoSrc}
      alt={SITE.name}
      className={`object-contain object-left ${className}`}
      decoding="async"
    />
  )

  if (link) {
    return (
      <Link to="/" className="inline-flex shrink-0 items-center">
        {image}
      </Link>
    )
  }

  return image
}
