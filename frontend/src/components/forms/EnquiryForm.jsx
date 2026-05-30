import { useState } from 'react'
import { Send } from 'lucide-react'
import { SITE, whatsappUrl } from '../../config/site'

const initial = {
  name: '',
  phone: '',
  email: '',
  interest: 'membership',
  message: '',
}

export default function EnquiryForm({
  trialData = null,
  onSuccess,
  compact = false,
}) {
  const [form, setForm] = useState({
    ...initial,
    message: trialData
      ? `Trial booking follow-up.\nPreferred date: ${trialData.date}\nPreferred time: ${trialData.time}\nGoal: ${trialData.goal}`
      : '',
  })
  const [submitted, setSubmitted] = useState(false)

  const update = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const buildWhatsAppMessage = () => {
    let msg = `*Enquiry — ${SITE.name}*\n`
    msg += `Name: ${form.name}\n`
    msg += `Phone: ${form.phone}\n`
    if (form.email) msg += `Email: ${form.email}\n`
    msg += `Interest: ${form.interest}\n`
    if (trialData) {
      msg += `\n*Trial Booking:*\nDate: ${trialData.date}\nTime: ${trialData.time}\nGoal: ${trialData.goal}\n`
    }
    if (form.message) msg += `\nMessage: ${form.message}`
    return msg
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    window.open(whatsappUrl(buildWhatsAppMessage()), '_blank', 'noreferrer')
    setSubmitted(true)
    onSuccess?.()
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-cyan-500/30 bg-cyan-500/10 p-8 text-center">
        <p className="text-lg font-semibold text-white">Thank you!</p>
        <p className="mt-2 text-[#9ca3af]">
          Your enquiry was sent via WhatsApp. Our team will contact you shortly.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`space-y-4 ${compact ? '' : 'rounded-2xl border border-white/10 bg-[#0c0c12] p-6 sm:p-8'}`}
    >
      {trialData && (
        <p className="text-sm text-cyan-400 rounded-lg bg-cyan-500/10 px-4 py-3 border border-cyan-500/20">
          Complete your enquiry after your trial booking details below.
        </p>
      )}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-sm text-[#9ca3af] mb-1.5">Full Name *</label>
          <input
            name="name"
            required
            value={form.name}
            onChange={update}
            className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none focus:border-cyan-500/50"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block text-sm text-[#9ca3af] mb-1.5">Phone *</label>
          <input
            name="phone"
            type="tel"
            required
            value={form.phone}
            onChange={update}
            className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none focus:border-cyan-500/50"
            placeholder="+91 XXXXX XXXXX"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm text-[#9ca3af] mb-1.5">Email</label>
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={update}
          className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none focus:border-cyan-500/50"
          placeholder="you@email.com"
        />
      </div>
      <div>
        <label className="block text-sm text-[#9ca3af] mb-1.5">I&apos;m interested in</label>
        <select
          name="interest"
          value={form.interest}
          onChange={update}
          className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none focus:border-cyan-500/50"
        >
          <option value="membership">Membership</option>
          <option value="trial">Free Trial</option>
          <option value="personal-training">Personal Training</option>
          <option value="corporate">Corporate Plan</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label className="block text-sm text-[#9ca3af] mb-1.5">Message</label>
        <textarea
          name="message"
          rows={4}
          value={form.message}
          onChange={update}
          className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none focus:border-cyan-500/50 resize-none"
          placeholder="Tell us about your fitness goals..."
        />
      </div>
      <button
        type="submit"
        className="w-full inline-flex items-center justify-center gap-2 rounded-full zeno-gradient py-3.5 font-semibold text-white transition hover:opacity-90"
      >
        <Send className="h-5 w-5" />
        Send Enquiry via WhatsApp
      </button>
      <p className="text-xs text-center text-[#6b7280]">
        Submissions open WhatsApp with your details — update number in site config.
      </p>
    </form>
  )
}
