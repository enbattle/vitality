/**
 * Nutrition category page component for the Vitality Drinks blog.
 * This page displays blog posts specifically related to nutrition and healthy beverages.
 * Features include:
 * - Category header with description
 * - Grid of nutrition-related blog posts
 * - Post cards with images, metadata, and excerpts
 * - Load more functionality
 */

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

/**
 * Nutrition category page component that displays nutrition-related blog posts
 * @returns A React component that renders the nutrition category page content
 */
export default function NutritionBlogPage() {
  /**
   * Mock blog posts data for the nutrition category
   * In a real application, this would be fetched from a CMS or database
   * Each post contains:
   * - id: Unique identifier
   * - title: Post title
   * - excerpt: Short description
   * - date: Publication date
   * - author: Post author
   * - category: Post category
   * - image: Featured image URL
   * - slug: URL-friendly version of the title
   */
  const blogPosts = [
    {
      id: 1,
      title: "The Science Behind Antioxidants in Cold-Pressed Juices",
      excerpt:
        "Explore how cold-pressed juicing preserves vital antioxidants and why they're essential for your health.",
      date: "July 3, 2023",
      author: "Dr. Rebecca Chen",
      category: "Nutrition",
      image: "/placeholder.svg",
      slug: "antioxidants-cold-pressed-juices",
    },
    {
      id: 2,
      title:
        "Understanding Electrolytes: Why They Matter in Your Hydration Routine",
      excerpt:
        "Learn about the crucial role electrolytes play in hydration and how to ensure you're getting enough.",
      date: "June 18, 2023",
      author: "Mark Johnson, RD",
      category: "Nutrition",
      image: "/placeholder.svg",
      slug: "understanding-electrolytes",
    },
    {
      id: 3,
      title: "Prebiotics vs. Probiotics: What's in Your Health Drink?",
      excerpt:
        "Demystifying the difference between prebiotics and probiotics and how they contribute to gut health.",
      date: "May 25, 2023",
      author: "Sophia Martinez, MS",
      category: "Nutrition",
      image: "/placeholder.svg",
      slug: "prebiotics-vs-probiotics",
    },
    {
      id: 4,
      title: "The Truth About Natural Sugars in Fruit Juices",
      excerpt:
        "Breaking down how natural sugars differ from added sugars and what that means for your health.",
      date: "April 30, 2023",
      author: "James Wilson, PhD",
      category: "Nutrition",
      image: "/placeholder.svg",
      slug: "natural-sugars-truth",
    },
    {
      id: 5,
      title: "Micronutrients: The Hidden Heroes in Your Daily Drinks",
      excerpt:
        "Discover the essential vitamins and minerals in your favorite healthy beverages and their benefits.",
      date: "March 15, 2023",
      author: "Emily Thompson, RDN",
      category: "Nutrition",
      image: "/placeholder.svg",
      slug: "micronutrients-hidden-heroes",
    },
  ];

  return (
    <div className="container px-4 py-12 mx-auto">
      {/* Category header section */}
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-2">
            Nutrition
          </h1>
          <p className="text-lg text-muted-foreground">
            Expert insights on the nutritional benefits of healthy beverages and
            how they support your wellbeing.
          </p>
        </div>
        {/* Navigation button to return to all categories */}
        <div className="flex gap-2">
          <Link href="/blog">
            <Button variant="outline">All Categories</Button>
          </Link>
        </div>
      </div>

      <Separator className="my-8" />

      {/* Blog posts grid */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <article
            key={post.id}
            className="group flex flex-col overflow-hidden rounded-lg border"
          >
            {/* Post featured image */}
            <div className="relative h-48 overflow-hidden">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                width={600}
                height={400}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              />
              {/* Category badge */}
              <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                {post.category}
              </div>
            </div>
            {/* Post content */}
            <div className="flex flex-col flex-1 p-6">
              {/* Post metadata */}
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
              {/* Post title and excerpt */}
              <h2 className="text-xl font-bold mb-2 line-clamp-2">
                {post.title}
              </h2>
              <p className="text-muted-foreground mb-6 flex-1 line-clamp-3">
                {post.excerpt}
              </p>
              {/* Read more link */}
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

      {/* Load more button */}
      <div className="mt-12 flex justify-center">
        <Button variant="outline" size="lg">
          Load More
        </Button>
      </div>
    </div>
  );
}
