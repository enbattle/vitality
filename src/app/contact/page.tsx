/**
 * Contact page component for the Vitality Drinks e-commerce platform.
 * This page provides users with multiple ways to get in touch with the company:
 * - Contact form for general inquiries, order support, and wholesale inquiries
 * - Company contact information (address, phone, email, hours)
 * - Interactive map showing store location
 * - Wholesale inquiry information
 */

"use client";

import type React from "react";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "@/hooks/use-toast";

/**
 * Contact page component that handles user inquiries and displays contact information
 * @returns A React component that renders the contact page content
 */
export default function ContactPage() {
  /**
   * Form state management
   * - name: User's name
   * - email: User's email address
   * - subject: Type of inquiry (general, order, wholesale, other)
   * - message: User's message content
   */
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "general",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  /**
   * Handles changes to text input and textarea fields
   * @param e - Change event from input or textarea
   */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  /**
   * Handles changes to radio button selection
   * @param value - Selected subject value
   */
  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, subject: value }));
  };

  /**
   * Handles form submission
   * - Prevents default form behavior
   * - Shows loading state
   * - Simulates API call
   * - Shows success toast
   * - Resets form
   * @param e - Form submission event
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent",
        description:
          "We've received your message and will get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "general",
        message: "",
      });
    }, 1500);
  };

  return (
    <main className="flex-1">
      {/* Page header with title and description */}
      <div className="bg-green-50 dark:bg-green-950/20 py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              Contact Us
            </h1>
            <p className="text-lg text-muted-foreground">
              {`Have questions or feedback? We'd love to hear from you.`}
            </p>
          </div>
        </div>
      </div>

      {/* Main content section with contact info and form */}
      <div className="py-12">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left column: Contact information and map */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              {/* Contact details with icons */}
              <div className="space-y-6">
                {/* Location information */}
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Our Location</h3>
                    <p className="text-muted-foreground mt-1">
                      123 Wellness Way
                      <br />
                      San Francisco, CA 94110
                    </p>
                  </div>
                </div>
                {/* Phone number */}
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0">
                    <Phone className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-muted-foreground mt-1">(555) 123-4567</p>
                  </div>
                </div>
                {/* Email address */}
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-muted-foreground mt-1">
                      hello@vitalitydrinks.com
                    </p>
                  </div>
                </div>
                {/* Business hours */}
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0">
                    <Clock className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Hours</h3>
                    <p className="text-muted-foreground mt-1">
                      Monday - Friday: 9am - 5pm
                      <br />
                      Saturday: 10am - 4pm
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Store map section */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6">Visit Our Store</h2>
                <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                  {/* Placeholder for Google Maps integration */}
                  <div className="w-full h-full bg-muted flex items-center justify-center">
                    <p className="text-muted-foreground">Interactive Map</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right column: Contact form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name input */}
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                {/* Email input */}
                <div className="space-y-2">
                  <Label htmlFor="email">Your Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                {/* Subject radio buttons */}
                <div className="space-y-2">
                  <Label>Subject</Label>
                  <RadioGroup
                    value={formData.subject}
                    onValueChange={handleRadioChange}
                    className="flex flex-col space-y-1"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="general" id="general" />
                      <Label htmlFor="general" className="font-normal">
                        General Inquiry
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="order" id="order" />
                      <Label htmlFor="order" className="font-normal">
                        Order Support
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="wholesale" id="wholesale" />
                      <Label htmlFor="wholesale" className="font-normal">
                        Wholesale Inquiry
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="other" id="other" />
                      <Label htmlFor="other" className="font-normal">
                        Other
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
                {/* Message textarea */}
                <div className="space-y-2">
                  <Label htmlFor="message">Your Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                  />
                </div>
                {/* Submit button with loading state */}
                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>

              {/* Wholesale inquiry information */}
              <div className="mt-12 p-6 bg-green-50 dark:bg-green-950/20 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">
                  Wholesale Inquiries
                </h3>
                <p className="text-muted-foreground">
                  {`Interested in stocking Vitality Drinks at your store or
                  restaurant? Please select "Wholesale Inquiry" in the form or
                  email us directly at wholesale@vitalitydrinks.com for more
                  information on our wholesale program.`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
