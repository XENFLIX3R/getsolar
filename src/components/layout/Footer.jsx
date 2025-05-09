
import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/animations';

const Footer = () => {
  return (
    <motion.footer 
      className="py-8 border-t border-border/20 relative z-10 glassmorphic-card backdrop-blur-sm mt-16"
      variants={fadeIn(1.2)}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Solar Softworks. All rights reserved.</p>
        <p className="text-sm mt-1">Solar Serverside Team | 04/10/25 | 5:46 PM</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
