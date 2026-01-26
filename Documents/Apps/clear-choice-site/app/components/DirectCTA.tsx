import Link from 'next/link'

export default function DirectCTA({
  href,
  label,
  className = '',
}: { href: string; label: string; className?: string }) {
  return (
    <Link
      href={href}
      className={`inline-block bg-[#ff4f00] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#e04400] transition ${className}`}
    >
      {label}
    </Link>
  )
}
