'use client';

import { PROCESS_STEPS } from '@/lib/data';
import Lottie from 'lottie-react';
import payInvoiceAnimation from '@/public/animations/pay-invoice-blue.json';
import searchingAnimation from '@/public/animations/searching.json';
import technicalAssistanceAnimation from '@/public/animations/technical-assistance.json';

export default function ProcessSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[var(--navy-900)] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            A Simple, Stress-Free Process
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {PROCESS_STEPS.map((item, index) => (
            <div key={index} className="relative">
              <div className="bg-[var(--gray-50)] rounded-2xl p-8 text-center border-2 border-gray-200 hover:border-[var(--cyan-500)] transition-all">
                {item.step === '1' ? (
                  <div className="w-48 h-48 mx-auto mb-6">
                    <Lottie 
                      animationData={payInvoiceAnimation} 
                      loop={true}
                      style={{ width: '100%', height: '100%' }}
                    />
                  </div>
                ) : item.step === '2' ? (
                  <div className="w-48 h-48 mx-auto mb-6">
                    <Lottie 
                      animationData={searchingAnimation} 
                      loop={true}
                      style={{ width: '100%', height: '100%' }}
                    />
                  </div>
                ) : item.step === '3' ? (
                  <div className="w-48 h-48 mx-auto mb-6">
                    <Lottie 
                      animationData={technicalAssistanceAnimation} 
                      loop={true}
                      style={{ width: '100%', height: '100%' }}
                    />
                  </div>
                ) : (
                  <div className="w-16 h-16 bg-[var(--cyan-500)] rounded-full flex items-center justify-center text-[var(--navy-900)] text-2xl font-bold mx-auto mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                    {item.step}
                  </div>
                )}
                <h3 className="text-2xl font-bold text-[var(--navy-900)] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
              {index < 2 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <div className="text-[var(--cyan-500)] text-4xl">→</div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 font-semibold">
            You approve the price before work begins.
          </p>
        </div>
      </div>
    </section>
  );
}
