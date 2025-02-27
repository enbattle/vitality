import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

// Mock blog data
const featuredPost = {
  id: 1,
  title: "The Benefits of Cold-Pressed Juices",
  excerpt:
    "Discover why cold-pressed juices retain more nutrients and enzymes than traditional juicing methods.",
  date: "May 15, 2023",
  readTime: "5 min read",
  author: "Emma Rodriguez",
  category: "Nutrition",
  image: "/placeholder.svg?height=600&width=1200",
};

const recentPosts = [
  {
    id: 2,
    title: "5 Morning Drinks to Boost Your Energy",
    excerpt:
      "Start your day right with these energizing beverages that don't rely on caffeine.",
    date: "April 28, 2023",
    readTime: "4 min read",
    author: "Michael Chen",
    category: "Wellness",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 3,
    title: "Understanding Antioxidants in Your Drinks",
    excerpt:
      "Learn about the powerful antioxidants in our berry blends and how they benefit your health.",
    date: "April 15, 2023",
    readTime: "6 min read",
    author: "Sarah Johnson",
    category: "Nutrition",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 4,
    title: "Sustainable Packaging: Our Journey",
    excerpt:
      "How we developed our eco-friendly packaging and reduced our environmental impact.",
    date: "March 30, 2023",
    readTime: "7 min read",
    author: "James Wilson",
    category: "Sustainability",
    image: "/placeholder.svg?height=400&width=600",
  },
];

const categories = [
  { name: "Nutrition", count: 12 },
  { name: "Wellness", count: 8 },
  { name: "Recipes", count: 15 },
  { name: "Sustainability", count: 6 },
  { name: "Company News", count: 4 },
];

export default function BlogPage() {
  return (
    <main className="flex-1">
      {/* Header */}
      <div className="bg-green-50 dark:bg-green-950/20 py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              Our Blog
            </h1>
            <p className="text-lg text-muted-foreground">
              Insights, recipes, and wellness tips from the Vitality Drinks team
            </p>
          </div>
        </div>
      </div>

      {/* Featured Post */}
      <div className="py-12">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold tracking-tight mb-8">
            Featured Post
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src={featuredPost.image || "/placeholder.svg"}
                alt={featuredPost.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-4">
              <Badge>{featuredPost.category}</Badge>
              <h3 className="text-2xl md:text-3xl font-bold">
                {featuredPost.title}
              </h3>
              <p className="text-muted-foreground">{featuredPost.excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{featuredPost.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{featuredPost.readTime}</span>
                </div>
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  <span>{featuredPost.author}</span>
                </div>
              </div>
              <Button asChild>
                <Link href={`/blog/${featuredPost.id}`}>Read More</Link>
              </Button>
            </div>
          </div>

          <Separator className="my-12" />

          {/* Recent Posts */}
          <div>
            <h2 className="text-2xl font-bold tracking-tight mb-8">
              Recent Posts
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentPosts.map((post) => (
                <div key={post.id} className="group">
                  <Link href={`/blog/${post.id}`} className="block space-y-4">
                    <div className="relative aspect-video rounded-lg overflow-hidden">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div>
                      <Badge>{post.category}</Badge>
                      <h3 className="text-xl font-bold mt-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground mt-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mt-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-12">
              <Button variant="outline">View All Posts</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar and Newsletter */}
      <div className="bg-green-50 dark:bg-green-950/20 py-12">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 bg-card rounded-lg p-8 shadow-sm">
              <h2 className="text-2xl font-bold mb-6">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-muted-foreground mb-6">
                Get the latest articles, recipes, and wellness tips delivered
                straight to your inbox.
              </p>
              <div className="flex gap-2">
                <Input placeholder="Enter your email" className="max-w-md" />
                <Button>Subscribe</Button>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Categories</h3>
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category.name}>
                    <Link
                      href={`/blog/category/${
                        category.name.toLowerCase() === "company news"
                          ? "company-news"
                          : category.name.toLowerCase()
                      }`}
                      className="flex justify-between items-center py-2 hover:text-primary transition-colors"
                    >
                      <span>{category.name}</span>
                      <span className="text-sm text-muted-foreground">
                        {category.count}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
