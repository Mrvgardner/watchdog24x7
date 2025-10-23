import { ReactNode } from 'react'
import clsx from 'clsx'

type Variant = 'surface' | 'muted'

export default function Section({
  variant = 'surface',
  className = '',
  containerClassName = '',
  id,
  children,
}: {
  variant?: Variant
  className?: string
  containerClassName?: string
  id?: string
  children: ReactNode
}) {
  return (
    <section
      id={id}
      className={clsx(
        // Full‑bleed background regardless of parent width
        'relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen',
        variant === 'muted' ? 'bg-gray-50' : 'bg-white',
        className
      )}
    >
      {/* Constrained inner content */}
      <div className={clsx('max-w-7xl mx-auto px-6 py-16', containerClassName)}>
        {children}
      </div>
    </section>
  )
}
