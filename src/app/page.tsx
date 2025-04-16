// app/page.tsx

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import FeaturesSection from '@/components/home/FeatureSection';
import HowItWorksSection from '@/components/home/HowItWorksSection';
import TestimonialSection from '@/components/home/TestimonialSection';
import PricingSection from '@/components/home/PricingSection';
import CTASection from '@/components/home/CTASection';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto">
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <TestimonialSection />
        <PricingSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
