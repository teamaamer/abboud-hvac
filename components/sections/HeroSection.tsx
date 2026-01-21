import HeroContent from '@/components/hero/HeroContent';
import HeroVisual from '@/components/hero/HeroVisual';

interface HeroSectionProps {
  onEstimateClick: () => void;
}

export default function HeroSection({ onEstimateClick }: HeroSectionProps) {
  return (
    <section className="relative bg-gradient-to-br from-[var(--dark-bg)] via-[var(--dark-secondary)] to-[var(--dark-bg)] text-white overflow-hidden h-[calc(100vh-5rem)]">
      {/* Animated gradient background */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--orange-500)]/30 via-[var(--dark-bg)] to-[var(--blue-500)]/30 animate-gradient"></div>
      </div>
      
      {/* Animated pattern overlay */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute inset-0 animate-pattern" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23FF6B35\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
      </div>
      
      {/* COOLING THEME - Appears first (0-10s) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none animate-theme-cooling">
        {/* Snowflakes falling */}
        <div className="absolute top-0 left-[10%] w-3 h-3 bg-white rounded-full animate-snowflake-1 opacity-80 blur-[1px]"></div>
        <div className="absolute top-0 left-[30%] w-2 h-2 bg-blue-200 rounded-full animate-snowflake-2 opacity-70 blur-[1px]"></div>
        <div className="absolute top-0 left-[50%] w-4 h-4 bg-blue-100 rounded-full animate-snowflake-3 opacity-60 blur-[1px]"></div>
        <div className="absolute top-0 left-[70%] w-2 h-2 bg-white rounded-full animate-snowflake-4 opacity-75 blur-[1px]"></div>
        <div className="absolute top-0 left-[85%] w-3 h-3 bg-blue-200 rounded-full animate-snowflake-5 opacity-65 blur-[1px]"></div>
        
        {/* Cold air waves flowing horizontally */}
        <div className="absolute top-[20%] left-0 w-32 h-3 bg-gradient-to-r from-transparent via-[var(--blue-400)] to-transparent animate-cold-breeze-1 opacity-50 blur-md"></div>
        <div className="absolute top-[40%] left-0 w-40 h-4 bg-gradient-to-r from-transparent via-[var(--blue-500)] to-transparent animate-cold-breeze-2 opacity-45 blur-md"></div>
        <div className="absolute top-[60%] left-0 w-36 h-3 bg-gradient-to-r from-transparent via-[var(--blue-300)] to-transparent animate-cold-breeze-3 opacity-40 blur-md"></div>
        <div className="absolute top-[80%] left-0 w-28 h-3 bg-gradient-to-r from-transparent via-[var(--blue-400)] to-transparent animate-cold-breeze-4 opacity-50 blur-md"></div>
        
        {/* Ice crystals */}
        <div className="absolute top-[25%] right-[20%] w-6 h-6 bg-blue-300 animate-ice-crystal-1 opacity-40 blur-sm" style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }}></div>
        <div className="absolute top-[60%] right-[40%] w-8 h-8 bg-blue-200 animate-ice-crystal-2 opacity-35 blur-sm" style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }}></div>
      </div>

      {/* HEATING THEME - Appears second (10-20s) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none animate-theme-heating">
        {/* Large flames from bottom */}
        <div className="absolute bottom-0 left-[15%] w-12 h-20 bg-gradient-to-t from-[var(--red-600)] via-[var(--orange-500)] to-transparent animate-big-flame-1 opacity-70 blur-md"></div>
        <div className="absolute bottom-0 left-[35%] w-16 h-28 bg-gradient-to-t from-[var(--orange-600)] via-[var(--red-500)] to-transparent animate-big-flame-2 opacity-65 blur-md"></div>
        <div className="absolute bottom-0 left-[55%] w-14 h-24 bg-gradient-to-t from-[var(--red-500)] via-[var(--orange-400)] to-transparent animate-big-flame-3 opacity-60 blur-md"></div>
        <div className="absolute bottom-0 left-[75%] w-10 h-18 bg-gradient-to-t from-[var(--orange-500)] via-[var(--red-600)] to-transparent animate-big-flame-4 opacity-68 blur-md"></div>
        
        {/* Heat waves rising */}
        <div className="absolute bottom-[30%] left-[20%] w-24 h-2 bg-gradient-to-r from-transparent via-[var(--orange-400)]/60 to-transparent animate-heat-wave-1 opacity-50 blur-sm"></div>
        <div className="absolute bottom-[50%] left-[40%] w-28 h-2 bg-gradient-to-r from-transparent via-[var(--red-400)]/60 to-transparent animate-heat-wave-2 opacity-45 blur-sm"></div>
        <div className="absolute bottom-[70%] left-[60%] w-20 h-2 bg-gradient-to-r from-transparent via-[var(--orange-500)]/60 to-transparent animate-heat-wave-3 opacity-40 blur-sm"></div>
        
        {/* Ember particles floating up */}
        <div className="absolute bottom-0 left-[25%] w-3 h-3 bg-[var(--orange-500)] rounded-full animate-ember-rise-1 opacity-80 blur-[2px]"></div>
        <div className="absolute bottom-0 left-[45%] w-2 h-2 bg-[var(--red-500)] rounded-full animate-ember-rise-2 opacity-70 blur-[2px]"></div>
        <div className="absolute bottom-0 left-[65%] w-4 h-4 bg-[var(--orange-400)] rounded-full animate-ember-rise-3 opacity-75 blur-[2px]"></div>
        <div className="absolute bottom-0 left-[80%] w-2 h-2 bg-[var(--red-600)] rounded-full animate-ember-rise-4 opacity-65 blur-[2px]"></div>
      </div>

      {/* ELECTRIC THEME - Appears third (20-30s) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none animate-theme-electric">
        {/* Lightning bolts */}
        <div className="absolute top-[10%] left-[20%] w-2 h-16 bg-gradient-to-b from-yellow-300 via-white to-transparent animate-lightning-1 opacity-0"></div>
        <div className="absolute top-[30%] right-[25%] w-2 h-20 bg-gradient-to-b from-white via-yellow-400 to-transparent animate-lightning-2 opacity-0"></div>
        <div className="absolute top-[50%] left-[40%] w-2 h-14 bg-gradient-to-b from-yellow-200 via-white to-transparent animate-lightning-3 opacity-0"></div>
        <div className="absolute top-[20%] right-[40%] w-2 h-18 bg-gradient-to-b from-white via-yellow-300 to-transparent animate-lightning-4 opacity-0"></div>
        
        {/* Electric particles/sparks */}
        <div className="absolute top-[25%] left-[30%] w-4 h-4 bg-yellow-400 rounded-full animate-electric-spark-1 opacity-0 blur-sm"></div>
        <div className="absolute top-[45%] right-[35%] w-3 h-3 bg-white rounded-full animate-electric-spark-2 opacity-0 blur-sm"></div>
        <div className="absolute top-[65%] left-[50%] w-5 h-5 bg-yellow-300 rounded-full animate-electric-spark-3 opacity-0 blur-sm"></div>
        
        {/* Electric current lines */}
        <div className="absolute top-[40%] left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent animate-electric-current-1 opacity-0"></div>
        <div className="absolute top-[60%] left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white to-transparent animate-electric-current-2 opacity-0"></div>
      </div>
      
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-[var(--orange-500)]/15 via-transparent to-[var(--blue-500)]/15 opacity-50 animate-pulse-slow"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10 h-full flex items-center">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center w-full">
          <HeroContent onEstimateClick={onEstimateClick} />
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
