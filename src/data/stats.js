import { FaSmile, FaCalendarCheck, FaChair, FaRulerCombined } from 'react-icons/fa';

// Animated statistics counters used on the About page.
export const stats = [
  { icon: FaSmile, value: 500, suffix: '+', label: 'Happy Customers' },
  { icon: FaCalendarCheck, value: 100, suffix: '+', label: 'Events Hosted' },
  { icon: FaChair, value: 800, suffix: '+', label: 'Seating Capacity' },
  { icon: FaRulerCombined, value: 3800, suffix: ' Sq.Ft', label: 'Total Area' },
];

// Event type options reused by booking & contact forms.
export const eventTypes = [
  'Wedding', 'Reception', 'Engagement', 'Birthday', 'Baby Shower',
  'Corporate Meeting', 'Naming Ceremony', 'Anniversary', 'Other',
];
