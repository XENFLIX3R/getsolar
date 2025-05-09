
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ShieldCheck, ExternalLink } from 'lucide-react';
import { fadeIn } from '@/lib/animations';

const GetStartedSection = () => {
  return (
    <motion.section
      id="get-started-instantly"
      className="py-16 sm:py-24 text-center"
      variants={fadeIn(1.0)}
      initial="hidden"
      animate="visible"
    >
      <ShieldCheck className="h-16 w-16 text-primary mx-auto mb-6" />
      <h2 className="text-4xl font-bold mb-6 gradient-text">Get Started Instantly ☀️</h2>
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
        No installations. No complicated setups. Just purchase, join the game, and execute. Solar is built-in and ready the moment you enter. Elevate your experience today and stand out from the crowd with full FE visibility!
      </p>
      <Button 
        size="lg" 
        onClick={() => window.open('https://discord.gg/5zDeE6GKD8', '_blank')} 
        className="solar-gradient-bg text-primary-foreground shadow-xl hover:opacity-90 transition-opacity px-12 py-8 text-xl"
      >
        Join Discord <ExternalLink className="ml-2 h-5 w-5" />
      </Button>
    </motion.section>
  );
};

export default GetStartedSection;
