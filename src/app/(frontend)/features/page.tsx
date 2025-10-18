"use client";

import React, { useRef } from "react";
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
  ChevronRight,
  Sparkles
} from "lucide-react";
import { motion, useInView } from "framer-motion";

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
  const heroRef = useRef(null);
  const modulesRef = useRef(null);
  const workflowRef = useRef(null);
  const comparisonRef = useRef(null);
  const faqRef = useRef(null);
  const ctaRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, margin: "0px", amount: 0.3 });
  const modulesInView = useInView(modulesRef, { once: true, margin: "0px", amount: 0.1 });
  const workflowInView = useInView(workflowRef, { once: true, margin: "0px", amount: 0.2 });
  const comparisonInView = useInView(comparisonRef, { once: true, margin: "0px", amount: 0.2 });
  const faqInView = useInView(faqRef, { once: true, margin: "0px", amount: 0.2 });
  const ctaInView = useInView(ctaRef, { once: true, margin: "0px", amount: 0.3 });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div ref={heroRef} className="bg-gradient-to-br from-gray-900 via-gray-800 to-black py-16 md:py-24 overflow-hidden">
        <div className="container max-w-7xl px-4 md:px-8">
          <div className="max-w-3xl">
            <motion.h1
              className="text-white text-4xl md:text-6xl font-bold font-headline tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <motion.span
                className="block"
                initial={{ opacity: 0, x: -20 }}
                animate={heroInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                One Platform,
              </motion.span>
              <span className="relative inline-block">
                <motion.span
                  className="bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] bg-clip-text text-transparent font-black"
                  initial={{ opacity: 0, y: 20 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  Every Function
                </motion.span>
                {/* Nike Swoosh */}
                <svg
                  className="absolute -bottom-3 left-0 w-full h-8 z-0"
                  viewBox="0 0 300 30"
                  preserveAspectRatio="none"
                >
                  <motion.path
                    d="M 0 20 Q 75 8, 150 12 T 300 8"
                    stroke="url(#hero-gradient)"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={heroInView ? { pathLength: 1 } : { pathLength: 0 }}
                    transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
                  />
                  <defs>
                    <linearGradient id="hero-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#FF6B35" />
                      <stop offset="100%" stopColor="#FF8C42" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Sparkle */}
                <motion.span
                  className="absolute -top-2 -right-3 inline-block"
                  initial={{ scale: 0, rotate: 0 }}
                  animate={heroInView ? { scale: 1, rotate: 360 } : {}}
                  transition={{ duration: 0.6, delay: 1.4, type: "spring" }}
                >
                  <Sparkles className="w-5 h-5 text-[#FF8C42]" />
                </motion.span>
              </span>
            </motion.h1>

            <motion.p
              className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Freight Sync is built as a modular platform, allowing you to choose
              the tools you need to solve your most critical operational
              challenges.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <Button size="lg" asChild className="bg-gradient-to-r from-[#FF6B35] to-[#FF8C42]">
                <Link href="/contact">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white hover:text-white hover:bg-white/10">
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Core Modules Section */}
      <div ref={modulesRef} className="py-20 md:py-32 bg-gray-50 overflow-hidden">
        <div className="container mx-auto max-w-7xl px-4 md:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={modulesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold font-headline mb-4">
              Powerful Modules That Work Together
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Each module is designed to solve specific transport challenges while seamlessly
              integrating with others for complete operational control.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {modules.map((mod, index) => (
              <motion.div
                key={mod.title}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={modulesInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{
                  duration: 0.7,
                  delay: 0.4 + (index * 0.15),
                  ease: "easeOut"
                }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <Card className="group bg-white shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col border-2 border-transparent hover:border-[#FF6B35]/20 h-full">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <motion.div
                        className="p-4 bg-gradient-to-br from-[#FF6B35]/10 to-[#FF8C42]/10 rounded-xl w-fit mb-4"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        {mod.icon}
                      </motion.div>
                      <motion.span
                        className="text-xs font-semibold text-[#FF6B35] bg-[#FF6B35]/10 px-3 py-1 rounded-full"
                        initial={{ scale: 0 }}
                        animate={modulesInView ? { scale: 1 } : {}}
                        transition={{ delay: 0.6 + (index * 0.15), type: "spring" }}
                      >
                        {mod.stats}
                      </motion.span>
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
                      {mod.features.map((feature, featureIndex) => (
                        <motion.li
                          key={feature}
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: -20 }}
                          animate={modulesInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 0.6 + (index * 0.15) + (featureIndex * 0.05) }}
                        >
                          <Check className="w-5 h-5 text-[#FF6B35] flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Workflow Section */}
      <div ref={workflowRef} className="py-20 md:py-32 bg-white overflow-hidden">
        <div className="container mx-auto max-w-7xl px-4 md:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={workflowInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold font-headline mb-4">
              Simple Workflow, Powerful Results
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              See how Freight Sync streamlines your entire operation in just 4 steps
            </p>
          </motion.div>

          <div className="relative">
            {/* Desktop Timeline Line */}
            <motion.div
              className="hidden lg:block absolute top-[52px] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-[#FF6B35] via-[#FF8C42] to-[#FF6B35]"
              initial={{ scaleX: 0 }}
              animate={workflowInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.5, delay: 0.5 }}
              style={{ transformOrigin: "left" }}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {workflowSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  className="relative"
                  initial={{ opacity: 0, y: 50 }}
                  animate={workflowInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.6 + (index * 0.2) }}
                >
                  <div className="text-center">
                    {/* Step Number Circle */}
                    <div className="relative mb-6">
                      <motion.div
                        className="w-24 h-24 mx-auto bg-gradient-to-br from-[#FF6B35] to-[#FF8C42] rounded-full flex items-center justify-center text-white font-bold text-3xl shadow-lg"
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <span className="-mt-4">{step.number}</span>
                      </motion.div>
                      {/* Icon overlay */}
                      <motion.div
                        className="absolute bottom-0 right-1/2 translate-x-1/2 translate-y-2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md"
                        initial={{ scale: 0 }}
                        animate={workflowInView ? { scale: 1 } : {}}
                        transition={{ delay: 0.8 + (index * 0.2), type: "spring" }}
                      >
                        <div className="text-[#FF6B35]">{step.icon}</div>
                      </motion.div>
                    </div>

                    <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>

                    {/* Arrow for mobile */}
                    {index < workflowSteps.length - 1 && (
                      <motion.div
                        className="lg:hidden flex justify-center my-6"
                        initial={{ opacity: 0 }}
                        animate={workflowInView ? { opacity: 1 } : {}}
                        transition={{ delay: 1 + (index * 0.2) }}
                      >
                        <ChevronRight className="w-6 h-6 text-[#FF6B35] rotate-90" />
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Comparison Table */}
      <div ref={comparisonRef} className="py-20 md:py-32 bg-gray-50 overflow-hidden">
        <div className="container mx-auto max-w-5xl px-4 md:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={comparisonInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold font-headline mb-4">
              Traditional vs Freight Sync
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              See why modern transport companies are making the switch
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={comparisonInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <motion.div
              className="grid grid-cols-3"
              initial={{ opacity: 0, y: -20 }}
              animate={comparisonInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
            >
              <div className="p-6 font-semibold bg-gray-100">Features</div>
              <div className="p-6 text-center font-semibold bg-gray-100">Traditional Way</div>
              <div className="p-6 text-center font-semibold bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] text-white">
                Freight Sync
              </div>
            </motion.div>

            {comparisonData.map((item, index) => (
              <motion.div
                key={item.feature}
                className={`grid grid-cols-3 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
                initial={{ opacity: 0, x: -20 }}
                animate={comparisonInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.7 + (index * 0.05) }}
              >
                <div className="p-6 font-medium text-sm">{item.feature}</div>
                <div className="p-6 text-center">
                  {item.traditional ? (
                    <CheckCircle2 className="w-6 h-6 text-green-500 mx-auto" />
                  ) : (
                    <XCircle className="w-6 h-6 text-red-500 mx-auto" />
                  )}
                </div>
                <div className="p-6 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={comparisonInView ? { scale: 1 } : {}}
                    transition={{ delay: 0.8 + (index * 0.05), type: "spring" }}
                  >
                    <CheckCircle2 className="w-6 h-6 text-green-500 mx-auto" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* FAQs */}
      <div ref={faqRef} className="py-20 md:py-32 bg-white overflow-hidden">
        <div className="container mx-auto max-w-4xl px-4 md:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={faqInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold font-headline mb-4">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <Accordion type="single" collapsible defaultValue="item-0" className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={faqInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + (index * 0.1) }}
              >
                <AccordionItem
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
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>

      {/* Final CTA */}
      <section ref={ctaRef} className="bg-white overflow-hidden">
        <div className="container mx-auto max-w-7xl px-4 py-12 sm:py-16 lg:px-8">
          <motion.div
            className="relative isolate overflow-hidden bg-gray-900 px-4 py-12 sm:px-16 sm:py-20 text-center shadow-2xl rounded-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={ctaInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Headline */}
            <motion.h2
              className="mx-auto max-w-2xl font-headline text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              Ready to Transform Your Transport Business?
            </motion.h2>

            {/* Subtext */}
            <motion.p
              className="mx-auto mt-4 sm:mt-6 max-w-xl text-sm sm:text-base md:text-lg leading-6 sm:leading-7 text-gray-300"
              initial={{ opacity: 0 }}
              animate={ctaInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
            >
              Join 500+ transport companies already saving time and money with Freight Sync
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="mt-6 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
            >
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
            </motion.div>

            {/* Footer note */}
            <motion.p
              className="mt-4 sm:mt-6 text-xs sm:text-sm text-gray-400"
              initial={{ opacity: 0 }}
              animate={ctaInView ? { opacity: 1 } : {}}
              transition={{ delay: 1 }}
            >
              Works for single-branch and multi-location networks.
            </motion.p>

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
          </motion.div>
        </div>
      </section>
    </div>
  );
}