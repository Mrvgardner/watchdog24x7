// components/ServiceCard.tsx
import Button from '@/components/Button'
import { ReactNode } from 'react'

type Props = {
  title: string
  desc: string
  href?: string
  icon?: ReactNode
  bullets?: string[]
}

export default function ServiceCard({ title, desc, href, icon, bullets }: Props) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 hover:shadow-hover hover:border-brand/40 transition bg-surface flex flex-col justify-between h-full group">
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-heading text-xl">{title}</h3>
          {icon ? <div className="text-brand group-hover:scale-110 transition">{icon}</div> : null}
        </div>
        <p className="text-gray-600 mb-4">{desc}</p>
        {bullets?.length ? (
          <ul className="text-sm text-gray-700 space-y-1">
            {bullets.map((b) => (
              <li key={b} className="flex items-center gap-2">
                <span className="text-green-500">•</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
      {href ? (
        <div className="mt-4">
          <Button 
            href={href} 
            variant="ghost" 
            ariaLabel={`Learn more about ${title}`}
            className="px-0 py-0"
          >
            Learn more →
          </Button>
        </div>
      ) : null}
    </div>
  )
}
