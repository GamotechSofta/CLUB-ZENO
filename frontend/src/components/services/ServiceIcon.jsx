import {
  Activity,
  Brain,
  Building2,
  Cpu,
  Dumbbell,
  Flame,
  Heart,
  HeartPulse,
  Target,
  User,
  UserCheck,
  Users,
  Weight,
} from 'lucide-react'

const ICON_MAP = {
  target: Target,
  user: User,
  heart: Heart,
  brain: Brain,
  cpu: Cpu,
  dumbbell: Dumbbell,
  flame: Flame,
  weight: Weight,
  'heart-pulse': HeartPulse,
  activity: Activity,
  'user-check': UserCheck,
  users: Users,
  'building-2': Building2,
}

export default function ServiceIcon({ name, className = 'h-6 w-6' }) {
  const Icon = ICON_MAP[name] ?? Activity
  return <Icon className={className} aria-hidden />
}
