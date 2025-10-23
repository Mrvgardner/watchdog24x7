export default function StaticTestimonial({
  quote,
  name,
  company,
}: {
  quote: string
  name: string
  company?: string
}) {
  return (
    <blockquote className="mt-10 border-l-4 border-[#ff4f00] pl-4 text-gray-700 max-w-3xl mx-auto italic">
      "{quote}"
      <footer className="mt-3 not-italic text-sm text-gray-500">
        — {name}{company ? `, ${company}` : ''}
      </footer>
    </blockquote>
  )
}
