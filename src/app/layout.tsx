/**
 * Root layout component for the Vitality Drinks e-commerce platform.
 * This layout wraps all pages and provides the common structure including:
 * - Font configuration
 * - Site header
 * - Site footer
 * - Toast notifications
 * - Global styles
 */

import type React from "react";
import type { Metadata } from "next";
import { Mona_Sans as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Toaster } from "@/components/ui/toaster";

// Configure the Mona Sans font with Latin subset support
// This font will be used throughout the application
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

// Define metadata for SEO optimization
// This will be used for the document head across all pages
export const metadata: Metadata = {
  title: "Vitality Drinks | Natural & Organic Beverages",
  description:
    "Discover our range of natural, organic beverages crafted to nourish your body and elevate your wellbeing.",
};

/**
 * Root layout component that provides the common structure for all pages
 * @param children - The page content to be rendered within the layout
 * @returns A React component that wraps all pages with common elements
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          {children}
          <SiteFooter />
          <Toaster />
        </div>
      </body>
    </html>
  );
}
