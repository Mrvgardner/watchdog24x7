export default function Steps({ items }: { items: string[] }) {
  return (
    <ol className="mt-6 grid gap-4 sm:grid-cols-3">
      {items.map((step, i) => (
        <li key={step} className="border border-gray-200 rounded-xl p-5 bg-white">
          <div className="text-xs text-gray-500">Step {i + 1}</div>
          <div className="mt-1 font-semibold">{step}</div>
        </li>
      ))}
    </ol>
  )
}
