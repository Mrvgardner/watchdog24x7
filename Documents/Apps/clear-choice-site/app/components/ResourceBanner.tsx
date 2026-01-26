import Section from '@/components/Section'
import FeatureBanner from '@/components/FeatureBanner'

export default function ResourceBanner({
  heading,
  sub,
  href,
  label,
  className = '',
  padding = 'py-10 md:py-14',
}: {
  heading: string
  sub: string
  href: string
  label: string
  className?: string
  padding?: string
}) {
  return (
    <Section
      variant="surface"
      className={`bg-brand-navy text-white ${className}`}
      containerClassName={padding}
    >
      <FeatureBanner heading={heading} sub={sub} href={href} label={label} />
    </Section>
  )
}
