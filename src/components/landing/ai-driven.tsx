"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "../ui/button";
import { motion, AnimatePresence, useInView } from "framer-motion";
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
  const sectionRef = useRef(null);
  // Margin ko 0px kiya taki exactly visible hone par trigger ho
  const isInView = useInView(sectionRef, { once: true, margin: "0px", amount: 0.3 });

  // Auto-rotate features
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Increased from 0.1
        delayChildren: 0.4 // Increased from 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8, // Increased from 0.6
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section
      ref={sectionRef}
      className="py-20 md:py-28 bg-gradient-to-b from-background via-background to-accent/20 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container max-w-6xl mx-auto px-4">
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
            transition={{ type: "spring", stiffness: 200, delay: 0.4 }}
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">AI-Powered</span>
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Stop Guessing.
            </motion.span>{" "}
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              Start{" "}
            </motion.span>
            <span className="relative inline-block">
              <motion.span
                className="relative z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                Syncing.
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

              {/* Animated highlight background */}
              <motion.div
                className="absolute inset-0 -inset-x-2 -inset-y-1 bg-gradient-to-r from-orange-500/20 via-orange-400/30 to-orange-500/20 rounded-lg -z-10 blur-sm"
                initial={{ scale: 0, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 1.1 }}
              />

              {/* Sparkle effect */}
              <motion.div
                className="absolute -top-1 -right-2"
                initial={{ scale: 0, rotate: 0 }}
                animate={isInView ? { scale: 1, rotate: 360 } : {}}
                transition={{ duration: 0.6, delay: 1.8, type: "spring" }}
              >
                <Sparkles className="w-4 h-4 text-orange-400" />
              </motion.div>
            </span>
          </h2>

          <motion.p
            className="text-xl text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            AI-Driven Freight Management Platform
          </motion.p>
        </motion.div>

        {/* Main Content */}
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Left: Features with stagger animation */}
          <motion.div className="space-y-4" variants={itemVariants}>
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
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.7,
                    delay: 1.2 + (idx * 0.15),
                    ease: "easeOut"
                  }}
                  whileHover={{ x: 5 }}
                >
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <motion.div
                      className={`relative p-3 rounded-xl ${isActive ? 'bg-primary' : 'bg-primary/10'} transition-colors`}
                      initial={{ rotate: -180, opacity: 0 }}
                      animate={isInView ? { rotate: 0, opacity: 1 } : {}}
                      transition={{ delay: 1.4 + (idx * 0.15), duration: 0.6 }}
                    >
                      <Icon className={`w-6 h-6 ${isActive ? 'text-primary-foreground' : 'text-primary'}`} />
                    </motion.div>

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
          </motion.div>

          {/* Right: Visual Display with scale animation */}
          <motion.div
            className="relative h-[400px] flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.5, type: "spring", stiffness: 100 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -20 }}
                transition={{ duration: 0.5 }}
                className="relative w-full max-w-sm"
              >
                {/* Background Glow with pulse */}
                <motion.div
                  className="absolute inset-0 bg-primary opacity-10 blur-3xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.2, 0.1]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                {/* Card */}
                <div className="relative bg-card border border-primary/20 rounded-2xl p-8 shadow-2xl">
                  <motion.div
                    className="inline-flex p-4 rounded-2xl bg-primary mb-6"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {(() => {
                      const Icon = features[activeIdx].icon;
                      return <Icon className="w-12 h-12 text-primary-foreground" />;
                    })()}
                  </motion.div>

                  <h3 className="text-2xl font-bold mb-3">
                    {features[activeIdx].title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {features[activeIdx].description}
                  </p>

                  {/* Decorative Elements */}
                  <div className="mt-6 flex gap-2">
                    {[...Array(4)].map((_, i) => (
                      <motion.div
                        key={i}
                        className={`h-2 flex-1 rounded-full bg-primary ${i <= activeIdx ? 'opacity-100' : 'opacity-20'}`}
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: i * 0.1 }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}