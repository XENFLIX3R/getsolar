
import React from 'react';
import { Sun, Zap, Server, Rocket, Star } from 'lucide-react';

export const siteConfig = {
  name: "Solar Softworks",
  description: "The Ultimate Server-Side Experience for supported games.",
  navItems: [
    { label: "What is Solar?", href: "#what-is-solar" },
    { label: "Reviews", href: "#reviews" },
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ],
  discordLink: "https://discord.gg/5zDeE6GKD8",
  featureItems: [
    { icon: <Sun className="h-5 w-5 text-primary" />, text: "Frozen is embedded directly within the game. No external files, no complex setup." },
    { icon: <Server className="h-5 w-5 text-primary" />, text: "True Server-Side Impact – Every action is processed and visible server-wide, ensuring everyone sees your script's power." },
    { icon: <Rocket className="h-5 w-5 text-primary" />, text: "Script Freedom – Run your personal scripts or leverage our premium, ever-growing library of commands." },
  ],
  pricingPlans: [
    {
      id: "standard",
      name: "Standard Plan",
      price: "$10",
      icon: <Zap className="h-8 w-8 mb-2 text-primary" />,
      features: ["Essential execution access", "Some command restrictions", "Cheap"],
      bgColor: "bg-opacity-20 bg-gray-700",
      purchaseUrl: "https://getsolar.mysellauth.com/product/standard-plan"
    },
    {
      id: "premium",
      name: "Premium Plan",
      price: "$15",
      icon: <Star className="h-8 w-8 mb-2 text-primary" />, 
      features: ["Full command access", "Unlock the ultimate Solar experience", "Priority support"],
      bgColor: "bg-opacity-20 bg-gray-700", 
      textColor: "", 
      buttonVariant: "default",
      purchaseUrl: "https://getsolar.mysellauth.com/product/premium-plan"
    },
  ],
  faqItems: [
    {
      question: "Is Solar safe to use?",
      answer: "Absolutely! Solar operates entirely server-side, meaning there are no downloads or modifications to your game client. This ensures your account safety and a fair gaming environment."
    },
    {
      question: "What games are supported?",
      answer: "Solar is designed to be compatible with a partnered games. Please check our community channels or documentation for the most up-to-date list of supported titles."
    },
    {
      question: "Can I get banned for using Solar?",
      answer: "Since Solar is fully server-sided and doesn't require any client modification, the risk is significantly lower compared to traditional client-side cheats. However, always be mindful of game developers' terms of service."
    },
    {
      question: "How do I get support if I have issues?",
      answer: "We offer support through our Discord server. Premium Plan users receive priority support. You can find the link to our Discord on the website."
    }
  ],
  reviews: [
    {
      user: "xlocksz | Verifed",
      stars: 5,
      review: "Premium Plan was an excellent offer, it is overpowered i would recommend getting this Premium Plan"
    },
    {
      user: "cod0000 | Verifed",
      stars: 5,
      review: "premium plan is very op. I love its features. I can use anything scripts with this one! I recommend you use solar for powerful control!"
    },
    {
      user: "LouisFishies | Verifed",
      stars: 4,
      review: "Its good, for my opinion about this is Standard Plan Is Probably one of the best plans in my life for my personal opinion"
    },
    {
      user: "SolarFanatic",
      stars: 5,
      review: "The best server-side tool out there. The pre-made scripts are great, and I love the freedom to use my own."
    },
    {
      user: "CasualPlayerZ",
      stars: 4,
      review: "Standard plan is great value. Even with some restrictions, it's powerful. Thinking of upgrading soon!"
    },
    {
      user: "TechGuruSolar",
      stars: 5,
      review: "Zero performance impact on my game, and the executions are visible to everyone. This is how it should be done!"
    }
  ]
};
