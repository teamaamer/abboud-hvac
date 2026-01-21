'use client';

import { SERVICES } from '@/lib/data';

interface ServicesSectionProps {
  onEstimateClick: () => void;
}

export default function ServicesSection({ onEstimateClick }: ServicesSectionProps) {
  return (
    <section id="services" className="py-8 bg-gradient-to-b from-white to-gray-50 min-h-screen flex items-center relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-[var(--orange-500)] rounded-full opacity-5 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[var(--blue-500)] rounded-full opacity-5 blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="text-center mb-6">
          <div className="inline-block mb-2">
            <span className="text-[var(--orange-500)] font-semibold text-xs uppercase tracking-wider bg-[var(--orange-500)]/10 px-3 py-1.5 rounded-full">
              Our Services
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--dark-bg)] mb-2 leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
            Electric & HVAC Services
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Professional heating, cooling, and electrical solutions for your home.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {SERVICES.map((service, index) => (
            <div
              key={index}
              onClick={onEstimateClick}
              className="bg-white rounded-2xl p-5 shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer border border-gray-100 hover:border-[var(--orange-500)]/30 hover:-translate-y-2 relative overflow-hidden"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                animationFillMode: 'both'
              }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--orange-500)]/5 to-[var(--blue-500)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Icon with gradient background */}
              <div className="relative mb-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--orange-500)] to-[var(--red-500)] flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-500 group-hover:rotate-6">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
              </div>
              
              {/* Content */}
              <div className="relative">
                <h3 className="text-lg font-bold text-[var(--dark-bg)] mb-2 leading-snug group-hover:text-[var(--orange-600)] transition-colors duration-300" style={{ fontFamily: 'var(--font-heading)' }}>
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-3 text-sm leading-relaxed">{service.desc}</p>
                
                {/* CTA */}
                <div className="flex items-center text-[var(--orange-500)] font-semibold group-hover:text-[var(--orange-600)] transition-colors">
                  <span className="text-xs">Request Pricing</span>
                  <span className="ml-2 group-hover:ml-3 transition-all duration-300">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `
      }} />
    </section>
  );
}
