"use client";

import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Clock,
  Eye,
  Calendar
} from "lucide-react";

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
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-background to-accent/20">
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 mb-6">
            <span className="text-sm font-medium text-primary">Insights & Resources</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Learn From The{" "}
            <span className="text-primary">
              Industry Leaders
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Practical insights and success stories from the transport industry
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insights.map((insight, i) => (
            <motion.div
              key={insight.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="h-full"
            >
              <Card className="group h-full bg-card border hover:border-primary/30 hover:shadow-xl transition-all duration-300 overflow-hidden">
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden bg-muted">
                  {/* Featured Badge */}
                  {insight.featured && (
                    <div className="absolute top-4 left-4 z-10 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                      FEATURED
                    </div>
                  )}

                  {/* Image */}
                  <Image
                    src={insight.image}
                    alt={insight.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <CardContent className="p-6 flex flex-col h-full">
                  {/* Title */}
                  <h3 className="text-lg font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
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
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{insight.readTime}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      <span>{insight.views}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{insight.date}</span>
                    </div>
                  </div>

                  {/* CTA Link */}
                  <Link
                    href={insight.href}
                    className="inline-flex items-center gap-2 font-semibold text-primary group/link mt-auto"
                  >
                    <span className="relative">
                      {insight.linkText}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover/link:w-full transition-all duration-300" />
                    </span>
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>

                {/* Hover Gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary/60 to-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
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
          <Link
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary font-medium transition-colors group"
          >
            View All Resources
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}