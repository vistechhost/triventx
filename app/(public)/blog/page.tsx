import type { Metadata } from 'next'
import { BlogCard } from '@/components/blog/BlogCard'
import { LearningVideos } from '@/components/home/LearningVideos'
import { LinkedInFollow } from '@/components/layout/LinkedInFollow'
import { CTASection } from '@/components/home/CTASection'
import { BLOG_POSTS } from '@/lib/data/blog'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Practical guides on solar permit plan sets, NEC rapid shutdown, interconnection, and PTO — from the TriventX engineering team.',
  alternates: { canonical: '/blog' },
}

export default function BlogPage() {
  return (
    <div className="pt-24 md:pt-28">
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary rounded-full px-4 py-1.5 mb-4 bg-primary/10">
            TriventX Blog
          </span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-text-primary mb-4">Solar Design Insights</h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Short, practical guides on permitting, codes, and interconnection.
          </p>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 pt-4 pb-20 lg:pb-28 bg-background" aria-label="Articles">
        <div className="container-xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BLOG_POSTS.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
          <LinkedInFollow
            variant="card"
            className="mt-12 max-w-3xl mx-auto"
            title="Get new articles on LinkedIn"
            text="Follow TriventX for new guides, code updates, and project news."
          />
        </div>
      </section>

      <LearningVideos className="bg-background-subtle" />
      <CTASection />
    </div>
  )
}
