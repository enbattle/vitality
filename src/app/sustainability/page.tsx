import Image from "next/image";
import { Leaf, Recycle, Droplets, Globe } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function SustainabilityPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <div className="relative bg-green-50 dark:bg-green-950/20 py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                Our Commitment to Sustainability
              </h1>
              <p className="text-lg text-muted-foreground">
                At Vitality Drinks, we believe that healthy products should come
                from a healthy planet. Discover our initiatives to reduce our
                environmental impact.
              </p>
              <Button size="lg" className="mt-4">
                Learn More
              </Button>
            </div>
            <div className="relative aspect-video md:aspect-square rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Sustainability initiatives"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Our Approach Section */}
      <div className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tight">Our Approach</h2>
            <p className="text-lg text-muted-foreground">
              Sustainability isn't just a buzzword for us—it's at the core of
              everything we do, from sourcing to packaging to distribution.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="h-16 w-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4">
                <Leaf className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold">Organic Sourcing</h3>
              <p className="text-muted-foreground">
                We partner with organic farms that use sustainable farming
                practices to grow our ingredients.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="h-16 w-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4">
                <Recycle className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold">Eco-Friendly Packaging</h3>
              <p className="text-muted-foreground">
                Our bottles are made from recycled materials and are 100%
                recyclable or compostable.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="h-16 w-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4">
                <Droplets className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold">Water Conservation</h3>
              <p className="text-muted-foreground">
                We've implemented water-saving technologies in our production
                facilities to minimize waste.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="h-16 w-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4">
                <Globe className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold">Carbon Neutral</h3>
              <p className="text-muted-foreground">
                We offset our carbon emissions through investments in renewable
                energy and reforestation projects.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Packaging Section */}
      <div className="bg-green-50 dark:bg-green-950/20 py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Eco-friendly packaging"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight">
                Sustainable Packaging
              </h2>
              <p className="text-lg">
                We've redesigned our packaging to minimize environmental impact
                without compromising on quality or safety.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0 mt-0.5">
                    <Recycle className="h-4 w-4 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Plant-Based Bottles</h3>
                    <p className="text-muted-foreground mt-1">
                      Our bottles are made from plant-based materials that break
                      down naturally in the environment.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0 mt-0.5">
                    <Recycle className="h-4 w-4 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Recycled Materials</h3>
                    <p className="text-muted-foreground mt-1">
                      Our labels and shipping materials are made from 100%
                      recycled paper and cardboard.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0 mt-0.5">
                    <Recycle className="h-4 w-4 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Minimal Packaging</h3>
                    <p className="text-muted-foreground mt-1">
                      We've eliminated unnecessary packaging elements to reduce
                      waste without compromising product integrity.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Carbon Footprint Section */}
      <div className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 md:order-1">
              <h2 className="text-3xl font-bold tracking-tight">
                Reducing Our Carbon Footprint
              </h2>
              <p className="text-lg">
                We're committed to measuring, reducing, and offsetting our
                carbon emissions across our entire supply chain.
              </p>
              <div className="space-y-4">
                <div className="bg-green-50 dark:bg-green-950/20 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">
                    2023 Achievements
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-green-600"></div>
                      <span>
                        Reduced carbon emissions by 30% compared to 2022
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-green-600"></div>
                      <span>
                        Invested in solar panels for our main production
                        facility
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-green-600"></div>
                      <span>
                        Planted 10,000 trees through our reforestation partners
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="bg-green-50 dark:bg-green-950/20 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">2024 Goals</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-green-600"></div>
                      <span>
                        Achieve carbon neutrality across all operations
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-green-600"></div>
                      <span>Convert delivery fleet to electric vehicles</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-green-600"></div>
                      <span>Reduce water usage by an additional 20%</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden order-1 md:order-2">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Carbon footprint reduction"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Join Us Section */}
      <div className="bg-green-50 dark:bg-green-950/20 py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">
              Join Us in Making a Difference
            </h2>
            <p className="text-lg text-muted-foreground">
              Sustainability is a journey, not a destination. We're constantly
              looking for ways to improve and would love to hear your ideas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">Contact Us</Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
