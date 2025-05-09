
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink, ShoppingCart, AlertTriangle } from "lucide-react";

const PurchaseDialog = ({ isOpen, onOpenChange, plan }) => {
  if (!plan) return null;

  const handleDiscordClick = () => {
    window.open('https://discord.gg/5zDeE6GKD8', '_blank');
  };

  const handlePurchaseClick = () => {
    window.open(plan.purchaseUrl, '_blank');
    onOpenChange(false); 
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg glassmorphic-card text-foreground p-8">
        <DialogHeader className="text-center">
          <DialogTitle className="flex items-center justify-center text-xl sm:text-2xl">
            <AlertTriangle className="h-7 w-7 mr-3 text-primary" />
            Purchase Information: {plan.name}
          </DialogTitle>
          <DialogDescription className="pt-3 text-base text-muted-foreground">
            Before purchasing, please ensure keys are in stock. For Robux or gift card payments, please join our Discord server.
          </DialogDescription>
        </DialogHeader>
        
        <div className="my-6 border-t border-border/20"></div>

        <p className="text-base text-muted-foreground text-center">
          You are about to purchase the <strong>{plan.name}</strong> for <strong>{plan.price}</strong>.
        </p>
        
        <DialogFooter className="mt-8 flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 w-full">
          <Button 
            variant="outline" 
            onClick={handleDiscordClick} 
            className="border-primary text-primary hover:bg-primary/10 w-full sm:w-auto px-6 py-3 text-base"
          >
            <ExternalLink className="mr-2 h-5 w-5" /> Join Discord
          </Button>
          <Button 
            onClick={handlePurchaseClick} 
            className="solar-gradient-bg text-primary-foreground hover:opacity-90 w-full sm:w-auto px-6 py-3 text-base"
          >
            <ShoppingCart className="mr-2 h-5 w-5" /> Proceed to Purchase
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PurchaseDialog;
