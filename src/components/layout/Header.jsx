
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { fadeIn } from '@/lib/animations';

const NavLink = ({ children, href = "#" }) => (
  <a
    href={href}
    className="text-muted-foreground hover:text-primary transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium"
    onClick={(e) => {
      if (href.startsWith("#")) {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      }
    }}
  >
    {children}
  </a>
);

const Header = () => {
  const navItems = [
    { label: "What is Solar?", href: "#what-is-solar" },
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header className="sticky top-0 z-50 shadow-lg glassmorphic-card backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div 
            variants={fadeIn(0.1)} 
            initial="hidden" 
            animate="visible" 
            className="flex items-center space-x-2"
          >
            <img src="https://i.ibb.co/r2k4JzXF/Untitled-design.png" alt="Solar Softworks Logo" className="h-8 w-8" />
            <span className="text-2xl font-bold text-white">Solar Softworks</span>
          </motion.div>

          <nav className="hidden md:flex flex-grow justify-center items-center space-x-2 lg:space-x-4">
            {navItems.map((item, i) => (
              <motion.div key={item.label} variants={fadeIn(0.2 + i * 0.05)} initial="hidden" animate="visible">
                <NavLink href={item.href}>{item.label}</NavLink>
              </motion.div>
            ))}
          </nav>

          <motion.div 
            variants={fadeIn(0.6)} 
            initial="hidden" 
            animate="visible" 
            className="flex-shrink-0"
          >
            <Button 
              onClick={() => window.open('https://discord.gg/5zDeE6GKD8', '_blank')} 
              className="solar-gradient-bg text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Join Discord <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Header;
