/**
 * Newsletter Section component for the Vitality Drinks e-commerce platform.
 * This component provides a newsletter subscription form with:
 * - Email input field
 * - Submit button with loading state
 * - Success notification
 * - Privacy policy notice
 * Features include:
 * - Form validation
 * - Loading state handling
 * - Toast notifications
 * - Animated entrance
 */

"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";

/**
 * Newsletter Section component that handles newsletter subscriptions
 * @returns A React component that renders the newsletter subscription form
 */
export function NewsletterSection() {
  // Form state management
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  /**
   * Handles form submission
   * - Prevents default form behavior
   * - Shows loading state
   * - Simulates API call
   * - Shows success toast
   * - Resets form
   * @param e - Form submission event
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setEmail("");
      toast({
        title: "Subscribed!",
        description: "You've successfully subscribed to our newsletter.",
        action: <ToastAction altText="Dismiss">Dismiss</ToastAction>,
      });
    }, 1000);
  };

  return (
    <div className="bg-green-50 dark:bg-green-950/20 py-16">
      <div className="container px-4 md:px-6">
        {/* Animated content container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto text-center"
        >
          {/* Section header */}
          <h2 className="text-2xl font-bold tracking-tight mb-2">
            Stay Updated
          </h2>
          <p className="text-muted-foreground mb-6">
            Subscribe to our newsletter for exclusive offers, recipes, and
            wellness tips
          </p>

          {/* Subscription form */}
          <form onSubmit={handleSubmit} className="flex gap-2">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="rounded-full"
            />
            {/* Submit button with loading state */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="rounded-full"
            >
              {isSubmitting ? (
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
              ) : (
                <Send className="h-4 w-4" />
              )}
              <span className="sr-only">Subscribe</span>
            </Button>
          </form>

          {/* Privacy notice */}
          <p className="text-xs text-muted-foreground mt-4">
            By subscribing, you agree to our Privacy Policy and consent to
            receive updates from our company.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
