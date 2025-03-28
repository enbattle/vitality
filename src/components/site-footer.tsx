/**
 * Site Footer component for the Vitality Drinks e-commerce platform.
 * This component provides the main footer with:
 * - Company information and social links
 * - Shop navigation links
 * - Company information links
 * - Support and policy links
 * Features include:
 * - Responsive grid layout
 * - Social media integration
 * - Organized navigation sections
 * - Copyright notice
 */

import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

/**
 * Site Footer component that displays the main footer content
 * @returns A React component that renders the site footer
 */
export function SiteFooter() {
  return (
    <footer className="bg-muted/40 py-12">
      <div className="container px-4 md:px-6">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company info and social links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Vitality</h3>
            <p className="text-sm text-muted-foreground">
              Refreshing your body and mind with natural, organic beverages
              since 2015.
            </p>
            {/* Social media links */}
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          {/* Shop navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/products"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  href="/products/bestsellers"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Bestsellers
                </Link>
              </li>
              <li>
                <Link
                  href="/products/new"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link
                  href="/products/bundles"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Bundles & Sets
                </Link>
              </li>
            </ul>
          </div>

          {/* Company information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/sustainability"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Sustainability
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Support and policies */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright notice */}
        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Vitality Drinks. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
