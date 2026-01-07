import { MapPin } from 'lucide-react';
import { CONTACT_INFO, SERVICE_AREAS } from '@/lib/constants';

export default function ServiceAreasSection() {
  return (
    <section id="service-areas" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-[var(--navy-900)] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Proudly Serving
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            We provide expert HVAC and electrical services throughout the region and surrounding communities.
          </p>
        </div>

        <div className="bg-[var(--gray-50)] rounded-2xl p-8 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 text-center">
            {SERVICE_AREAS.map((area, index) => (
              <div key={index} className="flex items-center justify-center space-x-2 py-3">
                <MapPin className="h-5 w-5 text-[var(--cyan-500)] flex-shrink-0" />
                <span className="font-semibold text-gray-800">{area}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center bg-[var(--cyan-500)] bg-opacity-10 border-2 border-[var(--cyan-500)] rounded-2xl p-6">
          <p className="text-[var(--navy-900)] font-semibold text-lg">
            Not sure if you&apos;re in range? <a href={CONTACT_INFO.phone.href} className="underline hover:text-[var(--cyan-600)]">Call us</a> — we&apos;ll let you know!
          </p>
        </div>
      </div>
    </section>
  );
}
