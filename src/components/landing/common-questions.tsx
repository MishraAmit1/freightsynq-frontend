"use client";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote, Sparkles, HelpCircle } from "lucide-react";

const questions = [
  "Has the LR reached the client or not?",
  "Which driver has the POD?",
  "How much advance has been paid for this trip?",
  "Is this load billed or pending?",
  "Where is the vehicle right now?",
  "Which client payments are still due?",
  "Why are my reports not matching with Tally?",
];

export default function CommonQuestions() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "0px", amount: 0.2 });

  const autoplay = useRef(
    Autoplay({
      delay: 2500,
      stopOnInteraction: false,
      stopOnMouseEnter: true
    })
  );

  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      skipSnaps: false
    },
    [autoplay.current]
  );

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 bg-background overflow-hidden"
    >
      <div className="container max-w-6xl px-4 mx-auto text-center">
        {/* Badge */}
        <motion.div
          className="flex justify-center mb-6"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10">
            <HelpCircle className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Common Challenges</span>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
            Do you know where your freight data really stands?
          </h2>
          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            There's no single source of truth in most transport businesses today.
            We all know it takes tight coordination between dispatch, drivers, and accounts to run smoothly —
            but how do you maintain that when every team works on different tools?
          </motion.p>
        </motion.div>

        {/* Subheading */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <h3 className="text-2xl font-bold font-headline">
            Common Questions Transporters Ask Daily
          </h3>
        </motion.div>

        {/* Carousel */}
        <motion.div
          className="mt-8 relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.9 }}
        >
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {questions.map((q, index) => (
                <motion.div
                  key={q}
                  className="flex-[0_0_auto] mx-3"
                  whileHover={{ scale: 1.05, y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="relative rounded-2xl bg-card border hover:border-primary/50 shadow-lg p-8 w-[3in] h-[4in] flex flex-col justify-between group hover:shadow-2xl transition-all duration-500 overflow-hidden">
                    {/* Glow effect on hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    />

                    {/* Floating sparkle */}
                    <motion.div
                      className="absolute top-4 right-4 opacity-0 group-hover:opacity-100"
                      animate={{
                        y: [0, -10, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <Sparkles className="w-4 h-4 text-primary/60" />
                    </motion.div>

                    {/* Quote Icon with rotation */}
                    <motion.div
                      whileHover={{ rotate: 180, scale: 1.2 }}
                      transition={{ duration: 0.4 }}
                    >
                      <Quote className="w-8 h-8 text-primary/30 rotate-180" />
                    </motion.div>

                    {/* Question Text */}
                    <div className="flex-1 flex items-center relative z-10">
                      <h3 className="text-xl font-semibold leading-relaxed text-foreground group-hover:text-primary transition-colors duration-300">
                        {q}
                      </h3>
                    </div>

                    {/* Bottom Accent */}
                    <div className="flex items-center gap-2 relative z-10">
                      <motion.div
                        className="h-1 bg-primary rounded-full"
                        initial={{ width: 48 }}
                        whileHover={{ width: 80 }}
                        transition={{ duration: 0.3 }}
                      />
                      <span className="text-sm text-muted-foreground">
                        Daily Challenge #{index + 1}
                      </span>
                    </div>

                    {/* Bottom gradient line */}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-orange-500 to-primary"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.4 }}
                      style={{ transformOrigin: "left" }}
                    />

                    {/* Corner decoration */}
                    <motion.div
                      className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -mr-12 -mt-12"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Footer text with Nike swoosh */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 1.2 }}
        >
        </motion.div>

      </div>
    </section>
  );
}