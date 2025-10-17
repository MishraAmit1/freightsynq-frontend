import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight, MapPin, Briefcase, Zap, Rocket } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { ScrollAnimation } from "@/components/ui/scroll-animation";

const perks = [
  {
    icon: <Zap className="w-8 h-8 text-primary" />,
    title: "Solve Real-World Problems",
    description:
      "Work on a product that directly impacts the efficiency and profitability of India’s transport industry. Your code will move actual trucks.",
  },
  {
    icon: <Rocket className="w-8 h-8 text-primary" />,
    title: "Fast-Paced Growth",
    description:
      "We're a small, agile team in a rapidly growing market. You'll have the opportunity to take on significant responsibility and grow with the company.",
  },
  {
    icon: <Briefcase className="w-8 h-8 text-primary" />,
    title: "Ownership & Impact",
    description:
      "We value autonomy and a bias for action. You’ll own your projects from start to finish and see the immediate impact of your work.",
  },
];

const openPositions = [
  {
    title: "Senior Full-Stack Engineer",
    location: "Remote (India)",
    department: "Engineering",
  },
  {
    title: "Product Manager - Logistics Tech",
    location: "Bangalore, India",
    department: "Product",
  },
  {
    title: "Customer Success Manager",
    location: "Mumbai, India",
    department: "Customer Success",
  },
];

export default function CareersPage() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "careers-hero");

  return (
    <div>
      <div className="bg-black py-8 md:py-12">
        <div className="container max-w-7xl px-4 md:px-8 text-left">
          <h1 className="text-white text-3xl md:text-5xl font-normal font-headline tracking-tight">
            Build the Future of Indian Logistics
          </h1>
          <p className="mt-2 text-base md:text-lg text-blue-200 max-w-2xl">
            We are on a mission to digitize the transport industry. If you are
            passionate about technology, logistics, and making a tangible
            impact, join us.
          </p>
        </div>
      </div>

      <div className="py-12 md:py-20">
        <div className="container mx-auto max-w-7xl px-4 md:px-8">
          {/* Image Section */}
          {heroImage && (
            <div className="rounded-xl overflow-hidden shadow-2xl shadow-primary/10 mb-20 md:mb-32">
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                width={1200}
                height={500}
                className="w-full h-auto object-cover"
                data-ai-hint={heroImage.imageHint}
              />
            </div>
          )}

          {/* Why Work With Us Section */}
          <section className="mb-20 md:mb-32">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold font-headline">
                Why Join Freight Sync?
              </h2>
            </div>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              {perks.map((perk, i) => (
                <div
                  key={perk.title}
                  className="text-center p-6 rounded-lg bg-card/50"
                >
                  <div className="inline-block p-4 bg-primary/10 rounded-lg mb-4">
                    {perk.icon}
                  </div>
                  <h3 className="text-xl font-bold font-headline mb-2">
                    {perk.title}
                  </h3>
                  <p className="text-muted-foreground">{perk.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Open Positions Section */}
          <section className="mb-20 md:mb-32">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold font-headline">
                Current Openings
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Find the role where you can make a difference.
              </p>
            </div>
            <div className="mt-12 max-w-4xl mx-auto space-y-6">
              {openPositions.map((position, i) => (
                <div
                  key={position.title}
                >
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center">
                      <div>
                        <h3 className="text-xl font-bold font-headline">
                          {position.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-2 text-muted-foreground text-sm">
                          <span className="flex items-center gap-1.5">
                            <Briefcase className="w-4 h-4" />{" "}
                            {position.department}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <MapPin className="w-4 h-4" /> {position.location}
                          </span>
                        </div>
                      </div>
                      <Button variant="outline" className="mt-4 sm:mt-0">
                        Apply Now <ArrowRight className="ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <p className="text-muted-foreground">
                Don't see a role that fits?{" "}
                <a
                  href="#"
                  className="font-semibold text-primary hover:underline"
                >
                  Send us your resume
                </a>
                .
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
