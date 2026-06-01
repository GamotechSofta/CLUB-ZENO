/** Services page — categories, tabs & copy (edit here) */

export const SERVICES_INTRO = {
  title: 'Find Your Perfect',
  highlight: 'Program',
}

export const SERVICE_CATEGORIES = [
  { id: 'all', label: 'All Services', icon: 'target' },
  { id: 'personal-training', label: 'Personal Training', icon: 'user' },
  { id: 'group-classes', label: 'Group Classes', icon: 'heart' },
  { id: 'wellness', label: 'Wellness', icon: 'brain' },
]

/** Enquiry form — “I'm interested in” dropdown */
export const ENQUIRY_INTEREST_OPTIONS = [
  ...SERVICE_CATEGORIES.map(({ id, label }) => ({ value: id, label })),
  { value: 'membership', label: 'Membership' },
  { value: 'trial', label: 'Free Trial' },
  { value: 'corporate', label: 'Corporate Plan' },
  { value: 'other', label: 'Other' },
]

export const SERVICE_ITEMS = [
  {
    id: 'one-on-one',
    category: 'personal-training',
    title: 'One-on-One Personal Training',
    tagline: 'Private coaching, your pace',
    description:
      'Work directly with a certified trainer who builds a plan around your body, schedule, and goals. Perfect for beginners who want form correction, or advanced members chasing strength, fat loss, or sport-specific performance.',
    highlights: [
      'Custom workout & nutrition guidance',
      '1:1 form checks every session',
      'Flexible scheduling at CLUB ZENO',
      'Progress reviews & goal tracking',
    ],
    image:
      'https://res.cloudinary.com/dbzeao0ff/image/upload/v1780311107/5accfbf5-67f9-4e04-b742-b1fed921eee8.png',
    duration: '45–60 min sessions',
    level: 'All levels',
  },
  {
    id: 'small-group',
    category: 'personal-training',
    title: 'Small Group Training',
    tagline: 'Coach-led, team energy',
    description:
      'Train in a small squad with expert coaching — more attention than a big class, more motivation than training alone. Ideal for friends, couples, or colleagues who want accountability without full private rates.',
    highlights: [
      '2–6 members per session',
      'Shared energy & accountability',
      'Coach corrects form in real time',
      'Lower cost than 1:1 training',
    ],
    image:
      'https://res.cloudinary.com/dbzeao0ff/image/upload/v1780311598/cfa8405a-9ac2-458b-9526-c50e277a4896.png',
    duration: '50 min sessions',
    level: 'Beginner to intermediate',
  },
  {
    id: 'hiit-bootcamp',
    category: 'personal-training',
    title: 'HIIT Bootcamp',
    tagline: 'Burn fat, build stamina',
    description:
      'High-intensity intervals and bootcamp-style circuits on our rooftop floor. Short, powerful workouts that spike metabolism and improve cardiovascular fitness — one of the fastest ways to see results at CLUB ZENO.',
    highlights: [
      'Fat-burning HIIT circuits',
      'Strength + cardio combined',
      'Timed rounds & team challenges',
      'Scalable intensity for all levels',
    ],
    image:
      'https://res.cloudinary.com/dbzeao0ff/image/upload/v1780311694/df8a3f64-993a-4d5d-a8e2-b3585ee33747.png',
    duration: '40–45 min',
    level: 'Intermediate+',
  },
  {
    id: 'yoga-flow',
    category: 'group-classes',
    title: 'Yoga Flow',
    tagline: 'Flexibility, balance, calm',
    description:
      'Flow through guided yoga sequences that improve mobility, core stability, and mental focus. A perfect complement to heavy lifting and HIIT — recover better and move pain-free.',
    highlights: [
      'Vinyasa-style flowing sequences',
      'Improves flexibility & posture',
      'Breathwork & stress relief',
      'Suitable for beginners welcome',
    ],
    image:
      'https://res.cloudinary.com/dbzeao0ff/image/upload/v1780311735/265beb46-3070-4097-9d5e-6bb8d9c7d27a.png',
    duration: '60 min',
    level: 'All levels',
  },
  {
    id: 'spin-cycle',
    category: 'group-classes',
    title: 'Spin & Cycle',
    tagline: 'Ride hard, feel the burn',
    description:
      'Indoor cycling sessions with pumping music and instructor-led intervals. Build leg endurance, torch calories, and boost cardio without high impact on joints.',
    highlights: [
      'Low-impact, high-calorie burn',
      'Interval & endurance rides',
      'Leg strength & cardio boost',
      'Group motivation & energy',
    ],
    image:
      'https://res.cloudinary.com/dbzeao0ff/image/upload/v1780311844/06d97f1a-2324-4e13-a969-b7446b2c73dc.png',
    duration: '45 min',
    level: 'All levels',
  },
  {
    id: 'pilates-core',
    category: 'group-classes',
    title: 'Pilates Core',
    tagline: 'Strong centre, stable lifts',
    description:
      'Core-focused pilates with slider and mat work to build deep abdominal strength, hip stability, and control. Supports better squats, deadlifts, and everyday movement at the gym.',
    highlights: [
      'Deep core activation',
      'Slider & mat pilates tools',
      'Better posture & back support',
      'Pairs well with strength training',
    ],
    image:
      'https://res.cloudinary.com/dbzeao0ff/image/upload/v1780299824/07114ecb-17ff-479d-80e0-3960eddf582e.png',
    duration: '50 min',
    level: 'All levels',
  },
  {
    id: 'boxing-fitness',
    category: 'wellness',
    title: 'Boxing Fitness',
    tagline: 'Power, speed, stress relief',
    description:
      'Non-contact boxing fitness combining footwork, pad work, and conditioning drills. Release stress, sharpen reflexes, and build full-body endurance in a fun, high-energy format.',
    highlights: [
      'Cardio + coordination training',
      'Pad work & bag drills',
      'Stress relief & confidence boost',
      'No prior boxing experience needed',
    ],
    image:
      'https://res.cloudinary.com/dbzeao0ff/image/upload/v1780312335/dd1be395-c18f-4bcd-8135-f8a4501a744c.png',
    duration: '45 min',
    level: 'All levels',
  },
  {
    id: 'nutrition-coaching',
    category: 'wellness',
    title: 'Nutrition Coaching',
    tagline: 'Fuel your results',
    description:
      'Get practical nutrition guidance aligned with your training — muscle gain, fat loss, or maintenance. Learn meal timing, portion habits, and sustainable eating for life in Nagpur’s busy schedule.',
    highlights: [
      'Goal-based meal planning support',
      'Fat loss & muscle gain strategies',
      'Simple, local-food friendly advice',
      'Works with your training program',
    ],
    image:
      'https://images.unsplash.com/photo-1490645935967-10de28ba7033?w=900&h=600&fit=crop',
    duration: 'Consultation + follow-ups',
    level: 'All members',
  },
  {
    id: 'massage-therapy',
    category: 'wellness',
    title: 'Massage Therapy',
    tagline: 'Recover faster, train harder',
    description:
      'Professional massage therapy to ease muscle tension, improve circulation, and speed recovery between intense sessions. Ideal after HIIT, CrossFit, or heavy leg days.',
    highlights: [
      'Muscle recovery & soreness relief',
      'Improves flexibility & blood flow',
      'Supports injury prevention',
      'Book after tough training weeks',
    ],
    image:
      'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=900&h=600&fit=crop',
    duration: '30–60 min',
    level: 'All members',
  },
  {
    id: 'meditation-mindfulness',
    category: 'wellness',
    title: 'Meditation & Mindfulness',
    tagline: 'Train your mind too',
    description:
      'Guided meditation and mindfulness sessions to reduce stress, improve sleep, and sharpen focus. Balance high-intensity gym life with calm, intentional recovery for body and mind.',
    highlights: [
      'Guided breathing & meditation',
      'Stress & anxiety management',
      'Better sleep & mental clarity',
      'Complements intense training',
    ],
    image:
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=900&h=600&fit=crop',
    duration: '30–45 min',
    level: 'All levels',
  },
]

export function getServicesByCategory(categoryId) {
  if (categoryId === 'all') return SERVICE_ITEMS
  return SERVICE_ITEMS.filter((s) => s.category === categoryId)
}

/** Vertical page sections — all services shown one after another */
export const SERVICE_SECTIONS = [
  { id: 'personal-training', label: 'Personal Training', icon: 'user' },
  { id: 'group-classes', label: 'Group Classes', icon: 'heart' },
  { id: 'wellness', label: 'Wellness', icon: 'brain' },
]
