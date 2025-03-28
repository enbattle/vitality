/**
 * Hero Section component for the Vitality Drinks e-commerce platform.
 * This component serves as the main landing section with:
 * - Animated background with parallax effect
 * - Main heading and subheading
 * - Call-to-action buttons
 * - Key statistics display
 * Features include:
 * - Scroll-based parallax animation
 * - Responsive design
 * - Animated statistics
 * - Gradient overlay
 */

"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

import { Button } from "@/components/ui/button";

/**
 * Hero Section component that displays the main landing content
 * @returns A React component that renders the hero section
 */
export function HeroSection() {
  // Ref for scroll-based animation
  const ref = useRef<HTMLDivElement>(null);
  // Track scroll progress for parallax effect
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Transform scroll progress into animation values
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Track component mount state for animations
  const [mounted, setMounted] = useState(false);

  // Set mounted state after initial render
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div ref={ref} className="relative overflow-hidden">
      {/* Gradient background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-50 to-green-100 dark:from-green-950/30 dark:to-green-900/20" />

      {/* Animated background image */}
      {mounted && (
        <motion.div
          style={{ y, opacity }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="relative h-full w-full">
            <Image
              src="./hero-bg.jpg"
              alt="Healthy drinks background"
              fill
              className="object-cover opacity-40 dark:opacity-20"
              priority
            />
          </div>
        </motion.div>
      )}

      {/* Main content container */}
      <div className="container relative px-4 md:px-6 flex flex-col items-center justify-center min-h-[90vh] text-center">
        {/* Hero text content */}
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Refresh Your{" "}
              <span className="text-green-600 dark:text-green-400">Body</span> &{" "}
              <span className="text-green-600 dark:text-green-400">Mind</span>
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Discover our range of natural, organic beverages crafted to
              nourish your body and elevate your wellbeing.
            </p>
          </div>
          {/* Call-to-action buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Button asChild size="lg" className="rounded-full">
              <Link href="/products">Shop Now</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full"
            >
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>

        {/* Statistics section */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-8 md:gap-16">
          {/* Natural ingredients stat */}
          {mounted && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <span className="text-3xl font-bold text-green-600 dark:text-green-400">
                100%
              </span>
              <span className="text-sm text-muted-foreground">Natural</span>
            </motion.div>
          )}

          {/* No additives stat */}
          {mounted && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <span className="text-3xl font-bold text-green-600 dark:text-green-400">
                0
              </span>
              <span className="text-sm text-muted-foreground">
                Artificial Additives
              </span>
            </motion.div>
          )}

          {/* Delivery time stat */}
          {mounted && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <span className="text-3xl font-bold text-green-600 dark:text-green-400">
                24h
              </span>
              <span className="text-sm text-muted-foreground">Delivery</span>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
