import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function WellnessBlogPage() {
  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "Hydration and Mental Clarity: The Connection You Need to Know",
      excerpt:
        "Discover how proper hydration directly impacts your cognitive function and mental performance.",
      date: "July 10, 2023",
      author: "Dr. Michael Stevens",
      category: "Wellness",
      image: "/placeholder.svg",
      slug: "hydration-mental-clarity",
    },
    {
      id: 2,
      title: "Creating a Morning Ritual with Functional Beverages",
      excerpt:
        "Learn how to build a morning routine centered around wellness drinks that set you up for daily success.",
      date: "June 22, 2023",
      author: "Olivia Parker",
      category: "Wellness",
      image: "/placeholder.svg",
      slug: "morning-ritual-functional-beverages",
    },
    {
      id: 3,
      title: "Adaptogens in Drinks: Ancient Wisdom for Modern Stress",
      excerpt:
        "Explore how adaptogenic herbs in beverages can help your body manage stress and restore balance.",
      date: "May 15, 2023",
      author: "Sam Rodriguez",
      category: "Wellness",
      image: "/placeholder.svg",
      slug: "adaptogens-ancient-wisdom",
    },
    {
      id: 4,
      title: "Seasonal Drinking: Aligning Your Beverages with Nature's Rhythm",
      excerpt:
        "Why changing your drink choices with the seasons can support your body's natural adaptation process.",
      date: "April 8, 2023",
      author: "Emma Thompson",
      category: "Wellness",
      image: "/placeholder.svg",
      slug: "seasonal-drinking-nature-rhythm",
    },
    {
      id: 5,
      title: "The Art of Mindful Drinking for Overall Wellbeing",
      excerpt:
        "How being present and intentional with your beverage choices can transform your relationship with health.",
      date: "March 3, 2023",
      author: "Daniel Kim",
      category: "Wellness",
      image: "/placeholder.svg",
      slug: "mindful-drinking-wellbeing",
    },
  ];

  return (
    <div className="container px-4 py-12 mx-auto">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-2">
            Wellness
          </h1>
          <p className="text-lg text-muted-foreground">
            Holistic approaches to health and wellbeing through mindful beverage
            choices and healthy habits.
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
