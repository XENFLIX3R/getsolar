
import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBlobs = () => {
  return (
    <>
      <motion.div 
        className="animated-blob w-96 h-96 bg-primary top-1/4 left-1/4"
        animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>
       <motion.div 
        className="animated-blob w-72 h-72 bg-secondary bottom-1/4 right-1/4"
        animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 5 }}
      ></motion.div>
    </>
  );
};

export default AnimatedBlobs;
