import SectionHeading from '../ui/SectionHeading'
import EnquiryForm from './EnquiryForm'

export default function EnquirySection() {
  return (
    <section id="contact" className="pt-8 pb-8 sm:pt-10 sm:pb-10 bg-[#030306]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Contact"
          title="Book Trial or"
          highlight="Enquiry form"
          subtitle="One form for free trial, membership, or any question. We'll get back to you soon."
        />
        <div className="max-w-2xl mx-auto">
          <EnquiryForm />
        </div>
      </div>
    </section>
  )
}
