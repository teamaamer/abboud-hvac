'use client';

import { useState, useCallback } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQS } from '@/lib/data';

export default function FAQSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = useCallback((index: number) => {
    setOpenFaq(prev => prev === index ? null : index);
  }, []);

  const handleKeyDown = useCallback((e: React.KeyboardEvent, index: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleFaq(index);
    }
  }, [toggleFaq]);

  return (
    <section id="faqs" className="py-20 bg-[var(--gray-50)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[var(--dark-bg)] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Frequently Asked Questions
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {FAQS.map((faq, index) => (
            <div key={index} className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden h-fit">
              <button
                onClick={() => toggleFaq(index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                aria-expanded={openFaq === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="text-lg font-bold text-[var(--dark-bg)] pr-4" style={{ fontFamily: 'var(--font-heading)' }}>
                  {faq.q}
                </span>
                {openFaq === index ? (
                  <ChevronUp className="h-6 w-6 text-[var(--orange-500)] flex-shrink-0" aria-hidden="true" />
                ) : (
                  <ChevronDown className="h-6 w-6 text-[var(--orange-500)] flex-shrink-0" aria-hidden="true" />
                )}
              </button>
              <div 
                className={`transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                style={{ overflow: 'hidden' }}
              >
                <div id={`faq-answer-${index}`} className="px-8 pb-6" role="region">
                  <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
