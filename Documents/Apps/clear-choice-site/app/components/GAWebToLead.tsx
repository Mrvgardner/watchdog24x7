 'use client'

import { ReactNode, useEffect, useState } from 'react'

type UTMFields = {
  source?: string
  medium?: string
  campaign?: string
  term?: string
  content?: string
}

export default function GAWebToLead({
  orgId,
  retURL,
  children,
  eventLabel = 'WebToLead',
  className = '',

  // Salesforce API field names (change to match your org)
  sourcePageField = 'Source_Page__c',
  utmSourceField = 'UTM_Source__c',
  utmMediumField = 'UTM_Medium__c',
  utmCampaignField = 'UTM_Campaign__c',
  utmTermField = 'UTM_Term__c',
  utmContentField = 'UTM_Content__c',
}: {
  orgId: string
  retURL: string
  children: ReactNode
  eventLabel?: string
  className?: string

  sourcePageField?: string
  utmSourceField?: string
  utmMediumField?: string
  utmCampaignField?: string
  utmTermField?: string
  utmContentField?: string
}) {
  const [sourcePage, setSourcePage] = useState('')
  const [utm, setUtm] = useState<UTMFields>({})

  useEffect(() => {
    // Full URL for source page
    setSourcePage(window.location.href)

    // UTM capture (if present)
    const q = new URLSearchParams(window.location.search)
    const utmData: UTMFields = {}
    if (q.get('utm_source')) utmData.source = q.get('utm_source') || undefined
    if (q.get('utm_medium')) utmData.medium = q.get('utm_medium') || undefined
    if (q.get('utm_campaign')) utmData.campaign = q.get('utm_campaign') || undefined
    if (q.get('utm_term')) utmData.term = q.get('utm_term') || undefined
    if (q.get('utm_content')) utmData.content = q.get('utm_content') || undefined
    setUtm(utmData)
  }, [])

  const handleSubmit = () => {
    const g = (window as any).gtag
    g?.('event', 'lead_form_submit', { event_category: 'Lead', event_label: eventLabel })
  }

  return (
    <form
      action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8"
      method="POST"
      onSubmit={handleSubmit}
      className={className}
    >
      {/* Required SF fields */}
      <input type="hidden" name="oid" value={orgId} />
      <input type="hidden" name="retURL" value={retURL} />

      {/* Source page (full URL) */}
      <input type="hidden" name={sourcePageField} value={sourcePage} />

      {/* UTM fields (only send if present) */}
      {utm.source && <input type="hidden" name={utmSourceField} value={utm.source} />}
      {utm.medium && <input type="hidden" name={utmMediumField} value={utm.medium} />}
      {utm.campaign && <input type="hidden" name={utmCampaignField} value={utm.campaign} />}
      {utm.term && <input type="hidden" name={utmTermField} value={utm.term} />}
      {utm.content && <input type="hidden" name={utmContentField} value={utm.content} />}

      {children}
    </form>
  )
}

