// components/SalesforceLeadForm.tsx
'use client'

import { useEffect, useRef } from 'react'

type Props = {
  /** Optional: show a heading above the form */
  title?: string
  /** Optional: pass a default lead source for Salesforce reporting (e.g., "Website") */
  leadSource?: string
  /** Optional: tag interest (e.g., "Merchant Services") */
  interest?: string
  /** Optional: thank-you URL; default matches your snippet */
  retURL?: string
}

/**
 * Reusable Salesforce Web-to-Lead form
 * - Posts directly to Salesforce (no JS fetch; avoids CORS)
 * - Preserves UTM params by injecting into hidden fields (if you add matching fields in SF)
 * - Styled with Tailwind; accessible labels
 */
export default function SalesforceLeadForm({
  title,
  leadSource = 'Website',
  interest,
  retURL = 'https://clearchoicepay.com/thank-you',
}: Props) {
  const formRef = useRef<HTMLFormElement>(null)

  // Capture UTM params if present and put them into hidden inputs (optional)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const setValue = (name: string, value: string | null) => {
      if (!value) return
      const input = formRef.current?.querySelector<HTMLInputElement>(`input[name="${name}"]`)
      if (input) input.value = value
    }

    setValue('utm_source', params.get('utm_source'))
    setValue('utm_medium', params.get('utm_medium'))
    setValue('utm_campaign', params.get('utm_campaign'))
    setValue('utm_term', params.get('utm_term'))
    setValue('utm_content', params.get('utm_content'))

    // Capture current page URL
    setValue('landing_page_url', window.location.href)
  }, [])

  return (
    <div className="max-w-xl mx-auto">
      {title && <h2 className="text-2xl font-extrabold mb-6 text-center text-[#002b5e] uppercase">{title}</h2>}

      {/* IMPORTANT: Post to Salesforce exactly as provided */}
      <form
        ref={formRef}
        action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00Da500000FOGNx"
        method="POST"
        className="space-y-4 bg-white p-6 rounded-lg border border-black/10 shadow-sm"
      >
        {/* Required Salesforce hidden fields */}
        <input type="hidden" name="oid" value="00Da500000FOGNx" />
        <input type="hidden" name="retURL" value={retURL} />

        {/* Optional: lead source + interest tags (standard field + free text) */}
        <input type="hidden" name="lead_source" value={leadSource} />
        {interest ? <input type="hidden" name="description" value={`Interest: ${interest}`} /> : null}

        {/* Optional: UTM + page fields (will be ignored by SF unless you create matching fields) */}
        <input type="hidden" name="utm_source" />
        <input type="hidden" name="utm_medium" />
        <input type="hidden" name="utm_campaign" />
        <input type="hidden" name="utm_term" />
        <input type="hidden" name="utm_content" />
        <input type="hidden" name="landing_page_url" />

        {/* Visible fields */}
        <div>
          <label htmlFor="first_name" className="block mb-1 font-semibold">First Name</label>
          <input id="first_name" name="first_name" type="text" maxLength={40} required
                 className="w-full border border-black/10 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff4f00]" />
        </div>

        <div>
          <label htmlFor="last_name" className="block mb-1 font-semibold">Last Name</label>
          <input id="last_name" name="last_name" type="text" maxLength={80} required
                 className="w-full border border-black/10 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff4f00]" />
        </div>

        <div>
          <label htmlFor="email" className="block mb-1 font-semibold">Email</label>
          <input id="email" name="email" type="email" maxLength={80} required
                 className="w-full border border-black/10 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff4f00]" />
        </div>

        <div>
          <label htmlFor="phone" className="block mb-1 font-semibold">Phone</label>
          <input id="phone" name="phone" type="tel" maxLength={40}
                 className="w-full border border-black/10 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff4f00]" />
        </div>

        <div>
          <label htmlFor="company" className="block mb-1 font-semibold">Company</label>
          <input id="company" name="company" type="text" maxLength={40}
                 className="w-full border border-black/10 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff4f00]" />
        </div>

        <label className="flex items-center justify-center gap-2">
          <input
            type="checkbox"
            required
            className="mt-0"
          />
          <span className="text-sm">
            I agree to the{' '}
            <a
              href="/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ff4f00] hover:text-[#e34700] underline"
            >
              Terms & Conditions and Privacy Policy
            </a>
          </span>
        </label>

        {/* Submit */}
        <button type="submit"
                className="bg-[#ff4f00] text-white px-6 py-3 rounded-md font-bold w-full hover:bg-[#e34700] transition uppercase">
          Send
        </button>
      </form>

      {/* Debug mode (uncomment if needed) */}
      {/*
      <form action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00Da500000FOGNx" method="POST">
        <input type="hidden" name="debug" value="1" />
        <input type="hidden" name="debugEmail" value="youremail@example.com" />
      </form>
      */}
    </div>
  )
}
