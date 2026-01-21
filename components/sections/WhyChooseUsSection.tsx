import { Users, Lightbulb, Star, CheckCircle2 } from 'lucide-react';
import { WHY_CHOOSE_US } from '@/lib/data';

export default function WhyChooseUsSection() {
  return (
    <section id="why-us" className="py-8 lg:py-12 bg-gradient-to-b from-[var(--gray-50)] to-white min-h-screen flex items-center relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[var(--orange-500)] rounded-full opacity-5 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[var(--blue-500)] rounded-full opacity-5 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            {/* Header with subtitle */}
            <div className="mb-6">
              <div className="inline-flex items-center space-x-2 bg-[var(--orange-500)] bg-opacity-10 px-4 py-2 rounded-full mb-3">
                <Star className="h-4 w-4 text-[var(--orange-600)] fill-[var(--orange-600)]" />
                <span className="text-sm font-semibold text-[var(--orange-700)]">Certified & Insured</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--dark-bg)] mb-2 leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                Why Choose Abboud Electric and HVAC
              </h2>
              <p className="text-base text-gray-600">Your trusted partner for reliable HVAC and electrical solutions</p>
            </div>
            
            {/* Feature items with hover effects - 3x3 grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {WHY_CHOOSE_US.map((item, index) => (
                <div 
                  key={index} 
                  className="group flex flex-col items-center text-center p-4 rounded-xl bg-white hover:bg-[var(--orange-500)] hover:bg-opacity-5 transition-all duration-300 hover:shadow-md hover:scale-[1.02] cursor-default border border-transparent hover:border-[var(--orange-500)] hover:border-opacity-20"
                >
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[var(--orange-500)] to-[var(--red-500)] rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300 relative mb-3">
                    <item.icon className="h-7 w-7 text-white relative z-10" />
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-300"></div>
                  </div>
                  <div className="relative">
                    <p className="text-sm font-semibold text-gray-800 group-hover:text-[var(--dark-bg)] transition-colors leading-tight">{item.text}</p>
                    <CheckCircle2 className="h-4 w-4 text-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute -top-1 -right-1" />
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced callout box */}
            <div className="mt-5 bg-gradient-to-r from-[var(--orange-500)] to-[var(--red-500)] rounded-xl p-4 flex items-start space-x-3 shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
              <div className="relative z-10 flex-shrink-0 w-10 h-10 bg-white bg-opacity-20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                <Lightbulb className="h-5 w-5 text-white" />
              </div>
              <div className="relative z-10">
                <p className="text-white font-semibold text-sm mb-0.5">
                  Special Offer Available
                </p>
                <p className="text-white text-xs opacity-90">
                  Ask about maintenance plans and seasonal tune-up specials.
                </p>
              </div>
            </div>
          </div>

          {/* Enhanced visual side without stats */}
          <div className="relative flex items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl w-full group">
              <div className="aspect-[4/3] bg-gradient-to-br from-[var(--dark-secondary)] via-[var(--dark-tertiary)] to-[var(--dark-bg)] flex items-center justify-center relative">
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIgZmlsbD0id2hpdGUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] animate-pulse"></div>
                </div>
                
                <div className="text-center p-6 relative z-10">
                  <div className="relative inline-block">
                    <div className="absolute inset-0 bg-[var(--blue-400)] blur-2xl opacity-50 animate-pulse"></div>
                    <Users className="h-24 w-24 lg:h-32 lg:w-32 text-[var(--blue-400)] mx-auto relative z-10 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <p className="text-gray-300 text-base lg:text-lg font-semibold mt-4">Professional team ready to serve</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
