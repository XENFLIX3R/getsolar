
import React from 'react';
import { Sun, Zap, Server, Rocket, Star } from 'lucide-react';

export const featureItems = [
  { icon: <Sun className="h-5 w-5 text-primary" />, text: "No Download Required – Solar is built directly into the game." },
  { icon: <Server className="h-5 w-5 text-primary" />, text: "Full FE/Server-side Support – Everything you execute is visible to all players." },
  { icon: <Rocket className="h-5 w-5 text-primary" />, text: "Script Freedom – Use your own scripts or our exclusive selection." },
];

export const pricingPlansData = [
  {
    id: "standard",
    name: "Standard Plan",
    price: "$15",
    icon: <Zap className="h-8 w-8 mb-2 text-primary" />,
    features: ["Essential execution access", "Some command restrictions"],
    bgColor: "bg-opacity-20 bg-gray-700",
    purchaseUrl: "https://getsolar.mysellauth.com/product/standard-plan"
  },
  {
    id: "premium",
    name: "Premium Plan",
    price: "$20",
    icon: <Star className="h-8 w-8 mb-2 text-primary" />, 
    features: ["Full command access", "Unlock the ultimate Solar experience", "Priority support"],
    bgColor: "bg-opacity-20 bg-gray-700", 
    textColor: "", 
    buttonVariant: "default",
    purchaseUrl: "https://getsolar.mysellauth.com/product/premium-plan"
  },
];

export const faqItemsData = [
  {
    question: "Is Solar safe to use?",
    answer: "Absolutely! Solar operates entirely server-side, meaning there are no downloads or modifications to your game client. This ensures your account safety and a fair gaming environment."
  },
  {
    question: "What games are supported?",
    answer: "Solar is designed to be compatible with a growing list of popular games. Please check our community channels or documentation for the most up-to-date list of supported titles."
  },
  {
    question: "Can I get banned for using Solar?",
    answer: "Since Solar is fully server-sided and doesn't require any client modification, the risk is significantly lower compared to traditional client-side cheats. However, always be mindful of game developers' terms of service."
  },
  {
    question: "How do I get support if I have issues?",
    answer: "We offer support through our Discord server. Premium Plan users receive priority support. You can find the link to our Discord on the website."
  }
];
