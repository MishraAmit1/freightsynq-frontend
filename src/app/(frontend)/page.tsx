import AiDriven from "@/components/landing/ai-driven";
import CommonQuestions from "@/components/landing/common-questions";
import DashboardPreview from "@/components/landing/dashboard-preview";
import FeaturedOn from "@/components/landing/featured-on";
import FinalCta from "@/components/landing/final-cta";
import FloatingCta from "@/components/landing/floating-cta";
import Hero from "@/components/landing/hero";
import Integrations from "@/components/landing/integrations";
import LatestInsights from "@/components/landing/latest-insights";
import Testimonials from "@/components/landing/testimonials";
import TrustedBy from "@/components/landing/trusted-by";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <main className="flex-grow">
        <Hero />
        <DashboardPreview />
        <TrustedBy />
        <CommonQuestions />
        <AiDriven />
        <Testimonials />
        <Integrations />
        {/* <FeaturedOn /> */}
        <LatestInsights />
        <FinalCta />
      </main>
      <FloatingCta />
    </div>
  );
}
