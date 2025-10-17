import { getBlogBySlug, getBlogSlugs, getAllBlogs } from '@/lib/api/blogs';
import { notFound } from 'next/navigation';
import BlogDetailClient from '../../../../components/blog-detail-client';
import { Metadata } from 'next';

export async function generateStaticParams() {
    const slugs = await getBlogSlugs();
    return slugs.map((slug) => ({
        slug: slug,
    }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const blog = await getBlogBySlug(params.slug);

    if (!blog) {
        return {
            title: 'Blog Not Found',
        };
    }

    return {
        title: blog.meta_title || blog.title,
        description: blog.meta_description || blog.excerpt,
        keywords: blog.meta_keywords,
        openGraph: {
            title: blog.title,
            description: blog.excerpt || '',
            images: blog.featured_image ? [blog.featured_image] : [],
            type: 'article',
        },
        twitter: {
            card: 'summary_large_image',
            title: blog.title,
            description: blog.excerpt || '',
            images: blog.featured_image ? [blog.featured_image] : [],
        },
    };
}

export default async function BlogDetailPage({ params }: { params: { slug: string } }) {
    const [blog, allBlogs] = await Promise.all([
        getBlogBySlug(params.slug),
        getAllBlogs()
    ]);

    if (!blog) {
        notFound();
    }

    // Get related blogs (excluding current one)
    const relatedBlogs = allBlogs
        .filter(b => b.slug !== blog.slug)
        .slice(0, 3);

    return <BlogDetailClient blog={blog} relatedBlogs={relatedBlogs} />;
}