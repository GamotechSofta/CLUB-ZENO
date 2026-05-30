import GradientText from './GradientText'

export default function SectionHeading({
  badge,
  title,
  highlight,
  subtitle,
  align = 'center',
  className = '',
}) {
  const alignClass =
    align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <div className={`max-w-3xl mb-14 ${alignClass} ${className}`}>
      {badge && (
        <div
          className={`inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm mb-5 ${align === 'center' ? 'mx-auto' : ''}`}
        >
          <span className="h-2 w-2 rounded-full zeno-gradient" />
          <span className="text-white/90">{badge}</span>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
        {title}{' '}
        {highlight && <GradientText>{highlight}</GradientText>}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-[#9ca3af] leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}
