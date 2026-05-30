import { useState } from 'react'
import { Calendar, ChevronRight } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import EnquiryForm from './EnquiryForm'
import { whatsappUrl, SITE } from '../../config/site'

export default function TrialBooking() {
  const [step, setStep] = useState(1)
  const [trial, setTrial] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    goal: '',
  })

  const update = (e) => {
    setTrial((t) => ({ ...t, [e.target.name]: e.target.value }))
  }

  const handleTrialSubmit = (e) => {
    e.preventDefault()
    const msg = `*Free Trial Booking — ${SITE.name}*\nName: ${trial.name}\nPhone: ${trial.phone}\nDate: ${trial.date}\nTime: ${trial.time}\nGoal: ${trial.goal}\nLocation: ${SITE.landmark}, Nagpur`
    window.open(whatsappUrl(msg), '_blank', 'noreferrer')
    setStep(2)
  }

  return (
    <section id="trial" className="py-20 sm:py-28 bg-[#030306]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Free Trial"
          title="Book Your"
          highlight="Trial Session"
          subtitle="Experience CLUB ZENO on Wardha Road. After booking, complete the enquiry form so our team can confirm your slot."
        />

        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-10">
            <div
              className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium ${
                step === 1 ? 'zeno-gradient text-white' : 'bg-white/10 text-white/60'
              }`}
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black/30 text-xs">
                1
              </span>
              Trial Booking
            </div>
            <ChevronRight className="h-5 w-5 text-white/30" />
            <div
              className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium ${
                step === 2 ? 'zeno-gradient text-white' : 'bg-white/10 text-white/60'
              }`}
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black/30 text-xs">
                2
              </span>
              Enquiry Form
            </div>
          </div>

          {step === 1 ? (
            <form
              onSubmit={handleTrialSubmit}
              className="rounded-2xl border border-white/10 bg-[#0c0c12] p-6 sm:p-8 space-y-4"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm text-[#9ca3af] mb-1.5">Name *</label>
                  <input
                    name="name"
                    required
                    value={trial.name}
                    onChange={update}
                    className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none focus:border-cyan-500/50"
                  />
                </div>
                <div>
                  <label className="block text-sm text-[#9ca3af] mb-1.5">Phone *</label>
                  <input
                    name="phone"
                    type="tel"
                    required
                    value={trial.phone}
                    onChange={update}
                    className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none focus:border-cyan-500/50"
                  />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm text-[#9ca3af] mb-1.5">
                    Preferred Date *
                  </label>
                  <input
                    name="date"
                    type="date"
                    required
                    value={trial.date}
                    onChange={update}
                    className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none focus:border-cyan-500/50"
                  />
                </div>
                <div>
                  <label className="block text-sm text-[#9ca3af] mb-1.5">
                    Preferred Time *
                  </label>
                  <select
                    name="time"
                    required
                    value={trial.time}
                    onChange={update}
                    className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none focus:border-cyan-500/50"
                  >
                    <option value="">Select time</option>
                    <option value="6:00 AM">6:00 AM</option>
                    <option value="8:00 AM">8:00 AM</option>
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="5:00 PM">5:00 PM</option>
                    <option value="7:00 PM">7:00 PM</option>
                    <option value="9:00 PM">9:00 PM</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm text-[#9ca3af] mb-1.5">
                  Fitness Goal *
                </label>
                <select
                  name="goal"
                  required
                  value={trial.goal}
                  onChange={update}
                  className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none focus:border-cyan-500/50"
                >
                  <option value="">Select goal</option>
                  <option value="Weight Loss">Weight Loss</option>
                  <option value="Muscle Gain">Muscle Gain</option>
                  <option value="CrossFit / HIIT">CrossFit / HIIT</option>
                  <option value="General Fitness">General Fitness</option>
                  <option value="Recovery">Recovery</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-full zeno-gradient py-3.5 font-semibold transition hover:opacity-90"
              >
                <Calendar className="h-5 w-5" />
                Book Trial & Continue
              </button>
            </form>
          ) : (
            <EnquiryForm trialData={trial} />
          )}
        </div>
      </div>
    </section>
  )
}
