"use client";

import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { ArrowRight, Quote, Star, TrendingUp, Users, Zap, Sparkles } from "lucide-react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

const testimonials = [
  {
    quote:
      "Earlier, I needed 3 people to update LRs and PODs manually. Now, Freight Sync does it all in minutes. It has been a game-changer for our efficiency.",
    name: "Ramesh Yadav",
    company: "Shree Ganesh Roadways",
    role: "Owner",
    avatarId: "team-rohan",
    rating: 5,
  },
  {
    quote:
      "Dispatch, accounts, and clients are finally in sync. No mismatched data, no chaos. The single source of truth has eliminated 90% of our internal disputes.",
    name: "Sanjay Patel",
    company: "Om Freight Lines",
    role: "Operations Manager",
    avatarId: "team-aditi",
    rating: 5,
  },
  {
    quote:
      "We scaled from 10 to 70 trucks using Freight Sync — without adding a single person to our back-office staff. The scalability is incredible.",
    name: "Manoj Shetty",
    company: "Unity Transport",
    role: "CEO",
    avatarId: "team-rohan",
    rating: 5,
  },
  {
    quote:
      "The driver app is so simple that even our less tech-savvy drivers adopted it in a day. Getting real-time PODs has accelerated our payment cycles by a week.",
    name: "Priya Singh",
    company: "Jaipur Golden Transport",
    role: "Fleet Manager",
    avatarId: "team-aditi",
    rating: 5,
  },
  {
    quote:
      "Freight Sync's AI alerts on potential delays before they happen. We can now proactively inform clients, which has boosted our customer satisfaction scores.",
    name: "Vikram Kumar",
    company: "VRL Logistics",
    role: "Director",
    avatarId: "team-rohan",
    rating: 5,
  },
  {
    quote:
      "The Tally integration is seamless. Our accountant saves 15 hours a week because all invoicing and expense data flows automatically. It's a massive time-saver.",
    name: "Anjali Gupta",
    company: "Navata Road Transport",
    role: "Finance Head",
    avatarId: "team-aditi",
    rating: 5,
  },
];

const stats = [
  {
    icon: <Users className="w-6 h-6" />,
    value: "500+",
    label: "Happy Customers"
  },
  {
    icon: <Zap className="w-6 h-6" />,
    value: "10,000+",
    label: "Daily LRs Processed"
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    value: "15%",
    label: "Average Cost Reduction"
  }
];

const metrics = [
  { value: "30%", title: "Faster Billing", description: "Average time saved in invoice generation" },
  { value: "15%", title: "Cost Reduction", description: "Average operational cost savings" },
  { value: "50%", title: "Less Paperwork", description: "Time saved on manual data entry" },
  { value: "24/7", title: "Real-time Tracking", description: "Live visibility of entire fleet" }
];

export default function TestimonialsPage() {
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const testimonialsRef = useRef(null);
  const videoRef = useRef(null);
  const metricsRef = useRef(null);
  const ctaRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, margin: "0px", amount: 0.3 });
  const statsInView = useInView(statsRef, { once: true, margin: "0px", amount: 0.3 });
  const testimonialsInView = useInView(testimonialsRef, { once: true, margin: "0px", amount: 0.1 });
  const videoInView = useInView(videoRef, { once: true, margin: "0px", amount: 0.3 });
  const metricsInView = useInView(metricsRef, { once: true, margin: "0px", amount: 0.2 });
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
                Trusted by India's
              </motion.span>
              <span className="relative inline-block">
                <motion.span
                  className="bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] bg-clip-text text-transparent font-black"
                  initial={{ opacity: 0, y: 20 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  Leading Transporters
                </motion.span>

                {/* Nike Swoosh */}
                <svg
                  className="absolute -bottom-3 left-0 w-full h-8 z-0"
                  viewBox="0 0 350 30"
                  preserveAspectRatio="none"
                >
                  <motion.path
                    d="M 0 20 Q 85 8, 175 12 T 350 8"
                    stroke="url(#testimonial-hero-gradient)"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={heroInView ? { pathLength: 1 } : { pathLength: 0 }}
                    transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
                  />
                  <defs>
                    <linearGradient id="testimonial-hero-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
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
              See how fleet owners and logistics operators are using Freight Sync
              to build more efficient, profitable, and scalable businesses.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div ref={statsRef} className="py-16 md:py-20 bg-white border-b overflow-hidden">
        <div className="container mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + (index * 0.15) }}
              >
                <motion.div
                  className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#FF6B35]/10 to-[#FF8C42]/10 rounded-full mb-4 text-[#FF6B35]"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {stat.icon}
                </motion.div>

                <motion.div
                  className="text-4xl font-bold mb-2"
                  initial={{ scale: 0 }}
                  animate={statsInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.4 + (index * 0.15), type: "spring" }}
                >
                  {stat.value}
                </motion.div>

                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Grid */}
      <div ref={testimonialsRef} className="py-20 md:py-32 bg-gray-50 overflow-hidden">
        <div className="container mx-auto max-w-7xl px-4 md:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold font-headline mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Real stories from transport businesses that transformed their operations with Freight Sync
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 50, rotateX: -10 }}
                animate={testimonialsInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{
                  duration: 0.7,
                  delay: 0.4 + (i * 0.15),
                  ease: "easeOut"
                }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <Card className="flex flex-col h-full hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-[#FF6B35]/20 group">
                  <CardContent className="p-6 md:p-8 flex-grow flex flex-col">
                    {/* Quote Icon */}
                    <motion.div
                      whileHover={{ rotate: 18, scale: 1.2 }}
                      transition={{ duration: 0.4 }}
                    >
                      <Quote className="w-10 h-10 text-[#FF6B35]/20 mb-4 group-hover:text-[#FF6B35]/40 transition-colors" />
                    </motion.div>

                    {/* Rating */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, starIdx) => (
                        <motion.div
                          key={starIdx}
                          initial={{ opacity: 0, scale: 0, rotate: -180 }}
                          animate={testimonialsInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                          transition={{
                            delay: 0.6 + (i * 0.15) + (starIdx * 0.1),
                            type: "spring",
                            stiffness: 200
                          }}
                        >
                          <Star className="w-4 h-4 fill-[#FF6B35] text-[#FF6B35]" />
                        </motion.div>
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-foreground mb-6 flex-grow leading-relaxed">
                      "{testimonial.quote}"
                    </p>

                    {/* Author Info */}
                    <div className="flex items-center pt-4 border-t">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring" }}
                      >
                        <Avatar className="h-12 w-12 mr-4 ring-2 ring-[#FF6B35]/10">
                          <AvatarImage
                            src={
                              PlaceHolderImages.find(
                                (img) => img.id === testimonial.avatarId
                              )?.imageUrl
                            }
                            alt={testimonial.name}
                          />
                          <AvatarFallback className="bg-gradient-to-br from-[#FF6B35]/20 to-[#FF8C42]/20">
                            {testimonial.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                      </motion.div>
                      <div>
                        <div className="font-semibold text-foreground">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {testimonial.role} • {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Testimonial Section */}
      <div ref={videoRef} className="py-20 md:py-32 bg-white overflow-hidden">
        <div className="container mx-auto max-w-5xl px-4 md:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={videoInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold font-headline mb-4">
              See Freight Sync in Action
            </h2>
            <p className="text-lg text-muted-foreground">
              Watch how real transport businesses use our platform daily
            </p>
          </motion.div>

          <motion.div
            className="aspect-video bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={videoInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="text-center">
              <motion.div
                className="w-20 h-20 bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(255, 107, 53, 0.4)",
                    "0 0 0 20px rgba(255, 107, 53, 0)",
                  ]
                }}
                transition={{
                  boxShadow: {
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeOut"
                  }
                }}
              >
                <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M3 2v12l10-6z" />
                </svg>
              </motion.div>
              <p className="text-white text-lg">Watch Customer Stories</p>
              <p className="text-gray-400 text-sm mt-2">Coming Soon</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Success Metrics */}
      <div ref={metricsRef} className="py-20 md:py-32 bg-gray-50 overflow-hidden">
        <div className="container mx-auto max-w-7xl px-4 md:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={metricsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold font-headline mb-4">
              Real Results That Matter
            </h2>
            <p className="text-lg text-muted-foreground">
              Average improvements our customers experience within 90 days
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.title}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={metricsInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ delay: 0.4 + (index * 0.1) }}
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <Card className="text-center p-8 border-2 hover:border-[#FF6B35]/20 transition-all duration-300">
                  <motion.div
                    className="text-5xl font-bold text-[#FF6B35] mb-2"
                    initial={{ scale: 0 }}
                    animate={metricsInView ? { scale: 1 } : {}}
                    transition={{
                      delay: 0.6 + (index * 0.1),
                      type: "spring",
                      stiffness: 200
                    }}
                  >
                    {metric.value}
                  </motion.div>
                  <div className="font-semibold mb-2">{metric.title}</div>
                  <div className="text-sm text-muted-foreground">{metric.description}</div>
                </Card>
              </motion.div>
            ))}
          </div>
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
            <motion.h2
              className="mx-auto max-w-2xl font-headline text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              Ready to Join India's Leading Transporters?
            </motion.h2>

            <motion.p
              className="mx-auto mt-4 sm:mt-6 max-w-xl text-sm sm:text-base md:text-lg leading-6 sm:leading-7 text-gray-300"
              initial={{ opacity: 0 }}
              animate={ctaInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
            >
              See why 500+ transport companies trust Freight Sync. Start your free trial today.
            </motion.p>

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
                  Start Free Trial
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="w-full sm:w-auto bg-transparent text-white hover:bg-white/10 hover:text-white border-white mt-3 sm:mt-0"
              >
                <Link href="/contact">Schedule a Demo</Link>
              </Button>
            </motion.div>

            <motion.p
              className="mt-4 sm:mt-6 text-xs sm:text-sm text-gray-400"
              initial={{ opacity: 0 }}
              animate={ctaInView ? { opacity: 1 } : {}}
              transition={{ delay: 1 }}
            >
              No credit card required • 7-day free trial
            </motion.p>

            <svg
              viewBox="0 0 1024 1024"
              className="absolute left-1/2 top-1/2 -z-10 w-[200vw] h-[200vw] sm:w-[64rem] sm:h-[64rem] -translate-x-1/2"
              aria-hidden="true"
            >
              <circle cx={512} cy={512} r={512} fill="url(#testimonials-cta-gradient)" fillOpacity="0.7" />
              <defs>
                <radialGradient id="testimonials-cta-gradient">
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