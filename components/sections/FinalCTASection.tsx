import { Phone } from 'lucide-react';
import { CONTACT_INFO, BACKGROUND_PATTERN_SVG } from '@/lib/constants';

interface FinalCTASectionProps {
  onEstimateClick: () => void;
}

export default function FinalCTASection({ onEstimateClick }: FinalCTASectionProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-[var(--navy-900)] to-[var(--navy-700)] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ backgroundImage: `url("${BACKGROUND_PATTERN_SVG}")` }}></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
          Need Help With Heating, Cooling, or Electrical Today?
        </h2>
        <p className="text-xl text-gray-200 mb-10">
          Same/next-day appointments available. Get started now!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <a
            href={CONTACT_INFO.phone.href}
            className="bg-[var(--cyan-500)] hover:bg-[var(--cyan-600)] text-[var(--navy-900)] px-10 py-5 rounded-xl font-bold text-xl transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center"
          >
            <Phone className="h-6 w-6 mr-3" />
            Call Now
          </a>
          <button
            onClick={onEstimateClick}
            className="bg-white hover:bg-gray-100 text-[var(--navy-900)] px-10 py-5 rounded-xl font-bold text-xl transition-all duration-200 shadow-xl hover:shadow-2xl border-2 border-[var(--cyan-500)]"
          >
            Get a Free Estimate
          </button>
        </div>

        <p className="text-sm text-gray-300">
          Same/next-day appointments available.
        </p>
      </div>
    </section>
  );
}
