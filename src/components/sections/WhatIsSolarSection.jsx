
import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/animations';

const WhatIsSolarSection = () => {
  return (
    <motion.section
      id="what-is-solar"
      className="py-16 sm:py-24"
      variants={fadeIn(0.4)}
      initial="hidden"
      animate="visible"
    >
      <h2 className="text-4xl font-bold text-center mb-4 gradient-text">What is Solar?</h2>
      <p className="text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
        Solar is a fully server-sided execution software designed to give you unparalleled power within supported games. With zero downloads required, Solar is automatically integrated into the game, allowing you to execute scripts effortlessly. Whether you choose to run your own scripts or explore our pre-made script selection, Solar provides a seamless experience with full FE compatibility, ensuring that everyone in the server can see your executions in action.
      </p>
      <div className="max-w-md mx-auto glassmorphic-card p-8 card-hover-glow">
         <img src="https://i.ibb.co/r2GpXVVF/Solar-Image-Picsart-Ai-Image-Enhancer.png" className="w-full h-auto rounded-lg shadow-xl" alt="Solar Serverside in action" />
      </div>
    </motion.section>
  );
};

export default WhatIsSolarSection;
