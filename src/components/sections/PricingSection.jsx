
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import { fadeIn } from '@/lib/animations';

const PricingSection = ({ pricingPlans, onPurchaseClick }) => {
  return (
    <motion.section
      id="pricing"
      className="py-16 sm:py-24"
      variants={fadeIn(0.8)}
      initial="hidden"
      animate="visible"
    >
      <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Two Powerful Plans</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {pricingPlans.map((plan, index) => (
          <motion.div key={plan.id} variants={fadeIn(0.9 + index * 0.1)} initial="hidden" animate="visible">
            <Card className={`h-full flex flex-col glassmorphic-card card-hover-glow ${plan.bgColor} ${plan.textColor || ''}`}>
              <CardHeader className="items-center text-center">
                {plan.icon}
                <CardTitle className={`text-3xl ${plan.textColor ? '' : 'gradient-text'}`}>{plan.name}</CardTitle>
                <CardDescription className={`text-4xl font-bold pt-2 ${plan.textColor ? 'text-yellow-300' : 'text-primary'}`}>{plan.price}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <CheckCircle className={`h-5 w-5 mr-3 ${plan.textColor ? 'text-yellow-300' : 'text-primary'}`} />
                      <span className={plan.textColor ? 'text-gray-300' : 'text-muted-foreground'}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  size="lg" 
                  className={`w-full text-lg py-6 ${plan.buttonVariant === 'secondary' ? 'bg-primary-foreground text-primary hover:bg-opacity-90' : 'solar-gradient-bg text-primary-foreground hover:opacity-90'}`} 
                  onClick={() => onPurchaseClick(plan)}
                >
                  Purchase {plan.name}
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default PricingSection;
