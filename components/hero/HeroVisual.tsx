import { Star, Wind } from 'lucide-react';

export default function HeroVisual() {
  return (
    <div className="relative hidden lg:block animate-bounce-in opacity-0" style={{ animationDelay: '0.5s' }}>
      <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-3 group">
        <div className="aspect-[16/10] bg-gradient-to-br from-[var(--navy-700)] via-[var(--navy-800)] to-[var(--navy-900)] flex items-center justify-center relative">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--cyan-500)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="text-center p-6 relative z-10">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-[var(--cyan-500)]/20 blur-3xl animate-pulse"></div>
              <Wind className="h-24 w-24 text-[var(--cyan-400)] mx-auto mb-3 relative group-hover:scale-110 transition-transform duration-500" />
            </div>
            <p className="text-gray-300 text-base font-medium">Professional HVAC technician at work</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:border-[var(--cyan-500)]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[var(--cyan-500)]/20">
        <div className="flex items-start space-x-4">
          <div className="flex text-[var(--cyan-400)] gap-0.5">
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
