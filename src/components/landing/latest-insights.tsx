"use client";

import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Clock,
  Eye,
  Calendar,
  Sparkles,
  BookOpen
} from "lucide-react";
import { useRef } from "react";

const insights = [
  {
    title: "How Indian Transporters Are Going Paperless in 2025",
    description: "Learn how automation is cutting admin time by 70%.",
    linkText: "Read Article",
    href: "#",
    readTime: "5 min read",
    views: "2.3k",
    date: "Jan 15, 2025",
    image: "https://i.pinimg.com/736x/c8/52/cb/c852cbe4ab3fa7b0243a5524085810ac.jpg",
    featured: true,
  },
  {
    title: "From Chaos to Clarity — How Om Freight Runs 20 Branches with One Dashboard",
    description: "Discover how one company transformed their operations completely.",
    linkText: "Read Case Study",
    href: "#",
    readTime: "8 min read",
    views: "1.8k",
    date: "Jan 10, 2025",
    image: "https://i.pinimg.com/1200x/23/05/f3/2305f37c2d8dbbd73063b256c42371c1.jpg",
  },
  {
    title: "The Future of Indian TMS — Why 'Sync' Is the New Standard",
    description: "Understanding the shift in transport management systems.",
    linkText: "Explore Report",
    href: "#",
    readTime: "10 min read",
    views: "3.1k",
    date: "Jan 5, 2025",
    image: "https://i.pinimg.com/1200x/0b/60/64/0b60649d7619c748ea8a14006bb1daf8.jpg",
  },
];

export default function LatestInsights() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "0px", amount: 0.2 });

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 bg-gradient-to-b from-background to-accent/20 overflow-hidden"
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
            <BookOpen className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Insights & Resources</span>
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Latest Industry
            </motion.span>
            <span className="relative inline-block">
              <motion.span
                className="relative z-10 font-black"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                Insights
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
            Practical insights and success stories from the transport industry
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insights.map((insight, i) => (
            <motion.div
              key={insight.title}
              initial={{ opacity: 0, y: 50, rotateX: -10 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 1.4 + (i * 0.2),
                ease: "easeOut"
              }}
              className="h-full"
            >
              <Link href={insight.href} className="block h-full group/card">
                <Card className="relative h-full bg-card border hover:border-primary/50 hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  {/* Image Container */}
                  <div className="relative h-48 overflow-hidden bg-muted">
                    {/* Featured Badge */}
                    {insight.featured && (
                      <motion.div
                        className="absolute top-4 left-4 z-10 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={isInView ? { scale: 1, rotate: 0 } : {}}
                        transition={{
                          delay: 1.6 + (i * 0.2),
                          type: "spring",
                          stiffness: 200
                        }}
                      >
                        FEATURED
                      </motion.div>
                    )}

                    {/* Image */}
                    <Image
                      src={insight.image}
                      alt={insight.title}
                      fill
                      className="object-cover group-hover/card:scale-110 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />

                    {/* Gradient Overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Floating sparkle effect */}
                    <motion.div
                      className="absolute top-4 right-4 opacity-0 group-hover/card:opacity-100"
                      animate={{
                        y: [0, -10, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <Sparkles className="w-5 h-5 text-white/80" />
                    </motion.div>
                  </div>

                  <CardContent className="p-6 flex flex-col h-full">
                    {/* Title */}
                    <h3 className="text-lg font-bold mb-3 line-clamp-2 group-hover/card:text-primary transition-colors duration-300">
                      {insight.title}
                    </h3>

                    {/* Description */}
                    {insight.description && (
                      <p className="text-muted-foreground text-sm mb-4 flex-grow line-clamp-2">
                        {insight.description}
                      </p>
                    )}

                    {/* Metadata */}
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                      <motion.div
                        className="flex items-center gap-1"
                        whileHover={{ scale: 1.1 }}
                      >
                        <Clock className="w-3 h-3" />
                        <span>{insight.readTime}</span>
                      </motion.div>
                      <motion.div
                        className="flex items-center gap-1"
                        whileHover={{ scale: 1.1 }}
                      >
                        <Eye className="w-3 h-3" />
                        <span>{insight.views}</span>
                      </motion.div>
                      <motion.div
                        className="flex items-center gap-1"
                        whileHover={{ scale: 1.1 }}
                      >
                        <Calendar className="w-3 h-3" />
                        <span>{insight.date}</span>
                      </motion.div>
                    </div>

                    {/* CTA Link */}
                    <div className="inline-flex items-center gap-2 font-semibold text-primary group/link mt-auto">
                      <span className="relative">
                        {insight.linkText}
                        <motion.span
                          className="absolute bottom-0 left-0 h-0.5 bg-primary"
                          initial={{ width: 0 }}
                          whileHover={{ width: "100%" }}
                          transition={{ duration: 0.3 }}
                        />
                      </span>
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <ArrowRight className="w-4 h-4" />
                      </motion.div>
                    </div>
                  </CardContent>

                  {/* Hover Gradient */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-orange-500 to-primary"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.5 }}
                    style={{ transformOrigin: "left" }}
                  />

                  {/* Corner Glow */}
                  <motion.div
                    className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 -mr-16 -mt-16"
                  />
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 2.2, duration: 0.6 }}
        >
          <Link
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary/10 hover:bg-primary hover:text-primary-foreground font-medium transition-all duration-300 group hover:shadow-lg hover:shadow-primary/30"
          >
            View All Resources
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <ArrowRight className="w-4 h-4" />
            </motion.div>
          </Link>

          {/* Decorative dots */}
          <div className="flex justify-center gap-2 mt-6">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 rounded-full bg-primary"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{
                  delay: 2.4 + (i * 0.1),
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