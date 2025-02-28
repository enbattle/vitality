"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { ShoppingCart, Search, SlidersHorizontal } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Mock product data
const products = [
  {
    id: 1,
    name: "Green Vitality",
    description: "A refreshing blend of kale, spinach, apple, and ginger",
    price: 6.99,
    image: "/green-vitality.jpg",
    badge: "Bestseller",
    category: "Greens",
  },
  {
    id: 2,
    name: "Berry Boost",
    description: "Antioxidant-rich mix of blueberries, strawberries, and acai",
    price: 7.49,
    image: "/berry-boost.jpg",
    badge: "New",
    category: "Berries",
  },
  {
    id: 3,
    name: "Tropical Cleanse",
    description: "Detoxifying blend of pineapple, mango, and coconut water",
    price: 6.99,
    image: "/tropical-cleanse.jpg",
    badge: null,
    category: "Tropical",
  },
  {
    id: 4,
    name: "Zen Balance",
    description: "Calming infusion of chamomile, lavender, and lemon balm",
    price: 5.99,
    image: "/zen-balance.jpg",
    badge: null,
    category: "Herbal",
  },
  {
    id: 5,
    name: "Citrus Refresh",
    description: "Energizing blend of orange, lemon, and grapefruit",
    price: 6.49,
    image: "/citrus-fresh.jpg",
    badge: null,
    category: "Citrus",
  },
  {
    id: 6,
    name: "Root Revival",
    description: "Earthy blend of beetroot, carrot, and ginger",
    price: 7.99,
    image: "/root-revival.jpg",
    badge: "Popular",
    category: "Roots",
  },
  {
    id: 7,
    name: "Protein Power",
    description: "Plant-based protein with banana, almond milk, and cacao",
    price: 8.49,
    image: "/protein-power.jpg",
    badge: null,
    category: "Protein",
  },
  {
    id: 8,
    name: "Immunity Boost",
    description: "Immune-supporting blend with turmeric, ginger, and orange",
    price: 7.99,
    image: "/immunity-boost.jpg",
    badge: null,
    category: "Wellness",
  },
];

const categories = [
  "All",
  "Greens",
  "Berries",
  "Tropical",
  "Herbal",
  "Citrus",
  "Roots",
  "Protein",
  "Wellness",
];

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 10]);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [sortOption, setSortOption] = useState("featured");

  // Filter products based on search, category, and price
  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    const matchesPrice =
      product.price >= priceRange[0] && product.price <= priceRange[1];

    return matchesSearch && matchesCategory && matchesPrice;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "price-low") return a.price - b.price;
    if (sortOption === "price-high") return b.price - a.price;
    if (sortOption === "name") return a.name.localeCompare(b.name);
    return 0; // Default: featured
  });

  return (
    <main className="flex-1">
      <div className="container px-4 md:px-6 py-6 md:py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Our Products</h1>
            <p className="text-muted-foreground mt-1">
              Discover our range of natural, organic beverages
            </p>
          </div>

          <div className="flex items-center gap-2 w-full md:w-auto">
            <div className="relative flex-1 md:w-[300px]">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-8 w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <Sheet open={filtersOpen} onOpenChange={setFiltersOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="shrink-0">
                  <SlidersHorizontal className="h-4 w-4" />
                  <span className="sr-only">Filters</span>
                </Button>
              </SheetTrigger>
              <SheetContent className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle>Filters</SheetTitle>
                  <SheetDescription>
                    Refine your product search with filters
                  </SheetDescription>
                </SheetHeader>
                <div className="grid gap-6 py-6">
                  <div className="space-y-4">
                    <h3 className="text-sm font-medium">Category</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {categories.map((category) => (
                        <Label
                          key={category}
                          className="flex items-center gap-2 font-normal"
                        >
                          <Checkbox
                            checked={selectedCategory === category}
                            onCheckedChange={() =>
                              setSelectedCategory(category)
                            }
                          />
                          {category}
                        </Label>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="text-sm font-medium">Price Range</h3>
                      <p className="text-sm text-muted-foreground">
                        ${priceRange[0].toFixed(2)} - $
                        {priceRange[1].toFixed(2)}
                      </p>
                    </div>
                    <Slider
                      defaultValue={[0, 10]}
                      max={10}
                      step={0.5}
                      value={priceRange}
                      onValueChange={setPriceRange}
                    />
                  </div>
                </div>
                <div className="flex justify-between">
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSelectedCategory("All");
                      setPriceRange([0, 10]);
                    }}
                  >
                    Reset Filters
                  </Button>
                  <SheetClose asChild>
                    <Button>Apply Filters</Button>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>

            <Select value={sortOption} onValueChange={setSortOption}>
              <SelectTrigger className="w-[180px] hidden md:flex">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="name">Name</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <h2 className="text-xl font-semibold mb-2">No products found</h2>
            <p className="text-muted-foreground mb-6">
              Try adjusting your filters or search query
            </p>
            <Button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
                setPriceRange([0, 10]);
              }}
            >
              Reset All Filters
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sortedProducts.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="group"
              >
                <Link href={`/products/${product.id}`} className="block h-full">
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
                    <h3 className="font-semibold">{product.name}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {product.description}
                    </p>
                    <div className="flex justify-between items-center pt-2">
                      <span className="font-bold">
                        ${product.price.toFixed(2)}
                      </span>
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                        <ShoppingCart className="h-4 w-4" />
                        <span className="sr-only">Add to cart</span>
                      </Button>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
