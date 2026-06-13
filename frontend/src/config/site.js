/** CLUB ZENO — update phone/WhatsApp before go-live */
export const SITE = {
  name: 'CLUB ZENO',
  legalName: 'CLUB ZENO',
  tagline: 'Premium Fitness Center in Nagpur',
  phone: '+919699237168',
  phoneDisplay: '+91 96992 37168',
  whatsapp: '919699237168',
  address: {
    line1: 'Plot No. 10, K10 Corporate, Top Floor',
    line2: 'Jai Prakash Nagar, Opposite Westside Mall, Wardha Road',
    city: 'Nagpur',
    state: 'Maharashtra',
    pincode: '440015',
    country: 'India',
  },
  landmark: 'Above Skechers',
  geo: { lat: 21.1068, lng: 79.0722 },
  hours: 'morning 6am to 11am evening 5pm to 10pm',
  hoursShort: '6AM–11AM · 5PM–10PM',
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

export const ABOUT_IMAGE =
  'https://res.cloudinary.com/dbzeao0ff/image/upload/v1780309423/2de86d44-6829-427e-a6f4-278cf34f66dc.png'

export const fullAddress = `${SITE.address.line1}, ${SITE.address.line2}, ${SITE.address.city}, ${SITE.address.state} – ${SITE.address.pincode}`

// Map embed/search — unchanged query that already pinned the correct location
export const mapsQuery = encodeURIComponent(
  `${SITE.name}, Opposite Westside Mall, Wardha Road, ${SITE.address.city}, ${SITE.address.state} ${SITE.address.pincode}`,
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

/** Web3Forms — set VITE_WEB3FORMS_ACCESS_KEY in frontend/.env */
export const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit'

export function getWeb3FormsAccessKey() {
  return import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ?? ''
}

export const TRAINERS = [
  {
    id: 'tanushree',
    name: 'Tanushree',
    image:
      'https://res.cloudinary.com/dbzeao0ff/image/upload/v1780556249/ChatGPTImageJun3202609_02_38P_ikadsa.jpg',
  },
  {
    id: 'nitesh',
    name: 'Nitesh',
    image:
      'https://res.cloudinary.com/dbzeao0ff/image/upload/v1780556315/ChatGPTImageJun3202608_56_03P_nabyk6.jpg',
  },
  {
    id: 'harshal',
    name: 'Harshal',
    image:
      'https://res.cloudinary.com/dbzeao0ff/image/upload/v1780556249/color_corrected_original_face_bright_tone.jpg_1_g3kaat.jpg',
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
    name: 'Ketan Jaiswal',
    role: 'Member since 2024',
    text: 'Coaches here actually watch your form. CrossFit HIIT sessions are tough but I have never felt stronger.',
    rating: 5,
  },
  {
    name: 'Vedant Dharpure',
    role: 'Member since 2023',
    text: 'Clean facility, friendly staff, and a serious workout vibe. Best decision after shifting to Wardha Road.',
    rating: 5,
  },
  {
    name: 'Ved Kalode',
    role: 'Member since 2022',
    text: 'Personal training helped me fix shoulder pain and build real strength. Trainers know what they are doing.',
    rating: 5,
  },
  {
    name: 'Shahu Keware',
    role: 'Member since 2024',
    text: 'Love the recovery zone and sauna after heavy leg days. Keeps me consistent through Nagpur summers.',
    rating: 5,
  },
  {
    name: 'Kunal Kedia',
    role: 'Member since 2023',
    text: 'Kettlebell and compound movement blocks are top notch. No overcrowding even in peak evening hours.',
    rating: 5,
  },
  {
    name: 'Mugdha Gangane',
    role: 'Member since 2024',
    text: 'Started with the free trial and stayed. AI modes plus coach guidance make every session structured.',
    rating: 5,
  },
  {
    name: 'Surendra Tiwari',
    role: 'Member since 2022',
    text: 'Genuine Nagpur gym with premium feel. Trainers push you without ego — results show in eight weeks.',
    rating: 5,
  },
]

// Same 3 photos as desktop; imageMobile = portrait crop for phones (768×1152)
export const HERO_SLIDES = [
  {
    id: 'hero-1',
    image:
      'https://res.cloudinary.com/dbzeao0ff/image/upload/v1780306897/97f467a1-ede7-441b-9b64-45d7c1c0af0e.png',
    imageMobile:
      'https://res.cloudinary.com/dbzeao0ff/image/upload/v1780306897/97f467a1-ede7-441b-9b64-45d7c1c0af0e.png',
    badge: 'Premium Fitness Center',
    title: 'Build Your',
    highlight: 'Dream Physique',
    subtitle:
      'Premium fitness experience in Nagpur with expert trainers, AI modes, and rooftop training.',
  },
  {
    id: 'hero-2',
    image:
      'https://res.cloudinary.com/dbzeao0ff/image/upload/v1780307472/351c5f29-b249-4d6e-88c5-b12dc1c89eb4.png',
    imageMobile:
      'https://res.cloudinary.com/dbzeao0ff/image/upload/v1780307472/351c5f29-b249-4d6e-88c5-b12dc1c89eb4.png',
    badge: 'Opposite Westside Mall',
    title: 'Train at',
    highlight: 'CLUB ZENO',
    subtitle:
      'CrossFit HIIT, kettlebell, resistance training & recovery—on Wardha Road, Nagpur.',
  },
  {
    id: 'hero-3',
    image:
      'https://res.cloudinary.com/dbzeao0ff/image/upload/v1780307859/d2d885d0-b3fb-4ef1-8882-ae639be10ef6.png',
    imageMobile:
      'https://res.cloudinary.com/dbzeao0ff/image/upload/v1780308167/6ebabdd0-c973-4541-8c73-f4d569d91d79.png',
    badge: 'Book a Free Trial',
    title: 'Start Your',
    highlight: 'Fitness Journey',
    subtitle: 'Book a trial session today and experience Nagpur’s premium rooftop gym.',
  },
]
