import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ArrowRight, CheckCircle, Clock } from 'lucide-react'
import { BlogCard } from '@/components/blog/BlogCard'
import { LinkedInFollow } from '@/components/layout/LinkedInFollow'
import { CTASection } from '@/components/home/CTASection'
import { BLOG_AUTHOR, BLOG_POSTS, formatPostDate, getPost } from '@/lib/data/blog'
import { SITE_CONFIG } from '@/lib/data/site-config'
import { cn } from '@/lib/utils/cn'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: { type: 'article', title: post.title, description: post.excerpt, publishedTime: post.publishedOn },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  const morePosts = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 3)

  return (
    <div className="pt-24 md:pt-28">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.title,
            description: post.excerpt,
            datePublished: post.publishedOn,
            image: `${SITE_CONFIG.url}${post.image}`,
            author: { '@type': 'Organization', name: SITE_CONFIG.name },
            publisher: { '@type': 'Organization', name: SITE_CONFIG.name },
            mainEntityOfPage: `${SITE_CONFIG.url}/blog/${post.slug}`,
          }),
        }}
      />

      <article className="px-4 sm:px-6 lg:px-8 py-10 md:py-14 bg-background">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-text-secondary hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            All articles
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-4 text-sm">
            <span className="font-bold text-primary px-3 py-1 rounded-full bg-primary/10">{post.category}</span>
            <span className="inline-flex items-center gap-1 text-text-secondary">
              <Clock className="w-4 h-4" aria-hidden="true" />
              {post.readMinutes} min read
            </span>
          </div>
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-text-primary leading-tight mb-4">{post.title}</h1>
          <p className="text-lg text-text-secondary mb-4">{post.excerpt}</p>
          <p className="text-sm text-text-secondary mb-8">
            {BLOG_AUTHOR} · <time dateTime={post.publishedOn}>{formatPostDate(post.publishedOn)}</time>
          </p>

          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-border bg-white mb-10">
            <Image
              src={post.image}
              alt={post.imageAlt}
              fill
              preload
              sizes="(min-width: 768px) 768px, 100vw"
              className={post.imageFit === 'contain' ? 'object-contain p-4' : 'object-cover'}
            />
          </div>

          <div className="space-y-8">
            {post.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="font-heading text-xl md:text-2xl font-bold text-text-primary mb-3">{section.heading}</h2>
                {section.intro && (
                  <p className={cn('text-text-secondary leading-relaxed', section.points && 'mb-3')}>{section.intro}</p>
                )}
                {section.points && (
                  <ul className="space-y-2.5">
                    {section.points.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-text-primary leading-relaxed">
                        <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          {post.relatedService && (
            <div className="mt-12 rounded-2xl bg-primary/10 border border-primary/20 p-6 flex flex-col sm:flex-row sm:items-center gap-4">
              <p className="flex-1 font-heading font-bold text-text-primary">
                Want us to handle this for you? Send your project for a free quote.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors"
                >
                  Get Free Quote
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
                <Link
                  href={post.relatedService.href}
                  className="inline-flex items-center gap-2 bg-surface border border-border hover:border-primary/40 text-text-primary font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors"
                >
                  {post.relatedService.label}
                </Link>
              </div>
            </div>
          )}

          <LinkedInFollow variant="card" className="mt-6" />
        </div>
      </article>

      {morePosts.length > 0 && (
        <section className="section-padding bg-background-subtle" aria-labelledby="more-posts-heading">
          <div className="container-xl">
            <h2 id="more-posts-heading" className="font-heading text-2xl md:text-3xl font-bold text-text-primary mb-8">
              More articles
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {morePosts.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </div>
  )
}
