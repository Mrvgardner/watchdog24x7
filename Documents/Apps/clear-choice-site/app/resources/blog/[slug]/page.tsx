import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getPostBySlug, getAllPostSlugs } from '@/lib/posts'
import ShareBar from '@/components/ShareBar'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs()
  return slugs.map((slug) => ({
    slug,
  }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPostBySlug(params.slug)
  if (!post) return {}
  // The lib currently returns core fields; metaTitle/metaDescription are present in frontmatter but not typed.
  const anyPost = post as any
  const title = anyPost.metaTitle || post.title
  const description = anyPost.metaDescription || post.excerpt || ''
  const keywords: string[] | undefined = anyPost.keywords
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  const url = `${siteUrl.replace(/\/$/, '')}/resources/blog/${post.slug}`
  const ogImage = anyPost.ogImage || `${siteUrl.replace(/\/$/, '')}/images/og/blog-default.png`
  return {
    title,
    description,
    keywords,
    alternates: { canonical: `/resources/blog/${post.slug}` },
    openGraph: {
      title,
      description,
      url,
      type: 'article',
      siteName: 'Clear Choice Payment Solutions',
      images: ogImage ? [{ url: ogImage }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ogImage ? [ogImage] : undefined,
    },
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  // Rough reading time at ~200 words/min
  const words = post.content.trim().split(/\s+/).length
  const minutes = Math.max(1, Math.ceil(words / 200))

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <article>
        <header className="mb-8">
          <div className="mb-4">
            <a href="/resources/blog" className="text-[#ff4f00] hover:underline">← Back to Blog</a>
          </div>
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="text-sm text-gray-600 mb-2">By {post.author || 'Victor Gardner, Jr.'}</div>
          
          <div className="text-sm text-gray-500 mb-4 flex items-center gap-2">
            <span>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </span>
            <span aria-hidden>•</span>
            <span>{minutes} min read</span>
          </div>

          <div className="mb-6">
            <ShareBar title={post.title} />
          </div>
          
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>
        
        <div className="prose prose-lg max-w-none">
          <MDXRemote source={post.content} />
        </div>
      </article>
    </div>
  )
}
