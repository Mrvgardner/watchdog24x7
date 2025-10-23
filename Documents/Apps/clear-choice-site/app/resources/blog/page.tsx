import { getAllPosts } from '@/lib/posts'
import BlogList from './BlogList'

export default function BlogPage({
  searchParams,
}: {
  searchParams?: { tag?: string }
}) {
  const posts = getAllPosts()
  const selectedTag = searchParams?.tag

  // Collect unique tags across all posts
  const allTags = Array.from(
    new Set(
      posts.flatMap((p) => (Array.isArray(p.tags) ? (p.tags as string[]) : []))
    )
  ).sort((a, b) => a.localeCompare(b))

  return (
    <>
      {/* Hero Section */}
      <section className="bg-white px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 uppercase">LET'S BE CLEAR</h1>
          <p className="text-lg text-gray-600">
            Insights, innovation, and straight talk from the Clear Choice team
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <BlogList 
          posts={posts}
          allTags={allTags}
          selectedTag={selectedTag}
        />
      </div>
    </>
  )
}