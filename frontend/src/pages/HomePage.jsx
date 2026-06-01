import Hero from '../components/home/Hero'
import AboutSection from '../components/home/AboutSection'
import WhatWeOfferSection from '../components/home/WhatWeOfferSection'
import TrainingZonesSection from '../components/home/TrainingZonesSection'
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
      <TrainersSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <EnquirySection />
    </>
  )
}
