import Link from "next/link";
import { Truck, Package, RotateCcw, Clock } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function ShippingPage() {
  return (
    <main className="flex-1">
      {/* Header */}
      <div className="bg-green-50 dark:bg-green-950/20 py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              Shipping & Returns
            </h1>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about our shipping policies and return
              process
            </p>
          </div>
        </div>
      </div>

      {/* Shipping Information */}
      <div className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                    <Truck className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <h2 className="text-2xl font-bold">Shipping Information</h2>
                </div>
                <p className="text-muted-foreground mb-6">
                  We ship our products with care to ensure they arrive in
                  perfect condition. All orders are shipped in insulated
                  packaging with ice packs to maintain freshness during transit.
                </p>

                <h3 className="text-lg font-semibold mb-3">
                  Shipping Methods & Timeframes
                </h3>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Shipping Method</TableHead>
                      <TableHead>Estimated Delivery</TableHead>
                      <TableHead className="text-right">Cost</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">
                        Standard Shipping
                      </TableCell>
                      <TableCell>3-5 business days</TableCell>
                      <TableCell className="text-right">$9.99</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">
                        Express Shipping
                      </TableCell>
                      <TableCell>1-2 business days</TableCell>
                      <TableCell className="text-right">$14.99</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">
                        Free Shipping
                      </TableCell>
                      <TableCell>3-5 business days</TableCell>
                      <TableCell className="text-right">
                        Free on orders over $50
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>

                <div className="mt-6 p-4 bg-muted rounded-lg">
                  <p className="text-sm">
                    <strong>Note:</strong> Orders placed after 1 PM EST will be
                    processed the following business day. We do not ship on
                    weekends or holidays.
                  </p>
                </div>
              </div>

              <Separator />

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                    <Package className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <h2 className="text-2xl font-bold">Order Tracking</h2>
                </div>
                <p className="text-muted-foreground mb-4">
                  {`Once your order ships, you'll receive a confirmation email
                  with tracking information. You can also track your order by
                  logging into your account on our website.`}
                </p>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Shipping Updates</h3>
                  <p className="text-muted-foreground">
                    {`You'll receive email notifications at the following stages:`}
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    <li>When your order is confirmed</li>
                    <li>When your order ships</li>
                    <li>When your order is out for delivery</li>
                    <li>When your order has been delivered</li>
                  </ul>
                </div>
              </div>

              <Separator />

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                    <RotateCcw className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <h2 className="text-2xl font-bold">Returns & Refunds</h2>
                </div>
                <p className="text-muted-foreground mb-6">
                  Due to the perishable nature of our products, we cannot accept
                  returns. However, we want you to be completely satisfied with
                  your purchase.
                </p>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Damaged Products
                    </h3>
                    <p className="text-muted-foreground">
                      {`If your order arrives damaged or compromised in any way,
                      please contact us within 24 hours of delivery. Include
                      photos of the damaged items and packaging, and we'll
                      process a replacement or refund promptly.`}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Quality Issues
                    </h3>
                    <p className="text-muted-foreground">
                      {`If you're unsatisfied with the quality of our products,
                      please let us know within 3 days of delivery. We stand
                      behind our products and will work with you to make it
                      right.`}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Refund Process
                    </h3>
                    <p className="text-muted-foreground">
                      Once approved, refunds are typically processed within 3-5
                      business days. The time it takes for the refund to appear
                      in your account depends on your payment method and
                      financial institution.
                    </p>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                    <Clock className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <h2 className="text-2xl font-bold">Order Modifications</h2>
                </div>
                <p className="text-muted-foreground mb-4">
                  {`Need to make changes to your order? Here's what you need to
                  know:`}
                </p>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Cancellations</h3>
                  <p className="text-muted-foreground">
                    You can cancel your order within 2 hours of placing it.
                    After that, we begin processing your order and cannot
                    guarantee cancellation.
                  </p>

                  <h3 className="text-lg font-semibold mt-4">
                    Address Changes
                  </h3>
                  <p className="text-muted-foreground">
                    Address changes must be requested before your order ships.
                    Once an order has shipped, we cannot modify the delivery
                    address.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-green-50 dark:bg-green-950/20 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-3">Have Questions?</h3>
              <p className="text-muted-foreground mb-4">
                Our customer service team is here to help with any questions
                about shipping, returns, or your order.
              </p>
              <Button asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
