import Hero from '../components/home/Hero'
import AboutSection from '../components/home/AboutSection'
import ServicesSection from '../components/home/ServicesSection'
import TrainersSection from '../components/home/TrainersSection'
import PricingSection from '../components/home/PricingSection'
import TestimonialsSection from '../components/home/TestimonialsSection'
import TrialBooking from '../components/forms/TrialBooking'

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <TrainersSection />
      <PricingSection />
      <TestimonialsSection />
      <TrialBooking />
    </>
  )
}
