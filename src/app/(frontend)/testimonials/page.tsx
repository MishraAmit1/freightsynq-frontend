"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { ArrowRight, Quote, Star, TrendingUp, Users, Zap } from "lucide-react";
import Link from "next/link";

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

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Similar to Features/Pricing */}
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black py-16 md:py-24">
        <div className="container max-w-7xl px-4 md:px-8">
          <div className="max-w-3xl">
            <h1 className="text-white text-4xl md:text-6xl font-bold font-headline tracking-tight">
              Trusted by India's
              <br />
              <span className="bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] bg-clip-text text-transparent">
                Leading Transporters
              </span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed">
              See how fleet owners and logistics operators are using Freight Sync
              to build more efficient, profitable, and scalable businesses.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 md:py-20 bg-white border-b">
        <div className="container mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#FF6B35]/10 to-[#FF8C42]/10 rounded-full mb-4 text-[#FF6B35]">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto max-w-7xl px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-headline mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Real stories from transport businesses that transformed their operations with Freight Sync
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <Card
                key={testimonial.name}
                className="flex flex-col h-full hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#FF6B35]/20 group"
              >
                <CardContent className="p-6 md:p-8 flex-grow flex flex-col">
                  {/* Quote Icon */}
                  <Quote className="w-10 h-10 text-[#FF6B35]/20 mb-4 group-hover:text-[#FF6B35]/40 transition-colors" />

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#FF6B35] text-[#FF6B35]" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-foreground mb-6 flex-grow leading-relaxed">
                    "{testimonial.quote}"
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center pt-4 border-t">
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
            ))}
          </div>
        </div>
      </div>

      {/* Video Testimonial Section (Optional - can be added later) */}
      <div className="py-20 md:py-32 bg-white">
        <div className="container mx-auto max-w-5xl px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold font-headline mb-4">
              See Freight Sync in Action
            </h2>
            <p className="text-lg text-muted-foreground">
              Watch how real transport businesses use our platform daily
            </p>
          </div>

          <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M3 2v12l10-6z" />
                </svg>
              </div>
              <p className="text-white text-lg">Watch Customer Stories</p>
              <p className="text-gray-400 text-sm mt-2">Coming Soon</p>
            </div>
          </div>
        </div>
      </div>

      {/* Success Metrics */}
      <div className="py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto max-w-7xl px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-headline mb-4">
              Real Results That Matter
            </h2>
            <p className="text-lg text-muted-foreground">
              Average improvements our customers experience within 90 days
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-8 border-2 hover:border-[#FF6B35]/20 transition-colors">
              <div className="text-5xl font-bold text-[#FF6B35] mb-2">30%</div>
              <div className="font-semibold mb-2">Faster Billing</div>
              <div className="text-sm text-muted-foreground">Average time saved in invoice generation</div>
            </Card>

            <Card className="text-center p-8 border-2 hover:border-[#FF6B35]/20 transition-colors">
              <div className="text-5xl font-bold text-[#FF6B35] mb-2">15%</div>
              <div className="font-semibold mb-2">Cost Reduction</div>
              <div className="text-sm text-muted-foreground">Average operational cost savings</div>
            </Card>

            <Card className="text-center p-8 border-2 hover:border-[#FF6B35]/20 transition-colors">
              <div className="text-5xl font-bold text-[#FF6B35] mb-2">50%</div>
              <div className="font-semibold mb-2">Less Paperwork</div>
              <div className="text-sm text-muted-foreground">Time saved on manual data entry</div>
            </Card>

            <Card className="text-center p-8 border-2 hover:border-[#FF6B35]/20 transition-colors">
              <div className="text-5xl font-bold text-[#FF6B35] mb-2">24/7</div>
              <div className="font-semibold mb-2">Real-time Tracking</div>
              <div className="text-sm text-muted-foreground">Live visibility of entire fleet</div>
            </Card>
          </div>
        </div>
      </div>

      {/* Final CTA - Same as Home Page */}
      <section className="bg-white">
        <div className="container mx-auto max-w-7xl px-4 py-12 sm:py-16 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gray-900 px-4 py-12 sm:px-16 sm:py-20 text-center shadow-2xl rounded-2xl">
            <h2 className="mx-auto max-w-2xl font-headline text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
              Ready to Join India's Leading Transporters?
            </h2>
            <p className="mx-auto mt-4 sm:mt-6 max-w-xl text-sm sm:text-base md:text-lg leading-6 sm:leading-7 text-gray-300">
              See why 500+ transport companies trust Freight Sync. Start your free trial today.
            </p>
            <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-x-6">
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
            </div>
            <p className="mt-4 sm:mt-6 text-xs sm:text-sm text-gray-400">
              No credit card required • 7-day free trial
            </p>
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
          </div>
        </div>
      </section>
    </div>
  );
}