import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

// Mock job listings
const jobs = [
  {
    id: 1,
    title: "Product Development Specialist",
    department: "Research & Development",
    location: "San Francisco, CA",
    type: "Full-time",
    description:
      "Join our R&D team to create innovative and delicious new beverage formulations.",
    requirements: [
      "Bachelor's degree in Food Science or related field",
      "3+ years experience in beverage formulation",
      "Knowledge of natural ingredients and superfoods",
      "Passion for health and wellness",
    ],
  },
  {
    id: 2,
    title: "Marketing Coordinator",
    department: "Marketing",
    location: "San Francisco, CA",
    type: "Full-time",
    description:
      "Help spread the word about our mission and products through creative marketing campaigns.",
    requirements: [
      "Bachelor's degree in Marketing or related field",
      "1-3 years marketing experience, preferably in CPG",
      "Strong social media and content creation skills",
      "Passion for sustainability and health",
    ],
  },
  {
    id: 3,
    title: "Operations Manager",
    department: "Operations",
    location: "Oakland, CA",
    type: "Full-time",
    description:
      "Oversee our production facility to ensure efficient and sustainable operations.",
    requirements: [
      "Bachelor's degree in Operations Management or related field",
      "5+ years experience in food/beverage production",
      "Strong leadership and problem-solving skills",
      "Experience with sustainable manufacturing practices",
    ],
  },
  {
    id: 4,
    title: "Sales Representative",
    department: "Sales",
    location: "Los Angeles, CA",
    type: "Full-time",
    description:
      "Build relationships with retailers and distributors to expand our market presence.",
    requirements: [
      "Bachelor's degree in Business or related field",
      "2+ years experience in sales, preferably in food/beverage",
      "Strong communication and negotiation skills",
      "Willingness to travel within the region",
    ],
  },
  {
    id: 5,
    title: "Quality Assurance Technician",
    department: "Quality",
    location: "Oakland, CA",
    type: "Full-time",
    description:
      "Ensure our products meet the highest standards of quality and safety.",
    requirements: [
      "Bachelor's degree in Food Science or related field",
      "2+ years experience in food/beverage quality control",
      "Knowledge of HACCP and food safety regulations",
      "Attention to detail and analytical mindset",
    ],
  },
  {
    id: 6,
    title: "Customer Service Representative",
    department: "Customer Support",
    location: "Remote",
    type: "Part-time",
    description:
      "Provide exceptional support to our customers and address their inquiries and concerns.",
    requirements: [
      "High school diploma or equivalent",
      "1+ years customer service experience",
      "Excellent communication and problem-solving skills",
      "Passion for health and wellness products",
    ],
  },
];

// Mock benefits
const benefits = [
  {
    title: "Health & Wellness",
    items: [
      "Comprehensive health, dental, and vision insurance",
      "Free Vitality Drinks products",
      "Wellness stipend for gym memberships or fitness classes",
      "Mental health resources and support",
    ],
  },
  {
    title: "Work-Life Balance",
    items: [
      "Flexible work schedules",
      "Remote work options for eligible positions",
      "Generous paid time off",
      "Paid parental leave",
    ],
  },
  {
    title: "Growth & Development",
    items: [
      "Professional development budget",
      "Tuition reimbursement",
      "Regular workshops and learning opportunities",
      "Mentorship program",
    ],
  },
  {
    title: "Community & Impact",
    items: [
      "Volunteer time off",
      "Matching charitable donations",
      "Sustainability initiatives",
      "Team building events and activities",
    ],
  },
];

export default function CareersPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <div className="relative bg-green-50 dark:bg-green-950/20 py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                Join Our Team
              </h1>
              <p className="text-lg text-muted-foreground">
                At Vitality Drinks, we're on a mission to make healthy living
                accessible and delicious. Join us in creating a healthier, more
                sustainable future.
              </p>
              <Button size="lg" className="mt-4" asChild>
                <a href="#open-positions">View Open Positions</a>
              </Button>
            </div>
            <div className="relative aspect-video md:aspect-square rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Vitality Drinks team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Our Culture Section */}
      <div className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tight">Our Culture</h2>
            <p className="text-lg text-muted-foreground">
              We're building a team of passionate individuals who are committed
              to our mission of promoting health and sustainability.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-3">
              <div className="h-16 w-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-4">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="Innovation icon"
                  width={40}
                  height={40}
                />
              </div>
              <h3 className="text-xl font-semibold">Innovation</h3>
              <p className="text-muted-foreground">
                We encourage creative thinking and are always looking for new
                ways to improve our products and processes.
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="h-16 w-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-4">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="Collaboration icon"
                  width={40}
                  height={40}
                />
              </div>
              <h3 className="text-xl font-semibold">Collaboration</h3>
              <p className="text-muted-foreground">
                We believe that the best ideas come from diverse perspectives
                and teamwork.
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="h-16 w-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-4">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="Impact icon"
                  width={40}
                  height={40}
                />
              </div>
              <h3 className="text-xl font-semibold">Impact</h3>
              <p className="text-muted-foreground">
                We're driven by our mission to make a positive impact on
                people's health and the environment.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-green-50 dark:bg-green-950/20 py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tight">
              Benefits & Perks
            </h2>
            <p className="text-lg text-muted-foreground">
              We take care of our team so they can focus on making a difference.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-card">
                <CardHeader>
                  <CardTitle>{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {benefit.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <div className="h-2 w-2 rounded-full bg-green-600 mt-1.5"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Open Positions Section */}
      <div className="py-16 md:py-24" id="open-positions">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tight">
              Open Positions
            </h2>
            <p className="text-lg text-muted-foreground">
              Join our team and help us make a difference in the world of
              healthy beverages.
            </p>
          </div>

          <div className="grid gap-6">
            {jobs.map((job) => (
              <Card key={job.id} className="overflow-hidden">
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary">{job.department}</Badge>
                        <Badge variant="outline">{job.type}</Badge>
                      </div>
                      <h3 className="text-xl font-bold">{job.title}</h3>
                      <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{job.location}</span>
                        </div>
                      </div>
                    </div>
                    <Button className="md:self-start" asChild>
                      <Link href={`/careers/${job.id}`}>
                        Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                  <Separator className="my-4" />
                  <p className="mb-4">{job.description}</p>
                  <div>
                    <h4 className="font-semibold mb-2">Requirements:</h4>
                    <ul className="space-y-1">
                      {job.requirements.map((req, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2 text-sm"
                        >
                          <div className="h-2 w-2 rounded-full bg-green-600 mt-1.5"></div>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-green-50 dark:bg-green-950/20 py-16">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">
              Don't See a Perfect Fit?
            </h2>
            <p className="text-lg text-muted-foreground">
              We're always looking for talented individuals who are passionate
              about our mission. Send us your resume and let us know how you can
              contribute.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
