// components/Icon.tsx
import { ElementType } from 'react'

export default function Icon({
  as: As,
  className = '',
  size = 24,
}: { as: ElementType; className?: string; size?: number }) {
  return (
    <span className={`inline-flex items-center justify-center p-2 rounded-lg bg-brand/10 text-brand ${className}`}>
      <As size={size} />
    </span>
  )
}
