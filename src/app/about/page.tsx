/**
 * About page component for the Vitality Drinks e-commerce platform.
 * This page tells the company's story and includes:
 * - Hero section with company introduction
 * - Mission statement and core values
 * - Team member profiles
 * - Company timeline
 */

import Image from "next/image";
import { Leaf, Award, Users, Sprout, UserCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";

/**
 * About page component that displays company information and history
 * @returns A React component that renders the about page content
 */
export default function AboutPage() {
  return (
    <main className="flex-1">
      {/* Hero Section with company introduction */}
      <div className="relative bg-green-50 dark:bg-green-950/20 py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                Our Story
              </h1>
              <p className="text-lg text-muted-foreground">
                Founded in 2015, Vitality Drinks was born from a simple idea: to
                create delicious, nutritious beverages that support a healthy
                lifestyle without compromising on taste.
              </p>
              <Button size="lg" className="mt-4">
                Our Mission
              </Button>
            </div>
            <div className="relative aspect-video md:aspect-square rounded-lg overflow-hidden">
              <Image
                src="/our-team.jpg"
                alt="Vitality Drinks team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section with core values */}
      <div className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">Our Mission</h2>
            <p className="text-lg text-muted-foreground">
              {`              We're on a mission to revolutionize the beverage industry by
              creating drinks that are good for you and the planet. We believe
              that what you put into your body matters, and that healthy choices
              should be accessible to everyone.`}
            </p>
          </div>

          {/* Core values grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {/* Natural Ingredients value */}
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="h-16 w-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4">
                <Leaf className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold">Natural Ingredients</h3>
              <p className="text-muted-foreground">
                We source only the highest quality organic ingredients for our
                beverages.
              </p>
            </div>

            {/* Quality First value */}
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="h-16 w-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4">
                <Award className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold">Quality First</h3>
              <p className="text-muted-foreground">
                Every batch is tested to ensure it meets our rigorous quality
                standards.
              </p>
            </div>

            {/* Community Focus value */}
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="h-16 w-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold">Community Focus</h3>
              <p className="text-muted-foreground">
                We support local farmers and give back to the communities we
                serve.
              </p>
            </div>

            {/* Sustainability value */}
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="h-16 w-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4">
                <Sprout className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold">Sustainability</h3>
              <p className="text-muted-foreground">
                {`Our packaging is eco-friendly and we're committed to reducing
                our carbon footprint.`}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section with member profiles */}
      <div className="bg-green-50 dark:bg-green-950/20 py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tight">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground">
              The passionate individuals behind Vitality Drinks who are
              dedicated to bringing you the best natural beverages.
            </p>
          </div>

          {/* Team members grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Founder & CEO",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Michael Chen",
                role: "Head of Product Development",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Emma Rodriguez",
                role: "Nutrition Specialist",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "David Kim",
                role: "Operations Manager",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Olivia Patel",
                role: "Marketing Director",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "James Wilson",
                role: "Sustainability Officer",
                image: "/placeholder.svg?height=400&width=400",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center space-y-3"
              >
                <div className="relative h-40 w-40 rounded-full overflow-hidden bg-green-100 dark:bg-green-900/30">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <UserCircle2 className="h-32 w-32 text-green-600 dark:text-green-400" />
                  </div>
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover opacity-0 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline Section showing company history */}
      <div className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tight">Our Journey</h2>
            <p className="text-lg text-muted-foreground">
              {`From a small kitchen experiment to a nationwide brand, here's how
              we've grown.`}
            </p>
          </div>

          {/* Timeline events */}
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-1/2 before:h-full before:w-0.5 before:bg-border md:before:mx-auto md:before:translate-x-0">
            {[
              {
                year: "2015",
                title: "The Beginning",
                description:
                  "Vitality Drinks was founded in a small kitchen with a passion for healthy living.",
              },
              {
                year: "2017",
                title: "First Store",
                description:
                  "We opened our first physical store and expanded our product line.",
              },
              {
                year: "2019",
                title: "Nationwide Distribution",
                description:
                  "Our drinks became available in health food stores across the country.",
              },
              {
                year: "2021",
                title: "Sustainability Initiative",
                description:
                  "We launched our eco-friendly packaging and carbon offset program.",
              },
              {
                year: "2023",
                title: "International Expansion",
                description:
                  "Vitality Drinks began exporting to select international markets.",
              },
              {
                year: "2025",
                title: "Looking Forward",
                description:
                  "We continue to innovate and expand our mission of health and sustainability.",
              },
            ].map((event, index) => (
              <div
                key={index}
                className="relative flex flex-col md:flex-row items-center md:justify-between"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary bg-card z-10 md:order-1 md:ml-0">
                  <span className="text-sm font-medium">{event.year}</span>
                </div>
                <div className="ml-8 md:ml-0 md:mr-8 md:w-5/12 md:text-right md:order-0">
                  <h3 className="text-xl font-semibold">{event.title}</h3>
                  <p className="text-muted-foreground mt-1">
                    {event.description}
                  </p>
                </div>
                <div className="hidden md:block md:w-5/12 md:order-2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
