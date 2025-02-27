import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function CompanyNewsBlogPage() {
  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "Introducing Our New Seasonal Collection: Summer Refresh",
      excerpt:
        "Exciting announcement of our limited edition summer drinks designed to keep you cool and energized.",
      date: "July 21, 2023",
      author: "Alex Johnson, CEO",
      category: "Company News",
      image: "/placeholder.svg",
      slug: "summer-refresh-collection",
    },
    {
      id: 2,
      title: "We've Been Certified B Corp!",
      excerpt:
        "Celebrating our achievement of B Corporation certification and what it means for our commitment to social responsibility.",
      date: "June 15, 2023",
      author: "Sarah Williams, COO",
      category: "Company News",
      image: "/placeholder.svg",
      slug: "b-corp-certification",
    },
    {
      id: 3,
      title: "Opening Our Third Production Facility",
      excerpt:
        "Expanding our operations with a new eco-friendly production facility to meet growing demand.",
      date: "May 30, 2023",
      author: "Michael Chen, Operations Director",
      category: "Company News",
      image: "/placeholder.svg",
      slug: "third-production-facility",
    },
    {
      id: 4,
      title: "Partnership Announcement: Supporting Local Farmers",
      excerpt:
        "Details of our new initiative to source ingredients directly from small-scale organic farmers.",
      date: "April 25, 2023",
      author: "Emma Rodriguez, Sourcing Manager",
      category: "Company News",
      image: "/placeholder.svg",
      slug: "local-farmers-partnership",
    },
    {
      id: 5,
      title: "Annual Impact Report: Our Achievements in 2022",
      excerpt:
        "A comprehensive look at our social and environmental impact over the past year and goals for the future.",
      date: "March 15, 2023",
      author: "David Thompson, Sustainability Director",
      category: "Company News",
      image: "/placeholder.svg",
      slug: "annual-impact-report-2022",
    },
  ];

  return (
    <div className="container px-4 py-12 mx-auto">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-2">
            Company News
          </h1>
          <p className="text-lg text-muted-foreground">
            Latest updates, announcements, and milestones from our growing
            healthy drinks company.
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
