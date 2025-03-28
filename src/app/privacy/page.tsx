/**
 * Privacy Policy page component for the Vitality Drinks e-commerce platform.
 * This page displays the company's privacy policy, including:
 * - Introduction to privacy practices
 * - Information collection practices
 * - Data usage and processing
 * - Information sharing policies
 * - User privacy rights
 * - Data security measures
 * - Contact information
 */

import Link from "next/link";
import { Shield, Lock, Eye, FileText, Share2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

/**
 * Privacy Policy page component that displays the company's privacy practices
 * @returns A React component that renders the privacy policy content
 */
export default function PrivacyPage() {
  return (
    <main className="flex-1">
      {/* Page header with title and last update date */}
      <div className="bg-green-50 dark:bg-green-950/20 py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-lg text-muted-foreground">
              Last updated: January 15, 2024
            </p>
          </div>
        </div>
      </div>

      {/* Main content section with policy sections */}
      <div className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {/* Introduction section */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                    <Shield className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <h2 className="text-2xl font-bold">Introduction</h2>
                </div>
                <p className="text-muted-foreground mb-4">
                  At Vitality Drinks, we respect your privacy and are committed
                  to protecting your personal data. This privacy policy will
                  inform you about how we look after your personal data when you
                  visit our website and tell you about your privacy rights and
                  how the law protects you.
                </p>
                <p className="text-muted-foreground">
                  This privacy policy applies to all information collected
                  through our website, as well as any related services, sales,
                  marketing, or events.
                </p>
              </div>

              <Separator />

              {/* Information collection section */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                    <Eye className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <h2 className="text-2xl font-bold">Information We Collect</h2>
                </div>
                <p className="text-muted-foreground mb-4">
                  We collect several types of information from and about users
                  of our website, including:
                </p>
                <div className="space-y-4">
                  {/* Personal information subsection */}
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Personal Information
                    </h3>
                    <p className="text-muted-foreground">
                      Personal information you disclose to us: We collect
                      personal information that you voluntarily provide to us
                      when you register on the website, express an interest in
                      obtaining information about us or our products, when you
                      participate in activities on the website, or otherwise
                      when you contact us.
                    </p>
                    <p className="text-muted-foreground mt-2">
                      This personal information may include:
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-muted-foreground mt-2">
                      <li>
                        Name and contact information (email address, phone
                        number, etc.)
                      </li>
                      <li>Billing and shipping address</li>
                      <li>
                        Payment information (stored securely through our payment
                        processors)
                      </li>
                      <li>Account credentials (username, password)</li>
                      <li>Order history and preferences</li>
                    </ul>
                  </div>

                  {/* Automatically collected information subsection */}
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Automatically Collected Information
                    </h3>
                    <p className="text-muted-foreground">
                      We automatically collect certain information when you
                      visit, use, or navigate the website. This information does
                      not reveal your specific identity but may include:
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-muted-foreground mt-2">
                      <li>
                        Device and usage information (IP address, browser type,
                        operating system)
                      </li>
                      <li>Location information</li>
                      <li>Cookies and similar technologies</li>
                    </ul>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Information usage section */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                    <Lock className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <h2 className="text-2xl font-bold">
                    How We Use Your Information
                  </h2>
                </div>
                <p className="text-muted-foreground mb-4">
                  We use the information we collect in various ways, including
                  to:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>Provide, operate, and maintain our website</li>
                  <li>Process and fulfill your orders</li>
                  <li>Improve, personalize, and expand our website</li>
                  <li>Understand and analyze how you use our website</li>
                  <li>
                    Develop new products, services, features, and functionality
                  </li>
                  <li>
                    Communicate with you about orders, products, services, and
                    promotions
                  </li>
                  <li>Send you updates and marketing communications</li>
                  <li>Find and prevent fraud</li>
                  <li>For compliance with legal obligations</li>
                </ul>
              </div>

              <Separator />

              {/* Information sharing section */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                    <Share2 className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <h2 className="text-2xl font-bold">
                    Information Sharing and Disclosure
                  </h2>
                </div>
                <p className="text-muted-foreground mb-4">
                  We may share your information with third parties in the
                  following situations:
                </p>
                <div className="space-y-4">
                  {/* Business transfers subsection */}
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Business Transfers
                    </h3>
                    <p className="text-muted-foreground">
                      If we are involved in a merger, acquisition, or sale of
                      all or a portion of our assets, your information may be
                      transferred as part of that transaction. We will notify
                      you via email and/or a prominent notice on our website of
                      any change in ownership or uses of your personal
                      information.
                    </p>
                  </div>

                  {/* Legal compliance subsection */}
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Compliance with Laws
                    </h3>
                    <p className="text-muted-foreground">
                      We may disclose your information where we are legally
                      required to do so in order to comply with applicable law,
                      governmental requests, a judicial proceeding, court order,
                      or legal process.
                    </p>
                  </div>

                  {/* Service providers subsection */}
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Third-Party Service Providers
                    </h3>
                    <p className="text-muted-foreground">
                      We may share your information with third-party vendors,
                      service providers, contractors, or agents who perform
                      services for us or on our behalf and require access to
                      such information to do that work.
                    </p>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Privacy rights section */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                    <FileText className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <h2 className="text-2xl font-bold">Your Privacy Rights</h2>
                </div>
                <p className="text-muted-foreground mb-4">
                  Depending on your location, you may have certain rights
                  regarding your personal information, including:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>
                    The right to access personal information we hold about you
                  </li>
                  <li>
                    The right to request that we correct any inaccurate personal
                    information
                  </li>
                  <li>
                    The right to request that we delete your personal
                    information
                  </li>
                  <li>
                    The right to withdraw consent at any time for processing
                    based on consent
                  </li>
                  <li>
                    The right to object to the processing of your personal
                    information
                  </li>
                  <li>The right to data portability</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  {`To exercise any of these rights, please contact us using the
                  information provided in the "Contact Us" section below.`}
                </p>
              </div>

              <Separator />

              {/* Contact section */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                    <Lock className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <h2 className="text-2xl font-bold">Contact Us</h2>
                </div>
                <p className="text-muted-foreground">
                  If you have any questions about this Privacy Policy, please
                  contact us at{" "}
                  <Link
                    href="mailto:privacy@vitalitydrinks.com"
                    className="text-primary hover:underline"
                  >
                    privacy@vitalitydrinks.com
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
