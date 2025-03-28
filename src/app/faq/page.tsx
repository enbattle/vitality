/**
 * FAQ (Frequently Asked Questions) page component for the Vitality Drinks e-commerce platform.
 * This page provides users with answers to common questions about:
 * - Products (ingredients, shelf life, preparation)
 * - Orders & Shipping (delivery areas, timing, subscriptions)
 * - Returns & Refunds (policies, damaged products)
 * - Sustainability (recycling, carbon footprint, farming practices)
 * Features include:
 * - Searchable FAQ database
 * - Categorized questions
 * - Expandable/collapsible answers
 * - Contact support option
 */

"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

/**
 * Mock FAQ data structure
 * Each category contains:
 * - category: Category name
 * - questions: Array of FAQ items, each with:
 *   - question: The FAQ question
 *   - answer: Detailed answer to the question
 */
const faqs = [
  {
    category: "Products",
    questions: [
      {
        question: "Are your drinks organic?",
        answer:
          "Yes, all of our drinks are made with 100% organic ingredients. We source our fruits, vegetables, and herbs from certified organic farms to ensure the highest quality and purity.",
      },
      {
        question: "How long do your drinks stay fresh?",
        answer:
          "Our drinks are best consumed within 7 days of opening. The unopened shelf life is typically 30-45 days when refrigerated, depending on the specific product. You'll find the exact expiration date printed on each bottle.",
      },
      {
        question: "Do your drinks contain added sugars?",
        answer:
          "No, we never add refined sugars to our drinks. Any sweetness comes naturally from the fruits and vegetables we use. Some of our products contain small amounts of natural sweeteners like honey or maple syrup, which are clearly listed in the ingredients.",
      },
      {
        question: "Are your drinks pasteurized?",
        answer:
          "We use a gentle cold-pressure process (HPP) rather than heat pasteurization to preserve nutrients and enzymes while ensuring food safety and extending shelf life.",
      },
      {
        question: "Do I need to shake the bottle before drinking?",
        answer:
          "Yes, we recommend gently shaking our drinks before consuming as natural separation may occur. This is normal for products without artificial stabilizers or preservatives.",
      },
    ],
  },
  {
    category: "Orders & Shipping",
    questions: [
      {
        question: "How do you ship your drinks?",
        answer:
          "We ship our drinks in insulated packaging with ice packs to ensure they stay cold during transit. All of our packaging materials are recyclable or compostable.",
      },
      {
        question: "What areas do you deliver to?",
        answer:
          "We currently ship to all 48 contiguous United States. Unfortunately, we cannot ship to Alaska, Hawaii, or international destinations at this time.",
      },
      {
        question: "How long will it take to receive my order?",
        answer:
          "Most orders are processed within 1-2 business days. Shipping typically takes 2-3 business days, depending on your location. You'll receive tracking information via email once your order ships.",
      },
      {
        question: "Can I change or cancel my order?",
        answer:
          "You can modify or cancel your order within 2 hours of placing it. Please contact our customer service team immediately if you need to make changes.",
      },
      {
        question: "Do you offer subscriptions?",
        answer:
          "Yes! We offer flexible subscription options that save you 10-15% on each order. You can choose your delivery frequency (weekly, bi-weekly, or monthly) and easily pause, skip, or cancel at any time.",
      },
    ],
  },
  {
    category: "Returns & Refunds",
    questions: [
      {
        question: "What is your return policy?",
        answer:
          "Due to the perishable nature of our products, we cannot accept returns. However, if you receive damaged products or are unsatisfied with your order for any reason, please contact us within 24 hours of delivery, and we'll make it right.",
      },
      {
        question: "How do I report damaged products?",
        answer:
          "If your order arrives damaged, please take photos of the damaged items and packaging, and email them to support@vitalitydrinks.com within 24 hours of delivery. We'll process a replacement or refund promptly.",
      },
      {
        question: "How long do refunds take to process?",
        answer:
          "Once approved, refunds are typically processed within 3-5 business days. The time it takes for the refund to appear in your account depends on your payment method and financial institution.",
      },
    ],
  },
  {
    category: "Sustainability",
    questions: [
      {
        question: "Are your bottles recyclable?",
        answer:
          "Yes, our bottles are made from 100% recyclable materials. We're also transitioning to bottles made from recycled plastic (rPET) to further reduce our environmental impact.",
      },
      {
        question: "How do you minimize your carbon footprint?",
        answer:
          "We offset our carbon emissions through investments in renewable energy and reforestation projects. We also use energy-efficient equipment in our production facilities and optimize our shipping routes to minimize transportation emissions.",
      },
      {
        question: "Do you use sustainable farming practices?",
        answer:
          "We partner exclusively with farms that use sustainable and regenerative agricultural practices. This includes organic farming methods, water conservation, and soil health management.",
      },
    ],
  },
];

/**
 * FAQ page component that displays and manages frequently asked questions
 * @returns A React component that renders the FAQ page content
 */
export default function FAQPage() {
  /**
   * State management
   * - searchQuery: Current search input value
   * - expandedQuestions: Record of which questions are expanded/collapsed
   */
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedQuestions, setExpandedQuestions] = useState<
    Record<string, boolean>
  >({});

  /**
   * Filter FAQs based on search query
   * - Filters both questions and answers
   * - Case-insensitive search
   * - Removes empty categories
   */
  const filteredFaqs = faqs
    .map((category) => ({
      ...category,
      questions: category.questions.filter(
        (q) =>
          q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          q.answer.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((category) => category.questions.length > 0);

  /**
   * Toggle the expanded state of a question
   * @param categoryIndex - Index of the FAQ category
   * @param questionIndex - Index of the question within the category
   */
  const toggleQuestion = (categoryIndex: number, questionIndex: number) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setExpandedQuestions((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <main className="flex-1">
      {/* Page header with title and description */}
      <div className="bg-green-50 dark:bg-green-950/20 py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions about our products, ordering,
              shipping, and more.
            </p>
          </div>
        </div>
      </div>

      {/* Main content section with search and FAQ categories */}
      <div className="py-12">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            {/* Search input */}
            <div className="relative mb-8">
              <Input
                type="search"
                placeholder="Search for answers..."
                className="w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Search results or no results message */}
            {filteredFaqs.length === 0 ? (
              <div className="text-center py-12">
                <h2 className="text-xl font-semibold mb-2">No results found</h2>
                <p className="text-muted-foreground mb-6">
                  {`We couldn't find any answers matching your search. Try a
                  different query or browse our categories.`}
                </p>
                <Button onClick={() => setSearchQuery("")}>Clear Search</Button>
              </div>
            ) : (
              <div className="space-y-12">
                {filteredFaqs.map((category, categoryIndex) => (
                  <div key={categoryIndex}>
                    <h2 className="text-2xl font-bold mb-6">
                      {category.category}
                    </h2>
                    <div className="space-y-4">
                      {category.questions.map((faq, questionIndex) => {
                        const key = `${categoryIndex}-${questionIndex}`;
                        const isExpanded = expandedQuestions[key] || false;

                        return (
                          <div
                            key={questionIndex}
                            className="border rounded-lg overflow-hidden"
                          >
                            {/* Question button with expand/collapse icon */}
                            <button
                              className="flex justify-between items-center w-full p-4 text-left font-medium"
                              onClick={() =>
                                toggleQuestion(categoryIndex, questionIndex)
                              }
                            >
                              <span>{faq.question}</span>
                              <ChevronDown
                                className={`h-5 w-5 transition-transform ${
                                  isExpanded ? "rotate-180" : ""
                                }`}
                              />
                            </button>
                            {/* Answer section */}
                            {isExpanded && (
                              <div className="p-4 pt-0 border-t">
                                <p className="text-muted-foreground">
                                  {faq.answer}
                                </p>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Contact support section */}
      <div className="bg-green-50 dark:bg-green-950/20 py-12">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-2xl font-bold">Still Have Questions?</h2>
            <p className="text-muted-foreground">
              {`Can't find the answer you're looking for? Please contact our
              support team.`}
            </p>
            <Button asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
