"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import DotGrid from "@/components/ui/dot-grid";

export default function Hero() {
  const words = ["simple.", "organized.", "automated."];

  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [pause, setPause] = useState(false);

  // Find the longest word for width calculation
  const longestWord = words.reduce((a, b) => a.length > b.length ? a : b, "");

  useEffect(() => {
    if (pause) return;

    const currentWord = words[wordIndex];
    const typingSpeed = isDeleting ? 60 : 120;

    const handleTyping = () => {
      if (!isDeleting && displayText.length < currentWord.length) {
        setDisplayText(currentWord.slice(0, displayText.length + 1));
      } else if (!isDeleting && displayText.length === currentWord.length) {
        setPause(true);
        setTimeout(() => setIsDeleting(true), 1000);
        setTimeout(() => setPause(false), 1000);
      } else if (isDeleting && displayText.length > 0) {
        setDisplayText(currentWord.slice(0, displayText.length - 1));
      } else if (isDeleting && displayText.length === 0) {
        setIsDeleting(false);
        setPause(true);
        setTimeout(() => {
          setWordIndex((prev) => (prev + 1) % words.length);
          setPause(false);
        }, 200);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, wordIndex, pause, words]);

  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Interactive Dot Grid Background - DARKER & MORE VISIBLE */}
      <div className="absolute inset-0">
        <DotGrid
          dotSize={5}
          gap={15}
          baseColor="#FF8C42"
          activeColor="#000000"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
          className="opacity-30" // Increased opacity
        />
      </div>

      {/* Lighter gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 to-accent/20" />

      {/* Subtle radial gradient for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(var(--background)/0.8)_100%)]" />

      {/* Main Content */}
      <div className="container mx-auto max-w-7xl px-4 md:px-8 relative z-10">
        <div className="flex justify-center">
          <div className="max-w-4xl text-center">
            <h1 className="text-4xl md:text-6xl font-headline tracking-tight text-foreground">
              <span className="font-light">Tired of messy bookings?</span>{" "}
              <br className="hidden md:block" />
              <span className="font-semibold">
                Make your transport operations{" "}
                <br className="md:hidden" />
                <span className="inline-block relative ml-1">
                  {/* Invisible placeholder to maintain width */}
                  <span className="invisible">{longestWord}</span>
                  {/* Actual typing text - positioned absolute */}
                  <span className="absolute left-0 top-0 inline-flex items-center">
                    <span
                      className="bg-gradient-to-r from-primary to-yellow-400 bg-clip-text text-transparent transition-all duration-300 ease-in-out"
                      aria-live="polite"
                    >
                      {displayText}
                    </span>
                    {/* Fixed height cursor */}
                    <span
                      className="ml-1 w-[3px] bg-primary inline-block animate-blink"
                      style={{ height: '0.8em' }}
                      aria-hidden="true"
                    />
                  </span>
                </span>
              </span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-muted-foreground">
              Freight Sync keeps your LRs, bookings, dispatches, tracking, and
              billing all in one place — so you can focus on growth, not
              paperwork.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Book a Free Demo</Link>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/features">Watch How It Works</Link>
              </Button>
            </div>

            <p className="mt-4 text-sm text-muted-foreground">
              Trusted by 500+ fleet owners across India.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}