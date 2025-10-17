import { Truck, Package, Zap, Globe, Shield } from "lucide-react";

const logos = [
  { name: "Shree Ganesh Roadways", icon: Truck },
  { name: "Om Freight Lines", icon: Package },
  { name: "Bharat Transport Co.", icon: Zap },
  { name: "Express Logistics", icon: Globe },
  { name: "Unity Freight", icon: Shield },
];

export default function TrustedBy() {
  return (
    <section className="py-20 md:py-28 bg-accent/50 overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase text-muted-foreground tracking-wider">
            Trusted by 500+ Fleet Owners
          </p>
        </div>

        {/* Infinite Scroll Container */}
        <div className="relative">
          {/* Scrolling Content */}
          <div className="flex animate-scroll">
            {/* First Set */}
            {logos.map((logo, i) => {
              const Icon = logo.icon;
              return (
                <div
                  key={`first-${i}`}
                  className="group flex flex-col items-center gap-3 p-6 rounded-lg hover:bg-background/50 transition-all duration-300 hover:scale-105 flex-shrink-0 w-[200px] mx-4"
                >
                  <Icon className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span className="text-sm font-semibold text-muted-foreground text-center group-hover:text-primary transition-colors">
                    {logo.name}
                  </span>
                </div>
              );
            })}

            {/* Duplicate Set for seamless loop */}
            {logos.map((logo, i) => {
              const Icon = logo.icon;
              return (
                <div
                  key={`second-${i}`}
                  className="group flex flex-col items-center gap-3 p-6 rounded-lg hover:bg-background/50 transition-all duration-300 hover:scale-105 flex-shrink-0 w-[200px] mx-4"
                >
                  <Icon className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span className="text-sm font-semibold text-muted-foreground text-center group-hover:text-primary transition-colors">
                    {logo.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}