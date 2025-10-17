"use client";

import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function DashboardPreview() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotateAngle, setRotateAngle] = useState(90);
  const [scale, setScale] = useState(0.8);
  const [opacity, setOpacity] = useState(0.3);

  const image = PlaceHolderImages.find(
    (img) => img.id === "dashboard-preview-hero"
  );

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !containerRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // FASTER ANIMATION
      const startPoint = windowHeight * 0.85; // Start a bit later
      const endPoint = windowHeight * -0.15; // End earlier

      let scrollProgress = 0;

      if (rect.top > startPoint) {
        scrollProgress = 0;
      } else if (rect.top <= startPoint && rect.top >= endPoint) {
        scrollProgress = (startPoint - rect.top) / (startPoint - endPoint);
      } else {
        scrollProgress = 1;
      }

      // Smooth easing
      const easedProgress = scrollProgress < 0.5
        ? 2 * scrollProgress * scrollProgress
        : 1 - Math.pow(-2 * scrollProgress + 2, 2) / 2;

      // Update transformations
      setRotateAngle(90 - (easedProgress * 90));
      setScale(0.8 + (easedProgress * 0.2));
      setOpacity(0.3 + (easedProgress * 0.7));
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!image) return null;

  return (
    <section
      ref={sectionRef}
      className="relative py-12 md:py-20 lg:py-32"
      style={{ minHeight: "90vh" }}
    >
      <div
        ref={containerRef}
        className="min-h-[600px] md:min-h-screen flex flex-col justify-center overflow-hidden"
      >
        {/* Background gradient */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/10 to-background" /> */}

        {/* Floating particles */}
        {/* <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-2 h-2 bg-primary/20 rounded-full animate-pulse" />
          <div className="absolute top-40 right-20 w-3 h-3 bg-primary/30 rounded-full animate-pulse delay-300" />
          <div className="absolute bottom-30 left-1/4 w-2 h-2 bg-primary/20 rounded-full animate-pulse delay-700" />
        </div> */}

        <div className="container mx-auto max-w-7xl px-4 md:px-8 relative z-10">
          {/* Section heading - Always visible */}
          <div className="text-center mb-6 md:mb-12 lg:mb-16">
            <h2
              className="text-2xl md:text-4xl lg:text-5xl font-headline font-semibold text-foreground mb-3 md:mb-4 transition-opacity duration-500"
              style={{ opacity: Math.max(0.6, opacity) }}
            >
              Your Dashboard Comes to Life
            </h2>
            <p
              className="text-base md:text-lg text-muted-foreground transition-opacity duration-500"
              style={{ opacity: Math.max(0.5, opacity) }}
            >
              Watch as your messy operations transform into organized brilliance
            </p>
          </div>

          {/* Dashboard container */}
          <div
            className="relative flex justify-center items-center"
            style={{
              perspective: "2000px",
              minHeight: "300px"
            }}
          >
            {/* Glow effect */}
            <div
              className="absolute inset-0 blur-3xl pointer-events-none"
              style={{
                opacity: opacity * 0.5,
                transform: `scale(${1.2 - rotateAngle / 450})`
              }}
            />

            {/* Main dashboard */}
            <div
              className="relative transition-none w-full max-w-6xl"
              style={{
                transform: `
                  rotateX(${rotateAngle}deg) 
                  rotateZ(${rotateAngle / 30}deg)
                  scale(${scale})
                `,
                transformStyle: "preserve-3d",
                opacity: opacity,
                willChange: "transform, opacity"
              }}
            >
              {/* Shadow */}
              <div
                className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-full h-20 bg-black/20 blur-3xl pointer-events-none"
                style={{
                  transform: `scaleX(${1 - rotateAngle / 180}) translateZ(-50px)`,
                  opacity: 1 - rotateAngle / 90
                }}
              />

              {/* Dashboard frame */}
              <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-b from-slate-900 to-slate-800 p-1">
                {/* Browser bar */}
                <div className="bg-slate-800 rounded-t-xl md:rounded-t-2xl px-3 md:px-4 py-1.5 md:py-2 flex items-center gap-2">
                  <div className="flex gap-1 md:gap-1.5">
                    <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-500" />
                    <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-yellow-500" />
                    <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="bg-slate-700 rounded px-2 md:px-4 py-0.5 md:py-1 text-[10px] md:text-xs text-slate-300">
                      app.freightsync.com
                    </div>
                  </div>
                </div>

                {/* Dashboard image */}
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  width={1200}
                  height={675}
                  className="rounded-b-xl md:rounded-b-2xl w-full h-auto"
                  priority
                  data-ai-hint={image.imageHint}
                />
              </div>

              {/* Floating badges */}
              <div
                className="absolute -top-2 -right-2 md:-top-4 md:-right-4 bg-green-500 text-white px-2 py-0.5 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-semibold shadow-lg pointer-events-none"
                style={{
                  opacity: 1 - rotateAngle / 90,
                  transform: `translateZ(50px) scale(${1 - rotateAngle / 180})`
                }}
              >
                Live Tracking
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}