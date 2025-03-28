/**
 * Benefits Section component for the Vitality Drinks e-commerce platform.
 * This component showcases the key benefits and features of the company's products:
 * - Natural ingredients
 * - Cold-press technology
 * - Nutrient content
 * - Sustainable sourcing
 * Features include:
 * - Animated entrance for each benefit card
 * - Scroll-triggered animations
 * - Responsive grid layout
 * - Icon-based visual representation
 */

"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Leaf, Droplets, Heart, Award } from "lucide-react";

/**
 * Benefits data structure
 * Each benefit contains:
 * - icon: Lucide icon component
 * - title: Benefit title
 * - description: Detailed description of the benefit
 */
const benefits = [
  {
    icon: Leaf,
    title: "100% Natural",
    description:
      "All our drinks are made with organic ingredients, free from artificial additives and preservatives.",
  },
  {
    icon: Droplets,
    title: "Cold-Pressed",
    description:
      "Our cold-press technology preserves nutrients and enzymes for maximum health benefits.",
  },
  {
    icon: Heart,
    title: "Nutrient-Rich",
    description:
      "Packed with vitamins, minerals, and antioxidants to support your overall wellbeing.",
  },
  {
    icon: Award,
    title: "Sustainably Sourced",
    description:
      "We partner with local organic farms to reduce our carbon footprint and support communities.",
  },
];

/**
 * Benefits Section component that displays product benefits in a grid layout
 * @returns A React component that renders the benefits section
 */
export function BenefitsSection() {
  // Ref for scroll-based animation trigger
  const ref = useRef<HTMLDivElement>(null);
  // Track if the section is in view for animation
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div ref={ref} className="bg-green-50 dark:bg-green-950/20 py-16 md:py-24">
      <div className="container px-4 md:px-6">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight">
            Why Choose Our Drinks?
          </h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            {`We're committed to creating beverages that are good for you and the
            planet`}
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              // Animation properties for entrance effect
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              {/* Benefit icon */}
              <div className="h-16 w-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4">
                <benefit.icon className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              {/* Benefit content */}
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
