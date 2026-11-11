import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Clock } from 'lucide-react'
import { type BlogPost, formatPostDate } from '@/lib/data/blog'
import { cn } from '@/lib/utils/cn'

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="card-base overflow-hidden flex flex-col group hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
      <Link href={`/blog/${post.slug}`} className="relative aspect-[16/9] block overflow-hidden bg-white" tabIndex={-1} aria-hidden="true">
        <Image
          src={post.image}
          alt=""
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className={cn(
            'transition-transform duration-500 group-hover:scale-105',
            post.imageFit === 'contain' ? 'object-contain p-3' : 'object-cover',
          )}
        />
      </Link>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-3 text-xs">
          <span className="font-bold text-primary px-3 py-1 rounded-full bg-primary/10">{post.category}</span>
          <span className="inline-flex items-center gap-1 text-text-secondary">
            <Clock className="w-3.5 h-3.5" aria-hidden="true" />
            {post.readMinutes} min read
          </span>
        </div>
        <h3 className="font-heading font-bold text-lg text-text-primary mb-2 leading-snug">
          <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
            {post.title}
          </Link>
        </h3>
        <p className="text-sm text-text-secondary leading-relaxed mb-4 flex-1">{post.excerpt}</p>
        <div className="flex items-center justify-between text-xs text-text-secondary">
          <time dateTime={post.publishedOn}>{formatPostDate(post.publishedOn)}</time>
          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center gap-1 font-semibold text-primary hover:gap-2 transition-all"
            aria-label={`Read: ${post.title}`}
          >
            Read
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  )
}
