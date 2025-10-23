export default function Outcomes({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((b) => (
        <li key={b} className="flex gap-2 text-gray-800">
          <span className="text-green-600">•</span>
          <span>{b}</span>
        </li>
      ))}
    </ul>
  )
}
