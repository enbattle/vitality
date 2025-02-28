"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowLeft, ShoppingCart, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

// Define the Product type for TypeScript type checking
type Product = {
  id: number;
  name: string;
  description: string;
  longDescription: string;
  price: number;
  image: string;
  badge: string | null;
  nutritionalInfo: {
    calories: number;
    protein: string;
    carbs: string;
    fat: string;
    vitamins: string[];
  };
  ingredients: string;
  reviews: Array<{
    id: string;
    name: string;
    rating: number;
    comment: string;
    date: string;
  }>;
  relatedProducts: number[];
};

// Mock products data - in a real application, this would come from an API or database
const products: Product[] = [
  {
    id: 1,
    name: "Green Vitality",
    description: "A refreshing blend of kale, spinach, apple, and ginger",
    longDescription:
      "Our Green Vitality drink is a perfect balance of leafy greens and sweet apple, with a kick of ginger to boost your immune system. Each bottle contains over 5 servings of vegetables, making it an easy way to get your daily greens.",
    price: 6.99,
    image: "/green-vitality.jpg",
    badge: "Bestseller",
    nutritionalInfo: {
      calories: 120,
      protein: "2g",
      carbs: "25g",
      fat: "0.5g",
      vitamins: ["Vitamin A", "Vitamin C", "Vitamin K", "Potassium", "Iron"],
    },
    ingredients:
      "Filtered Water, Organic Kale, Organic Spinach, Organic Apple, Organic Ginger, Organic Lemon, Organic Mint",
    reviews: [
      {
        id: "1",
        name: "Sarah J.",
        rating: 5,
        comment:
          "This is my go-to morning drink. Gives me energy without the crash!",
        date: "2 months ago",
      },
      {
        id: "2",
        name: "Michael T.",
        rating: 4,
        comment: "Great taste and I feel healthier already. Would recommend!",
        date: "1 month ago",
      },
    ],
    relatedProducts: [2, 3],
  },
  {
    id: 2,
    name: "Berry Boost",
    description: "Antioxidant-rich mix of blueberries, strawberries, and acai",
    longDescription:
      "Our Berry Boost is packed with antioxidants from a variety of berries to support your immune system and overall health. The natural sweetness makes it a delicious treat without added sugars.",
    price: 7.49,
    image: "/berry-boost.jpg",
    badge: "New",
    nutritionalInfo: {
      calories: 140,
      protein: "1g",
      carbs: "30g",
      fat: "0g",
      vitamins: ["Vitamin C", "Vitamin K", "Manganese", "Folate"],
    },
    ingredients:
      "Filtered Water, Organic Blueberries, Organic Strawberries, Organic Acai, Organic Lemon Juice",
    reviews: [
      {
        id: "1",
        name: "Emily R.",
        rating: 5,
        comment: "The flavor is amazing! I drink this after my workouts.",
        date: "3 weeks ago",
      },
    ],
    relatedProducts: [1, 3],
  },
  {
    id: 3,
    name: "Tropical Cleanse",
    description: "Detoxifying blend of pineapple, mango, and coconut water",
    longDescription:
      "Escape to the tropics with our Tropical Cleanse. This refreshing blend combines the natural detoxifying properties of pineapple enzymes with hydrating coconut water and sweet mango.",
    price: 6.99,
    image: "/tropical-cleanse.jpg",
    badge: null,
    nutritionalInfo: {
      calories: 150,
      protein: "1g",
      carbs: "35g",
      fat: "0g",
      vitamins: ["Vitamin C", "Vitamin B6", "Potassium", "Magnesium"],
    },
    ingredients:
      "Organic Coconut Water, Organic Pineapple, Organic Mango, Organic Lime Juice",
    reviews: [
      {
        id: "1",
        name: "Jason K.",
        rating: 4,
        comment:
          "So refreshing on a hot day! Great alternative to sugary drinks.",
        date: "1 month ago",
      },
    ],
    relatedProducts: [1, 2],
  },
  {
    id: 4,
    name: "Zen Balance",
    description: "Calming infusion of chamomile, lavender, and lemon balm",
    longDescription:
      "Our Zen Balance blend is carefully crafted to help you find your center and maintain calm throughout your day. This soothing combination of traditional herbs known for their relaxing properties creates a moment of tranquility in every sip. Perfect for unwinding after a long day or maintaining focus during stressful situations.",
    price: 5.99,
    image: "/zen-balance.jpg",
    badge: "Wellness",
    nutritionalInfo: {
      calories: 80,
      protein: "0g",
      carbs: "18g",
      fat: "0g",
      vitamins: [
        "Magnesium",
        "Calcium",
        "Vitamin B6",
        "Potassium",
        "Antioxidants",
      ],
    },
    ingredients:
      "Filtered Water, Organic Chamomile Flowers, Organic Lavender Buds, Organic Lemon Balm, Organic Passionflower, Organic Honey, Organic Lemon Juice",
    reviews: [
      {
        id: "1",
        name: "Emily R.",
        rating: 5,
        comment:
          "This is my evening ritual now. Helps me unwind and prepare for a peaceful night's sleep.",
        date: "2 weeks ago",
      },
      {
        id: "2",
        name: "James K.",
        rating: 5,
        comment:
          "Perfect for meditation sessions. The blend of herbs is so well balanced.",
        date: "1 month ago",
      },
      {
        id: "3",
        name: "Maria S.",
        rating: 4,
        comment: "Love having this during my workday. Keeps me calm but alert.",
        date: "1 month ago",
      },
    ],
    relatedProducts: [1, 2, 3],
  },
];

export default function ProductPage() {
  // Get the search parameters from the URL
  const searchParams = useSearchParams();
  const [product, setProduct] = useState<Product | null>(null);

  // Effect to find and set the product based on the URL parameter
  useEffect(() => {
    const productId = searchParams.get("id");
    if (productId) {
      const foundProduct = products.find(
        (p) => p.id === Number.parseInt(productId)
      );
      if (foundProduct) {
        setProduct(foundProduct);
      }
    }
  }, [searchParams]);

  // Show nothing if no product is found (could be replaced with a loading state or error message)
  if (!product) {
    return null;
  }

  return (
    <main className="flex-1">
      <div className="container px-4 md:px-6 py-6 md:py-12">
        {/* Back button */}
        <Button variant="ghost" asChild className="mb-8">
          <Link href="/products" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Products
          </Link>
        </Button>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Image */}
          <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
            {product.badge && (
              <Badge className="absolute top-4 right-4 bg-green-600 hover:bg-green-700">
                {product.badge}
              </Badge>
            )}
          </div>

          {/* Product Details */}
          <div className="flex flex-col">
            {/* Product Title and Rating */}
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <div className="flex items-center gap-2 mt-2">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < 4.5
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                4.5 (24 reviews)
              </span>
            </div>

            {/* Product Description */}
            <p className="mt-4 text-muted-foreground">{product.description}</p>

            {/* Price and Shipping Badge */}
            <div className="mt-6 flex items-center">
              <span className="text-3xl font-bold">
                ${product.price.toFixed(2)}
              </span>
              <Badge variant="outline" className="ml-3">
                Free Shipping
              </Badge>
            </div>

            {/* Add to Cart Section */}
            <div className="mt-8 grid gap-4">
              <div className="flex items-center gap-4">
                {/* Quantity Selector */}
                <div className="flex border rounded-md">
                  <Button variant="ghost" className="rounded-r-none px-3">
                    -
                  </Button>
                  <div className="flex items-center justify-center w-12 border-x">
                    1
                  </div>
                  <Button variant="ghost" className="rounded-l-none px-3">
                    +
                  </Button>
                </div>
                {/* Add to Cart Button */}
                <Button size="lg" className="flex-1">
                  <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
                </Button>
              </div>
              {/* Buy Now Button */}
              <Button variant="outline" size="lg">
                Buy Now
              </Button>
            </div>

            <Separator className="my-8" />

            {/* Product Details Tabs */}
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>

              {/* Description Tab */}
              <TabsContent value="description" className="pt-4">
                <div className="space-y-4">
                  <p>{product.longDescription}</p>
                  <h3 className="font-semibold text-lg">Ingredients</h3>
                  <p>{product.ingredients}</p>
                </div>
              </TabsContent>

              {/* Nutrition Tab */}
              <TabsContent value="nutrition" className="pt-4">
                <div className="space-y-4">
                  {/* Nutrition Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="border rounded-lg p-3">
                      <span className="text-sm text-muted-foreground">
                        Calories
                      </span>
                      <p className="font-semibold">
                        {product.nutritionalInfo.calories}
                      </p>
                    </div>
                    <div className="border rounded-lg p-3">
                      <span className="text-sm text-muted-foreground">
                        Protein
                      </span>
                      <p className="font-semibold">
                        {product.nutritionalInfo.protein}
                      </p>
                    </div>
                    <div className="border rounded-lg p-3">
                      <span className="text-sm text-muted-foreground">
                        Carbs
                      </span>
                      <p className="font-semibold">
                        {product.nutritionalInfo.carbs}
                      </p>
                    </div>
                    <div className="border rounded-lg p-3">
                      <span className="text-sm text-muted-foreground">Fat</span>
                      <p className="font-semibold">
                        {product.nutritionalInfo.fat}
                      </p>
                    </div>
                  </div>
                  {/* Vitamins Section */}
                  <h3 className="font-semibold text-lg mt-4">
                    Vitamins & Minerals
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {product.nutritionalInfo.vitamins.map((vitamin) => (
                      <Badge key={vitamin} variant="secondary">
                        {vitamin}
                      </Badge>
                    ))}
                  </div>
                </div>
              </TabsContent>

              {/* Reviews Tab */}
              <TabsContent value="reviews" className="pt-4">
                <div className="space-y-6">
                  {product.reviews.map((review) => (
                    <div
                      key={review.id}
                      className="border-b pb-4 last:border-0"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-semibold">{review.name}</p>
                          <div className="flex mt-1">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < review.rating
                                    ? "text-yellow-400 fill-yellow-400"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {review.date}
                        </span>
                      </div>
                      <p className="mt-2">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </main>
  );
}
