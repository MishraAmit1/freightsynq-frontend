"use client";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

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
    <section className="py-20 md:py-28 bg-background overflow-hidden">
      <div className="container max-w-6xl px-4 mx-auto text-center">
        {/* Heading */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
            Do you know where your freight data really stands?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-16">
            There's no single source of truth in most transport businesses today.
            We all know it takes tight coordination between dispatch, drivers, and accounts to run smoothly —
            but how do you maintain that when every team works on different tools?
          </p>
        </div>

        {/* Subheading */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold font-headline">
            Common Questions Transporters Ask Daily
          </h3>
        </div>

        {/* Carousel */}
        <div className="mt-8 relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {questions.map((q, index) => (
                <motion.div
                  key={q}
                  className="flex-[0_0_auto] mx-3"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="relative rounded-2xl bg-card border shadow-lg p-8 w-[3in] h-[4in] flex flex-col justify-between group hover:shadow-xl transition-shadow">
                    {/* Quote Icon */}
                    <Quote className="w-8 h-8 text-primary/20 rotate-180" />

                    {/* Question Text */}
                    <div className="flex-1 flex items-center">
                      <h3 className="text-xl font-semibold leading-relaxed text-foreground">
                        {q}
                      </h3>
                    </div>

                    {/* Bottom Accent */}
                    <div className="flex items-center gap-2">
                      <div className="h-1 w-12 bg-primary rounded-full" />
                      <span className="text-sm text-muted-foreground">
                        Daily Challenge #{index + 1}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer text */}
        <div className="mt-12">
          <p className="text-xl md:text-2xl font-medium max-w-2xl mx-auto">
            Freight Sync brings clarity to all these questions —{" "}
            <span className="font-bold text-primary">instantly.</span>
          </p>
        </div>
      </div>
    </section>
  );
}