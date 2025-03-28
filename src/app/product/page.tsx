/**
 * Product detail page component for the Vitality Drinks e-commerce platform.
 * This page displays detailed information about a specific product including:
 * - Product image and badge
 * - Product details and description
 * - Nutritional information
 * - Ingredients list
 * - Customer reviews
 * - Related products
 * - Add to cart functionality
 */

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

/**
 * TypeScript type definition for the Product data structure
 * Defines the shape of product data including all necessary fields
 */
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

/**
 * Mock products data for demonstration purposes
 * In a real application, this would be fetched from an API or database
 */
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

/**
 * Product detail page component that displays information about a specific product
 * @returns A React component that renders the product detail page
 */
export default function ProductPage() {
  // Get the search parameters from the URL to identify which product to display
  const searchParams = useSearchParams();
  const [product, setProduct] = useState<Product | null>(null);

  /**
   * Effect to find and set the product based on the URL parameter
   * This runs whenever the search parameters change
   */
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
        {/* Back button to return to products list */}
        <Button variant="ghost" asChild className="mb-8">
          <Link href="/products" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Products
          </Link>
        </Button>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Image Section */}
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

          {/* Product Details Section */}
          <div className="flex flex-col">
            {/* Product Title and Rating */}
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <div className="flex items-center gap-2 mt-2">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i <
                      Math.floor(
                        product.reviews.reduce(
                          (acc, review) => acc + review.rating,
                          0
                        ) / product.reviews.length
                      )
                        ? "fill-yellow-400 text-yellow-400"
                        : "fill-muted text-muted"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                ({product.reviews.length} reviews)
              </span>
            </div>

            {/* Product Price */}
            <p className="text-2xl font-bold mt-4">
              ${product.price.toFixed(2)}
            </p>

            {/* Product Description */}
            <p className="text-muted-foreground mt-2">{product.description}</p>

            {/* Add to Cart Button */}
            <Button className="mt-6" size="lg">
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>

            {/* Product Details Tabs */}
            <Tabs defaultValue="details" className="mt-8">
              <TabsList>
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>

              {/* Details Tab Content */}
              <TabsContent value="details" className="mt-4">
                <p className="text-muted-foreground">
                  {product.longDescription}
                </p>
                <Separator className="my-4" />
                <h3 className="font-medium mb-2">Ingredients</h3>
                <p className="text-muted-foreground">{product.ingredients}</p>
              </TabsContent>

              {/* Nutrition Tab Content */}
              <TabsContent value="nutrition" className="mt-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-medium mb-2">Calories</h3>
                    <p className="text-muted-foreground">
                      {product.nutritionalInfo.calories} kcal
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Protein</h3>
                    <p className="text-muted-foreground">
                      {product.nutritionalInfo.protein}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Carbohydrates</h3>
                    <p className="text-muted-foreground">
                      {product.nutritionalInfo.carbs}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Fat</h3>
                    <p className="text-muted-foreground">
                      {product.nutritionalInfo.fat}
                    </p>
                  </div>
                </div>
                <Separator className="my-4" />
                <h3 className="font-medium mb-2">Vitamins & Minerals</h3>
                <ul className="list-disc list-inside text-muted-foreground">
                  {product.nutritionalInfo.vitamins.map((vitamin, index) => (
                    <li key={index}>{vitamin}</li>
                  ))}
                </ul>
              </TabsContent>

              {/* Reviews Tab Content */}
              <TabsContent value="reviews" className="mt-4">
                <div className="space-y-4">
                  {product.reviews.map((review) => (
                    <div key={review.id} className="border-b pb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < review.rating
                                  ? "fill-yellow-400 text-yellow-400"
                                  : "fill-muted text-muted"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm font-medium">
                          {review.name}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {review.date}
                        </span>
                      </div>
                      <p className="text-muted-foreground">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Related Products Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.relatedProducts.map((relatedId) => {
              const relatedProduct = products.find((p) => p.id === relatedId);
              if (!relatedProduct) return null;

              return (
                <Link
                  key={relatedId}
                  href={`/product?id=${relatedId}`}
                  className="group"
                >
                  <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
                    <Image
                      src={relatedProduct.image || "/placeholder.svg"}
                      alt={relatedProduct.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    {relatedProduct.badge && (
                      <Badge className="absolute top-3 right-3 bg-green-600 hover:bg-green-700">
                        {relatedProduct.badge}
                      </Badge>
                    )}
                  </div>
                  <div className="mt-3 space-y-1">
                    <h3 className="font-semibold">{relatedProduct.name}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {relatedProduct.description}
                    </p>
                    <div className="flex justify-between items-center pt-2">
                      <span className="font-bold">
                        ${relatedProduct.price.toFixed(2)}
                      </span>
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                        <ShoppingCart className="h-4 w-4" />
                        <span className="sr-only">Add to cart</span>
                      </Button>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
