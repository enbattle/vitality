import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function RecipesBlogPage() {
  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "5 Refreshing Smoothie Recipes for Summer",
      excerpt:
        "Beat the heat with these delicious and nutritious smoothie recipes that are perfect for hot summer days.",
      date: "June 15, 2023",
      author: "Emma Johnson",
      category: "Recipes",
      image: "/placeholder.svg",
      slug: "refreshing-smoothie-recipes",
    },
    {
      id: 2,
      title: "How to Make the Perfect Green Juice at Home",
      excerpt:
        "Learn the secrets to creating balanced, delicious green juices with ingredients you already have in your kitchen.",
      date: "May 28, 2023",
      author: "Michael Chen",
      category: "Recipes",
      image: "/placeholder.svg",
      slug: "perfect-green-juice",
    },
    {
      id: 3,
      title: "Energizing Pre-Workout Drink Recipes",
      excerpt:
        "Boost your workout performance with these natural, homemade pre-workout drinks that provide clean energy.",
      date: "April 12, 2023",
      author: "Sarah Williams",
      category: "Recipes",
      image: "/placeholder.svg",
      slug: "pre-workout-drink-recipes",
    },
    {
      id: 4,
      title: "Seasonal Fruit Infusions: Spring Edition",
      excerpt:
        "Discover how to create delicious fruit-infused waters using the freshest spring produce for maximum flavor and nutrition.",
      date: "March 22, 2023",
      author: "David Rodriguez",
      category: "Recipes",
      image: "/placeholder.svg",
      slug: "spring-fruit-infusions",
    },
    {
      id: 5,
      title: "Kid-Friendly Healthy Drink Recipes",
      excerpt:
        "Get your children excited about healthy drinks with these fun, nutritious recipes that are kid-approved.",
      date: "February 8, 2023",
      author: "Lisa Thompson",
      category: "Recipes",
      image: "/placeholder.svg",
      slug: "kid-friendly-drinks",
    },
  ];

  return (
    <div className="container px-4 py-12 mx-auto">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-2">
            Recipes
          </h1>
          <p className="text-lg text-muted-foreground">
            Discover delicious and nutritious drink recipes to boost your health
            and wellness.
          </p>
        </div>
        <div className="flex gap-2">
          <Link href="/blog">
            <Button variant="outline">All Categories</Button>
          </Link>
        </div>
      </div>

      <Separator className="my-8" />

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <article
            key={post.id}
            className="group flex flex-col overflow-hidden rounded-lg border"
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                width={600}
                height={400}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                {post.category}
              </div>
            </div>
            <div className="flex flex-col flex-1 p-6">
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  <span>{post.author}</span>
                </div>
              </div>
              <h2 className="text-xl font-bold mb-2 line-clamp-2">
                {post.title}
              </h2>
              <p className="text-muted-foreground mb-6 flex-1 line-clamp-3">
                {post.excerpt}
              </p>
              <Link
                href={`/blog/#`}
                className="inline-flex items-center text-primary font-medium"
              >
                Read More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <Button variant="outline" size="lg">
          Load More
        </Button>
      </div>
    </div>
  );
}
