export default function SeoJsonLd() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

  const org = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Clear Choice Payment Solutions',
    url: siteUrl,
    logo: `${siteUrl.replace(/\/$/, '')}/brand/clearchoice-logo.svg`,
    parentOrganization: { '@type': 'Organization', name: 'Switch Commerce' },
  }

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Clear Choice Payment Solutions',
    url: siteUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteUrl.replace(/\/$/, '')}/search?q={query}`,
      'query-input': 'required name=query',
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }} />
    </>
  )
}
