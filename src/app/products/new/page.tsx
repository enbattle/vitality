import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Mock new arrival products
const newProducts = [
  {
    id: 2,
    name: "Berry Boost",
    description: "Antioxidant-rich mix of blueberries, strawberries, and acai",
    price: 7.49,
    image: "/berry-boost.jpg",
    badge: "New",
    category: "Berries",
    releaseDate: "2 weeks ago",
  },
  {
    id: 9,
    name: "Matcha Energy",
    description: "Premium matcha green tea with a hint of mint",
    price: 8.99,
    image: "/matcha-energy.jpg",
    badge: "New",
    category: "Energy",
    releaseDate: "3 weeks ago",
  },
  {
    id: 10,
    name: "Cucumber Calm",
    description: "Refreshing cucumber, lime, and mint infusion",
    price: 6.49,
    image: "/cucumber-calm.jpg",
    badge: "New",
    category: "Hydration",
    releaseDate: "1 month ago",
  },
  {
    id: 11,
    name: "Golden Turmeric",
    description:
      "Anti-inflammatory blend with turmeric, ginger, and black pepper",
    price: 7.99,
    image: "/golden-tumeric.jpg",
    badge: "New",
    category: "Wellness",
    releaseDate: "1 month ago",
  },
];

export default function NewArrivalsPage() {
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
            <h1 className="text-3xl font-bold tracking-tight">New Arrivals</h1>
            <p className="text-muted-foreground mt-1">
              Our latest additions to the Vitality Drinks family
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {newProducts.map((product) => (
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
                    Added {product.releaseDate}
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
