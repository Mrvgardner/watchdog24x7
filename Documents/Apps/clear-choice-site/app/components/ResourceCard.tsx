// components/ResourceCard.tsx
import Link from 'next/link'
import { ReactNode } from 'react'

type Props = {
  title: string
  desc: string
  href: string
  badge?: string // e.g. "One‑Pager", "Checklist"
  IconEl?: ReactNode
}

export default function ResourceCard({ title, desc, href, badge, IconEl }: Props) {
  return (
    <Link
      href={href}
      className="group block border border-gray-200 rounded-lg p-6 bg-white hover:shadow-lg hover:border-brand/40 transition"
    >
      {IconEl && (
        <div className="flex items-center gap-3 mb-3">
          {IconEl}
          <h3 className="font-heading text-lg">{title}</h3>
        </div>
      )}
      
      {!IconEl && (
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-heading text-lg">{title}</h3>
        </div>
      )}
      
      {badge && (
        <span className="inline-block text-xs px-2 py-1 rounded bg-orange-50 text-brand border border-brand/20 mb-2">
          {badge}
        </span>
      )}
      
      <p className="text-gray-600">{desc}</p>
      <div className="mt-4 text-brand font-semibold">View →</div>
    </Link>
  )
}
