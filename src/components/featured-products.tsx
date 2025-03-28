/**
 * Featured Products component for the Vitality Drinks e-commerce platform.
 * This component displays a grid of featured products with:
 * - Product images with hover effects
 * - Product details (name, description, price)
 * - Nutritional information
 * - Action buttons (Details and Add to Cart)
 * Features include:
 * - Animated entrance for each product card
 * - Hover effects on product images
 * - Badge indicators for special products (Bestseller, New)
 * - Responsive grid layout
 */

"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";

/**
 * Mock product data structure
 * Each product contains:
 * - id: Unique identifier
 * - name: Product name
 * - description: Product description
 * - price: Product price
 * - image: Product image URL
 * - badge: Special badge text (optional)
 * - nutritionalInfo: Nutritional information object
 */
const products = [
  {
    id: 1,
    name: "Green Vitality",
    description: "A refreshing blend of kale, spinach, apple, and ginger",
    price: 6.99,
    image: "./green-vitality.jpg",
    badge: "Bestseller",
    nutritionalInfo: {
      calories: 120,
      protein: "2g",
      carbs: "25g",
      fat: "0.5g",
    },
  },
  {
    id: 2,
    name: "Berry Boost",
    description: "Antioxidant-rich mix of blueberries, strawberries, and acai",
    price: 7.49,
    image: "./berry-boost.jpg",
    badge: "New",
    nutritionalInfo: {
      calories: 140,
      protein: "1g",
      carbs: "30g",
      fat: "0g",
    },
  },
  {
    id: 3,
    name: "Tropical Cleanse",
    description: "Detoxifying blend of pineapple, mango, and coconut water",
    price: 6.99,
    image: "./tropical-cleanse.jpg",
    badge: null,
    nutritionalInfo: {
      calories: 150,
      protein: "1g",
      carbs: "35g",
      fat: "0g",
    },
  },
  {
    id: 4,
    name: "Zen Balance",
    description: "Calming infusion of chamomile, lavender, and lemon balm",
    price: 5.99,
    image: "./zen-balance.jpg",
    badge: null,
    nutritionalInfo: {
      calories: 80,
      protein: "0g",
      carbs: "18g",
      fat: "0g",
    },
  },
];

/**
 * Featured Products component that displays a grid of product cards
 * @returns A React component that renders the featured products grid
 */
export function FeaturedProducts() {
  // Track which product card is currently being hovered
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <motion.div
          key={product.id}
          // Animation properties for entrance effect
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: product.id * 0.1 }}
          // Hover state management
          onHoverStart={() => setHoveredId(product.id)}
          onHoverEnd={() => setHoveredId(null)}
          className="relative"
        >
          {/* Product card with glassmorphism effect */}
          <Card className="h-full overflow-hidden border-0 bg-background/50 backdrop-blur-sm">
            {/* Product image container with hover zoom effect */}
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-500"
                style={{
                  transform:
                    hoveredId === product.id ? "scale(1.05)" : "scale(1)",
                }}
              />
              {/* Special badge for featured products */}
              {product.badge && (
                <Badge className="absolute top-3 right-3 bg-green-600 hover:bg-green-700">
                  {product.badge}
                </Badge>
              )}
            </div>
            {/* Product details section */}
            <CardContent className="p-4">
              <h3 className="font-semibold text-lg">{product.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">
                {product.description}
              </p>
              {/* Price and calorie information */}
              <div className="mt-3 flex justify-between items-center">
                <span className="font-bold text-lg">
                  ${product.price.toFixed(2)}
                </span>
                <div className="text-xs text-muted-foreground">
                  {product.nutritionalInfo.calories} cal
                </div>
              </div>
            </CardContent>
            {/* Action buttons */}
            <CardFooter className="p-4 pt-0 flex gap-2">
              <Button asChild variant="outline" size="sm" className="w-full">
                <Link href={`/product?id=${product.id}`}>Details</Link>
              </Button>
              <Button size="sm" className="w-full">
                <ShoppingCart className="h-4 w-4 mr-2" /> Add
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
