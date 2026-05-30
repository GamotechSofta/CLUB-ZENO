import { useState } from 'react'
import { CheckCircle2, Loader2, Send, X } from 'lucide-react'
import { SITE, WEB3FORMS_ENDPOINT, getWeb3FormsAccessKey } from '../../config/site'

const initial = {
  name: '',
  phone: '',
  email: '',
  address: '',
  interest: 'membership',
  message: '',
}

export default function EnquiryForm({ compact = false }) {
  const [form, setForm] = useState(initial)
  const [status, setStatus] = useState('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [showSuccessPopup, setShowSuccessPopup] = useState(false)

  const update = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    setErrorMessage('')

    const accessKey = getWeb3FormsAccessKey()
    if (!accessKey) {
      setStatus('error')
      setErrorMessage('Form is not configured. Add VITE_WEB3FORMS_ACCESS_KEY to .env')
      return
    }

    const formData = new FormData()
    formData.append('access_key', accessKey)
    formData.append('subject', `New enquiry — ${SITE.name}`)
    formData.append('from_name', form.name)
    formData.append('name', form.name)
    formData.append('phone', form.phone)
    formData.append('email', form.email)
    formData.append('address', form.address)
    formData.append('interest', form.interest)
    formData.append('message', form.message)

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        body: formData,
      })
      const data = await response.json()

      if (data.success) {
        setForm(initial)
        setStatus('idle')
        setShowSuccessPopup(true)
        return
      }

      setStatus('error')
      setErrorMessage(data.message || 'Something went wrong. Please try again.')
    } catch {
      setStatus('error')
      setErrorMessage('Network error. Please check your connection and try again.')
    }
  }

  return (
    <>
      {showSuccessPopup && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="enquiry-success-title"
          onClick={() => setShowSuccessPopup(false)}
        >
          <div
            className="relative w-full max-w-md rounded-2xl border border-cyan-500/30 bg-[#0c0c12] p-8 text-center shadow-2xl zeno-glow"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setShowSuccessPopup(false)}
              className="absolute right-4 top-4 rounded-lg p-1 text-white/60 hover:bg-white/10 hover:text-white"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
            <CheckCircle2 className="mx-auto h-14 w-14 text-cyan-400" />
            <p id="enquiry-success-title" className="mt-4 text-xl font-semibold text-white">
              Thank you!
            </p>
            <p className="mt-2 text-[#9ca3af]">
              Your enquiry was submitted successfully. Our team will contact you shortly.
            </p>
            <button
              type="button"
              onClick={() => setShowSuccessPopup(false)}
              className="mt-6 w-full rounded-full zeno-gradient py-3 font-semibold text-white transition hover:opacity-90"
            >
              OK
            </button>
          </div>
        </div>
      )}

    <form
      onSubmit={handleSubmit}
      className={`space-y-4 ${compact ? '' : 'rounded-2xl border border-white/10 bg-[#0c0c12] p-6 sm:p-8'}`}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-sm text-[#9ca3af] mb-1.5">Full Name *</label>
          <input
            name="name"
            required
            value={form.name}
            onChange={update}
            disabled={status === 'sending'}
            className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none focus:border-cyan-500/50 disabled:opacity-60"
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
            disabled={status === 'sending'}
            className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none focus:border-cyan-500/50 disabled:opacity-60"
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
          disabled={status === 'sending'}
          className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none focus:border-cyan-500/50 disabled:opacity-60"
          placeholder="you@email.com"
        />
      </div>
      <div>
        <label className="block text-sm text-[#9ca3af] mb-1.5">Address *</label>
        <input
          name="address"
          required
          value={form.address}
          onChange={update}
          disabled={status === 'sending'}
          className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none focus:border-cyan-500/50 disabled:opacity-60"
          placeholder="Your area / full address in Nagpur"
        />
      </div>
      <div>
        <label className="block text-sm text-[#9ca3af] mb-1.5">I&apos;m interested in</label>
        <select
          name="interest"
          value={form.interest}
          onChange={update}
          disabled={status === 'sending'}
          className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none focus:border-cyan-500/50 disabled:opacity-60"
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
          disabled={status === 'sending'}
          className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none focus:border-cyan-500/50 resize-none disabled:opacity-60"
          placeholder="Tell us about your fitness goals..."
        />
      </div>

      {status === 'error' && (
        <p className="text-sm text-red-400" role="alert">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full inline-flex items-center justify-center gap-2 rounded-full zeno-gradient py-3.5 font-semibold text-white transition hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'sending' ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Sending…
          </>
        ) : (
          <>
            <Send className="h-5 w-5" />
            Submit Enquiry
          </>
        )}
      </button>
    </form>
    </>
  )
}
