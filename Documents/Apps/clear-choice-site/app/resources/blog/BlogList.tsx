'use client'

import { useState } from 'react'
import Link from 'next/link'
import BlogFilter from './BlogFilter'

type Post = {
  slug: string
  title: string
  excerpt?: string
  date?: string
  tags?: string[]
}

type BlogListProps = {
  posts: Post[]
  allTags: string[]
  selectedTag?: string
}

export default function BlogList({ posts, allTags, selectedTag }: BlogListProps) {
  const [searchQuery, setSearchQuery] = useState('')

  // Filter by selected tag if present
  let visiblePosts = selectedTag
    ? posts.filter((p) => Array.isArray(p.tags) && (p.tags as string[]).includes(selectedTag))
    : posts

  // Filter by search query if present
  if (searchQuery.trim()) {
    const query = searchQuery.toLowerCase()
    visiblePosts = visiblePosts.filter((post) => {
      const title = post.title?.toLowerCase() || ''
      const excerpt = post.excerpt?.toLowerCase() || ''
      const tags = Array.isArray(post.tags) 
        ? (post.tags as string[]).join(' ').toLowerCase() 
        : ''
      return title.includes(query) || excerpt.includes(query) || tags.includes(query)
    })
  }

  return (
    <>
      {/* Filters */}
      <BlogFilter 
        allTags={allTags} 
        selectedTag={selectedTag}
        onSearch={setSearchQuery}
        searchQuery={searchQuery}
      />

      {visiblePosts.length === 0 ? (
        <p className="text-gray-600">No blog posts found.</p>
      ) : (
        <div className="space-y-6">
          {visiblePosts.map((post) => (
            <Link 
              key={post.slug}
              href={`/resources/blog/${post.slug}`}
              className="block group"
            >
              <article className="border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-[#ff4f00]/40 transition-all duration-200">
                <h2 className="text-2xl font-bold mb-2 group-hover:text-[#ff4f00] transition-colors">
                  {post.title}
                </h2>
                {post.date && (
                  <time className="text-sm text-gray-500 mb-3 block">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                )}
                {post.excerpt && (
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                )}
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                <span className="inline-flex items-center gap-2 text-[#ff4f00] font-semibold group-hover:gap-3 transition-all">
                  Read More
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </article>
            </Link>
          ))}
        </div>
      )}
    </>
  )
}
