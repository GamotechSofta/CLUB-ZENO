/** CLUB ZENO — update phone/WhatsApp before go-live */
export const SITE = {
  name: 'CLUB ZENO',
  legalName: 'CLUB ZENO',
  tagline: 'Premium Fitness Center in Nagpur',
  phone: '+919699237168',
  phoneDisplay: '+91 96992 37168',
  whatsapp: '919699237168',
  email: 'info@clubzeno.in',
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

export const ABOUT_IMAGE =
  'https://res.cloudinary.com/dbzeao0ff/image/upload/v1780140252/5604e4d3-b77e-454c-bc0e-a3bead1324f2.png'

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
  { id: 'nitesh-dabli', name: 'Nitesh Dabli' },
  { id: 'harshal-telange', name: 'Harshal Telange' },
  { id: 'aryan-kothekar', name: 'Aryan Kothekar' },
  { id: 'tanushree-hatwar', name: 'Tanushree Hatwar' },
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
    name: 'Rishikesh Wakchaure',
    role: 'Member since 2024',
    text: 'Coaches here actually watch your form. CrossFit HIIT sessions are tough but I have never felt stronger.',
    rating: 5,
  },
  {
    name: 'Shreya Deshmukh',
    role: 'Member since 2023',
    text: 'Clean facility, friendly staff, and a serious workout vibe. Best decision after shifting to Wardha Road.',
    rating: 5,
  },
  {
    name: 'Saurabh Mahajan',
    role: 'Member since 2022',
    text: 'Personal training helped me fix shoulder pain and build real strength. Trainers know what they are doing.',
    rating: 5,
  },
  {
    name: 'Sneha Patil',
    role: 'Member since 2024',
    text: 'Love the recovery zone and sauna after heavy leg days. Keeps me consistent through Nagpur summers.',
    rating: 5,
  },
  {
    name: 'Nikhil Mathure',
    role: 'Member since 2023',
    text: 'Kettlebell and compound movement blocks are top notch. No overcrowding even in peak evening hours.',
    rating: 5,
  },
  {
    name: 'Aarya Chavan',
    role: 'Member since 2024',
    text: 'Started with the free trial and stayed. AI modes plus coach guidance make every session structured.',
    rating: 5,
  },
  {
    name: 'Roshan Choudhary',
    role: 'Member since 2022',
    text: 'Corporate plan for our team — flexible timings and solid equipment. Easy to find above Skechers too.',
    rating: 5,
  },
  {
    name: 'Kiara Sharma',
    role: 'Member since 2023',
    text: 'Slider pilates and HIIT combo changed my stamina completely. Staff is supportive, not intimidating.',
    rating: 5,
  },
  {
    name: 'Prajwal Nehe',
    role: 'Member since 2024',
    text: 'Genuine Nagpur gym with premium feel. Trainers push you without ego — results show in eight weeks.',
    rating: 5,
  },
  {
    name: 'Prajwal Kamdi',
    role: 'Member since 2023',
    text: 'Worth the drive from Sitabuldi. Westside Mall landmark makes it simple — worth every rupee.',
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

export const STATS = [
  { icon: 'users', value: '2,500+', label: 'Active Members' },
  { icon: 'award', value: '15+', label: 'Expert Trainers' },
  { icon: 'clock', value: '6AM–10PM', label: 'Open Hours' },
  { icon: 'trending-up', value: '98%', label: 'Success Rate' },
]
