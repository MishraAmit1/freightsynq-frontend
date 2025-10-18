"use client";

import { motion, useInView } from "framer-motion";
import {
  FileSpreadsheet,
  MessageCircle,
  MapPin,
  BookOpen,
  BarChart3,
  Cloud,
  Database,
  Calculator,
  Plug,
  CheckCircle,
  Sparkles
} from "lucide-react";
import { useRef } from "react";

const integrations = [
  { name: "Tally", icon: Calculator, description: "Accounting sync" },
  { name: "Google Sheets", icon: FileSpreadsheet, description: "Data export" },
  { name: "WhatsApp", icon: MessageCircle, description: "Instant updates" },
  { name: "GPS Trackers", icon: MapPin, description: "Live tracking" },
  { name: "Zoho Books", icon: BookOpen, description: "Invoice management" },
  { name: "Power BI", icon: BarChart3, description: "Analytics & reports" },
  { name: "Amazon S3", icon: Cloud, description: "Cloud storage" },
  { name: "Databricks", icon: Database, description: "Data warehouse" },
];

export default function Integrations() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "0px", amount: 0.2 });

  return (
    <section
      ref={sectionRef}
      id="integrations"
      className="py-20 md:py-28 bg-gradient-to-b from-accent/30 to-background overflow-hidden"
    >
      <div className="container max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
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
            <Plug className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Integrations</span>
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Works With Your{" "}
            </motion.span>
            <span className="relative inline-block">
              <motion.span
                className="relative z-10 font-black"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                Existing Tools
              </motion.span>

              {/* Nike-style Underline Swoosh */}
              <svg
                className="absolute -bottom-3 left-0 w-full h-8 z-0"
                viewBox="0 0 300 30"
                preserveAspectRatio="none"
              >
                <motion.path
                  d="M 0 20 Q 95 8, 200 12 T 300 20"
                  stroke="url(#integration-gradient)"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                  transition={{ duration: 2, ease: "easeInOut", delay: 1.2 }}
                />
                <defs>
                  <linearGradient id="integration-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
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
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            Freight Sync connects seamlessly with your favorite tools.
            No need to change your workflow.
          </motion.p>
        </motion.div>

        {/* Integration Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {integrations.map((integration, i) => {
            const Icon = integration.icon;
            return (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 1.2 + (i * 0.1),
                  ease: "easeOut"
                }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <div className="relative h-full bg-card border rounded-2xl p-6 hover:border-primary/50 hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  {/* Animated Background Pattern */}
                  <motion.div
                    className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full -mr-10 -mt-10"
                    whileHover={{ scale: 2 }}
                    transition={{ duration: 0.5 }}
                  />

                  {/* Glow effect on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />

                  {/* Content */}
                  <div className="relative">
                    {/* Icon with pulse effect */}
                    <motion.div
                      className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 relative overflow-hidden"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {/* Pulse ring */}
                      <motion.div
                        className="absolute inset-0 bg-primary/20 rounded-xl"
                        initial={false}
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 0, 0.5]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                      <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors relative z-10" />

                      {/* Background fill on hover */}
                      <motion.div
                        className="absolute inset-0 bg-primary rounded-xl"
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.div>

                    {/* Name */}
                    <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                      {integration.name}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground">
                      {integration.description}
                    </p>

                    {/* Connected Status */}
                    <motion.div
                      className="flex items-center gap-1 mt-3 text-primary"
                      initial={{ opacity: 0, x: -10 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <CheckCircle className="w-3 h-3" />
                      <span className="text-xs font-medium">Connected</span>
                    </motion.div>
                  </div>

                  {/* Bottom accent line */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-orange-500 to-primary"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.4 }}
                    style={{ transformOrigin: "left" }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}