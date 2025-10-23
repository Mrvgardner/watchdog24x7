'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { ChevronDown, Search } from 'react-feather'

type BlogFilterProps = {
  allTags: string[]
  selectedTag?: string
  onSearch: (query: string) => void
  searchQuery: string
}

export default function BlogFilter({ allTags, selectedTag, onSearch, searchQuery }: BlogFilterProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="mb-6">
      {/* Active tag pill (if any) */}
      {selectedTag && (
        <div className="mb-3">
          <span className="inline-flex items-center gap-2 bg-[#ff4f00] text-white px-4 py-2 rounded-full text-sm font-medium">
            {selectedTag}
            <Link
              href="/resources/blog"
              className="hover:text-white/80 transition"
              aria-label="Clear filter"
            >
              ✕
            </Link>
          </span>
        </div>
      )}

      {/* Search and Filter Bar */}
      <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
        {/* Search Bar */}
        <div className="relative flex-1 w-full sm:max-w-md">
          <Search 
            size={18} 
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => onSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff4f00] focus:border-transparent"
          />
        </div>

        {/* Filter dropdown */}
        <div className="relative inline-block" ref={dropdownRef}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition font-medium whitespace-nowrap"
          >
            Filter by Topic
            <ChevronDown
              size={18}
              className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
            />
          </button>

          {/* Dropdown menu */}
          {isOpen && (
            <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-80 overflow-y-auto">
              <div className="py-2">
                <Link
                  href="/resources/blog"
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-2 text-sm hover:bg-gray-50 transition ${
                    !selectedTag ? 'bg-gray-100 font-semibold' : ''
                  }`}
                >
                  All Posts
                </Link>
                {allTags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/resources/blog?tag=${encodeURIComponent(tag)}`}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-2 text-sm hover:bg-gray-50 transition ${
                      selectedTag === tag ? 'bg-gray-100 font-semibold' : ''
                    }`}
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
