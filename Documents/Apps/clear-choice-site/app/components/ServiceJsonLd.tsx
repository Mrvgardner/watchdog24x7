export default function ServiceJsonLd({
  name, 
  description, 
  url, 
  areaServed = 'US'
}: { 
  name: string
  description: string
  url: string
  areaServed?: string 
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: { 
      '@type': 'Organization', 
      name: 'Clear Choice Payment Solutions', 
      url: 'https://clearchoicepay.com' 
    },
    areaServed,
    serviceType: name,
    url
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}
