// KnowHow Marketing Lab — Cookie Consent Banner
// GDPR + CASL compliant — stores preference in localStorage
// Design: Space Grotesk / DM Sans, brand colors #E98C28 / #318599
// Appears at bottom of viewport on first visit; dismissed state persists

import { useState, useEffect } from 'react';
import { Link } from 'wouter';

const STORAGE_KEY = 'khml_cookie_consent';

type ConsentState = 'accepted' | 'declined' | null;

export default function CookieConsent() {
  const [consent, setConsent] = useState<ConsentState>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as ConsentState;
    if (!stored) {
      // Small delay so it doesn't flash immediately on load
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    } else {
      setConsent(stored);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(STORAGE_KEY, 'accepted');
    setConsent('accepted');
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem(STORAGE_KEY, 'declined');
    setConsent('declined');
    setVisible(false);
  };

  if (!visible || consent !== null) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      aria-live="polite"
      className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
      style={{ fontFamily: 'DM Sans, sans-serif' }}
    >
      <div className="max-w-4xl mx-auto bg-gray-900 text-white rounded-2xl shadow-2xl border border-gray-700 overflow-hidden">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 p-5 md:p-6">

          {/* Icon */}
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ background: '#E98C2820' }}
            aria-hidden="true"
          >
            <svg className="w-5 h-5" style={{ color: '#E98C28' }} fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a8 8 0 100 16A8 8 0 0010 2zm0 14a6 6 0 110-12 6 6 0 010 12zm0-9a1 1 0 011 1v4a1 1 0 11-2 0V8a1 1 0 011-1zm0-2a1 1 0 100 2 1 1 0 000-2z"/>
            </svg>
          </div>

          {/* Text */}
          <div className="flex-1 min-w-0">
            <p className="text-sm text-gray-100 leading-relaxed">
              We use cookies to remember your preferences and to understand how visitors use our site (via Google Analytics). We never sell your data.{' '}
              <Link
                href="/privacy"
                className="underline hover:text-[#E98C28] transition-colors"
                aria-label="Read our privacy policy"
              >
                Privacy Policy
              </Link>
              {' '}·{' '}
              <Link
                href="/terms"
                className="underline hover:text-[#E98C28] transition-colors"
                aria-label="Read our terms of service"
              >
                Terms
              </Link>
            </p>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              onClick={handleDecline}
              className="text-sm text-gray-400 hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-gray-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Decline non-essential cookies"
            >
              Decline
            </button>
            <button
              onClick={handleAccept}
              className="text-sm font-semibold text-gray-900 px-5 py-2 rounded-lg transition-all hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#E98C28]"
              style={{ background: '#E98C28', fontFamily: 'Space Grotesk, sans-serif' }}
              aria-label="Accept all cookies"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Utility: check if analytics consent has been given
export function hasAnalyticsConsent(): boolean {
  return localStorage.getItem(STORAGE_KEY) === 'accepted';
}
