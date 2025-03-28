/**
 * Home page component for the Vitality Drinks e-commerce platform.
 * This is the main landing page that showcases:
 * - Hero section with main call-to-action
 * - Featured products section
 * - Benefits of our products
 * - Customer testimonials
 * - Newsletter subscription
 */

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { HeroSection } from "@/components/hero-section";
import { FeaturedProducts } from "@/components/featured-products";
import { BenefitsSection } from "@/components/benefits-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { NewsletterSection } from "@/components/newsletter-section";

/**
 * Home page component that serves as the main landing page
 * @returns A React component that renders the home page content
 */
export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero section with main call-to-action */}
      <HeroSection />

      {/* Featured products section with header and view all button */}
      <div className="container px-4 md:px-6 py-8 md:py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">
              Featured Drinks
            </h2>
            <p className="text-muted-foreground mt-1">
              Our most popular healthy beverages, crafted with natural
              ingredients
            </p>
          </div>
          {/* Link to all products page */}
          <Button asChild variant="ghost" className="gap-1">
            <Link href="/products">
              View all products <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </Button>
        </div>
        <FeaturedProducts />
      </div>

      {/* Additional sections */}
      <BenefitsSection />
      <TestimonialsSection />
      <NewsletterSection />
    </main>
  );
}
