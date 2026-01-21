import {
  Wind,
  Flame,
  Settings,
  Home as HomeIcon,
  Zap,
  Wrench,
  Shield,
  DollarSign,
  Clock,
  ThumbsUp,
  Award,
  Users,
} from 'lucide-react';
import type { Service, WhyChooseUsItem, ProcessStep, Review, FAQ } from './types';

export const SERVICES: Service[] = [
  {
    icon: Wind,
    title: 'Air Conditioning',
    desc: 'Professional AC installation, repair, and maintenance. Stay cool all summer long.',
  },
  {
    icon: Flame,
    title: 'Heating Systems',
    desc: 'Furnace and heating installation, repair, and service. Keep warm all winter.',
  },
  {
    icon: Settings,
    title: 'Water Heater',
    desc: 'Water heater installation and repair. Hot water when you need it.',
  },
  {
    icon: Zap,
    title: 'Electrical Services',
    desc: 'Certified electrical repairs, installations, and troubleshooting.',
  },
  {
    icon: Wrench,
    title: 'Generators',
    desc: 'Generator installation, repair, and maintenance for backup power.',
  },
  {
    icon: HomeIcon,
    title: 'Parts & Filters',
    desc: 'Quality HVAC parts and filters for all major brands and models.',
  },
];

export const WHY_CHOOSE_US: WhyChooseUsItem[] = [
  { icon: Shield, text: 'Certified & insured technicians' },
  { icon: DollarSign, text: 'Transparent pricing (no surprise fees)' },
  { icon: Clock, text: 'Fast response times' },
  { icon: ThumbsUp, text: 'Clean, respectful workmanship' },
  { icon: Award, text: 'Quality parts + warranties' },
  { icon: Users, text: 'Local team you can reach anytime' },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '1',
    title: 'Request a Quote',
    desc: 'Call us or fill out our quick form to get started.',
  },
  {
    step: '2',
    title: 'We Diagnose & Confirm Pricing',
    desc: 'Our technician assesses the issue and provides transparent pricing.',
  },
  {
    step: '3',
    title: 'We Fix It — Fast & Clean',
    desc: 'We complete the work efficiently and leave your space spotless.',
  },
];

export const REVIEWS: Review[] = [
  {
    name: 'Sarah M.',
    location: 'Downtown',
    review:
      'Called them for an emergency AC repair on a Saturday. They came out within 2 hours and had us cooling again by evening. Professional and fair pricing!',
  },
  {
    name: 'Mike T.',
    location: 'Westside',
    review:
      "Best electrical service I've used. They upgraded our panel and added new circuits for our home office. Clean work, explained everything clearly.",
  },
  {
    name: 'Jennifer L.',
    location: 'Northridge',
    review:
      'We use them for our business HVAC maintenance. Always on time, thorough, and they catch small issues before they become expensive problems.',
  },
];

export const FAQS: FAQ[] = [
  {
    q: 'Do you offer emergency service?',
    a: "Yes! We provide 24/7 emergency service for urgent HVAC and electrical issues. Call us anytime and we'll get a technician to you as quickly as possible.",
  },
  {
    q: 'Are you certified and insured?',
    a: 'Absolutely. All our technicians are fully certified, insured, and background-checked. We carry comprehensive liability insurance for your peace of mind.',
  },
  {
    q: 'Do you provide free estimates?',
    a: "Yes, we offer free, no-obligation estimates for all services. We'll assess your needs and provide transparent pricing before any work begins.",
  },
  {
    q: 'What brands do you service?',
    a: 'We service all major HVAC and electrical brands including Carrier, Trane, Lennox, Rheem, Goodman, and more. Our technicians are trained on the latest systems.',
  },
  {
    q: 'How fast can you come out?',
    a: 'We offer same-day or next-day service in most cases. For emergencies, we can often arrive within a few hours. Call us to check current availability.',
  },
  {
    q: 'Do you offer maintenance plans?',
    a: 'Yes! Our maintenance plans include regular tune-ups, priority scheduling, and discounts on repairs. Ask us about seasonal specials and plan options.',
  },
];
