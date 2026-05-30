/** CLUB ZENO — update phone/WhatsApp before go-live */
export const SITE = {
  name: 'CLUB ZENO',
  legalName: 'CLUB ZENO',
  tagline: 'Premium Fitness Center in Nagpur',
  phone: '+919876543210',
  phoneDisplay: '+91 98765 43210',
  whatsapp: '919876543210',
  email: 'info@clubzeno.in',
  address: {
    line1: 'Corporate Rooftop, Opposite Westside Mall',
    line2: 'Wardha Road, Jai Prakash Nagar, New Sneh Nagar',
    city: 'Nagpur',
    state: 'Maharashtra',
    pincode: '440015',
    country: 'India',
  },
  landmark: 'Opposite Westside Mall, Wardha Road',
  geo: { lat: 21.1068, lng: 79.0722 },
  hours: '6:00 AM – 10:00 PM',
  social: {
    instagram: 'https://www.instagram.com/clubzeno',
    facebook: 'https://www.facebook.com/clubzeno',
    youtube: 'https://www.youtube.com/@clubzeno',
  },
  gbpKeywords: [
    'gym in Nagpur',
    'fitness center Nagpur',
    'best gym Wardha Road',
    'CrossFit Nagpur',
    'HIIT gym Nagpur',
    'personal training Nagpur',
    'gym near Westside Mall',
    'CLUB ZENO Nagpur',
    'rooftop gym Nagpur',
    'kettlebell training Nagpur',
  ],
}

export const fullAddress = `${SITE.address.line1}, ${SITE.address.line2}, ${SITE.address.city}, ${SITE.address.state} – ${SITE.address.pincode}`

export const mapsQuery = encodeURIComponent(
  `${SITE.name}, ${SITE.landmark}, ${SITE.address.city}, ${SITE.address.state} ${SITE.address.pincode}`,
)

export const mapsEmbedUrl = `https://maps.google.com/maps?q=${mapsQuery}&hl=en&z=16&output=embed`
export const mapsLinkUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`

export function whatsappUrl(message) {
  const text = encodeURIComponent(
    message ||
      `Hi ${SITE.name}, I would like to know more about membership and services at your Nagpur gym.`,
  )
  return `https://wa.me/${SITE.whatsapp}?text=${text}`
}

export function telUrl() {
  return `tel:${SITE.phone.replace(/\s/g, '')}`
}

export const SERVICES = [
  {
    id: 'ai-modes',
    title: 'AI Modes',
    description:
      'Smart training modes powered by AI-guided programs tailored to your goals, recovery, and progress.',
    icon: 'cpu',
    accent: 'from-blue-600 to-cyan-400',
  },
  {
    id: 'kettlebell',
    title: 'Kettlebell',
    description:
      'Functional kettlebell sessions for strength, conditioning, and athletic performance.',
    icon: 'dumbbell',
    accent: 'from-indigo-600 to-blue-400',
  },
  {
    id: 'crossfit-hiit',
    title: 'CrossFit HIIT',
    description:
      'High-intensity CrossFit and HIIT workouts that burn fat and build elite endurance.',
    icon: 'flame',
    accent: 'from-violet-600 to-cyan-400',
  },
  {
    id: 'resistance',
    title: 'Resistance Training',
    description:
      'Premium resistance machines, cables, and free weights for serious muscle building.',
    icon: 'activity',
    accent: 'from-blue-700 to-teal-400',
  },
  {
    id: 'recovery',
    title: 'Recovery & Sauna',
    description:
      'Dedicated recovery zone with sauna access to recharge muscles and reduce soreness.',
    icon: 'heart-pulse',
    accent: 'from-cyan-600 to-emerald-400',
  },
  {
    id: 'pilates',
    title: 'Slider Pilates',
    description:
      'Core-focused slider pilates for flexibility, posture, and controlled strength.',
    icon: 'wind',
    accent: 'from-sky-600 to-cyan-300',
  },
  {
    id: 'compound',
    title: 'Compound Movement',
    description:
      'Expert-led compound lifts—squats, deadlifts, presses—for real-world strength.',
    icon: 'trending-up',
    accent: 'from-blue-500 to-cyan-500',
  },
]

export const TRAINERS = [
  {
    name: 'Arjun Mehta',
    role: 'Head Strength Coach',
    image:
      'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50c?w=600&h=800&fit=crop',
    social: { instagram: '#', twitter: '#' },
  },
  {
    name: 'Priya Sharma',
    role: 'HIIT & Pilates Specialist',
    image:
      'https://images.unsplash.com/photo-1594381898411-8465977c4a9f?w=600&h=800&fit=crop',
    social: { instagram: '#', twitter: '#' },
  },
  {
    name: 'Rahul Deshmukh',
    role: 'CrossFit & Conditioning',
    image:
      'https://images.unsplash.com/photo-1633332755192-727a05c4013b?w=600&h=800&fit=crop',
    social: { instagram: '#', twitter: '#' },
  },
  {
    name: 'Ananya Kulkarni',
    role: 'Recovery & Nutrition',
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=800&fit=crop',
    social: { instagram: '#', twitter: '#' },
  },
]

export const PRICING = [
  {
    id: 'starter',
    name: 'Starter',
    price: 999,
    description: 'Perfect for beginners starting their fitness journey.',
    popular: false,
    features: [
      'Gym Access (6 AM – 10 PM)',
      'Basic Equipment Usage',
      'Locker & Shower Facility',
      '2 Group Classes / Week',
      'Fitness Assessment',
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 1999,
    description: 'Most popular choice for serious fitness enthusiasts.',
    popular: true,
    features: [
      'Extended Gym Access',
      'All Equipment & Zones',
      '4 Personal Training Sessions',
      'Unlimited Group Classes',
      'Customized Diet Guidance',
      'Body Composition Analysis',
      'Sauna & Recovery Access',
    ],
  },
  {
    id: 'elite',
    name: 'Elite',
    price: 2999,
    description: 'The ultimate fitness experience with VIP perks.',
    popular: false,
    features: [
      'Everything in Pro Plan',
      'Unlimited PT Sessions',
      '1-on-1 Nutrition Coaching',
      'Priority Class Booking',
      'Recovery & Massage Therapy',
      'Guest Passes (2 / Month)',
    ],
  },
]

export const TESTIMONIALS = [
  {
    name: 'Vikram Patil',
    role: 'Member since 2023',
    text: 'CLUB ZENO transformed my routine. The rooftop vibe, expert coaches, and CrossFit HIIT sessions are unmatched in Nagpur.',
    rating: 5,
  },
  {
    name: 'Sneha Reddy',
    role: 'Member since 2024',
    text: 'Best gym near Westside Mall. AI-guided workouts and recovery sauna keep me consistent. Highly recommend the trial session!',
    rating: 5,
  },
  {
    name: 'Amit Joshi',
    role: 'Member since 2022',
    text: 'Professional trainers, clean facility, and real results. The compound movement program built strength I never had before.',
    rating: 5,
  },
]

export const HERO_SLIDES = [
  {
    image:
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&h=1080&fit=crop',
    badge: 'Premium Fitness Center',
    title: 'Build Your',
    highlight: 'Dream Physique',
    subtitle:
      'Premium fitness experience in Nagpur with expert trainers, AI modes, and rooftop training.',
  },
  {
    image:
      'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1920&h=1080&fit=crop',
    badge: 'Opposite Westside Mall',
    title: 'Train at',
    highlight: 'CLUB ZENO',
    subtitle:
      'CrossFit HIIT, kettlebell, resistance training & recovery—on Wardha Road, Nagpur.',
  },
  {
    image:
      'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=1920&h=1080&fit=crop',
    badge: 'Book a Free Trial',
    title: 'Start Your',
    highlight: 'Fitness Journey',
    subtitle: 'Book a trial session today and experience Nagpur’s premium rooftop gym.',
  },
]

export const STATS = [
  { icon: 'users', value: '2,500+', label: 'Active Members' },
  { icon: 'award', value: '15+', label: 'Expert Trainers' },
  { icon: 'clock', value: '6AM–10PM', label: 'Open Hours' },
  { icon: 'trending-up', value: '98%', label: 'Success Rate' },
]
