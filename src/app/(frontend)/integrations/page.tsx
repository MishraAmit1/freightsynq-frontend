import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { ArrowRight, BookOpen, Share2, Bot, Database } from "lucide-react";

const integrationCategories = [
  {
    category: "Accounting & ERP",
    icon: <BookOpen className="w-8 h-8 text-primary" />,
    integrations: [
      {
        name: "Tally",
        description:
          "Automate invoicing and financial entries by syncing trip data directly into Tally.",
      },
      {
        name: "Zoho Books",
        description:
          "Connect your freight operations with your Zoho accounting for seamless financial management.",
      },
      {
        name: "SAP",
        description:
          "Integrate with your enterprise SAP system for unified data across your entire organization.",
      },
    ],
  },
  {
    category: "Communication & GPS",
    icon: <Share2 className="w-8 h-8 text-primary" />,
    integrations: [
      {
        name: "WhatsApp",
        description:
          "Send automated trip updates, LR copies, and POD confirmations to clients and stakeholders.",
      },
      {
        name: "GPS Trackers",
        description:
          "Sync with leading GPS providers to get real-time vehicle location data on your dashboard.",
      },
      {
        name: "Google Maps",
        description:
          "Visualize your fleet's location, plan routes, and track progress with Google Maps.",
      },
    ],
  },
  {
    category: "Business Intelligence & Data",
    icon: <Database className="w-8 h-8 text-primary" />,
    integrations: [
      {
        name: "Google Sheets",
        description:
          "Export operational and financial reports directly to Google Sheets for custom analysis.",
      },
      {
        name: "Power BI",
        description:
          "Connect your Freight Sync data to Power BI to create powerful, custom business intelligence dashboards.",
      },
      {
        name: "Amazon S3",
        description:
          "Securely backup and archive all your documents, like PODs and invoices, to Amazon S3.",
      },
      {
        name: "Databricks",
        description:
          "Leverage your logistics data in Databricks for advanced analytics and machine learning models.",
      },
    ],
  },
  {
    category: "Custom & AI",
    icon: <Bot className="w-8 h-8 text-primary" />,
    integrations: [
      {
        name: "Freight Sync AI",
        description:
          "Our AI module integrates with all your data to provide predictive insights and operational alerts.",
      },
      {
        name: "API Access",
        description:
          "Build custom integrations and workflows with our powerful developer API to connect any tool you need.",
      },
    ],
  },
];

export default function IntegrationsPage() {
  return (
    <div>
      <div className="bg-black py-8 md:py-12">
        <div className="container max-w-7xl px-4 md:px-8 text-left">
          <h1 className="text-white text-3xl md:text-5xl font-normal font-headline tracking-tight">
            Seamlessly Connected, Powerfully Integrated
          </h1>
          <p className="mt-2 text-base md:text-lg text-blue-200 max-w-2xl">
            Freight Sync works with the tools you already use, creating a
            single, automated workflow from dispatch to final accounting.
          </p>
        </div>
      </div>

      <div className="py-12 md:py-20">
        <div className="container mx-auto max-w-7xl px-4 md:px-8">
          <div className="space-y-16">
            {integrationCategories.map((category) => (
              <section key={category.category}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="inline-block p-3 bg-primary/10 rounded-lg">
                    {category.icon}
                  </div>
                  <h2 className="text-3xl font-bold font-headline">
                    {category.category}
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.integrations.map((integration, i) => (
                    <div
                      key={integration.name}
                    >
                      <Card className="flex flex-col h-full">
                        <CardHeader>
                          <CardTitle className="font-headline text-xl">
                            {integration.name}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow">
                          <p className="text-muted-foreground">
                            {integration.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div
            className="text-center bg-accent/50 rounded-lg py-16 mt-24"
          >
            <h2 className="text-3xl font-bold font-headline">
              Don't See Your Tool?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              We're constantly adding new integrations. If you don't see a tool
              you need, our team can work with you to build a custom
              connection.
            </p>
            <div className="mt-8">
              <Button size="lg">
                Request an Integration <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
