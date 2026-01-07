'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileBottomBar from '@/components/MobileBottomBar';
import HeroSection from '@/components/sections/HeroSection';
import ScrollTransition from '@/components/transitions/ScrollTransition';
import SocialProofSection from '@/components/sections/SocialProofSection';
import ServicesSection from '@/components/sections/ServicesSection';
import WhyChooseUsSection from '@/components/sections/WhyChooseUsSection';
import ProcessSection from '@/components/sections/ProcessSection';
import ReviewsSection from '@/components/sections/ReviewsSection';
import ServiceAreasSection from '@/components/sections/ServiceAreasSection';
import FAQSection from '@/components/sections/FAQSection';
import EstimateSection from '@/components/sections/EstimateSection';

export default function Home() {
  const scrollToEstimate = () => {
    const element = document.getElementById('estimate');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <HeroSection onEstimateClick={scrollToEstimate} />
      <SocialProofSection />
      <ServicesSection onEstimateClick={scrollToEstimate} />
      <ScrollTransition />
      <WhyChooseUsSection />
      <ProcessSection />
      <ReviewsSection onEstimateClick={scrollToEstimate} />
      <ServiceAreasSection />
      <FAQSection />
      <EstimateSection />
      <Footer />

      {/* Mobile Bottom Bar */}
      <MobileBottomBar onEstimateClick={scrollToEstimate} />

      {/* Spacer for mobile bottom bar */}
      <div className="h-20 lg:hidden"></div>
    </div>
  );
}
