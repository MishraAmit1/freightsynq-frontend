"use client";
import { useState, useEffect, useCallback } from "react";
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
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [headerLoaded, setHeaderLoaded] = useState(false);

  // First load animation
  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => {
      setHeaderLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Handle scroll with debounce for smoothness
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isScrolled = window.scrollY > 50;
          setScrolled(isScrolled);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.touchAction = 'auto';
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.touchAction = 'auto';
    };
  }, [isOpen]);

  // Escape key support
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  const toggleMenu = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(prev => !prev);
  }, []);

  // IMPORTANT: Don't hide header initially to prevent layout shift
  // Remove this: if (!mounted) return null;

  return (
    <>
      {/* Main header wrapper - NO translate-y animation to prevent jump */}
      <header className="sticky top-0 z-50 w-full">
        <div className={`relative transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${scrolled ? 'py-3' : 'py-0'
          }`}>
          {/* Background that shrinks to rounded pill */}
          <div
            className={`mx-auto border-b bg-background/95 backdrop-blur-xl 
              supports-[backdrop-filter]:bg-background/80
              transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] will-change-transform
              ${scrolled
                ? 'rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.12)] border-border/50'
                : 'rounded-none shadow-sm border-border/40'
              }`}
            style={{
              width: scrolled ? '90%' : '100%',
              maxWidth: scrolled ? '1100px' : '100%',
              transform: `translateZ(0)`, // Hardware acceleration
            }}
          >
            {/* Content container - animate opacity instead of transform for no layout shift */}
            <div className={`flex items-center justify-between transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]
              ${scrolled
                ? 'px-6 sm:px-8 h-14 sm:h-16'
                : 'px-4 sm:px-6 lg:px-8 h-14 sm:h-16'  // Reduced initial height
              } ${scrolled ? 'max-w-full' : 'container mx-auto max-w-7xl'
              }`}>

              {/* Logo with fade animation only (no translate to prevent jump) */}
              <Link
                href="/"
                className={`flex items-center gap-1.5 sm:gap-2 font-bold 
                  transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]
                  transform will-change-transform
                  ${scrolled ? 'scale-90' : 'scale-100'}
                  ${headerLoaded ? 'opacity-100' : 'opacity-0'}`}
                style={{
                  transitionDelay: headerLoaded ? '200ms' : '0ms'
                }}
              >
                <Truck className={`text-primary transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]
                  ${scrolled ? 'h-4 w-4 sm:h-5 sm:w-5' : 'h-4 w-4 sm:h-5 sm:w-5'}`}  // Smaller initial size
                />
                <span className={`text-foreground transition-all duration-700
                  ${scrolled ? 'text-sm sm:text-base' : 'text-base sm:text-lg'}`}>  {/* Smaller initial font */}
                  Freight
                </span>
                <span className={`text-primary transition-all duration-700
                  ${scrolled ? 'text-sm sm:text-base' : 'text-base sm:text-lg'}`}>  {/* Smaller initial font */}
                  Sync
                </span>
              </Link>

              {/* Desktop Navigation - fade in only, no vertical movement */}
              <nav className={`hidden md:flex items-center font-medium 
                transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]
                ${scrolled ? 'gap-3 lg:gap-4' : 'gap-4 lg:gap-6'}`}
              >
                {navLinks.map((link, index) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative text-gray-700 hover:text-gray-900 dark:text-gray-300 
                      dark:hover:text-white transition-all duration-300 font-medium group
                      transform will-change-transform
                      ${scrolled ? 'text-xs' : 'text-sm'}  // Smaller font sizes
                      ${headerLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}  // Scale instead of translate
                    style={{
                      transitionDelay: headerLoaded ? `${300 + (index * 50)}ms` : '0ms',
                      transitionProperty: 'transform, opacity, color',
                    }}
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary 
                      group-hover:w-full transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]" />
                  </Link>
                ))}
              </nav>

              {/* Desktop CTA - fade and scale only */}
              <div className={`hidden md:flex items-center transform transition-all duration-700 
                ease-[cubic-bezier(0.4,0,0.2,1)]
                ${scrolled ? 'scale-90' : 'scale-100'}
                ${headerLoaded ? 'opacity-100' : 'opacity-0'}`}  // No translate-x
                style={{
                  transitionDelay: headerLoaded ? '500ms' : '0ms'
                }}
              >
                <Button
                  size={scrolled ? "sm" : "sm"}  // Start with small size
                  className={`bg-black hover:bg-gray-800 text-white border-0 
                    transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
                    hover:scale-105 active:scale-95 will-change-transform shadow-lg hover:shadow-xl
                    ${scrolled ? 'text-xs px-3 py-1' : 'text-xs px-3 py-1.5'}`}  // Smaller text
                  asChild
                >
                  <Link href="/contact">Book a Free Demo</Link>
                </Button>
              </div>

              {/* Mobile Hamburger - scale animation only */}
              <button
                type="button"
                onClick={toggleMenu}
                className={`md:hidden p-2 -mr-2 rounded-xl hover:bg-accent/80 
                  focus:outline-none focus:ring-2 focus:ring-primary/50 
                  transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
                  z-50 relative active:scale-90 transform
                  ${headerLoaded ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}`}
                style={{
                  transitionDelay: headerLoaded ? '400ms' : '0ms'
                }}
                aria-label="Toggle menu"
                aria-expanded={isOpen}
              >
                <div className="relative w-5 h-5 sm:w-6 sm:h-6">
                  <Menu
                    className={`absolute inset-0 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
                      will-change-transform
                      ${isOpen ? 'rotate-180 opacity-0 scale-75' : 'rotate-0 opacity-100 scale-100'}`}
                  />
                  <X
                    className={`absolute inset-0 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
                      will-change-transform
                      ${isOpen ? 'rotate-0 opacity-100 scale-100' : '-rotate-180 opacity-0 scale-75'}`}
                  />
                </div>
              </button>
            </div>
          </div>

          {/* Optional: Progress bar under header */}
          <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 
            bg-gradient-to-r from-transparent via-primary to-transparent
            transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]
            ${scrolled ? 'w-0 opacity-0' : 'w-full opacity-100'}`}
          />
        </div>
      </header>

      {/* Mobile Menu Backdrop with smooth fade */}
      <div
        className={`md:hidden fixed inset-0 bg-gradient-to-b from-black/60 to-black/40 
          backdrop-blur-md z-40 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]
          ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Sliding Menu with spring animation */}
      <div
        className={`md:hidden fixed left-0 right-0 z-50 px-4 transform 
          transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]
          will-change-transform
          ${scrolled ? 'top-20' : 'top-20'}
          ${isOpen
            ? 'translate-y-0 opacity-100 scale-100'
            : '-translate-y-full opacity-0 scale-95 pointer-events-none'}`}
      >
        <div className="mt-3 bg-gradient-to-br from-background via-background to-accent/5 
          rounded-3xl shadow-2xl border border-border/50 overflow-hidden backdrop-blur-xl
          transform transition-transform duration-500 ease-out"
          style={{
            transform: isOpen ? 'perspective(1000px) rotateX(0deg)' : 'perspective(1000px) rotateX(-5deg)',
          }}
        >
          {/* Decorative top bar with animation */}
          <div className={`h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50
            transition-all duration-1000 ease-out
            ${isOpen ? 'scale-x-100' : 'scale-x-0'}`}
          />

          <nav className="flex flex-col p-4">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative py-4 px-5 text-gray-700 dark:text-gray-300 
                  hover:text-gray-900 dark:hover:text-white 
                  transition-all text-lg font-medium transform 
                  duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                  overflow-hidden will-change-transform
                  ${isOpen
                    ? 'translate-x-0 opacity-100 scale-100'
                    : '-translate-x-20 opacity-0 scale-95'}`}
                style={{
                  transitionDelay: isOpen ? `${index * 100 + 100}ms` : '0ms'
                }}
                onClick={() => setIsOpen(false)}
              >
                {/* Hover background effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 
                  opacity-0 group-hover:opacity-100 transition-all duration-500 
                  ease-[cubic-bezier(0.4,0,0.2,1)] rounded-xl
                  transform group-hover:scale-105" />

                {/* Content */}
                <div className="relative flex items-center justify-between">
                  <span className="transform transition-transform duration-300 
                    group-hover:translate-x-1">{link.label}</span>
                  <ChevronRight className="w-4 h-4 opacity-0 -translate-x-4 
                    group-hover:opacity-100 group-hover:translate-x-0 
                    transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]" />
                </div>

                {/* Bottom border */}
                {index < navLinks.length - 1 && (
                  <div className="absolute bottom-0 left-5 right-5 h-px 
                    bg-gradient-to-r from-transparent via-border/30 to-transparent" />
                )}
              </Link>
            ))}

            {/* Mobile CTA with bounce */}
            <div
              className={`px-3 pb-3 pt-5 transform transition-all 
                duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                ${isOpen
                  ? 'translate-y-0 opacity-100 scale-100'
                  : 'translate-y-10 opacity-0 scale-95'}`}
              style={{
                transitionDelay: isOpen ? '500ms' : '0ms'
              }}
            >
              <Button
                className="w-full bg-gradient-to-r from-gray-900 to-black 
                  hover:from-black hover:to-gray-900 text-white border-0 
                  shadow-lg hover:shadow-xl transition-all duration-500 
                  ease-[cubic-bezier(0.4,0,0.2,1)]
                  h-12 text-base font-semibold group
                  hover:scale-105 active:scale-95 will-change-transform"
                asChild
              >
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  <span>Book a Free Demo</span>
                  <ChevronRight className="w-4 h-4 ml-2 
                    group-hover:translate-x-2 transition-transform 
                    duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]" />
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}