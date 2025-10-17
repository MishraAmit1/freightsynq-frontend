import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  BookCopy,
  Map,
  ReceiptText,
  Bot,
  Check,
  ArrowRight,
  FileText,
  Truck,
  Package,
  IndianRupee,
  CheckCircle2,
  XCircle,
  ChevronRight
} from "lucide-react";

const modules = [
  {
    icon: (
      <BookCopy className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
    ),
    title: "Freight Sync Core",
    subtitle: "The Digital Nerve of Your Transport",
    description:
      "All-in-one dashboard to manage bookings, LRs, dispatches, PODs, billing, and payments — in real-time.",
    features: [
      "Create and share LRs instantly",
      "Live dispatch & trip tracking",
      "Auto-generate invoices and settlements",
      "Syncs all data automatically",
      "Multi-branch management",
      "Bulk operations support",
    ],
    stats: "10,000+ LRs processed daily"
  },
  {
    icon: (
      <Map className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
    ),
    title: "Freight Sync Tracker",
    subtitle: "GPS + Document + Driver in One Flow",
    description:
      "See where your trucks are, who's driving, and what's loaded — all on a live map.",
    features: [
      "GPS & WhatsApp tracking",
      "Driver app with photo upload & POD sync",
      "Auto-updates LR status",
      "Alerts for route delays or idle time",
      "Geofencing and route optimization",
      "Fuel consumption tracking",
    ],
    stats: "5 Million+ KMs tracked"
  },
  {
    icon: (
      <ReceiptText className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
    ),
    title: "Freight Sync Accounts",
    subtitle: "Financial Clarity Without the Clutter",
    description:
      "The first logistics billing system that talks to your operations in real-time.",
    features: [
      "Auto-create invoices from trips",
      "Track advances, balances, and receivables",
      "Generate reports and export to Tally",
      "No duplicate data entry, ever",
      "GST compliant billing",
      "TDS & E-way bill management",
    ],
    stats: "₹500 Cr+ processed"
  },
  {
    icon: (
      <Bot className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
    ),
    title: "Freight Sync AI",
    subtitle: "The Smart Assistant for Transport Owners",
    description:
      "AI learns your patterns and highlights where revenue is leaking or operations are delayed.",
    features: [
      "Detects billing delays",
      "Finds idle trucks and driver inefficiencies",
      "Suggests client-wise profitability insights",
      "Recommends operational improvements",
      "Predictive maintenance alerts",
      "Demand forecasting",
    ],
    stats: "30% efficiency improvement"
  },
];

const comparisonData = [
  { feature: "Real-time GPS Tracking", traditional: false, freightSync: true },
  { feature: "Automated Billing", traditional: false, freightSync: true },
  { feature: "WhatsApp Integration", traditional: false, freightSync: true },
  { feature: "Multi-branch Support", traditional: false, freightSync: true },
  { feature: "Driver Mobile App", traditional: false, freightSync: true },
  { feature: "E-way Bill Generation", traditional: false, freightSync: true },
  { feature: "Tally Integration", traditional: false, freightSync: true },
  { feature: "24/7 Support", traditional: false, freightSync: true },
  { feature: "Data Backup", traditional: false, freightSync: true },
  { feature: "Custom Reports", traditional: false, freightSync: true },
];

const workflowSteps = [
  {
    number: "01",
    title: "Book & Create LR",
    description: "Create bookings and generate LRs instantly with our smart forms",
    icon: <FileText className="w-6 h-6" />
  },
  {
    number: "02",
    title: "Dispatch & Track",
    description: "Assign vehicles, track real-time location, and monitor trip progress",
    icon: <Truck className="w-6 h-6" />
  },
  {
    number: "03",
    title: "Capture POD",
    description: "Drivers upload POD photos directly from mobile app",
    icon: <Package className="w-6 h-6" />
  },
  {
    number: "04",
    title: "Generate Invoice",
    description: "Auto-create bills based on trip completion and POD",
    icon: <IndianRupee className="w-6 h-6" />
  },
];

const faqs = [
  {
    question: "How quickly can we get started?",
    answer: "You can be up and running in just 24 hours. Our team will help with data migration and training."
  },
  {
    question: "Do we need technical knowledge?",
    answer: "No! Freight Sync is designed for transport operators, not IT experts. Simple, intuitive interface."
  },
  {
    question: "What about our existing data?",
    answer: "We'll help migrate all your existing data from Excel, Tally, or any other system at no extra cost."
  },
  {
    question: "Is it suitable for small fleet owners?",
    answer: "Yes! We have plans starting from just 5 vehicles. Scale up as you grow."
  },
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - SMALLER */}
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black py-16 md:py-24">
        <div className="container max-w-7xl px-4 md:px-8">
          <div className="max-w-3xl">
            <h1 className="text-white text-4xl md:text-6xl font-bold font-headline tracking-tight">
              One Platform, <br />
              <span className="bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] bg-clip-text text-transparent">
                Every Function
              </span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed">
              Freight Sync is built as a modular platform, allowing you to choose
              the tools you need to solve your most critical operational
              challenges.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="bg-gradient-to-r from-[#FF6B35] to-[#FF8C42]">
                <Link href="/contact">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white text-black hover:bg-white/10 hover:text-white">
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Core Modules Section */}
      <div className="py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto max-w-7xl px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-headline mb-4">
              Powerful Modules That Work Together
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Each module is designed to solve specific transport challenges while seamlessly
              integrating with others for complete operational control.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {modules.map((mod) => (
              <Card
                key={mod.title}
                className="group bg-white shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col border-2 border-transparent hover:border-[#FF6B35]/20 h-full"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="p-4 bg-gradient-to-br from-[#FF6B35]/10 to-[#FF8C42]/10 rounded-xl w-fit mb-4 group-hover:from-[#FF6B35]/20 group-hover:to-[#FF8C42]/20 transition-colors">
                      {mod.icon}
                    </div>
                    <span className="text-xs font-semibold text-[#FF6B35] bg-[#FF6B35]/10 px-3 py-1 rounded-full">
                      {mod.stats}
                    </span>
                  </div>
                  <CardTitle className="font-headline text-2xl">{mod.title}</CardTitle>
                  <p className="text-sm text-muted-foreground pt-1 font-medium">
                    {mod.subtitle}
                  </p>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {mod.description}
                  </p>
                  <ul className="space-y-3">
                    {mod.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#FF6B35] flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Workflow Section - IMPROVED STEPS */}
      <div className="py-20 md:py-32 bg-white">
        <div className="container mx-auto max-w-7xl px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-headline mb-4">
              Simple Workflow, Powerful Results
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              See how Freight Sync streamlines your entire operation in just 4 steps
            </p>
          </div>

          <div className="relative">
            {/* Desktop Timeline Line */}
            <div className="hidden lg:block absolute top-[52px] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-[#FF6B35] via-[#FF8C42] to-[#FF6B35]" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {workflowSteps.map((step, index) => (
                <div key={step.number} className="relative">
                  <div className="text-center">
                    {/* Step Number Circle */}
                    <div className="relative mb-6">
                      <div className="w-24 h-24 mx-auto bg-gradient-to-br from-[#FF6B35] to-[#FF8C42] rounded-full flex items-center justify-center text-white font-bold text-3xl shadow-lg">
                        <span className="-mt-4"> {step.number}</span>
                      </div>
                      {/* Icon overlay */}
                      <div className="absolute bottom-0 right-1/2 translate-x-1/2 translate-y-2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                        <div className="text-[#FF6B35]">{step.icon}</div>
                      </div>
                    </div>

                    <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>

                    {/* Arrow for mobile */}
                    {index < workflowSteps.length - 1 && (
                      <div className="lg:hidden flex justify-center my-6">
                        <ChevronRight className="w-6 h-6 text-[#FF6B35] rotate-90" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Comparison Table - FIXED HEADER */}
      <div className="py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto max-w-5xl px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-headline mb-4">
              Traditional vs Freight Sync
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              See why modern transport companies are making the switch
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-3">
              <div className="p-6 font-semibold bg-gray-100">Features</div>
              <div className="p-6 text-center font-semibold bg-black-100">Traditional Way</div>
              <div className="p-6 text-center font-semibold bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] text-white">
                Freight Sync
              </div>
            </div>
            {comparisonData.map((item, index) => (
              <div key={item.feature} className={`grid grid-cols-3 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                <div className="p-6 font-medium text-sm">{item.feature}</div>
                <div className="p-6 text-center">
                  {item.traditional ? (
                    <CheckCircle2 className="w-6 h-6 text-green-500 mx-auto" />
                  ) : (
                    <XCircle className="w-6 h-6 text-red-500 mx-auto" />
                  )}
                </div>
                <div className="p-6 text-center">
                  <CheckCircle2 className="w-6 h-6 text-green-500 mx-auto" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* FAQs - EXPANDABLE */}
      <div className="py-20 md:py-32 bg-white">
        <div className="container mx-auto max-w-4xl px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-headline mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <Accordion type="single" collapsible defaultValue="item-0" className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-gray-50 rounded-lg px-6 border-none"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold text-lg">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      {/* Final CTA */}
      <section className="bg-white">
        <div className="container mx-auto max-w-7xl px-4 py-12 sm:py-16 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gray-900 px-4 py-12 sm:px-16 sm:py-20 text-center shadow-2xl rounded-2xl">

            {/* Headline */}
            <h2 className="mx-auto max-w-2xl font-headline text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
              Ready to Transform Your Transport Business?
            </h2>

            {/* Subtext */}
            <p className="mx-auto mt-4 sm:mt-6 max-w-xl text-sm sm:text-base md:text-lg leading-6 sm:leading-7 text-gray-300">
              Join 500+ transport companies already saving time and money with Freight Sync
            </p>

            {/* Buttons */}
            <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-x-6">
              <Button
                size="lg"
                asChild
                className="w-full sm:w-auto bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] text-white font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                <Link href="/contact">
                  Book a Free Demo
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="w-full sm:w-auto bg-transparent text-white hover:bg-white/10 hover:text-white border-white mt-3 sm:mt-0"
              >
                <Link href="/pricing">View Pricing Plans</Link>
              </Button>
            </div>

            {/* Footer note */}
            <p className="mt-4 sm:mt-6 text-xs sm:text-sm text-gray-400">
              Works for single-branch and multi-location networks.
            </p>

            {/* Background SVG */}
            <svg
              viewBox="0 0 1024 1024"
              className="absolute left-1/2 top-1/2 -z-10 w-[200vw] h-[200vw] sm:w-[64rem] sm:h-[64rem] -translate-x-1/2"
              aria-hidden="true"
            >
              <circle cx={512} cy={512} r={512} fill="url(#features-cta-gradient)" fillOpacity="0.7" />
              <defs>
                <radialGradient id="features-cta-gradient">
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