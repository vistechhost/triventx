import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { BlogCard } from '@/components/blog/BlogCard'
import { BLOG_POSTS } from '@/lib/data/blog'

export function BlogPreview() {
  if (BLOG_POSTS.length === 0) return null

  return (
    <section className="section-padding bg-background" aria-labelledby="blog-preview-heading">
      <div className="container-xl">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary rounded-full px-4 py-1.5 mb-4 bg-primary/10">
              From the Blog
            </span>
            <h2 id="blog-preview-heading" className="font-heading text-3xl md:text-4xl font-bold text-text-primary">
              Solar Design Insights
            </h2>
            <p className="text-text-secondary text-lg mt-3">Short, practical guides for installers and EPCs.</p>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-semibold text-primary hover:gap-3 transition-all shrink-0"
          >
            View all articles
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BLOG_POSTS.slice(0, 3).map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  )
}
