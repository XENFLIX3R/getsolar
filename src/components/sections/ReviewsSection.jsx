
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Star, UserCircle } from 'lucide-react';
import { fadeIn } from '@/lib/animations';

const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < rating ? 'text-primary fill-primary' : 'text-muted-foreground/50'}`}
        />
      ))}
    </div>
  );
};

const ReviewCard = ({ review }) => {
  return (
    <Card className="glassmorphic-card w-80 min-w-[320px] h-full flex flex-col mx-4">
      <CardHeader>
        <div className="flex items-center space-x-3">
          <UserCircle className="h-8 w-8 text-primary" />
          <div>
            <CardTitle className="text-lg gradient-text">{review.user}</CardTitle>
            <StarRating rating={review.stars} />
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground italic">"{review.review}"</p>
      </CardContent>
    </Card>
  );
};

const ReviewsSection = ({ reviews }) => {
  const duplicatedReviews = [...reviews, ...reviews]; 

  return (
    <motion.section
      id="reviews"
      className="py-16 sm:py-24 overflow-hidden"
      variants={fadeIn(0.45)}
      initial="hidden"
      animate="visible"
    >
      <h2 className="text-4xl font-bold text-center mb-12 gradient-text">What Our Users Say</h2>
      <div className="relative">
        <div
          className="absolute inset-y-0 left-0 w-16 z-10"
          style={{ background: 'linear-gradient(to right, var(--background-start, hsl(var(--background))), transparent)' }}
        ></div>
        <div
          className="absolute inset-y-0 right-0 w-16 z-10"
          style={{ background: 'linear-gradient(to left, var(--background-end, hsl(var(--background))), transparent)' }}
        ></div>
        
        <motion.div
          className="flex"
          animate={{ x: ['0%', '-100%'] }}
          transition={{
            ease: 'linear',
            duration: 30, 
            repeat: Infinity,
          }}
        >
          {duplicatedReviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ReviewsSection;
