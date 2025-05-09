
import React from 'react';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MessageSquare } from 'lucide-react';
import { fadeIn } from '@/lib/animations';

const FaqSection = ({ faqItems }) => {
  return (
    <motion.section 
      id="faq" 
      className="py-16 sm:py-24"
      variants={fadeIn(0.5)}
      initial="hidden"
      animate="visible"
    >
      <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Frequently Asked Questions</h2>
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <motion.div key={index} variants={fadeIn(0.55 + index * 0.05)} initial="hidden" animate="visible">
              <AccordionItem value={`item-${index}`} className="glassmorphic-card mb-4 px-2">
                <AccordionTrigger className="text-lg hover:no-underline text-left">
                  <div className="flex items-center">
                    <MessageSquare className="h-5 w-5 mr-3 text-primary" />
                    {item.question}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2 pb-4 px-2">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </motion.section>
  );
};

export default FaqSection;
