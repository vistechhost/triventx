import { PlayCircle } from 'lucide-react'
import { LEARNING_VIDEOS } from '@/lib/data/site-config'

// Hidden until a video is added to LEARNING_VIDEOS in lib/data/site-config.ts.
export function LearningVideos({ className = 'bg-background' }: { className?: string }) {
  if (LEARNING_VIDEOS.length === 0) return null

  return (
    <section className={`section-padding ${className}`} aria-labelledby="videos-heading">
      <div className="container-xl">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary rounded-full px-4 py-1.5 mb-4 bg-primary/10">
            <PlayCircle className="w-4 h-4" aria-hidden="true" />
            Learning Center
          </span>
          <h2 id="videos-heading" className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Watch &amp; Learn
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">Short videos on solar design and permitting.</p>
        </div>
        <div className={`grid gap-6 ${LEARNING_VIDEOS.length > 1 ? 'md:grid-cols-2' : 'max-w-3xl mx-auto'}`}>
          {LEARNING_VIDEOS.map((video) => (
            <figure key={video.youtubeId} className="card-base overflow-hidden">
              <div className="relative aspect-video bg-navy-950">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?rel=0`}
                  title={video.title}
                  loading="lazy"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>
              <figcaption className="p-5">
                <p className="font-heading font-bold text-text-primary">{video.title}</p>
                {video.description && <p className="text-sm text-text-secondary mt-1">{video.description}</p>}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
