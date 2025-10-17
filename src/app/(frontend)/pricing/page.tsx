"use client";

import { useState } from "react";
import {
  Check,
  ArrowRight,
  Sparkles,
  Zap,
  TrendingUp,
  Building2,
  Shield,
  Clock,
  HeadphonesIcon,
  CreditCard,
  RefreshCw,
  Users
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

const tiers = [
  {
    name: "Starter",
    icon: <Zap className="w-8 h-8 text-primary" />,
    price: { monthly: 2999, yearly: 28790 },
    description: "Perfect for small fleets getting started with digital operations",
    features: [
      "Up to 10 vehicles",
      "LR & Booking Management",
      "Basic Trip Tracking",
      "WhatsApp Notifications",
      "Standard Reports",
      "Email Support",
      "Data Backup",
      "Mobile App Access"
    ],
    cta: "Start Free Trial",
    highlighted: false,
  },
  {
    name: "Professional",
    icon: <TrendingUp className="w-8 h-8 text-primary" />,
    price: { monthly: 4999, yearly: 47990 },
    description: "For growing businesses managing multiple branches and operations",
    features: [
      "Up to 50 vehicles",
      "Everything in Starter",
      "Multi-branch Management",
      "GPS & Live Tracking",
      "Driver Mobile App",
      "POD Management",
      "Automated Billing",
      "Tally Integration",
      "Advanced Analytics",
      "Priority Support"
    ],
    cta: "Start Free Trial",
    highlighted: true,
    badge: "Most Popular",
  },
  {
    name: "Enterprise",
    icon: <Building2 className="w-8 h-8 text-primary" />,
    price: "Custom",
    description: "Tailored solutions for large-scale transport operations",
    features: [
      "Unlimited vehicles",
      "Everything in Professional",
      "Freight Sync AI Module",
      "Custom Integrations",
      "Dedicated Account Manager",
      "On-site Training",
      "SLA Guarantee",
      "White-label Options",
      "24/7 Phone Support"
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

const trustFeatures = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: "30-Day Money Back",
    description: "Not satisfied? Get a full refund within 30 days, no questions asked."
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "24/7 Support",
    description: "Round-the-clock assistance to keep your operations running smoothly."
  },
  {
    icon: <CreditCard className="w-6 h-6" />,
    title: "No Hidden Fees",
    description: "Transparent pricing with no setup fees or hidden charges."
  },
  {
    icon: <RefreshCw className="w-6 h-6" />,
    title: "Free Updates",
    description: "Get all new features and improvements at no additional cost."
  }
];

const faqs = [
  {
    question: "How does the 7-day free trial work?",
    answer: "Start using Freight Sync immediately with full access to all features in your chosen plan. No credit card required. After 7 days, you can choose to continue with a paid subscription or cancel anytime."
  },
  {
    question: "Can I switch between plans?",
    answer: "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate the billing for the remainder of your billing cycle."
  },
  {
    question: "What counts as a vehicle?",
    answer: "Any truck, tempo, or transport vehicle you actively manage in the system counts as one vehicle. You only pay for active vehicles - parked or sold vehicles can be archived at no cost."
  },
  {
    question: "Do you offer discounts for annual billing?",
    answer: "Yes! When you choose annual billing, you save 20% compared to monthly payments. That's like getting more than 2 months free every year."
  },
  {
    question: "What payment methods are accepted?",
    answer: "We accept all major credit/debit cards, UPI, net banking, and bank transfers. Enterprise customers can also opt for invoice-based billing with NET 30 terms."
  },
  {
    question: "Is there any setup or onboarding fee?",
    answer: "No! There are no setup fees, onboarding charges, or hidden costs. You only pay the subscription fee for your chosen plan."
  }
];

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(true);

  const formatPrice = (price: number | string) => {
    if (typeof price === "string") return price;
    return `₹${price.toLocaleString('en-IN')}`;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black py-16 md:py-24">
        <div className="container max-w-7xl px-4 md:px-8">
          <div className="max-w-3xl">
            <h1 className="text-white text-4xl md:text-6xl font-bold font-headline tracking-tight">
              Simple Pricing,
              <br />
              <span className="bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] bg-clip-text text-transparent">
                No Surprises
              </span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed">
              Choose the perfect plan for your transport business.
              Start with a 7-day free trial. No credit card required.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="bg-gradient-to-r from-[#FF6B35] to-[#FF8C42]">
                <Link href="/contact">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white text-black hover:bg-white/10 hover:text-white">
                <Link href="/contact">Schedule Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Cards Section */}
      <div className="py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto max-w-7xl px-4 md:px-8">
          {/* Billing Toggle */}
          <div className="flex justify-center items-center space-x-4 mb-16">
            <Label
              htmlFor="billing-cycle"
              className={`text-base font-medium ${!isYearly ? 'text-foreground' : 'text-muted-foreground'}`}
            >
              Monthly
            </Label>
            <Switch
              id="billing-cycle"
              checked={isYearly}
              onCheckedChange={setIsYearly}
              className="data-[state=checked]:bg-[#FF6B35]"
            />
            <Label
              htmlFor="billing-cycle"
              className={`flex items-center text-base font-medium ${isYearly ? 'text-foreground' : 'text-muted-foreground'}`}
            >
              Yearly
              <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                Save 20%
              </span>
            </Label>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiers.map((tier) => (
              <Card
                key={tier.name}
                className={`relative flex flex-col h-full transition-all duration-300 ${tier.highlighted
                  ? 'border-2 border-[#FF6B35] shadow-2xl scale-105'
                  : 'hover:shadow-xl'
                  }`}
              >
                {tier.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] text-white text-xs font-semibold px-4 py-1 rounded-full">
                      {tier.badge}
                    </span>
                  </div>
                )}

                <CardHeader className="pb-4">
                  <div className="p-4 bg-gradient-to-br from-[#FF6B35]/10 to-[#FF8C42]/10 rounded-xl w-fit mb-4">
                    {tier.icon}
                  </div>
                  <CardTitle className="font-headline text-2xl">{tier.name}</CardTitle>
                  <CardDescription className="text-base pt-2">
                    {tier.description}
                  </CardDescription>

                  <div className="pt-6">
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold">
                        {typeof tier.price === "string"
                          ? tier.price
                          : formatPrice(isYearly ? tier.price.yearly : tier.price.monthly)
                        }
                      </span>
                      {typeof tier.price !== "string" && (
                        <span className="ml-2 text-muted-foreground">
                          {isYearly ? '/year' : '/month'}
                        </span>
                      )}
                    </div>
                    {typeof tier.price !== "string" && isYearly && (
                      <p className="mt-2 text-sm text-green-600">
                        Save {formatPrice(tier.price.monthly * 12 - tier.price.yearly)} annually
                      </p>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="flex-grow flex flex-col">
                  <ul className="space-y-3 flex-grow">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <Check className="w-5 h-5 text-[#FF6B35] mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`mt-8 w-full ${tier.highlighted
                      ? 'bg-gradient-to-r from-[#FF6B35] to-[#FF8C42]'
                      : ''
                      }`}
                    variant={tier.highlighted ? "default" : "outline"}
                    size="lg"
                    asChild
                  >
                    <Link href="/contact">
                      {tier.cta}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Trust Features Section */}
      <div className="py-20 md:py-32 bg-white">
        <div className="container mx-auto max-w-7xl px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-headline mb-4">
              Why Teams Trust Freight Sync
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              We're committed to your success with transparent pricing and reliable service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustFeatures.map((feature) => (
              <div key={feature.title} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#FF6B35]/10 to-[#FF8C42]/10 rounded-full mb-4 group-hover:scale-110 transition-transform">
                  <div className="text-[#FF6B35]">{feature.icon}</div>
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQs Section */}
      <div className="py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto max-w-4xl px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-headline mb-4">
              Common Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about our pricing
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-xl px-6 border border-gray-200 hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold text-lg">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 p-8 bg-gradient-to-br from-[#FF6B35]/5 to-[#FF8C42]/5 rounded-2xl text-center border border-[#FF6B35]/10">
            <HeadphonesIcon className="w-12 h-12 text-[#FF6B35] mx-auto mb-4" />
            <h3 className="font-semibold text-xl mb-2">Still have questions?</h3>
            <p className="text-muted-foreground mb-6">Our team is here to help you choose the right plan</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">
                  Schedule a Call
                </Link>
              </Button>
              <Button variant="ghost" size="lg" asChild>
                <a href="mailto:support@freightsync.com">
                  Email Support
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <section className="bg-white">
        <div className="container mx-auto max-w-7xl px-4 py-12 sm:py-16 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gray-900 px-4 py-12 sm:px-16 sm:py-20 text-center shadow-2xl rounded-2xl">
            <h2 className="mx-auto max-w-2xl font-headline text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
              Ready to modernize your transport business?
            </h2>
            <p className="mx-auto mt-4 sm:mt-6 max-w-xl text-sm sm:text-base md:text-lg leading-6 sm:leading-7 text-gray-300">
              Join 500+ transport companies. Start your 7-day free trial today.
            </p>
            <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-x-6">
              <Button
                size="lg"
                asChild
                className="w-full sm:w-auto bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] text-white font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                <Link href="/contact">Start Free Trial</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="w-full sm:w-auto bg-transparent text-white hover:bg-white/10 hover:text-white border-white mt-3 sm:mt-0"
              >
                <Link href="/contact">Talk to Sales</Link>
              </Button>
            </div>
            <p className="mt-4 sm:mt-6 text-xs sm:text-sm text-gray-400">
              No credit card required • Cancel anytime
            </p>
            <svg
              viewBox="0 0 1024 1024"
              className="absolute left-1/2 top-1/2 -z-10 w-[200vw] h-[200vw] sm:w-[64rem] sm:h-[64rem] -translate-x-1/2"
              aria-hidden="true"
            >
              <circle cx={512} cy={512} r={512} fill="url(#pricing-cta-gradient)" fillOpacity="0.7" />
              <defs>
                <radialGradient id="pricing-cta-gradient">
                  <stop stopColor="#FF6B35" />
                  <stop offset={1} stopColor="#2B2B2B" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
      </section>
    </div>
  );
}