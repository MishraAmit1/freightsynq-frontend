"use client";

import { motion } from "framer-motion";
import { Newspaper, Award, TrendingUp, Zap } from "lucide-react";

const logos = [
  {
    name: "Economic Times",
    icon: Newspaper,
    tagline: "India's Leading Business Daily"
  },
  {
    name: "YourStory",
    icon: TrendingUp,
    tagline: "India's Startup Hub"
  },
  {
    name: "Inc42",
    icon: Zap,
    tagline: "Startup Intelligence"
  },
  {
    name: "TechCircle",
    icon: Award,
    tagline: "Tech & Investment News"
  }
];

export default function FeaturedOn() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-background to-accent/30 overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 mb-6">
            <Award className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">As Seen In</span>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Featured in Leading Publications
          </h2>
          <p className="text-muted-foreground">
            Recognized by India's top business media
          </p>
        </motion.div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {logos.map((logo, i) => {
            const Icon = logo.icon;
            return (
              <motion.div
                key={logo.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="relative bg-card border rounded-xl p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-300 text-center">
                  {/* Icon */}
                  <div className="inline-flex p-3 rounded-lg bg-primary/5 group-hover:bg-primary/10 transition-colors mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>

                  {/* Logo Name */}
                  <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">
                    {logo.name}
                  </h3>

                  {/* Tagline */}
                  <p className="text-xs text-muted-foreground">
                    {logo.tagline}
                  </p>

                  {/* Hover Accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-xl" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Quote */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <blockquote className="relative inline-block">
            <div className="absolute -left-4 -top-2 text-4xl text-primary/20">"</div>
            <p className="text-lg italic text-muted-foreground max-w-2xl mx-auto px-8">
              Freight Sync is revolutionizing how India's transport industry manages operations
            </p>
            <div className="absolute -right-4 -bottom-2 text-4xl text-primary/20">"</div>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}