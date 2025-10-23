'use client'

export default function TrackDownload({
  href,
  children,
  eventLabel = 'Download',
  className = '',
}: {
  href: string
  children: React.ReactNode
  eventLabel?: string
  className?: string
}) {
  const handleClick = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      ;(window as any).gtag('event', 'download', {
        event_category: 'Resource',
        event_label: eventLabel,
      })
    }
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={className}
    >
      {children}
    </a>
  )
}
