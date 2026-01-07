import { Star } from 'lucide-react';

export default function SocialProofSection() {
  return (
    <section className="bg-[var(--gray-50)] border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-[var(--navy-900)]" style={{ fontFamily: 'var(--font-heading)' }}>
              10+ Years
            </div>
            <div className="text-gray-600 mt-1">Experience</div>
          </div>
          <div>
            <div className="flex items-center justify-center text-[var(--cyan-500)] mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-current" />
              ))}
            </div>
            <div className="text-gray-600">5-Star Rated</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[var(--navy-900)]" style={{ fontFamily: 'var(--font-heading)' }}>
              24/7
            </div>
            <div className="text-gray-600 mt-1">Emergency Support</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-[var(--navy-900)]" style={{ fontFamily: 'var(--font-heading)' }}>
              Local
            </div>
            <div className="text-gray-600 mt-1">Serving Your Area</div>
          </div>
        </div>
      </div>
    </section>
  );
}
