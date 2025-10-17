"use client";

import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { motion, AnimatePresence } from "framer-motion";
import {
  Brain,
  AlertTriangle,
  Zap,
  RefreshCw,
  ArrowRight,
  Sparkles
} from "lucide-react";

export default function AiDriven() {
  const features = [
    {
      title: "AI watches every booking",
      description: "Analyses every dispatch & document in real-time, ensuring nothing gets missed",
      icon: Brain,
    },
    {
      title: "Finds delays & gaps",
      description: "Identifies inconsistencies, duplicates and missing data before they become problems",
      icon: AlertTriangle,
    },
    {
      title: "Recommends actions",
      description: "Suggests what to do next for optimal operations and maximum efficiency",
      icon: Zap,
    },
    {
      title: "Keeps all data synced",
      description: "Everything updated across all departments in real-time, automatically",
      icon: RefreshCw,
    },
  ];

  const [activeIdx, setActiveIdx] = useState(0);

  // Auto-rotate features
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-background via-background to-accent/20 overflow-hidden">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">AI-Powered</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Stop Guessing. Start{" "}
            <span className="text-primary">
              Syncing.
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            AI-Driven Freight Management Platform
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Features */}
          <div className="space-y-4">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              const isActive = activeIdx === idx;

              return (
                <motion.div
                  key={idx}
                  onClick={() => setActiveIdx(idx)}
                  className={`relative cursor-pointer p-6 rounded-2xl border transition-all duration-300 overflow-hidden ${isActive
                    ? "bg-primary/5 border-primary shadow-lg shadow-primary/10"
                    : "bg-card/50 border-border hover:bg-card hover:border-muted-foreground/30"
                    }`}
                  whileHover={{ x: 5 }}
                >
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className={`relative p-3 rounded-xl ${isActive ? 'bg-primary' : 'bg-primary/10'
                      } transition-colors`}>
                      <Icon className={`w-6 h-6 ${isActive ? 'text-primary-foreground' : 'text-primary'
                        }`} />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>

                    {/* Indicator */}
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="mt-1"
                      >
                        <ArrowRight className="w-5 h-5 text-primary" />
                      </motion.div>
                    )}
                  </div>

                  {/* Progress Bar - Rounded */}
                  {isActive && (
                    <div className="absolute bottom-2 left-2 right-2">
                      <div className="h-1.5 bg-primary/10 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-primary rounded-full"
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 3, ease: "linear" }}
                        />
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Right: Visual Display */}
          <div className="relative h-[400px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="relative w-full max-w-sm"
              >
                {/* Background Glow */}
                <div className="absolute inset-0 bg-primary opacity-10 blur-3xl" />

                {/* Card */}
                <div className="relative bg-card border border-primary/20 rounded-2xl p-8 shadow-2xl">
                  <div className="inline-flex p-4 rounded-2xl bg-primary mb-6">
                    {(() => {
                      const Icon = features[activeIdx].icon;
                      return <Icon className="w-12 h-12 text-primary-foreground" />;
                    })()}
                  </div>

                  <h3 className="text-2xl font-bold mb-3">
                    {features[activeIdx].title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {features[activeIdx].description}
                  </p>

                  {/* Decorative Elements */}
                  <div className="mt-6 flex gap-2">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className={`h-2 flex-1 rounded-full bg-primary ${i <= activeIdx ? 'opacity-100' : 'opacity-20'
                          }`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}