"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import { Quote, Star, Sparkles } from "lucide-react";
import { useRef } from "react";

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
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "0px", amount: 0.2 });

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="py-20 md:py-28 bg-gradient-to-b from-background to-accent/30 overflow-hidden"
    >
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 mb-6"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
          >
            <Quote className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Testimonials</span>
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Hear from Industry{" "}
            </motion.span>
            <span className="relative inline-block">
              <motion.span
                className="relative z-10 font-black"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                Leaders
              </motion.span>

              {/* Nike-style swoosh - Triggers on scroll */}
              <svg
                className="absolute -bottom-2 left-0 w-full h-8 z-0"
                viewBox="0 0 200 30"
                preserveAspectRatio="none"
              >
                <motion.path
                  d="M 0 25 Q 50 5, 100 15 T 200 10"
                  stroke="url(#gradient)"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                  transition={{ duration: 2, ease: "easeInOut", delay: 1.3 }}
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#fb923c" />
                    <stop offset="100%" stopColor="#f97316" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Glow Effect */}
              <motion.div
                className="absolute inset-0 -inset-x-3 -inset-y-1 bg-gradient-to-r from-orange-500/20 via-orange-400/30 to-orange-500/20 rounded-lg -z-10 blur-sm"
                initial={{ scale: 0, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 1 }}
              />

              {/* Sparkle */}
              <motion.div
                className="absolute -top-2 -right-3"
                initial={{ scale: 0, rotate: 0 }}
                animate={isInView ? { scale: 1, rotate: 360 } : {}}
                transition={{ duration: 0.6, delay: 1.6, type: "spring" }}
              >
                <Sparkles className="w-5 h-5 text-orange-400" />
              </motion.div>
            </span>
          </h2>

          <motion.p
            className="text-lg text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            See how Freight Sync is transforming businesses across India
          </motion.p>
        </motion.div>

        {/* Testimonials Grid with Stagger */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 1.4 + (i * 0.2),
                ease: "easeOut"
              }}
              whileHover={{ y: -10 }}
            >
              <Card className="group relative h-full bg-card border hover:border-primary/50 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                {/* Animated Gradient Background on Hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                />

                {/* Floating particles effect on hover */}
                <motion.div
                  className="absolute top-4 right-4 w-20 h-20 bg-primary/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                <CardContent className="relative p-8 flex flex-col h-full">
                  {/* Quote Icon with rotation animation */}
                  <motion.div
                    className="mb-6"
                    whileHover={{ rotate: 180, scale: 1.2 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Quote className="w-10 h-10 text-primary/30 rotate-180" />
                  </motion.div>

                  {/* Quote Text */}
                  <p className="text-lg text-foreground leading-relaxed mb-6 flex-1">
                    "{testimonial.quote}"
                  </p>

                  {/* Rating Stars with stagger animation */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, starIdx) => (
                      <motion.div
                        key={starIdx}
                        initial={{ opacity: 0, scale: 0, rotate: -180 }}
                        animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                        transition={{
                          delay: 1.6 + (i * 0.2) + (starIdx * 0.1),
                          type: "spring",
                          stiffness: 200
                        }}
                      >
                        <Star className="w-4 h-4 fill-primary text-primary" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Author Info */}
                  <div className="flex items-center gap-4">
                    {/* Avatar with pulse effect */}
                    <motion.div
                      className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center relative overflow-hidden"
                      whileHover={{ scale: 1.1 }}
                    >
                      {/* Pulse ring */}
                      <motion.div
                        className="absolute inset-0 rounded-full bg-primary/20"
                        animate={{
                          scale: [1, 1.5],
                          opacity: [0.5, 0]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeOut"
                        }}
                      />
                      <span className="text-lg font-bold text-primary relative z-10">
                        {testimonial.name.charAt(0)}
                      </span>
                    </motion.div>

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

                  {/* Bottom Accent Line with smooth reveal */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-orange-500 to-primary"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    style={{ transformOrigin: "left" }}
                  />

                  {/* Corner decoration */}
                  <motion.div
                    className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA with counter animation */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 2.2, duration: 0.6 }}
        >
          <p className="text-muted-foreground text-lg">
            Join{" "}
            <motion.span
              className="font-bold text-primary text-xl"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{
                delay: 2.4,
                type: "spring",
                stiffness: 200
              }}
            >
              500+ transporters
            </motion.span>{" "}
            who trust Freight Sync
          </p>

          {/* Decorative dots */}
          <div className="flex justify-center gap-2 mt-4">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 rounded-full bg-primary"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{
                  delay: 2.6 + (i * 0.1),
                  type: "spring"
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}