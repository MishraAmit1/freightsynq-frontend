"use client";
import { useState, useEffect } from "react";
import { Truck, Menu, X, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/integrations", label: "Integrations" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  interface ToggleMenuEvent {
    preventDefault: () => void;
    stopPropagation: () => void;
  }

  const toggleMenu = (e: ToggleMenuEvent): void => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-14 sm:h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-1.5 sm:gap-2 font-bold text-base sm:text-lg"
          >
            <Truck className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
            <span className="text-foreground">Freight</span>
            <span className="text-primary">Sync</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-6 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <Button
              size="sm"
              className="lg:size-default bg-black hover:bg-gray-800 text-white border-0"
              asChild
            >
              <Link href="/contact">Book a Free Demo</Link>
            </Button>
          </div>

          {/* Mobile Hamburger - Enhanced */}
          <button
            type="button"
            onClick={toggleMenu}
            className="md:hidden p-2 -mr-2 rounded-xl hover:bg-accent/80 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200 z-50 relative active:scale-95"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <div className="relative w-5 h-5 sm:w-6 sm:h-6">
              <Menu
                className={`absolute inset-0 transition-all duration-300 ${isOpen ? 'rotate-90 opacity-0 scale-0' : 'rotate-0 opacity-100 scale-100'
                  }`}
              />
              <X
                className={`absolute inset-0 transition-all duration-300 ${isOpen ? 'rotate-0 opacity-100 scale-100' : '-rotate-90 opacity-0 scale-0'
                  }`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Menu Backdrop - Enhanced */}
      <div
        className={`md:hidden fixed inset-0 bg-gradient-to-b from-black/60 to-black/40 backdrop-blur-md z-40 transition-all duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Sliding Menu from Top - Premium Design */}
      <div
        className={`md:hidden fixed left-0 right-0 top-14 sm:top-16 z-50 px-4 transform transition-all duration-500 ease-out ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
          }`}
      >
        <div className="mt-3 bg-gradient-to-br from-background via-background to-accent/5 rounded-3xl shadow-2xl border border-border/50 overflow-hidden backdrop-blur-xl">
          {/* Decorative top bar */}
          <div className="h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50" />

          <nav className="flex flex-col p-4">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative py-4 px-5 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all text-lg font-medium transform duration-500 ease-out overflow-hidden ${isOpen
                  ? 'translate-x-0 opacity-100'
                  : '-translate-x-12 opacity-0'
                  }`}
                style={{
                  transitionDelay: isOpen ? `${index * 80 + 150}ms` : '0ms'
                }}
                onClick={() => setIsOpen(false)}
              >
                {/* Hover background effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />

                {/* Content */}
                <div className="relative flex items-center justify-between">
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </div>

                {/* Bottom border */}
                {index < navLinks.length - 1 && (
                  <div className="absolute bottom-0 left-5 right-5 h-px bg-gradient-to-r from-transparent via-border/30 to-transparent" />
                )}
              </Link>
            ))}

            {/* Mobile CTA - Premium */}
            <div
              className={`px-3 pb-3 pt-5 transform transition-all duration-500 ease-out ${isOpen
                ? 'translate-y-0 opacity-100'
                : 'translate-y-8 opacity-0'
                }`}
              style={{
                transitionDelay: isOpen ? '450ms' : '0ms'
              }}
            >
              <Button
                className="w-full bg-gradient-to-r from-gray-900 to-black hover:from-black hover:to-gray-900 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-12 text-base font-semibold group"
                asChild
              >
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  <span>Book a Free Demo</span>
                  <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}