import { Truck, Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const footerLinks = {
  Product: [
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
    { name: "Integrations", href: "/integrations" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Case Studies", href: "/blog" },
  ],
  Company: [
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
    { name: "Partners", href: "/partners" },
  ],
  Resources: [
    { name: "Blog", href: "/blog" },
    { name: "Help Center", href: "/help" },
    { name: "FAQs", href: "/pricing#faq" },
    { name: "API Docs", href: "/docs" },
  ],
};

const socialLinks = [
  { name: "LinkedIn", href: "#", Icon: Linkedin },
  { name: "Twitter", href: "#", Icon: Twitter },
  { name: "Facebook", href: "#", Icon: Facebook },
  { name: "Instagram", href: "#", Icon: Instagram },
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 border-t border-gray-800">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-12 md:py-16">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">

          {/* Logo + Info - Full width on mobile, 4 cols on desktop */}
          <div className="md:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <Truck className="h-7 w-7 text-[#FF6B35] group-hover:text-[#FF8C42] transition-colors" />
              <span className="font-bold text-xl text-white">Freight Sync</span>
            </Link>

            <p className="text-sm text-gray-400 max-w-xs leading-relaxed">
              The all-in-one platform for modern transport businesses in India. Manage LRs, bookings, tracking, and billing effortlessly.
            </p>

            {/* Contact Info */}
            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-[#FF6B35]" />
                <a href="mailto:support@freightsync.com" className="hover:text-white transition-colors">
                  support@freightsync.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 text-[#FF6B35]" />
                <a href="tel:+911234567890" className="hover:text-white transition-colors">
                  +91 123 456 7890
                </a>
              </div>
              <div className="flex items-start gap-2 text-sm">
                <MapPin className="h-4 w-4 text-[#FF6B35] mt-0.5" />
                <span>Mumbai, Maharashtra, India</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              {socialLinks.map(({ name, href, Icon }) => (
                <a
                  key={name}
                  href={href}
                  className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-[#FF6B35] flex items-center justify-center transition-all duration-200 hover:scale-110 group"
                  aria-label={name}
                >
                  <Icon className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links Section - 3 columns on mobile, auto on desktop */}
          <div className="grid grid-cols-3 gap-6 md:col-span-6 md:grid-cols-3 md:gap-8">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="font-semibold text-white text-xs md:text-sm uppercase tracking-wider mb-3 md:mb-4">
                  {title}
                </h3>
                <ul className="space-y-2 md:space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-xs md:text-sm text-gray-400 hover:text-[#FF6B35] transition-colors inline-flex items-center group"
                      >
                        <span className="group-hover:translate-x-1 transition-transform duration-200">
                          {link.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter - Full width on mobile, 2 cols on desktop */}
          <div className="md:col-span-2">
            <h3 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Newsletter
            </h3>
            <p className="text-sm text-gray-400 mb-4 leading-relaxed">
              Get weekly insights on transport tech & automation.
            </p>
            <form className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-500 focus:border-[#FF6B35] focus:ring-[#FF6B35]"
              />
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] hover:from-[#FF8C42] hover:to-[#FF6B35] text-white font-semibold transition-all duration-300"
              >
                Subscribe
              </Button>
            </form>
            <p className="text-xs text-gray-500 mt-3">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 md:my-12 border-t border-gray-800" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-gray-500 text-center md:text-left">
            &copy; {new Date().getFullYear()} Freight Sync Technologies Pvt. Ltd. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-[#FF6B35] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-400 hover:text-[#FF6B35] transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/cookies"
              className="text-gray-400 hover:text-[#FF6B35] transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}