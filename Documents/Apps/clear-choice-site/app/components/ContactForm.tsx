'use client'
import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <form
      action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8"
      method="POST"
      className="flex flex-col space-y-4"
    >
      <input type="hidden" name="oid" value="00Da500000FOGNx" />
  <input type="hidden" name="retURL" value={`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/thank-you`} />
      <input type="hidden" name="lead_source" value="Website" />
      
      <label className="flex flex-col">
        <span className="text-gray-700">Name</span>
        <input
          type="text"
          name="first_name"
          required
          className="border border-gray-300 p-2 rounded"
        />
      </label>
      <label className="flex flex-col">
        <span className="text-gray-700">Email</span>
        <input
          type="email"
          name="email"
          required
          className="border border-gray-300 p-2 rounded"
        />
      </label>
      <label className="flex flex-col">
        <span className="text-gray-700">Message</span>
        <textarea
          name="description"
          required
          className="border border-gray-300 p-2 rounded"
        />
      </label>
      
      <label className="flex items-center justify-center gap-2">
        <input
          type="checkbox"
          required
          className="mt-0"
        />
        <span className="text-sm text-gray-700">
          I agree to the{' '}
          <a
            href="/terms"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-500 hover:text-orange-600 underline"
          >
            Terms & Conditions and Privacy Policy
          </a>
        </span>
      </label>
      
      <button
        type="submit"
        className="bg-orange-500 text-white p-2 rounded hover:bg-orange-600"
        onClick={() => (window as any).gtag?.('event', 'form_submit_click', { form: 'contact' })}
      >
        Send
      </button>
    </form>
  );
};

export default ContactForm;