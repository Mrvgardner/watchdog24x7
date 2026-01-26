export default function AngledDivider({
  color = '#eef1f5', height = 64,
}: { color?: string; height?: number }) {
  return (
    <section className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
      <svg
        viewBox="0 0 100 10"
        preserveAspectRatio="none"
        className="block w-full"
        style={{ height }}
        aria-hidden="true"
      >
        {/* Triangle slant from left to right */}
        <polygon points="0,10 100,0 100,10 0,10" fill={color} />
      </svg>
    </section>
  )
}
