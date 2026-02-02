import { Phone, Calendar } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';

interface CTAButtonsProps {
  onEstimateClick: () => void;
}

export default function CTAButtons({ onEstimateClick }: CTAButtonsProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-3 mb-3 lg:mb-4 animate-slide-in-left opacity-0" style={{ animationDelay: '1s' }}>
      <button
        onClick={onEstimateClick}
        className="group relative bg-gradient-to-r from-[var(--orange-500)] to-[var(--red-500)] hover:from-[var(--orange-600)] hover:to-[var(--red-600)] text-white px-6 lg:px-7 py-3 rounded-xl font-bold text-base lg:text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-[var(--orange-500)]/50 hover:scale-105 overflow-hidden"
      >
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></span>
        <span className="relative flex items-center justify-center gap-2">
          <Calendar className="h-5 w-5" />
          Get a Free Estimate
        </span>
      </button>
      <a
        href={CONTACT_INFO.whatsapp.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-6 lg:px-7 py-3 rounded-xl font-bold text-base lg:text-lg transition-all duration-300 shadow-xl hover:shadow-2xl border-2 border-[var(--blue-500)] hover:border-[var(--blue-400)] hover:scale-105"
      >
        <span className="flex items-center justify-center gap-2">
          <Phone className="h-5 w-5" />
          Schedule Service
        </span>
      </a>
    </div>
  );
}
