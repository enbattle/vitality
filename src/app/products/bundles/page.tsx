import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Mock bundle products
const bundles = [
  {
    id: 101,
    name: "Wellness Starter Pack",
    description: "Perfect introduction to our most popular drinks",
    price: 29.99,
    originalPrice: 35.94,
    image: "/placeholder.svg?height=400&width=400",
    badge: "Save 15%",
    includes: [
      "Green Vitality (2 bottles)",
      "Berry Boost (2 bottles)",
      "Tropical Cleanse (2 bottles)",
    ],
  },
  {
    id: 102,
    name: "Immunity Bundle",
    description: "Boost your immune system with these nutrient-rich drinks",
    price: 24.99,
    originalPrice: 29.97,
    image: "/placeholder.svg?height=400&width=400",
    badge: "Save 20%",
    includes: [
      "Immunity Boost (3 bottles)",
      "Citrus Refresh (2 bottles)",
      "Golden Turmeric (1 bottle)",
    ],
  },
  {
    id: 103,
    name: "Energy & Focus Pack",
    description: "Stay energized and focused throughout your day",
    price: 32.99,
    originalPrice: 38.95,
    image: "/placeholder.svg?height=400&width=400",
    badge: "Best Value",
    includes: [
      "Matcha Energy (3 bottles)",
      "Berry Boost (2 bottles)",
      "Protein Power (2 bottles)",
    ],
  },
  {
    id: 104,
    name: "Detox & Cleanse Bundle",
    description: "Reset your system with our detoxifying blends",
    price: 27.99,
    originalPrice: 32.94,
    image: "/placeholder.svg?height=400&width=400",
    badge: "Popular",
    includes: [
      "Green Vitality (2 bottles)",
      "Cucumber Calm (2 bottles)",
      "Tropical Cleanse (2 bottles)",
    ],
  },
];

export default function BundlesPage() {
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
            <h1 className="text-3xl font-bold tracking-tight">
              Bundles & Sets
            </h1>
            <p className="text-muted-foreground mt-1">
              Save money with our carefully curated drink bundles
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {bundles.map((bundle) => (
            <Card key={bundle.id} className="overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="relative aspect-square md:aspect-auto">
                  <Image
                    src={bundle.image || "/placeholder.svg"}
                    alt={bundle.name}
                    fill
                    className="object-cover"
                  />
                  {bundle.badge && (
                    <Badge className="absolute top-3 right-3 bg-green-600 hover:bg-green-700">
                      {bundle.badge}
                    </Badge>
                  )}
                </div>
                <div className="flex flex-col">
                  <CardHeader>
                    <CardTitle>{bundle.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-muted-foreground mb-4">
                      {bundle.description}
                    </p>
                    <div className="space-y-2">
                      <h4 className="font-medium text-sm">Includes:</h4>
                      <ul className="space-y-1">
                        {bundle.includes.map((item, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-2 text-sm"
                          >
                            <Check className="h-4 w-4 text-green-600 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-lg">
                          ${bundle.price.toFixed(2)}
                        </span>
                        <span className="text-sm text-muted-foreground line-through">
                          ${bundle.originalPrice.toFixed(2)}
                        </span>
                      </div>
                    </div>
                    <Button>Add to Cart</Button>
                  </CardFooter>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
