import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink, ShoppingCart, AlertTriangle } from "lucide-react";
import { siteConfig } from '@/config/site';

const PurchaseDialog = ({ isOpen, onOpenChange, plan }) => {
  if (!plan) return null;

  const handleDiscordClick = () => {
    window.open(siteConfig.discordLink, '_blank');
  };

  const handlePurchaseClick = () => {
    window.open(plan.purchaseUrl, '_blank');
    onOpenChange(false); 
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md glassmorphic-card text-foreground">
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <AlertTriangle className="h-6 w-6 mr-2 text-primary" />
            Purchase Information: {plan.name}
          </DialogTitle>
          <DialogDescription className="pt-2 text-muted-foreground">
            Before purchasing, please ensure keys are in stock. For Robux or gift card payments, please join our Discord server.
          </DialogDescription>
        </DialogHeader>
        
        <div className="my-4 border-t border-border/20"></div>

        <p className="text-sm text-muted-foreground">
          You are about to purchase the <strong>{plan.name}</strong> for <strong>{plan.price}</strong>.
        </p>
        
        <DialogFooter className="mt-6 sm:justify-between">
          <Button variant="outline" onClick={handleDiscordClick} className="border-primary text-primary hover:bg-primary/10">
            <ExternalLink className="mr-2 h-4 w-4" /> Join Discord
          </Button>
          <div className="flex flex-col sm:flex-row gap-2 mt-2 sm:mt-0">
            <DialogClose asChild>
              <Button type="button" variant="ghost">
                Cancel
              </Button>
            </DialogClose>
            <Button onClick={handlePurchaseClick} className="solar-gradient-bg text-primary-foreground hover:opacity-90">
              <ShoppingCart className="mr-2 h-4 w-4" /> Proceed to Purchase
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PurchaseDialog;
