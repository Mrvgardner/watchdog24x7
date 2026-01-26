// components/Button.tsx
import Link from 'next/link'
import { ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'

type Props = {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: ButtonVariant
  className?: string
  ariaLabel?: string
  fullWidth?: boolean
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
  ariaLabel,
  fullWidth = false,
}: Props) {
  const baseStyles =
    'inline-block px-6 py-3 font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transition'

  const variants: Record<ButtonVariant, string> = {
    primary:
      'bg-brand text-white shadow hover:bg-brand-dark focus:ring-brand',
    secondary:
      'border border-brand text-brand hover:bg-brand/10 focus:ring-brand',
    ghost:
      'text-brand hover:underline focus:ring-brand',
  }

  const classes = `${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full text-center' : ''} ${className}`

  if (href) {
    return (
      <Link href={href} aria-label={ariaLabel} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      className={classes}
    >
      {children}
    </button>
  )
}
