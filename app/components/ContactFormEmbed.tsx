'use client';

import { useEffect } from 'react';

interface ContactFormEmbedProps {
  formId?: string;
}

export default function ContactFormEmbed({ formId = 'a9PMrjCG6eus' }: ContactFormEmbedProps) {
  useEffect(() => {
    // Load Fillout embed script
    const script = document.createElement('script');
    script.src = 'https://server.fillout.com/embed/v1/';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup if needed
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div
      style={{ width: '100%', minHeight: '500px' }}
      data-fillout-id={formId}
      data-fillout-embed-type="standard"
      data-fillout-inherit-parameters
      data-fillout-dynamic-resize
    />
  );
}
