import { Phone } from 'lucide-react';
import EstimateForm from '@/components/EstimateForm';
import { CONTACT_INFO, BACKGROUND_PATTERN_SVG } from '@/lib/constants';

export default function EstimateSection() {
  return (
    <section id="estimate" className="py-20 bg-gradient-to-br from-[var(--navy-900)] to-[var(--navy-700)] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ backgroundImage: `url("${BACKGROUND_PATTERN_SVG}")` }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* CTA Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
            Need Help With Heating, Cooling, or Electrical Today?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Same/next-day appointments available. Get started now!
          </p>

          {/* Call Now Button */}
          <div className="flex justify-center mb-12">
            <a
              href={CONTACT_INFO.phone.href}
              className="bg-[var(--cyan-500)] hover:bg-[var(--cyan-600)] text-[var(--navy-900)] px-10 py-5 rounded-xl font-bold text-xl transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center"
            >
              <Phone className="h-6 w-6 mr-3" />
              Call Now: {CONTACT_INFO.phone.display}
            </a>
          </div>

          {/* Divider */}
          <div className="flex items-center justify-center mb-12">
            <div className="flex-1 border-t border-white/20 max-w-xs"></div>
            <span className="px-4 text-gray-300 font-semibold">OR</span>
            <div className="flex-1 border-t border-white/20 max-w-xs"></div>
          </div>

          <h3 className="text-3xl sm:text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Get Your Free Estimate
          </h3>
          <p className="text-lg text-gray-200">
            Fill out the form below and we&apos;ll get back to you within 15 minutes during business hours.
          </p>
        </div>
        
        {/* Estimate Form */}
        <div className="max-w-4xl mx-auto">
          <EstimateForm isModal={false} />
        </div>
      </div>
    </section>
  );
}
