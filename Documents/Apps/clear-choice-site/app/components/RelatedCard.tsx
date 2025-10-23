import Link from 'next/link'

export default function RelatedCard({
  href,
  title,
  description,
  date,
}: {
  href: string
  title: string
  description?: string
  date?: string
}) {
  return (
    <Link
      href={href}
      className="block border rounded-xl p-5 bg-white hover:shadow-lg hover:border-[#ff4f00]/40 transition"
    >
      <h3 className="font-heading text-base normal-case">{title}</h3>
      {description ? <p className="mt-1 text-sm text-gray-600">{description}</p> : null}
      {date ? (
        <div className="mt-2 text-xs text-gray-500">{new Date(date).toLocaleDateString()}</div>
      ) : null}
      <div className="mt-2 text-[#ff4f00] font-cta">Read →</div>
    </Link>
  )
}
