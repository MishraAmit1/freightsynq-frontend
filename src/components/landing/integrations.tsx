"use client";

import { motion } from "framer-motion";
import {
  FileSpreadsheet,
  MessageCircle,
  MapPin,
  BookOpen,
  BarChart3,
  Cloud,
  Database,
  Calculator,
  Plug,
  CheckCircle
} from "lucide-react";

const integrations = [
  { name: "Tally", icon: Calculator, description: "Accounting sync" },
  { name: "Google Sheets", icon: FileSpreadsheet, description: "Data export" },
  { name: "WhatsApp", icon: MessageCircle, description: "Instant updates" },
  { name: "GPS Trackers", icon: MapPin, description: "Live tracking" },
  { name: "Zoho Books", icon: BookOpen, description: "Invoice management" },
  { name: "Power BI", icon: BarChart3, description: "Analytics & reports" },
  { name: "Amazon S3", icon: Cloud, description: "Cloud storage" },
  { name: "Databricks", icon: Database, description: "Data warehouse" },
];

export default function Integrations() {
  return (
    <section id="integrations" className="py-20 md:py-28 bg-gradient-to-b from-accent/30 to-background">
      <div className="container max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 mb-6">
            <Plug className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Integrations</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Works With Your{" "}
            <span className="text-primary">
              Existing Tools
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Freight Sync connects seamlessly with your favorite tools.
            No need to change your workflow.
          </p>
        </motion.div>

        {/* Integration Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {integrations.map((integration, i) => {
            const Icon = integration.icon;
            return (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="relative h-full bg-card border rounded-2xl p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-300 overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-500" />

                  {/* Content */}
                  <div className="relative">
                    {/* Icon */}
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>

                    {/* Name */}
                    <h3 className="font-semibold text-lg mb-1">
                      {integration.name}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground">
                      {integration.description}
                    </p>

                    {/* Connected Status */}
                    <div className="flex items-center gap-1 mt-3 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      <CheckCircle className="w-3 h-3" />
                      <span className="text-xs font-medium">Connected</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="inline-flex items-center gap-4 p-4 rounded-2xl bg-primary/5 border border-primary/20">
            <div className="flex -space-x-2">
              {[FileSpreadsheet, MessageCircle, MapPin].map((Icon, i) => (
                <div
                  key={i}
                  className="w-8 h-8 bg-primary rounded-full flex items-center justify-center border-2 border-background"
                >
                  <Icon className="w-4 h-4 text-primary-foreground" />
                </div>
              ))}
            </div>
            <p className="text-sm font-medium">
              <span className="text-primary font-semibold">100+ integrations</span> available
            </p>
          </div>

          <p className="mt-4 text-sm text-muted-foreground">
            Don't see your tool? <button className="text-primary font-medium hover:underline">Request integration →</button>
          </p>
        </motion.div>
      </div>
    </section>
  );
}