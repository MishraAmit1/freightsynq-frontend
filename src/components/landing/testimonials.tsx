"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Earlier, I needed 3 people to update LRs and PODs manually. Now, Freight Sync does it all in minutes.",
    name: "Ramesh Yadav",
    company: "Shree Ganesh Roadways",
    rating: 5,
  },
  {
    quote:
      "Dispatch, accounts, and clients are finally in sync. No mismatched data, no chaos.",
    name: "Sanjay Patel",
    company: "Om Freight Lines",
    rating: 5,
  },
  {
    quote:
      "We scaled from 10 to 70 trucks using Freight Sync — without adding staff.",
    name: "Manoj Shetty",
    company: "Unity Transport",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-gradient-to-b from-background to-accent/30">
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 mb-6">
            <Quote className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Testimonials</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Trusted by{" "}
            <span className="text-primary">
              Transport Leaders
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            See how Freight Sync is transforming businesses across India
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="group relative h-full bg-card border hover:border-primary/50 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                {/* Gradient Background on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <CardContent className="relative p-8 flex flex-col h-full">
                  {/* Quote Icon */}
                  <div className="mb-6">
                    <Quote className="w-10 h-10 text-primary/20 rotate-180" />
                  </div>

                  {/* Quote Text */}
                  <p className="text-lg text-foreground leading-relaxed mb-6 flex-1">
                    "{testimonial.quote}"
                  </p>

                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-primary text-primary"
                      />
                    ))}
                  </div>

                  {/* Author Info */}
                  <div className="flex items-center gap-4">
                    {/* Avatar */}
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-lg font-bold text-primary">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>

                    {/* Name & Company */}
                    <div>
                      <div className="font-semibold text-foreground">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Accent Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-muted-foreground">
            Join <span className="font-semibold text-primary">500+ transporters</span> who trust Freight Sync
          </p>
        </motion.div>
      </div>
    </section>
  );
}