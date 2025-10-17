import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Building, Users, Lightbulb } from "lucide-react";
import { ScrollAnimation } from "@/components/ui/scroll-animation";

const teamMembers = [
  {
    name: "Rohan Singh",
    role: "Co-Founder & CEO",
    bio: "With 15 years in his family's transport business, Rohan experienced the chaos firsthand. He's passionate about building tools that solve real-world problems for transporters.",
    imageId: "team-rohan",
  },
  {
    name: "Aditi Sharma",
    role: "Co-Founder & CTO",
    bio: "A tech-innovator with a background in building scalable logistics platforms, Aditi is the chief architect behind Freight Sync's powerful and reliable technology.",
    imageId: "team-aditi",
  },
];

const values = [
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: "Transporter-First",
    description:
      "We build for the people who run the show. Our features are designed based on feedback from fleet owners, dispatchers, and drivers on the ground.",
  },
  {
    icon: <Building className="w-8 h-8 text-primary" />,
    title: "Built for India",
    description:
      "From navigating local regulations to handling complex billing cycles, our platform is tailored for the unique challenges of the Indian market.",
  },
  {
    icon: <Lightbulb className="w-8 h-8 text-primary" />,
    title: "Radical Simplicity",
    description:
      "We believe powerful technology should be easy to use. Our interface is intuitive, requires minimal training, and works even in low-connectivity areas.",
  },
];

export default function AboutPage() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "about-hero");
  const rohanImage = PlaceHolderImages.find((img) => img.id === "team-rohan");
  const aditiImage = PlaceHolderImages.find((img) => img.id === "team-aditi");

  return (
    <div>
      <div className="bg-black py-8 md:py-12">
        <div className="container max-w-7xl px-4 md:px-8 text-left">
          <h1 className="text-white text-3xl md:text-5xl font-normal font-headline tracking-tight">
            The Digital Backbone for Indian Logistics
          </h1>
          <p className="mt-2 text-base md:text-lg text-blue-200 max-w-2xl">
            We are a team of transport veterans and tech innovators obsessed with
            solving the on-ground challenges of fleet owners.
          </p>
        </div>
      </div>

      <div className="py-12 md:py-20">
        <div className="container mx-auto max-w-7xl px-4 md:px-8">
          {/* Our Story Section */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-20 md:mb-32">
            {heroImage && (
              <div className="rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={heroImage.imageUrl}
                  alt={heroImage.description}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  data-ai-hint={heroImage.imageHint}
                />
              </div>
            )}
            <div className="prose prose-lg text-foreground max-w-none">
              <h2 className="text-3xl font-bold font-headline">Our Story</h2>
              <p className="text-muted-foreground">
                Freight Sync was born out of frustration. After spending years
                in the transport industry, our founders grew tired of the endless
                phone calls, lost paperwork, and data scattered across Excel
                sheets and WhatsApp groups. They saw a critical gap: a lack of
                simple, powerful tools designed for the reality of Indian
                transport.
              </p>
              <p className="text-muted-foreground">
                They decided to build what they couldn't find—a single platform
                that connects every part of the operation, from the driver on the
                highway to the accountant in the office. Freight Sync isn't just
                another software; it's a solution built from on-the-ground
                experience to bring order to the chaos.
              </p>
            </div>
          </div>

          {/* Our Values Section */}
          <section className="mb-20 md:mb-32">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold font-headline">
                What Drives Us
              </h2>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, i) => (
                <div
                  key={value.title}
                  className="text-center p-6 rounded-lg bg-card/50"
                >
                  <div className="inline-block p-4 bg-primary/10 rounded-lg mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold font-headline mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Meet the Team Section */}
          <section className="text-center mb-20 md:mb-32">
            <div>
              <h2 className="text-3xl font-bold font-headline">
                Meet the Founders
              </h2>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-4xl mx-auto">
              {teamMembers.map((member, i) => (
                <div
                  key={member.name}
                  className="flex flex-col items-center text-center"
                >
                  <Avatar className="w-32 h-32 mb-4 border-4 border-primary/20">
                    <AvatarImage
                      src={
                        PlaceHolderImages.find(
                          (img) => img.id === member.imageId
                        )?.imageUrl
                      }
                      alt={member.name}
                      data-ai-hint="portrait person"
                    />
                    <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-bold font-headline">
                    {member.name}
                  </h3>
                  <p className="text-primary font-semibold">{member.role}</p>
                  <p className="mt-2 text-muted-foreground">{member.bio}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Join Us CTA */}
          <div className="text-center bg-accent/50 rounded-lg py-16">
            <h2 className="text-3xl font-bold font-headline">
              Join Our Mission
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              We're always looking for passionate people to help us revolutionize
              the transport industry. If you're excited by our mission, we'd
              love to hear from you.
            </p>
            <div className="mt-8 flex gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/careers">View Open Positions</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}