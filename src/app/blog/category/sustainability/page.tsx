import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function SustainabilityBlogPage() {
  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "Our Journey to Zero-Waste Packaging",
      excerpt:
        "How we're transforming our packaging process to eliminate waste and reduce environmental impact.",
      date: "July 18, 2023",
      author: "Jessica Green",
      category: "Sustainability",
      image: "/placeholder.svg",
      slug: "zero-waste-packaging-journey",
    },
    {
      id: 2,
      title: "Regenerative Agriculture: The Future of Our Ingredients",
      excerpt:
        "Exploring how regenerative farming practices are shaping the quality and sustainability of our drink ingredients.",
      date: "June 30, 2023",
      author: "Marcus Rivera",
      category: "Sustainability",
      image: "/placeholder.svg",
      slug: "regenerative-agriculture-future",
    },
    {
      id: 3,
      title: "Water Conservation in Beverage Production",
      excerpt:
        "Inside look at innovative water-saving techniques we're implementing in our production facilities.",
      date: "May 22, 2023",
      author: "Laura Chen",
      category: "Sustainability",
      image: "/placeholder.svg",
      slug: "water-conservation-production",
    },
    {
      id: 4,
      title: "Carbon-Neutral Shipping: Our Commitment to the Planet",
      excerpt:
        "How we're offsetting carbon emissions from shipping to deliver your favorite drinks sustainably.",
      date: "April 18, 2023",
      author: "Thomas Wilson",
      category: "Sustainability",
      image: "/placeholder.svg",
      slug: "carbon-neutral-shipping",
    },
    {
      id: 5,
      title: "From Farm to Bottle: Transparent Supply Chain",
      excerpt:
        "Our commitment to transparency and ethical sourcing throughout our entire supply chain.",
      date: "March 10, 2023",
      author: "Sophia Martinez",
      category: "Sustainability",
      image: "/placeholder.svg",
      slug: "transparent-supply-chain",
    },
  ];

  return (
    <div className="container px-4 py-12 mx-auto">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-2">
            Sustainability
          </h1>
          <p className="text-lg text-muted-foreground">
            Our ongoing initiatives and commitments to environmental stewardship
            and sustainable practices.
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
