import Hero from '../components/home/Hero'
import AboutSection from '../components/home/AboutSection'
import WhatWeOfferSection from '../components/home/WhatWeOfferSection'
import TrainingZonesSection from '../components/home/TrainingZonesSection'
import SessionFlowSection from '../components/home/SessionFlowSection'
import TrainersSection from '../components/home/TrainersSection'
import WhyChooseSection from '../components/home/WhyChooseSection'
import TestimonialsSection from '../components/home/TestimonialsSection'
import EnquirySection from '../components/forms/EnquirySection'

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <WhatWeOfferSection />
      <TrainingZonesSection />
      <SessionFlowSection />
      <TrainersSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <EnquirySection />
    </>
  )
}
