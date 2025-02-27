import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Mock bestseller products
const bestsellers = [
  {
    id: 1,
    name: "Green Vitality",
    description: "A refreshing blend of kale, spinach, apple, and ginger",
    price: 6.99,
    image: "/placeholder.svg?height=400&width=400",
    badge: "Bestseller",
    category: "Greens",
    sales: 1250,
  },
  {
    id: 6,
    name: "Root Revival",
    description: "Earthy blend of beetroot, carrot, and ginger",
    price: 7.99,
    image: "/placeholder.svg?height=400&width=400",
    badge: "Popular",
    category: "Roots",
    sales: 980,
  },
  {
    id: 2,
    name: "Berry Boost",
    description: "Antioxidant-rich mix of blueberries, strawberries, and acai",
    price: 7.49,
    image: "/placeholder.svg?height=400&width=400",
    badge: "New",
    category: "Berries",
    sales: 875,
  },
  {
    id: 8,
    name: "Immunity Boost",
    description: "Immune-supporting blend with turmeric, ginger, and orange",
    price: 7.99,
    image: "/placeholder.svg?height=400&width=400",
    badge: null,
    category: "Wellness",
    sales: 820,
  },
  {
    id: 7,
    name: "Protein Power",
    description: "Plant-based protein with banana, almond milk, and cacao",
    price: 8.49,
    image: "/placeholder.svg?height=400&width=400",
    badge: null,
    category: "Protein",
    sales: 750,
  },
  {
    id: 5,
    name: "Citrus Refresh",
    description: "Energizing blend of orange, lemon, and grapefruit",
    price: 6.49,
    image: "/placeholder.svg?height=400&width=400",
    badge: null,
    category: "Citrus",
    sales: 680,
  },
];

export default function BestsellersPage() {
  return (
    <main className="flex-1">
      <div className="container px-4 md:px-6 py-8 md:py-12">
        <Button variant="ghost" asChild className="mb-8">
          <Link href="/products" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to All Products
          </Link>
        </Button>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Bestsellers</h1>
            <p className="text-muted-foreground mt-1">
              Our most popular drinks loved by customers
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {bestsellers.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="group"
            >
              <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {product.badge && (
                  <Badge className="absolute top-3 right-3 bg-green-600 hover:bg-green-700">
                    {product.badge}
                  </Badge>
                )}
              </div>
              <div className="mt-3 space-y-1">
                <h3 className="font-semibold group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {product.description}
                </p>
                <div className="flex justify-between items-center pt-2">
                  <span className="font-bold">${product.price.toFixed(2)}</span>
                  <span className="text-xs text-muted-foreground">
                    {product.sales.toLocaleString()} sold
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
