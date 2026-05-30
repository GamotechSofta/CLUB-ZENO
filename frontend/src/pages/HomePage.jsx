import Hero from '../components/home/Hero'
import AboutSection from '../components/home/AboutSection'
import WhatWeOfferSection from '../components/home/WhatWeOfferSection'
import TrainersSection from '../components/home/TrainersSection'
import TestimonialsSection from '../components/home/TestimonialsSection'
import EnquirySection from '../components/forms/EnquirySection'

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <WhatWeOfferSection />
      <TrainersSection />
      <TestimonialsSection />
      <EnquirySection />
    </>
  )
}
