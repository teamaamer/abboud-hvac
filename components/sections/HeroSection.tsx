import HeroContent from '@/components/hero/HeroContent';
import HeroVisual from '@/components/hero/HeroVisual';

interface HeroSectionProps {
  onEstimateClick: () => void;
}

export default function HeroSection({ onEstimateClick }: HeroSectionProps) {
  return (
    <section className="relative bg-gradient-to-br from-[var(--navy-900)] via-[var(--navy-800)] to-[var(--navy-700)] text-white overflow-hidden h-[calc(100vh-5rem)]">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%2300d4ff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-radial from-[var(--cyan-500)]/10 via-transparent to-transparent opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10 h-full flex items-center">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center w-full">
          <HeroContent onEstimateClick={onEstimateClick} />
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
