import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function FinalCta() {
  return (
    <section className="bg-white">
      <div className="container mx-auto max-w-7xl px-4 py-12 sm:py-16 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-900 px-4 py-12 sm:px-16 sm:py-20 text-center shadow-2xl rounded-2xl">

          {/* Headline */}
          <h2 className="mx-auto max-w-2xl text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-white">
            Stop managing your transport business like it's 2005. Let Freight Sync handle the chaos.
          </h2>

          {/* Subtext */}
          <p className="mx-auto mt-4 sm:mt-6 max-w-xl text-sm sm:text-base md:text-lg leading-6 sm:leading-7 text-gray-300">
            In just 7 days, you'll know where every truck, every LR, and every payment stands.
          </p>

          {/* Buttons */}
          <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-x-6">
            <Button
              size="lg"
              asChild
              className="w-full sm:w-auto bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] text-white font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <Link href="/contact">Book a Free Demo</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="w-full sm:w-auto bg-transparent text-white hover:bg-white/10 hover:text-white border-white mt-3 sm:mt-0"
            >
              <Link href="/contact">Talk to Product Expert</Link>
            </Button>
          </div>

          {/* Footer note */}
          <p className="mt-4 sm:mt-6 text-xs sm:text-sm text-gray-400">
            Works for single-branch and multi-location networks.
          </p>

          {/* Background SVG */}
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 w-[200vw] h-[200vw] sm:w-[64rem] sm:h-[64rem] -translate-x-1/2"
            aria-hidden="true"
          >
            <circle cx={512} cy={512} r={512} fill="url(#final-cta-gradient)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="final-cta-gradient">
                <stop stopColor="#FF6B35" />
                <stop offset={1} stopColor="#2B2B2B" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
}