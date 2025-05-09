
import React from 'react';
import { Toaster } from '@/components/ui/toaster';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AnimatedBlobs from '@/components/layout/AnimatedBlobs';
import HeroSection from '@/components/sections/HeroSection';
import WhatIsSolarSection from '@/components/sections/WhatIsSolarSection';
import FaqSection from '@/components/sections/FaqSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import PricingSection from '@/components/sections/PricingSection';
import GetStartedSection from '@/components/sections/GetStartedSection';
import PurchaseDialog from '@/components/PurchaseDialog';
import { featureItems, pricingPlansData, faqItemsData } from '@/lib/data';


function App() {
  const [isPurchaseDialogOpen, setIsPurchaseDialogOpen] = React.useState(false);
  const [selectedPlan, setSelectedPlan] = React.useState(null);

  const openPurchaseDialog = (plan) => {
    setSelectedPlan(plan);
    setIsPurchaseDialogOpen(true);
  };

  const scrollToPricing = () => {
    document.querySelector('#pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToWhatIsSolar = () => {
    document.querySelector('#what-is-solar')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen dark-gradient-bg text-foreground relative overflow-hidden">
      <div className="grid-background"></div>
      <AnimatedBlobs />
      <Header />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative z-10">
        <HeroSection scrollToPricing={scrollToPricing} scrollToWhatIsSolar={scrollToWhatIsSolar} />
        <WhatIsSolarSection />
        <FaqSection faqItems={faqItemsData} />
        <FeaturesSection featureItems={featureItems} />
        <PricingSection pricingPlans={pricingPlansData} onPurchaseClick={openPurchaseDialog} />
        <GetStartedSection />
      </main>

      <Footer />
      <Toaster />
      <PurchaseDialog 
        isOpen={isPurchaseDialogOpen} 
        onOpenChange={setIsPurchaseDialogOpen}
        plan={selectedPlan}
      />
    </div>
  );
}

export default App;
