export default function ServicesJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, url: 'https://clearchoicepay.com/services/merchant-services' },
      { '@type': 'ListItem', position: 2, url: 'https://clearchoicepay.com/services/watchdog' },
      { '@type': 'ListItem', position: 3, url: 'https://clearchoicepay.com/services/foreign-exchange' },
      { '@type': 'ListItem', position: 4, url: 'https://clearchoicepay.com/services/affiliate-program' },
      { '@type': 'ListItem', position: 5, url: 'https://clearchoicepay.com/services/kiosks' },
    ],
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}
