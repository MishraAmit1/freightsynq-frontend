"use client";

import { Truck, Package, Zap, Globe, Shield } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const logos = [
  { name: "Shree Ganesh Roadways", icon: Truck },
  { name: "Om Freight Lines", icon: Package },
  { name: "Bharat Transport Co.", icon: Zap },
  { name: "Express Logistics", icon: Globe },
  { name: "Unity Freight", icon: Shield },
];

export default function TrustedBy() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "0px", amount: 0.3 });

  const autoplay = useRef(
    Autoplay({
      delay: 2000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      dragFree: true,
      slidesToScroll: 1,
    },
    [autoplay.current]
  );

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 bg-accent/50 overflow-hidden"
    >
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-sm font-semibold uppercase text-muted-foreground tracking-wider">
            Trusted by 500+ Fleet Owners
          </p>
        </motion.div>

        {/* Embla Carousel Container */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-accent/50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-accent/50 to-transparent z-10 pointer-events-none" />

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {/* Original logos */}
              {logos.map((logo, i) => {
                const Icon = logo.icon;
                return (
                  <motion.div
                    key={`logo-${i}`}
                    className="flex-[0_0_auto] min-w-[200px] px-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + (i * 0.1) }}
                  >
                    <div className="group flex flex-col items-center gap-3 p-6 rounded-lg hover:bg-background/50 transition-all duration-300 hover:scale-105">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" />
                      </motion.div>
                      <span className="text-sm font-semibold text-muted-foreground text-center group-hover:text-primary transition-colors">
                        {logo.name}
                      </span>
                    </div>
                  </motion.div>
                );
              })}

              {/* Duplicate for seamless loop */}
              {logos.map((logo, i) => {
                const Icon = logo.icon;
                return (
                  <div
                    key={`logo-duplicate-${i}`}
                    className="flex-[0_0_auto] min-w-[200px] px-4"
                  >
                    <div className="group flex flex-col items-center gap-3 p-6 rounded-lg hover:bg-background/50 transition-all duration-300 hover:scale-105">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" />
                      </motion.div>
                      <span className="text-sm font-semibold text-muted-foreground text-center group-hover:text-primary transition-colors">
                        {logo.name}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}