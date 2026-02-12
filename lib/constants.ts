export const CONTACT_INFO = {
  phone: {
    display: '+1 313 607 9891',
    href: 'tel:+13136079891',
  },
  whatsapp: {
    href: 'https://wa.me/13136079891',
  },
  facebook: {
    href: 'https://www.facebook.com/profile.php?id=61588022880935',
  },
  email: 'Adnanaboud1@hotmail.com',
  hours: {
    weekday: 'Mon-Fri 7AM-7PM',
    saturday: 'Sat 8AM-5PM',
    sunday: 'Sun Emergency Only',
  },
  license: {
    hvac: 'HVAC-12345',
    electrical: 'ELEC-67890',
  },
} as const;

export const NAVIGATION_ITEMS = [
  { id: 'services', label: 'Services' },
  { id: 'why-us', label: 'Why Us' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'service-areas', label: 'Service Areas' },
  { id: 'faqs', label: 'FAQs' },
] as const;

export const SERVICE_AREAS = [
  'Garden City',
  'Madison Heights',
  'Sterling Heights',
  'Westland',
  'Livonia',
  'Redford',
  'Dearborn',
  'Southfield',
  'Farmington',
  'Farmington Hills',
  'Hamtramck',
  'Royal Oak',
  'Taylor',
  'Warren',
  'Ypsilanti',
  'Dearborn Heights',
  'Wayne',
  'Troy',
  'Northville',
  'Novi',
] as const;

export const BACKGROUND_PATTERN_SVG = 
  "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300d4ff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";

export const FORM_AUTO_CLOSE_DELAY = 5000;
