import { Check, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeading from '../ui/SectionHeading'
import { PRICING } from '../../config/site'

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 sm:py-28 bg-[#030306]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Flexible Plans to"
          highlight="Succeed"
          subtitle="Flexible membership plans designed to fit your goals and budget. No hidden fees."
        />

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {PRICING.map((plan) => (
            <article
              key={plan.id}
              className={`relative rounded-2xl border p-6 sm:p-8 flex flex-col ${
                plan.popular
                  ? 'zeno-border-glow zeno-glow scale-[1.02]'
                  : 'border-white/10 bg-[#0c0c12]'
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full zeno-gradient px-4 py-1 text-xs font-bold tracking-wide">
                  ★ MOST POPULAR
                </span>
              )}
              <div className="flex items-center gap-2 mb-2">
                <Zap className="h-5 w-5 text-cyan-400" />
                <h3 className="text-xl font-bold">{plan.name}</h3>
              </div>
              <p className="text-sm text-[#9ca3af] mb-6">{plan.description}</p>
              <p className="mb-6">
                <span className="zeno-gradient-text text-2xl font-bold">₹</span>{' '}
                <span className="text-4xl font-bold">{plan.price.toLocaleString('en-IN')}</span>
                <span className="text-[#9ca3af]"> /month</span>
              </p>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex gap-2 text-sm text-[#d1d5db]">
                    <Check className="h-5 w-5 shrink-0 text-cyan-400" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`block text-center rounded-full py-3 font-semibold transition ${
                  plan.popular
                    ? 'zeno-gradient text-white hover:opacity-90'
                    : 'border border-white/20 hover:bg-white/10'
                }`}
              >
                Get Started
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
