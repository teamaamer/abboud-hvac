import { Shield, Clock, DollarSign, CheckCircle, Sparkles } from 'lucide-react';
import TrustBadge from './TrustBadge';
import CTAButtons from './CTAButtons';
import AvailabilityIndicator from './AvailabilityIndicator';

interface HeroContentProps {
  onEstimateClick: () => void;
}

export default function HeroContent({ onEstimateClick }: HeroContentProps) {
  return (
    <div className="relative z-10">
      <div className="inline-flex items-center gap-2 bg-[var(--orange-500)]/10 backdrop-blur-sm border border-[var(--orange-500)]/30 rounded-full px-4 py-2 mb-3 lg:mb-4 animate-slide-in-down opacity-0" style={{ animationDelay: '0.1s' }}>
        <Sparkles className="h-4 w-4 text-[var(--orange-400)]" />
        <span className="text-sm font-semibold text-[var(--orange-400)]">Certified & Insured</span>
      </div>
      
      <h1 className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-bold mb-3 lg:mb-4 leading-tight bg-gradient-to-r from-white via-white to-[var(--orange-400)] bg-clip-text text-transparent animate-fade-in-up opacity-0" style={{ fontFamily: 'var(--font-heading)', animationDelay: '0.2s' }}>
        Expert Electric & HVAC Services in Michigan
      </h1>
      
      <p className="text-base sm:text-lg lg:text-xl mb-4 lg:mb-5 text-gray-200 animate-fade-in-up opacity-0" style={{ animationDelay: '0.4s' }}>
        Serving Garden City, White Lake, Madison Heights & surrounding areas. Professional heating, cooling & electrical services with customer satisfaction guaranteed.
      </p>

      <div className="grid grid-cols-2 gap-2.5 lg:gap-3 mb-4 lg:mb-5">
        <div className="animate-scale-in opacity-0" style={{ animationDelay: '0.6s' }}>
          <TrustBadge icon={Shield} text="Certified & Insured" />
        </div>
        <div className="animate-scale-in opacity-0" style={{ animationDelay: '0.7s' }}>
          <TrustBadge icon={Clock} text="Same/Next-Day Service" />
        </div>
        <div className="animate-scale-in opacity-0" style={{ animationDelay: '0.8s' }}>
          <TrustBadge icon={DollarSign} text="Upfront Pricing" />
        </div>
        <div className="animate-scale-in opacity-0" style={{ animationDelay: '0.9s' }}>
          <TrustBadge icon={CheckCircle} text="Satisfaction Guaranteed" />
        </div>
      </div>

      <CTAButtons onEstimateClick={onEstimateClick} />
      
      <AvailabilityIndicator />
    </div>
  );
}
