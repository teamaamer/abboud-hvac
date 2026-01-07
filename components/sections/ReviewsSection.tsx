import { Star } from 'lucide-react';
import { REVIEWS } from '@/lib/data';

interface ReviewsSectionProps {
  onEstimateClick: () => void;
}

export default function ReviewsSection({ onEstimateClick }: ReviewsSectionProps) {
  return (
    <section id="reviews" className="py-20 bg-[var(--gray-50)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[var(--navy-900)] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            What Customers Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {REVIEWS.map((review, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="flex text-[var(--cyan-500)] mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">&quot;{review.review}&quot;</p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-bold text-[var(--navy-900)]">{review.name}</p>
                <p className="text-sm text-gray-500">{review.location}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={onEstimateClick}
            className="bg-[var(--cyan-500)] hover:bg-[var(--cyan-600)] text-[var(--navy-900)] px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Get a Free Estimate
          </button>
        </div>
      </div>
    </section>
  );
}
