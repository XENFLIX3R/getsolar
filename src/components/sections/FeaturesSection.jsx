
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { fadeIn } from '@/lib/animations';

const FeaturesSection = ({ featureItems }) => {
  return (
    <motion.section
      id="features"
      className="py-16 sm:py-24"
      variants={fadeIn(0.6)}
      initial="hidden"
      animate="visible"
    >
      <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Why Choose Solar?</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {featureItems.map((item, index) => (
          <motion.div key={index} variants={fadeIn(0.7 + index * 0.1)} initial="hidden" animate="visible">
            <Card className="glassmorphic-card h-full card-hover-glow">
              <CardHeader className="items-center text-center">
                {item.icon}
                <CardTitle className="mt-2 text-xl gradient-text">{item.text.split('–')[0]}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">{item.text.split('–')[1]}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default FeaturesSection;
