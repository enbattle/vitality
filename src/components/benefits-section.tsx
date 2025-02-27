"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Leaf, Droplets, Heart, Award } from "lucide-react";

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

export function BenefitsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div ref={ref} className="bg-green-50 dark:bg-green-950/20 py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight">
            Why Choose Our Drinks?
          </h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            We're committed to creating beverages that are good for you and the
            planet
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="h-16 w-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4">
                <benefit.icon className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
