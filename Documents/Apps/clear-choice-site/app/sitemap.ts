import type { MetadataRoute } from 'next'
import { listDocs } from '@/lib/mdx'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://clearchoicepay.com'
  const staticRoutes = [
    '/',
    '/services',
    '/services/merchant-services',
    '/services/watchdog',
    '/services/foreign-exchange',
    '/services/affiliate-program',
    '/industries',
    '/about',
    '/resources',
    '/resources/faqs',
    '/resources/case-studies',
    '/contact',
    '/book-demo',
    '/thank-you',
  ]
  const caseStudies = listDocs('case-studies').map((d) => `/resources/case-studies/${d.slug}`)
  const faqs = listDocs('faqs').map((d) => `/resources/faqs#${d.slug}`)

  return [...staticRoutes, ...caseStudies, ...faqs].map((r) => ({
    url: `${base}${r}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: r === '/' ? 1 : 0.7,
  }))
}
