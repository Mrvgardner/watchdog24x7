"use client"
import { useCallback, useMemo, useState } from 'react'
import { Share, Copy, Linkedin } from 'react-feather'

type ShareBarProps = {
  title?: string
  url?: string
}

export default function ShareBar({ title, url }: ShareBarProps) {
  const [copied, setCopied] = useState(false)

  const shareUrl = useMemo(() => {
    if (url) return url
    if (typeof window !== 'undefined') return window.location.href
    return ''
  }, [url])

  const shareTitle = title || 'Check this out'

  const onShare = useCallback(async () => {
    try {
      if (navigator.share) {
        await navigator.share({ title: shareTitle, url: shareUrl })
      } else {
        await navigator.clipboard.writeText(shareUrl)
        setCopied(true)
        setTimeout(() => setCopied(false), 1500)
      }
    } catch (_) {
      // user cancelled or share failed — no-op
    }
  }, [shareTitle, shareUrl])

  const onCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(shareUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch (_) {}
  }, [shareUrl])

  const xHref = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`
  const liHref = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`

  const baseBtn = [
    'inline-flex items-center justify-center gap-2',
    'h-10 px-4 rounded-md text-sm font-medium',
    'w-36',
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#002b5e]',
    'transition-colors'
  ].join(' ')

  // Official-style X monogram
  const XIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path
        d="M18.244 2.25h3.308l-7.227 8.26 8.5 11.24h-6.654l-5.207-6.84-5.955 6.84H1.66l7.73-8.86L1.5 2.25H8.33l4.768 6.263 5.145-6.263z"
        fill="currentColor"
      />
    </svg>
  )

  return (
    <div className="flex flex-wrap items-center gap-2 text-sm">
      <button
        type="button"
        onClick={onShare}
        className={`${baseBtn} bg-[#002b5e] text-white hover:bg-[#002250]`}
        aria-label="Share"
      >
        <Share size={16} aria-hidden />
        Share
      </button>
      <button
        type="button"
        onClick={onCopy}
        className={`${baseBtn} bg-[#002b5e] text-white hover:bg-[#002250]`}
        aria-label="Copy link"
      >
        <Copy size={16} aria-hidden />
        {copied ? 'Link Copied' : 'Copy Link'}
      </button>
      <a
        href={xHref}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseBtn} bg-[#002b5e] text-white hover:bg-[#002250]`}
        aria-label="Share on Twitter/X"
      >
        {/* If you add your exact X logo at /public/icons/x.svg, we'll use it and fall back if missing */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/icons/x.svg"
          width={16}
          height={16}
          alt=""
          aria-hidden
          className="w-4 h-4 object-contain"
          onError={(e) => {
            // fallback to inline icon if provided asset missing
            const el = e.currentTarget
            el.style.display = 'none'
            const sibling = el.nextElementSibling as HTMLElement | null
            if (sibling) sibling.style.display = 'inline-flex'
          }}
        />
        <span style={{ display: 'none' }} aria-hidden>
          <XIcon />
        </span>
        Twitter/X
      </a>
      <a
        href={liHref}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseBtn} bg-[#002b5e] text-white hover:bg-[#002250]`}
        aria-label="Share on LinkedIn"
      >
        <Linkedin size={16} aria-hidden />
        LinkedIn
      </a>
    </div>
  )
}
