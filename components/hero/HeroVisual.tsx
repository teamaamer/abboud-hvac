import { Star, Wind, Flame, Zap, Snowflake, Droplets, Thermometer, Lightbulb, Fan, Waves } from 'lucide-react';

export default function HeroVisual() {
  return (
    <div className="relative hidden lg:block animate-bounce-in opacity-0" style={{ animationDelay: '0.5s' }}>
      <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-3 group">
        <div className="aspect-[16/10] bg-gradient-to-br from-[var(--dark-secondary)] via-[var(--dark-tertiary)] to-[var(--dark-bg)] flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--orange-500)]/20 to-[var(--blue-500)]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Cooling Icon - Appears first (0-10s) */}
          <div className="absolute inset-0 flex items-center justify-center animate-theme-cooling">
            <div className="text-center p-6 relative z-10 w-full">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-[var(--blue-500)]/30 blur-3xl animate-pulse"></div>
                {/* Main row of icons */}
                <div className="relative flex gap-3 items-center justify-center mb-3">
                  <Snowflake className="h-16 w-16 text-[var(--blue-300)] animate-spin-slow" style={{ animationDuration: '8s' }} />
                  <Fan className="h-20 w-20 text-[var(--blue-400)] animate-spin-slow" style={{ animationDuration: '3s' }} />
                  <Wind className="h-24 w-24 text-[var(--blue-500)] animate-float-horizontal" />
                  <Waves className="h-20 w-20 text-[var(--blue-400)] animate-wave-flow" />
                  <Snowflake className="h-16 w-16 text-[var(--blue-200)] animate-spin-slow" style={{ animationDuration: '10s', animationDirection: 'reverse' }} />
                </div>
                {/* Bottom row */}
                <div className="relative flex gap-4 items-center justify-center">
                  <Droplets className="h-12 w-12 text-[var(--blue-300)] animate-drip" />
                  <Snowflake className="h-10 w-10 text-blue-100 animate-spin-slow" style={{ animationDuration: '6s' }} />
                  <Droplets className="h-12 w-12 text-[var(--blue-400)] animate-drip" style={{ animationDelay: '0.5s' }} />
                </div>
              </div>
              <p className="text-gray-300 text-base font-medium mt-3">Professional Cooling Services</p>
            </div>
          </div>

          {/* Heating Icon - Appears second (10-20s) */}
          <div className="absolute inset-0 flex items-center justify-center animate-theme-heating">
            <div className="text-center p-6 relative z-10">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-[var(--orange-500)]/30 blur-3xl animate-pulse"></div>
                <div className="relative flex gap-4 items-center justify-center mb-4">
                  <Flame className="h-20 w-20 text-[var(--orange-400)] animate-flame-flicker" />
                  <Flame className="h-28 w-28 text-[var(--red-500)] animate-flame-flicker-delayed" />
                  <Flame className="h-24 w-24 text-[var(--orange-500)] animate-flame-flicker" style={{ animationDelay: '0.3s' }} />
                </div>
              </div>
              <p className="text-gray-300 text-base font-medium">Professional Heating Services</p>
            </div>
          </div>

          {/* Electric Icon - Appears third (20-30s) */}
          <div className="absolute inset-0 flex items-center justify-center animate-theme-electric">
            <div className="text-center p-6 relative z-10 w-full">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-yellow-400/30 blur-3xl animate-pulse"></div>
                {/* Main row of icons */}
                <div className="relative flex gap-3 items-center justify-center mb-3">
                  <Lightbulb className="h-16 w-16 text-yellow-300 animate-electric-pulse" />
                  <Zap className="h-20 w-20 text-yellow-400 animate-electric-pulse" style={{ animationDelay: '0.1s' }} />
                  <Zap className="h-28 w-28 text-white animate-electric-pulse" style={{ animationDelay: '0.2s' }} />
                  <Zap className="h-20 w-20 text-yellow-300 animate-electric-pulse" style={{ animationDelay: '0.3s' }} />
                  <Lightbulb className="h-16 w-16 text-yellow-400 animate-electric-pulse" style={{ animationDelay: '0.4s' }} />
                </div>
                {/* Bottom row */}
                <div className="relative flex gap-4 items-center justify-center">
                  <Zap className="h-12 w-12 text-yellow-200 animate-electric-pulse" style={{ animationDelay: '0.5s' }} />
                  <Lightbulb className="h-14 w-14 text-white animate-electric-pulse" style={{ animationDelay: '0.6s' }} />
                  <Zap className="h-12 w-12 text-yellow-400 animate-electric-pulse" style={{ animationDelay: '0.7s' }} />
                </div>
              </div>
              <p className="text-gray-300 text-base font-medium mt-3">Professional Electric Services</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:border-[var(--orange-500)]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[var(--orange-500)]/20">
        <div className="flex items-start space-x-4">
          <div className="flex text-[var(--orange-400)] gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-current animate-fade-in" style={{ animationDelay: `${i * 100}ms` }} />
            ))}
          </div>
          <div className="flex-1">
            <p className="text-sm italic leading-relaxed">&quot;Fast, honest, and professional — fixed our AC the same day.&quot;</p>
            <p className="text-xs text-gray-400 mt-2 font-medium">— Sarah M., Verified Customer</p>
          </div>
        </div>
      </div>
    </div>
  );
}
