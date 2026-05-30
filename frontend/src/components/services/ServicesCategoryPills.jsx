import ServiceIcon from './ServiceIcon'

const ACTIVE_PILL =
  'border-transparent bg-[#22c55e] text-white shadow-[0_0_16px_rgba(34,197,94,0.3)]'
const INACTIVE_PILL =
  'border-[#22c55e] bg-transparent text-white hover:bg-[#22c55e]/10'

export default function ServicesCategoryPills({ categories, activeCategory, onChange }) {
  return (
    <div className="grid grid-cols-2 gap-1.5 max-w-[340px] mx-auto sm:max-w-none sm:mx-0 sm:flex sm:flex-wrap sm:justify-center sm:gap-2 mb-6 sm:mb-12 px-1 sm:px-2">
      {categories.map((cat) => {
        const isActive = activeCategory === cat.id
        return (
          <button
            key={cat.id}
            type="button"
            onClick={() => onChange(cat.id)}
            className={`inline-flex w-full sm:w-auto items-center justify-center gap-1.5 rounded-full border-2 px-2.5 py-2 text-[11px] leading-tight font-semibold transition sm:gap-2 sm:px-5 sm:py-3 sm:text-sm ${
              isActive ? ACTIVE_PILL : INACTIVE_PILL
            }`}
          >
            <ServiceIcon
              name={cat.icon}
              className="h-3.5 w-3.5 shrink-0 sm:h-5 sm:w-5"
            />
            <span className="text-center sm:whitespace-nowrap">{cat.label}</span>
          </button>
        )
      })}
    </div>
  )
}
