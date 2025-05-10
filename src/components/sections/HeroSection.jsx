
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Info } from 'lucide-react';
import { fadeIn } from '@/lib/animations';

const HeroSection = ({ scrollToPricing, scrollToWhatIsSolar }) => {
  return (
    <motion.section
      id="hero"
      className="text-center py-16 sm:py-24"
      variants={fadeIn(0.2)}
      initial="hidden"
      animate="visible"
    >
      <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6">
        <span className="gradient-text">☀️ Solar</span> - The Ultimate
        <br />
        Server-Side Experience <span className="gradient-text">☀️</span>
      </h1>
      <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
        Solar is a fully server-sided execution software designed to give you unparalleled power within supported games. Zero downloads required, automatically integrated.
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
        <Button size="lg" onClick={scrollToPricing} className="solar-gradient-bg text-primary-foreground shadow-lg hover:opacity-90 transition-opacity px-10 py-6 text-lg">
          <ShoppingCart className="mr-2 h-5 w-5" /> Purchase Now
        </Button>
        <Button size="lg" variant="outline" onClick={scrollToWhatIsSolar} className="px-10 py-6 text-lg border-primary text-primary hover:bg-primary/10">
          <Info className="mr-2 h-5 w-5" /> Learn More
        </Button>
      </div>
    </motion.section>
  );
};

export default HeroSection;
