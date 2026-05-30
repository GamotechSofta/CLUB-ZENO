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

export const TRAINERS = [
  {
    id: 'trainer-1',
    name: 'Arjun Mehta',
    role: 'Head Strength Coach',
    social: { instagram: '#', twitter: '#' },
  },
  {
    id: 'trainer-2',
    name: 'Priya Sharma',
    role: 'HIIT & Pilates Specialist',
    social: { instagram: '#', twitter: '#' },
  },
  {
    id: 'trainer-3',
    name: 'Rahul Deshmukh',
    role: 'CrossFit & Conditioning',
    social: { instagram: '#', twitter: '#' },
  },
  {
    id: 'trainer-4',
    name: 'Ananya Kulkarni',
    role: 'Recovery & Nutrition',
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

// Same 3 photos as desktop; imageMobile = portrait crop for phones (768×1152)
export const HERO_SLIDES = [
  {
    id: 'hero-1',
    image:
      'https://res.cloudinary.com/dbzeao0ff/image/upload/v1780140380/1e752683-ff74-46f1-867b-6338a54ade30.png',
    imageMobile:
      'https://res.cloudinary.com/dbzeao0ff/image/upload/v1780140764/b58ff1a3-bb83-41ec-a303-eb3423b2a458.png',
    badge: 'Premium Fitness Center',
    title: 'Build Your',
    highlight: 'Dream Physique',
    subtitle:
      'Premium fitness experience in Nagpur with expert trainers, AI modes, and rooftop training.',
  },
  {
    id: 'hero-2',
    image:
      'https://res.cloudinary.com/dbzeao0ff/image/upload/v1780140404/a6a5f79f-e8eb-4819-bdbf-3fc2d0c1010e.png',
    imageMobile:
      'https://res.cloudinary.com/dbzeao0ff/image/upload/v1780141014/15789dcf-ab5d-4d3f-a403-9f8fb7f35b13.png',
    badge: 'Opposite Westside Mall',
    title: 'Train at',
    highlight: 'CLUB ZENO',
    subtitle:
      'CrossFit HIIT, kettlebell, resistance training & recovery—on Wardha Road, Nagpur.',
  },
  {
    id: 'hero-3',
    image:
      'https://res.cloudinary.com/dbzeao0ff/image/upload/v1780140442/4b8cfd66-6b27-405c-99cf-9152ce91df0a.png',
    imageMobile:
      'https://res.cloudinary.com/dbzeao0ff/image/upload/v1780141072/b4401047-622b-4199-8721-74f502b1a667.png',
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
