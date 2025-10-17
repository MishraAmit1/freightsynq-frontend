"use client";

import { useState, useEffect } from "react";
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
  Loader2
} from "lucide-react";
import Link from "next/link";

const categories = [
  { name: "Industry Insights", count: 0, icon: <TrendingUp className="w-4 h-4" /> },
  { name: "Technology", count: 0, icon: <Lightbulb className="w-4 h-4" /> },
  { name: "Case Studies", count: 0, icon: <Users className="w-4 h-4" /> },
  { name: "How-To Guides", count: 0, icon: <BookOpen className="w-4 h-4" /> },
];

export default function BlogPage() {
  const [blogs, setBlogs] = useState<BlogListItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [displayCount, setDisplayCount] = useState(6);

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

  // Filter blogs based on search and category
  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch =
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (blog.excerpt && blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()));

    // Since we don't have categories in DB yet, we'll skip category filter for now
    // You can add a category field to your blogs table later
    return matchesSearch;
  });

  // Get featured post (latest blog or you can add a featured flag in DB)
  const featuredPost = blogs[0];
  const regularPosts = blogs.slice(1);

  // Paginated posts
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
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black py-16 md:py-24">
        <div className="container max-w-7xl px-4 md:px-8">
          <div className="max-w-3xl">
            <h1 className="text-white text-4xl md:text-6xl font-bold font-headline tracking-tight">
              Freight Sync
              <br />
              <span className="bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] bg-clip-text text-transparent">
                Insights & Resources
              </span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed">
              Expert advice, industry trends, and practical guides to help you
              run a more efficient and profitable transport business.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
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
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter Bar */}
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
        <div className="py-12 md:py-20 bg-gray-50">
          <div className="container max-w-7xl px-4 md:px-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold font-headline">Featured Article</h2>
            </div>
            <FeaturedPost post={featuredPost} />
          </div>
        </div>
      )}

      {/* Recent Posts Grid */}
      <div className="py-20 md:py-32 bg-white">
        <div className="container max-w-7xl px-4 md:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
              All Articles
            </h2>
            <p className="text-lg text-muted-foreground">
              {filteredBlogs.length} articles found
            </p>
          </div>

          {displayedPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayedPosts.map((post) => (
                <BlogPostCard key={post.id} post={post} />
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
            <div className="text-center mt-12">
              <Button
                variant="outline"
                size="lg"
                onClick={() => setDisplayCount(prev => prev + 6)}
              >
                Load More Articles
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="py-20 md:py-32 bg-gray-50">
        <div className="container max-w-4xl px-4 md:px-8">
          <Card className="border-2 border-[#FF6B35]/20 bg-gradient-to-br from-[#FF6B35]/5 to-[#FF8C42]/5">
            <CardContent className="p-8 md:p-12 text-center">
              <div className="mx-auto w-16 h-16 bg-gradient-to-br from-[#FF6B35] to-[#FF8C42] rounded-full flex items-center justify-center mb-6">
                <Mail className="w-8 h-8 text-white" />
              </div>
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
        </div>
      </div>

      {/* Final CTA - Same as before */}
      <section className="bg-white">
        <div className="container mx-auto max-w-7xl px-4 py-12 sm:py-16 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gray-900 px-4 py-12 sm:px-16 sm:py-20 text-center shadow-2xl rounded-2xl">
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
          </div>
        </div>
      </section>
    </div>
  );
}