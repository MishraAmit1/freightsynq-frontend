"use client";

import { useState, useRef } from "react";
import { submitContactForm, contactReasons } from "@/lib/api/contact";
import toast from 'react-hot-toast';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Mail,
  Phone,
  MessageSquare,
  ArrowRight,
  Calendar,
  Clock,
  Users,
  Building2,
  Check,
  Loader2,
  Sparkles
} from "lucide-react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

const quickContacts = [
  {
    icon: <Phone className="w-5 h-5" />,
    title: "Call Us",
    value: "+91 98765 43210",
    description: "Mon-Sat, 9 AM - 7 PM",
    action: "tel:+919876543210"
  },
  {
    icon: <Mail className="w-5 h-5" />,
    title: "Email Us",
    value: "hello@freightsync.in",
    description: "We'll respond within 24 hours",
    action: "mailto:hello@freightsync.in"
  },
  {
    icon: <MessageSquare className="w-5 h-5" />,
    title: "WhatsApp",
    value: "+91 98765 43210",
    description: "Quick support on WhatsApp",
    action: "https://wa.me/919876543210"
  }
];

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    fleetSize: "",
    reason: "demo" as 'demo' | 'sales' | 'support' | 'other',
    message: ""
  });

  const heroRef = useRef(null);
  const quickContactRef = useRef(null);
  const formRef = useRef(null);
  const ctaRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, margin: "0px", amount: 0.3 });
  const quickContactInView = useInView(quickContactRef, { once: true, margin: "0px", amount: 0.3 });
  const formInView = useInView(formRef, { once: true, margin: "0px", amount: 0.1 });
  const ctaInView = useInView(ctaRef, { once: true, margin: "0px", amount: 0.3 });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }

    setLoading(true);

    // Show loading toast
    const loadingToast = toast.loading("Sending your message...");

    try {
      // Prepare data for API
      const apiData = {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        fleet_size: formData.fleetSize,
        reason: formData.reason,
        message: formData.message,
        source: 'Website Contact Page'
      };

      // Submit to backend
      const result = await submitContactForm(apiData);

      if (result.success) {
        // Success
        toast.success("Message sent successfully! We'll get back to you soon.", {
          id: loadingToast,
          duration: 5000
        });

        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          company: "",
          fleetSize: "",
          reason: "demo",
          message: ""
        });

        // Optional: Track conversion
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'form_submit', {
            event_category: 'Contact',
            event_label: formData.reason
          });
        }
      } else {
        // Error
        toast.error(result.error || "Failed to send message. Please try again.", {
          id: loadingToast
        });
      }
    } catch (error) {
      console.error('Contact form error:', error);
      toast.error("Something went wrong! Please try calling us directly.", {
        id: loadingToast
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div ref={heroRef} className="bg-gradient-to-br from-gray-900 via-gray-800 to-black py-16 md:py-24 overflow-hidden">
        <div className="container max-w-7xl px-4 md:px-8">
          <div className="max-w-3xl">
            <motion.h1
              className="text-white text-4xl md:text-6xl font-bold font-headline tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <motion.span
                className="block"
                initial={{ opacity: 0, x: -20 }}
                animate={heroInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Let's Get Started
              </motion.span>
              <span className="relative inline-block">
                <motion.span
                  className="bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] bg-clip-text text-transparent font-black"
                  initial={{ opacity: 0, y: 20 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  Together
                </motion.span>

                {/* Nike Swoosh */}
                <svg
                  className="absolute -bottom-3 left-0 w-full h-8 z-0"
                  viewBox="0 0 200 30"
                  preserveAspectRatio="none"
                >
                  <motion.path
                    d="M 0 20 Q 50 8, 100 12 T 200 8"
                    stroke="url(#contact-gradient)"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={heroInView ? { pathLength: 1 } : { pathLength: 0 }}
                    transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
                  />
                  <defs>
                    <linearGradient id="contact-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#FF6B35" />
                      <stop offset="100%" stopColor="#FF8C42" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Sparkle */}
                <motion.span
                  className="absolute -top-2 -right-3 inline-block"
                  initial={{ scale: 0, rotate: 0 }}
                  animate={heroInView ? { scale: 1, rotate: 360 } : {}}
                  transition={{ duration: 0.6, delay: 1.4, type: "spring" }}
                >
                  <Sparkles className="w-5 h-5 text-[#FF8C42]" />
                </motion.span>
              </span>
            </motion.h1>

            <motion.p
              className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Have questions about Freight Sync? Want to see a demo?
              We're here to help you transform your transport business.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
            >
              {[
                { icon: Clock, text: "Response within 2 hours" },
                { icon: Calendar, text: "Demo available today" },
                { icon: Users, text: "Expert team" }
              ].map((item, index) => (
                <motion.div
                  key={item.text}
                  className="flex items-center gap-2 text-gray-400"
                  initial={{ opacity: 0, x: -20 }}
                  animate={heroInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 1.2 + (index * 0.1) }}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Quick Contact Cards */}
      <div ref={quickContactRef} className="py-16 bg-white border-b overflow-hidden">
        <div className="container mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickContacts.map((contact, index) => (
              <motion.div
                key={contact.title}
                initial={{ opacity: 0, y: 30 }}
                animate={quickContactInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + (index * 0.15) }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Card className="hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <motion.div
                        className="p-3 bg-gradient-to-br from-[#FF6B35]/10 to-[#FF8C42]/10 rounded-lg text-[#FF6B35]"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        {contact.icon}
                      </motion.div>
                      <div className="flex-grow">
                        <h3 className="font-semibold mb-1">{contact.title}</h3>
                        <a
                          href={contact.action}
                          className="text-[#FF6B35] font-medium hover:underline"
                        >
                          {contact.value}
                        </a>
                        <p className="text-sm text-muted-foreground mt-1">
                          {contact.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Contact Section */}
      <div ref={formRef} className="py-20 md:py-32 bg-gray-50 overflow-hidden">
        <div className="container mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, x: -50 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-headline">Send us a Message</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and our team will get back to you shortly
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Fields */}
                    <motion.div
                      className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={formInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.4 }}
                    >
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          placeholder="Enter your first name"
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          required
                          disabled={loading}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          placeholder="Enter your last name"
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          required
                          disabled={loading}
                        />
                      </div>
                    </motion.div>

                    {/* Contact Fields */}
                    <motion.div
                      className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={formInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.5 }}
                    >
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          disabled={loading}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          required
                          disabled={loading}
                        />
                      </div>
                    </motion.div>

                    {/* Company Fields */}
                    <motion.div
                      className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={formInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.6 }}
                    >
                      <div className="space-y-2">
                        <Label htmlFor="company">Company Name</Label>
                        <Input
                          id="company"
                          placeholder="Your company name"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          disabled={loading}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="fleetSize">Fleet Size</Label>
                        <select
                          id="fleetSize"
                          className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm"
                          value={formData.fleetSize}
                          onChange={(e) => setFormData({ ...formData, fleetSize: e.target.value })}
                          disabled={loading}
                        >
                          <option value="">Select fleet size</option>
                          <option value="1-10 vehicles">1-10 vehicles</option>
                          <option value="10-50 vehicles">10-50 vehicles</option>
                          <option value="50-100 vehicles">50-100 vehicles</option>
                          <option value="100+ vehicles">100+ vehicles</option>
                        </select>
                      </div>
                    </motion.div>

                    {/* Reason for Contact */}
                    <motion.div
                      className="space-y-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={formInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.7 }}
                    >
                      <Label>How can we help you? *</Label>
                      <RadioGroup
                        value={formData.reason}
                        onValueChange={(value: any) => setFormData({ ...formData, reason: value })}
                        disabled={loading}
                      >
                        <div className="grid grid-cols-2 gap-4">
                          {contactReasons.map((reason) => (
                            <div key={reason.value} className="flex items-center space-x-2">
                              <RadioGroupItem value={reason.value} id={reason.value} />
                              <Label htmlFor={reason.value} className="font-normal cursor-pointer">
                                {reason.label}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </RadioGroup>
                    </motion.div>

                    {/* Message */}
                    <motion.div
                      className="space-y-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={formInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.8 }}
                    >
                      <Label htmlFor="message">Your Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us more about your requirements..."
                        className="min-h-[120px]"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        disabled={loading}
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={formInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.9 }}
                    >
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-gradient-to-r from-[#FF6B35] to-[#FF8C42]"
                        disabled={loading}
                      >
                        {loading ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </>
                        )}
                      </Button>
                    </motion.div>

                    <p className="text-xs text-center text-muted-foreground">
                      By submitting this form, you agree to our{" "}
                      <Link href="/privacy" className="underline">Privacy Policy</Link>
                    </p>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Right Side Info */}
            <div className="lg:col-span-2 space-y-8">
              {/* Office Location */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={formInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Building2 className="w-5 h-5 text-[#FF6B35]" />
                      Head Office
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <p className="font-semibold mb-2">Address</p>
                        <p className="text-muted-foreground">
                          123 Logistics Lane, Transport Nagar,<br />
                          Bangalore, Karnataka 560001,<br />
                          India
                        </p>
                      </div>
                      <div>
                        <p className="font-semibold mb-2">Office Hours</p>
                        <p className="text-muted-foreground">
                          Monday - Saturday: 9:00 AM - 7:00 PM<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Why Choose Us */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={formInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.6 }}
              >
                <Card className="bg-gradient-to-br from-[#FF6B35]/5 to-[#FF8C42]/5 border-[#FF6B35]/20">
                  <CardHeader>
                    <CardTitle>Why Contact Us?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      { title: "Free Demo", desc: "See Freight Sync in action with your data" },
                      { title: "Expert Consultation", desc: "Get personalized advice for your business" },
                      { title: "Custom Pricing", desc: "Special packages for large fleets" },
                      { title: "Migration Support", desc: "We'll help move your existing data" }
                    ].map((item, index) => (
                      <motion.div
                        key={item.title}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={formInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.8 + (index * 0.1) }}
                      >
                        <Check className="w-5 h-5 text-[#FF6B35] mt-0.5" />
                        <div>
                          <p className="font-semibold">{item.title}</p>
                          <p className="text-sm text-muted-foreground">
                            {item.desc}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>

              {/* Map */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={formInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.8 }}
              >
                <Card>
                  <CardContent className="p-0">
                    <div className="aspect-video rounded-lg overflow-hidden">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.012573289233!2d77.59456231528652!3d12.97159869085593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b9b3f3%3A0x1d4bde4a4a5a2a2c!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1676458532431!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <section ref={ctaRef} className="bg-white overflow-hidden">
        <div className="container mx-auto max-w-7xl px-4 py-12 sm:py-16 lg:px-8">
          <motion.div
            className="relative isolate overflow-hidden bg-gray-900 px-4 py-12 sm:px-16 sm:py-20 text-center shadow-2xl rounded-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={ctaInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <motion.h2
              className="mx-auto max-w-2xl font-headline text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              Prefer a Quick Call?
            </motion.h2>

            <motion.p
              className="mx-auto mt-4 sm:mt-6 max-w-xl text-sm sm:text-base md:text-lg leading-6 sm:leading-7 text-gray-300"
              initial={{ opacity: 0 }}
              animate={ctaInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
            >
              Our transport experts are available to discuss your needs right now
            </motion.p>

            <motion.div
              className="mt-6 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
            >
              <Button
                size="lg"
                asChild
                className="w-full sm:w-auto bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] text-white font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                <a href="tel:+919876543210">
                  <Phone className="mr-2 w-4 h-4" />
                  Call Now: +91 98765 43210
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="w-full sm:w-auto bg-transparent text-white hover:bg-white/10 hover:text-white border-white mt-3 sm:mt-0"
              >
                <a href="https://wa.me/919876543210">
                  <MessageSquare className="mr-2 w-4 h-4" />
                  WhatsApp Us
                </a>
              </Button>
            </motion.div>

            <motion.p
              className="mt-4 sm:mt-6 text-xs sm:text-sm text-gray-400"
              initial={{ opacity: 0 }}
              animate={ctaInView ? { opacity: 1 } : {}}
              transition={{ delay: 1 }}
            >
              Available Mon-Sat, 9 AM - 7 PM IST
            </motion.p>

            <svg
              viewBox="0 0 1024 1024"
              className="absolute left-1/2 top-1/2 -z-10 w-[200vw] h-[200vw] sm:w-[64rem] sm:h-[64rem] -translate-x-1/2"
              aria-hidden="true"
            >
              <circle cx={512} cy={512} r={512} fill="url(#contact-cta-gradient)" fillOpacity="0.7" />
              <defs>
                <radialGradient id="contact-cta-gradient">
                  <stop stopColor="#FF6B35" />
                  <stop offset={1} stopColor="#2B2B2B" />
                </radialGradient>
              </defs>
            </svg>
          </motion.div>
        </div>
      </section>
    </div>
  );
}