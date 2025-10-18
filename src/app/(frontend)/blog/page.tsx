"use client";

import { useState, useEffect, useRef } from "react";
import BlogPostCard from "@/components/blog/blog-post-card";
import FeaturedPost from "@/components/blog/featured-post";
import { getAllBlogs, type BlogListItem } from "@/lib/api/blogs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  ArrowRight,
  TrendingUp,
  Clock,
  Search,
  FileText,
  Users,
  Lightbulb,
  BookOpen,
  Mail,
  Loader2,
  Sparkles
} from "lucide-react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

export default function BlogPage() {
  const [blogs, setBlogs] = useState<BlogListItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [displayCount, setDisplayCount] = useState(6);

  const heroRef = useRef(null);
  const featuredRef = useRef(null);
  const postsRef = useRef(null);
  const newsletterRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, amount: 0.2 });
  const featuredInView = useInView(featuredRef, { once: true, amount: 0.2 });
  const postsInView = useInView(postsRef, { once: true, amount: 0.1 });
  const newsletterInView = useInView(newsletterRef, { once: true, amount: 0.2 });

  useEffect(() => {
    loadBlogs();
  }, []);

  const loadBlogs = async () => {
    try {
      const data = await getAllBlogs();
      setBlogs(data);
    } catch (error) {
      console.error('Error loading blogs:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch =
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (blog.excerpt && blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesSearch;
  });

  const featuredPost = blogs[0];
  const regularPosts = blogs.slice(1);
  const displayedPosts = regularPosts.slice(0, displayCount);
  const hasMore = regularPosts.length > displayCount;

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-[#FF6B35]" />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div ref={heroRef} className="bg-gradient-to-br from-gray-900 via-gray-800 to-black py-16 md:py-24 overflow-hidden">
        <div className="container max-w-7xl px-4 md:px-8">
          <div className="max-w-3xl">
            <motion.h1
              className="text-white text-4xl md:text-6xl font-bold font-headline tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Freight Sync
              <br />
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] bg-clip-text text-transparent font-black">
                  Insights & Resources
                </span>

                {/* Nike Swoosh */}
                <svg
                  className="absolute -bottom-3 left-0 w-full h-8 z-0"
                  viewBox="0 0 350 30"
                  preserveAspectRatio="none"
                >
                  <motion.path
                    d="M 0 20 Q 85 8, 175 12 T 350 8"
                    stroke="url(#blog-gradient)"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
                  />
                  <defs>
                    <linearGradient id="blog-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#FF6B35" />
                      <stop offset="100%" stopColor="#FF8C42" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Sparkle */}
                <motion.span
                  className="absolute -top-2 -right-3 inline-block"
                  initial={{ scale: 0, rotate: 0 }}
                  whileInView={{ scale: 1, rotate: 360 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.8, type: "spring" }}
                >
                  <Sparkles className="w-5 h-5 text-[#FF8C42]" />
                </motion.span>
              </span>
            </motion.h1>

            <motion.p
              className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Expert advice, industry trends, and practical guides to help you
              run a more efficient and profitable transport business.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="flex items-center gap-2 text-gray-400">
                <FileText className="w-5 h-5" />
                <span>{blogs.length} Articles</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Clock className="w-5 h-5" />
                <span>Weekly Updates</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Users className="w-5 h-5" />
                <span>Industry Experts</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="py-8 bg-white border-b sticky top-14 z-30">
        <div className="container max-w-7xl px-4 md:px-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Featured Post */}
      {featuredPost && (
        <div ref={featuredRef} className="py-12 md:py-20 bg-gray-50">
          <div className="container max-w-7xl px-4 md:px-8">
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold font-headline">Featured Article</h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <FeaturedPost post={featuredPost} />
            </motion.div>
          </div>
        </div>
      )}

      {/* All Articles */}
      <div ref={postsRef} className="py-20 md:py-32 bg-white">
        <div className="container max-w-7xl px-4 md:px-8">
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
              All Articles
            </h2>
            <p className="text-lg text-muted-foreground">
              {filteredBlogs.length} articles found
            </p>
          </motion.div>

          {displayedPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayedPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <BlogPostCard post={post} />
                </motion.div>
              ))}
            </div>
          ) : (
            <Card className="text-center py-16">
              <CardContent>
                <p className="text-xl text-muted-foreground mb-4">
                  {searchQuery ? "No articles found matching your search" : "No articles published yet"}
                </p>
                {searchQuery && (
                  <Button
                    variant="outline"
                    onClick={() => setSearchQuery("")}
                  >
                    Clear Search
                  </Button>
                )}
              </CardContent>
            </Card>
          )}

          {/* Load More */}
          {hasMore && (
            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Button
                variant="outline"
                size="lg"
                onClick={() => setDisplayCount(prev => prev + 6)}
              >
                Load More Articles
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>
          )}
        </div>
      </div>

      {/* Newsletter */}
      <div ref={newsletterRef} className="py-20 md:py-32 bg-gray-50">
        <div className="container max-w-4xl px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-2 border-[#FF6B35]/20 bg-gradient-to-br from-[#FF6B35]/5 to-[#FF8C42]/5">
              <CardContent className="p-8 md:p-12 text-center">
                <motion.div
                  className="mx-auto w-16 h-16 bg-gradient-to-br from-[#FF6B35] to-[#FF8C42] rounded-full flex items-center justify-center mb-6"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Mail className="w-8 h-8 text-white" />
                </motion.div>
                <h2 className="text-3xl font-bold font-headline mb-4">
                  Stay Updated with Transport Insights
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Get the latest articles, industry trends, and exclusive tips delivered
                  to your inbox every week. Join 5,000+ transport professionals.
                </p>
                <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-grow h-12"
                  />
                  <Button
                    type="submit"
                    size="lg"
                    className="bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] h-12"
                  >
                    Subscribe
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </form>
                <p className="text-sm text-muted-foreground mt-4">
                  No spam, unsubscribe anytime
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Final CTA */}
      <section className="bg-white">
        <div className="container mx-auto max-w-7xl px-4 py-12 sm:py-16 lg:px-8">
          <motion.div
            className="relative isolate overflow-hidden bg-gray-900 px-4 py-12 sm:px-16 sm:py-20 text-center shadow-2xl rounded-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mx-auto max-w-2xl font-headline text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
              Ready to Transform Your Transport Business?
            </h2>
            <p className="mx-auto mt-4 sm:mt-6 max-w-xl text-sm sm:text-base md:text-lg leading-6 sm:leading-7 text-gray-300">
              See how Freight Sync can help you implement the strategies you've read about
            </p>
            <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-x-6">
              <Button
                size="lg"
                asChild
                className="w-full sm:w-auto bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] text-white font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                <Link href="/contact">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="w-full sm:w-auto bg-transparent text-white hover:bg-white/10 hover:text-white border-white mt-3 sm:mt-0"
              >
                <Link href="/features">Learn More</Link>
              </Button>
            </div>
            <p className="mt-4 sm:mt-6 text-xs sm:text-sm text-gray-400">
              No credit card required • 7-day free trial
            </p>
            <svg
              viewBox="0 0 1024 1024"
              className="absolute left-1/2 top-1/2 -z-10 w-[200vw] h-[200vw] sm:w-[64rem] sm:h-[64rem] -translate-x-1/2"
              aria-hidden="true"
            >
              <circle cx={512} cy={512} r={512} fill="url(#blog-cta-gradient)" fillOpacity="0.7" />
              <defs>
                <radialGradient id="blog-cta-gradient">
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